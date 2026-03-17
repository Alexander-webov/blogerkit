import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Algorithm 2025 — How It Works and What Changed',
  description: 'Deep dive into the YouTube algorithm in 2025: CTR, watch time, AVD, Shorts, recommendations. How to get more views by working with the algorithm.',
  keywords: ['youtube algorithm 2025', 'how youtube algorithm works', 'youtube recommendations algorithm', 'youtube algorithm explained'],
  alternates: { canonical: 'https://tubekit.app/blog/youtube-algorithm-2025' },
  openGraph: { title: 'YouTube Algorithm 2025 — How It Works and What Changed', description: 'Deep dive into the YouTube algorithm in 2025: CTR, watch time, AVD, Shorts, recommendations. How to get more views by working with the algorithm.', url: 'https://tubekit.app/blog/youtube-algorithm-2025' },
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
          <span>⚙️ Algorithm</span><span>·</span><span>9 min read</span><span>·</span><time dateTime="2025-03-02">March 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Algorithm 2025 — How It Works and What Changed</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Deep dive into the YouTube algorithm in 2025: CTR, watch time, AVD, Shorts, recommendations. How to get more views by working with the algorithm.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">See what's trending in your niche</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/trends" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">View trends →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How YouTube decides what to show viewers</h2>
            <p className="text-muted mb-3">YouTube is a recommendation engine whose primary goal is to keep viewers on the platform as long as possible. Every time someone opens YouTube, the algorithm analyzes thousands of signals in milliseconds and picks the videos most likely to keep that specific person watching.</p>
            <p className="text-muted mb-3">Key principle: YouTube doesn't promote videos you made — it promotes videos that specific viewers enjoy. The algorithm constantly tests your video on small audience samples and watches their reaction. Good reaction? Shows it to more people. Bad reaction? Stops distribution.</p>
            <p className="text-muted mb-3">Three main surfaces where YouTube promotes videos: Home (largest traffic source for most channels), Suggested Videos (shown alongside other videos), and Search (keyword-based, like Google).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">CTR — the first and most important filter</h2>
            <p className="text-muted mb-3">CTR (click-through rate) is the percentage of people who click your video after seeing it in the feed. This is the first thing the algorithm checks. If 1,000 people saw your thumbnail and only 30 clicked — that's a 3% CTR. That's poor. The algorithm will decide the video is uninteresting and stop showing it.</p>
            <p className="text-muted mb-3">Benchmark CTRs in 2025: entertainment content 6–10%, educational 4–7%, news 3–6%, niche professional 2–5%. If yours is below these benchmarks, the problem is your thumbnail or title.</p>
            <p className="text-muted mb-3">What drives CTR: thumbnail (60% of impact), title (30%), and upload timing (10%). Your thumbnail needs a large face with clear emotion or an intriguing visual, and text of 3–5 words readable in one second.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Watch time and audience retention — the second filter</h2>
            <p className="text-muted mb-3">After someone clicks, the algorithm measures how long they watch. AVD (Average View Duration) is the average watch time. Retention shows the percentage of viewers remaining at each minute of the video.</p>
            <p className="text-muted mb-3">YouTube doesn't require videos to be watched to completion — it compares your AVD against other videos of similar length. If your 10-minute video has a 50% retention, you're above average. The algorithm will push it more.</p>
            <p className="text-muted mb-3">Critical retention points: the first 30 seconds (where 30–40% of viewers leave — your hook failed), the first 2 minutes (if you haven't engaged them they'll leave), and mid-video dips (add a new hook or change pace).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">What changed in the YouTube algorithm in 2025</h2>
            <p className="text-muted mb-3">Several important shifts happened in 2024–2025. First, the algorithm became more aggressive about promoting small channels in low-competition niches — if you own a narrow topic, your growth chances improved significantly.</p>
            <p className="text-muted mb-3">Second, YouTube now shows videos to people who've never been on your channel. This means every video needs to be understandable to a new viewer — don't assume they know your context.</p>
            <p className="text-muted mb-3">Third, comment activity now outweighs likes as an engagement signal. Videos with active discussion in the comments get a distribution boost. Ask your viewers a specific question at the end — not just 'comment below.'</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Practical takeaways</h2>
            <p className="text-muted mb-3">Focus on the first 30 seconds of every video — this is where watch time is won or lost. Start with an intriguing question, a surprising fact, or the promise of a specific outcome.</p>
            <p className="text-muted mb-3">Check your CTR in YouTube Studio every 48 hours after publishing. Below 4%? Your thumbnails need work. Test different thumbnail styles and compare results across videos.</p>
            <p className="text-muted mb-3">Publish on a consistent schedule. The algorithm favors predictable channels. One video per week beats five videos in one week followed by a month of silence.</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/how-to-grow-youtube-channel', 'How to Grow Your YouTube Channel'],
            ['/blog/youtube-analytics-guide', 'YouTube Analytics — How to Read Your Stats'],
            ['/blog/youtube-seo-guide', 'YouTube SEO — Rank in Search'],].map(([href, title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
