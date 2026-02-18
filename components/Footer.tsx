'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* ── Headline ── */}
        <p className="text-center text-[22px] font-semibold text-white/85 tracking-tight mb-16 leading-snug">
          👋 Thanks for stopping by! Here is more of me if you are interested :)
        </p>

        {/* ── 4 columns ── */}
        <div className="grid grid-cols-4 gap-10 mb-16">

          {/* PAGES */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/25 mb-5">
              Pages
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/"       className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Home</Link>
              <Link href="/about"  className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">About Me</Link>
              <Link href="/play"   className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Play</Link>
            </div>
          </div>

          {/* SELECTED WORK */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/25 mb-5">
              Selected Work
            </p>
            <div className="flex flex-col gap-3">
              {/* ← fill in hrefs */}
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Lica</Link>
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Apple</Link>
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Visavis</Link>
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">SoundCloud</Link>
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Forbes</Link>
            </div>
          </div>

          {/* AUGMENTED REALITY */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/25 mb-5">
              Augmented Reality
            </p>
            <div className="flex flex-col gap-3">
              {/* ← fill in hrefs */}
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">CoVision</Link>
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Snap inc.</Link>
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">SpatialSense</Link>
              <Link href="" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">INST639P</Link>
            </div>
          </div>

          {/* LET'S CONNECT */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/25 mb-5">
              Let&rsquo;s Connect
            </p>
            <div className="flex flex-col gap-3">
              {/* ← fill in hrefs */}
              <a href="" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">LinkedIn</a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">X</a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">Email</a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/55 hover:text-white/90 transition-colors duration-200">CV</a>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 pt-6 flex items-center justify-between">
          <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/15">
            Nihal Machhi
          </span>
          <span className="text-[11px] text-white/10">
            © {new Date().getFullYear()}
          </span>
        </div>

      </div>
    </footer>
  )
}