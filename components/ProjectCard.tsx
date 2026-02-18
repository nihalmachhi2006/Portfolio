'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Project } from '@/lib/data'

interface Props {
  project: Project
  index: number
  variant?: 'wide' | 'tall' | 'normal'
}

export default function ProjectCard({ project, index, variant = 'normal' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const heights: Record<string, number> = { wide: 340, tall: 480, normal: 380 }
  const h = heights[variant]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="project-card"
      style={{ height: h }}
    >
      {/* BG image */}
      {project.images[0] && (
        <img
          src={project.images[0]}
          alt={project.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      )}

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.7) 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Top: number */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', fontWeight: 500 }}>
            {project.num}
          </span>
          {project.images[1] && (
            <img src={project.images[1]} alt="" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
          )}
        </div>

        {/* Bottom: title + role */}
        <div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, fontWeight: 500 }}>
            {project.num} | {project.role}
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 500, color: 'rgba(255,255,255,0.92)', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 6, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
