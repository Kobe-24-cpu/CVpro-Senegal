"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function Hero() {
  const heroImages = [
    "/image/hero-1.png",
    "/image/hero-2.png",
    "/image/hero-3.png",
  ];

  const modeles = [
    { title: "CV Moderne",          img: "/image/mod-1.png" },
    { title: "Lettre de Motivation", img: "/image/mod-2.png" },
    { title: "CV Exécutif",         img: "/image/mod-3.png" },
    { title: "Design Créatif",      img: "/image/mod-4.png" },
  ];

  // ── État diaporama hero ──
  const [currentIndex, setCurrentIndex] = useState(0);

  // ── État lightbox ──
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  // Diaporama auto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Ouvrir la lightbox
  const openLightbox = (index: number) => {
    setLightbox({ open: true, index });
    document.body.style.overflow = "hidden"; // empêche le scroll derrière
  };

  // Fermer la lightbox
  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
    document.body.style.overflow = "";
  };

  // Navigation dans la lightbox
  const prevImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? modeles.length - 1 : prev.index - 1,
    }));
  }, [modeles.length]);

  const nextImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === modeles.length - 1 ? 0 : prev.index + 1,
    }));
  }, [modeles.length]);

  // Navigation clavier (← → Echap)
  useEffect(() => {
    if (!lightbox.open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox.open, prevImage, nextImage]);

  return (
    <main className="bg-zinc-950">

      {/* ══════════════════════════════════════════
          SECTION HERO
      ══════════════════════════════════════════ */}
      <section id="hero" className="min-h-screen flex items-center px-6 md:px-16 pt-20 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent z-[1]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-150 h-150 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* TEXTE */}
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

          {/* STATISTIQUES */}
          <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between gap-2">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xl md:text-2xl font-bold text-white leading-none">+2000</p>
              <p className="text-[10px] md:text-xs text-zinc-500 mt-1 uppercase tracking-tighter">CV créés</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xl md:text-2xl font-bold text-yellow-400 leading-none">98%</p>
              <p className="text-[10px] md:text-xs text-zinc-500 mt-1 uppercase tracking-tighter">Satisfaction</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex-1 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-[10px]">★</span>
                ))}
              </div>
              <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-tighter">Premium</p>
            </div>
          </div>

          {/* DIAPORAMA */}
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
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, i) => (
                <div key={i} className={`h-1 w-4 rounded-full transition-all ${i === currentIndex ? "bg-yellow-500" : "bg-white/10"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALERIE MODÈLES — avec lightbox au clic
      ══════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos Réalisations</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Cliquez sur une image pour la voir en détail.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {modeles.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 aspect-[3/4] cursor-zoom-in"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300x400/27272a/ffffff?text=Exemple+Modèle"; }}
                />
                {/* Overlay au survol avec icône zoom */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                  <ZoomIn className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
                  <span className="text-white text-sm font-semibold">{item.title}</span>
                  <span className="text-yellow-400 text-xs">Cliquer pour agrandir</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIGHTBOX — plein écran
      ══════════════════════════════════════════ */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox} // clic sur le fond = fermeture
        >
          {/* Bouton fermer */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Titre + compteur */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
            <span className="text-white font-semibold text-sm">
              {modeles[lightbox.index].title}
            </span>
            <span className="text-zinc-500 text-xs">
              {lightbox.index + 1} / {modeles.length}
            </span>
          </div>

          {/* Bouton précédent */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-zinc-800/80 hover:bg-yellow-500 hover:text-zinc-900 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image principale — stopPropagation pour ne pas fermer en cliquant dessus */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modeles[lightbox.index].img}
              alt={modeles[lightbox.index].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x600/18181b/eab308?text=Image"; }}
            />
          </div>

          {/* Bouton suivant */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-zinc-800/80 hover:bg-yellow-500 hover:text-zinc-900 flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Miniatures en bas */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {modeles.map((m, i) => (
              <button
                key={i}
                onClick={() => setLightbox((prev) => ({ ...prev, index: i }))}
                className={`w-12 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  i === lightbox.index
                    ? "border-yellow-500 scale-110"
                    : "border-zinc-700 opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Hint clavier */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-zinc-600 text-xs hidden md:block">
            ← → pour naviguer · Échap pour fermer
          </div>
        </div>
      )}
    </main>
  );
}
