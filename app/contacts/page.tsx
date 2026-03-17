import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Контакты и реквизиты — БлогерКит',
  description: 'Контактная информация и реквизиты исполнителя сервиса БлогерКит.',
  robots: { index: true, follow: false },
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит
        </Link>
      </nav>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-heading text-2xl font-black mb-8">Контакты и реквизиты</h1>
        <div className="space-y-5 text-sm">
          <div className="bg-surface border border-border rounded-xl p-5">
            <h2 className="font-bold text-base mb-4">Исполнитель</h2>
            <div className="space-y-2 text-muted">
              <div className="flex gap-4"><span className="text-white min-w-32">ФИО</span><span>Жуков Александр Александрович</span></div>
              <div className="flex gap-4"><span className="text-white min-w-32">Статус</span><span>Самозанятый</span></div>
              <div className="flex gap-4"><span className="text-white min-w-32">ИНН</span><span>575106298345</span></div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <h2 className="font-bold text-base mb-4">Контакты</h2>
            <div className="space-y-2 text-muted">
              <div className="flex gap-4"><span className="text-white min-w-32">Email</span><a href="mailto:programm.aleks@gmail.com" className="text-accent hover:underline">programm.aleks@gmail.com</a></div>
              <div className="flex gap-4"><span className="text-white min-w-32">Адрес</span><span>New York, USA</span></div>
              <div className="flex gap-4"><span className="text-white min-w-32">Сайт</span><span>blogerkit.ru</span></div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <h2 className="font-bold text-base mb-4">Режим работы</h2>
            <p className="text-muted">Сервис работает в автоматическом режиме 24/7. Ответ на обращения по email — в течение 3 рабочих дней.</p>
          </div>
          <div className="text-muted text-xs">
            <Link href="/offer" className="text-accent hover:underline">Публичная оферта</Link>{' · '}
            <Link href="/" className="hover:text-white">На главную</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
