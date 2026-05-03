"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Avis() {
  const testimonials = [
    {
      photo: "/image/aliou.png",
      initials: "AM",
      name: "Aliou Mbaye",
      role: "Étudiant en master, Dakar",
      color: "from-yellow-500 to-yellow-700",
      text: "Bataaxalu motivation bi dafa méngoo woon bu baax ak liggéey bi ma doon wut. Service bi gaaw na, am na solo te njariñ bi am na kalite bu baax. Jërëjëf loolu ci yeen !",
    },
    {
      photo: "/image/fatou.png",
      initials: "FD",
      name: "Fatou Diallo",
      role: "Chercheuse d'emploi, Thiès",
      color: "from-yellow-500 to-yellow-700",
      text: "J'avais besoin d'un CV pour postuler en France. Le document respectait parfaitement les standards français. Excellent travail, je reviendrai !",
    },
    {
      photo: "/image/mamadou.png",
      initials: "MS",
      name: "Mamadou Sy",
      role: "Candidat à l'international, Saint-Louis",
      color: "from-yellow-500 to-yellow-700",
      text: "J'ai reçu mon CV en moins de 12 heures, bien structuré et très professionnel. J'ai été convoqué en entretien la semaine suivante. Je recommande vivement !",
    },
    {
      photo: "/image/aissatou.png",
      initials: "AN",
      name: "Aïssatou Ndiaye",
      role: "Comptable, Dakar",
      color: "from-yellow-500 to-yellow-700",
      text: "J'ai commandé le pack complet CV + lettre. La présentation est moderne et professionnelle. J'ai décroché un poste dans une multinationale à Dakar.",
    },
    {
      photo: "/image/ousmane.png",
      initials: "OB",
      name: "Ousmane Ba",
      role: "Ingénieur junior, Ziguinchor",
      color: "from-yellow-500 to-yellow-700",
      text: "Bëgg naa lool ci rezultaa bi. Délaisu 24 waxtu bi ñoo ko sàmm bu baax. Sama CV léegi leer na te neex na xool. Damaa koy digal samay xarit yépp.",
    },
    {
      photo: "/image/mariama.png",
      initials: "MC",
      name: "Mariama Camara",
      role: "Diplômée BTS, Kaolack",
      color: "from-yellow-500 to-yellow-700",
      text: "Damaa nekkoon ak stress ngir sama candidature, waaye service bii dimbali ma dëgg-dëgg. Sama bataaxal bi dañu ko bind bu baax, def ko ci sama xaalis te doy waar. Jërëjëf !",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">

      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat avis-bg-anim"
        style={{ backgroundImage: "url('/image/avis-bg.png')" }}
      />

      {/* ── OVERLAY ALLÉGÉ — de /88 à /55 ── */}
      <div className="absolute inset-0 bg-zinc-950/55 pointer-events-none" />

      {/* Lueur dorée haut */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-yellow-900/10 to-transparent pointer-events-none" />

      {/* Fondu bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Ils nous ont fait <span className="text-yellow-400">confiance</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Découvrez les retours de nos candidats qui ont propulsé leur carrière avec CVPro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl relative flex flex-col hover:border-yellow-500/30 transition-all group"
            >
              <Quote className="absolute top-6 right-6 text-zinc-800 w-10 h-10 group-hover:text-yellow-500/10 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-zinc-300 italic mb-8 leading-relaxed relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-auto flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-yellow-500/40 shadow-lg">
                  <Image
                    src={t.photo}
                    alt={`Photo de ${t.name}`}
                    fill
                    className="object-cover object-center"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${t.color} items-center justify-center text-white font-bold text-sm hidden`}>
                    {t.initials}
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-yellow-500 text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes avisReveal {
          0%   { transform: scale(1.08); opacity: 0; filter: blur(6px); }
          100% { transform: scale(1);    opacity: 1; filter: blur(0px); }
        }
        @keyframes avisFloat {
          0%   { transform: scale(1)    translate(0px,  0px); }
          33%  { transform: scale(1.02) translate(5px, -3px); }
          66%  { transform: scale(1.03) translate(8px,  3px); }
          100% { transform: scale(1)    translate(0px,  0px); }
        }
        .avis-bg-anim {
          animation:
            avisReveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards,
            avisFloat  14s ease-in-out 1.8s infinite;
          will-change: transform, opacity, filter;
        }
      `}</style>
    </div>
  );
}
