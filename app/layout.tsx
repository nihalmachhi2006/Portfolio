import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import { SiteFooter } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Personal developer portfolio website",
// };

export const metadata: Metadata = {
  title: "Nihal Machhi | AI/ML Software Developer",
  description:
    "Nihal Machhi is an AI/ML Software Developer specializing in machine learning, deep learning, and full stack development. Explore projects, skills, and portfolio.",

  keywords: [
    "Nihal Machhi",
    "AI ML Developer",
    "Machine Learning Developer",
    "Deep Learning Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
  ],

  authors: [{ name: "Nihal Machhi" }],
  creator: "Nihal Machhi",

  openGraph: {
    title: "Nihal Machhi | AI/ML Software Developer",
    description:
      "Portfolio of Nihal Machhi - AI/ML Developer showcasing machine learning and full stack projects.",
    url: "https://nihalmachhi.vercel.app",
    siteName: "Nihal Machhi Portfolio",
    images: [
      {
        url: "/og-image.png", // ✅ keep local
        width: 1200,
        height: 630,
        alt: "Nihal Machhi Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nihal Machhi | AI/ML Software Developer",
    description:
      "AI/ML Developer portfolio with machine learning and full stack projects.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://nihalmachhi.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            <main className="w-full max-w-3xl mx-auto border-x border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 min-h-[calc(100vh-60px)] transition-colors duration-300">
              {children}
            </main>
            <SiteFooter />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
