import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

const SHOP_ID    = process.env.YOOKASSA_SHOP_ID
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY
const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL || 'https://blogerkit.ru'

const PRODUCTS: Record<string, { amount: number; description: string }> = {
  'channel-analysis': { amount: 149, description: 'Анализ YouTube канала — БлогерКит' },
  'mediakit':         { amount: 149, description: 'Медиакит PDF для блогера — БлогерКит' },
  'crop-pro':         { amount: 149, description: 'Видеоредактор Pro — БлогерКит' },
  'analyze':          { amount: 149, description: 'Анализ конкурентов YouTube — БлогерКит' },
}

export async function POST(req: NextRequest) {
  const { product, returnUrl } = await req.json()
  const item = PRODUCTS[product]
  if (!item) return NextResponse.json({ error: 'Unknown product' }, { status: 400 })

  // Демо режим
  if (!SHOP_ID || !SECRET_KEY) {
    const demoUrl = `${SITE_URL}/payment/demo?product=${product}&returnUrl=${encodeURIComponent(returnUrl || SITE_URL)}`
    return NextResponse.json({ url: demoUrl })
  }

  try {
    const idempotenceKey = randomUUID()

    // Создаём платёж с базовым return_url (без payment_id — его ещё не знаем)
    const baseReturn = returnUrl || `${SITE_URL}/analyze`
    const separator  = baseReturn.includes('?') ? '&' : '?'

    const res = await fetch('https://api.yookassa.ru/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type':    'application/json',
        'Idempotence-Key': idempotenceKey,
        'Authorization':   'Basic ' + Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString('base64'),
      },
      body: JSON.stringify({
        amount:       { value: item.amount.toFixed(2), currency: 'RUB' },
        confirmation: {
          type:       'redirect',
          // Передаём product чтобы на странице знать какой продукт проверять
          // payment_id клиент сохранит в localStorage сам перед редиректом
          return_url: `${baseReturn}${separator}product=${product}`,
        },
        capture:     true,
        description: item.description,
        metadata:    { product },
      }),
    })

    const payment = await res.json()
    if (!res.ok) throw new Error(payment.description || 'ЮКасса error')

    // Возвращаем клиенту URL оплаты + payment_id
    // Клиент сохранит payment_id в localStorage ПЕРЕД редиректом
    return NextResponse.json({
      url:       payment.confirmation.confirmation_url,
      paymentId: payment.id,
    })

  } catch (e: any) {
    console.error('YooKassa error:', e.message)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
