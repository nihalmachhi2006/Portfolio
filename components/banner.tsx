"use client";

import { useRef } from "react";
import { Magnet } from "@/components/magnet";
import { cn } from "@/lib/utils";

export default function Banner() {
    const containerRef = useRef<HTMLDivElement>(null);

    // The id="js-cover-mark" is critical as it connects to the navbar scroll listener.
    return (
        <div
            ref={containerRef}
            className={cn(
                "h-[140px] sm:h-[180px] md:h-[210px] select-none w-full",
                "flex items-center justify-center text-black dark:text-white",
                "screen-line-top screen-line-bottom before:-top-px after:-bottom-px",
                "bg-zinc-50 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-[length:10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-black/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
            )}
        >
            <Magnet containerRef={containerRef} magnetStrength={4}>
                <div id="js-cover-mark" className="flex items-center justify-center">
                    <span className="text-7xl sm:text-6xl font-black tracking-tighter opacity-80 hover:opacity-100 transition-opacity duration-300">
                        NM
                    </span>
                </div>
            </Magnet>
        </div>
    );
}
