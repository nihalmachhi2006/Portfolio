"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─────────────────────────────────────────────────────────────────────────────
// Inline SVG icons (matches lucide-react which is already in the project)
// ─────────────────────────────────────────────────────────────────────────────

function IconSearch({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function IconSun({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function IconMoon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Components", href: "/components" },
  { label: "Blocks",     href: "/blocks" },
  { label: "Blog",       href: "/blog" },
] as const;

const GITHUB_URL = "https://github.com/ncdai/chanhdai.com?utm_source=chanhdai.com";

// ─────────────────────────────────────────────────────────────────────────────
// Shared class builders
// ─────────────────────────────────────────────────────────────────────────────

/** Every right-side action cell: full height, left border divider, centered content */
const actionCell = [
  "flex items-center justify-center h-full px-3",
  "border-l border-zinc-200 dark:border-zinc-800",
  "transition-colors cursor-pointer",
  "text-zinc-500 dark:text-zinc-400",
  "hover:bg-zinc-50 dark:hover:bg-zinc-900",
  "hover:text-zinc-900 dark:hover:text-zinc-100",
].join(" ");

// ─────────────────────────────────────────────────────────────────────────────
// Command Palette
// ─────────────────────────────────────────────────────────────────────────────

function CommandPalette({ open, onClose }: { open: boolean; onClose(): void }) {
  const [query, setQuery] = React.useState("");
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) { setQuery(""); setTimeout(() => ref.current?.focus(), 10); }
  }, [open]);

  React.useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  if (!open) return null;

  const results = NAV_LINKS.filter((l) =>
    l.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center" style={{ paddingTop: "15vh" }}>
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />

      {/* panel */}
      <div
        role="dialog"
        aria-label="Command Palette"
        className={[
          "relative z-10 w-full max-w-[560px] mx-4 overflow-hidden",
          "rounded-xl shadow-2xl",
          "bg-white dark:bg-zinc-950",
          "border border-zinc-200 dark:border-zinc-800",
        ].join(" ")}
      >
        {/* heading */}
        <div className="px-4 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Command Palette
        </div>

        {/* search row */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-100 dark:border-zinc-800">
          <IconSearch className="shrink-0 text-zinc-400" />
          <input
            ref={ref}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a command to run..."
            className={[
              "flex-1 bg-transparent text-sm outline-none",
              "text-zinc-900 dark:text-zinc-100",
              "placeholder:text-zinc-400 dark:placeholder:text-zinc-600",
            ].join(" ")}
          />
        </div>

        {/* results */}
        <div className="py-1 max-h-64 overflow-y-auto">
          {results.length === 0 ? (
            <p className="py-8 text-center text-sm text-zinc-400">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={[
                  "flex items-center gap-3 px-4 py-2.5 text-sm",
                  "text-zinc-600 dark:text-zinc-300",
                  "hover:bg-zinc-50 dark:hover:bg-zinc-900",
                  "transition-colors",
                ].join(" ")}
              >
                <span className="text-zinc-300 dark:text-zinc-600">▸</span>
                {item.label}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile nav drawer  (slides down directly below the 40 px header)
// ─────────────────────────────────────────────────────────────────────────────

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose(): void;
  pathname: string;
}) {
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-20 bg-black/20 dark:bg-black/50"
        onClick={onClose}
        aria-hidden
        style={{ top: "40px" }}
      />
      <nav
        className={[
          "fixed left-0 right-0 z-20",
          "bg-white dark:bg-zinc-950",
          "border-b border-zinc-200 dark:border-zinc-800",
        ].join(" ")}
        style={{ top: "40px" }}
      >
        {NAV_LINKS.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={[
                "flex items-center h-10 px-4 text-sm",
                "border-b border-zinc-100 dark:border-zinc-900",
                "transition-colors",
                active
                  ? "text-zinc-900 dark:text-zinc-100 font-medium"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// useTheme
// ─────────────────────────────────────────────────────────────────────────────

function useTheme() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const init =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(init);
    document.documentElement.classList.toggle("dark", init === "dark");
  }, []);

  const toggle = () =>
    setTheme((prev) => {
      const next: "light" | "dark" = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });

  return { theme, toggle };
}

// ─────────────────────────────────────────────────────────────────────────────
// Navbar  ← the component you import in layout.tsx
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Pixel-perfect replica of the chanhdai.com top navigation bar.
 *
 * Layout (both borders visible, h-10 / 40 px):
 * ┌───────────────────────────────────────────────────── border-t ──┐
 * │ Home │ Components │ Blocks │ Blog │···│Search ⌘K CtrlK│1.5k│☀│☰│
 * └───────────────────────────────────────────────────── border-b ──┘
 *
 * Usage in app/layout.tsx:
 *   import { Navbar } from "@/components/navbar";
 *   ...
 *   <Navbar />
 *   {children}
 */
export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [cmdOpen,    setCmdOpen]    = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // ⌘K / Ctrl+K shortcut
  React.useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          HEADER
          ════════════════════════════════════════════════════════════════ */}
      <header
        className={[
          // Fixed, full-width, exactly 40 px tall
          "fixed top-0 inset-x-0 z-30 h-10",
          // Solid background (site does NOT blur)
          "bg-white dark:bg-zinc-950",
          // THE TWO HORIZONTAL LINES the user sees on chanhdai.com
          "border-t border-b border-zinc-200 dark:border-zinc-800",
        ].join(" ")}
      >
        {/*
         * Inner container: max-width matches the site's content width.
         * Left + right side borders create the "box" effect on large screens.
         */}
        <div
          className={[
            "h-full mx-auto flex items-stretch",
            "max-w-screen-md",
            "border-l border-r border-zinc-200 dark:border-zinc-800",
          ].join(" ")}
        >

          {/* ── LEFT: desktop nav links ─────────────────────────────────── */}
          <nav className="hidden md:flex items-stretch flex-1 min-w-0">
            {NAV_LINKS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "flex items-center px-3 text-sm h-full",
                    "border-r border-zinc-200 dark:border-zinc-800",
                    "transition-colors whitespace-nowrap",
                    active
                      ? "text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* spacer to push right-side actions to the far right */}
            <div className="flex-1" />
          </nav>

          {/* ── LEFT (mobile): spacer pushes actions right ──────────────── */}
          <div className="flex md:hidden flex-1" />

          {/* ── RIGHT: Search · 1.5k · Theme · Menu ────────────────────── */}

          {/* Search button */}
          <button
            onClick={() => setCmdOpen(true)}
            aria-label="Open command palette"
            className={[
              actionCell,
              // search button is wider — show label + kbd on ≥ sm
              "gap-2 px-3",
              // override the default px-3 from actionCell for the wider search cell
            ].join(" ")}
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
          >
            <IconSearch />
            <span className="hidden sm:inline text-sm text-zinc-400 dark:text-zinc-500">
              Search…
            </span>
            {/* ⌘K badge */}
            <span className="hidden sm:flex items-center gap-1">
              <kbd
                className={[
                  "inline-flex h-5 items-center px-1.5 rounded text-[10px] font-mono",
                  "bg-zinc-100 dark:bg-zinc-800",
                  "border border-zinc-200 dark:border-zinc-700",
                  "text-zinc-400 dark:text-zinc-500",
                ].join(" ")}
              >
                ⌘K
              </kbd>
              <kbd
                className={[
                  "inline-flex h-5 items-center px-1.5 rounded text-[10px] font-mono",
                  "bg-zinc-100 dark:bg-zinc-800",
                  "border border-zinc-200 dark:border-zinc-700",
                  "text-zinc-400 dark:text-zinc-500",
                ].join(" ")}
              >
                CtrlK
              </kbd>
            </span>
          </button>

          {/* GitHub stars */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository — 1.5k stars"
            className={[actionCell, "gap-1.5"].join(" ")}
          >
            <IconGitHub />
            <span className="text-xs font-medium">1.5k</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Theme Toggle"
            title="Theme Toggle"
            className={actionCell}
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>

          {/* Toggle Menu */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Menu"
            title="Toggle Menu"
            className={actionCell}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>

        </div>
      </header>

      {/* Spacer: pushes page content below the fixed 40 px header */}
      <div aria-hidden="true" className="h-10" />

      {/* ── Overlays ─────────────────────────────────────────────────────── */}
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

export default Navbar;