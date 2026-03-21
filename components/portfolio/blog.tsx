import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "@/components/ui/panel"

const dummyPosts = [
  { slug: "post-1", title: "My First Blog Post", description: "Hello world! This is a dummy post to showcase the blog UI.", date: "2023-10-01" },
  { slug: "post-2", title: "Learning Next.js Component Ecosystem", description: "A deep dive into server components.", date: "2023-10-05" },
  { slug: "post-3", title: "Tailwind CSS Layout Tricks", description: "How to perfectly build complex responsive layouts.", date: "2023-11-12" },
  { slug: "post-4", title: "Building Portfolio V2", description: "The journey of putting together a new developer portfolio.", date: "2024-01-20" },
];

function PostItem({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2 p-4 rounded-xl border border-line bg-card hover:bg-muted/50 transition-colors">
      <h3 className="font-medium">{post.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
      <span className="text-xs text-muted-foreground mt-2">{post.date}</span>
    </Link>
  )
}

export function Blog() {
  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>
          Blog
          <PanelTitleSup>({dummyPosts.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {dummyPosts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="screen-line-top flex justify-center py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          variant="outline"
          asChild
        >
          <Link href="/blog">
            All Posts
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Panel>
  )
}
