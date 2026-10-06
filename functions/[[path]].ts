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

export const onRequest = async ({
  request,
  env
}: {
  request: Request
  env: { ASSETS: { fetch: (input: Request | string) => Promise<Response> } }
}) => {
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
      redirect: 'manual'
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
  // Keep Engine share chrome (48px title bar). Only fix iOS iframe quirks:
  // fixed + 100dvh / safe-area inside nested iframes mis-measure height and
  // clip the board + header. Never remove the header.
  const chromeFix = [
    '<style id="ak-demo-chrome-fix">',
    'html,body{width:100%!important;height:100%!important;min-height:0!important;max-height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;background:#000!important}',
    'body[style]{min-height:0!important;height:100%!important}',
    'body .fixed.inset-0.flex.flex-col{position:absolute!important;inset:0!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important;max-height:100%!important;margin:0!important;padding:0!important;transform:none!important;display:flex!important;flex-direction:column!important}',
    'body .fixed.inset-0.flex.flex-col > header{display:flex!important;height:3rem!important;min-height:3rem!important;max-height:3rem!important;flex:0 0 3rem!important;overflow:visible!important;padding-left:0.75rem!important;padding-right:0.75rem!important;box-sizing:border-box!important}',
    'body .fixed.inset-0.flex.flex-col > header .truncate{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;min-width:0!important;flex:1 1 auto!important}',
    /* On narrow mobile presets, drop "by Studio" so the game title is not cut to "AK Ga..." */
    '@media (max-width:420px){body .fixed.inset-0.flex.flex-col > header .text-muted-foreground{display:none!important}}',
    'body .fixed.inset-0.flex.flex-col > main{position:relative!important;flex:1 1 auto!important;min-height:0!important;height:auto!important;padding:0!important;margin:0!important}',
    'body .fixed.inset-0.flex.flex-col > main > iframe{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;border:0!important}',
    '</style>',
    '<script id="ak-demo-ios-fit">(function(){',
    'var t;',
    'function fit(){',
    'var root=document.querySelector(".fixed.inset-0.flex.flex-col");',
    'if(!root)return;',
    'var w=window.innerWidth||document.documentElement.clientWidth;',
    'var ht=window.innerHeight||document.documentElement.clientHeight;',
    'root.style.cssText="position:absolute;inset:0;top:0;left:0;width:"+w+"px;height:"+ht+"px;padding:0;margin:0;max-height:"+ht+"px;display:flex;flex-direction:column";',
    'document.documentElement.style.height=ht+"px";',
    'document.body.style.cssText="margin:0;padding:0;overflow:hidden;width:"+w+"px;height:"+ht+"px;min-height:0";',
    '}',
    'function schedule(){clearTimeout(t);t=setTimeout(fit,40);}',
    'fit();',
    'window.addEventListener("resize",schedule,{passive:true});',
    'window.addEventListener("orientationchange",function(){setTimeout(fit,80);});',
    'window.addEventListener("load",fit);',
    'if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",fit);',
    'setTimeout(fit,120);setTimeout(fit,600);',
    '})();</script>'
  ].join('')

  const cleaned = html
    .replace(/<meta\s+http-equiv="Content-Security-Policy"[^>]*>/gi, '')
    .replace(/<base\b[^>]*>/gi, '')
    .replace(/<\/head>/i, `${chromeFix}</head>`)

  out.set('content-type', 'text/html; charset=utf-8')
  out.set('content-security-policy', DEMO_CSP)

  return new Response(cleaned, { status: upstream.status, headers: out })
}
