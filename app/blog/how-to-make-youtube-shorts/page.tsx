import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Make YouTube Shorts from Regular Videos — Step-by-Step 2025',
  description: 'How to convert horizontal video to 9:16 YouTube Shorts: crop, subtitles, music, captions. Free tools and step-by-step instructions for beginners.',
  keywords: ['how to make youtube shorts', 'convert video to youtube shorts', 'crop video for shorts', 'youtube shorts tutorial'],
  alternates: { canonical: 'https://tubekit.app/blog/how-to-make-youtube-shorts' },
  openGraph: { title: 'How to Make YouTube Shorts from Regular Videos — Step-by-Step 2025', description: 'How to convert horizontal video to 9:16 YouTube Shorts: crop, subtitles, music, captions. Free tools and step-by-step instructions for beginners.', url: 'https://tubekit.app/blog/how-to-make-youtube-shorts' },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>✂️ Shorts</span><span>·</span><span>8 min read</span><span>·</span><time dateTime="2025-03">March 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How to Make YouTube Shorts from Regular Videos — Step-by-Step 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to convert horizontal video to 9:16 YouTube Shorts: crop, subtitles, music, captions. Free tools and step-by-step instructions for beginners.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Crop your video to 9:16 in your browser</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Open editor →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 1 — Choose the right clip</h2>
            <p className="text-muted mb-3">Not every segment of a long video works as a Short. A good Short clip is: self-contained (understandable without the rest of the video), focused on one idea or story, 30–60 seconds long, and has a clear beginning and end.</p>
            <p className="text-muted mb-3">What to look for: a high-energy moment, a surprising reveal, a complete useful tip, or a visually compelling sequence. Avoid clips that start with 'as I was saying earlier' or reference context the viewer won't have.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 2 — Crop to 9:16</h2>
            <p className="text-muted mb-3">YouTube Shorts requires 9:16 vertical format (1080×1920px). To convert horizontal 16:9 video, you need to crop — select the portion of the frame you want and export in vertical format.</p>
            <p className="text-muted mb-3">Important: don't just add black bars at the top and bottom. YouTube doesn't penalize it, but completion rates are lower for letterboxed Shorts compared to properly cropped ones.</p>
            <p className="text-muted mb-3">TubeKit's video editor: upload your video, drag the 9:16 crop frame over the area you want to keep (usually centered on the face or key action), and download. Everything runs in your browser — no file uploads to external servers.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 3 — Add captions</h2>
            <p className="text-muted mb-3">60–80% of Shorts are watched without sound — on public transport, in waiting rooms, between meetings. Captions increase completion rates by 20–40% and make your content accessible.</p>
            <p className="text-muted mb-3">Caption rules: large font (readable on a small phone screen), high contrast (white text with dark shadow or outline), maximum 5 words per line, positioned in the lower third of the frame.</p>
            <p className="text-muted mb-3">CapCut auto-generates captions with speech recognition in seconds. Review and fix errors — especially names, numbers and technical terms.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 4 — Music and audio</h2>
            <p className="text-muted mb-3">Background music increases engagement when chosen correctly. Use only royalty-free music to avoid copyright strikes. Sources: YouTube Audio Library (free, built into YouTube Studio), Epidemic Sound (subscription), Artlist (subscription).</p>
            <p className="text-muted mb-3">Music volume: set background music at 20–30% of your voice volume. It should enhance the mood, not compete with your words.</p>
            <p className="text-muted mb-3">If your original video has background noise, use CapCut or DaVinci Resolve's noise reduction feature before adding music.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 5 — Title, hashtags and publishing</h2>
            <p className="text-muted mb-3">Title: 50–60 characters, include your keyword. Don't repeat exactly what's on screen — complement it. Description: 2–3 sentences with keywords + link to full video if relevant. Hashtags: #Shorts is mandatory + 3–4 topic hashtags.</p>
            <p className="text-muted mb-3">Thumbnail: YouTube auto-selects a frame. You can choose a specific moment — pick the most visually striking frame from your Short. It matters for CTR in the Subscriptions feed and search.</p>
            <p className="text-muted mb-3">Best posting times: evenings (6–10 PM in your target audience's timezone) on weekdays, and mornings (10 AM–1 PM) on weekends. After 2–3 weeks of regular uploads, check your own YouTube Analytics for peak activity times.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-shorts-views','YouTube Shorts — How to Get Views'], ['/blog/youtube-algorithm-2025','YouTube Algorithm 2025'], ['/blog/best-free-video-editing-software','Best Free Video Editing Software']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
