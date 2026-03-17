import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Home Lighting Setup for YouTube Videos — Complete Guide 2025', description: 'How to set up lighting for YouTube videos at home: natural light, ring lights, LED panels. Budget setups from free to $100.', keywords: ['home lighting setup youtube', 'youtube video lighting', 'ring light for youtube', 'how to light youtube video home', 'video lighting setup'], alternates: { canonical: 'https://tubekit.app/blog/home-video-lighting-setup' }, openGraph: { title: 'Home Lighting Setup for YouTube Videos — Complete Guide 2025', description: 'How to set up lighting for YouTube videos at home: natural light, ring lights, LED panels. Budget setups from free to $100.', url: 'https://tubekit.app/blog/home-video-lighting-setup' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap"><span>💡 Filming</span><span>·</span><span>8 min read</span></div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Home Lighting Setup for YouTube Videos — Complete Guide 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to set up lighting for YouTube videos at home: natural light, ring lights, LED panels. Budget setups from free to $100.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Create thumbnails for your channel</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Make thumbnail →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Lighting matters more than your camera</h2>
            <p className="text-muted mb-3">Good lighting makes smartphone footage look professional. Bad lighting makes expensive camera footage look amateur. If you're deciding where to invest first — lighting is more impactful than camera gear.</p>
            <p className="text-muted mb-3">The fundamental rule: your light source should be in front of you, not behind you. Light behind you creates a silhouette — your face will be dark while the background is bright. The camera's auto-exposure will compensate for the bright background, making your face even darker.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Natural window light — the free option</h2>
            <p className="text-muted mb-3">Position yourself facing the window. Sit 1–3 feet away from the window so the light falls softly on your face from the front or at a 45-degree angle. Never sit with the window behind you.</p>
            <p className="text-muted mb-3">Overcast days are your friend: clouds act as a giant softbox, diffusing sunlight into beautiful, even illumination with no harsh shadows. Clear sunny days can create overly bright patches and hard shadows.</p>
            <p className="text-muted mb-3">Time of day: morning and midday give the best quality natural light. Afternoon sun gets harsh and directional. Evening light shifts warm and orange.</p>
            <p className="text-muted mb-3">Improvement hack: hang sheer white curtains on the window to diffuse direct sunlight year-round, creating consistently soft studio-quality light.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Ring light — the most popular affordable solution</h2>
            <p className="text-muted mb-3">A ring light ($20–50 for a decent 10–14 inch model) is the most common lighting upgrade for YouTube creators. Place it directly in front of you so your face is centered in the ring. The circular catchlight in your eyes is the main visual tell.</p>
            <p className="text-muted mb-3">Settings: start with 5500K (daylight) color temperature for a clean, neutral look. Warm (3000K) adds coziness. Adjust brightness so your face is well-lit without looking washed out.</p>
            <p className="text-muted mb-3">The ring light limitation: it creates very flat, uniform lighting with no depth or dimension. It looks great for beauty and lifestyle content but less cinematic for narrative or professional content.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">LED panel lights — more professional look</h2>
            <p className="text-muted mb-3">A rectangular LED panel placed at a 45-degree angle to your face creates depth and dimension — the lighting looks more natural than a ring light.</p>
            <p className="text-muted mb-3">Budget option: a 10W LED video light on a small stand for $20–40. Adjustable brightness and color temperature (3200K–5600K). Start with one and position it at 45 degrees to your face.</p>
            <p className="text-muted mb-3">Two-light setup: a key light (main) at 45 degrees from one side, a fill light (softer, same or lower brightness) on the other side. This creates professional studio lighting that dramatically improves video quality.</p>
            <p className="text-muted mb-3">Popular picks: Neewer 2-pack LED video lights with stands (~$50–80), Elgato Key Light (premium, desk-mounted, app-controlled, ~$150).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Common lighting mistakes</h2>
            <p className="text-muted mb-3">Window behind you: turns your face into a silhouette. Always face the window.</p>
            <p className="text-muted mb-3">Mixed color temperatures: combining warm tungsten bulbs with cool daylight creates an unnatural color cast. Use one type of light source exclusively.</p>
            <p className="text-muted mb-3">Light source below eye level: lamps on a table pointing upward create creepy shadows. Position lights at or slightly above eye level.</p>
            <p className="text-muted mb-3">One light, too close: creates harsh shadows on half your face. Add a second light or a reflector (white foam board) on the opposite side to fill in the shadows.</p>
            <p className="text-muted mb-3">Too bright: overexposure washes out facial details. Lower brightness or increase the light-to-subject distance.</p>
          </div></div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/how-to-shoot-youtube-video-phone','How to Film YouTube Videos on Phone'], ['/blog/best-microphone-youtube','Best Microphone for YouTube'], ['/blog/how-to-start-youtube-channel','How to Start a YouTube Channel']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}