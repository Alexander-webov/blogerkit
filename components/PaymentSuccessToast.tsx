'use client'
import { useEffect, useState } from 'react'

interface Props {
  show: boolean
  productName: string
}

export default function PaymentSuccessToast({ show, productName }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => setVisible(false), 5000)
      return () => clearTimeout(t)
    }
  }, [show])

  if (!visible) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fadeUp">
      <div className="flex items-center gap-3 px-5 py-3.5 bg-green-500/20 border border-green-500/40 rounded-2xl backdrop-blur shadow-2xl max-w-sm">
        <div className="text-2xl flex-shrink-0">🎉</div>
        <div>
          <div className="font-bold text-sm text-white">Оплата прошла успешно!</div>
          <div className="text-green-300 text-xs mt-0.5">{productName} разблокирован</div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="ml-auto text-green-400 hover:text-white text-lg leading-none flex-shrink-0"
        >×</button>
      </div>
    </div>
  )
}
