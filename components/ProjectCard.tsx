'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Project } from '@/lib/data'

interface Props {
  project: Project
  index: number
}

function BrandIcon({ logoUrl }: { logoUrl?: string }) {
  if (!logoUrl) return null
  const c = 'rgba(255,255,255,0.6)'
  if (!logoUrl.startsWith('__')) {
    return <img src={logoUrl} alt="" style={{ width: 16, height: 16, objectFit: 'contain', borderRadius: 3 }} />
  }
  if (logoUrl === '__apple__') return (
    <svg width="16" height="19" viewBox="0 0 814 1000" fill={c}>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.5-57.8-155.5-127.4C46 376.7 0 248.4 0 126.1c0-103.9 67.1-159.1 130.3-159.1 64 0 104.5 40.5 154.5 40.5 47.7 0 96.6-43.5 166.5-43.5 64.8 0 137.7 37.4 187.8 117.6zm-174.4-51.1c-1.3-5.8-9.7-46.9 14.7-100.6 18-36.4 70.5-89.1 139.7-89.1 4.5 0 9 .6 13.5 1.3-5.2 44.9-29.3 88.4-55.8 117C697.1 247 644.2 282.6 613.7 289.8z" />
    </svg>
  )
  if (logoUrl === '__soundcloud__') return (
    <svg width="18" height="12" viewBox="0 0 300 150" fill={c}>
      <path d="M0 105q0 19 13 32t32 13q19 0 32-13t13-32V52q0-19-13-32T45 7Q26 7 13 20T0 52v53zm83-64v64q0 15-11 25t-27 10q-15 0-26-10T8 105V52q0-15 11-25t26-10q16 0 27 10t11 25zm42 64V22q0-8 6-13t13-5q8 0 13 5t6 13v83q0 8-6 13t-13 5q-7 0-13-5t-6-13zm57 0V8q0-8 8-8t8 8v97q0 8-8 8t-8-8zm150-15q0-34-23-57a75 75 0 00-57-23 75 75 0 00-53 22A56 56 0 00236 28v77q0 8 8 8h113q23 0 23-23z" />
    </svg>
  )
  if (logoUrl === '__forbes__') return (
    <svg width="13" height="17" viewBox="0 0 60 80" fill={c}>
      <text x="3" y="68" fontSize="76" fontWeight="700" fontFamily="Georgia,serif">F</text>
    </svg>
  )
  if (logoUrl === '__snap__') return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={c}>
      <path d="M12.166.006C9.813.006 5.55 1.078 5.55 6.235v.44c-.55-.18-1.232-.3-1.87-.3-1.022 0-2.07.432-2.07 1.543 0 1.367 1.48 1.854 2.663 2.237l.56.183.166.065c-.032.175-.093.44-.188.784-.327 1.176-1.045 2.03-2.177 2.544-.327.148-.504.483-.423.832.08.35.398.597.762.597l.213-.028c.034-.01 3.393-.924 5.023 1.15.97 1.232 2.387 1.86 4.21 1.86 1.793 0 3.197-.624 4.167-1.854 1.604-2.044 4.94-1.142 4.975-1.133l.22.028c.362 0 .68-.245.76-.594.082-.35-.095-.685-.42-.834-1.134-.513-1.85-1.366-2.178-2.54-.095-.343-.156-.608-.188-.784l.168-.065.558-.182c1.183-.384 2.664-.87 2.664-2.238 0-1.11-1.05-1.543-2.07-1.543-.638 0-1.32.12-1.87.3v-.44C18.447 1.083 14.52.006 12.166.006z" />
    </svg>
  )
  if (logoUrl === '__visavis__') return (
    <svg width="15" height="13" viewBox="0 0 32 28" fill={c}>
      <polygon points="0,0 16,28 32,0 27,0 16,20 5,0" />
    </svg>
  )
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
    </svg>
  )
}

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 420,
          borderRadius: 20,
          overflow: 'hidden',
          background: '#1e1e1e',
          border: '1px solid #2b2b2b',
          boxShadow: '0 2px 32px rgba(0,0,0,0.45)',
          cursor: 'pointer',
        }}
      >

        {/* ── LEFT COLUMN ── 46% wide, split into top label + bottom image */}
        <div style={{
          width: '46%',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* LEFT TOP — number + role */}
          <div style={{
            padding: '26px 24px 20px 28px',
            flexShrink: 0,
          }}>
            <span style={{
              fontSize: 10,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.28)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}>
              {project.num} | {project.role}
            </span>
          </div>

          {/* LEFT BOTTOM — image fills remaining space */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top left',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* ── RIGHT COLUMN ── project info, vertically centered */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '26px 36px 36px 36px',
        }}>
          {/* Icon top right */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{
              width: 30, height: 30,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BrandIcon logoUrl={project.logoUrl} />
            </div>
          </div>

          {/* Title + description centered */}
          <div>
            <h3 style={{
              fontSize: 'clamp(26px, 2.6vw, 42px)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.93)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 16px 0',
            }}>
              {project.title}
            </h3>
            <p style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.38)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 360,
            }}>
              {project.description}
            </p>
          </div>

          {/* Empty bottom spacer */}
          <div />
        </div>

      </motion.div>
    </motion.div>
  )
}