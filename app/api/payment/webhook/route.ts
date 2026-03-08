import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  const secretKey = process.env.PRODAMUS_SECRET_KEY || ''
  const body      = await req.text()
  const params    = Object.fromEntries(new URLSearchParams(body))
  const sign      = params.sign
  delete params.sign

  if (secretKey) {
    const sortedKeys = Object.keys(params).sort()
    const signStr    = sortedKeys.map(k => `${k}=${params[k]}`).join('&')
    const expected   = crypto.createHmac('sha256', secretKey).update(signStr).digest('hex')
    if (sign !== expected) {
      console.error('[webhook] Invalid signature')
      return NextResponse.json({ ok: false }, { status: 403 })
    }
  }

  const orderId = params.order_id || ''
  const status  = params.payment_status || ''

  console.log(`[webhook] Order ${orderId} status: ${status}`)

  // Here you would: save to DB, send email, etc.
  // For now just log it

  return NextResponse.json({ ok: true })
}
