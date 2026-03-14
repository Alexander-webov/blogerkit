import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как заработать на YouTube в 2025 году — все способы монетизации',
  description: 'Реальные способы заработка на YouTube: реклама AdSense, спонсорство, курсы, донаты, партнёрки. Сколько платят и с чего начать монетизацию канала.',
  keywords: ['как заработать на youtube', 'заработок на youtube 2025', 'youtube монетизация способы', 'сколько платит youtube'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-zarabotat-na-youtube' },
  openGraph: { title: 'Как заработать на YouTube в 2025 — все способы', description: 'AdSense, спонсорство, курсы, донаты — реальные цифры и с чего начать.', url: 'https://blogerkit.ru/blog/kak-zarabotat-na-youtube' },
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
          <span>💸 Заработок</span><span>·</span><span>10 мин чтения</span><span>·</span><time dateTime="2025-01-28">Январь 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как заработать на YouTube в 2025 году — все способы монетизации</h1>
        <p className="text-muted text-base leading-relaxed mb-8">YouTube может приносить от нескольких тысяч до миллионов рублей в месяц — всё зависит от ниши, размера аудитории и способов монетизации. В этой статье разбираем все реальные способы заработка с конкретными цифрами.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Рассчитай стоимость рекламы на твоём канале</div><div className="text-muted text-sm">Калькулятор · Бесплатно</div></div>
          <Link href="/calculator" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Рассчитать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Реклама YouTube (AdSense) — базовый доход</h2>
            <p className="text-muted mb-3">YouTube Partner Program позволяет показывать рекламу в видео и получать 55% дохода от рекламы (45% берёт YouTube). Для подключения нужно 1000 подписчиков и 4000 часов просмотра за год.</p>
            <p className="text-muted mb-3">Реальные цифры RPM (доход на 1000 просмотров) в России в 2025 году: развлечения и юмор — 30–80 ₽, кулинария и лайфстайл — 50–120 ₽, финансы и инвестиции — 150–400 ₽, бизнес и маркетинг — 120–300 ₽, технологии — 80–200 ₽.</p>
            <p className="text-muted">При 100 000 просмотров в месяц это 3000–40000 ₽ в зависимости от ниши. Для полноценного дохода нужно минимум 500 000–1 000 000 просмотров в месяц. Реклама AdSense — хорошее дополнение, но редко становится основным доходом.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Прямые рекламные интеграции — главный доход блогеров</h2>
            <p className="text-muted mb-3">Прямые договорённости с рекламодателями приносят в 5–20 раз больше чем AdSense. Блогер сам договаривается с брендом о формате и цене без посредников.</p>
            <p className="text-muted mb-3">Средние цены на рекламу в 2025 году по размеру канала: до 10 000 подписчиков — 3000–15000 ₽ за интеграцию, 10 000–50 000 — 15 000–60 000 ₽, 50 000–200 000 — 50 000–200 000 ₽, 200 000+ — от 150 000 ₽. Финансовые и бизнес-блогеры берут в 2–3 раза больше при том же количестве подписчиков.</p>
            <p className="text-muted">Где найти рекламодателей: биржи блогеров (GetBlogger, Prolog), прямые письма брендам в своей нише, нетворкинг на конференциях. Медиакит с твоей статистикой увеличивает конверсию переговоров в 2–3 раза.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Собственные курсы и обучение</h2>
            <p className="text-muted mb-3">Онлайн-образование — самый высокомаржинальный способ монетизации YouTube. Если ты эксперт в своей теме и канал уже обучает аудиторию — следующий шаг это платный курс.</p>
            <p className="text-muted mb-3">Цены на курсы: мини-курс (2–5 уроков) — 2000–5000 ₽, полноценный курс — 10 000–30 000 ₽, премиум-программа с поддержкой — 30 000–100 000 ₽. При базе 10 000 подписчиков и конверсии 1% — это 100 продаж курса по 10 000 ₽ = 1 000 000 ₽ с одного запуска.</p>
            <p className="text-muted">Платформы для продажи: GetCourse (самая популярная в России), Teachable, собственный сайт. YouTube канал служит бесплатным трафиком для продажи курсов — это и есть суть бизнес-модели многих крупных образовательных блогеров.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Donates и подписки — прямая поддержка аудитории</h2>
            <p className="text-muted mb-3">Часть аудитории готова платить напрямую за контент который ценит. Boosty позволяет создать платную подписку с эксклюзивным контентом — закрытые видео, посты, ранний доступ, личное общение.</p>
            <p className="text-muted mb-3">Реальные цифры: канал с 50 000 подписчиков и активной аудиторией может иметь 200–500 платных подписчиков на Boosty по 300–500 ₽ в месяц. Это 60 000–250 000 ₽ стабильного ежемесячного дохода.</p>
            <p className="text-muted">DonationAlerts работает для стримеров и блогеров которые ведут прямые эфиры. Суперчат в YouTube — встроенный инструмент для донатов во время стримов доступный после подключения YPP.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Партнёрские программы и аффилиатный маркетинг</h2>
            <p className="text-muted mb-3">Получаешь процент от продажи когда зритель переходит по твоей ссылке и покупает продукт. Особенно хорошо работает в нишах: финансы (брокеры, банки, страхование), технологии (сервисы, приложения, гаджеты), образование (курсы, подписки), товары для хобби.</p>
            <p className="text-muted mb-3">Комиссии: интернет-магазины 3–10%, финансовые продукты 1000–5000 ₽ за привлечённого клиента, SaaS-сервисы 20–50% от подписки, образование 20–40%.</p>
            <p className="text-muted">Главное правило: рекомендуй только то что сам используешь и считаешь полезным. Аудитория чувствует неискренность и перестаёт доверять рекомендациям — а доверие это главный актив блогера.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Консультации и услуги</h2>
            <p className="text-muted mb-3">YouTube канал создаёт экспертность и доверие которые позволяют продавать личное время дорого. Час консультации известного блогера в нише финансов или маркетинга стоит 5000–30000 ₽.</p>
            <p className="text-muted">Форматы: разовые консультации, менторинг (регулярные встречи в течение месяца или квартала), аудит (разбор конкретной ситуации клиента), агентские услуги. Даже небольшой канал на 5000–10000 подписчиков может приносить 50 000–150 000 ₽ в месяц через консультации если ниша правильная.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">С чего начать монетизацию: стратегия по этапам</h2>
            <p className="text-muted mb-3">До 1000 подписчиков: добавляй партнёрские ссылки в описание видео если они органично подходят. Создай медиакит — займёт 5 минут и пригодится. Начни строить Telegram канал как дополнительный актив.</p>
            <p className="text-muted mb-3">1000–10 000 подписчиков: подключи YPP для рекламы. Начни активно искать рекламодателей в своей нише. Запусти Boosty с простым платным контентом. Предложи консультации если есть экспертиза.</p>
            <p className="text-muted mb-3">10 000–100 000 подписчиков: рекламные интеграции становятся основным доходом. Думай о собственном продукте — курсе, книге, сервисе. Масштабируй то что уже работает.</p>
            <p className="text-muted">100 000+ подписчиков: диверсифицируй источники дохода. Не полагайся только на рекламу — алгоритм меняется. Собственные продукты и прямые отношения с аудиторией — самый стабильный фундамент.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай медиакит для рекламодателей</div>
          <p className="text-muted text-sm mb-4">PDF со статистикой и ценами за 5 минут · 149 ₽</p>
          <Link href="/mediakit" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Создать медиакит →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/monetizaciya-youtube','Монетизация YouTube — полный гайд'],['/blog/rabota-s-reklamodatelyami','Как работать с рекламодателями'],['/blog/skolko-stoit-reklama-u-blogera','Сколько стоит реклама у блогера']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
