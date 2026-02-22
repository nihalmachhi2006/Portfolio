'use client'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.23, 1, 0.32, 1] as const },
})

// ── Spotify-style music card (bottom overlay) ────────────────────────────────
function MusicCard({
  label, title, artist, img,
}: { label: string; title: string; artist: string; img: string }) {
  return (
    <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', background: '#161616', border: '1px solid #1e1e1e' }}>
      {/* italic label top-left */}
      <span style={{ position: 'absolute', top: 14, left: 16, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', zIndex: 2 }}>
        {label}
      </span>
      {/* background photo */}
      <img src={img} alt="" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', filter: 'brightness(0.55)' }} />
      {/* bottom card */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 12px',
        background: 'rgba(18,18,18,0.95)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <img src={img} alt="" style={{ width: 36, height: 36, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
          <div style={{ fontSize: 11, color: '#777', marginTop: 2 }}>{artist}</div>
          <div style={{ fontSize: 10, color: '#444', marginTop: 1 }}>Preview</div>
        </div>
        {/* Spotify green dot */}
        <svg width="20" height="20" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#1db954" />
          <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25zm-.1 2.8c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1zm-1.2 2.75c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85z" fill="white" />
        </svg>
      </div>
    </div>
  )
}

// ── Photo card with italic label ─────────────────────────────────────────────
function PhotoCard({ label, img, height = 180 }: { label: string; img: string; height?: number }) {
  return (
    <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid #1e1e1e' }}>
      <span style={{ position: 'absolute', top: 14, left: 16, fontSize: 12, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', zIndex: 2 }}>
        {label}
      </span>
      <img src={img} alt={label} style={{ width: '100%', height, objectFit: 'cover', display: 'block', filter: 'brightness(0.65)' }} />
    </div>
  )
}

// ── Experience row ────────────────────────────────────────────────────────────
function ExpRow({ icon, role, period }: { icon: React.ReactNode; role: string; period: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '14px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: '#1e1e1e', border: '1px solid #2a2a2a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16,
      }}>
        {icon}
      </div>
      <span style={{ flex: 1, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{role}</span>
      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', flexShrink: 0 }}>{period}</span>
    </div>
  )
}

// ── Achievement row ───────────────────────────────────────────────────────────
function AchRow({ icon, title, link, href }: { icon: React.ReactNode; title: string; link: string; href: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '14px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: '#1e1e1e', border: '1px solid #2a2a2a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14,
      }}>
        {icon}
      </div>
      <span style={{ flex: 1, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{title}</span>
      <a
        href={href} target="_blank" rel="noopener noreferrer"
        style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
      >
        {link} ↗
      </a>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh' }}>

      {/* ── Hero (untouched) ── */}
      <HeroSection />

      {/* ── About content ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 32px' }}>

        {/* ══ ROW 1: Bio text LEFT  |  Bento grid RIGHT ══ */}
        <motion.div
          {...fade(0)}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 12, marginBottom: 12 }}
        >

          {/* LEFT — bio text card */}
          <div style={{
            background: '#161616', border: '1px solid #1e1e1e',
            borderRadius: 14, padding: '28px 28px 32px',
          }}>
            {[
              {
                label: 'TODAY',
                text: `I'm an AI/ML & Full Stack Developer based in Vadodara. I'm currently pursuing a B.Tech in Computer Science (AI/ML) at Parul University. I build end-to-end intelligent systems — from LLM pipelines and RAG-based search engines to production full-stack apps that real people use.`,
              },
              {
                label: 'CHILDHOOD',
                text: `Growing up, I was always the kid taking apart gadgets to see how they worked. I started coding at 14 and never stopped. That curiosity for building things — understanding them deeply — became the foundation of everything I do.`,
              },
              {
                label: 'GROWTH',
                text: `I discovered AI/ML as the perfect intersection of engineering and creativity. Learning to train models, build RAG pipelines, and ship full-stack products taught me to think end-to-end. I now obsess over making intelligent systems that are fast, useful, and actually ship.`,
              },
              {
                label: 'GOAL',
                text: `I want to build technology that feels invisible — where the intelligence is there when you need it and out of the way when you don't. With that, I hope the things I build make people's lives a little faster and smarter.`,
              },
            ].map(({ label, text }) => (
              <div key={label} style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 9, color: '#555', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8, fontWeight: 500 }}>
                  {label}
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, fontWeight: 300 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT — 2×2 bento photo grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* top-left: music */}
            <MusicCard
              label="music"
              title="Blinding Lights"
              artist="The Weeknd"
              img="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
            />
            {/* top-right: drives */}
            <PhotoCard
              label="drives"
              img="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80"
            />
            {/* bottom-left: creative */}
            <MusicCard
              label="creative"
              title="Starboy"
              artist="The Weeknd, Daft Punk"
              img="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80"
            />
            {/* bottom-right: flow */}
            <PhotoCard
              label="flow"
              img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
            />
          </div>
        </motion.div>

        {/* ══ ROW 2: Recent Experiences LEFT  |  Achievements RIGHT ══ */}
        <motion.div
          {...fade(0.15)}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
        >

          {/* LEFT — Recent Experiences */}
          <div style={{
            background: '#161616', border: '1px solid #1e1e1e',
            borderRadius: 14, padding: '24px 24px 20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <p style={{ fontSize: 9, color: '#555', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500 }}>
                Recent Experiences
              </p>
              <a
                href="https://linkedin.com/in/nihalmachhi2006"
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 9, color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#aaa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444')}
              >
                View All
              </a>
            </div>

            <ExpRow icon="🧠" role="Data Analyst — TactTree LLP"        period="Present"  />
            <ExpRow icon="🎓" role="B.Tech AI/ML — Parul University"     period="2025"     />
            <ExpRow icon="📋" role="Placement Coordinator — Parul Univ." period="2024"     />
            <ExpRow icon="💻" role="Diploma in IT — Parul University"    period="2022"     />
            <ExpRow icon="🚀" role="Searchnow — AI Search Engine"        period="2024"     />
          </div>

          {/* RIGHT — Achievements & Recognition */}
          <div style={{
            background: '#161616', border: '1px solid #1e1e1e',
            borderRadius: 14, padding: '24px 24px 20px',
          }}>
            <p style={{ fontSize: 9, color: '#555', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 8 }}>
              Achievements & Recognition
            </p>

            <AchRow icon="⚡" title="300+ DSA Problems Solved"               link="LeetCode"   href="https://leetcode.com" />
            <AchRow icon="🔥" title="4+ Production Apps Deployed"             link="GitHub"     href="https://github.com/nihalmachhi2006" />
            <AchRow icon="🤖" title="Built RAG Search Engine with LLMs"       link="Searchnow"  href="#" />
            <AchRow icon="🧬" title="LLM → Auto-generate DB Schemas"          link="BuildModels" href="#" />
            <AchRow icon="🔐" title="JWT & OAuth 2.0 Auth Systems"            link="GitHub"     href="https://github.com/nihalmachhi2006" />
          </div>

        </motion.div>
      </div>
    </div>
  )
}