"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, CreditCard } from "lucide-react";

const WHATSAPP_NUMBER = "221767424558";

const TARIFS = [
  {
    icon: "📄",
    name: "CV Professionnel",
    price: "5 000",
    value: "CV Professionnel — 5 000 FCFA",
    features: ["Design moderne", "Optimisé ATS", "Format PDF", "1 révision"],
  },
  {
    icon: "📦",
    name: "Pack Complet",
    price: "8 000",
    value: "Pack Complet CV + Lettre — 8 000 FCFA",
    featured: true,
    features: ["CV sur-mesure", "Lettre de motivation", "Design assorti", "2 révisions"],
  },
  {
    icon: "✉️",
    name: "Lettre de Motivation",
    price: "3 000",
    value: "Lettre de Motivation — 3 000 FCFA",
    features: ["Contenu personnalisé", "Structure pro", "Format PDF", "1 révision"],
  },
];

export default function CommanderPage() {
  const [form, setForm] = useState({
    prenom: "", nom: "", tel: "", service: "", details: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleOfferClick = (value: string) => {
    setForm({ ...form, service: value });
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const getSelectedPrice = () => {
    const selected = TARIFS.find((t) => t.value === form.service);
    return selected ? `${selected.price} FCFA` : "0 FCFA";
  };

  const sendOrder = () => {
    const newErrors: Record<string, boolean> = {};
    if (!form.prenom)  newErrors.prenom  = true;
    if (!form.nom)     newErrors.nom     = true;
    if (!form.tel)     newErrors.tel     = true;
    if (!form.service) newErrors.service = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const message = `🇸🇳 *NOUVELLE COMMANDE*\n\n👤 *Client* : ${form.prenom} ${form.nom}\n📞 *Tel* : ${form.tel}\n📋 *Service* : ${form.service}\n💰 *Total* : ${getSelectedPrice()}\n📝 *Détails* : ${form.details}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const inputClass = (field: string) =>
    `w-full bg-zinc-900 border rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-colors ${
      errors[field] ? "border-red-500" : "border-zinc-700 focus:border-yellow-500"
    }`;

  return (
    <main className="min-h-screen text-white py-24 px-6 md:px-16 relative overflow-hidden">

      {/* ── IMAGE DE FOND ANIMÉE ──────────────────────────────────────
          Copiez commander-bg.png dans /public de votre projet Next.js
      ─────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat cmd-bg-anim"
        style={{ backgroundImage: "url('/image/commander-bg.png')" }}
      />

      {/* Overlay sombre — lisibilité des cartes et du formulaire */}
      <div className="absolute inset-0 bg-zinc-950/88 pointer-events-none" />

      {/* Lueur dorée centrale — résonne avec les effets lumineux de l'image */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-75 bg-yellow-500/5 blur-3xl pointer-events-none" />

      {/* Fondu bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none" />

      {/* ── Contenu — structure inchangée ── */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">
          Choisissez votre <span className="text-yellow-400">Offre</span>
        </h1>

        {/* CARTES D'OFFRES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TARIFS.map((t) => (
            <div
              key={t.name}
              onClick={() => handleOfferClick(t.value)}
              className={`p-7 rounded-2xl border cursor-pointer transition-all duration-300 ${
                form.service === t.value
                  ? "border-yellow-500 bg-yellow-500/10 ring-2 ring-yellow-500/50 scale-105"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
              }`}
            >
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-6">{t.price} FCFA</div>
              <ul className="space-y-2 mb-8 text-sm text-zinc-400">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-yellow-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div
                className={`text-center py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                  form.service === t.value
                    ? "bg-yellow-500 text-black"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {form.service === t.value ? "Offre Sélectionnée" : "Choisir cette offre"}
              </div>
            </div>
          ))}
        </div>

        {/* FORMULAIRE */}
        <div id="form-section" className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold italic">📋 Formulaire de commande</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-xl">
              <span className="text-xs text-zinc-400 block uppercase font-bold">Total à payer</span>
              <span className="text-xl font-black text-yellow-400">{getSelectedPrice()}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input className={inputClass("prenom")} placeholder="Prénom" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
            <input className={inputClass("nom")}    placeholder="Nom"    value={form.nom}    onChange={(e) => setForm({ ...form, nom: e.target.value })} />
          </div>

          <div className="mb-4">
            <input className={inputClass("tel")} placeholder="Téléphone WhatsApp (ex: 77...)" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
          </div>

          <div className="mb-4">
            <select className={inputClass("service")} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              <option value="">Sélectionnez un service</option>
              {TARIFS.map((t) => (
                <option key={t.value} value={t.value}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <textarea
              className={`${inputClass("details")} h-32 resize-none`}
              placeholder="Parlez-nous de votre parcours ou du secteur visé..."
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
            />
          </div>

          <button
            onClick={sendOrder}
            className="w-full py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition-all flex justify-center items-center gap-2 shadow-lg shadow-green-900/20 active:scale-95"
          >
            Commander via WhatsApp
          </button>

          {/* RÉASSURANCE */}
          <div className="grid grid-cols-3 gap-2 mt-8 pt-8 border-t border-zinc-800">
            <div className="flex flex-col items-center gap-2 text-center group">
              <Clock className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-zinc-500 uppercase font-bold">Livraison 24h</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center group">
              <ShieldCheck className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-zinc-500 uppercase font-bold">Expert Qualifié</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center group">
              <CreditCard className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-zinc-500 uppercase font-bold">Wave / Orange</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes cmdReveal {
          0%   { transform: scale(1.08); opacity: 0; filter: blur(6px); }
          100% { transform: scale(1);    opacity: 1; filter: blur(0px); }
        }
        @keyframes cmdFloat {
          0%   { transform: scale(1)    translate(0px,  0px); }
          33%  { transform: scale(1.02) translate(-6px,-3px); }
          66%  { transform: scale(1.03) translate(5px,  3px); }
          100% { transform: scale(1)    translate(0px,  0px); }
        }
        .cmd-bg-anim {
          animation:
            cmdReveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards,
            cmdFloat  14s ease-in-out 1.8s infinite;
          will-change: transform, opacity, filter;
        }
      `}</style>

    </main>
  );
}
