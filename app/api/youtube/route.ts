import { NextRequest, NextResponse } from 'next/server'

const YT_KEY = process.env.YOUTUBE_API_KEY

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q')
  if (!query) return NextResponse.json({ error: 'Missing query' }, { status: 400 })
  if (!YT_KEY)  return NextResponse.json({ error: 'API key not configured' }, { status: 500 })

  try {
    // 1. Search top videos
    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&order=viewCount&maxResults=10&relevanceLanguage=ru&key=${YT_KEY}`,
      { next: { revalidate: 3600 } } // кэш 1 час — экономим квоту API
    )
    if (!searchRes.ok) {
      const err = await searchRes.json()
      return NextResponse.json({ error: err.error?.message }, { status: searchRes.status })
    }
    const searchData = await searchRes.json()
    if (!searchData.items?.length) return NextResponse.json({ videos: [] })

    const videoIds = searchData.items.map((i: any) => i.id.videoId).join(',')

    // 2. Get stats
    const statsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails,snippet&id=${videoIds}&key=${YT_KEY}`,
      { next: { revalidate: 3600 } }
    )
    const statsData = await statsRes.json()

    // 3. Format with rich data
    const videos = statsData.items.map((item: any) => {
      const dur      = parseDuration(item.contentDetails.duration)
      const isShort  = dur > 0 && dur <= 61
      const views    = parseInt(item.statistics.viewCount)    || 0
      const likes    = parseInt(item.statistics.likeCount)    || 0
      const comments = parseInt(item.statistics.commentCount) || 0
      const tags     = (item.snippet.tags || []).slice(0, 12)
      const pub      = item.snippet.publishedAt
      return {
        id:          item.id,
        title:       item.snippet.title,
        channel:     item.snippet.channelTitle,
        views, likes, comments,
        likeRate:    views > 0 ? +((likes / views) * 100).toFixed(2) : 0,
        duration:    formatDuration(item.contentDetails.duration),
        durationSec: dur,
        isShort,
        format:      isShort ? 'Shorts' : dur > 1200 ? 'Длинное (20+ мин)' : dur > 600 ? 'Среднее (10-20 мин)' : 'Короткое (до 10 мин)',
        publishedAt: pub,
        publishDate: new Date(pub).toLocaleDateString('ru-RU', {day:'numeric',month:'long',year:'numeric'}),
        age:         timeAgo(pub),
        tags,
        thumb:       item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || '',
        url:         `https://youtube.com/watch?v=${item.id}`,
      }
    })

    return NextResponse.json({ videos })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

function parseDuration(dur: string): number {
  const m = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!m) return 0
  return (parseInt(m[1]||'0')*3600) + (parseInt(m[2]||'0')*60) + parseInt(m[3]||'0')
}

function formatDuration(dur: string): string {
  const m = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!m) return '—'
  const h = parseInt(m[1] || '0'), mn = parseInt(m[2] || '0'), s = parseInt(m[3] || '0')
  if (h > 0) return `${h}:${String(mn).padStart(2,'0')}:${String(s).padStart(2,'0')}`
  return `${mn}:${String(s).padStart(2,'0')}`
}

function timeAgo(iso: string): string {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000
  if (diff < 86400)    return `${Math.floor(diff / 3600)} ч назад`
  if (diff < 604800)   return `${Math.floor(diff / 86400)} дн назад`
  if (diff < 2592000)  return `${Math.floor(diff / 604800)} нед назад`
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} мес назад`
  return `${Math.floor(diff / 31536000)} г назад`
}
