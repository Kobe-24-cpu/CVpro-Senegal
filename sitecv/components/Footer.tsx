import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-yellow-400 font-serif text-2xl mb-4 italic">CVPro Sénégal</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Propulsez votre carrière avec des documents professionnels. Disponible rapidement partout au Sénégal.
            </p>
          </div>

          {/* Colonne 2 : Contact (Visible sur chaque page) */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">📍 Dakar, Sénégal</li>
              <li className="flex items-center gap-2">📧 bouchkarbryant@gmail.com</li>
              <li className="flex items-center gap-2 text-green-500 font-medium">💬 +221767424558</li>
            </ul>
          </div>

          {/* Colonne 3 : Liens Rapides */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fonctionnalites" className="text-zinc-400 hover:text-yellow-400 transition-colors">Nos Services</Link></li>
              <li><Link href="/avis" className="text-zinc-400 hover:text-yellow-400 transition-colors">Avis Clients</Link></li>
              <li><Link href="/commander" className="text-zinc-400 hover:text-yellow-400 transition-colors">Tarifs & Commande</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} CVPro Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}