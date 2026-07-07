import Link from "next/link";
import { Search, Moon } from "lucide-react";

export default function navabr(): any {
  return (
    <header className="w-full py-4 px-8 ">
      <div className="mx-auto flex max-w-180 items-center justify-between">
        <nav className="flex items-center gap-8 text-sm text-zinc-600">
          <Link href="/" className="transition-colors hover:text-black">
            Home
          </Link>
          <Link href="/blog" className="transition-colors hover:text-black">
            Blog
          </Link>

          <Link href="/resume" className="transition-colors hover:text-black">
            Inspiration
          </Link>
          <Link href="/resume" className="transition-colors hover:text-black">
            Play
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-sm">
            <Search size={16} />
            <span>Ctrl K</span>
          </button>

          <button className="rounded-full p-2">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
