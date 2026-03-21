import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

const SHOP_ID    = process.env.YOOKASSA_SHOP_ID
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY
const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL || 'https://blogerkit.ru'

const PRODUCTS: Record<string, { amount: number; description: string }> = {
  'channel-analysis': { amount: 149, description: 'Анализ YouTube канала — БлогерКит' },
  'mediakit':         { amount: 149, description: 'Медиакит PDF для блогера — БлогерКит' },
  'crop-pro':         { amount: 149, description: 'Видеоредактор Pro — БлогерКит' },
  'analyze':          { amount: 49,  description: 'Анализ конкурентов YouTube — БлогерКит' },
}

export async function POST(req: NextRequest) {
  const { product, returnUrl } = await req.json()
  const item = PRODUCTS[product]
  if (!item) return NextResponse.json({ error: 'Unknown product' }, { status: 400 })

  // Без ключей — демо режим
  if (!SHOP_ID || !SECRET_KEY) {
    const demoUrl = `${SITE_URL}/payment/demo?product=${product}&returnUrl=${encodeURIComponent(returnUrl || SITE_URL)}`
    return NextResponse.json({ url: demoUrl })
  }

  try {
    // Сначала создаём платёж чтобы получить ID,
    // затем используем этот ID в return_url для проверки статуса
    const baseReturnUrl = returnUrl || SITE_URL
    // Placeholder — заменим на реальный ID после создания
    const placeholderReturn = `${baseReturnUrl}${baseReturnUrl.includes('?') ? '&' : '?'}product=${product}&payment_id=__PAYMENT_ID__`

    const res = await fetch('https://api.yookassa.ru/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': randomUUID(),
        'Authorization': 'Basic ' + Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString('base64'),
      },
      body: JSON.stringify({
        amount: { value: item.amount.toFixed(2), currency: 'RUB' },
        confirmation: {
          type: 'redirect',
          // return_url с placeholder — ЮКасса вернёт пользователя сюда
          // но мы отдаём клиенту реальный payment_id отдельно
          return_url: `${baseReturnUrl}${baseReturnUrl.includes('?') ? '&' : '?'}product=${product}`,
        },
        capture: true,
        description: item.description,
        metadata: { product },
      }),
    })

    const payment = await res.json()
    if (!res.ok) throw new Error(payment.description || 'ЮКасса error')

    // Возвращаем клиенту и URL оплаты и payment_id
    // Клиент сохранит payment_id в sessionStorage
    // После возврата — сам подставит в запрос к /api/payment/verify
    return NextResponse.json({
      url:       payment.confirmation.confirmation_url,
      paymentId: payment.id,
    })

  } catch (e: any) {
    console.error('YooKassa error:', e.message)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
