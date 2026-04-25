"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-16 pt-17.5 relative overflow-hidden">

      {/* ── IMAGE DE FOND ANIMÉE ──────────────────────────────────────
          Copiez hero-bg.png dans /public de votre projet Next.js
      ─────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-anim"
        style={{ backgroundImage: "url('/image/hero-bg.png')" }}      />

      {/* Dégradé gauche — garde le texte lisible */}
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/92 via-zinc-950/65 to-zinc-950/20 pointer-events-none" />

      {/* Dégradé bas — fondu vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none" />

      {/* Effet visuel d'origine (cercle flou doré) — conservé */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-150 h-150 rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      {/* Contenu — inchangé */}
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs px-4 py-1.5 rounded-full mb-8">
          🇸🇳 Service professionnel au Sénégal
        </div>

        <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] font-bold mb-6 tracking-tight text-white">
          Votre CV qui <span className="text-yellow-400">ouvre des portes</span>, livré en 24h
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
          CV professionnel et lettre de motivation percutante rédigés par un expert.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/commander#form-section"
            className="bg-yellow-500 text-zinc-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all flex items-center gap-2"
          >
            📋 Passer commande
          </Link>

          <Link
            href="/commander"
            className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-all"
          >
            Voir les tarifs
          </Link>
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes heroReveal {
          0%   { transform: scale(1.08); opacity: 0; filter: blur(6px); }
          100% { transform: scale(1);    opacity: 1; filter: blur(0px); }
        }
        @keyframes heroFloat {
          0%   { transform: scale(1)    translate(0px,  0px); }
          33%  { transform: scale(1.02) translate(-6px,-3px); }
          66%  { transform: scale(1.03) translate(-9px, 3px); }
          100% { transform: scale(1)    translate(0px,  0px); }
        }
        .hero-bg-anim {
          animation:
            heroReveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards,
            heroFloat  14s ease-in-out 1.8s infinite;
          will-change: transform, opacity, filter;
        }
      `}</style>

    </section>
  );
}
