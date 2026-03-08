import type { Metadata } from 'next'
import TipsTool from './TipsTool'

export const metadata: Metadata = {
  title: 'Советы по продвижению YouTube, TikTok, Telegram 2025 — БлогерКит',
  description: 'Актуальные советы по продвижению для блогеров в 2025 году. YouTube, TikTok, ВКонтакте, Telegram — что работает сейчас. Чеклисты перед публикацией.',
  keywords: ['советы по продвижению youtube 2025', 'как продвинуть тикток', 'продвижение telegram канала', 'алгоритм youtube 2025'],
  alternates: { canonical: 'https://blogerkit.ru/tips' },
  openGraph: {
    title: 'Советы по продвижению для блогеров 2025 — БлогерКит',
    description: 'Что работает в алгоритмах YouTube, TikTok и Telegram прямо сейчас.',
    url: 'https://blogerkit.ru/tips',
  },
}

export default function TipsPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Советы по продвижению YouTube, TikTok, ВКонтакте и Telegram в 2025 году</h1>
      </div>
      <TipsTool />
    </>
  )
}
