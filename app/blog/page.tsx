"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

const allPosts = [
  { 
    slug: "react-wheel-picker", 
    title: "React Wheel Picker joins Vercel Open Source Program", 
    date: "24.07.2025",
    image: (
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450" alt="React Wheel Picker" className="w-full h-full object-cover rounded-md" />
    )
  },
  { 
    slug: "followed-by-shadcn", 
    title: "Followed by @shadcn on X", 
    date: "21.06.2025",
    image: (
      <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=450" alt="Social Media" className="w-full h-full object-cover rounded-md" />
    )
  },
  { 
    slug: "haptic-feedback", 
    title: "Haptic Feedback", 
    date: "01.03.2026",
    image: (
      <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450" alt="Haptic Feedback" className="w-full h-full object-cover rounded-md" />
    )
  },
  { 
    slug: "text-flip", 
    title: "Text Flip", 
    date: "19.02.2026",
    image: (
      <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800&h=450" alt="Text Flip" className="w-full h-full object-cover rounded-md" />
    )
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full pt-12 pb-24 px-4 sm:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Blog</h1>
        <p className="text-zinc-600 dark:text-zinc-400 font-mono text-[13px] mb-8">
          A collection of articles on development, design, and ideas.
        </p>
        
        <div className="relative mb-8 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search Blog..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-md outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-700 transition-all font-mono text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-zinc-200 dark:border-zinc-800/60 rounded-xl overflow-hidden bg-white dark:bg-zinc-950/30">
        {filteredPosts.map((post, i) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group flex flex-col p-6 border-b border-zinc-200 dark:border-zinc-800/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors sm:border-r sm:border-b-0 sm:[&:nth-child(n+3)]:border-b sm:[&:nth-child(even)]:border-r-0"
            style={{
              borderBottomWidth: i >= filteredPosts.length - (filteredPosts.length % 2 === 0 ? 2 : 1) ? "0px" : "1px",
            }}
          >
            <div className="w-full aspect-[16/9] mb-5 bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center p-0.5 border border-zinc-200 dark:border-zinc-800/50">
                {post.image}
            </div>
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 group-hover:underline decoration-1 underline-offset-4 mb-2">
              {post.title}
            </h3>
            <span className="text-[13px] font-mono text-zinc-500 dark:text-zinc-400 mt-auto pt-1">
              {post.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
