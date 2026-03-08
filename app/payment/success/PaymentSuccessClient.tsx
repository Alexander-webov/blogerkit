'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const MSGS: Record<string, { title: string; desc: string; link: string; btn: string }> = {
  'channel-analysis': { title: 'Анализ канала разблокирован!',  desc: 'Введи ссылку на YouTube канал — получи полную статистику.', link: '/channel-analysis', btn: 'Анализировать канал →' },
  'mediakit':         { title: 'Медиакит доступен!',            desc: 'Заполни данные и скачай PDF прямо сейчас.',                 link: '/mediakit',         btn: 'Создать медиакит →'  },
  'crop-pro':         { title: 'Видеоредактор Pro активирован!', desc: 'Нарезка, субтитры и фильтры теперь доступны.',             link: '/crop',             btn: 'Открыть редактор →'  },
}

export default function PaymentSuccessClient() {
  const params  = useSearchParams()
  const product = params.get('product') || ''
  const m = MSGS[product] || { title: 'Оплата прошла!', desc: 'Вернись к нужному инструменту.', link: '/', btn: 'На главную →' }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="bg-surface border border-border rounded-3xl p-8 max-w-sm w-full text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="font-heading text-2xl font-black mb-2">{m.title}</h1>
        <p className="text-muted text-sm mb-6">{m.desc}</p>
        <Link href={m.link}
          className="block w-full py-3 bg-gradient-to-r from-accent to-red-700 text-white font-black text-sm rounded-xl hover:opacity-90 transition-all">
          {m.btn}
        </Link>
        <Link href="/" className="block mt-3 text-muted text-xs hover:text-white transition-colors">← На главную</Link>
      </div>
    </div>
  )
}
