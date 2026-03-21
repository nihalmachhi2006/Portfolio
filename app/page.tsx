import Banner from "@/components/banner";
import { ProfileHeader } from "@/components/portfolio/profile-header";
import { Overview } from "@/components/portfolio/overview";
import { SocialLinks } from "@/components/portfolio/social-links";
import { About } from "@/components/portfolio/about";
import { GithubContributions } from "@/components/portfolio/github-contributions";
import { Stack } from "@/components/portfolio/stack";
import { ComponentsPreview } from "@/components/portfolio/components-preview";

function Separator() {
  return (
    <div
      className="relative flex h-8 w-full before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-[length:10px_10px] before:[--pattern-foreground:var(--color-line)]/56 border-y border-line"
    />
  )
}

export default function Home() {
  return (
    <div className="w-full *:[[id]]:scroll-mt-22">
      <Banner />
      <ProfileHeader />
      <Separator />

      <Overview />
      <SocialLinks />
      <Separator />

      <About />
      <Separator />
      
      <GithubContributions />
      <Separator />

      <Stack />
      <Separator />

      <ComponentsPreview />
      <Separator />

      <div className="flex-1 min-h-[50vh]"></div>
    </div>
  );
}