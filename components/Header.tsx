"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          CV<span className="text-yellow-400">Pro</span>
        </Link>

        {/* Liens Desktop (cachés sur mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <Link href="/#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</Link>
          <Link href="/#avis" className="hover:text-white transition-colors">Avis</Link>
        </div>

        {/* Bouton Mobile (Hamburger) */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Menu Mobile Déroulant */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-zinc-900 border-b border-white/10 flex flex-col p-6 gap-4 md:hidden animate-in slide-in-from-top">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-white font-medium">Accueil</Link>
            <Link href="/#fonctionnalites" onClick={() => setIsOpen(false)} className="text-white font-medium">Fonctionnalités</Link>
            <Link href="/#avis" onClick={() => setIsOpen(false)} className="text-white font-medium">Avis</Link>
            <Link href="/commander" onClick={() => setIsOpen(false)} className="bg-yellow-500 text-black text-center py-3 rounded-lg font-bold">Commander</Link>
          </div>
        )}

        <Link href="/commander" className="hidden md:block bg-yellow-500 text-black px-6 py-2.5 rounded-full font-bold text-sm">
          Commander
        </Link>
      </nav>
    </header>
  );
}