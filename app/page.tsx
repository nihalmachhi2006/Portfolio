import Banner from "@/components/banner";
import { ProfileHeader } from "@/components/portfolio/profile-header";
import { Overview } from "@/components/portfolio/overview";
import { SocialLinks } from "@/components/portfolio/social-links";
import { About } from "@/components/portfolio/about";
import { Stack } from "@/components/portfolio/stack";
import { GithubContributions } from "@/components/portfolio/github-contributions";
import { Hackathons } from "@/components/portfolio/hackathons";
import { Projects } from "@/components/portfolio/projects";
import { Experiences } from "@/components/portfolio/experiences";
import { Blog } from "@/components/portfolio/blog";
import { Awards } from "@/components/portfolio/awards";
import { Certifications } from "@/components/portfolio/certifications";
import { Bookmarks } from "@/components/portfolio/bookmarks";
import { RandomQuote } from "@/components/portfolio/random-quote";
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

      <Stack />
      <Separator />

      <GithubContributions />
      <Separator />
      
      <Hackathons />
      <Separator />

      <Projects />
      <Separator />

      <Experiences />
      <Separator />

      <Blog />
      <Separator />

      <Awards />
      <Separator />

      <Certifications />
      <Separator />

      <Bookmarks />
      <Separator />

      <RandomQuote />
      <Separator />

      <ComponentsPreview />
    </div>

  );
}