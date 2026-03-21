import type { MetadataRoute } from 'next'

const base = 'https://blogerkit.ru'
const now  = new Date()

const TOOLS = [
  'analyze', 'trends', 'covers', 'calculator',
  'tips', 'crop', 'titles', 'mediakit', 'channel-analysis',
]

const BLOG_SLUGS = [
  // Русские статьи — YouTube
  'algoritm-youtube-2025', 'analiz-konkurentov-youtube', 'kak-nachat-youtube',
  'kak-oformit-youtube-kanal', 'kak-pisat-opisanie-youtube', 'kak-prodvigat-youtube-kanal',
  'kak-sdelat-oblozhku-youtube', 'kak-sdelat-shorts', 'kak-sdelat-thumbnail-abtest',
  'kak-sdelat-viral-video', 'kak-snyat-video-youtube-telefon', 'kak-uvelichit-podpischikov',
  'kak-zarabotat-na-youtube', 'kanalnyj-trejler', 'kontent-plan-youtube',
  'luchshee-vremya-youtube', 'mikrofon-dlya-youtube', 'monetizaciya-youtube',
  'osveshenie-dlya-semki-video', 'prodvizhenie-telegram', 'programmy-montazha-youtube-besplatno',
  'rabota-s-reklamodatelyami', 'skolko-stoit-reklama-u-blogera', 'tiktok-vs-youtube',
  'youtube-analytics', 'youtube-seo-prodvizhenie', 'youtube-shorts-prosmotr', 'youtube-tegi',
  // Русские статьи — VK/Rutube
  'kak-prodvigatsya-vk-video', 'vk-klipy-algoritm', 'kak-zarabotat-vk-video',
  'rutube-kak-nabrat-prosmotry', 'rutube-monetizatsiya-2025', 'mediakit-dlya-vk-blogerov',
  'reklama-u-blogerov-vkontakte', 'kak-vesti-telegram-kanal', 'vk-vs-youtube-gde-nachat',
  'prodvizhenie-na-russkih-platformah',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/offer`,    lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/contacts`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ...TOOLS.map(t => ({
      url: `${base}/${t}`,
      lastModified: now,
      changeFrequency: t === 'trends' ? 'daily' : 'monthly' as any,
      priority: ['analyze', 'trends', 'titles', 'covers', 'crop'].includes(t) ? 0.9 : 0.7,
    })),
    ...BLOG_SLUGS.map(slug => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
