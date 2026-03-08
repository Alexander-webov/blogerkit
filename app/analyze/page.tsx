import type { Metadata } from 'next'
import AnalyzeTool from './AnalyzeTool'

export const metadata: Metadata = {
  title: 'Анализ конкурентов YouTube — реальные данные бесплатно',
  description: 'Анализируй конкурентов на YouTube. Топ видео по любой нише, просмотры, лайки, паттерны заголовков, лучшее время публикации. Реальные данные через YouTube API.',
  keywords: ['анализ конкурентов youtube', 'топ видео youtube ниша', 'как найти конкурентов youtube', 'анализ ниши youtube 2025'],
  alternates: { canonical: 'https://blogerkit.ru/analyze' },
  openGraph: {
    title: 'Анализ конкурентов YouTube — БлогерКит',
    description: 'Введи нишу — получи топ видео конкурентов с реальными данными по просмотрам и анализом паттернов.',
    url: 'https://blogerkit.ru/analyze',
  },
}

export default function AnalyzePage() {
  return (
    <>
      {/* SEO H1 — видно поисковикам, красиво для пользователей */}
      <div className="sr-only">
        <h1>Анализ конкурентов на YouTube — реальные данные по просмотрам и лайкам</h1>
      </div>
      <AnalyzeTool />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Анализ конкурентов YouTube — БлогерКит',
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '29', priceCurrency: 'RUB' },
          description: 'Анализ топ видео конкурентов на YouTube по любой нише. Реальные данные через YouTube API.',
        })}}
      />
    </>
  )
}
