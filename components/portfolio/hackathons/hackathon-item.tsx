"use client";

import { BoxIcon, InfinityIcon, LinkIcon } from "lucide-react"
import Image from "next/image"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Markdown } from "@/components/markdown"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Hackathon } from "@/types/portfolio/hackathons"

export function HackathonItem({
  className,
  hackathon,
}: {
  className?: string
  hackathon: Hackathon
}) {
  const { start, end } = hackathon.period
  const isOngoing = !end
  const isSinglePeriod = end === start

  return (
    <Collapsible className={className} defaultOpen={hackathon.isExpanded}>
      <div className="flex items-center hover:bg-accent-muted">
        {hackathon.logo ? (
          <Image
            src={hackathon.logo}
            alt={hackathon.title}
            width={32}
            height={32}
            className="mx-4 flex size-6 shrink-0 select-none"
            unoptimized
            aria-hidden
          />
        ) : (
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
            <BoxIcon className="size-4" />
          </div>
        )}

        <div className="flex-1 border-l border-dashed border-line">
          <CollapsibleTrigger asChild>
            <div className="flex w-full items-center gap-2 p-4 pr-2 text-left cursor-pointer">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {hackathon.title}
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    {!isSinglePeriod && (
                      <>
                        <span className="font-mono">—</span>
                        {isOngoing ? (
                          <>
                            <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                            <span className="sr-only">Present</span>
                          </>
                        ) : (
                          <span>{end}</span>
                        )}
                      </>
                    )}
                  </dd>
                </dl>
              </div>

              {hackathon.link && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground z-10"
                    href={addQueryParams(hackathon.link, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Open Hackathon Link</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open Hackathon Link</p>
                </TooltipContent>
              </Tooltip>
              )}

              <div className="shrink-0 text-muted-foreground [&_svg]:size-4 relative z-0">
                <CollapsibleChevronsIcon duration={0.15} />
              </div>
            </div>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {hackathon.description && (
            <ProseMono>
              <Markdown>{hackathon.description}</Markdown>
            </ProseMono>
          )}

          {hackathon.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {hackathon.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
