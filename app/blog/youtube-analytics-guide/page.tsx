import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'YouTube Analytics Guide — How to Read Your Stats and Grow', description: 'Complete guide to YouTube Analytics: CTR, retention, traffic sources, audience demographics. How to use data to make better content decisions.', keywords: ['youtube analytics', 'how to read youtube analytics', 'youtube studio analytics guide', 'youtube channel statistics'], alternates: { canonical: 'https://tubekit.app/blog/youtube-analytics-guide' }, openGraph: { title: 'YouTube Analytics Guide — How to Read Your Stats and Grow', description: 'Complete guide to YouTube Analytics: CTR, retention, traffic sources, audience demographics. How to use data to make better content decisions.', url: 'https://tubekit.app/blog/youtube-analytics-guide' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap"><span>📊 Analytics</span><span>·</span><span>9 min read</span></div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Analytics Guide — How to Read Your Stats and Grow</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Complete guide to YouTube Analytics: CTR, retention, traffic sources, audience demographics. How to use data to make better content decisions.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Analyze any YouTube channel's stats</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="  /channel-analysis" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Analyze channel →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">The most important metrics in YouTube Analytics</h2>
            <p className="text-muted mb-3">CTR (Impression click-through rate): percentage of people who clicked your thumbnail after seeing it. This is the health of your thumbnail and title. Benchmark: 4–8% for most channels. Below 3%? Redesign your thumbnails.</p>
            <p className="text-muted mb-3">Average View Duration (AVD) and audience retention: how long viewers watch and what percentage remain at each point. The algorithm compares your retention against other videos of similar length. Your goal is above average for your niche.</p>
            <p className="text-muted mb-3">Watch time and views: baseline metrics that show scale but not quality. 10,000 views with 80% retention is better than 100,000 views with 10% retention.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How to read the audience retention graph</h2>
            <p className="text-muted mb-3">The retention graph is the most valuable report in Analytics. A healthy curve gradually decreases from 100% at the start to some lower percentage at the end.</p>
            <p className="text-muted mb-3">Look for sharp drops — these are moments where viewers leave. Watch what's happening at those exact timestamps in your video. Common causes: too-long intro, boring section, broken promise (the video doesn't deliver what the title/thumbnail suggested).</p>
            <p className="text-muted mb-3">Look for peaks — moments where viewers rewind and re-watch. This content is resonating strongly. Make more of it.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Traffic sources — where your viewers come from</h2>
            <p className="text-muted mb-3">YouTube Search: viewers found you by searching a keyword. This is stable, compounding traffic. Optimize your titles and descriptions for searchability.</p>
            <p className="text-muted mb-3">Browse/Homepage: the algorithm is recommending you. Great for growth but volatile — algorithm changes can cut this overnight. Don't rely on it exclusively.</p>
            <p className="text-muted mb-3">Suggested Videos: YouTube shows your video alongside someone else's. This grows when your content is topically similar to popular videos.</p>
            <p className="text-muted mb-3">External: social media, websites, email. Build this deliberately as a hedge against algorithm changes.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Audience demographics — know your viewers</h2>
            <p className="text-muted mb-3">Age, gender and geography data helps you understand who's actually watching. This is also what you'll share with brands in your media kit.</p>
            <p className="text-muted mb-3">The 'other channels your viewers watch' report is gold for collaboration opportunities. If your audience overlaps with another creator's, that's a natural partnership.</p>
            <p className="text-muted mb-3">When your audience is most active: use this heatmap to schedule your uploads. Publish 1–2 hours before peak activity — your video gets engagement momentum right as your audience comes online.</p>
          </div></div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-algorithm-2025','YouTube Algorithm 2025'], ['/blog/thumbnail-ab-testing','A/B Testing Thumbnails'], ['/blog/how-to-grow-youtube-channel','How to Grow Your Channel']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}