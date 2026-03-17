import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Shorts — How to Get Views in 2025',
  description: 'How to get views on YouTube Shorts: the algorithm, optimal length, hooks, hashtags, best posting times. What formats go viral in 2025.',
  keywords: ['youtube shorts views', 'how to get views on youtube shorts', 'youtube shorts algorithm', 'youtube shorts strategy 2025'],
  alternates: { canonical: 'https://tubekit.app/blog/youtube-shorts-views' },
  openGraph: { title: 'YouTube Shorts — How to Get Views in 2025', description: 'How to get views on YouTube Shorts: the algorithm, optimal length, hooks, hashtags, best posting times. What formats go viral in 2025.', url: 'https://tubekit.app/blog/youtube-shorts-views' },
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
          <span>📱 Shorts</span><span>·</span><span>9 min read</span><span>·</span><time dateTime="2025-03">March 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Shorts — How to Get Views in 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to get views on YouTube Shorts: the algorithm, optimal length, hooks, hashtags, best posting times. What formats go viral in 2025.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Crop your video to 9:16 for Shorts</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Open video editor →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">How the Shorts algorithm works</h2>
            <p className="text-muted mb-3">The Shorts algorithm is completely separate from the long-form video algorithm. Key metrics it measures: completion rate (percentage who watch to the end), re-watches (same viewer watching multiple times), and swipes away (viewer skipped — bad signal).</p>
            <p className="text-muted mb-3">Critical difference from long-form: subscriber count barely matters. A brand-new channel with zero subscribers can get 1 million Shorts views if the content hooks people. This is the biggest opportunity for new creators in 2025.</p>
            <p className="text-muted mb-3">The algorithm tests each Short on a small sample audience. High completion rate? Shows to more people. Low completion (viewers swiping away in the first second)? Distribution stops. The first second is everything.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Optimal Shorts length in 2025</h2>
            <p className="text-muted mb-3">Shorts between 30–45 seconds show the best completion rates in 2025. Long enough to deliver one complete idea, short enough that viewers watch to the end.</p>
            <p className="text-muted mb-3">Under 15 seconds: highest completion but hard to deliver real value. Works for memes, unexpected facts, quick tips. 60+ seconds: more content but lower completion. Works for tutorials and explanations.</p>
            <p className="text-muted mb-3">Rule: make your Short exactly as long as it needs to be — not longer, not shorter. Never pad a Short to hit a 'target' length.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">The perfect hook — first 1 second</h2>
            <p className="text-muted mb-3">In the Shorts feed, the first frame plays while people are scrolling. If the first second doesn't stop their thumb, they swipe and your distribution dies.</p>
            <p className="text-muted mb-3">Hooks that work: a question ('Why do 90% of people do this wrong?'), a strong claim ('This changed everything for me'), a visual hook (show the result before the explanation), or an incomplete sentence ('Never do this if you...') that creates curiosity.</p>
            <p className="text-muted mb-3">Never start a Short with 'Hey guys, welcome back to my channel.' Start in the middle of the action. Context can come later — the hook must come first.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Formats that go viral</h2>
            <p className="text-muted mb-3">Quick useful tip: '3 things I wish I knew before starting [topic].' Delivers immediate value, high completion because viewers want all 3 tips.</p>
            <p className="text-muted mb-3">Unexpected fact: 'Did you know [surprising information]?' Triggers curiosity and shares. The brain wants to know the ending.</p>
            <p className="text-muted mb-3">Before/after transformation: physical transformation, room makeover, skill improvement. Visual satisfaction drives re-watches.</p>
            <p className="text-muted mb-3">What NOT to do: repurposing long-form video clips with black bars (lower completion), starting with intros (viewers leave), making the Short dependent on context from previous videos.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Hashtags, titles and posting strategy</h2>
            <p className="text-muted mb-3">Include #Shorts in your description so YouTube recognizes the format. Add 3–4 topic-relevant hashtags. Don't use 20 hashtags — it looks spammy.</p>
            <p className="text-muted mb-3">Posting frequency: 3–7 Shorts per week shows the best growth results. Consistency signals to the algorithm that your channel is active. Batch-film 5–7 Shorts in one session and schedule them throughout the week.</p>
            <p className="text-muted mb-3">Converting Shorts viewers to long-form subscribers: end your Short with 'full video on my channel' or 'link in description.' A percentage of engaged Shorts viewers will follow you to long-form content.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/how-to-make-youtube-shorts','How to Make Shorts from Regular Videos'], ['/blog/youtube-algorithm-2025','YouTube Algorithm 2025'], ['/blog/how-to-grow-youtube-channel','How to Grow Your YouTube Channel']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
