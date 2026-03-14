import { Suspense } from 'react'
import type { Metadata } from 'next'
import DemoPaymentClient from './DemoPaymentClient'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function DemoPaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg flex items-center justify-center"><div className="w-8 h-8 border-2 border-border border-t-white rounded-full animate-spin"/></div>}>
      <DemoPaymentClient />
    </Suspense>
  )
}
