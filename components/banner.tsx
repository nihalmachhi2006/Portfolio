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
                "w-full h-[50vh] min-h-[400px] border-b border-zinc-200 dark:border-zinc-800 select-none",
                "flex items-center justify-center text-zinc-950 dark:text-zinc-50 relative",
                // Using a similar dot pattern background strategy that blends on both light and dark backgrounds
                "bg-zinc-50 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-[size:10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-zinc-950 dark:[--pattern-foreground:var(--color-white)]/5 transition-colors duration-300"
            )}
        >
            <Magnet containerRef={containerRef} magnetStrength={6}>
                <div id="js-cover-mark" className="flex items-center justify-center px-8 py-4">
                    <span className="text-5xl sm:text-7xl font-black tracking-tighter opacity-80 hover:opacity-100 transition-opacity duration-300">
                        NM
                    </span>
                </div>
            </Magnet>
        </div>
    );
}
