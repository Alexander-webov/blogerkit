import { NextRequest, NextResponse } from 'next/server'

const SHOP_ID    = process.env.YOOKASSA_SHOP_ID
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const paymentId = searchParams.get('payment_id')

  if (!paymentId) {
    return NextResponse.json({ error: 'payment_id required' }, { status: 400 })
  }

  // Демо режим — нет ключей
  if (!SHOP_ID || !SECRET_KEY) {
    return NextResponse.json({ status: 'pending', paid: false })
  }

  try {
    const res = await fetch(`https://api.yookassa.ru/v3/payments/${paymentId}`, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString('base64'),
      },
    })
    if (!res.ok) throw new Error('ЮКасса API error')

    const payment = await res.json()

    return NextResponse.json({
      status: payment.status,          // pending | waiting_for_capture | succeeded | canceled
      paid:   payment.paid === true,   // true только если реально оплачено
      product: payment.metadata?.product || null,
    })
  } catch (e: any) {
    console.error('Verify error:', e.message)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
