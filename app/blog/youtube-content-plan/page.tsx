import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'YouTube Content Plan — How to Plan a Month of Videos', description: 'How to create a YouTube content calendar: finding video ideas, planning frequency, balancing content types. Template included.', keywords: ['youtube content plan', 'youtube content calendar', 'youtube video ideas', 'how to plan youtube content'], alternates: { canonical: 'https://tubekit.app/blog/youtube-content-plan' }, openGraph: { title: 'YouTube Content Plan — How to Plan a Month of Videos', description: 'How to create a YouTube content calendar: finding video ideas, planning frequency, balancing content types. Template included.', url: 'https://tubekit.app/blog/youtube-content-plan' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap"><span>📅 Strategy</span><span>·</span><span>8 min read</span></div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Content Plan — How to Plan a Month of Videos</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to create a YouTube content calendar: finding video ideas, planning frequency, balancing content types. Template included.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">See what's trending in your niche today</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/trends" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">View trends →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Why content planning matters</h2>
            <p className="text-muted mb-3">Channels that grow consistently plan their content in advance. Without a plan, you spend creative energy choosing topics instead of creating. With a plan, every session is productive.</p>
            <p className="text-muted mb-3">The algorithm favors channels that publish consistently. One video per week on the same day builds a stronger signal than irregular uploads. Your audience also learns to expect your content at a specific time.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Sources of video ideas</h2>
            <p className="text-muted mb-3">YouTube autocomplete: type your niche into YouTube search and collect every autocomplete suggestion. These are real searches from real people — guaranteed demand.</p>
            <p className="text-muted mb-3">Competitor top videos: look at the most-viewed videos from successful channels in your niche over the past year. Which topics appear repeatedly? Those are proven audience interests.</p>
            <p className="text-muted mb-3">Your own comments: questions that appear multiple times are explicitly asking you to make that video. Your audience is your content team.</p>
            <p className="text-muted mb-3">TubeKit Trends: check what's going viral in your niche right now. Trending topics in the first 24–72 hours get algorithm boosts.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">A simple monthly content framework</h2>
            <p className="text-muted mb-3">Week 1 — Foundational: an educational video on a core topic in your niche. Targets search traffic, evergreen.</p>
            <p className="text-muted mb-3">Week 2 — Response: answer a frequently asked question from your community. High engagement because the audience explicitly requested it.</p>
            <p className="text-muted mb-3">Week 3 — Trending: a video on a timely topic or trend in your niche. Higher short-term traffic potential.</p>
            <p className="text-muted mb-3">Week 4 — Personal/story: a case study, experiment result, or personal experience. Builds deeper connection with your audience.</p>
            <p className="text-muted mb-3">Plus 2–3 Shorts per week throughout the month to maintain Shorts algorithm favor.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How not to burn out</h2>
            <p className="text-muted mb-3">Batch filming: when you're already set up and in the zone, film 2–3 videos in one session. This saves setup time and energy. One filming day can cover 2–3 weeks of content.</p>
            <p className="text-muted mb-3">Keep a 'content buffer': have 2–3 finished videos ready to publish. This eliminates deadline pressure and lets you publish consistently even during travel, illness or busy periods.</p>
            <p className="text-muted mb-3">Don't chase perfection: a good video published on schedule beats a perfect video delayed by two weeks. Consistency builds audiences — perfection usually doesn't.</p>
          </div></div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-algorithm-2025','YouTube Algorithm 2025'], ['/blog/how-to-start-youtube-channel','How to Start a YouTube Channel'], ['/blog/how-to-grow-youtube-channel','How to Grow Your Channel']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}