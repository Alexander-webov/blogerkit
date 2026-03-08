'use client'
import { ProductId, PRODUCTS, usePayment } from '@/lib/usePayment'

interface Props {
  product: ProductId
  features: string[]
  onClose: () => void
  onPaid:  () => void
}

export default function PaywallModal({ product, features, onClose, onPaid }: Props) {
  const { startPayment, loading, error, info } = usePayment(product)

  const icons: Record<ProductId, string> = {
    'channel-analysis': '📡',
    'mediakit':         '📄',
    'crop-pro':         '✂️',
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-surface border border-border rounded-3xl p-8 max-w-sm w-full text-center">
        <div className="text-4xl mb-3">{icons[product]}</div>
        <div className="font-heading text-lg font-black mb-2">{info.name}</div>
        <p className="text-muted text-xs mb-4">Оплата картой или СБП — мгновенный доступ</p>

        <div className="font-heading text-5xl font-black text-yellow-400 mb-0.5">{info.label}</div>
        <div className="text-muted text-xs mb-5">разовый платёж · доступ навсегда</div>

        <div className="text-left text-xs space-y-1.5 mb-5">
          {features.map(f => (
            <div key={f} className="flex gap-2 items-start">
              <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              <span className="text-muted">{f}</span>
            </div>
          ))}
        </div>

        {error && <div className="text-red-400 text-xs mb-3 p-2 bg-red-500/10 rounded-lg">{error}</div>}

        <button
          onClick={startPayment}
          disabled={loading}
          className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-sm rounded-xl mb-2 hover:opacity-90 transition-all disabled:opacity-50">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Перенаправляю...
            </span>
          ) : `💳 Оплатить ${info.label} → Получить доступ`}
        </button>

        <div className="flex items-center justify-center gap-3 mb-3">
          <img src="https://cdn.worldvectorlogo.com/logos/visa-2.svg"     alt="Visa"       className="h-4 opacity-60" />
          <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="Mastercard" className="h-5 opacity-60" />
          <span className="text-muted text-xs">СБП</span>
          <span className="text-muted text-xs">Мир</span>
        </div>

        <div className="text-muted text-xs mb-3">
          Безопасная оплата через Prodamus · доступ сразу после оплаты
        </div>

        <button onClick={onClose} className="w-full py-2 text-muted text-xs hover:text-white transition-colors">
          Отмена
        </button>
      </div>
    </div>
  )
}
