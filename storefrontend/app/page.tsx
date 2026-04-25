"use client";

import { useState } from "react";
import { ShoppingCart, Zap, JapaneseYen, User, Phone, Fingerprint } from "lucide-react";
// On importe ton nouveau composant
import Header from "@/components/Header";

const MANGAS = [
  { id: 1, titre: "One Piece - Tome 100", prix: 6.90, image: "/images/1.jpeg", tag: "Légendaire" },
  { id: 2, titre: "Jujutsu Kaisen - Tome 0", prix: 6.95, image: "/images/2.png", tag: "Nouveauté" },
  { id: 3, titre: "Chainsaw Man - Tome 1", prix: 7.20, image: "/images/3.png", tag: "Must-Have" },
];

export default function Home() {
  const [panier, setPanier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-red-600">
      
      {/* Appel du composant Header */}
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* --- SECTION BOUTIQUE --- */}
        <section id="shop" className="py-12">
          <div className="flex items-end gap-4 mb-12">
            <h2 className="text-5xl font-black italic uppercase leading-none">Drop <span className="text-red-600 text-6xl">01</span></h2>
            <div className="h-[2px] flex-1 bg-zinc-800 mb-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {MANGAS.map((manga) => (
              <div key={manga.id} className="group relative">
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-900 border border-white/5 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={manga.image} 
                    alt={manga.titre} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-[10px] font-bold px-2 py-1 uppercase skew-x-[-12deg]">
                    {manga.tag}
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">{manga.titre}</h3>
                    <div className="flex items-center gap-1 text-zinc-500 mt-1">
                      <JapaneseYen size={14} />
                      <span className="text-sm font-mono">{manga.prix.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setPanier(manga.titre)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-zinc-100 text-black py-4 font-black uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-95"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ... (Reste du code : Zap et Formulaire) ... */}
        
      </main>

      <footer className="mt-20 py-10 border-t border-white/5 text-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-bold">
          Design by MBT / NeoDigital © 2026 - Tokyo Underground Division
        </p>
      </footer>
    </div>
  );
}