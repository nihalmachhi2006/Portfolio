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
                "w-full h-[50vh] min-h-[400px] border-b border-zinc-200 select-none",
                "flex items-center justify-center text-zinc-950 dark:text-zinc-50 relative",
                // Using a similar dot pattern background strategy that blends on both light and dark backgrounds
                "bg-zinc-50 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-[size:10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-zinc-950 dark:[--pattern-foreground:var(--color-white)]/5"
            )}
        >
            <Magnet containerRef={containerRef} magnetStrength={6}>
                <div id="js-cover-mark" className="flex items-center justify-center px-8 py-4">
                    <img
                        src="/logo.png"
                        alt="Brand Logo"
                        className="h-20 w-auto dark:invert grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            </Magnet>
        </div>
    );
}
