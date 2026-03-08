import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Prodamus payment creation
// Docs: https://prodamus.ru/docs/api/
// Self-employed friendly, no ИП needed

export async function POST(req: NextRequest) {
  const { product, amount, orderId, returnUrl } = await req.json()

  const shopUrl    = process.env.PRODAMUS_SHOP_URL    // e.g. https://myblog.payform.ru
  const secretKey  = process.env.PRODAMUS_SECRET_KEY  // from Prodamus dashboard

  if (!shopUrl || !secretKey) {
    // DEV MODE: return mock payment URL for local testing
    console.warn('[payment] Prodamus not configured — returning dev mock')
    return NextResponse.json({
      payUrl:  `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/payment/mock?orderId=${orderId}&product=${product}&returnUrl=${encodeURIComponent(returnUrl)}`,
      orderId,
    })
  }

  // Build Prodamus payment link
  const params: Record<string, string> = {
    order_id:         orderId,
    order_num:        orderId,
    customer_phone:   '',
    products:         JSON.stringify([{ name: product, price: String(amount), quantity: '1' }]),
    urlReturn:        returnUrl,
    urlSuccess:       returnUrl,
    urlNotification:  `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/webhook`,
    do:               'link',
  }

  // Sign request
  const sortedKeys = Object.keys(params).sort()
  const signStr    = sortedKeys.map(k => `${k}=${params[k]}`).join('&')
  const sign       = crypto.createHmac('sha256', secretKey).update(signStr).digest('hex')
  params.sign      = sign

  const qs  = new URLSearchParams(params).toString()
  const url = `${shopUrl}?${qs}`

  return NextResponse.json({ payUrl: url, orderId })
}
