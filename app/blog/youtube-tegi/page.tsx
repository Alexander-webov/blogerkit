import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Теги YouTube — как использовать правильно в 2025 году',
  description: 'Нужны ли теги на YouTube в 2025? Как выбирать теги, сколько добавлять, влияют ли они на продвижение. Правильное использование тегов для роста просмотров.',
  keywords: ['теги youtube', 'как добавить теги youtube', 'теги для youtube видео', 'нужны ли теги youtube 2025'],
  alternates: { canonical: 'https://blogerkit.ru/blog/youtube-tegi' },
  openGraph: { title: 'Теги YouTube 2025 — нужны ли и как правильно использовать', description: 'Влияние тегов на продвижение, как выбирать и сколько добавлять.', url: 'https://blogerkit.ru/blog/youtube-tegi' },
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
          <span>🏷 SEO</span><span>·</span><span>7 мин чтения</span><span>·</span><time dateTime="2025-01-30">Январь 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Теги YouTube — как использовать правильно в 2025 году</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Теги YouTube — один из самых переоценённых и одновременно недооценённых инструментов SEO. Одни блогеры добавляют сотни тегов в надежде на вирусность, другие игнорируют их полностью. Разбираемся как они реально работают в 2025 году.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Генерируй SEO-заголовки для видео</div><div className="text-muted text-sm">8 вариантов с оценкой CTR · Бесплатно</div></div>
          <Link href="/titles" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Генерировать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как теги влияют на YouTube в 2025 году</h2>
            <p className="text-muted mb-3">YouTube официально подтвердил что теги играют меньшую роль в ранжировании чем раньше. Алгоритм сейчас больше опирается на заголовок, описание, транскрипцию речи и поведенческие сигналы (CTR, удержание). Тем не менее теги полностью не потеряли значение.</p>
            <p className="text-muted mb-3">Что теги делают сегодня: помогают YouTube понять контекст видео когда заголовок или описание неоднозначны, влияют на показ в разделе «Похожие видео», и помогают с ранжированием по длинным нишевым запросам.</p>
            <p className="text-muted">Вывод: теги не сделают плохое видео популярным, но правильные теги дают небольшое преимущество в SEO. Занимает 3 минуты — делать стоит.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Сколько тегов добавлять</h2>
            <p className="text-muted mb-3">Оптимальное количество: 8–12 тегов. YouTube позволяет добавить до 500 символов тегов. Больше тегов не значит лучше — добавление нерелевантных тегов может навредить.</p>
            <p className="text-muted mb-3">YouTube показывает видео в разделе «Похожие видео» частично на основе тегов. Если твои теги совпадают с тегами популярного видео — есть шанс что твоё видео будет показано рядом с ним как похожее. Это рабочая тактика для привлечения аудитории конкурентов.</p>
            <p className="text-muted">Не используй чужие имена или названия каналов как теги — YouTube расценивает это как нарушение и может снизить ранжирование.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Какие теги добавлять</h2>
            <p className="text-muted mb-3">Структура правильного набора тегов: основное ключевое слово точно как в заголовке, вариации ключевого слова (синонимы, другие формулировки), более широкие темы (общая тематика ниши), специфические длинные запросы (long-tail), название ниши и платформы.</p>
            <p className="text-muted mb-3">Пример для видео «Как начать YouTube канал»: «как начать youtube канал», «начать youtube», «youtube для начинающих», «создать youtube канал с нуля», «youtube канал 2025», «блогинг для начинающих», «youtube советы», «как стать блогером».</p>
            <p className="text-muted">Используй теги на русском языке для русскоязычной аудитории. Английские теги имеет смысл добавить только если у тебя есть международная аудитория или контент релевантен для обеих аудиторий.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Чего избегать в тегах</h2>
            <p className="text-muted mb-3">Нерелевантные теги: добавление популярных тегов не связанных с видео. YouTube видит это как попытку манипуляции и снижает ранжирование. Если видео о кулинарии — не нужно тег «minecraft» только потому что он популярный.</p>
            <p className="text-muted mb-3">Слишком общие теги: «видео», «youtube», «2025» — они ничего не уточняют и не дают преимущества в конкурентной нише. Тратить символы на них не стоит.</p>
            <p className="text-muted">Одинаковые теги во всех видео: если добавляешь одинаковый набор тегов во все видео без учёта темы — это сигнал низкого качества для алгоритма. Каждое видео заслуживает уникального набора тегов.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Где важнее теги: заголовок и описание</h2>
            <p className="text-muted mb-3">Если нужно расставить приоритеты: заголовок (вес 40%) → описание (вес 30%) → теги (вес 15%) → остальное. Идеально оптимизированный заголовок с плохими тегами даст лучший результат чем плохой заголовок с идеальными тегами.</p>
            <p className="text-muted">Основное ключевое слово должно присутствовать в заголовке, в первом предложении описания, и в тегах. Это тройное подтверждение помогает YouTube точно определить тему видео.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Сгенерируй заголовок с нужными ключевыми словами</div>
          <p className="text-muted text-sm mb-4">AI генерирует 8 SEO-оптимизированных вариантов · Бесплатно</p>
          <Link href="/titles" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Генерировать заголовки →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-seo-prodvizhenie','YouTube SEO — продвижение в поиске'],['/blog/algoritm-youtube-2025','Алгоритм YouTube 2025'],['/blog/kak-pisat-opisanie-youtube','Как писать описание к видео на YouTube']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
