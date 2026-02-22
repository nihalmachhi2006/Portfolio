'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Dynamic import keeps Three.js out of the SSR bundle
const PhysicsBadge = dynamic(() => import('@/components/PhysicsBadge'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ fontSize: 9, color: '#222', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        Loading...
      </span>
    </div>
  ),
})

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes breathe {
          0%,100% { opacity:1; } 50% { opacity:0.3; }
        }
        .cta-primary:hover { opacity: 0.8; }
        .cta-secondary:hover { color: #fff !important; border-color: #444 !important; }
        .tag-pill:hover { border-color: #444 !important; color: #aaa !important; }
      `}</style>

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

        {/* ── LEFT: physics badge ── */}
        <motion.div
          {...fade(0)}
          style={{ height: '100%', position: 'relative' }}
        >
          <PhysicsBadge />
        </motion.div>

        {/* ── RIGHT: hero text ── */}
        <div style={{ padding: '0 56px 0 40px', maxWidth: 500 }}>

          {/* status */}
          <motion.div {...fade(0.15)} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#fff', boxShadow: '0 0 6px #fff',
              animation: 'breathe 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 11, color: '#888', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Available for work
            </span>
          </motion.div>

          {/* name */}
          <motion.h1 {...fade(0.25)} style={{
            fontSize: 'clamp(42px, 5vw, 64px)',
            color: '#fff', fontWeight: 300,
            lineHeight: 1.06, marginBottom: 12,
            letterSpacing: '-0.02em',
          }}>
            Nihal<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>
              Machhi.
            </span>
          </motion.h1>

          {/* role */}
          <motion.p {...fade(0.33)} style={{
            fontSize: 11, color: '#666',
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 28,
          }}>
            AI · ML · Software Developer
          </motion.p>

          {/* bio */}
          <motion.p {...fade(0.40)} style={{
            fontSize: 15, color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.85, fontWeight: 300, marginBottom: 28, maxWidth: 380,
          }}>
            I build intelligent systems and ship them. From model training to
            production UI — I bridge the gap between research and real products.
          </motion.p>

          {/* skills */}
          <motion.div {...fade(0.47)} style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 32 }}>
            {['LLMs', 'RAG', 'PyTorch', 'LangChain', 'Next.js', 'FastAPI'].map(s => (
              <span key={s} className="tag-pill" style={{
                fontSize: 10, color: '#888',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '6px 12px', border: '1px solid #333', borderRadius: 4,
                transition: 'color .2s, border-color .2s', cursor: 'default',
              }}>
                {s}
              </span>
            ))}
          </motion.div>

          {/* ── featured work strip (replaces number stats) ── */}
          <motion.div {...fade(0.54)} style={{
            paddingTop: 22, marginBottom: 30,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column', gap: 11,
          }}>
            {[
              { name: 'Searchnow',      desc: 'AI search engine · RAG + vector embeddings' },
              { name: 'BuildModelsnow', desc: 'LLM → auto-generate SQL/NoSQL schemas'       },
              { name: 'Commitnow',      desc: 'Dev workspace · Kanban, chat & live canvas'  },
            ].map(({ name, desc }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  fontSize: 11, color: 'rgba(255,255,255,0.65)',
                  fontWeight: 400, minWidth: 110, letterSpacing: '0.01em',
                }}>
                  {name}
                </span>
                <span style={{
                  width: 24, height: 1, background: 'rgba(255,255,255,0.18)', flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 11, color: 'rgba(255,255,255,0.45)',
                  fontWeight: 300, letterSpacing: '0.01em',
                }}>
                  {desc}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(0.60)} style={{ display: 'flex', gap: 10 }}>
            <a
              href="#work"
              className="cta-primary"
              style={{
                padding: '11px 24px', background: '#fff', color: '#000',
                borderRadius: 4, textDecoration: 'none',
                fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                fontWeight: 500, transition: 'opacity .2s',
              }}
            >
              View Work →
            </a>
            <a
              href="mailto:nihalmachhi11@gmail.com"
              className="cta-secondary"
              style={{
                padding: '11px 24px', background: 'transparent',
                color: 'rgba(255,255,255,0.65)', border: '1px solid #333',
                borderRadius: 4, textDecoration: 'none',
                fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                transition: 'color .2s, border-color .2s',
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}