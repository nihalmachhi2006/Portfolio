"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiDailydotdev, SiCodechef, SiCodeforces } from "react-icons/si";
import { Panel } from "@/components/ui/panel";
import { cn } from "@/lib/utils";

interface SocialLink {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaXTwitter className="w-5 h-5" />, title: "X", href: "https://x.com/nihalmachhi2006" },
  { icon: <FaGithub className="w-5 h-5" />, title: "GitHub", href: "https://github.com/nihalmachhi2006" },
  { icon: <FaLinkedinIn className="w-5 h-5" />, title: "LinkedIn", href: "https://www.linkedin.com/in/nihalmachhi2006/" },
  { icon: <SiDailydotdev className="w-5 h-5" />, title: "daily.dev", href: "https://app.daily.dev/nihalmachhi" },
  { icon: <SiCodechef className="w-5 h-5" />, title: "CodeChef", href: "https://www.codechef.com/users/nihalmachhi" },
  { icon: <SiCodeforces className="w-5 h-5" />, title: "Codeforces", href: "https://codeforces.com/profile/nihalmachhi" },
];

function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent/50",
        "max-md:nth-[2n+1]:screen-line-top max-md:nth-[2n+1]:screen-line-bottom",
        "md:nth-[3n+1]:screen-line-top md:nth-[3n+1]:screen-line-bottom"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="relative w-8 h-8 shrink-0 flex items-center justify-center bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg">
        {icon}
      </div>

      <h3 className="flex-1 font-medium">{title}</h3>

      <FiArrowUpRight className="w-4 h-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45" />
    </a>
  )
}

export function SocialLinks() {
  return (
    <Panel className="before:content-none after:content-none mt-2">
      <h2 className="sr-only">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-2 gap-2 md:grid-cols-3">
          <div className="border-r border-line" />
          <div className="border-l border-line md:border-x" />
          <div className="border-l border-line max-md:hidden" />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />
          })}
        </div>
      </div>
    </Panel>
  )
}
