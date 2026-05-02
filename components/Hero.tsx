"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  // 1. CONFIGURATION DU DIAPORAMA (HERO)
  const heroImages = [
    "/image/hero-1.png",
    "/image/hero-2.png",
    "/image/hero-3.png",
  ];

  // 2. CONFIGURATION DE LA GALERIE (MODÈLES)
  const modeles = [
    { title: "CV Moderne", img: "/image/mod-1.png" },
    { title: "Lettre de Motivation", img: "/image/mod-2.png" },
    { title: "CV Exécutif", img: "/image/mod-3.png" },
    { title: "Design Créatif", img: "/image/mod-4.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="bg-zinc-950">
      {/* ──────────────────────────────────────────────────────────────
          SECTION HERO (HAUT DE PAGE)
      ────────────────────────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex items-center px-6 md:px-16 pt-20 relative overflow-hidden">
        
        {/* Effets de fond */}
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent z-1" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-150 h-150 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* TEXTE (Gauche) */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs px-4 py-1.5 rounded-full mb-8">
              🇸🇳 Service professionnel au Sénégal
            </div>

            <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] font-bold mb-6 tracking-tight text-white">
              Votre CV qui <span className="text-yellow-400">ouvre des portes</span>, livré en 24h
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
              CV professionnel et lettre de motivation percutante rédigés par un expert.
            </p>

            {/* BOUTONS (Remis en place) */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/commander#form-section" 
                className="bg-yellow-500 text-zinc-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10 flex items-center gap-2"
              >
                📋 Obtenir mon CVPro
              </Link>

              <Link
                href="/commander"
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-all"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
          {/* SECTION STATISTIQUES (Preuve Sociale) */}
<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 md:gap-12">
  <div>
    <p className="text-2xl font-bold text-white leading-none">+2000</p>
    <p className="text-zinc-500 text-sm mt-1 uppercase tracking-wider font-medium">CV créés</p>
  </div>

  <div className="w-px h-10 bg-white/10 hidden sm:block" /> {/* Petite barre de séparation */}

  <div>
    <p className="text-2xl font-bold text-yellow-400 leading-none">98%</p>
    <p className="text-zinc-500 text-sm mt-1 uppercase tracking-wider font-medium">Clients satisfaits</p>
  </div>

  <div className="w-px h-10 bg-white/10 hidden sm:block" /> {/* Petite barre de séparation */}

  <div>
    <div className="flex gap-1 mb-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-500 text-sm">★</span>
      ))}
    </div>
    <p className="text-zinc-500 text-sm uppercase tracking-wider font-medium">Service Premium</p>
  </div>
</div>

          {/* DIAPORAMA (Droite) - Taille ajustée et style épuré */}
            <div className="relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden">
                 {heroImages.map((img, index) => (
            <div
                 key={index}
                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
           }`}
             >
           <img 
                  src={img} 
        alt={`Aperçu ${index + 1}`} 
        className="max-w-full max-h-full object-contain drop-shadow-xl"
        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x600/18181b/eab308?text=Image+Hero"; }}
      />
    </div>
  ))}
  
  {/* Points indicateurs plus discrets */}
  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
    {heroImages.map((_, i) => (
      <div key={i} className={`h-1 w-4 rounded-full transition-all ${i === currentIndex ? "bg-yellow-500" : "bg-white/10"}`} />
    ))}
  </div>
</div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION GALERIE (MODÈLES EN BAS)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos Réalisations</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Découvrez la qualité de nos mises en page et la structure de nos lettres de motivation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {modeles.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 aspect-[3/4]">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300x400/27272a/ffffff?text=Exemple+Modèle"; }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}