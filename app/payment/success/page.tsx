import { Suspense } from 'react'
import PaymentSuccessClient from './PaymentSuccessClient'

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg flex items-center justify-center"><div className="w-8 h-8 border-2 border-border border-t-white rounded-full animate-spin"/></div>}>
      <PaymentSuccessClient />
    </Suspense>
  )
}
