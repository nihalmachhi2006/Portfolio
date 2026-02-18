'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlayPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
      <motion.div
        style={{ textAlign: 'center', maxWidth: 480 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <div style={{ fontSize: 56, marginBottom: 24 }}>🎮</div>
        <div style={{ fontSize: 10, color: '#999', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
          Coming Soon
        </div>
        <h1 style={{ fontWeight: 300, fontSize: 'clamp(40px, 7vw, 72px)', letterSpacing: '-0.04em', color: '#1a1a1a', marginBottom: 20, lineHeight: 0.95 }}>
          Play
        </h1>
        <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
          This is where I keep experiments, creative coding, and interactive toys built just for fun. Check back soon.
        </p>
        {/* Animated dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
          {[0,1,2].map(i => (
            <motion.div key={i}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a1a1a' }}
            />
          ))}
        </div>
        <Link href="/" style={{ fontSize: 12, color: '#888', textDecoration: 'none', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Back to work
        </Link>
      </motion.div>
    </div>
  )
}
