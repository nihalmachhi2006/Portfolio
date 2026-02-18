'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) { dot.current.style.left = mx + 'px'; dot.current.style.top = my + 'px' }
    }
    const tick = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13
      if (ring.current) { ring.current.style.left = rx + 'px'; ring.current.style.top = ry + 'px' }
      requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move)
    const id = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(id) }
  }, [])
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
