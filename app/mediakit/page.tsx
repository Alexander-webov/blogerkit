import type { Metadata } from 'next'
import MediaKitTool from './MediaKitTool'

export const metadata: Metadata = {
  title: 'Медиакит для блогера — создать онлайн и скачать PDF бесплатно',
  description: 'Создай профессиональный медиакит для YouTube блогера за 5 минут. Статистика канала, цены на рекламу, контакты — всё в одном PDF. Без регистрации, готовый шаблон.',
  keywords: ['медиакит для блогера', 'медиакит youtube', 'создать медиакит онлайн', 'медиакит блогера скачать', 'шаблон медиакита для блогера'],
  alternates: { canonical: 'https://blogerkit.ru/mediakit' },
  openGraph: {
    title: 'Медиакит для блогера — создать PDF онлайн за 5 минут',
    description: 'Профессиональный медиакит для рекламодателей. Статистика, цены и контакты в одном PDF.',
    url: 'https://blogerkit.ru/mediakit',
  },
}

export default function MediakitPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Медиакит для YouTube блогера — создать онлайн и скачать PDF</h1>
      </div>
      <MediaKitTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Что такое медиакит блогера?</h2>
        <p>Медиакит — это документ PDF который блогер отправляет рекламодателям. Он содержит статистику канала (подписчики, просмотры, охват), описание аудитории (возраст, география, интересы), форматы рекламных интеграций и цены. Профессиональный медиакит повышает доверие рекламодателей и помогает получить более высокую цену за рекламу.</p>
        <h2 className="text-white font-bold text-base">Что должно быть в медиаките?</h2>
        <p>Обязательные разделы: краткое описание канала и его темы, статистика (подписчики, средние просмотры, вовлечённость), портрет аудитории, форматы интеграций с примерами и ценами, контакты для связи. Наш шаблон уже содержит все эти разделы — просто заполни свои данные.</p>
        <h2 className="text-white font-bold text-base">Как отправить медиакит рекламодателю?</h2>
        <p>Скачай готовый PDF и отправь его на email рекламодателя или прикрепи в Telegram. Многие блогеры также размещают ссылку на медиакит в описании YouTube канала и в шапке профиля.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Медиакит для блогера — БлогерКит',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '149', priceCurrency: 'RUB' },
        description: 'Создай профессиональный медиакит для YouTube блогера за 5 минут.',
      })}} />
    </>
  )
}
