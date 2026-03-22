import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Experience } from "@/types/portfolio/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="screen-line-bottom scroll-mt-14 space-y-4 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className={`text-lg leading-snug font-semibold ${experience.isBlurred ? "blur-[5px] select-none" : ""}`}>
          {experience.companyWebsite && !experience.isBlurred ? (
            <a
              className="underline-offset-4 hover:underline"
              href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              {experience.companyName}
            </a>
          ) : (
            experience.companyName
          )}
        </h3>

        {experience.isCurrentEmployer && (
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2 py-0.5 text-xs font-medium text-secondary-foreground">
            <span className="relative flex size-1.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="leading-none">Working</span>
          </div>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}
