import type { Metadata } from 'next'
import CoversTool from './CoversTool'

export const metadata: Metadata = {
  title: 'Конструктор обложек YouTube бесплатно — 25+ шаблонов — БлогерКит',
  description: 'Создавай кликабельные обложки для YouTube, TikTok и Instagram. 25+ шаблонов, редактор с текстом и фильтрами прямо в браузере, без регистрации.',
  keywords: ['конструктор обложек youtube', 'обложка youtube бесплатно', 'сделать обложку для видео онлайн', 'шаблоны обложек youtube'],
  alternates: { canonical: 'https://blogerkit.ru/covers' },
  openGraph: {
    title: 'Конструктор обложек YouTube — 25+ шаблонов бесплатно — БлогерКит',
    description: '25+ шаблонов обложек для YouTube, TikTok, Instagram. Редактор в браузере.',
    url: 'https://blogerkit.ru/covers',
  },
}

export default function CoversPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Конструктор обложек для YouTube бесплатно — 25+ шаблонов онлайн</h1>
      </div>
      <CoversTool />
    </>
  )
}
