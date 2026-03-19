"use client";

import { Search, Github, Sun } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const scrollTop = document.documentElement.scrollTop
  const headerHeight = 60
  return scrollTop + rect.top + rect.height - headerHeight
}

function BrandLogoMotion() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)
  const distanceRef = useRef(160)

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current)
  })

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark")
    if (!coverMark) return

    distanceRef.current = calcDistance(coverMark)

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark)
    })
    resizeObserver.observe(coverMark)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      className="absolute left-4 sm:left-6 flex items-center transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        pointerEvents: visible ? 'auto' : 'none'
      }}
    >
      <img
        src="/logo.png"
        alt="Brand Logo"
        className="h-5 w-auto dark:invert hover:scale-105 cursor-pointer transition-transform"
      />
    </div>
  )
}

export default function Navbar() {
  return (
    <div className="w-full bg-zinc-50 sticky top-0 z-50">
      <div className="w-full max-w-[950px] mx-auto border-x border-zinc-200 bg-white text-zinc-500 font-mono text-[13px] leading-relaxed relative z-10">
        <div className="flex items-center justify-end h-[60px] border-b border-zinc-200 px-4 sm:px-6 gap-6 relative">
          <BrandLogoMotion />
          <div className="hidden sm:flex items-center gap-5 mr-2">
            <a href="#" className="font-sans font-semibold text-zinc-950">Home</a>
            <a href="#" className="font-sans text-zinc-400 hover:text-zinc-600 transition-colors">Components</a>
            <a href="#" className="font-sans text-zinc-400 hover:text-zinc-600 transition-colors">Blocks</a>
            <a href="#" className="font-sans text-zinc-400 hover:text-zinc-600 transition-colors">Blog</a>
            <a href="#" className="font-sans text-zinc-400 hover:text-zinc-600 transition-colors">Sponsors</a>
          </div>

          <div className="hidden sm:flex items-center gap-8 pl-3 pr-2 py-1.5 rounded-md border border-zinc-200 bg-zinc-50/50 text-zinc-400 cursor-text hover:border-zinc-300 transition-colors lg:ml-6">
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1 font-sans text-[11px] font-medium tracking-wide">
              <span className="bg-zinc-200/50 px-1.5 py-0.5 rounded text-zinc-500">Ctrl</span>
              <span className="bg-zinc-200/50 px-1.5 py-0.5 rounded text-zinc-500">K</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer ml-1">
            <Github className="w-4 h-4 text-zinc-950" />
            <span className="font-sans text-[12px] font-medium">1.5k</span>
          </div>

          <div className="text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer pl-4 border-l border-zinc-200 ml-1 h-5 flex items-center">
            <Sun className="w-[15px] h-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
}