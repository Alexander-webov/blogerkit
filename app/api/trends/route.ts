import { NextRequest, NextResponse } from "next/server";

const YT_KEY = process.env.YOUTUBE_API_KEY;

// Ниши с запросами для поиска трендов
const NICHE_QUERIES: Record<string, string[]> = {
  auto: ["авто обзор 2026", "тест драйв", "автомобиль купил"],
  finance: ["инвестиции 2026", "как заработать", "крипта"],
  gaming: ["игры 2026", "обзор игры", "прохождение"],
  food: ["рецепт", "готовлю дома", "вкусно и просто"],
  fitness: ["похудение", "тренировка дома", "фитнес"],
  travel: ["путешествие", "влог поездка", "страна переехал"],
  beauty: ["макияж урок", "уход за кожей", "beauty обзор"],
  tech: ["обзор гаджет", "технологии 2026", "смартфон"],
  education: ["обучение онлайн", "курс бесплатно", "как научиться"],
  motivation: ["мотивация успех", "утренняя рутина", "изменил жизнь"],
};

export async function GET(req: NextRequest) {
  const niche = req.nextUrl.searchParams.get("niche") || "auto";
  if (!YT_KEY)
    return NextResponse.json({ error: "No API key" }, { status: 500 });

  const queries = NICHE_QUERIES[niche] || NICHE_QUERIES["auto"];
  const query = queries[Math.floor(Math.random() * queries.length)];

  try {
    // Search trending videos (last 7 days)
    const weekAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000,
    ).toISOString();

    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&order=viewCount&maxResults=12&relevanceLanguage=ru&publishedAfter=${weekAgo}&key=${YT_KEY}`,
      { next: { revalidate: 7200 } }, // кэш 2 часа
    );
    const searchData = await searchRes.json();
    if (!searchData.items?.length)
      return NextResponse.json({ videos: [], query });

    const ids = searchData.items.map((i: any) => i.id.videoId).join(",");
    const statsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails,snippet&id=${ids}&key=${YT_KEY}`,
      { next: { revalidate: 7200 } },
    );
    const statsData = await statsRes.json();

    const videos = (statsData.items || [])
      .map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        views: parseInt(item.statistics.viewCount) || 0,
        likes: parseInt(item.statistics.likeCount) || 0,
        comments: parseInt(item.statistics.commentCount) || 0,
        duration: formatDuration(item.contentDetails.duration),
        publishedAt: item.snippet.publishedAt,
        thumb:
          item.snippet.thumbnails?.high?.url ||
          item.snippet.thumbnails?.medium?.url ||
          "",
        url: `https://youtube.com/watch?v=${item.id}`,
        tags: item.snippet.tags?.slice(0, 5) || [],
      }))
      .sort((a: any, b: any) => b.views - a.views);

    return NextResponse.json({ videos, query, niche });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

function formatDuration(dur: string): string {
  const m = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return "—";
  const h = parseInt(m[1] || "0"),
    mn = parseInt(m[2] || "0"),
    s = parseInt(m[3] || "0");
  if (h > 0)
    return `${h}:${String(mn).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${mn}:${String(s).padStart(2, "0")}`;
}
