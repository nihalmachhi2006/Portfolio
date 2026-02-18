'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const PhysicsBadge = dynamic(() => import('@/components/PhysicsBadge'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#161616', borderRadius: 16 }}>
      <span style={{ fontSize: 11, color: '#444', letterSpacing: '0.08em' }}>Loading...</span>
    </div>
  ),
})

const bio = [
  {
    label: 'TODAY',
    text: "I'm a Designer based in NYC, currently at Google on the Material Design team focusing on iOS. Previously, I interned at Apple as a Human Interface Designer on the Video Apps team, and the Founding Designer at Lica and Visavis. I recently graduated from the University of Maryland with dual degrees in Product Design and AR/VR Design.",
  },
  {
    label: 'CHILDHOOD',
    text: "Growing up, my love for design, fashion, and soccer shaped how I think and create. Design sparked my creativity, fashion refined my eye for detail, and soccer taught me teamwork and discipline, fueling my curiosity and drive to grow.",
  },
  {
    label: 'GROWTH',
    text: "I discovered UX/UI Design as the perfect blend of creativity and impact, learning to empathize with users, refine design processes, and solve problems with intention. Exploring XR through immersive projects has further deepened my passion for creating meaningful experiences.",
  },
]

// Spotify-style music card
function MusicCard({ title, artist, img, color = '#1e3a5f' }: { title: string; artist: string; img: string; color?: string }) {
  return (
    <div className="bento-card" style={{ height: '100%', position: 'relative', minHeight: 280 }}>
      {/* Background blurred album art */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 14 }}>
        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(2px) brightness(0.5)', transform: 'scale(1.1)' }} />
      </div>
      {/* Label */}
      <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', letterSpacing: '0.02em' }}>music</div>
      {/* Bottom card */}
      <div style={{
        position: 'absolute', bottom: 12, left: 12, right: 12,
        background: 'rgba(20,20,20,0.92)',
        backdropFilter: 'blur(20px)',
        borderRadius: 10, padding: '10px 12px',
        display: 'flex', alignItems: 'center', gap: 10,
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <img src={img} alt="" style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
          <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{artist}</div>
          <div style={{ fontSize: 10, color: '#555', marginTop: 2 }}>Preview</div>
        </div>
        {/* Spotify icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1db954">
          <circle cx="12" cy="12" r="12" fill="#1db954"/>
          <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25zm-.1 2.8c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1zm-1.2 2.75c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

function DriveCard({ img }: { img: string }) {
  return (
    <div className="bento-card" style={{ height: '100%', position: 'relative', minHeight: 280 }}>
      <img src={img} alt="drives" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))' }} />
      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>drives</span>
      </div>
      <div style={{ position: 'absolute', bottom: 12, right: 16 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1db954">
          <circle cx="12" cy="12" r="12" fill="#1db954"/>
        </svg>
      </div>
    </div>
  )
}

function CreativeCard({ img }: { img: string }) {
  return (
    <div className="bento-card" style={{ height: '100%', position: 'relative', minHeight: 200 }}>
      <img src={img} alt="creative" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>creative</span>
      </div>
    </div>
  )
}

function FlowCard({ img }: { img: string }) {
  return (
    <div className="bento-card" style={{ height: '100%', position: 'relative', minHeight: 200 }}>
      <img src={img} alt="flow" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>flow</span>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh', paddingTop: 70 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

          {/* LEFT: Physics badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div style={{ height: 560, borderRadius: 20, overflow: 'hidden', background: '#161616', border: '1px solid #1e1e1e' }}>
              <PhysicsBadge />
            </div>
            <p style={{ textAlign: 'center', fontSize: 10, color: '#333', marginTop: 10, letterSpacing: '0.06em' }}>
              drag the badge ↑
            </p>
          </motion.div>

          {/* RIGHT: Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            style={{ paddingTop: 20 }}
          >
            {bio.map((b, i) => (
              <div key={b.label} style={{ marginBottom: 36 }}>
                <div style={{ fontSize: 10, color: '#444', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 500 }}>
                  {b.label}
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontWeight: 300 }}>
                  {b.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bento grid below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginTop: 48 }}
        >
          {/* Top row: bio card + music + drives */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 12 }}>
            <MusicCard
              title="Rollin (feat. Future & Khalid)"
              artist="Calvin Harris, Future, Khalid"
              img="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
            />
            <DriveCard img="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80" />
            <MusicCard
              title="Latch"
              artist="Disclosure, Sam Smith"
              img="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80"
            />
          </div>
          {/* Bottom row: creative + flow */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <CreativeCard img="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80" />
            <FlowCard img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
