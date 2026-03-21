"use client";

import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import { format } from "date-fns";
import { Panel, PanelContent } from "@/components/ui/panel";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Panel className="min-h-[200px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4 w-full px-8 py-10">
           <div className="h-32 w-full bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
           <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
        </div>
      </Panel>
    );
  }

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <PanelContent className="pt-8 pb-6 px-4 sm:px-8 w-full flex justify-center">
        <div className="w-full flex justify-center text-sm font-sans [&_article]:w-full [&_article]:flex [&_article]:justify-center [&_svg]:max-w-full [&_svg]:h-auto">
          <TooltipProvider delayDuration={0}>
            <GitHubCalendar
              username="nihalmachhi2006"
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              blockSize={11}
              blockMargin={3}
              fontSize={12}
              renderBlock={(block, activity) => (
                <Tooltip>
                  <TooltipTrigger asChild>{block}</TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="font-mono text-xs"
                  >
                    <span>
                      {activity.count} {activity.count === 1 ? "contribution" : "contributions"} on{" "}
                      {format(new Date(activity.date), "dd.MM.yyyy")}
                    </span>
                  </TooltipContent>
                </Tooltip>
              )}
              theme={{
                light: [
                  '#ebedf0',
                  '#9be9a8',
                  '#40c463',
                  '#30a14e',
                  '#216e39'
                ],
                dark: [
                  'rgba(255,255,255,0.05)',
                  '#39d353',
                  '#26a641',
                  '#006d32',
                  '#0e4429'
                ]
              }}
            />
          </TooltipProvider>
        </div>
      </PanelContent>
    </Panel>
  );
}
