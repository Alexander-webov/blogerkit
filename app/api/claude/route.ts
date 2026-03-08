import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY || ''

  // Validate key — must be ASCII-only and look like a real Anthropic key
  const isValidKey = /^sk-ant-[a-zA-Z0-9\-_]{10,}$/.test(apiKey)

  if (!isValidKey) {
    console.error('[/api/claude] Invalid or missing ANTHROPIC_API_KEY:', apiKey.slice(0, 20))
    return NextResponse.json(
      { error: { message: 'ANTHROPIC_API_KEY не настроен. Получи ключ на console.anthropic.com/settings/keys и вставь в .env.local' } },
      { status: 500 }
    )
  }

  let body: any
  try { body = await req.json() }
  catch { return NextResponse.json({ error: { message: 'Invalid JSON' } }, { status: 400 }) }

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         apiKey,           // guaranteed ASCII now
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (!res.ok) {
      console.error('[/api/claude] Anthropic error:', res.status, data)
      return NextResponse.json(data, { status: res.status })
    }
    return NextResponse.json(data)
  } catch (e: any) {
    console.error('[/api/claude] fetch error:', e.message)
    return NextResponse.json({ error: { message: e.message || 'Network error' } }, { status: 500 })
  }
}
