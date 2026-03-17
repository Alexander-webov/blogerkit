import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'How to Set Up a YouTube Channel — Banner, Avatar, Description 2025', description: 'Complete guide to setting up your YouTube channel: banner size, profile picture, description, links, sections. Checklist included.', keywords: ['how to set up youtube channel', 'youtube channel setup', 'youtube banner size', 'youtube channel art', 'youtube channel description'], alternates: { canonical: 'https://tubekit.app/blog/how-to-set-up-youtube-channel' }, openGraph: { title: 'How to Set Up a YouTube Channel — Banner, Avatar, Description 2025', description: 'Complete guide to setting up your YouTube channel: banner size, profile picture, description, links, sections. Checklist included.', url: 'https://tubekit.app/blog/how-to-set-up-youtube-channel' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap"><span>✨ Setup</span><span>·</span><span>9 min read</span></div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How to Set Up a YouTube Channel — Banner, Avatar, Description 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Complete guide to setting up your YouTube channel: banner size, profile picture, description, links, sections. Checklist included.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Create thumbnails in your channel's visual style</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Make thumbnails →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Channel name — the foundation of your brand</h2>
            <p className="text-muted mb-3">Your channel name should be short (1–3 words), easy to say aloud, memorable on first encounter, and ideally reflective of your niche or personality. Check that it's available on YouTube and other platforms you plan to use.</p>
            <p className="text-muted mb-3">Two naming approaches: personal brand (your name or pseudonym — gives flexibility to evolve) or topical brand (name reflects the niche — better for SEO, immediately communicates value to potential subscribers).</p>
            <p className="text-muted mb-3">You can change your name up to 3 times per 90 days via YouTube Studio → Settings → Channel → Basic info. The custom URL stays unchanged after a name change.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Profile picture — size and design rules</h2>
            <p className="text-muted mb-3">Upload size: minimum 800×800 pixels, square format. YouTube displays it as a circle — ensure key elements (face, logo) are centered and not cut off by the circular crop.</p>
            <p className="text-muted mb-3">For personal brands: clear headshot, neutral or simple background, direct eye contact with camera, good lighting. Must look sharp at 36px — the size shown in comments.</p>
            <p className="text-muted mb-3">For topic-based channels: logo or illustration that reads clearly at small sizes. Avoid small text or fine details that disappear when scaled down. Use 2–3 colors maximum. Use the same image across all your social platforms for brand consistency.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Banner — sizes and design</h2>
            <p className="text-muted mb-3">Upload at 2560×1440 pixels. This is the TV-screen maximum. The safe zone — content visible on all devices — is the center 1235×338 pixels. Place all text and important visuals within this area.</p>
            <p className="text-muted mb-3">What to include on the banner: channel name in a large, readable font, your upload schedule ('New video every Friday'), and optionally a photo or illustration. Keep it clean — avoid cluttering it with too much information.</p>
            <p className="text-muted mb-3">Tools: Canva has YouTube banner templates with the safe zone pre-marked. Create your banner there, download at full resolution, and upload.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Channel description — SEO and conversion</h2>
            <p className="text-muted mb-3">The first 150 characters appear in YouTube search results. Use this space wisely: start with a keyword-rich sentence about who the channel serves and what they'll get.</p>
            <p className="text-muted mb-3">Formula: '[Keyword describing your niche] — [what subscribers will get]. New [video/episode] every [day]. [2-sentence personal or channel introduction]. Subscribe to [specific benefit].'</p>
            <p className="text-muted mb-3">The full description can be up to 1,000 characters. Include relevant keywords naturally, your social media handles, and a contact email for business inquiries.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Links and channel sections</h2>
            <p className="text-muted mb-3">YouTube lets you add up to 5 links displayed on your banner. Add your most important external platforms: newsletter, website, Patreon, social media. The first link is most prominently displayed on mobile — put your highest-priority destination here.</p>
            <p className="text-muted mb-3">Channel sections: customize your channel homepage to guide new visitors. Recommended layout: 'Featured video' (your channel trailer) at top, then 2–3 curated playlists by topic, then 'Popular uploads.'</p>
            <p className="text-muted mb-3">Channel trailer: set a 60–90 second video as your trailer under Studio → Customization → Layout. This auto-plays for non-subscribers visiting your channel page.</p>
          </div></div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/how-to-start-youtube-channel','How to Start a YouTube Channel'], ['/blog/youtube-channel-trailer','How to Make a Channel Trailer'], ['/blog/how-to-make-youtube-thumbnail','How to Make YouTube Thumbnails']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}