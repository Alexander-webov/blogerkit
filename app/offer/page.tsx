import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Публичная оферта — БлогерКит',
  description: 'Публичная оферта на оказание услуг сервиса БлогерКит.',
  robots: { index: true, follow: false },
}

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит
        </Link>
      </nav>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-heading text-2xl font-black mb-2">Публичная оферта</h1>
        <p className="text-muted text-sm mb-8">Редакция от 17 марта 2025 г.</p>
        <div className="space-y-6 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-base mb-3">1. Общие положения</h2>
            <p>Жуков Александр Александрович (ИНН 575106298345, самозанятый, далее — «Исполнитель») предлагает любому физическому лицу (далее — «Пользователь») заключить договор об оказании услуг на условиях настоящей публичной оферты. Оплата услуг означает полное принятие условий оферты (ст. 438 ГК РФ).</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-base mb-3">2. Предмет договора</h2>
            <p className="mb-2">Исполнитель оказывает цифровые услуги через сервис <strong className="text-white">blogerkit.ru</strong>:</p>
            <ul className="space-y-1 ml-4 list-disc">
              <li><strong className="text-white">Анализ YouTube канала</strong> — аналитика канала, топ видео, AI-советы. Стоимость: 149 ₽.</li>
              <li><strong className="text-white">Медиакит PDF</strong> — генерация PDF-медиакита по данным пользователя. Стоимость: 149 ₽.</li>
              <li><strong className="text-white">Видеоредактор Pro</strong> — расширенные функции браузерного видеоредактора. Стоимость: 149 ₽.</li>
            </ul>
            <p className="mt-2">Все услуги цифровые, оказываются автоматически сразу после оплаты.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-base mb-3">3. Порядок оказания услуг</h2>
            <p>Доступ к услуге предоставляется автоматически в браузере после подтверждения платежа. Регистрация не требуется. Доступ сохраняется в браузере (localStorage). При смене браузера — обратитесь на email для восстановления.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-base mb-3">4. Стоимость и оплата</h2>
            <p>Оплата в рублях РФ через ЮКасса. Стоимость каждой услуги — <strong className="text-white">149 (сто сорок девять) рублей</strong>. Оплата разовая, подписки нет, повторных списаний нет.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-base mb-3">5. Возврат средств</h2>
            <p>Возврат за оказанные цифровые услуги надлежащего качества не производится (ст. 26.1 Закона РФ «О защите прав потребителей»). При технической ошибке или неоказании услуги по вине Исполнителя — возврат в полном объёме в течение 10 рабочих дней.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-base mb-3">6. Реквизиты Исполнителя</h2>
            <div className="space-y-1">
              <div>ФИО: Жуков Александр Александрович</div>
              <div>Статус: Самозанятый · ИНН: 575106298345</div>
              <div>Email: <a href="mailto:programm.aleks@gmail.com" className="text-accent hover:underline">programm.aleks@gmail.com</a></div>
              <div>Адрес: New York, USA</div>
            </div>
          </section>
          <div className="pt-4 border-t border-border text-xs">
            <Link href="/contacts" className="text-accent hover:underline">Контакты и реквизиты</Link>
            {' · '}
            <Link href="/" className="hover:text-white">На главную</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
