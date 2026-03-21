import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "@/components/ui/panel"

const dummyPosts = [
  { slug: "post-1", title: "My First Blog Post", description: "Hello world! This is a dummy post to showcase the blog UI.", date: "2023-10-01", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=300" },
  { slug: "post-2", title: "Learning Next.js Component Ecosystem", description: "A deep dive into server components.", date: "2023-10-05", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=300" },
  { slug: "post-3", title: "Tailwind CSS Layout Tricks", description: "How to perfectly build complex responsive layouts.", date: "2023-11-12", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=300" },
  { slug: "post-4", title: "Building Portfolio V2", description: "The journey of putting together a new developer portfolio.", date: "2024-01-20", image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=600&h=300" },
];

function PostItem({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2 p-4 rounded-xl border border-line bg-card hover:bg-muted/50 transition-colors">
      <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-md mb-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" />
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
