import { NextRequest, NextResponse } from 'next/server'

const YT_KEY = process.env.YOUTUBE_API_KEY

function extractChannelId(input: string): { type: 'id' | 'handle' | 'custom'; value: string } | null {
  // youtube.com/channel/UCxxxxx
  const channelMatch = input.match(/youtube\.com\/channel\/(UC[\w-]+)/)
  if (channelMatch) return { type: 'id', value: channelMatch[1] }
  // youtube.com/@handle
  const handleMatch = input.match(/youtube\.com\/@([\w.-]+)/)
  if (handleMatch) return { type: 'handle', value: handleMatch[1] }
  // youtube.com/c/name or youtube.com/name
  const customMatch = input.match(/youtube\.com\/(?:c\/)?([\w.-]+)/)
  if (customMatch && !['watch','shorts','playlist'].includes(customMatch[1]))
    return { type: 'custom', value: customMatch[1] }
  // bare handle @name
  if (input.startsWith('@')) return { type: 'handle', value: input.slice(1) }
  // bare channel ID
  if (input.startsWith('UC')) return { type: 'id', value: input }
  return null
}

export async function GET(req: NextRequest) {
  const url   = req.nextUrl.searchParams.get('url') || ''
  if (!url)    return NextResponse.json({ error: 'Нет ссылки' }, { status: 400 })
  if (!YT_KEY) return NextResponse.json({ error: 'Нет API ключа' }, { status: 500 })

  try {
    const parsed = extractChannelId(url)
    let channelId = ''

    if (parsed?.type === 'id') {
      channelId = parsed.value
    } else {
      // Resolve via search
      const q = parsed?.value || url
      const searchRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(q)}&maxResults=1&key=${YT_KEY}`
      )
      const searchData = await searchRes.json()
      channelId = searchData.items?.[0]?.id?.channelId || ''
    }

    if (!channelId) return NextResponse.json({ error: 'Канал не найден' }, { status: 404 })

    // Channel stats
    const chanRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${YT_KEY}`,
      { next: { revalidate: 3600 } }
    )
    const chanData = await chanRes.json()
    const ch = chanData.items?.[0]
    if (!ch) return NextResponse.json({ error: 'Канал не найден' }, { status: 404 })

    // Last 20 videos
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=20&key=${YT_KEY}`,
      { next: { revalidate: 3600 } }
    )
    const videosData = await videosRes.json()
    const videoIds   = (videosData.items || []).map((v: any) => v.id.videoId).join(',')

    let videos: any[] = []
    if (videoIds) {
      const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet,contentDetails&id=${videoIds}&key=${YT_KEY}`,
        { next: { revalidate: 3600 } }
      )
      const statsData = await statsRes.json()
      videos = (statsData.items || []).map((v: any) => ({
        id:          v.id,
        title:       v.snippet.title,
        views:       parseInt(v.statistics.viewCount)    || 0,
        likes:       parseInt(v.statistics.likeCount)    || 0,
        comments:    parseInt(v.statistics.commentCount) || 0,
        publishedAt: v.snippet.publishedAt,
        thumb:       v.snippet.thumbnails?.medium?.url || '',
        duration:    v.contentDetails.duration,
        url:         `https://youtube.com/watch?v=${v.id}`,
      }))
    }

    const subs   = parseInt(ch.statistics.subscriberCount) || 0
    const views  = parseInt(ch.statistics.viewCount)       || 0
    const vCount = parseInt(ch.statistics.videoCount)      || 0

    const avgViews = videos.length
      ? Math.round(videos.reduce((s, v) => s + v.views, 0) / videos.length)
      : 0

    const engRate = subs > 0 && avgViews > 0
      ? +((videos.reduce((s, v) => s + v.likes + v.comments, 0) / videos.length / avgViews) * 100).toFixed(2)
      : 0

    const topVideo  = [...videos].sort((a, b) => b.views - a.views)[0]
    const worstVideo = [...videos].sort((a, b) => a.views - b.views)[0]

    const growthRate = subs > 0 ? +((avgViews / subs) * 100).toFixed(1) : 0

    return NextResponse.json({
      channel: {
        id:          channelId,
        name:        ch.snippet.title,
        description: ch.snippet.description?.slice(0, 300),
        avatar:      ch.snippet.thumbnails?.medium?.url,
        banner:      ch.brandingSettings?.image?.bannerExternalUrl,
        createdAt:   ch.snippet.publishedAt,
        country:     ch.snippet.country,
        subs, views, videoCount: vCount,
      },
      stats: { avgViews, engRate, growthRate },
      videos,
      topVideo,
      worstVideo,
    })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
