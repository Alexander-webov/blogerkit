import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Монетизация на Rutube в 2025 году — как заработать на платформе', description: 'Все способы монетизации на Rutube: рекламная программа, Академия блогеров, прямые интеграции, Boosty. Сколько платит Rutube и как подключить монетизацию.', keywords: ['монетизация rutube', 'заработок на rutube', 'rutube деньги блогерам', 'rutube monetization 2025'], alternates: { canonical: 'https://blogerkit.ru/blog/rutube-monetizatsiya-2025' }, openGraph: { title: 'Монетизация на Rutube в 2025 году — как заработать на платформе', description: 'Все способы монетизации на Rutube: рекламная программа, Академия блогеров, прямые интеграции, Boosty. Сколько платит Rutube и как подключить монетизацию.', url: 'https://blogerkit.ru/blog/rutube-monetizatsiya-2025' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>🟠 Rutube</span><span>·</span><span>8 мин чтения</span><span>·</span><time dateTime="2025-03">Март 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Монетизация на Rutube в 2025 году — как заработать на платформе</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Все способы монетизации на Rutube: рекламная программа, Академия блогеров, прямые интеграции, Boosty. Сколько платит Rutube и как подключить монетизацию.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Создай медиакит для рекламодателей Rutube</div><div className="text-muted text-sm">БлогерКит · Бесплатно</div></div>
          <Link href="/mediakit" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Создать медиакит →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Рекламная программа Rutube</h2>
            <p className="text-muted mb-3">Требования: 1 000 подписчиков и принятие условий в личном кабинете. Средний RPM: новости/политика 100–300 ₽, образование 80–200 ₽, развлечения 40–100 ₽.</p>
            <p className="text-muted mb-3">Выплаты ежемесячно при накоплении от 1 000 рублей. Настройка реквизитов в разделе «Монетизация» личного кабинета.</p>
            <p className="text-muted mb-3">В 2025 году Rutube выплатил авторам почти 1,5 млрд рублей через различные программы.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Академия блогеров Rutube</h2>
            <p className="text-muted mb-3">Образовательная и финансовая программа для активных авторов. Даёт доступ к обучающим материалам и повышенным ставкам монетизации.</p>
            <p className="text-muted mb-3">Участие в специальных проектах с дополнительными выплатами. Гранты на создание контента по определённым темам.</p>
            <p className="text-muted mb-3">Следи за анонсами в официальном блоге Rutube — платформа регулярно запускает новые инициативы для авторов.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Прямые рекламные интеграции</h2>
            <p className="text-muted mb-3">Рекламодатели постепенно приходят на Rutube. Особенно активны бренды которые раньше работали с YouTube.</p>
            <p className="text-muted mb-3">Ставки 2025: 10–50 тыс. подписчиков — 3 000–15 000 ₽ за интеграцию, 50 тыс.+ — от 20 000 ₽.</p>
            <p className="text-muted mb-3">Birzhi: Telega.in, GetBlogger. Медиакит с актуальной статистикой обязателен для успешных переговоров.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Краудфандинг и цифровые продукты</h2>
            <p className="text-muted mb-3">Boosty: страница с платными подписками и эксклюзивным контентом. DonationAlerts: кнопка доната в описаниях и во время стримов.</p>
            <p className="text-muted mb-3">Продажа курсов, книг, шаблонов, консультаций через Rutube как маркетинговый канал.</p>
            <p className="text-muted mb-3">Rutube для самозанятых: доход с платформы декларируется через приложение «Мой налог» как доход самозанятого.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/rutube-kak-nabrat-prosmotry','Как набрать просмотры на Rutube'],
['/blog/mediakit-dlya-vk-blogerov','Медиакит для блогеров'],
['/blog/prodvizhenie-na-russkih-platformah','Продвижение на российских платформах'],].map(([href,t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}