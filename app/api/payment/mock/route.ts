import { NextRequest, NextResponse } from 'next/server'

// DEV ONLY: simulate successful payment and redirect
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const returnUrl = searchParams.get('returnUrl') || '/'
  const product   = searchParams.get('product')   || ''
  const orderId   = searchParams.get('orderId')   || ''

  // Redirect to return URL with success params
  const url = new URL(returnUrl, process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
  url.searchParams.set('paid',    '1')
  url.searchParams.set('product', product)
  url.searchParams.set('orderId', orderId)

  return NextResponse.redirect(url.toString())
}
