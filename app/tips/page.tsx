import type { Metadata } from 'next'
import TipsTool from './TipsTool'

export const metadata: Metadata = {
  title: 'Советы для YouTube блогеров 2025 — что реально работает в алгоритме',
  description: 'Актуальные советы по продвижению YouTube канала в 2025 году. Алгоритм, заголовки, обложки, время публикации, Shorts — что работает прямо сейчас. Чеклист перед публикацией.',
  keywords: ['советы youtube блогер', 'как продвигать youtube канал', 'советы для блогеров 2025', 'алгоритм youtube советы', 'продвижение youtube бесплатно'],
  alternates: { canonical: 'https://blogerkit.ru/tips' },
  openGraph: {
    title: 'Советы для YouTube блогеров 2025 — что работает в алгоритме',
    description: 'Актуальные советы по YouTube, TikTok и Telegram. Чеклист перед публикацией.',
    url: 'https://blogerkit.ru/tips',
  },
}

export default function TipsPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Советы для YouTube блогеров 2025 — алгоритм, заголовки, продвижение</h1>
      </div>
      <TipsTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Что изменилось в алгоритме YouTube в 2025?</h2>
        <p>В 2025 году алгоритм YouTube сильнее учитывает время просмотра относительно длины видео (retention rate), реакции аудитории в первые 48 часов, и соответствие заголовка содержанию видео. Shorts продолжают получать бонусный охват для новых каналов с небольшой аудиторией.</p>
        <h2 className="text-white font-bold text-base">Какие советы дают реальный результат?</h2>
        <p>Три правила которые работают независимо от ниши: публикуй стабильно (лучше 1 видео в неделю чем 5 за раз и потом пауза), первые 30 секунд видео должны объяснять зрителю зачем смотреть дальше, и используй реальные данные по трендам ниши а не угадывай темы.</p>
      </section>
    </>
  )
}
