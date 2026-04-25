"use client";

import React from "react";
import Link from "next/link"; // Import important pour changer de page

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo qui ramène à l'accueil */}
        <Link href="/" className="text-2xl font-serif font-bold text-white italic">
          CV<span className="text-yellow-400">Pro</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-zinc-400 hover:text-yellow-400 transition-colors">
            Accueil
          </Link>
          <Link href="/fonctionnalites" className="text-zinc-400 hover:text-yellow-400 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="/avis" className="text-zinc-400 hover:text-yellow-400 transition-colors">
            Avis
          </Link>
        </nav>

        {/* Bouton d'action */}
        <Link 
          href="/commander" 
          className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-6 py-2.5 rounded-full font-bold text-sm transition-all"
        >
          Commander
        </Link>
      </div>
    </header>
  );
}