'use client'
import { useState, useEffect, useCallback } from 'react'

export type ProductId = 'channel-analysis' | 'mediakit' | 'crop-pro'

export const PRODUCTS: Record<ProductId, { name: string; price: number; label: string }> = {
  'channel-analysis': { name: 'Анализ YouTube канала',         price: 49,  label: '49 ₽' },
  'mediakit':         { name: 'Медиакит PDF для блогера',       price: 149, label: '149 ₽' },
  'crop-pro':         { name: 'Видеоредактор Pro — нарезка, субтитры, фильтры', price: 149, label: '149 ₽' },
}

function storageKey(product: ProductId) {
  return `bk_paid_${product}`
}

export function usePayment(product: ProductId) {
  const [paid,     setPaid]     = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [showPay,  setShowPay]  = useState(false)
  const [error,    setError]    = useState('')

  // Check localStorage on mount (persists across page refreshes)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey(product))
      if (stored === '1') setPaid(true)
    } catch {}

    // Check URL params — payment redirect back
    const params = new URLSearchParams(window.location.search)
    if (params.get('paid') === '1' && params.get('product') === product) {
      setPaid(true)
      try { localStorage.setItem(storageKey(product), '1') } catch {}
      // Clean URL
      const url = new URL(window.location.href)
      url.searchParams.delete('paid')
      url.searchParams.delete('product')
      url.searchParams.delete('orderId')
      window.history.replaceState({}, '', url.toString())
    }
  }, [product])

  const startPayment = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const orderId   = `${product}-${Date.now()}`
      const returnUrl = window.location.href

      const res = await fetch('/api/payment/create', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product:   PRODUCTS[product].name,
          amount:    PRODUCTS[product].price,
          orderId,
          returnUrl,
        }),
      })
      const data = await res.json()
      if (data.payUrl) {
        window.location.href = data.payUrl
      } else {
        throw new Error(data.error || 'Ошибка создания платежа')
      }
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
    }
  }, [product])

  return { paid, loading, showPay, setShowPay, startPayment, error, info: PRODUCTS[product] }
}
