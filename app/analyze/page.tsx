import type { Metadata } from 'next'
import AnalyzeTool from './AnalyzeTool'

export const metadata: Metadata = {
  title: 'Анализ конкурентов YouTube — топ видео, теги, паттерны заголовков',
  description: 'Анализируй топ видео в любой нише: просмотры, лайки, теги, формат, паттерны заголовков. Фильтр по неделе, месяцу, году. 149 ₽ за запрос.',
  keywords: ['анализ конкурентов youtube', 'топ видео youtube ниша', 'теги youtube видео', 'паттерны заголовков youtube', 'анализ ютуб ниши'],
  alternates: { canonical: 'https://blogerkit.ru/analyze' },
}

export default function AnalyzePage() {
  return <AnalyzeTool />
}
