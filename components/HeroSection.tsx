'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const PhysicsBadge = dynamic(() => import('@/components/PhysicsBadge'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'transparent',
    }}>
      <span style={{ fontSize: 10, color: '#2a2a2a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Loading...
      </span>
    </div>
  ),
})

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes breathe {
          0%,100% { opacity:1; } 50% { opacity:0.3; }
        }
      `}</style>

      {/*
        Exactly 100dvh tall (minus the 72px navbar spacer already in flow).
        Two equal columns — badge left, text right.
      */}
      <section style={{
        height: 'calc(100dvh - 72px)',
        background: '#0d0d0d',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}>

        {/* subtle dot grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

        {/* ── LEFT: physics badge — fills the full left column height ── */}
        <motion.div
          {...fade(0)}
          style={{
            height: '100%',
            position: 'relative',
            // Slight padding so rope anchor isn't cropped at top
            paddingTop: 8,
          }}
        >
          <PhysicsBadge />
          <p style={{
            position: 'absolute',
            bottom: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 9,
            color: '#2a2a2a',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>
            drag the badge ↑
          </p>
        </motion.div>

        {/* ── RIGHT: hero text ── */}
        <div style={{ padding: '0 56px 0 40px', maxWidth: 500 }}>

          {/* status pill */}
          <motion.div {...fade(0.15)} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#fff', boxShadow: '0 0 6px #fff',
              animation: 'breathe 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 9, color: '#3a3a3a', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Available for work
            </span>
          </motion.div>

          {/* name */}
          <motion.h1 {...fade(0.25)} style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            color: '#fff',
            fontWeight: 300,
            lineHeight: 1.06,
            marginBottom: 10,
            letterSpacing: '-0.02em',
          }}>
            Your<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>
              Name.
            </span>
          </motion.h1>

          {/* role tag */}
          <motion.p {...fade(0.33)} style={{
            fontSize: 9, color: '#333',
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32,
          }}>
            AI · ML · Software Developer
          </motion.p>

          {/* bio line */}
          <motion.p {...fade(0.4)} style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: 36,
            maxWidth: 380,
          }}>
            I build intelligent systems and ship them. From model training to
            production UI — I bridge the gap between research and real products.
          </motion.p>

          {/* skills */}
          <motion.div {...fade(0.47)} style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 36 }}>
            {['Python', 'PyTorch', 'Next.js', 'LLMs', 'Computer Vision', 'MLOps'].map(s => (
              <span key={s} style={{
                fontSize: 9, color: '#444',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '5px 10px',
                border: '1px solid #1e1e1e', borderRadius: 4,
              }}>
                {s}
              </span>
            ))}
          </motion.div>

          {/* stats */}
          <motion.div {...fade(0.54)} style={{
            display: 'flex', gap: 32,
            paddingTop: 24, marginBottom: 30,
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            {[['3+', 'Years'], ['20+', 'Projects'], ['10+', 'Models']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 20, color: '#fff', fontWeight: 300, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 8, color: '#333', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(0.6)} style={{ display: 'flex', gap: 10 }}>
            <a
              href="#work"
              style={{
                padding: '10px 22px',
                background: '#fff', color: '#000',
                borderRadius: 4, textDecoration: 'none',
                fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                fontWeight: 500, transition: 'opacity .2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View Work
            </a>
            <a
              href="mailto:you@email.com"
              style={{
                padding: '10px 22px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.4)',
                border: '1px solid #1e1e1e',
                borderRadius: 4, textDecoration: 'none',
                fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                transition: 'color .2s, border-color .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#444' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = '#1e1e1e' }}
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}