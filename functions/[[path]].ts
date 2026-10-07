const UPSTREAM = 'https://studio.engine.io'

const ALLOWED_SLUGS = new Set([
  'oktobercat',
  'vice-heat-cat',
  'ancient-rus',
  'lizard-kings-gold',
  'hollow-cat',
])

const SHARE_PATH = /^\/share\/ak-games\/([a-z0-9-]+)(\/[^/?#]*)*$/
const ENGINE_PREFIXES = ['/_app/', '/engine-', '/share/', '/api/']

const REQUEST_HEADERS = ['accept', 'accept-language', 'if-none-match', 'if-modified-since']
const RESPONSE_HEADERS = ['content-type', 'cache-control', 'etag', 'last-modified', 'vary']

const DEMO_CSP = [
  `default-src 'self' data: blob: ${UPSTREAM}`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' ${UPSTREAM} https://www.googletagmanager.com`,
  `style-src 'self' 'unsafe-inline' ${UPSTREAM} https://fonts.googleapis.com`,
  `img-src 'self' data: https: blob:`,
  `media-src 'self' blob: https:`,
  `font-src 'self' data: https://fonts.gstatic.com`,
  `connect-src 'self' https: http: data:`,
  `frame-src 'self' data: blob: https: http:`,
  'frame-ancestors https://ak-games.com https://ak-games-8lx.pages.dev https://*.ak-games-8lx.pages.dev http://localhost:8788 http://127.0.0.1:8788',
].join('; ')

const isEnginePath = (pathname: string) => {
  if (pathname === '/api/contact') return false

  const sharePath = pathname.startsWith('/api/') ? pathname.slice(4) : pathname
  if (sharePath === '/share' || sharePath.startsWith('/share/')) {
    const match = sharePath.match(SHARE_PATH)
    return Boolean(match && ALLOWED_SLUGS.has(match[1]))
  }

  return ENGINE_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

export const onRequest = async ({ request, env }: { request: Request; env: { ASSETS: { fetch: (input: Request | string) => Promise<Response> } } }) => {
  const url = new URL(request.url)

  if (!isEnginePath(url.pathname)) {
    return env.ASSETS.fetch(request)
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('method not allowed', { status: 405, headers: { allow: 'GET, HEAD' } })
  }

  const headers = new Headers()
  for (const name of REQUEST_HEADERS) {
    const value = request.headers.get(name)
    if (value) headers.set(name, value)
  }
  headers.set('accept-encoding', 'identity')

  let upstream: Response
  try {
    upstream = await fetch(UPSTREAM + url.pathname + url.search, {
      method: request.method,
      headers,
      redirect: 'manual',
    })
  } catch {
    return new Response('upstream unavailable', { status: 502 })
  }

  const out = new Headers()
  for (const name of RESPONSE_HEADERS) {
    const value = upstream.headers.get(name)
    if (value) out.set(name, value)
  }
  out.set('x-robots-tag', 'noindex')

  if (request.method === 'HEAD') {
    return new Response(null, { status: upstream.status, headers: out })
  }

  const contentType = upstream.headers.get('content-type') ?? ''
  if (!contentType.includes('text/html')) {
    return new Response(upstream.body, { status: upstream.status, headers: out })
  }

  const html = await upstream.text()
  // Hide Engine share chrome (48px "Game by Studio" header). Without this the
  // nested game canvas is shorter than Stake's documented iframe sizes and the
  // board shifts — especially visible on Hollow Cat / Vice Heat Cat.
  const chromeFix =
    '<style id="ak-demo-chrome-fix">' +
    'body .fixed.inset-0.flex.flex-col > header{display:none!important;height:0!important;min-height:0!important;overflow:hidden!important;border:0!important;padding:0!important;margin:0!important}' +
    'html,body{margin:0;padding:0;overflow:hidden;background:#000}' +
    '</style>'

  const cleaned = html
    .replace(/<meta\s+http-equiv="Content-Security-Policy"[^>]*>/gi, '')
    .replace(/<base\b[^>]*>/gi, '')
    .replace(/<\/head>/i, `${chromeFix}</head>`)

  out.set('content-type', 'text/html; charset=utf-8')
  out.set('content-security-policy', DEMO_CSP)

  return new Response(cleaned, { status: upstream.status, headers: out })
}
