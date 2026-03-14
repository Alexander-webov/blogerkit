import type { Metadata } from 'next'
import ChannelTool from './ChannelTool'

export const metadata: Metadata = {
  title: 'Анализ YouTube канала онлайн — статистика, просмотры, подписчики бесплатно',
  description: 'Вставь ссылку на любой YouTube канал — получи полную статистику: подписчики, просмотры, вовлечённость, топ видео, AI-советы по росту. Без регистрации, результат за секунду.',
  keywords: ['анализ youtube канала', 'статистика youtube канала', 'просмотры youtube канала', 'анализ канала конкурента youtube', 'проверить youtube канал онлайн'],
  alternates: { canonical: 'https://blogerkit.ru/channel-analysis' },
  openGraph: {
    title: 'Анализ YouTube канала — статистика без регистрации',
    description: 'Вставь ссылку — получи статистику канала: подписчики, просмотры, топ видео и AI-советы.',
    url: 'https://blogerkit.ru/channel-analysis',
  },
}

export default function ChannelAnalysisPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Анализ YouTube канала — статистика подписчиков и просмотров онлайн</h1>
      </div>
      <ChannelTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Что показывает анализ YouTube канала?</h2>
        <p>Инструмент показывает полную статистику любого YouTube канала: количество подписчиков и просмотров, дату создания канала, среднее количество просмотров на видео, топ видео по просмотрам, и уровень вовлечённости аудитории. На основе данных Claude AI даёт персональные рекомендации по развитию канала.</p>
        <h2 className="text-white font-bold text-base">Можно ли проверить канал конкурента?</h2>
        <p>Да. Вставь ссылку на любой открытый YouTube канал — свой или конкурента. Это помогает понять почему у конкурента растёт аудитория, какие видео у него работают лучше всего, и что можно взять на вооружение для своего канала.</p>
        <h2 className="text-white font-bold text-base">Нужна ли регистрация?</h2>
        <p>Нет. В отличие от JagaJam, Popsters и других сервисов — БлогерКит не требует регистрации, подтверждения email или привязки карты. Вставил ссылку — получил результат мгновенно.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Анализ YouTube канала — БлогерКит',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '49', priceCurrency: 'RUB' },
        description: 'Анализ статистики любого YouTube канала: подписчики, просмотры, топ видео и AI-советы.',
      })}} />
    </>
  )
}
