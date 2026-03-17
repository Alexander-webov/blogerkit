import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'How to Film a YouTube Video on Your Phone — Setup Guide 2025', description: 'How to film high-quality YouTube videos with a smartphone: camera settings, lighting, audio, stabilization, framing. Complete setup guide.', keywords: ['how to film youtube video on phone', 'shooting youtube videos with smartphone', 'iphone youtube video', 'android youtube video filming'], alternates: { canonical: 'https://tubekit.app/blog/how-to-shoot-youtube-video-phone' }, openGraph: { title: 'How to Film a YouTube Video on Your Phone — Setup Guide 2025', description: 'How to film high-quality YouTube videos with a smartphone: camera settings, lighting, audio, stabilization, framing. Complete setup guide.', url: 'https://tubekit.app/blog/how-to-shoot-youtube-video-phone' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />TubeKit</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← All articles</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap"><span>📱 Filming</span><span>·</span><span>10 min read</span></div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">How to Film a YouTube Video on Your Phone — Setup Guide 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">How to film high-quality YouTube videos with a smartphone: camera settings, lighting, audio, stabilization, framing. Complete setup guide.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Create thumbnails for your videos</div><div className="text-muted text-sm">TubeKit · Free</div></div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Make thumbnail →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Why a smartphone is enough for YouTube</h2>
            <p className="text-muted mb-3">Modern flagship smartphones shoot 4K video with optical stabilization, multiple lenses and advanced computational photography. For most YouTube formats, this is more than sufficient.</p>
            <p className="text-muted mb-3">The algorithm doesn't rank videos by production quality — it ranks by CTR and watch time. A charismatic creator with great content filmed on a phone will outperform a boring presenter with cinema-quality gear.</p>
            <p className="text-muted mb-3">Main limitations of smartphones: smaller sensor performs worse in low light, optical zoom is weaker than dedicated cameras, built-in microphone captures all room noise. All solvable with simple, affordable accessories.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Camera settings before filming</h2>
            <p className="text-muted mb-3">Resolution: 1080p at 30fps is the YouTube sweet spot. 4K is great but creates massive files and requires more powerful editing hardware. 60fps is ideal for action and movement — unnecessary for talking-head content.</p>
            <p className="text-muted mb-3">Lock exposure and focus: before pressing record, tap and hold your subject on screen until you see AE/AF Lock appear. This prevents the camera from automatically adjusting (and flickering) during your take.</p>
            <p className="text-muted mb-3">Disable digital zoom: digital zoom destroys quality. If you need to get closer, physically move the camera. If you want a zoom shot in editing, shoot wider and crop in post-production.</p>
            <p className="text-muted mb-3">Horizontal orientation: always film horizontally (landscape) for YouTube videos. Vertical filming creates black bars in the player. Exception: film vertically specifically for Shorts.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Stabilization — eliminate the shake</h2>
            <p className="text-muted mb-3">Shaky video is one of the leading causes of viewers abandoning your video. Even interesting content becomes unwatchable when the camera vibrates constantly.</p>
            <p className="text-muted mb-3">A tripod is the simplest fix. A basic desktop tripod for $10–15 completely solves the problem for sit-down content. For mobile filming, a phone mount for a standard tripod works with any leg.</p>
            <p className="text-muted mb-3">If you must film handheld: keep elbows pressed against your body, breathe slowly, lean against a wall when possible. For walking shots, slightly bend your knees with each step to absorb the bounce.</p>
            <p className="text-muted mb-3">Electronic stabilization (EIS): most modern phones have this built in. Verify it's enabled in your camera settings. It slightly crops the frame but dramatically reduces shake.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Audio — the most important upgrade</h2>
            <p className="text-muted mb-3">The built-in phone microphone picks up everything in the room: your voice, HVAC noise, traffic, keyboard clicks, room echo. Viewers are more forgiving of imperfect video than imperfect audio.</p>
            <p className="text-muted mb-3">A wired lavalier mic ($15–30) is the best value upgrade for YouTube creators. It clips to your clothing 20–25cm from your mouth and captures clear, direct voice audio while rejecting background noise.</p>
            <p className="text-muted mb-3">If you're using a newer iPhone (Lightning-free) or Android, ensure you buy the version with the correct connector (USB-C or adapter). Test with a 30-second recording before filming any serious content.</p>
            <p className="text-muted mb-3">No mic? Minimize echo by filming in soft-furnished rooms (rugs, curtains, couches absorb sound), close windows to eliminate traffic noise, and get the phone as close to your mouth as possible.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Lighting for smartphone video</h2>
            <p className="text-muted mb-3">Good lighting makes phone footage look professional. Bad lighting makes expensive camera footage look amateur.</p>
            <p className="text-muted mb-3">Natural light from a window: position yourself facing the window, not with your back to it. The window should be in front of you or at a 45-degree angle. Overcast days give beautiful, soft, diffused light.</p>
            <p className="text-muted mb-3">Ring light ($20–40): the fastest artificial lighting solution. Place it directly in front of you. It creates even, flattering light with no harsh shadows. The round catch-light in eyes is the one tell-tale sign.</p>
            <p className="text-muted mb-3">Turn off mixed lighting: using warm indoor lights while natural cool light comes through a window creates an unnatural color cast on your face. Use one type of light source at a time.</p>
          </div></div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Read next</div>
          <div className="flex flex-col gap-2">
            {[['/blog/best-microphone-youtube','Best Microphone for YouTube'], ['/blog/home-video-lighting-setup','Lighting Setup for YouTube Videos'], ['/blog/how-to-start-youtube-channel','How to Start a YouTube Channel']].map(([href, t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}