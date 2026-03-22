"use client";

import { TextFlip } from "@/components/ui/text-flip"
import { PronounceMyName } from "./pronounce-my-name"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  const [skills, setSkills] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    fetch('/skillsprofile.md', { cache: 'no-store' }).then(res => res.text()).then(text => {
      const parsed = text.split('\n')
        .map(line => line.trim())
        .filter(line => line.match(/^\d+\./))
        .map(line => line.replace(/^\d+\.\s*/, ''));
      if(parsed.length > 0) {
        setSkills(parsed);
      } else {
        setSkills(["Design Engineer", "Open Source Builder"]);
      }
    }).catch(() => setSkills(["Design Engineer", "Open Source Builder"]));
  }, []);

  return (
    <div className="screen-line-bottom flex relative mt-0 w-full dark:bg-transparent">
      <div className="shrink-0 border-r border-line">
        <div 
          className="mx-0.5 my-0.75 p-1 sm:p-2 relative cursor-help"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                  exit={{ opacity: 0, y: 10, scale: 0.8, x: '-50%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -top-10 left-1/2 z-20 pointer-events-none"
                >
                  <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs sm:text-sm font-semibold px-4 py-2 rounded-2xl whitespace-nowrap shadow-2xl border border-zinc-800 dark:border-zinc-200 relative">
                    Hi, I'm Nihal! 
                    <span className="ml-1 text-sm sm:text-base">👋</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 dark:bg-zinc-100 rotate-45 border-r border-b border-zinc-800 dark:border-zinc-200" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="relative z-10 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Profile Image with Ring & Border */}
              <img
                className="w-[120px] h-[120px] sm:w-40 sm:h-40 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 select-none bg-background shadow-lg relative z-10"
                alt="Avatar"
                src="/nm.jpeg"
                fetchPriority="high"
              />
              
              {/* Online/Live Status Dot */}
              <div className="absolute bottom-[8%] right-[8%] z-20">
                <span className="relative flex h-3 w-3 sm:h-4 sm:w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-green-500 border-2 border-white dark:border-zinc-900"></span>
                </span>
              </div>
            </motion.div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4 min-h-[50px]">
          <div
            className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800"
            aria-hidden
          >
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-line">
          <div className="flex items-center gap-2 pl-4 py-2">
            <h1 className="-translate-y-px text-3xl font-semibold tracking-tight">
              Nihal Machhi
            </h1>

            <VerifiedIcon
              className="w-4.5 h-4.5 text-blue-500 select-none"
              aria-label="Verified"
            />

            <PronounceMyName
              namePronunciationUrl="https://assets.chanhdai.com/sounds/pronounce.mp3"
            />
          </div>

          <div className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            {skills.length > 0 && (
              <TextFlip
                className="font-mono text-sm text-balance text-muted-foreground"
                variants={{
                  initial: { y: -10, opacity: 0 },
                  animate: { y: -1, opacity: 1 },
                  exit: { y: 10, opacity: 0 },
                }}
                interval={2}
              >
                {skills}
              </TextFlip>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
