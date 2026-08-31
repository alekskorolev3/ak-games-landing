export const onRequestPost = async ({ request, env }: { request: Request; env: { CONTACTS: any } }) => {
  if (request.headers.get('content-type')?.includes('application/json') !== true) {
    return Response.json({ ok: false, error: 'expected JSON' }, { status: 415 })
  }

  let body: { name?: unknown; email?: unknown; message?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'invalid JSON' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: 'name, email and message are required' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: 'invalid email' }, { status: 400 })
  }
  if (name.length > 200 || email.length > 200 || message.length > 4000) {
    return Response.json({ ok: false, error: 'input too long' }, { status: 400 })
  }

  try {
    const key = `contact:${Date.now()}:${crypto.randomUUID()}`
    await env.CONTACTS.put(key, JSON.stringify({ name, email, message, at: new Date().toISOString() }))
    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false, error: 'failed to store' }, { status: 500 })
  }
}
