import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'How to Make a YouTube Channel Trailer That Converts — 2025', description: 'How to create a YouTube channel trailer that turns visitors into subscribers: structure, length, what to say and how to film it.', keywords: ['youtube channel trailer', 'how to make youtube channel trailer', 'youtube channel intro', 'channel trailer for new visitors youtube'], alternates: { canonical: 'https://tubekit.app/blog/youtube-channel-trailer' }, openGraph: { title: 'How to Make a YouTube Channel Trailer That Converts — 2025', description: 'How to create a YouTube channel trailer that turns visitors into subscribers: structure, length, what to say and how to film it.', url: 'https://tubekit.app/blog/youtube-channel-trailer' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap"><span>🎬 Channel</span><span>·</span><span>8 min read</span></div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How to Make a YouTube Channel Trailer That Converts — 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to create a YouTube channel trailer that turns visitors into subscribers: structure, length, what to say and how to film it.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Analyze your channel performance</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="  /channel-analysis" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Analyze channel →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">What is a channel trailer and why it matters</h2>
            <p className="text-muted mb-3">The channel trailer is a video that automatically plays for non-subscribers when they visit your channel page. Subscribers see your latest video instead — the trailer is exclusively for new visitors.</p>
            <p className="text-muted mb-3">Why it matters: every day, people land on your channel from search results, recommendations, and social media shares. Without a trailer, they see a grid of videos with no context. With a compelling trailer, you can convert 20–40% more of these visitors into subscribers.</p>
            <p className="text-muted mb-3">Think of the trailer as a 60–90 second pitch: who is this channel for, what problem does it solve, why should this person subscribe?</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Optimal length and structure</h2>
            <p className="text-muted mb-3">Ideal trailer length: 60–90 seconds. Long enough to build trust and excitement, short enough to maintain a stranger's attention.</p>
            <p className="text-muted mb-3">Structure: First 5 seconds — hook (your most exciting moment or a provocative question). Seconds 5–20 — who this is for and what problem you solve. Seconds 20–50 — proof (a fast-cut montage of your best moments). Seconds 50–70 — your upload schedule and what they'll get. Final 15 seconds — clear call to subscribe with a specific reason.</p>
            <p className="text-muted mb-3">What NOT to do: start with 'Hey guys, welcome to my channel' — you have 3 seconds before a stranger leaves. Don't start with your name and background — start with the value.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How to film a great trailer</h2>
            <p className="text-muted mb-3">Script it. Unlike a vlog, a trailer is a sales video. Every sentence should drive toward one goal: the subscription. Write the script, read it aloud, cut everything that doesn't add value.</p>
            <p className="text-muted mb-3">Use your best footage. The trailer is your channel's showcase. Use the highest quality clips you have — the moments where you're most engaging, the best visuals, the most compelling stories.</p>
            <p className="text-muted mb-3">Keep production quality above your channel average. If someone's deciding whether to subscribe based on the trailer, it should represent the best your channel can offer.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How to set up your channel trailer</h2>
            <p className="text-muted mb-3">Upload the trailer as a regular video (can be public or unlisted — many creators make trailers unlisted so they don't appear in the main feed).</p>
            <p className="text-muted mb-3">Go to YouTube Studio → Customization → Layout → 'For new visitors' section → 'Channel trailer.' Select your trailer video.</p>
            <p className="text-muted mb-3">Check how it looks in incognito mode — that's exactly what a new visitor sees. If it doesn't immediately communicate value, refilm it.</p>
          </div></div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/how-to-start-youtube-channel','How to Start a YouTube Channel'], ['/blog/how-to-grow-youtube-channel','How to Grow Your Channel'], ['/blog/how-to-set-up-youtube-channel','How to Set Up a YouTube Channel']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}