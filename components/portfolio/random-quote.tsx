"use client"

import { useEffect, useState } from "react"
import { QUOTES } from "@/data/quotes"

export function RandomQuote() {
  const [quote, setQuote] = useState(QUOTES[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)])
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative mb-12 flex min-h-[140px] w-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-background/50 p-6 sm:p-8">
        <div className="absolute -left-4 -top-6 select-none opacity-5">
          <span className="font-serif text-[180px] leading-nonetext-foreground">&ldquo;</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative mb-12 flex w-full flex-col gap-4 overflow-hidden rounded-xl border border-line bg-transparent p-6 sm:p-8">
      {/* Huge quote decoration */}
      <div className="absolute -left-2 top-2 select-none opacity-5 sm:-left-4 sm:-top-2">
        <span className="font-serif text-[140px] leading-none text-foreground sm:text-[180px]">&ldquo;</span>
      </div>

      <p className="relative z-10 text-balance font-mono text-lg text-foreground sm:text-xl">
        &quot;{quote.text}&quot;
      </p>

      <p className="relative z-10 mt-2 text-right text-sm italic text-muted-foreground sm:text-base">
        &mdash; {quote.author}
      </p>
    </div>
  )
}
