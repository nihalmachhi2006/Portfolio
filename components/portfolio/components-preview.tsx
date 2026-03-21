import Link from "next/link";
import { Panel, PanelHeader, PanelTitle, PanelContent } from "@/components/ui/panel";
import { 
  Copy, 
  FlipVertical, 
  MousePointerClick, 
  TerminalSquare, 
  MessageSquareQuote, 
  ShieldCheck, 
  Mouse, 
  Star, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const previewComponents = [
  { name: "Haptic Feedback", icon: MousePointerClick, href: "/components/haptic-feedback" },
  { name: "Text Flip", icon: FlipVertical, href: "/components/text-flip" },
  { name: "Copy Button", icon: Copy, href: "/components/copy-button" },
  { name: "Code Block Command", icon: TerminalSquare, href: "/components/code-block-command" },
  { name: "Testimonial", icon: MessageSquareQuote, href: "/components/testimonial" },
  { name: "Consent Manager", icon: ShieldCheck, href: "/components/consent-manager" },
  { name: "Scroll Fade Effect", icon: Mouse, href: "/components/scroll-fade-effect" },
  { name: "GitHub Stars", icon: Star, href: "/components/github-stars" },
  { name: "Shimmering Text", icon: Sparkles, href: "/components/shimmering-text" },
];

export function ComponentsPreview() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Components <span className="text-zinc-500 text-xs font-normal align-top ml-1">(15)</span></PanelTitle>
      </PanelHeader>
      <PanelContent className="pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-0 sm:px-4">
          {previewComponents.map((comp, i) => {
            const Icon = comp.icon;
            return (
              <Link 
                key={comp.name} 
                href={comp.href}
                className="group flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-3 px-4 py-6 sm:py-4 border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors sm:border-r sm:border-b-0 sm:[&:nth-child(n+4)]:border-b sm:[&:nth-child(3n)]:border-r-0 text-center sm:text-left"
                style={{
                  borderBottomWidth: i >= previewComponents.length - 3 ? "0px" : "1px",
                }}
              >
                <div className="w-8 h-8 shrink-0 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors border border-transparent dark:border-zinc-700/50">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  {comp.name}
                </span>
              </Link>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-6 px-4">
          <Link 
            href="/components"
            className="flex items-center gap-2 px-4 py-2 bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 text-sm font-medium rounded-md transition-colors"
          >
            All Components
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PanelContent>
    </Panel>
  );
}
