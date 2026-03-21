'use client'
import { useState, useEffect, useCallback } from 'react'

export type ProductId = 'channel-analysis' | 'mediakit' | 'crop-pro' | 'analyze'

export const PRODUCTS: Record<ProductId, { name: string; price: number; label: string }> = {
  'channel-analysis': { name: 'Анализ YouTube канала',     price: 149, label: '149 ₽' },
  'mediakit':         { name: 'Медиакит PDF для блогера',   price: 149, label: '149 ₽' },
  'crop-pro':         { name: 'Видеоредактор Pro',          price: 149, label: '149 ₽' },
  'analyze':          { name: 'Анализ конкурентов YouTube', price: 149, label: '149 ₽' },
}

function paidKey(p: ProductId) { return `bk_paid_${p}` }
function stateKey(p: ProductId) { return `bk_state_${p}` }
function pidKey(p: ProductId)   { return `bk_pid_${p}` }

export function saveStateBeforePayment(product: ProductId, state: unknown) {
  try { sessionStorage.setItem(stateKey(product), JSON.stringify(state)) } catch {}
}
export function restoreStateAfterPayment<T>(product: ProductId): T | null {
  try { const r = sessionStorage.getItem(stateKey(product)); return r ? JSON.parse(r) : null } catch { return null }
}
export function clearSavedState(product: ProductId) {
  try { sessionStorage.removeItem(stateKey(product)) } catch {}
}

export function usePayment(product: ProductId) {
  const [paid,      setPaid]      = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [showPay,   setShowPay]   = useState(false)
  const [error,     setError]     = useState('')
  const [justPaid,  setJustPaid]  = useState(false)

  useEffect(() => {
    // 1. Уже оплачено раньше
    try {
      if (localStorage.getItem(paidKey(product)) === '1') {
        console.log(`[payment] ${product}: already paid (localStorage)`)
        setPaid(true); return
      }
    } catch {}

    const params  = new URLSearchParams(window.location.search)
    const urlProd = params.get('product')

    console.log(`[payment] ${product}: URL params:`, Object.fromEntries(params))
    console.log(`[payment] ${product}: localStorage pid:`, (() => { try { return localStorage.getItem(pidKey(product)) } catch { return null } })())

    // 2. Демо режим
    if (params.get('paid') === '1' && urlProd === product) {
      console.log(`[payment] ${product}: demo payment confirmed`)
      unlock(product, setPaid, setJustPaid)
      cleanUrl(['paid', 'product'])
      return
    }

    // 3. Возврат с ЮКасса — есть ?product= в URL
    // Сначала проверяем payment_id, потом делаем запрос к ЮКасса
    const savedPid = (() => { try { return localStorage.getItem(pidKey(product)) } catch { return null } })()

    if (urlProd === product && savedPid) {
      console.log(`[payment] ${product}: returned from YooKassa, verifying pid:`, savedPid)
      cleanUrl(['product', 'payment_id'])
      setVerifying(true)

      fetch(`/api/payment/verify?payment_id=${savedPid}`)
        .then(r => {
          console.log(`[payment] verify response status:`, r.status)
          return r.json()
        })
        .then(data => {
          console.log(`[payment] verify data:`, data)
          if (data.paid === true && data.status === 'succeeded') {
            console.log(`[payment] ${product}: CONFIRMED ✅`)
            unlock(product, setPaid, setJustPaid)
          } else {
            console.log(`[payment] ${product}: NOT confirmed, status:`, data.status)
            // Удаляем pid только если платёж точно отменён
            if (data.status === 'canceled') {
              try { localStorage.removeItem(pidKey(product)) } catch {}
            }
          }
        })
        .catch(err => {
          console.error(`[payment] verify error:`, err)
        })
        .finally(() => setVerifying(false))
      return
    }

    // 4. Есть pid в localStorage но нет product в URL (ЮКасса не передал параметр)
    if (savedPid && !urlProd) {
      console.log(`[payment] ${product}: found pid without product param, verifying...`)
      setVerifying(true)
      fetch(`/api/payment/verify?payment_id=${savedPid}`)
        .then(r => r.json())
        .then(data => {
          console.log(`[payment] fallback verify:`, data)
          if (data.paid === true && data.status === 'succeeded') {
            unlock(product, setPaid, setJustPaid)
          } else if (data.status === 'canceled') {
            try { localStorage.removeItem(pidKey(product)) } catch {}
          }
        })
        .catch(console.error)
        .finally(() => setVerifying(false))
    }
  }, [product])

  const startPayment = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const res  = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, returnUrl: window.location.href }),
      })
      const data = await res.json()
      console.log(`[payment] create response:`, data)
      if (!data.url) throw new Error(data.error || 'Ошибка создания платежа')

      if (data.paymentId) {
        try {
          localStorage.setItem(pidKey(product), data.paymentId)
          console.log(`[payment] saved pid to localStorage:`, data.paymentId)
        } catch {}
      }
      window.location.href = data.url
    } catch (e: any) {
      setError(e.message); setLoading(false)
    }
  }, [product])

  return { paid, loading, verifying, showPay, setShowPay, startPayment, error, info: PRODUCTS[product], justPaid }
}

function unlock(product: ProductId, setPaid: (v: boolean) => void, setJustPaid: (v: boolean) => void) {
  setPaid(true); setJustPaid(true)
  try { localStorage.setItem(paidKey(product), '1') } catch {}
  try { localStorage.removeItem(pidKey(product)) } catch {}
  clearSavedState(product)
  setTimeout(() => setJustPaid(false), 5000)
}

function cleanUrl(params: string[]) {
  try {
    const url = new URL(window.location.href)
    params.forEach(p => url.searchParams.delete(p))
    window.history.replaceState({}, '', url.toString())
  } catch {}
}
