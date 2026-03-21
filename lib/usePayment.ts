'use client'
import { useState, useEffect, useCallback } from 'react'

export type ProductId = 'channel-analysis' | 'mediakit' | 'crop-pro' | 'analyze'

export const PRODUCTS: Record<ProductId, { name: string; price: number; label: string }> = {
  'channel-analysis': { name: 'Анализ YouTube канала',     price: 149, label: '149 ₽' },
  'mediakit':         { name: 'Медиакит PDF для блогера',   price: 149, label: '149 ₽' },
  'crop-pro':         { name: 'Видеоредактор Pro',          price: 149, label: '149 ₽' },
  'analyze':          { name: 'Анализ конкурентов YouTube', price: 149,  label: '49 ₽'  },
}

function paidKey      (p: ProductId) { return `bk_paid_${p}` }
function stateKey     (p: ProductId) { return `bk_state_${p}` }
function pendingPidKey(p: ProductId) { return `bk_pid_${p}` }

export function saveStateBeforePayment(product: ProductId, state: unknown) {
  try { sessionStorage.setItem(stateKey(product), JSON.stringify(state)) } catch {}
}

export function restoreStateAfterPayment<T>(product: ProductId): T | null {
  try {
    const raw = sessionStorage.getItem(stateKey(product))
    return raw ? (JSON.parse(raw) as T) : null
  } catch { return null }
}

export function clearSavedState(product: ProductId) {
  try { sessionStorage.removeItem(stateKey(product)) } catch {}
}

function cleanUrl(params: string[]) {
  try {
    const url = new URL(window.location.href)
    params.forEach(p => url.searchParams.delete(p))
    window.history.replaceState({}, '', url.toString())
  } catch {}
}

async function verifyPayment(paymentId: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/payment/verify?payment_id=${paymentId}`)
    if (!res.ok) return false
    const data = await res.json()
    // Платёж успешен ТОЛЬКО если status === 'succeeded' И paid === true
    return data.paid === true && data.status === 'succeeded'
  } catch {
    return false
  }
}

export function usePayment(product: ProductId) {
  const [paid,      setPaid]      = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [showPay,   setShowPay]   = useState(false)
  const [error,     setError]     = useState('')
  const [justPaid,  setJustPaid]  = useState(false)

  useEffect(() => {
    // Уже оплачено ранее
    try {
      if (localStorage.getItem(paidKey(product)) === '1') { setPaid(true); return }
    } catch {}

    const params  = new URLSearchParams(window.location.search)
    const urlProd = params.get('product')

    // ── Демо режим: ?paid=1 (только из нашей демо-страницы) ──────────────────
    if (params.get('paid') === '1' && urlProd === product) {
      cleanUrl(['paid', 'product'])
      setPaid(true); setJustPaid(true)
      try { localStorage.setItem(paidKey(product), '1') } catch {}
      clearSavedState(product)
      setTimeout(() => setJustPaid(false), 5000)
      return
    }

    // ── Возврат с ЮКасса: проверяем payment_id ───────────────────────────────
    // ЮКасса возвращает пользователя на наш return_url
    // Мы заранее сохранили paymentId в sessionStorage перед редиректом
    if (urlProd === product) {
      const savedPid = sessionStorage.getItem(pendingPidKey(product))
      if (savedPid) {
        cleanUrl(['product'])
        setVerifying(true)
        verifyPayment(savedPid).then(success => {
          if (success) {
            // ✅ Платёж реально прошёл — разблокируем
            setPaid(true); setJustPaid(true)
            try { localStorage.setItem(paidKey(product), '1') } catch {}
            clearSavedState(product)
            setTimeout(() => setJustPaid(false), 5000)
          } else {
            // ❌ Не оплачен / отменён / недостаточно средств
            // Данные пользователя сохранены — может попробовать снова
            console.log('Payment not confirmed, access denied')
          }
          // В любом случае удаляем pending pid
          try { sessionStorage.removeItem(pendingPidKey(product)) } catch {}
          setVerifying(false)
        })
      }
    }
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
      if (!data.url) throw new Error(data.error || 'Ошибка создания платежа')

      // Сохраняем payment_id ДО редиректа на ЮКасса
      // После возврата восстановим и проверим статус
      if (data.paymentId) {
        try { sessionStorage.setItem(pendingPidKey(product), data.paymentId) } catch {}
      }

      window.location.href = data.url
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
    }
  }, [product])

  return { paid, loading, verifying, showPay, setShowPay, startPayment, error, info: PRODUCTS[product], justPaid }
}
