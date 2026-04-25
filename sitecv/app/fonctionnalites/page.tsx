"use client";

import React from "react";
import { CheckCircle, Zap, Layout, Target, FileText, Smartphone } from "lucide-react";

export default function Fonctionnalites() {
  const features = [
    {
      title: "Optimisation ATS",
      description: "Nos CV sont conçus pour franchir les logiciels de tri automatique utilisés par les recruteurs.",
      icon: <Target className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Livraison en 24h",
      description: "Parce que les meilleures opportunités n'attendent pas, nous traitons votre commande en un temps record.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Design Professionnel",
      description: "Des templates épurés et modernes qui reflètent votre sérieux et votre professionnalisme.",
      icon: <Layout className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Contenu Stratégique",
      description: "Nous transformons vos expériences en véritables atouts en utilisant des mots-clés percutants.",
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Adapté au Mobile",
      description: "Votre CV reste lisible et parfait, même lorsqu'il est consulté sur un smartphone par un recruteur.",
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Accompagnement",
      description: "Des conseils personnalisés pour optimiser votre profil LinkedIn et vos lettres de motivation.",
      icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">

      {/* ── IMAGE DE FOND ANIMÉE ──────────────────────────────────────
          Copiez fonctionnalites-bg.png dans /public de votre projet
      ─────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fonct-bg-anim"
        style={{ backgroundImage: "url('/image/fonctionnalites-bg.png')" }}
      />

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-zinc-950/85 pointer-events-none" />

      {/* Lueur dorée en haut à droite — joue avec les points lumineux de l'image */}
      <div className="absolute top-0 right-0 w-125 h-75 bg-yellow-500/6 blur-3xl pointer-events-none" />

      {/* Fondu bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none" />

      {/* ── Contenu — structure inchangée ── */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Pourquoi choisir <span className="text-yellow-400">CVPro</span> ?
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Nous ne nous contentons pas de mettre en page votre parcours. Nous créons un outil marketing pour votre carrière.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes fonctReveal {
          0%   { transform: scale(1.08); opacity: 0; filter: blur(6px); }
          100% { transform: scale(1);    opacity: 1; filter: blur(0px); }
        }
        @keyframes fonctFloat {
          0%   { transform: scale(1)    translate(0px,  0px); }
          33%  { transform: scale(1.02) translate(-5px, 3px); }
          66%  { transform: scale(1.03) translate(6px, -3px); }
          100% { transform: scale(1)    translate(0px,  0px); }
        }
        .fonct-bg-anim {
          animation:
            fonctReveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards,
            fonctFloat  14s ease-in-out 1.8s infinite;
          will-change: transform, opacity, filter;
        }
      `}</style>

    </div>
  );
}
