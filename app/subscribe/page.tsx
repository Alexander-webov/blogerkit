import type { Metadata } from 'next'
import SubscribeClient from './SubscribeClient'

export const metadata: Metadata = {
  title: 'Советы для YouTube блогеров на почту — еженедельная рассылка',
  description: 'Подпишись на еженедельные советы для YouTube и Telegram блогеров. Алгоритмы, тренды, монетизация — только полезное, без спама.',
  keywords: ['советы для блогеров рассылка', 'youtube советы еженедельно', 'блогер рост канала'],
  alternates: { canonical: 'https://blogerkit.ru/subscribe' },
}

export default function SubscribePage() {
  return <SubscribeClient />
}
