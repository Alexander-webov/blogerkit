'use client'
import { useState, useEffect, useCallback } from 'react'

export type ProductId = 'channel-analysis' | 'mediakit' | 'crop-pro' | 'analyze'

export const PRODUCTS: Record<ProductId, { name: string; price: number; label: string }> = {
  'channel-analysis': { name: 'Анализ YouTube канала',     price: 149, label: '149 ₽' },
  'mediakit':         { name: 'Медиакит PDF для блогера',   price: 149, label: '149 ₽' },
  'crop-pro':         { name: 'Видеоредактор Pro',          price: 149, label: '149 ₽' },
  'analyze':          { name: 'Анализ конкурентов YouTube', price: 149, label: '149 ₽' },
}

function paidKey  (p: ProductId) { return `bk_paid_${p}` }
function stateKey (p: ProductId) { return `bk_state_${p}` }
function pidKey   (p: ProductId) { return `bk_pid_${p}` }  // localStorage — переживает редирект

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
    return data.paid === true && data.status === 'succeeded'
  } catch {
    return false
  }
}

function confirmPaid(product: ProductId, setPaid: (v: boolean) => void, setJustPaid: (v: boolean) => void) {
  setPaid(true)
  setJustPaid(true)
  try { localStorage.setItem(paidKey(product), '1') } catch {}
  // Удаляем pending pid
  try { localStorage.removeItem(pidKey(product)) } catch {}
  clearSavedState(product)
  setTimeout(() => setJustPaid(false), 5000)
}

export function usePayment(product: ProductId) {
  const [paid,      setPaid]      = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [showPay,   setShowPay]   = useState(false)
  const [error,     setError]     = useState('')
  const [justPaid,  setJustPaid]  = useState(false)

  useEffect(() => {
    // ── 1. Уже оплачено ранее ────────────────────────────────────────────────
    try {
      if (localStorage.getItem(paidKey(product)) === '1') { setPaid(true); return }
    } catch {}

    const params  = new URLSearchParams(window.location.search)
    const urlProd = params.get('product')

    // ── 2. Демо режим (?paid=1 от нашей демо-страницы) ───────────────────────
    if (params.get('paid') === '1' && urlProd === product) {
      cleanUrl(['paid', 'product'])
      confirmPaid(product, setPaid, setJustPaid)
      return
    }

    // ── 3. Возврат с ЮКасса ──────────────────────────────────────────────────
    // payment_id может быть в URL (если передали через return_url)
    // ИЛИ в localStorage (сохранили перед редиректом)
    const urlPaymentId  = params.get('payment_id')
    const savedPid      = (() => { try { return localStorage.getItem(pidKey(product)) } catch { return null } })()
    const paymentId     = urlPaymentId || savedPid

    if (paymentId && urlProd === product) {
      cleanUrl(['payment_id', 'product'])
      setVerifying(true)

      verifyPayment(paymentId).then(success => {
        if (success) {
          confirmPaid(product, setPaid, setJustPaid)
        } else {
          // Не оплачен — данные пользователя остаются, может попробовать снова
          console.log(`Payment ${paymentId} not confirmed`)
          try { localStorage.removeItem(pidKey(product)) } catch {}
        }
      }).catch(() => {
        console.error('Verify failed')
      }).finally(() => {
        setVerifying(false)
      })
      return
    }

    // ── 4. Вернулся без product= в URL, но есть сохранённый pid ─────────────
    // (На случай если ЮКасса вернул на страницу без параметров)
    if (savedPid && !urlProd) {
      setVerifying(true)
      verifyPayment(savedPid).then(success => {
        if (success) confirmPaid(product, setPaid, setJustPaid)
        else try { localStorage.removeItem(pidKey(product)) } catch {}
      }).finally(() => setVerifying(false))
    }
  }, [product])

  const startPayment = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, returnUrl: window.location.href }),
      })
      const data = await res.json()
      if (!data.url) throw new Error(data.error || 'Ошибка создания платежа')

      // Сохраняем payment_id в localStorage (переживает редирект на внешний домен)
      if (data.paymentId) {
        try { localStorage.setItem(pidKey(product), data.paymentId) } catch {}
      }

      window.location.href = data.url
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
    }
  }, [product])

  return { paid, loading, verifying, showPay, setShowPay, startPayment, error, info: PRODUCTS[product], justPaid }
}
