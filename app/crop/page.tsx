import type { Metadata } from 'next'
import CropTool from './CropTool'

export const metadata: Metadata = {
  title: 'Кроп видео для Shorts и TikTok онлайн бесплатно — БлогерКит',
  description: 'Конвертируй горизонтальное видео 16:9 в вертикальное 9:16 для YouTube Shorts и TikTok. Прямо в браузере, без установки программ.',
  keywords: ['кроп видео для shorts', 'конвертер видео 16:9 в 9:16', 'обрезать видео для tiktok онлайн'],
  alternates: { canonical: 'https://blogerkit.ru/crop' },
  openGraph: {
    title: 'Кроп видео для Shorts и TikTok — БлогерКит',
    description: 'Загрузи видео → выбери область → скачай в формате 9:16.',
    url: 'https://blogerkit.ru/crop',
  },
}

export default function CropPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Кроп видео для YouTube Shorts и TikTok — конвертер 16:9 в 9:16 онлайн бесплатно</h1>
      </div>
      <CropTool />
    </>
  )
}
