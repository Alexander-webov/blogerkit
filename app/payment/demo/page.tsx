'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function DemoPayment() {
  const params      = useSearchParams()
  const router      = useRouter()
  const product     = params.get('product') || ''
  const orderId     = params.get('orderId') || ''
  const successUrl  = params.get('successUrl') || '/'
  const [loading, setLoading] = useState(false)

  const PRICES: Record<string, { label: string; price: number }> = {
    'channel-analysis': { label: 'Анализ YouTube канала',    price: 49  },
    'mediakit':         { label: 'Медиакит PDF',              price: 149 },
    'pro-video':        { label: 'Видеоредактор Pro',         price: 149 },
    'pro-monthly':      { label: 'БлогерКит Pro',             price: 149 },
  }

  const p = PRICES[product] || { label: product, price: 0 }

  async function simulatePay() {
    setLoading(true)
    // Simulate webhook call
    await fetch('/api/payment/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ order_id: orderId, payment_status: 'success' }),
    })
    await new Promise(r => setTimeout(r, 800))
    router.push(successUrl + (successUrl.includes('?') ? '&' : '?') + `paid=1&order=${orderId}`)
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="bg-surface border border-border rounded-3xl p-8 max-w-sm w-full text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs mb-6">
          🧪 Тестовый режим — реальные деньги не списываются
        </div>
        <div className="text-4xl mb-4">💳</div>
        <h1 className="font-heading text-xl font-black mb-1">Оплата</h1>
        <div className="text-muted text-sm mb-4">{p.label}</div>
        <div className="font-heading text-4xl font-black text-yellow-400 mb-2">{p.price} ₽</div>

        <div className="bg-card border border-border rounded-xl p-4 mb-6 text-left">
          <div className="text-muted text-xs mb-3">Данные карты (тест)</div>
          <div className="space-y-2">
            <div className="px-3 py-2 bg-surface rounded-lg border border-border text-sm font-mono">4242 4242 4242 4242</div>
            <div className="flex gap-2">
              <div className="flex-1 px-3 py-2 bg-surface rounded-lg border border-border text-sm font-mono">12/99</div>
              <div className="flex-1 px-3 py-2 bg-surface rounded-lg border border-border text-sm font-mono">123</div>
            </div>
          </div>
        </div>

        <button onClick={simulatePay} disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-sm rounded-xl hover:opacity-90 transition-all disabled:opacity-50">
          {loading ? '⏳ Обработка...' : `Оплатить ${p.price} ₽`}
        </button>
        <p className="text-muted text-xs mt-3">
          Это демо-страница. Подключи Prodamus в <code className="bg-white/10 px-1 rounded">.env.local</code> для реальных платежей.
        </p>
      </div>
    </div>
  )
}
