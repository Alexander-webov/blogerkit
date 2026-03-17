import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube SEO Guide 2025 — How to Rank in YouTube and Google Search',
  description: 'Complete YouTube SEO guide: keyword research, title optimization, descriptions, tags, chapters. How to get consistent search traffic to your videos.',
  keywords: ['youtube seo', 'youtube seo guide 2025', 'how to rank on youtube', 'youtube keyword research', 'optimize youtube video'],
  alternates: { canonical: 'https://tubekit.app/blog/youtube-seo-guide' },
  openGraph: { title: 'YouTube SEO Guide 2025 — How to Rank in YouTube and Google Search', description: 'Complete YouTube SEO guide: keyword research, title optimization, descriptions, tags, chapters. How to get consistent search traffic to your videos.', url: 'https://tubekit.app/blog/youtube-seo-guide' },
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
          <span>🔍 SEO</span><span>·</span><span>11 min read</span><span>·</span><time dateTime="2025-03-04">March 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube SEO Guide 2025 — How to Rank in YouTube and Google Search</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Complete YouTube SEO guide: keyword research, title optimization, descriptions, tags, chapters. How to get consistent search traffic to your videos.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Generate SEO-optimized titles for your videos</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/titles" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Generate titles →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How YouTube search works</h2>
            <p className="text-muted mb-3">YouTube ranks videos in search based on: relevance (how well title, description and tags match the query), engagement (CTR, likes, comments, watch time), and channel authority (upload history, audience engagement patterns).</p>
            <p className="text-muted mb-3">Important distinction: YouTube SEO differs from Google SEO. Video quality metrics (CTR and retention) matter more than keyword density. A keyword-stuffed title with boring content won't rank.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 1 — Keyword research</h2>
            <p className="text-muted mb-3">YouTube autocomplete: start typing your topic and look at the autocomplete suggestions. Every suggestion is a real search query from real users. These are your keyword opportunities.</p>
            <p className="text-muted mb-3">Competitor research: find successful videos in your niche and look at their titles and tags. What keywords do they use consistently? Can you create a better video on the same topic?</p>
            <p className="text-muted mb-3">Google Trends: check search volume trends for your keyword ideas. Useful for understanding whether a topic is growing or declining.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 2 — Optimize your title</h2>
            <p className="text-muted mb-3">Place your primary keyword in the first 3–5 words of the title. Example: 'YouTube SEO in 2025 — How to Get More Views from Search' — the keyword is front-loaded.</p>
            <p className="text-muted mb-3">Keep titles under 60 characters so they don't get truncated in search results. Include the year for evergreen topics — it signals freshness to the algorithm and to viewers looking for current information.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 3 — Write a strong description</h2>
            <p className="text-muted mb-3">The first 150 characters appear in search results as a snippet before the 'show more' button. This is prime SEO real estate. Formula: '[Primary keyword] — [one sentence on what the viewer will learn]. In this video: [3 main points].'</p>
            <p className="text-muted mb-3">The full description should be 250–500 words with natural keyword variations. Not a wall of keywords — write readable sentences that describe what the video covers.</p>
            <p className="text-muted mb-3">Add timestamps (chapters): they improve both retention and SEO. Google sometimes shows individual chapters in search results, creating additional entry points for your video.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Step 4 — Tags</h2>
            <p className="text-muted mb-3">Tags have less impact than they used to, but still help YouTube understand context. Add 8–12 tags: primary keyword, variations and synonyms, broader topic tags.</p>
            <p className="text-muted mb-3">Don't add unrelated tags hoping to hijack traffic from popular videos. YouTube detects this and can lower your ranking. Quality over quantity.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">YouTube SEO and Google</h2>
            <p className="text-muted mb-3">Google shows YouTube videos in regular search results — especially for 'how to,' 'review,' 'tutorial,' and 'best' queries. This is free additional traffic that many creators ignore.</p>
            <p className="text-muted mb-3">To rank in Google: use exact phrases people type into Google (not just YouTube), add a transcript or detailed description (Google indexes text), and get external links to your video from relevant websites — this builds authority in Google's eyes.</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-algorithm-2025', 'YouTube Algorithm 2025'],
            ['/blog/how-to-write-youtube-description', 'How to Write a YouTube Video Description'],
            ['/blog/youtube-tags-guide', 'YouTube Tags — How to Use Them Right'],].map(([href, title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
