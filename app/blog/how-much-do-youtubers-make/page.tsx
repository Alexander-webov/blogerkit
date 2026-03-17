import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Do YouTubers Actually Make in 2025 — Real Numbers',
  description: 'Real YouTube earnings data for 2025: how much YouTubers make from ads, sponsorships and other sources at different subscriber counts. Honest breakdown.',
  keywords: ['how much do youtubers make', 'youtube earnings 2025', 'youtube income per view', 'youtube rpm 2025'],
  alternates: { canonical: 'https://tubekit.app/blog/how-much-do-youtubers-make' },
  openGraph: { title: 'How Much Do YouTubers Actually Make in 2025 — Real Numbers', description: 'Real YouTube earnings data for 2025: how much YouTubers make from ads, sponsorships and other sources at different subscriber counts. Honest breakdown.', url: 'https://tubekit.app/blog/how-much-do-youtubers-make' },
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
          <span>💵 Earnings</span><span>·</span><span>9 min read</span><span>·</span><time dateTime="2025-03">March 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How Much Do YouTubers Actually Make in 2025 — Real Numbers</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Real YouTube earnings data for 2025: how much YouTubers make from ads, sponsorships and other sources at different subscriber counts. Honest breakdown.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Calculate your channel's sponsorship rate</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/calculator" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Calculate rate →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">The honest answer: it varies enormously</h2>
            <p className="text-muted mb-3">A channel with 100,000 subscribers in personal finance might earn $15,000/month. A channel with 500,000 subscribers in entertainment might earn $3,000/month. Subscriber count is a vanity metric — niche and monetization strategy determine actual income.</p>
            <p className="text-muted mb-3">The main income sources: AdSense (most visible but often smallest), brand sponsorships (usually the largest), courses and products (highest margin), memberships (most stable).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">AdSense income by niche — real RPM data 2025</h2>
            <p className="text-muted mb-3">RPM (revenue per 1,000 views, after YouTube's 45% cut): Personal finance: $8–20, Technology/software: $5–15, Business/marketing: $6–18, Health & fitness: $3–8, Food & cooking: $2–6, Entertainment: $1–4, Gaming: $1–3.</p>
            <p className="text-muted mb-3">At 100,000 monthly views: finance channel earns $800–2,000 from ads, gaming channel earns $100–300. This is why niche matters more than raw views for AdSense income.</p>
            <p className="text-muted mb-3">Seasonal variation: Q4 (October–December) typically pays 2–3x more than Q1 because advertisers spend more before the holidays. January RPMs can drop by 50% from December peaks.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Sponsorship income — the real money</h2>
            <p className="text-muted mb-3">Most successful YouTubers make 60–80% of their income from sponsorships, not ads. A mid-size channel (50K–200K subscribers) in a valuable niche typically earns $2,000–20,000/month from sponsorships alone — often more than AdSense at 10x the views.</p>
            <p className="text-muted mb-3">Typical rates per sponsored integration in 2025: 10K–50K subscribers: $300–2,000, 50K–200K: $1,500–10,000, 200K–1M: $5,000–50,000, 1M+: $25,000–500,000+.</p>
            <p className="text-muted mb-3">Finance, business, and tech niches have higher rates because brands targeting those audiences have bigger marketing budgets. A finance creator with 30K subscribers can charge more than a gaming creator with 300K.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Other income streams</h2>
            <p className="text-muted mb-3">Courses: highly variable, but a $200 course sold to 0.5% of a 50K-subscriber audience is $50,000 from a single launch. Many creators repeat launches quarterly.</p>
            <p className="text-muted mb-3">Channel memberships: typically 0.5–2% of subscribers pay for memberships. At $5/month average, a 100K subscriber channel might earn $2,500–10,000/month.</p>
            <p className="text-muted mb-3">Affiliate income: very niche-dependent. A review channel in tech or personal finance with smart affiliate strategy can earn $5,000–50,000/month from affiliate links.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">What's realistic at different stages</h2>
            <p className="text-muted mb-3">Under 10K subscribers: $0–500/month (mostly affiliate links if you're lucky). This stage is about building, not earning.</p>
            <p className="text-muted mb-3">10K–50K subscribers: $500–5,000/month possible with sponsorships and affiliate links. First brand deals start happening here.</p>
            <p className="text-muted mb-3">50K–200K subscribers: $2,000–20,000/month for well-monetized channels. This is where YouTube becomes a real income.</p>
            <p className="text-muted mb-3">200K+ subscribers: $10,000–100,000+/month for channels with strong sponsorship strategies and additional income sources. The ceiling is effectively unlimited.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/how-to-make-money-youtube','All Ways to Make Money on YouTube'], ['/blog/working-with-sponsors','How to Get and Work with Sponsors'], ['/blog/youtube-monetization-guide','YouTube Monetization — How to Get Started']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
