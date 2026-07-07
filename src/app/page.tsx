"use client";

import Image from "next/image";
import dpImage from "@/assets/dp.jpeg";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const email = "nihalmachhi11@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="mx-auto max-w-180 pt-4 ">
      <section className="flex items-start gap-5 sm:mx-4 ">
        {/* Avatar */}
        <Image
          src={dpImage}
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />

        {/* Info */}
        <div className="flex flex-col pt-3">
          <h1 className="text-4xl tracking-tight text-zinc-900 font-sans ">
            Nihal Machhi{" "}
            <span className="font-medium text-xl">aka @nihalmachhi2006</span>
          </h1>

          {/* Subtitle + Email */}
          <div className="mt-2 flex items-center gap-2 text-md text-zinc-500 flex-wrap">
            <span>Software Engineer</span>

            <span>•</span>

            <span>polymath</span>

            <span>•</span>

            <span>{email}</span>

            <button
              onClick={handleCopy}
              className="rounded p-1 transition hover:bg-zinc-100"
            >
              {copied ? (
                <Check
                  size={16}
                  className="text-green-600 transition-all duration-200"
                />
              ) : (
                <Copy
                  size={16}
                  className="text-zinc-500 transition-all duration-200"
                />
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
