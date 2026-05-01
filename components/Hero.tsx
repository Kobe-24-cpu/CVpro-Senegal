"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  // Remplace ces chemins par tes futures images dans /public/image/
  const images = [
    "/image/hero-1.png",
    "/image/hero-2.png",
    "/image/hero-3.png",
    "/image/hero-4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Change toutes les 4 secondes
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-16 pt-20 relative overflow-hidden bg-zinc-950">
      
      {/* Fond avec dégradé constant */}
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent z-1" />

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

          <div className="flex flex-wrap gap-4">
            <Link href="/commander" className="bg-yellow-500 text-zinc-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10">
              📋 Passer commande
            </Link>
          </div>
        </div>

        {/* DIAPORAMA (Droite) */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img 
                src={img} 
                alt={`Aperçu ${index + 1}`} 
                className="w-full h-full object-cover"
                // Si l'image n'existe pas encore, on met un fond gris pour pas que ce soit vide
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800/18181b/eab308?text=Image+CV"; }}
              />
            </div>
          ))}
          
          {/* Indicateurs (petits points) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div key={i} className={`h-1.5 w-6 rounded-full transition-all ${i === currentIndex ? "bg-yellow-500" : "bg-white/20"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Cercle décoratif en fond */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-150 h-150 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />
    </section>
  );
}