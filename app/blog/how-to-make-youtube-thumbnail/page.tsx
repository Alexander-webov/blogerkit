import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Make a High-CTR YouTube Thumbnail in 2025',
  description: 'Step-by-step guide to making YouTube thumbnails that get clicked: design rules, size, tools, A/B testing. Increase your CTR by 2-3x.',
  keywords: ['how to make youtube thumbnail', 'youtube thumbnail design', 'youtube thumbnail size', 'high ctr youtube thumbnail'],
  alternates: { canonical: 'https://tubekit.app/blog/how-to-make-youtube-thumbnail' },
  openGraph: { title: 'How to Make a High-CTR YouTube Thumbnail in 2025', description: 'Step-by-step guide to making YouTube thumbnails that get clicked: design rules, size, tools, A/B testing. Increase your CTR by 2-3x.', url: 'https://tubekit.app/blog/how-to-make-youtube-thumbnail' },
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
          <span>🎨 Design</span><span>·</span><span>8 min read</span><span>·</span><time dateTime="2025-03-03">March 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How to Make a High-CTR YouTube Thumbnail in 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Step-by-step guide to making YouTube thumbnails that get clicked: design rules, size, tools, A/B testing. Increase your CTR by 2-3x.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Create your thumbnail right now</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Make thumbnail →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Why your thumbnail is the most important element</h2>
            <p className="text-muted mb-3">The thumbnail accounts for about 60% of your video's click-through rate. A bad thumbnail means low CTR, which means YouTube shows the video to fewer people — no matter how great the content is.</p>
            <p className="text-muted mb-3">Think about it from the viewer's perspective: they're scrolling through dozens of thumbnails in 2–3 seconds. Your thumbnail has one job — make them stop and click.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">The 4 rules of a high-CTR thumbnail</h2>
            <p className="text-muted mb-3">Rule 1 — Large face with clear emotion: Human faces are the most attention-grabbing element in any visual. Use a close-up shot where the emotion is immediately readable — surprise, excitement, concern. The expression should match the video's promise.</p>
            <p className="text-muted mb-3">Rule 2 — Bold, minimal text: Use 3–5 words maximum. The text should reinforce the intrigue, not explain the whole video. Font needs to be readable at thumbnail size (which is shown at about 200px wide in many places).</p>
            <p className="text-muted mb-3">Rule 3 — Contrasting colors: Your thumbnail competes with hundreds of others on the same page. Use colors that naturally stand out. Bright yellows, reds, and oranges on dark backgrounds tend to catch the eye.</p>
            <p className="text-muted mb-3">Rule 4 — Visual consistency: Your thumbnails should look like they belong to the same channel. Same fonts, same color palette, same style. This builds brand recognition — returning viewers start recognizing your thumbnails before reading the title.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Thumbnail size and technical specs</h2>
            <p className="text-muted mb-3">YouTube recommended thumbnail size: 1280×720 pixels (16:9 aspect ratio). File size limit: 2MB. Supported formats: JPG, PNG, GIF, BMP.</p>
            <p className="text-muted mb-3">The thumbnail is shown at very different sizes depending on device: small icon in search results, medium card on the homepage, large banner on mobile. Make sure your key elements (face, text) are visible at all sizes — avoid small details that disappear when scaled down.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Free tools to create thumbnails</h2>
            <p className="text-muted mb-3">Canva: the most popular option. Has dozens of YouTube thumbnail templates and a drag-and-drop editor. The free plan covers everything most creators need.</p>
            <p className="text-muted mb-3">TubeKit Thumbnail Maker: optimized specifically for YouTube with correct dimensions pre-loaded. 25+ templates sorted by style — tech, gaming, lifestyle, tutorial. Works directly in your browser.</p>
            <p className="text-muted mb-3">Photoshop / GIMP: maximum control. Worth learning if you want full design freedom, but has a steeper learning curve than Canva.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How to test if your thumbnail works</h2>
            <p className="text-muted mb-3">Before publishing, show your thumbnail to 5–10 people who don't know the context. Ask: 'Would you click this?' If fewer than 6 out of 10 say yes — redesign.</p>
            <p className="text-muted mb-3">After publishing, check your Impression CTR in YouTube Studio after 48 hours. Below 4%? Run an A/B test — YouTube's built-in Experiments feature lets you test two thumbnails on the same video and automatically shows you the winner.</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/thumbnail-ab-testing', 'A/B Testing YouTube Thumbnails — How to Increase CTR'],
            ['/blog/youtube-algorithm-2025', 'YouTube Algorithm 2025 — How It Works'],
            ['/blog/how-to-start-youtube-channel', 'How to Start a YouTube Channel'],].map(([href, title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
