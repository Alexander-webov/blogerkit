'use client'

import { useSearchParams, useRouter } from 'next/navigation'

const PRICES: Record<string, { label: string; price: number }> = {
  'channel-analysis': { label: 'Анализ YouTube канала', price: 49  },
  'mediakit':         { label: 'Медиакит PDF',           price: 149 },
  'crop-pro':         { label: 'Видеоредактор Pro',      price: 149 },
}

export default function DemoPaymentClient() {
  const params     = useSearchParams()
  const router     = useRouter()
  const product    = params.get('product')    || ''
  const orderId    = params.get('orderId')    || ''
  const returnUrl  = params.get('returnUrl')  || '/'
  const p = PRICES[product] || { label: product, price: 0 }

  async function simulatePay() {
    const url = new URL(returnUrl, window.location.origin)
    url.searchParams.set('paid', '1')
    url.searchParams.set('product', product)
    url.searchParams.set('orderId', orderId)
    router.push(url.pathname + url.search)
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="bg-surface border border-border rounded-3xl p-8 max-w-sm w-full text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs mb-6">
          🧪 Тестовый режим — деньги не списываются
        </div>
        <div className="text-4xl mb-4">💳</div>
        <h1 className="font-heading text-xl font-black mb-1">Оплата</h1>
        <div className="text-muted text-sm mb-3">{p.label}</div>
        <div className="font-heading text-4xl font-black text-yellow-400 mb-6">{p.price} ₽</div>
        <button onClick={simulatePay}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-sm rounded-xl hover:opacity-90 transition-all">
          ✓ Симулировать оплату
        </button>
        <p className="text-muted text-xs mt-3">
          Добавь <code className="bg-white/10 px-1 rounded">PRODAMUS_SHOP_URL</code> в .env.local для реальных платежей
        </p>
      </div>
    </div>
  )
}
