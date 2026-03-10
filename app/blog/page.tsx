import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Блог для блогеров — гайды по YouTube, TikTok, Telegram 2026',
  description: 'Полезные статьи для блогеров: алгоритм YouTube, обложки, монетизация, продвижение. 23 актуальных гайда 2026.',
  alternates: { canonical: 'https://blogerkit.ru/blog' },
}

const ARTICLES = [
  { slug: 'kak-nachat-youtube',            icon: '🚀', title: 'Как начать YouTube канал с нуля',                 tag: 'Старт',       tagColor: 'text-green-400 bg-green-400/10',   readTime: '12 мин' },
  { slug: 'algoritm-youtube-2026',          icon: '⚙️', title: 'Алгоритм YouTube 2026 — как он работает',        tag: 'Алгоритм',    tagColor: 'text-blue-400 bg-blue-400/10',     readTime: '9 мин'  },
  { slug: 'kak-prodvigat-youtube-kanal',    icon: '📈', title: 'Как продвигать YouTube канал — полный гайд',     tag: 'Продвижение', tagColor: 'text-purple-400 bg-purple-400/10', readTime: '12 мин' },
  { slug: 'kak-sdelat-oblozhku-youtube',    icon: '🎨', title: 'Как сделать обложку для YouTube',                tag: 'Дизайн',      tagColor: 'text-pink-400 bg-pink-400/10',     readTime: '8 мин'  },
  { slug: 'kak-sdelat-viral-video',         icon: '🔥', title: 'Как сделать вирусное видео на YouTube',          tag: 'Контент',     tagColor: 'text-orange-400 bg-orange-400/10', readTime: '10 мин' },
  { slug: 'analiz-konkurentov-youtube',     icon: '🔍', title: 'Как анализировать конкурентов на YouTube',       tag: 'Стратегия',   tagColor: 'text-cyan-400 bg-cyan-400/10',     readTime: '10 мин' },
  { slug: 'youtube-seo-prodvizhenie',       icon: '🔎', title: 'YouTube SEO — продвижение в поиске 2026',        tag: 'SEO',         tagColor: 'text-indigo-400 bg-indigo-400/10', readTime: '10 мин' },
  { slug: 'kak-zarabotat-na-youtube',       icon: '💰', title: 'Как заработать на YouTube — все способы',        tag: 'Монетизация', tagColor: 'text-yellow-400 bg-yellow-400/10', readTime: '11 мин' },
  { slug: 'monetizaciya-youtube',           icon: '💎', title: 'Монетизация YouTube с нуля — полный гайд',       tag: 'Монетизация', tagColor: 'text-yellow-400 bg-yellow-400/10', readTime: '8 мин'  },
  { slug: 'skolko-stoit-reklama-u-blogera', icon: '📊', title: 'Сколько стоит реклама у блогера 2026',           tag: 'Монетизация', tagColor: 'text-yellow-400 bg-yellow-400/10', readTime: '7 мин'  },
  { slug: 'rabota-s-reklamodatelyami',      icon: '🤝', title: 'Как работать с рекламодателями',                 tag: 'Монетизация', tagColor: 'text-yellow-400 bg-yellow-400/10', readTime: '10 мин' },
  { slug: 'youtube-shorts-prosmotr',        icon: '📱', title: 'YouTube Shorts — как набрать просмотры',         tag: 'Shorts',      tagColor: 'text-red-400 bg-red-400/10',       readTime: '8 мин'  },
  { slug: 'kak-sdelat-shorts',              icon: '✂️', title: 'Как сделать Shorts из обычного видео',           tag: 'Shorts',      tagColor: 'text-red-400 bg-red-400/10',       readTime: '6 мин'  },
  { slug: 'kak-uvelichit-podpischikov',     icon: '👥', title: 'Как увеличить подписчиков — 15 способов',        tag: 'Рост',        tagColor: 'text-emerald-400 bg-emerald-400/10', readTime: '9 мин' },
  { slug: 'kontent-plan-youtube',           icon: '📅', title: 'Контент-план для YouTube на месяц вперёд',       tag: 'Стратегия',   tagColor: 'text-cyan-400 bg-cyan-400/10',     readTime: '8 мин'  },
  { slug: 'luchshee-vremya-youtube',        icon: '⏰', title: 'Лучшее время для публикации на YouTube',          tag: 'Алгоритм',    tagColor: 'text-blue-400 bg-blue-400/10',     readTime: '6 мин'  },
  { slug: 'youtube-analytics',              icon: '📉', title: 'YouTube Analytics — как читать статистику',      tag: 'Аналитика',   tagColor: 'text-violet-400 bg-violet-400/10', readTime: '9 мин'  },
  { slug: 'kak-sdelat-thumbnail-abtest',    icon: '🔬', title: 'A/B тест обложек YouTube — как увеличить CTR',  tag: 'Дизайн',      tagColor: 'text-pink-400 bg-pink-400/10',     readTime: '7 мин'  },
  { slug: 'kak-pisat-opisanie-youtube',     icon: '📝', title: 'Как писать описание к видео на YouTube',         tag: 'SEO',         tagColor: 'text-indigo-400 bg-indigo-400/10', readTime: '7 мин'  },
  { slug: 'youtube-tegi',                   icon: '🏷', title: 'Теги YouTube — как использовать правильно',     tag: 'SEO',         tagColor: 'text-indigo-400 bg-indigo-400/10', readTime: '5 мин'  },
  { slug: 'tiktok-vs-youtube',              icon: '⚔', title: 'TikTok vs YouTube — где начинать блогеру',      tag: 'Стратегия',   tagColor: 'text-cyan-400 bg-cyan-400/10',     readTime: '8 мин'  },
  { slug: 'kanalnyj-trejler',               icon: '🎬', title: 'Как сделать трейлер YouTube канала',             tag: 'Контент',     tagColor: 'text-orange-400 bg-orange-400/10', readTime: '6 мин'  },
  { slug: 'prodvizhenie-telegram',          icon: '✈', title: 'Продвижение Telegram канала с нуля 2026',        tag: 'Telegram',    tagColor: 'text-sky-400 bg-sky-400/10',       readTime: '9 мин'  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          БлогерКит
        </Link>
        <Link href="/" className="text-muted text-lg hover:text-white transition-colors">
          Инструменты →
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-black mb-2">Блог</h1>
          <p className="text-muted text-sm">23 статьи про YouTube, TikTok и Telegram · Актуально в 2026</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {ARTICLES.slice(0, 2).map(a => (
            <Link key={a.slug} href={"/blog/" + a.slug}
              className="group relative bg-card border border-border rounded-2xl p-5 hover:border-white/15 transition-all hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent2 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl mb-3">{a.icon}</div>
              <span className={"text-lg px-2 py-0.5 rounded font-semibold " + a.tagColor}>{a.tag}</span>
              <h2 className="font-bold text-sm leading-snug mt-2 mb-1 group-hover:text-white/80 transition-colors">{a.title}</h2>
              <div className="text-muted text-lg">{a.readTime}</div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {ARTICLES.slice(2).map(a => (
            <Link key={a.slug} href={"/blog/" + a.slug}
              className="group flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-white/15 transition-all">
              <div className="text-xl w-7 text-center flex-shrink-0">{a.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={"text-lg px-1.5 py-0.5 rounded font-semibold " + a.tagColor}>{a.tag}</span>
                  <span className="text-muted text-lg">{a.readTime}</span>
                </div>
                <h2 className="font-semibold text-sm group-hover:text-white/80 transition-colors">{a.title}</h2>
              </div>
              <div className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0">→</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-2xl text-center">
          <div className="font-heading text-sm font-bold mb-1">Попробуй инструменты БлогерКит</div>
          <p className="text-muted text-lg mb-4">Анализ конкурентов, тренды YouTube, калькулятор рекламы</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/analyze" className="px-4 py-2 bg-accent text-white font-bold text-lg rounded-xl hover:opacity-85 transition-opacity">Анализ конкурентов</Link>
            <Link href="/trends"  className="px-4 py-2 border border-border text-lg rounded-xl hover:border-white/20 transition-colors">Тренды YouTube</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
