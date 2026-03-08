import type { Metadata } from 'next'
import TitlesTool from './TitlesTool'

export const metadata: Metadata = {
  title: 'AI-генератор заголовков для YouTube — 8 вариантов за секунду',
  description: 'Генератор заголовков для YouTube на основе Claude AI. Введи тему — получи 8 кликабельных заголовков с оценкой CTR. Первая попытка бесплатно.',
  keywords: ['генератор заголовков youtube', 'ai заголовок youtube', 'придумать заголовок youtube'],
  alternates: { canonical: 'https://blogerkit.ru/titles' },
  openGraph: { title: 'AI-генератор заголовков YouTube — БлогерКит', url: 'https://blogerkit.ru/titles' },
}

export default function TitlesPage() {
  return <TitlesTool />
}
