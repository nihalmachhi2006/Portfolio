'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MousePointer2 } from 'lucide-react'

function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', {
        hour:   'numeric',
        minute: '2-digit',
        hour12: true,
      }))
    }
    fmt()
    const id = setInterval(fmt, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span style={{
      fontSize:           16,
      fontWeight:         300,
      letterSpacing:      '0.05em',
      color:              'rgba(255,255,255,0.6)',
      fontFamily:         'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace:         'nowrap',
    }}>
      {time}
    </span>
  )
}

function ScrollRing() {
  const [progress, setProgress]             = useState(0)
  const [smoothProgress, setSmoothProgress] = useState(0)

  useEffect(() => {
    const fn = () => {
      const s = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(100, (s / h) * 100) : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    let raf: number
    const tick = () => {
      setSmoothProgress(prev => {
        const d = progress - prev
        return Math.abs(d) < 0.05 ? progress : prev + d * 0.12
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [progress])

  const sz = 24, sw = 2, r = (sz - sw) / 2
  const circ  = r * 2 * Math.PI
  const offset = circ - (smoothProgress / 100) * circ

  return (
    <div style={{ width: sz, height: sz, flexShrink: 0 }}>
      <svg width={sz} height={sz} viewBox={`0 0 ${sz} ${sz}`}
        style={{ transform: 'rotate(-90deg)', display: 'block' }}>
        <circle cx={sz/2} cy={sz/2} r={r} fill="none"
          stroke="rgba(255,255,255,0.1)" strokeWidth={sw} />
        <circle cx={sz/2} cy={sz/2} r={r} fill="none"
          stroke="rgba(255,255,255,0.75)" strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  )
}

const navLinks = [
  { href: '/',      label: 'Work'  },
  { href: '/about', label: 'About' },
  { href: '/play',  label: 'Play'  },
]

const BAR_H            = 72
const LAYOUT_MAX_WIDTH = 1200
const LAYOUT_PADDING   = 32

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered,  setHovered]  = useState(false)
  const [mounted,  setMounted]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isCompact = scrolled && !hovered

  return (
    <>
      <style>{`
        @keyframes slideDown {
          0%   { transform: translateY(-100%); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: translateY(0%);    opacity: 1; }
        }

        @keyframes pillEntry {
          0%   { transform: translateY(-120%) scale(0.92); opacity: 0; }
          55%  { opacity: 1; }
          80%  { transform: translateY(4%) scale(1.01); }
          100% { transform: translateY(0%)  scale(1);    opacity: 1; }
        }
      `}</style>

      {/* Layout spacer */}
      <div style={{ height: BAR_H, flexShrink: 0 }} />

      {/*
        ── OUTER GLASS BAR ────────────────────────────────────────────────
        The key fix: this layer must NOT use overflow:hidden or
        clip-path — anything that would prevent backdrop-filter from
        seeing through to the content below.
        The blur is on the INNER container that has the actual dimensions.
      */}
      <div style={{
        position:      'fixed',
        top:           0,
        left:          0,
        right:         0,
        height:        BAR_H,
        zIndex:        40,
        display:       'flex',
        justifyContent:'center',
        alignItems:    'center',
        pointerEvents: 'none',
        // Slide in
        animation:     mounted ? 'slideDown 0.9s cubic-bezier(0.22,1,0.36,1) both' : 'none',
        transform:     mounted ? undefined : 'translateY(-100%)',
        opacity:       mounted ? undefined : 0,
      }}>

        {/*
          ── INNER GLASS CONTAINER ──────────────────────────────────────
          backdrop-filter MUST be on the element that has a background.
          Without a semi-transparent background, backdrop-filter is invisible.
          The element also cannot have overflow:hidden applied above it
          in a way that clips the blur region.
        */}
        <div style={{
          position: 'relative', // establishes its own stacking context for blur
          width:    '100%',
          maxWidth: LAYOUT_MAX_WIDTH,
          height:   '100%',
          padding:  `0 ${LAYOUT_PADDING}px`,

          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',

          // ── THE ACTUAL GLASS ──────────────────────────────────────────
          // rgba background is REQUIRED for backdrop-filter to show
          background:           'rgba(10, 10, 10, 0.6)',
          // Crank up the blur value — 60px makes it unmistakably frosted
          backdropFilter:       'blur(60px) saturate(150%)',
          WebkitBackdropFilter: 'blur(60px) saturate(150%)',

          // Bottom corners only — top flush to screen like a notch
          borderRadius: '0 0 22px 22px',
          borderLeft:   '1px solid rgba(255,255,255,0.09)',
          borderRight:  '1px solid rgba(255,255,255,0.09)',
          borderBottom: '1px solid rgba(255,255,255,0.09)',

          boxShadow: [
            '0 16px 56px rgba(0,0,0,0.6)',
            '0 4px  16px rgba(0,0,0,0.35)',
            '0 1px  0    rgba(255,255,255,0.08) inset',
          ].join(', '),
        }}>

          {/* Logo */}
          <Link href="/" style={{
            textDecoration: 'none',
            pointerEvents:  'all',
            display:        'inline-flex',
            alignItems:     'center',
          }}>
            <span style={{
              fontSize:   22,
              fontWeight: 600,
              fontFamily: 'Inter, -apple-system, sans-serif',
              background: 'linear-gradient(135deg, #a78bfa, #38bdf8, #4ade80)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
              letterSpacing:        '-0.02em',
            }}>
              N/
            </span>
          </Link>

          <Clock />
        </div>
      </div>

      {/* ── FLOATING PILL ───────────────────────────────────────────────── */}
      <div style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        height:         BAR_H,
        zIndex:         50,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        pointerEvents:  'none',
        // Separate bouncier animation for the pill — tiny overshoot
        animation:      mounted ? 'pillEntry 1s cubic-bezier(0.22,1,0.36,1) 0.08s both' : 'none',
        transform:      mounted ? undefined : 'translateY(-120%)',
        opacity:        mounted ? undefined : 0,
      }}>
        <nav
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',

            height:  isCompact ? 52 : 56,
            padding: isCompact ? '0 32px' : '0 40px',
            gap:     32,

            borderRadius: '999px',

            background:           'rgba(9, 9, 9, 0.96)',
            backdropFilter:       'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(255,255,255,0.1)',

            boxShadow: isCompact
              ? [
                  '0 20px 70px rgba(0,0,0,0.9)',
                  '0 8px  24px rgba(0,0,0,0.6)',
                  '0 1px  0    rgba(255,255,255,0.06) inset',
                ].join(', ')
              : [
                  '0 8px  36px rgba(0,0,0,0.65)',
                  '0 3px  10px rgba(0,0,0,0.4)',
                  '0 1px  0    rgba(255,255,255,0.08) inset',
                ].join(', '),

            pointerEvents: 'all',
            cursor:        'default',

            // Smooth spring for compact ↔ expand
            transition: [
              'height     0.6s cubic-bezier(0.34,1.56,0.64,1)',
              'padding    0.6s cubic-bezier(0.34,1.56,0.64,1)',
              'box-shadow 0.4s ease',
            ].join(', '),
          }}
        >
          <MousePointer2
            size={19}
            color="rgba(255,255,255,0.52)"
            strokeWidth={1.5}
            style={{ flexShrink: 0 }}
          />

          <div style={{
            display:    'flex',
            alignItems: 'center',
            gap:        36,
            maxWidth:   isCompact ? '0px'  : '300px',
            opacity:    isCompact ? 0      : 1,
            overflow:   'hidden',
            transition: isCompact
              ? 'max-width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.18s ease'
              : 'max-width 0.6s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease 0.12s',
          }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link key={href} href={href}
                  style={{
                    fontSize:       14,
                    fontWeight:     400,
                    letterSpacing:  '0.02em',
                    whiteSpace:     'nowrap',
                    textDecoration: 'none',
                    fontFamily:     'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    color: active
                      ? 'rgba(255,255,255,0.92)'
                      : 'rgba(255,255,255,0.35)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.78)'
                  }}
                  onMouseLeave={e => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <ScrollRing />
        </nav>
      </div>
    </>
  )
}