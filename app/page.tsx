'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import Marquee from '@/components/Marquee'
import { uxProjects, arProjects } from '@/lib/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '60px 32px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <span className="section-label">{children}</span>
    </div>
  )
}

function UXGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
      {/* Row 1: large left + tall right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        {/* Lica — large card */}
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#161616', border: '1px solid #1e1e1e', height: 420, cursor: 'pointer' }}
          className="project-card"
          onClick={() => {}}
        >
          <img src={uxProjects[0].images[1]} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src={uxProjects[0].images[0]} alt="" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                {uxProjects[0].num} | {uxProjects[0].role}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 500, color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                {uxProjects[0].title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 8, lineHeight: 1.5 }}>
                {uxProjects[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Apple — tall card */}
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#161616', border: '1px solid #1e1e1e', height: 420, cursor: 'pointer' }}
          className="project-card"
        >
          <img src={uxProjects[1].images[0]} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>{uxProjects[1].num}</span>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                {uxProjects[1].num} | {uxProjects[1].role}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 500, color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                {uxProjects[1].title}
              </h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6, lineHeight: 1.5 }}>
                {uxProjects[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: 3 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {uxProjects.slice(2).map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + 2} variant="normal" />
        ))}
      </div>
    </div>
  )
}

function ARGrid() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
      {/* Row 1: 2 col */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12, marginBottom: 12 }}>
        {/* CoVision wide */}
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#161616', border: '1px solid #1e1e1e', height: 380, cursor: 'pointer' }}
          className="project-card"
        >
          <img src={arProjects[0].images[0]} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>{arProjects[0].num}</span>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                {arProjects[0].num} | {arProjects[0].role}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-0.02em' }}>{arProjects[0].title}</h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6, lineHeight: 1.5 }}>{arProjects[0].description}</p>
            </div>
          </div>
        </div>

        {/* Snap */}
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#161616', border: '1px solid #1e1e1e', height: 380, cursor: 'pointer' }}
          className="project-card"
        >
          <img src={arProjects[1].images[0]} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>{arProjects[1].num}</span>
              <img src={arProjects[1].images[1]} alt="" style={{ width: 32, height: 60, borderRadius: 6, objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                {arProjects[1].num} | {arProjects[1].role}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 500, color: '#fff', letterSpacing: '-0.02em' }}>{arProjects[1].title}</h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6, lineHeight: 1.5 }}>{arProjects[1].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: 2 col */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 12 }}>
        {arProjects.slice(2).map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} variant="tall" />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh', paddingTop: 64 }}>
      {/* Mobile notice */}
      <div style={{ textAlign: 'center', padding: '80px 24px 0' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 10, color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          View Desktop Mode for Full Version
        </motion.p>
      </div>

      {/* UX Section */}
      <SectionLabel>Selected UX Work</SectionLabel>
      <UXGrid />

      {/* Marquee divider */}
      <div style={{ margin: '64px 0' }}>
        <Marquee text="Designing through a different lens  •  William Le" />
      </div>

      {/* AR Section */}
      <SectionLabel>Augmented Reality</SectionLabel>
      <ARGrid />

      <div style={{ height: 80 }} />
    </div>
  )
}
