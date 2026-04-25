import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Assure-toi que le chemin est correct

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MangaZenith | L'Excellence du Manga",
  description: "Plateforme exclusive pour les collectionneurs et passionnés de mangas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white min-h-screen flex flex-col`}
      >
        {/* Le Header est rendu une seule fois ici pour toute l'application */}
        <Header />
        
        {/* Le contenu des pages (page.tsx) s'injectera ici */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Optionnel : Tu pourrais ajouter un Footer ici plus tard */}
      </body>
    </html>
  );
}