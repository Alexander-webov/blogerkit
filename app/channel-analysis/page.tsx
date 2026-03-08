import type { Metadata } from 'next'
import ChannelTool from './ChannelTool'

export const metadata: Metadata = {
  title: 'Анализ YouTube канала по ссылке — статистика и советы',
  description: 'Вставь ссылку на YouTube канал — получи полную статистику: подписчики, просмотры, вовлечённость, топ видео и персональные рекомендации.',
  keywords: ['анализ youtube канала', 'статистика youtube канала', 'проверить youtube канал'],
  alternates: { canonical: 'https://blogerkit.ru/channel-analysis' },
}

export default function ChannelAnalysisPage() {
  return <ChannelTool />
}
