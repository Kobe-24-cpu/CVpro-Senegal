"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-white italic">
          CV<span className="text-yellow-400">Pro</span>
        </Link>

        {/* Navigation Desktop */}
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

        {/* Bouton Commander Desktop */}
        <div className="hidden md:block">
          <Link
            href="/commander"
            className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-6 py-2.5 rounded-full font-bold text-sm transition-all"
          >
            Commander
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Déroulant */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-zinc-950 border-b border-zinc-900 flex flex-col p-6 space-y-6 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={closeMenu} className="text-xl text-zinc-400 hover:text-yellow-400">
            Accueil
          </Link>
          {/* ✅ CORRIGÉ — était "/" avant */}
          <Link href="/fonctionnalites" onClick={closeMenu} className="text-xl text-zinc-400 hover:text-yellow-400">
            Fonctionnalités
          </Link>
          {/* ✅ CORRIGÉ — était "/" avant */}
          <Link href="/avis" onClick={closeMenu} className="text-xl text-zinc-400 hover:text-yellow-400">
            Avis
          </Link>
          <Link
            href="/commander"
            onClick={closeMenu}
            className="bg-yellow-500 text-zinc-950 text-center py-4 rounded-xl font-bold text-lg"
          >
            Obtenir mon CVPro
          </Link>
        </div>
      )}
    </header>
  );
}