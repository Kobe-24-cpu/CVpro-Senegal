"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="h-8 w-1 bg-red-600 animate-pulse" />
        <Link href="/" className="text-xl font-black tracking-[0.2em] uppercase italic hover:opacity-80 transition-opacity">
          Manga<span className="text-red-600">Zenith</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-zinc-400 items-center">
        <Link href="/magic" className="text-purple-500 border border-purple-500 px-3 py-1 hover:bg-purple-500 hover:text-white transition-all duration-300">
          Magic
        </Link>
        <Link href="/#shop" className="hover:text-red-500 transition-colors">
          Catalog
        </Link>
        <span className="text-red-600 border border-red-600 px-3 py-1 cursor-default">
          Limited
        </span>
      </nav>
    </header>
  );
}