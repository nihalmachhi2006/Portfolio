"use client";

import { TextFlip } from "@/components/ui/text-flip"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"
import { useState, useEffect } from "react";

export function ProfileHeader() {
  const [skills, setSkills] = useState<string[]>([]);
  
  useEffect(() => {
    fetch('/skillsprofile.md').then(res => res.text()).then(text => {
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
        <div className="mx-0.5 my-0.75 p-1 sm:p-2">
            <img
              className="w-[120px] h-[120px] sm:w-40 sm:h-40 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none"
              alt="Avatar"
              src="https://avatars.githubusercontent.com/u/183213542?v=4"
              fetchPriority="high"
            />
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
