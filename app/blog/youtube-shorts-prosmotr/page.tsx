import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Shorts — как набрать просмотры в 2025 году',
  description: 'Как набирать просмотры на YouTube Shorts: алгоритм Shorts, длина видео, хэштеги, лучшее время, форматы которые вирусятся. Практическое руководство 2025.',
  keywords: ['youtube shorts просмотры', 'как набрать просмотры shorts', 'алгоритм youtube shorts', 'продвижение youtube shorts 2025'],
  alternates: { canonical: 'https://blogerkit.ru/blog/youtube-shorts-prosmotr' },
  openGraph: { title: 'YouTube Shorts — как набрать просмотры в 2025', description: 'Алгоритм Shorts, форматы, длина, хэштеги — практическое руководство.', url: 'https://blogerkit.ru/blog/youtube-shorts-prosmotr' },
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
          <span>📱 Shorts</span><span>·</span><span>9 мин чтения</span><span>·</span><time dateTime="2025-02-05">Февраль 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Shorts — как набрать просмотры в 2025 году</h1>
        <p className="text-muted text-base leading-relaxed mb-8">YouTube Shorts — один из самых мощных инструментов роста для новых каналов в 2025 году. Алгоритм Shorts активно продвигает контент независимо от размера канала. Но есть правила которые определяют вирусное видео от того которое никто не увидит.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Обрежь видео под формат Shorts 9:16</div><div className="text-muted text-sm">В браузере без загрузки на сервер · Бесплатно</div></div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Обрезать видео →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как работает алгоритм YouTube Shorts</h2>
            <p className="text-muted mb-3">Алгоритм Shorts полностью отдельный от алгоритма длинных видео. Главные метрики которые он учитывает: досматриваемость (процент зрителей которые досмотрели до конца), количество повторных просмотров, реакции (лайки, комментарии), и свайп вниз (зритель скипнул видео — плохой сигнал).</p>
            <p className="text-muted mb-3">Ключевое отличие Shorts от длинных видео: алгоритм не смотрит на количество подписчиков. Новый канал с нулём подписчиков может набрать миллион просмотров если видео цепляет людей. Это главная возможность которую предоставляет формат.</p>
            <p className="text-muted">Алгоритм тестирует каждый Shorts на небольшой выборке аудитории. Если досматриваемость высокая — видео показывается большей аудитории. Если люди скипают в первые секунды — видео останавливается. Поэтому первая секунда критична.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Оптимальная длина Shorts в 2025 году</h2>
            <p className="text-muted mb-3">По данным аналитики, Shorts длиной 30–45 секунд показывают лучшую досматриваемость в 2025 году. Это достаточно чтобы донести одну идею полностью, и достаточно коротко чтобы зритель досмотрел до конца.</p>
            <p className="text-muted mb-3">Shorts до 15 секунд: высокая досматриваемость но сложно донести ценность. Работает для мемов, неожиданных фактов, быстрых советов. Shorts 60 секунд и длиннее: можно дать больше контента, но досматриваемость ниже. Подходит для туториалов и объяснений.</p>
            <p className="text-muted">Правило: делай видео ровно настолько длинным насколько нужно для раскрытия идеи — не короче и не длиннее. Не растягивай видео ради «оптимальной» длины.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Форматы Shorts которые вирусятся</h2>
            <p className="text-muted mb-3">Быстрый полезный совет: «3 вещи которые я бы сказал себе 5 лет назад», «Ошибка которую делают 90% начинающих в [тема]». Зритель получает ценность за 30 секунд — высокая досматриваемость.</p>
            <p className="text-muted mb-3">Неожиданный факт: «Оказывается [surprising fact]». Работает за счёт несоответствия ожиданиям. Мозг хочет узнать чем всё закончится. Сторителлинг в одном Take: реальная история с началом, серединой и неожиданным концом. Без монтажа — создаёт ощущение подлинности.</p>
            <p className="text-muted mb-3">Реакция или комментарий: реагируешь на что-то из своей ниши. Легко создавать, хорошо вовлекает. Before/After: трансформация чего-либо за короткое время — ремонт, тренировка, рецепт, дизайн.</p>
            <p className="text-muted">Что НЕ работает в Shorts: нарезка из длинных видео без адаптации, горизонтальное видео конвертированное в вертикальное с чёрными полосами, вступления дольше 2 секунд, призыв к подписке в начале видео.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Первая секунда — самое важное место</h2>
            <p className="text-muted mb-3">Первая секунда Shorts — это крючок. Зритель видит начало видео пока листает ленту. Если первый кадр или первые слова не зацепили — свайп вверх и видео больше никто не увидит.</p>
            <p className="text-muted mb-3">Рабочие крючки для первой секунды: вопрос («Почему ты до сих пор делаешь X неправильно?»), сильное утверждение («Это изменило мою жизнь»), визуальный крючок (показываешь результат до объяснения), незаконченная фраза («Никогда не делай это если...»).</p>
            <p className="text-muted">Не начинай Shorts с «Привет всем», представления себя, или лого канала. Сразу в суть — у тебя буквально 1–2 секунды чтобы заинтересовать.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Хэштеги, описание и заголовок</h2>
            <p className="text-muted mb-3">Заголовок Shorts: должен дополнять видео, а не повторять то что видно на экране. 50–60 символов. Включи ключевое слово по теме. Хэштеги: 3–5 хэштегов максимум. #Shorts обязателен для того чтобы YouTube распознал формат. Добавь 2–3 тематических хэштега по теме видео.</p>
            <p className="text-muted mb-3">Описание: для Shorts оно менее важно чем для длинных видео, но добавь 2–3 предложения с ключевыми словами и ссылку на связанное длинное видео если оно есть.</p>
            <p className="text-muted">Субтитры: добавляй текстовые субтитры на экране — многие смотрят Shorts без звука в общественных местах. Субтитры увеличивают досматриваемость на 20–40%.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Частота публикации и стратегия роста</h2>
            <p className="text-muted mb-3">Оптимальная частота для роста: 3–7 Shorts в неделю. Алгоритм Shorts любит стабильность — регулярные публикации дают каналу больший приоритет. Снять 7 Shorts за один день и публиковать по одному в день — рабочая стратегия для экономии времени.</p>
            <p className="text-muted mb-3">Лучшее время публикации Shorts: вечер будних дней (18:00–22:00) и выходные (10:00–14:00) по московскому времени. Но это среднестатистические данные — проверяй своё время через YouTube Analytics.</p>
            <p className="text-muted">Как конвертировать зрителей Shorts в подписчиков длинных видео: в конце Shorts упомяни «полное видео на канале», добавляй ссылку в описание, делай Shorts которые вызывают вопрос на который отвечает длинное видео.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Обрежь видео под формат 9:16 для Shorts</div>
          <p className="text-muted text-sm mb-4">Без загрузки на сервер · Прямо в браузере · Бесплатно</p>
          <Link href="/crop" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Открыть редактор →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/kak-sdelat-shorts','Как сделать Shorts из обычного видео'],['/blog/algoritm-youtube-2025','Алгоритм YouTube 2025 — как он работает'],['/blog/kak-prodvigat-youtube-kanal','Как продвигать YouTube канал']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
