import type { MetadataRoute } from 'next'

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://blogerkit.ru'
const now  = new Date()

const TOOLS = ['analyze','trends','covers','calculator','tips','crop','titles','mediakit','channel-analysis','subscribe']
const BLOG_SLUGS = [
  'kak-sdelat-oblozhku-youtube','analiz-konkurentov-youtube','skolko-stoit-reklama-u-blogera',
  'kak-prodvigat-youtube-kanal','algoritm-youtube-2025','kak-zarabotat-na-youtube',
  'youtube-shorts-prosmotr','kak-sdelat-viral-video','luchshee-vremya-youtube',
  'kak-pisat-opisanie-youtube','youtube-tegi','kak-uvelichit-podpischikov',
  'monetizaciya-youtube','kak-sdelat-shorts','tiktok-vs-youtube','kanalnyj-trejler',
  'kontent-plan-youtube','rabota-s-reklamodatelyami','kak-sdelat-thumbnail-abtest',
  'youtube-analytics','prodvizhenie-telegram','kak-nachat-youtube','youtube-seo-prodvizhenie',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/blog`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    ...TOOLS.map(t => ({
      url: `${base}/${t}`, lastModified: now,
      changeFrequency: t === 'trends' ? 'daily' : 'monthly' as any,
      priority: ['analyze','trends','titles'].includes(t) ? 0.9 : 0.7,
    })),
    ...BLOG_SLUGS.map(slug => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
