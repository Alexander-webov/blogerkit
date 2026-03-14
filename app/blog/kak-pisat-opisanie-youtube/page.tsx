import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как писать описание к видео на YouTube — гайд 2025',
  description: 'Как правильно написать описание видео на YouTube: структура, ключевые слова, временные метки, ссылки. Шаблон описания который улучшит SEO и просмотры.',
  keywords: ['описание видео youtube', 'как писать описание youtube', 'описание для youtube видео seo', 'шаблон описания youtube'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-pisat-opisanie-youtube' },
  openGraph: { title: 'Как писать описание видео на YouTube — гайд и шаблон 2025', description: 'Структура, ключевые слова, временные метки — шаблон описания для YouTube.', url: 'https://blogerkit.ru/blog/kak-pisat-opisanie-youtube' },
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
          <span>📝 SEO</span><span>·</span><span>8 мин чтения</span><span>·</span><time dateTime="2025-01-22">Январь 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как писать описание к видео на YouTube — гайд и шаблон 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Описание видео на YouTube — второй по важности SEO-элемент после заголовка. Большинство блогеров либо игнорируют его совсем, либо пишут одну строчку. Это большая ошибка которая стоит просмотров и позиций в поиске.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Генерируй SEO-оптимизированные заголовки</div><div className="text-muted text-sm">Для каждого видео · Бесплатно</div></div>
          <Link href="/titles" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Генерировать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Зачем нужно хорошее описание</h2>
            <p className="text-muted mb-3">YouTube анализирует описание для понимания темы видео. Хорошее описание с правильными ключевыми словами помогает алгоритму показывать видео нужным людям в поиске и разделе «Похожие видео». Первые 150 символов описания показываются в результатах поиска YouTube — это напрямую влияет на CTR.</p>
            <p className="text-muted">Google также индексирует описания YouTube видео. Видео с подробным описанием чаще появляются в обычном поиске Google по релевантным запросам. Это дополнительный источник бесплатного трафика.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Структура идеального описания</h2>
            <p className="text-muted mb-3">Первый абзац (первые 150 символов): самый важный блок. Должен содержать основное ключевое слово и суть видео. Этот текст показывается в поиске YouTube и Google до кнопки «ещё». Формула: «[Ключевое слово] — [что узнает зритель]. В этом видео: [3 главных пункта через запятую]».</p>
            <p className="text-muted mb-3">Основная часть (150–500 символов): расширенное описание содержания видео. Используй вариации ключевого слова, синонимы, связанные фразы. Не набивай ключевые слова через запятую — пиши читаемые предложения.</p>
            <p className="text-muted mb-3">Временные метки: добавляй для видео длиннее 5 минут. Начиная с 00:00, каждый раздел с новой строки. Формат: «00:00 Вступление, 02:30 Первый совет, 05:15 Главная ошибка». Временные метки улучшают удержание и помогают в поиске Google.</p>
            <p className="text-muted">Ссылки и призыв к действию: ссылки на другие видео канала, плейлисты, социальные сети, сайт. Призыв подписаться. Ссылки кликабельны в описании и приводят дополнительные просмотры.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаблон описания для YouTube</h2>
            <div className="bg-card border border-border rounded-xl p-4 my-4 font-mono text-xs text-muted space-y-2">
              <p>[КЛЮЧЕВОЕ СЛОВО] — [суть видео за одно предложение]. В этом видео: [пункт 1], [пункт 2], [пункт 3].</p>
              <p className="mt-2">[Расширенное описание 100–200 слов с вариациями ключевых слов. Пиши как для человека, не как для роботов.]</p>
              <p className="mt-2">⏱ СОДЕРЖАНИЕ ВИДЕО:<br/>00:00 Вступление<br/>02:30 [Раздел 1]<br/>05:00 [Раздел 2]</p>
              <p className="mt-2">🔗 ПОЛЕЗНЫЕ ССЫЛКИ:<br/>→ [Ссылка на похожее видео]<br/>→ [Ссылка на плейлист]</p>
              <p className="mt-2">📲 Подписывайся на канал: [ссылка]</p>
            </div>
            <p className="text-muted">Этот шаблон занимает 10–15 минут для заполнения и значительно улучшает SEO видео по сравнению с пустым или однострочным описанием.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Ключевые слова в описании</h2>
            <p className="text-muted mb-3">Основное ключевое слово должно быть в первом предложении описания. Далее добавляй вариации: синонимы, смежные запросы, вопросы на которые отвечает видео. Например для видео о рекламе: «реклама у блогера», «рекламная интеграция», «сколько берут блогеры за рекламу», «как договориться с блогером».</p>
            <p className="text-muted">Оптимальная длина описания: 250–500 слов. Этого достаточно для SEO и не перегружает зрителя. Более длинное описание не вредит, но и не даёт значительного преимущества.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Распространённые ошибки в описаниях</h2>
            <p className="text-muted mb-3">Пустое описание: упускаешь весь SEO-потенциал видео. Даже 2–3 предложения лучше чем ничего. Набивание ключевых слов: «youtube youtube youtube блогер блогер 2025 2025» — алгоритм умеет это определять и снижает ранжирование.</p>
            <p className="text-muted mb-3">Одинаковое описание во всех видео: не помогает алгоритму различить видео и снижает индивидуальный SEO-потенциал. Отсутствие ссылок на другие видео: каждое описание — шанс привести зрителя к другому видео канала. Не используя его, теряешь потенциальные просмотры.</p>
            <p className="text-muted">Описание написанное после публикации: первые 24–48 часов критичны для SEO. YouTube индексирует видео в момент публикации. Если описание пустое в этот момент — ты теряешь SEO-буст при первичной индексации.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Генерируй заголовки для видео</div>
          <p className="text-muted text-sm mb-4">8 SEO-оптимизированных вариантов за секунду · Бесплатно</p>
          <Link href="/titles" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Генерировать →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-seo-prodvizhenie','YouTube SEO — продвижение в поиске'],['/blog/youtube-tegi','Теги YouTube — как правильно использовать'],['/blog/algoritm-youtube-2025','Алгоритм YouTube 2025']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
