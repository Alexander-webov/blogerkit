import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Алгоритм YouTube 2025 — как он работает и что изменилось',
  description: 'Подробный разбор алгоритма YouTube 2025: CTR, удержание, AVD, Shorts, рекомендации. Как адаптировать контент и получить больше просмотров.',
  keywords: ['алгоритм youtube 2025', 'как работает алгоритм youtube', 'продвижение youtube алгоритм', 'youtube рекомендации алгоритм'],
  alternates: { canonical: 'https://blogerkit.ru/blog/algoritm-youtube-2025' },
  openGraph: {
    title: 'Алгоритм YouTube 2025 — как он работает и что изменилось',
    description: 'Подробный разбор алгоритма YouTube 2025: CTR, удержание, AVD, Shorts, рекомендации.',
    url: 'https://blogerkit.ru/blog/algoritm-youtube-2025',
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
          <span>⚙️ Алгоритм</span><span>·</span><span>9 мин чтения</span><span>·</span>
          <time dateTime="2025-02-15">Февраль 2025</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Алгоритм YouTube 2025 — как он работает и что изменилось</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Алгоритм YouTube — самое важное что нужно понять блогеру. Он решает кому показывать твоё видео, будет ли оно вирусным, и вырастет ли канал. В этой статье разбираем как алгоритм работает в 2025 году и что конкретно нужно делать чтобы получать больше просмотров.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-bold text-sm mb-0.5">Смотри что набирает просмотры в твоей нише прямо сейчас</div>
            <div className="text-muted text-sm">Тренды YouTube · Бесплатно</div>
          </div>
          <Link href="/trends" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Открыть тренды →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как YouTube решает что показывать зрителю</h2>
            <p className="text-muted mb-3">YouTube — это не просто видеохостинг. Это рекомендательная система чья главная цель — удержать зрителя на платформе как можно дольше. Каждый раз когда пользователь открывает YouTube, алгоритм за доли секунды анализирует тысячи сигналов и выбирает какие видео показать именно этому человеку.</p>
            <p className="text-muted mb-3">Ключевой принцип: YouTube не продвигает видео которые ты снял. YouTube продвигает видео которые нравятся конкретным зрителям. Разница принципиальная. Алгоритм постоянно тестирует твоё видео на небольших группах аудитории и смотрит на их реакцию. Если реакция хорошая — показывает большей аудитории. Если плохая — останавливает показы.</p>
            <p className="text-muted">Три главных места где YouTube продвигает видео: главная страница (самый большой источник просмотров), раздел «Похожие видео» (показывается справа или снизу от других видео), и поиск YouTube (работает по ключевым словам как Google).</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">CTR — первый и главный фильтр</h2>
            <p className="text-muted mb-3">CTR (click-through rate) — процент людей которые кликнули на твоё видео увидев его в ленте. Это первое что проверяет алгоритм. Если тысяча человек увидела твою обложку и только 30 кликнули — CTR составляет 3%. Это плохо. Алгоритм решит что видео неинтересное и остановит показы.</p>
            <p className="text-muted mb-3">Нормальный CTR по нишам в 2025 году: развлекательный контент 6–10%, образовательный 4–7%, новостной 3–6%, нишевый профессиональный 2–5%. Если твой CTR ниже этих значений — проблема в обложке или заголовке.</p>
            <p className="text-muted mb-3">Что влияет на CTR: обложка (60% влияния), заголовок (30%), время публикации (10%). Обложка должна быть яркой, содержать лицо с эмоцией или интригующий объект, и крупный текст из 3–5 слов. Заголовок должен вызывать любопытство или обещать конкретную пользу.</p>
            <div className="bg-card border border-border rounded-xl p-4 my-4">
              <div className="text-sm font-bold mb-2">Правило хорошего CTR</div>
              <p className="text-muted text-sm">Покажи обложку 10 людям не из своей аудитории. Если хотя бы 6 из 10 скажут что хотели бы посмотреть это видео — обложка работает. Если меньше — переделывай.</p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">AVD и удержание аудитории — второй фильтр</h2>
            <p className="text-muted mb-3">После клика на видео алгоритм смотрит на то как долго зрители его смотрят. AVD (average view duration) — среднее время просмотра. Retention — процент аудитории который остаётся на каждой минуте видео.</p>
            <p className="text-muted mb-3">YouTube не требует чтобы видео смотрели до конца. Он сравнивает твоё AVD с другими видео той же длины. Если у тебя 10-минутное видео и AVD = 5 минут (50%) — это лучше чем у большинства. Алгоритм начнёт продвигать активнее.</p>
            <p className="text-muted mb-3">Критические точки удержания которые нужно знать. Первые 30 секунд: здесь уходит 30–40% зрителей. Причина — видео не оправдало ожиданий от обложки и заголовка. Первые 2 минуты: если не зацепил зрителя — он уйдёт. Середина видео: типичный провал удержания. Нужен новый крючок или смена темпа.</p>
            <p className="text-muted">Практический совет: первые 30 секунд не тратить на вступление, заставку канала или долгое представление. Сразу давай ценность или интригу которая заставит остаться.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Вовлечённость: лайки, комментарии, репосты</h2>
            <p className="text-muted mb-3">Алгоритм отслеживает что зрители делают с видео после просмотра. Лайки и дизлайки показывают эмоциональную реакцию. Комментарии — признак глубокой вовлечённости. Репосты — показатель что контент ценный настолько что его хочется поделиться. Сохранение в плейлист — сигнал что видео полезное.</p>
            <p className="text-muted mb-3">В 2025 году YouTube усилил вес комментариев относительно лайков. Видео с активным обсуждением в комментариях получают буст продвижения. Поэтому просить зрителей написать комментарий — рабочая тактика. Главное делать это органично: задай в конце видео конкретный вопрос на который легко ответить.</p>
            <p className="text-muted">Важный нюанс: количество подписчиков влияет на алгоритм меньше чем принято считать. У YouTube нет цели продвигать большие каналы. Алгоритм продвигает видео которые хорошо работают с конкретной аудиторией, независимо от размера канала.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Алгоритм Shorts в 2025 году</h2>
            <p className="text-muted mb-3">Shorts имеют полностью отдельный алгоритм от длинных видео. Это важно понять: успех в Shorts не гарантирует успех в длинных видео и наоборот. Аудитория Shorts и длинных видео частично пересекается, но ведёт себя по-разному.</p>
            <p className="text-muted mb-3">Для Shorts ключевые метрики: досматриваемость (сколько процентов смотрят до конца), повторные просмотры (один зритель смотрит несколько раз), и свайп вверх (зритель не пропустил видео). Длина Shorts работающая лучше всего в 2025 — 30–45 секунд.</p>
            <p className="text-muted">Shorts хорошо работают для привлечения новой аудитории. Но конвертировать зрителей Shorts в подписчиков длинных видео сложно — у них разные привычки потребления. Лучшая стратегия: делать Shorts как самостоятельный контент, а не нарезку из длинных видео.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Что изменилось в алгоритме в 2025 году</h2>
            <p className="text-muted mb-3">Несколько важных изменений которые произошли в 2024–2025 году. Первое: алгоритм стал агрессивнее продвигать новые каналы в нишах с низкой конкуренцией. Если ты занимаешь узкую нишу — шансы на рост значительно выросли.</p>
            <p className="text-muted mb-3">Второе: YouTube начал показывать видео зрителям которые никогда не были на твоём канале и не подписаны. Это означает что каждое видео нужно делать понятным для новой аудитории — не предполагать что зритель знает контекст.</p>
            <p className="text-muted mb-3">Третье: скорость загрузки и качество видео стали влиять на ранжирование. Видео в 4K с хорошим звуком получают небольшой, но заметный буст по сравнению с видео низкого качества при одинаковых показателях.</p>
            <p className="text-muted">Четвёртое: алгоритм стал учитывать «freshness» — насколько свежее видео. Видео опубликованное неделю назад имеет преимущество перед видео трёхлетней давности при прочих равных. Регулярность публикаций по-прежнему важна.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Практические выводы: что делать прямо сейчас</h2>
            <p className="text-muted mb-3">Сосредоточься на первых 30 секундах каждого видео. Это самое важное место — именно здесь решается останется ли зритель. Начинай с интриги, обещания или неожиданного факта.</p>
            <p className="text-muted mb-3">Проверяй CTR в YouTube Studio каждые 48 часов после публикации. Если CTR ниже 4% — это сигнал что нужно улучшать обложки. Тестируй разные обложки на разных видео и сравнивай результаты.</p>
            <p className="text-muted mb-3">Публикуй стабильно. Алгоритм YouTube даёт приоритет каналам которые публикуют регулярно. Лучше 1 видео в неделю стабильно, чем 5 видео за одну неделю и потом пауза на месяц.</p>
            <p className="text-muted">Анализируй конкурентов в своей нише. Смотри какие заголовки и обложки у видео с высоким количеством просмотров — это прямая подсказка что работает у твоей аудитории.</p>
          </div>

        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Анализируй конкурентов в своей нише</div>
          <p className="text-muted text-sm mb-4">Смотри топ видео и паттерны заголовков — бесплатно</p>
          <Link href="/analyze" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Анализировать конкурентов →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/kak-prodvigat-youtube-kanal', 'Как продвигать YouTube канал — полный гайд'],
              ['/blog/kak-uvelichit-podpischikov', 'Как увеличить подписчиков на YouTube'],
              ['/blog/youtube-seo-prodvizhenie', 'YouTube SEO — продвижение в поиске'],
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
