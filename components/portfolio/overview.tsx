"use client";

import { useState, useEffect } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone, FiLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMale } from "react-icons/io5";
import { Panel, PanelContent } from "@/components/ui/panel";
import { cn } from "@/lib/utils";

function IntroItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-4 font-mono text-sm", className)}
      {...props}
    />
  )
}

function IntroItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-6 h-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background",
        "[&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:w-4 [&_svg:not([class*='size-'])]:h-4",
        className
      )}
      {...props}
    />
  )
}

function IntroItemContent({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-balance flex gap-1", className)} {...props} />
}

function CurrentLocalTimeItem({ timeZone }: { timeZone: string }) {
  const [timeString, setTimeString] = useState<string>("");
  const [diffText, setDiffText] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format current time in target timezone
      const formattedTime = now.toLocaleTimeString("en-US", {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      setTimeString(formattedTime);

      // Get target timezone offset in minutes
      const getOffsetInMinutes = (tz: string) => {
        const date = new Date();
        const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
        return (tzDate.getTime() - utcDate.getTime()) / 60000;
      };

      const targetOffset = getOffsetInMinutes(timeZone);
      const viewerOffset = -now.getTimezoneOffset(); // in minutes

      const minutesDiff = targetOffset - viewerOffset;
      const hoursDiff = Math.abs(minutesDiff / 60);

      if (hoursDiff === 0) {
        setDiffText("// same time");
      } else {
        const isAhead = targetOffset > viewerOffset;
        // Format to 1 decimal place if it's not a whole number (e.g., 5.5h)
        const formatHours = hoursDiff % 1 === 0 ? hoursDiff : hoursDiff.toFixed(1);
        setDiffText(`// ${formatHours}h ${isAhead ? "ahead" : "behind"}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [timeZone]);

  if (!timeString) {
    return (
      <IntroItem>
        <IntroItemIcon><FiClock /></IntroItemIcon>
        <IntroItemContent>--:--</IntroItemContent>
      </IntroItem>
    );
  }

  return (
    <IntroItem>
      <IntroItemIcon><FiClock /></IntroItemIcon>
      <IntroItemContent aria-label={`Current local time: ${timeString}`}>
        <span className="cursor-default">{timeString}</span>
        <span className="text-muted-foreground ml-1" aria-hidden="true">
          {diffText}
        </span>
      </IntroItemContent>
    </IntroItem>
  );
}

export function Overview() {
  return (
    <Panel className="after:content-none mt-2">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">

          <IntroItem>
            <IntroItemIcon><FaCode /></IntroItemIcon>
            <IntroItemContent>AI/ML Software Developer</IntroItemContent>
          </IntroItem>

          <CurrentLocalTimeItem timeZone="Asia/Kolkata" />

          <IntroItem>
            <IntroItemIcon><FaRegLightbulb /></IntroItemIcon>
            <IntroItemContent>Student at parul university</IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><FiMail /></IntroItemIcon>
            <IntroItemContent>nihalmachhi11@gmail.com</IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><FiMapPin /></IntroItemIcon>
            <IntroItemContent>Vadodara -  Gujarat - India</IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><IoMale /></IntroItemIcon>
            <IntroItemContent>he/him</IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><FiPhone /></IntroItemIcon>
            <IntroItemContent>+91 87803-39034</IntroItemContent>
          </IntroItem>

          <IntroItem className="max-sm:hidden">
            {/* Empty space filler for layout */}
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><FiLink /></IntroItemIcon>
            <IntroItemContent>nihalmachhi.vercel.app</IntroItemContent>
          </IntroItem>

        </div>
      </PanelContent>
    </Panel>
  )
}
