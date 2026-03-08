import type { Metadata } from 'next'
import MediaKitTool from './MediaKitTool'

export const metadata: Metadata = {
  title: 'Генератор медиакита PDF для блогеров — БлогерКит',
  description: 'Создай профессиональный медиакит для рекламодателей за 5 минут. PDF с данными канала, ценами и контактами. Подключи Pro — 149 ₽/мес.',
  keywords: ['медиакит для блогера', 'медиакит youtube pdf', 'медиакит для рекламодателей'],
  alternates: { canonical: 'https://blogerkit.ru/mediakit' },
}

export default function MediaKitPage() {
  return <MediaKitTool />
}
