"use client";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased">
      
      {/* Le Header est géré automatiquement par layout.tsx */}
      
      <Hero />

      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-zinc-400">
          Simplifiez votre recherche d'emploi avec <span className="text-yellow-400">CVPro</span>.
        </h2>
      </section>

      {/* Le Footer est géré automatiquement par layout.tsx */}

    </div>
  );
}