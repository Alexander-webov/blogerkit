import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://blogerkit.ru'),
  title: {
    default: 'БлогерКит — инструменты для блогеров YouTube, TikTok, Telegram',
    template: '%s | БлогерКит',
  },
  description: 'Бесплатные инструменты для блогеров: конструктор обложек YouTube, анализ конкурентов, калькулятор стоимости рекламы, советы по продвижению в 2025 году.',
  keywords: [
    'инструменты для блогеров',
    'конструктор обложек youtube',
    'анализ конкурентов youtube',
    'калькулятор рекламы блогер',
    'как продвинуть youtube канал',
    'сколько стоит реклама у блогера',
    'обложка для youtube бесплатно',
    'кроп видео для shorts',
  ],
  authors: [{ name: 'БлогерКит', url: 'https://blogerkit.ru' }],
  creator: 'БлогерКит',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://blogerkit.ru',
    siteName: 'БлогерКит',
    title: 'БлогерКит — все инструменты блогера в одном месте',
    description: 'Бесплатные инструменты для блогеров: обложки, анализ конкурентов, калькулятор рекламы, советы по продвижению.',
    images: [{ url: '/og/main.png', width: 1200, height: 630, alt: 'БлогерКит' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'БлогерКит — инструменты для блогеров',
    description: 'Конструктор обложек, анализ конкурентов, калькулятор рекламы и советы по продвижению.',
    images: ['/og/main.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://blogerkit.ru',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-bg text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
