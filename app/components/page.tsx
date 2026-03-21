import Link from "next/link";
import { 
  Apple,
  TerminalSquare, 
  ShieldCheck, 
  Copy, 
  Star, 
  MousePointerClick,
  Mouse,
  Sparkles,
  Unlock,
  MessageSquareQuote,
  MessageCircle,
  FlipVertical,
  MoonStar,
  BriefcaseBusiness,
  Check
} from "lucide-react";
import { CopyIcon } from "lucide-react";

export const metadata = {
  title: "Components | Nihal Machhi",
  description: "A collection of reusable components. Trusted registry for shadcn/ui.",
};

const allComponents = [
  { name: "Apple Hello Effect", icon: Apple, href: "/components/apple-hello-effect" },
  { name: "Code Block Command", icon: TerminalSquare, href: "/components/code-block-command" },
  { name: "Consent Manager", icon: ShieldCheck, href: "/components/consent-manager" },
  { name: "Copy Button", icon: Copy, href: "/components/copy-button" },
  { name: "GitHub Stars", icon: Star, href: "/components/github-stars" },
  { name: "Haptic Feedback", icon: MousePointerClick, href: "/components/haptic-feedback" },
  { name: "React Wheel Picker", icon: Mouse, href: "/components/react-wheel-picker" },
  { name: "Scroll Fade Effect", icon: Sparkles, href: "/components/scroll-fade-effect" },
  { name: "Shimmering Text", icon: Sparkles, href: "/components/shimmering-text" },
  { name: "Slide to Unlock", icon: Unlock, href: "/components/slide-to-unlock" },
  { name: "Testimonial", icon: MessageSquareQuote, href: "/components/testimonial" },
  { name: "Testimonials Marquee", icon: MessageCircle, href: "/components/testimonials-marquee" },
  { name: "Text Flip", icon: FlipVertical, href: "/components/text-flip" },
  { name: "Theme Switcher", icon: MoonStar, href: "/components/theme-switcher" },
  { name: "Work Experience", icon: BriefcaseBusiness, href: "/components/work-experience" },
];

export default function ComponentsPage() {
  return (
    <div className="w-full pt-12 pb-24 px-4 sm:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Components</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base mb-8">
          A collection of reusable components. Trusted registry for shadcn/ui.
        </p>

        <div className="flex items-center justify-between border border-zinc-200 dark:border-zinc-800 rounded-md p-1 bg-zinc-50 dark:bg-zinc-900/50 mb-4 max-w-fit overflow-x-auto w-full">
          <div className="flex gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            <button className="px-3 py-1.5 rounded-sm hover:text-zinc-900 dark:hover:text-white transition-colors">pnpm</button>
            <button className="px-3 py-1.5 rounded-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm font-medium">yarn</button>
            <button className="px-3 py-1.5 rounded-sm hover:text-zinc-900 dark:hover:text-white transition-colors">npm</button>
            <button className="px-3 py-1.5 rounded-sm hover:text-zinc-900 dark:hover:text-white transition-colors">bun</button>
          </div>
          <div className="flex items-center gap-2 ml-6 pr-1">
             <button className="flex items-center gap-1.5 text-xs text-zinc-900 dark:text-white bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 px-2 py-1.5 rounded-sm transition-colors border border-zinc-200 dark:border-zinc-700">
                <span className="text-zinc-500 dark:text-zinc-400">+</span> Add
             </button>
             <button className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 rounded-sm bg-zinc-100 dark:bg-zinc-900 transition-colors">
               <CopyIcon className="w-3.5 h-3.5" />
             </button>
          </div>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-4 text-sm font-mono flex items-center justify-between text-zinc-800 dark:text-zinc-300">
          <div><span className="text-zinc-500 mr-2">$</span>yarn shadcn add @ncdai/code-block-command</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border border-zinc-200 dark:border-zinc-800/60 rounded-xl overflow-hidden bg-white dark:bg-zinc-950/30">
        {allComponents.map((comp, i) => {
          const Icon = comp.icon;
          return (
            <Link 
              key={comp.name} 
              href={comp.href}
              className="group flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-3 px-4 py-6 sm:py-4 border-b border-zinc-200 dark:border-zinc-800/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors sm:border-r sm:border-b-0 sm:[&:nth-child(n+4)]:border-b sm:[&:nth-child(3n)]:border-r-0 text-center sm:text-left"
              style={{
                borderBottomWidth: i >= allComponents.length - 3 ? "0px" : "1px",
              }}
            >
              <div className="w-8 h-8 shrink-0 rounded-md bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors border border-zinc-200 dark:border-zinc-800/50">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                {comp.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
