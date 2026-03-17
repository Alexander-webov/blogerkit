import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'How to Write a YouTube Video Description That Ranks — 2025 Guide', description: 'How to write YouTube video descriptions that rank in search: structure, keywords, timestamps, links. Includes a copy-paste template.', keywords: ['youtube video description', 'how to write youtube description', 'youtube description seo', 'youtube description template', 'youtube description keywords'], alternates: { canonical: 'https://tubekit.app/blog/how-to-write-youtube-description' }, openGraph: { title: 'How to Write a YouTube Video Description That Ranks — 2025 Guide', description: 'How to write YouTube video descriptions that rank in search: structure, keywords, timestamps, links. Includes a copy-paste template.', url: 'https://tubekit.app/blog/how-to-write-youtube-description' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap"><span>📝 SEO</span><span>·</span><span>8 min read</span></div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How to Write a YouTube Video Description That Ranks — 2025 Guide</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to write YouTube video descriptions that rank in search: structure, keywords, timestamps, links. Includes a copy-paste template.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Generate click-worthy titles for your videos</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/titles" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Generate titles →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Why the description matters for SEO</h2>
            <p className="text-muted mb-3">YouTube analyzes the description to understand a video's topic. A well-written description with relevant keywords helps the algorithm show your video to the right people in search and suggested videos.</p>
            <p className="text-muted mb-3">The first 150 characters appear as a snippet in YouTube and Google search results — before the 'show more' button. This is your meta description. It directly affects whether someone clicks on your video in search.</p>
            <p className="text-muted mb-3">Google also indexes YouTube descriptions. Videos with detailed, keyword-rich descriptions often appear in Google search for related queries — giving you free traffic from the world's largest search engine.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">The structure of a perfect description</h2>
            <p className="text-muted mb-3">First paragraph (first 150 characters): primary keyword + one-sentence summary of what the viewer will learn. This is the most important SEO block.</p>
            <p className="text-muted mb-3">Main body (150–500 characters): expanded description of the video's content. Use keyword variations, synonyms and related phrases written in readable sentences — not a keyword dump.</p>
            <p className="text-muted mb-3">Timestamps: for videos over 5 minutes, add chapter markers. Format: 00:00 Introduction, 02:30 First point, 05:15 Second point. Timestamps improve retention and can appear as standalone results in Google search.</p>
            <p className="text-muted mb-3">Links and CTA: links to related videos, playlists, your website, social media. A subscribe call-to-action. Links in descriptions are clickable and drive additional views.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Description template</h2>
            <p className="text-muted mb-3">[Primary keyword] — [what the viewer will learn in one sentence]. In this video: [point 1], [point 2], [point 3].</p>
            <p className="text-muted mb-3">[Expanded description, 100–200 words, with keyword variations. Write like a human — readable sentences, not a list of keywords.]</p>
            <p className="text-muted mb-3">⏱ TIMESTAMPS:\n00:00 Introduction\n02:30 [Chapter 1]\n05:00 [Chapter 2]</p>
            <p className="text-muted mb-3">🔗 RESOURCES:\n→ [Related video]\n→ [Playlist]</p>
            <p className="text-muted mb-3">Subscribe for new videos every [day]: [channel link]</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Common mistakes</h2>
            <p className="text-muted mb-3">Empty description: you're leaving free SEO on the table. Even 2–3 sentences are better than nothing.</p>
            <p className="text-muted mb-3">Keyword stuffing: 'youtube seo youtube seo 2025 youtube rank' — YouTube's algorithm identifies this and penalizes it. Write for humans first.</p>
            <p className="text-muted mb-3">Copy-pasting the same description across videos: doesn't help the algorithm distinguish your videos and reduces individual SEO potential.</p>
            <p className="text-muted mb-3">Writing the description after publishing: YouTube indexes a video as soon as it's published. If the description is empty at that moment, you miss the initial indexing boost. Write it before you hit publish.</p>
          </div></div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-seo-guide','YouTube SEO Guide 2025'], ['/blog/youtube-tags-guide','YouTube Tags 2025'], ['/blog/youtube-algorithm-2025','YouTube Algorithm 2025']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}