import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
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
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
