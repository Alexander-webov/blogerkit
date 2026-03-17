import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get YouTube Sponsorships — Complete Guide for Creators 2025',
  description: 'How to find brand sponsors for your YouTube channel, create a media kit, set rates, negotiate deals and run successful integrations. Works at any channel size.',
  keywords: ['youtube sponsorships', 'how to get youtube sponsors', 'youtube brand deals', 'how to find sponsors youtube', 'influencer marketing youtube'],
  alternates: { canonical: 'https://tubekit.app/blog/working-with-sponsors' },
  openGraph: { title: 'How to Get YouTube Sponsorships — Complete Guide for Creators 2025', description: 'How to find brand sponsors for your YouTube channel, create a media kit, set rates, negotiate deals and run successful integrations. Works at any channel size.', url: 'https://tubekit.app/blog/working-with-sponsors' },
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
          <span>🤝 Sponsorships</span><span>·</span><span>10 min read</span><span>·</span><time dateTime="2025-03">March 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How to Get YouTube Sponsorships — Complete Guide for Creators 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to find brand sponsors for your YouTube channel, create a media kit, set rates, negotiate deals and run successful integrations. Works at any channel size.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Create a professional media kit for brand deals</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/mediakit" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Create media kit →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">When to start looking for sponsors</h2>
            <p className="text-muted mb-3">Technically, you can reach out to brands at any subscriber count — some highly niche channels with 2,000 subscribers already get paid deals. Realistically, most brands start responding to outreach at 10,000+ subscribers in a well-defined niche.</p>
            <p className="text-muted mb-3">What matters more than size: your audience's purchasing power and relevance to the brand, engagement rate (comments, likes relative to views), niche clarity (a fitness channel for runners is more attractive to a running shoe brand than a general fitness channel).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Create your media kit first</h2>
            <p className="text-muted mb-3">A media kit is a PDF document you send to brands. Without one, every conversation starts from scratch. With one, you look professional, save time, and often command higher rates.</p>
            <p className="text-muted mb-3">Your media kit should include: channel description and niche, key metrics (subscribers, average views, engagement rate), audience demographics from YouTube Analytics, ad format options with examples and pricing, and contact information.</p>
            <p className="text-muted mb-3">Update your media kit every 2–3 months as your channel grows. Outdated numbers in a media kit signal carelessness to brands.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How to find sponsors</h2>
            <p className="text-muted mb-3">Influencer marketplaces: AspireIQ, Grapevine, Creator.co, YouTube BrandConnect. Brands post campaigns and you apply. Good for discovery but rates are often lower than direct deals.</p>
            <p className="text-muted mb-3">Direct outreach: compile a list of brands in your niche, find the marketing team's email (usually on the company website or LinkedIn), and send a personalized pitch. Conversion rate is low, but direct deals typically pay 2–3x marketplace rates.</p>
            <p className="text-muted mb-3">Inbound: add a business email to your YouTube channel description. As your channel grows, brands will find you. This becomes your main source after ~50K subscribers.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Setting your rates</h2>
            <p className="text-muted mb-3">Base rate formula: average video views × CPM for your niche. Finance/business CPM: $15–40, Technology: $10–25, Lifestyle: $5–15, Entertainment: $3–10.</p>
            <p className="text-muted mb-3">Example: finance channel averaging 40,000 views. Base rate: 40 × $25 = $1,000. In practice, charge 1.5–2x the base rate if your engagement is strong.</p>
            <p className="text-muted mb-3">Never name your price first if the brand asks for your rate. Ask: 'What's the budget you're working with for this campaign?' Brands usually have 2–3x their opening number as headroom.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Integration formats and what they pay</h2>
            <p className="text-muted mb-3">Pre-roll (15–30 seconds at the start): cheapest format, viewers often skip. Price: 50–70% of mid-roll rate.</p>
            <p className="text-muted mb-3">Mid-roll integration (60–120 seconds in the middle): most popular format. Price: your standard rate. Viewers who've watched this far are more engaged.</p>
            <p className="text-muted mb-3">Dedicated video: entire video about the product. Most expensive (2–4x standard rate) and most effective for the brand. Requires genuine expertise with the product.</p>
            <p className="text-muted mb-3">Package deals: multiple integrations across several videos. Offer 15–20% discount for packages — you get predictable income, they get better value.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Protecting your audience's trust</h2>
            <p className="text-muted mb-3">Only promote products you'd genuinely recommend to a friend. Your audience built trust over months or years — one bad recommendation can destroy it.</p>
            <p className="text-muted mb-3">Always disclose sponsorships. Beyond being legally required in most countries, it's simply honest. Most viewers don't mind sponsored content when it's relevant and disclosed.</p>
            <p className="text-muted mb-3">Don't oversaturate. Maximum 1–2 sponsored videos per month when starting, no more than 30% of your content once established. More than this and subscribers start leaving.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/how-to-make-money-youtube','All Ways to Make Money on YouTube'], ['/blog/how-much-do-youtubers-make','How Much Do YouTubers Actually Make'], ['/blog/youtube-monetization-guide','YouTube Monetization Guide']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
