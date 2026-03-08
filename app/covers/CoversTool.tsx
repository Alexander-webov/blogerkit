'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function CoversTool() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="flex flex-col" style={{ height: '100dvh' }}>

      {/* NAV */}
      <nav className="h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border flex-shrink-0 z-40">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          БлогерКит
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-muted text-xs">🎨 Конструктор обложек</span>
          <span className="text-xs px-2 py-0.5 border border-green-400/25 bg-green-400/10 text-green-400 rounded font-bold">
            Бесплатно
          </span>
        </div>
      </nav>

      {/* LOADING */}
      {!loaded && (
        <div className="absolute inset-14 flex items-center justify-center bg-bg z-10 pointer-events-none">
          <div className="text-center">
            <div className="w-10 h-10 border-[3px] border-border border-t-accent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-muted text-sm">Загружаем редактор...</p>
          </div>
        </div>
      )}

      {/* IFRAME EDITOR */}
      <iframe
        ref={iframeRef}
        src="/covers-editor.html"
        className="flex-1 w-full border-0"
        onLoad={() => setLoaded(true)}
        title="Конструктор обложек YouTube"
        allow="clipboard-write"
      />
    </div>
  )
}
