import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
  verification: {
    other: { 'yandex-verification': ['76e0e8a0fe41006b'] },
  },
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

        {/* Яндекс.Метрика — SPA режим */}
        <Script id="ym-init" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107242407','ym');
            ym(107242407,'init',{
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/107242407" style={{position:'absolute',left:'-9999px'}} alt="" />
          </div>
        </noscript>

      </body>
    </html>
  )
}
