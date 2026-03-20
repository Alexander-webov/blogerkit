'use client'
import { useState, useEffect, useCallback } from 'react'

export type ProductId = 'channel-analysis' | 'mediakit' | 'crop-pro' | 'analyze'

export const PRODUCTS: Record<ProductId, { name: string; price: number; label: string }> = {
  'channel-analysis': { name: 'Анализ YouTube канала',     price: 149, label: '149 ₽' },
  'mediakit':         { name: 'Медиакит PDF для блогера',   price: 149, label: '149 ₽' },
  'crop-pro':         { name: 'Видеоредактор Pro',          price: 149, label: '149 ₽' },
  'analyze':          { name: 'Анализ конкурентов YouTube', price: 49,  label: '49 ₽'  },
}

function paidKey  (p: ProductId) { return `bk_paid_${p}` }
function stateKey (p: ProductId) { return `bk_state_${p}` }

// ── Save user data before payment redirect ────────────────────────────────────
export function saveStateBeforePayment(product: ProductId, state: unknown) {
  try { sessionStorage.setItem(stateKey(product), JSON.stringify(state)) } catch {}
}

// ── Read saved state — does NOT delete it, so cancel → back still works ───────
export function restoreStateAfterPayment<T>(product: ProductId): T | null {
  try {
    const raw = sessionStorage.getItem(stateKey(product))
    return raw ? (JSON.parse(raw) as T) : null
  } catch { return null }
}

// ── Clear saved state (called only after confirmed payment) ───────────────────
export function clearSavedState(product: ProductId) {
  try { sessionStorage.removeItem(stateKey(product)) } catch {}
}

export function usePayment(product: ProductId) {
  const [paid,     setPaid]     = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [showPay,  setShowPay]  = useState(false)
  const [error,    setError]    = useState('')
  const [justPaid, setJustPaid] = useState(false)

  useEffect(() => {
    // Already paid before (localStorage)
    try {
      if (localStorage.getItem(paidKey(product)) === '1') setPaid(true)
    } catch {}

    const params = new URLSearchParams(window.location.search)
    const returnedPaid    = params.get('paid')    === '1'
    const returnedProduct = params.get('product') === product

    if (returnedPaid && returnedProduct) {
      // ✅ PAYMENT CONFIRMED — unlock, show toast, clear saved state
      setPaid(true)
      setJustPaid(true)
      try { localStorage.setItem(paidKey(product), '1') } catch {}
      clearSavedState(product)
      const url = new URL(window.location.href)
      url.searchParams.delete('paid')
      url.searchParams.delete('product')
      window.history.replaceState({}, '', url.toString())
      setTimeout(() => setJustPaid(false), 5000)
    }
    // ❌ CANCELLED / BACK — state stays in sessionStorage, nothing happens
    // User sees their data restored, can try paying again
  }, [product])

  const startPayment = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/payment/create', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, returnUrl: window.location.href }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'Ошибка создания платежа')
      }
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
    }
  }, [product])

  return { paid, loading, showPay, setShowPay, startPayment, error, info: PRODUCTS[product], justPaid }
}
