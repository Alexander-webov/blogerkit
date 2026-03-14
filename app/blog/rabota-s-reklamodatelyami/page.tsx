import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как работать с рекламодателями блогеру — полный гайд 2025',
  description: 'Как найти рекламодателей для YouTube канала, составить медиакит, договориться о цене и провести интеграцию. Реальные советы для начинающих и опытных блогеров.',
  keywords: ['работа с рекламодателями блогер', 'как найти рекламодателей youtube', 'реклама на youtube канале', 'рекламная интеграция блогер'],
  alternates: { canonical: 'https://blogerkit.ru/blog/rabota-s-reklamodatelyami' },
  openGraph: { title: 'Как работать с рекламодателями блогеру — гайд 2025', description: 'Медиакит, поиск рекламодателей, переговоры, форматы интеграций — полный гайд.', url: 'https://blogerkit.ru/blog/rabota-s-reklamodatelyami' },
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
          <span>🤝 Монетизация</span><span>·</span><span>10 мин чтения</span><span>·</span><time dateTime="2025-02-18">Февраль 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как работать с рекламодателями блогеру — полный гайд 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Прямые рекламные интеграции — главный источник дохода большинства YouTube блогеров. Рекламодатели платят в 5–20 раз больше чем AdSense. Но чтобы получить хорошие сделки нужно понимать как работает этот рынок.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Создай медиакит для рекламодателей</div><div className="text-muted text-sm">PDF со статистикой и ценами за 5 минут · 149 ₽</div></div>
          <Link href="/mediakit" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Создать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Когда начинать искать рекламодателей</h2>
            <p className="text-muted mb-3">Формально можно искать рекламодателей с любого количества подписчиков — некоторые нишевые каналы с 2000–5000 подписчиков уже получают предложения. Но реалистично: большинство рекламодателей интересуются каналами от 10 000 подписчиков с активной аудиторией.</p>
            <p className="text-muted mb-3">Важнее размера канала — качество аудитории. Канал с 15 000 подписчиков в узкой нише (например инвестиции для ИП) может брать за рекламу больше чем развлекательный канал с 100 000 подписчиков. Рекламодатели платят за доступ к нужной аудитории, а не просто за охват.</p>
            <p className="text-muted">До 10 000 подписчиков: готовь медиакит, нарабатывай кейсы (даже если первые интеграции бесплатные или за продукт), строй репутацию надёжного партнёра.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Медиакит — твоя визитная карточка</h2>
            <p className="text-muted mb-3">Медиакит — документ PDF который ты отправляешь рекламодателям. Без него переговоры начинаются с нуля каждый раз. С медиакитом — профессионально, сразу видно цифры и условия.</p>
            <p className="text-muted mb-3">Что должно быть в медиаките: краткое описание канала и аудитории, ключевые метрики (подписчики, средние просмотры, охват, вовлечённость), демография аудитории (возраст, пол, география — из YouTube Analytics), форматы интеграций с примерами, цены по форматам, контакты для связи.</p>
            <p className="text-muted">Медиакит нужно обновлять раз в 2–3 месяца по мере роста канала. Устаревшие данные в медиаките выглядят непрофессионально.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как находить рекламодателей</h2>
            <p className="text-muted mb-3">Биржи блогеров: GetBlogger, Prolog, TelegramAds — площадки где рекламодатели ищут блогеров. Создай профиль, добавь медиакит, жди входящих предложений или сам откликайся на кампании.</p>
            <p className="text-muted mb-3">Прямой исходящий поиск: составь список брендов в своей нише. Найди контакт маркетингового отдела (LinkedIn, сайт компании, email) и напиши персонализированное предложение. Конверсия низкая, но сделки часто выходят выгоднее биржевых.</p>
            <p className="text-muted mb-3">Нетворкинг: посещай конференции по маркетингу и блогингу. Знакомства с маркетологами часто конвертируются в долгосрочные партнёрства. Telegram чаты с маркетологами и SMM-специалистами — ещё один канал.</p>
            <p className="text-muted">Входящие предложения: рекламодатели сами пишут блогерам через контакты в описании YouTube. Убедись что в описании есть email или ссылка на Telegram для деловых предложений.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как устанавливать цены</h2>
            <p className="text-muted mb-3">Формула базовой цены: средние просмотры на видео × CPM (стоимость 1000 просмотров в твоей нише). CPM по нишам в 2025 году: финансы/бизнес — 300–600 ₽, технологии — 200–400 ₽, лайфстайл/развлечения — 100–200 ₽, игры — 80–150 ₽.</p>
            <p className="text-muted mb-3">Пример: канал о финансах, средние просмотры 50 000. Базовая цена интеграции: 50 × 400 ₽ = 20 000 ₽. Это минимальная цена. На практике берут 1.5–2× от базовой если канал с высокой вовлечённостью.</p>
            <p className="text-muted">Никогда не называй цену первым если рекламодатель не настаивает. Сначала узнай бюджет который они готовы потратить. Часто рекламодатель готов платить больше чем ты планировал попросить.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Форматы рекламных интеграций</h2>
            <p className="text-muted mb-3">Преролл (15–30 сек в начале видео): самый дешёвый формат. Зрители часто перематывают. Подходит для простых продуктов которые не требуют объяснений. Цена: 50–70% от основной интеграции.</p>
            <p className="text-muted mb-3">Нативная интеграция (60–120 сек в середине видео): самый популярный формат. Блогер нативно вписывает рекламу в контент. Зрители воспринимают лучше, конверсия выше. Это базовая цена.</p>
            <p className="text-muted mb-3">Отдельный обзор: всё видео посвящено одному продукту. Максимально дорого (2–4× базовой цены), максимально эффективно для рекламодателя. Требует реальной экспертизы в продукте.</p>
            <p className="text-muted">Пакетные сделки: серия интеграций в нескольких видео. Давай скидку 15–20% за пакет — рекламодатель получает лучшую цену, ты получаешь предсказуемый доход на несколько месяцев.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как не испортить отношения с аудиторией</h2>
            <p className="text-muted mb-3">Рекламируй только то что сам бы использовал или уже используешь. Аудитория чувствует неискреннее. Один провальный рекламный партнёр может стоить доверия которое ты строил годами.</p>
            <p className="text-muted mb-3">Не перегружай канал рекламой. Максимум 1–2 рекламных интеграции в месяц на начальном этапе, не более 30% видео с рекламой на крупном канале. Если каждое видео рекламное — аудитория начинает отписываться.</p>
            <p className="text-muted">Всегда маркируй рекламу. Это требование закона (в России нужно маркировать рекламу с 2023 года через ERID) и вопрос доверия аудитории. Скрытая реклама — серьёзный риск репутации.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай профессиональный медиакит</div>
          <p className="text-muted text-sm mb-4">PDF со статистикой, форматами и ценами · 149 ₽</p>
          <Link href="/mediakit" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Создать медиакит →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/monetizaciya-youtube','Монетизация YouTube — все способы'],['/blog/skolko-stoit-reklama-u-blogera','Сколько стоит реклама у блогера'],['/blog/kak-zarabotat-na-youtube','Как заработать на YouTube']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
