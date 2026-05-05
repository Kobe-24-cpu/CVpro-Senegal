"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, CreditCard, Check } from "lucide-react";

const WHATSAPP_NUMBER = "221767424558";

const TARIFS = [
  {
    id: "cv",
    icon: "📄",
    name: "CV Professionnel",
    price: 5000,
    features: ["Design moderne", "Optimisé ATS", "Format PDF", "1 révision"],
  },
  {
    id: "pack",
    icon: "📦",
    name: "Pack Complet",
    price: 8000,
    featured: true,
    features: ["CV sur-mesure", "Lettre de motivation", "Design assorti", "2 révisions"],
  },
  {
    id: "lm",
    icon: "✉️",
    name: "Lettre de Motivation",
    price: 3000,
    features: ["Contenu personnalisé", "Structure pro", "Format PDF", "1 révision"],
  },
];

export default function CommanderPage() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    tel: "",
    details: "",
  });
  
  // État pour gérer plusieurs services sélectionnés
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // Fonction pour ajouter/retirer un service
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
    // On retire l'erreur si un service est coché
    setErrors((prev) => ({ ...prev, service: false }));
  };

  // Calcul du prix total dynamique
  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = TARIFS.find((t) => t.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const sendOrder = () => {
    const newErrors: Record<string, boolean> = {};
    if (!form.prenom) newErrors.prenom = true;
    if (!form.nom) newErrors.nom = true;
    if (!form.tel) newErrors.tel = true;
    if (selectedServices.length === 0) newErrors.service = true;
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const namesOfServices = selectedServices
      .map((id) => TARIFS.find((t) => t.id === id)?.name)
      .join(", ");

    const message = `🇸🇳 *NOUVELLE COMMANDE*\n\n👤 *Client* : ${form.prenom} ${form.nom}\n📞 *Tel* : ${form.tel}\n📋 *Services* : ${namesOfServices}\n💰 *Total* : ${calculateTotal()} FCFA\n📝 *Détails* : ${form.details}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const inputClass = (field: string) =>
    `w-full bg-zinc-900 border rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-colors ${
      errors[field] ? "border-red-500" : "border-zinc-700 focus:border-yellow-500"
    }`;

  return (
    <main className="min-h-screen text-white py-24 px-6 md:px-16 relative overflow-hidden">
      
      {/* IMAGE DE FOND ANIMÉE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat cmd-bg-anim"
        style={{ backgroundImage: "url('/image/commander-bg.png')" }}
      />

      <div className="absolute inset-0 bg-zinc-950/88 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-75 bg-yellow-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">
          Choisissez vos <span className="text-yellow-400">Services</span>
        </h1>

        {/* GRILLE DES OFFRES (MULTI-SÉLECTION) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TARIFS.map((t) => (
            <div
              key={t.id}
              onClick={() => toggleService(t.id)}
              className={`p-7 rounded-2xl border cursor-pointer transition-all duration-300 relative ${
                selectedServices.includes(t.id)
                  ? "border-yellow-500 bg-yellow-500/10 ring-2 ring-yellow-500/50 scale-105"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
              }`}
            >
              {selectedServices.includes(t.id) && (
                <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
              )}
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-6">{t.price.toLocaleString()} FCFA</div>
              <ul className="space-y-2 mb-8 text-sm text-zinc-400">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-yellow-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div
                className={`text-center py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                  selectedServices.includes(t.id)
                    ? "bg-yellow-500 text-black"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {selectedServices.includes(t.id) ? "Sélectionné" : "Ajouter au panier"}
              </div>
            </div>
          ))}
        </div>

        {/* FORMULAIRE DE COMMANDE */}
        <div id="form-section" className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold italic">📋 Vos informations</h2>
            <div className={`bg-yellow-500/10 border px-4 py-2 rounded-xl transition-all ${errors.service ? "border-red-500" : "border-yellow-500/20"}`}>
              <span className="text-xs text-zinc-400 block uppercase font-bold text-center">Total cumulé</span>
              <span className="text-xl font-black text-yellow-400">{calculateTotal().toLocaleString()} FCFA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input className={inputClass("prenom")} placeholder="Prénom" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
            <input className={inputClass("nom")} placeholder="Nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
          </div>

          <div className="mb-4">
            <input className={inputClass("tel")} placeholder="Téléphone WhatsApp (ex: 77...)" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
          </div>

          <div className="mb-6">
            <textarea
              className={`${inputClass("details")} h-32 resize-none`}
              placeholder="Précisez ici vos attentes (ex: Secteur d'activité, entreprise visée...)"
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