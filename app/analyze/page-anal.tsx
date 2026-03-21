import type { Metadata } from 'next'
import AnalyzeTool from './AnalyzeTool'

export const metadata: Metadata = {
  title: 'Анализ конкурентов YouTube — топ видео по любой нише, бесплатно',
  description: 'Введи нишу — получи топ видео конкурентов на YouTube с реальной статистикой: просмотры, лайки, время публикации. Без регистрации. Данные через YouTube API.',
  keywords: ['анализ конкурентов youtube', 'топ видео youtube ниша', 'как найти конкурентов youtube', 'анализ ниши youtube', 'популярные видео youtube по теме'],
  alternates: { canonical: 'https://blogerkit.ru/analyze' },
  openGraph: {
    title: 'Анализ конкурентов YouTube — топ видео по нише',
    description: 'Введи нишу — получи топ видео конкурентов с реальными данными. Без регистрации.',
    url: 'https://blogerkit.ru/analyze',
  },
}

export default function AnalyzePage() {
  return (
    <>
      <div className="sr-only">
        <h1>Анализ конкурентов на YouTube — реальные данные по просмотрам и лайкам</h1>
      </div>
      <AnalyzeTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Зачем анализировать конкурентов на YouTube?</h2>
        <p>Анализ конкурентов — первый шаг любого успешного YouTube-канала. Он показывает какие темы работают в твоей нише, какие заголовки получают больше кликов, и в какое время лучше публиковать видео. Вместо того чтобы угадывать — ты смотришь на реальные данные.</p>
        <h2 className="text-white font-bold text-base">Как работает инструмент анализа?</h2>
        <p>Введи ключевое слово или название ниши — инструмент найдёт топ видео через официальный YouTube Data API v3 и покажет статистику: просмотры, лайки, дату публикации, длину видео. Дополнительно анализирует паттерны заголовков — какие слова встречаются чаще всего у популярных видео в твоей теме.</p>
        <h2 className="text-white font-bold text-base">Какие ниши можно анализировать?</h2>
        <p>Любые — финансы, фитнес, кулинария, авто, игры, технологии, бьюти, путешествия. Инструмент работает для любой ниши на YouTube. Достаточно ввести тему на русском или английском языке.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Анализ конкурентов YouTube — БлогерКит',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
        description: 'Анализ топ видео конкурентов на YouTube по любой нише. Реальные данные через YouTube API.',
      })}} />
    </>
  )
}
