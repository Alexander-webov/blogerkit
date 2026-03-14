import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Монетизация YouTube с нуля — все способы заработка в 2025 году',
  description: 'Полный гайд по монетизации YouTube: AdSense, спонсорство, продажа товаров, донаты, Boosty. Сколько можно заработать и как подключить монетизацию.',
  keywords: ['монетизация youtube', 'как монетизировать youtube канал', 'заработок на youtube 2025', 'youtube partner program', 'реклама на youtube канале'],
  alternates: { canonical: 'https://blogerkit.ru/blog/monetizaciya-youtube' },
  openGraph: {
    title: 'Монетизация YouTube с нуля — все способы заработка 2025',
    description: 'AdSense, спонсорство, донаты, Boosty — все способы заработка на YouTube канале.',
    url: 'https://blogerkit.ru/blog/monetizaciya-youtube',
  },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит
        </Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>

      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>💰 Монетизация</span><span>·</span><span>11 мин чтения</span><span>·</span>
          <time dateTime="2025-01-20">Январь 2025</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Монетизация YouTube с нуля — все способы заработка в 2025 году</h1>
        <p className="text-muted text-base leading-relaxed mb-8">YouTube может быть источником серьёзного дохода — если подойти к монетизации правильно. В этом гайде разбираем все способы заработка: от рекламы AdSense до прямых продаж, и объясняем сколько реально можно заработать на каждом из них.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-bold text-sm mb-0.5">Рассчитай сколько стоит реклама на твоём канале</div>
            <div className="text-muted text-sm">Калькулятор рекламы · Бесплатно</div>
          </div>
          <Link href="/calculator" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Рассчитать →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Способ 1. Реклама YouTube (AdSense) — базовая монетизация</h2>
            <p className="text-muted mb-3">YouTube Partner Program (YPP) позволяет зарабатывать на рекламе которую YouTube показывает в твоих видео. Это самый очевидный способ монетизации, но не самый прибыльный.</p>
            <p className="text-muted mb-3">Требования для подключения YPP в 2025 году: 1000 подписчиков и 4000 часов просмотра за последние 12 месяцев (для длинных видео), или 1000 подписчиков и 10 миллионов просмотров Shorts за 90 дней.</p>
            <p className="text-muted mb-3">Сколько платит реклама: в среднем 0.5–2 доллара за 1000 просмотров (RPM). В нишах финансы, бизнес, технологии RPM выше — 3–8 долларов. В развлекательных нишах ниже — 0.3–1 доллар. При 100 000 просмотров в месяц это 1500–15000 рублей.</p>
            <p className="text-muted">Реальность: реклама AdSense — это пассивный доход, но его не хватит для жизни пока у тебя нет минимум 300–500 тысяч просмотров в месяц. Использовать как дополнение к другим источникам дохода.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Способ 2. Прямая реклама — самый прибыльный источник</h2>
            <p className="text-muted mb-3">Рекламные интеграции от брендов и компаний приносят значительно больше чем AdSense. Рекламодатель платит тебе напрямую за упоминание продукта или услуги в видео.</p>
            <p className="text-muted mb-3">Цены на прямую рекламу: преролл 15–30 секунд в начале видео — 10 000–30 000 рублей при 30–50 тысячах подписчиков. Нативная интеграция в середине видео — 20 000–80 000 рублей. Отдельный обзор — 50 000–200 000 рублей.</p>
            <p className="text-muted mb-3">Как найти рекламодателей: написать напрямую брендам из своей ниши, зарегистрироваться на биржах блогеров (Telega.in, GetBlogger, Prolog), или подготовить медиакит и рассылать рекламодателям.</p>
            <div className="bg-card border border-border rounded-xl p-4 my-4">
              <div className="text-sm font-bold mb-2">Что такое медиакит и зачем он нужен</div>
              <p className="text-muted text-sm mb-3">Медиакит — документ PDF с твоей статистикой, ценами и форматами. Без него сложно получить первых рекламодателей. Профессиональный медиакит повышает доверие и помогает брать за рекламу в 2–3 раза больше.</p>
              <Link href="/mediakit" className="text-accent text-sm font-bold hover:underline">Создать медиакит за 5 минут →</Link>
            </div>
            <p className="text-muted">Когда начинать искать рекламодателей: формально можно с любого количества подписчиков, но реалистично рекламодатели начинают интересоваться при 10–20 тысячах подписчиков в чётко определённой нише.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Способ 3. Донаты и подписки от аудитории</h2>
            <p className="text-muted mb-3">Прямая поддержка от зрителей — один из самых стабильных источников дохода для контент-мейкеров. В России главные платформы: Boosty и DonationAlerts.</p>
            <p className="text-muted mb-3">Boosty позволяет создать платные подписки с эксклюзивным контентом: закрытые видео, посты, ранний доступ к видео, общение с автором. Цена подписки обычно 200–1000 рублей в месяц. При 200 платных подписчиках по 300 рублей — это 60 000 рублей в месяц.</p>
            <p className="text-muted mb-3">DonationAlerts — разовые донаты во время стримов или к видео. Хорошо работает в игровой нише и для блогеров с очень лояльной аудиторией. Часть аудитории готова платить просто чтобы поддержать любимого автора.</p>
            <p className="text-muted">YouTube также имеет встроенные функции: Super Thanks (донат к видео), Super Chat (оплаченное сообщение в чате стрима), членство в канале (ежемесячная подписка). Эти функции доступны после подключения YPP.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Способ 4. Продажа собственных продуктов и услуг</h2>
            <p className="text-muted mb-3">Самый высокомаржинальный способ монетизации. YouTube канал как маркетинговый инструмент для продажи своих продуктов или услуг.</p>
            <p className="text-muted mb-3">Что можно продавать: онлайн-курсы (самый популярный вариант), консультации и менторинг, физические товары, шаблоны и цифровые продукты, доступ к закрытому сообществу.</p>
            <p className="text-muted mb-3">Онлайн-курсы: если у тебя образовательный канал о финансах, маркетинге, дизайне или любой профессиональной теме — курс это логичное продолжение. Стоимость курса: от 3000 до 50 000 рублей. При 1000 подписчиках и конверсии 2% можно продать 20 курсов по 10 000 рублей = 200 000 рублей.</p>
            <p className="text-muted">Консультации: если ты эксперт в своей нише — продавай время. Часовая консультация 3000–15 000 рублей в зависимости от темы и уровня экспертизы. YouTube канал создаёт доверие которое позволяет брать высокие цены.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Способ 5. Партнёрские программы</h2>
            <p className="text-muted mb-3">Аффилиатный маркетинг — получаешь процент от продажи когда зритель покупает продукт по твоей ссылке. Хорошо работает в нишах технологий, финансов, образования, здоровья.</p>
            <p className="text-muted mb-3">Где найти партнёрские программы: Admitad (большой каталог российских и зарубежных программ), прямые партнёрки брендов из твоей ниши (обычно есть раздел «Партнёрам» на сайте), Amazon Associates (для международной аудитории).</p>
            <p className="text-muted">Комиссии: от 2–5% в e-commerce до 30–50% в образовательных сервисах и SaaS. Лучше всего работает когда продукт реально используешь сам и можешь честно рекомендовать.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Стратегия монетизации: с чего начать</h2>
            <p className="text-muted mb-3">На старте (0–10 000 подписчиков): сосредоточься на росте канала, не на монетизации. Подключи партнёрские ссылки если они органично подходят к теме. Создай медиакит — это займёт 5 минут и пригодится позже.</p>
            <p className="text-muted mb-3">На среднем этапе (10 000–100 000 подписчиков): начни активно искать рекламодателей. Запусти Boosty с эксклюзивным контентом. Подключи YPP если ещё не подключён. Думай о собственном продукте.</p>
            <p className="text-muted mb-3">На продвинутом уровне (100 000+): диверсифицируй доходы. Не зависи только от рекламы — алгоритм меняется и просмотры могут упасть. Собственные продукты и аудитория которая напрямую платит тебе — самый стабильный доход.</p>
            <p className="text-muted">Главное правило: монетизация не должна разрушать доверие аудитории. Если реклама нерелевантная или продукт некачественный — зрители уйдут, и никакие деньги это не компенсируют.</p>
          </div>

        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай медиакит для рекламодателей</div>
          <p className="text-muted text-sm mb-4">Профессиональный PDF с твоей статистикой и ценами за 5 минут</p>
          <Link href="/mediakit" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Создать медиакит →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/rabota-s-reklamodatelyami', 'Как работать с рекламодателями блогеру'],
              ['/blog/skolko-stoit-reklama-u-blogera', 'Сколько стоит реклама у блогера в 2025'],
              ['/blog/kak-zarabotat-na-youtube', 'Как заработать на YouTube — все способы'],
            ].map(([href, title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">
                {title} →
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
