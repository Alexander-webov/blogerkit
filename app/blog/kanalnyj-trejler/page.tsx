import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как сделать трейлер YouTube канала который конвертирует подписчиков',
  description: 'Что такое трейлер YouTube канала, как его снять и какой должна быть структура. Примеры и советы по созданию трейлера который превращает посетителей в подписчиков.',
  keywords: ['трейлер youtube канала', 'как сделать трейлер youtube', 'channel trailer youtube', 'трейлер для нового зрителя youtube'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kanalnyj-trejler' },
  openGraph: { title: 'Трейлер YouTube канала — как снять и структура 2025', description: 'Что такое трейлер канала, структура, длина и советы по созданию.', url: 'https://blogerkit.ru/blog/kanalnyj-trejler' },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>🎬 Канал</span><span>·</span><span>8 мин чтения</span><span>·</span><time dateTime="2025-01-26">Январь 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как сделать трейлер YouTube канала который конвертирует подписчиков</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Трейлер канала — это видео которое показывается незарегистрированным посетителям на главной странице канала. Это твой первый и часто единственный шанс превратить случайного зрителя в подписчика. Разбираем как сделать его эффективным.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Анализируй трейлеры конкурентов</div><div className="text-muted text-sm">Смотри статистику любого канала · 49 ₽</div></div>
          <Link href="/channel-analysis" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Анализировать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Что такое трейлер канала и зачем он нужен</h2>
            <p className="text-muted mb-3">Трейлер канала (Channel Trailer) — специальное видео которое YouTube показывает пользователям которые ещё не подписаны на канал когда они заходят на страницу канала. Подписчикам вместо трейлера показывается последнее видео.</p>
            <p className="text-muted mb-3">Зачем это важно: каждый день на страницу канала заходят новые люди — из поиска, из рекомендаций, из социальных сетей. Без трейлера они видят просто сетку видео без объяснения чем канал полезен. С трейлером — получают чёткий ответ на вопрос «почему мне стоит подписаться».</p>
            <p className="text-muted">Хороший трейлер может увеличить конверсию посетителей страницы в подписчиков на 20–40%. Это один из самых эффективных постоянно работающих инструментов роста канала.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Оптимальная длина трейлера</h2>
            <p className="text-muted mb-3">Идеальная длина трейлера: 60–90 секунд. Достаточно чтобы донести суть и показать ценность, достаточно коротко чтобы удержать внимание незнакомого зрителя. Трейлеры длиннее 2 минут резко теряют аудиторию.</p>
            <p className="text-muted">Некоторые успешные каналы делают трейлеры 30–45 секунд — минималистично и эффективно. Если можешь донести суть за 45 секунд — не растягивай до 90.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Структура эффективного трейлера</h2>
            <p className="text-muted mb-3">Первые 5 секунд — крючок: самый яркий момент канала, неожиданное заявление или вопрос который цепляет. Не начинай с «Привет всем, я [имя]» — это мгновенно теряет зрителя который тебя не знает.</p>
            <p className="text-muted mb-3">Секунды 5–20 — проблема: для кого этот канал и какую проблему он решает. «Если ты хочешь X но не знаешь с чего начать — этот канал для тебя». Зритель должен узнать себя.</p>
            <p className="text-muted mb-3">Секунды 20–50 — доказательства: покажи лучшие моменты канала. Быстрая нарезка из разных видео которая демонстрирует качество и разнообразие контента. Не рассказывай — показывай.</p>
            <p className="text-muted mb-3">Секунды 50–70 — обещание и расписание: что конкретно получит подписчик, как часто выходят новые видео.</p>
            <p className="text-muted">Последние 10–15 секунд — призыв к действию: чёткий призыв подписаться. «Нажми кнопку подписки чтобы не пропустить следующее видео» лучше чем просто «подпишись».</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Советы по съёмке трейлера</h2>
            <p className="text-muted mb-3">Качество трейлера должно быть выше среднего видео на канале — это витрина. Хорошее освещение, чистый звук, уверенная подача. Зритель формирует впечатление о всём канале по трейлеру.</p>
            <p className="text-muted mb-3">Пиши сценарий заранее. Трейлер — не влог «о себе», а продающее видео. Каждое предложение должно работать на конверсию. Напиши текст, прочитай вслух, сократи всё что не добавляет ценности.</p>
            <p className="text-muted">Обнови трейлер когда канал значительно вырастет или изменится тематика. Трейлер снятый 2 года назад с плохим качеством — хуже чем отсутствие трейлера.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как установить трейлер канала</h2>
            <p className="text-muted mb-3">YouTube Studio → Настройка канала → Оформление → Раздел «Трейлер для новых посетителей». Выбери видео которое должно стать трейлером из уже загруженных на канал.</p>
            <p className="text-muted mb-3">Можно загрузить трейлер как обычное видео (видимое для всех) или как unlisted (доступно только по ссылке). Если трейлер это отдельный формат который не вписывается в основной контент — лучше сделать его unlisted.</p>
            <p className="text-muted">Проверь как выглядит страница канала после установки трейлера — войди в режим инкогнито в браузере. Именно так видит канал новый посетитель.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай обложку для трейлера</div>
          <p className="text-muted text-sm mb-4">25+ шаблонов для YouTube · Бесплатно</p>
          <Link href="/covers" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Создать обложку →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/kak-nachat-youtube','Как начать YouTube канал с нуля'],['/blog/kak-uvelichit-podpischikov','Как увеличить подписчиков на YouTube'],['/blog/algoritm-youtube-2025','Алгоритм YouTube 2025']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
