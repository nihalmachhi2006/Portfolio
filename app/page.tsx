'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import ProjectCard from '@/components/ProjectCard'
import Marquee from '@/components/Marquee'
import { uxProjects, arProjects } from '@/lib/data'
import HeroSection from '@/components/herosection'

const PhysicsBadge = dynamic(() => import('@/components/PhysicsBadge'), { ssr: false })

function SectionLabel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      style={{ padding: '56px 48px 24px', maxWidth: 1200, margin: '0 auto' }}
    >
      <span className="section-label">{children}</span>
    </motion.div>
  )
}

function ProjectStack({ projects }: { projects: typeof uxProjects }) {
  return (
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      // CRITICAL: must be overflow:visible so card images can bleed below
      overflow: 'visible',
    }}>
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh', overflow: 'visible' }}>

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Projects ── */}
      <div id="work">
        <SectionLabel>Selected UX Work</SectionLabel>
        <ProjectStack projects={uxProjects} />
      </div>

      <div style={{ height: 100 }} />
    </div>
  )
}