"use client";

import { Search, Github, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
      <span className="font-bold text-lg tracking-tight hover:scale-105 cursor-pointer transition-transform">
        NM
      </span>
    </div>
  )
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full bg-zinc-50 dark:bg-zinc-950 sticky top-0 z-50 transition-colors duration-300">
      <div className="w-full max-w-3xl mx-auto border-x border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-500 font-mono text-[13px] leading-relaxed relative z-10 transition-colors duration-300">
        <div className="flex items-center justify-end h-[60px] border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 gap-6 relative transition-colors duration-300">
          <BrandLogoMotion />
          <div className="hidden sm:flex items-center gap-5 mr-2">
            <Link href="/" className="font-sans font-semibold text-zinc-950 dark:text-zinc-50">Home</Link>
            <Link href="/components" className="font-sans text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Components</Link>
            <Link href="/blocks" className="font-sans text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Blocks</Link>
            <Link href="/blog" className="font-sans text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Blog</Link>
            <Link href="/hackathons" className="font-sans text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Hackathons</Link>
          </div>

          <div className="hidden sm:flex items-center gap-8 pl-3 pr-2 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-400 cursor-text hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors lg:ml-6">
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1 font-sans text-[11px] font-medium tracking-wide">
              <span className="bg-zinc-200/50 dark:bg-zinc-800/50 px-1.5 py-0.5 rounded text-zinc-500 dark:text-zinc-400">Ctrl</span>
              <span className="bg-zinc-200/50 dark:bg-zinc-800/50 px-1.5 py-0.5 rounded text-zinc-500 dark:text-zinc-400">K</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer ml-1">
            <Github className="w-4 h-4 text-zinc-950 dark:text-zinc-50" />
            <span className="font-sans text-[12px] font-medium">1.5k</span>
          </div>

          <div
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer pl-4 border-l border-zinc-200 dark:border-zinc-800 ml-1 h-5 flex items-center"
          >
            {mounted && theme === 'dark' ? (
              <Moon className="w-[15px] h-[15px]" />
            ) : (
              <Sun className="w-[15px] h-[15px]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
