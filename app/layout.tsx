import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // Titre optimisé (Max 60 caractères)
  title: {
    default: "CVPro Sénégal - Créez un CV qui décroche des entretiens",
    template: "%s | CVPro Sénégal"
  },
  // Description percutante (150-160 caractères)
  description: "Le service n°1 au Sénégal pour des CV modernes, optimisés ATS et lettres de motivation. Boostez votre carrière avec CVPro-Galsen dès aujourd'hui.",
  
  // Mots-clés stratégiques pour le Sénégal
  keywords: ["CV professionnel Sénégal", "création CV Dakar", "CV optimisé ATS", "lettre de motivation Sénégal", "emploi Sénégal", "CVPro Galsen"],
  
  // URL Canonique (évite le contenu dupliqué)
  alternates: {
    canonical: "https://www.cvpro-galsen.com",
  },

  // Configuration pour les réseaux sociaux (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "CVPro Sénégal - Votre CV, Votre Futur",
    description: "Transformez votre recherche d'emploi au Sénégal avec un CV professionnel.",
    url: "https://www.cvpro-galsen.com",
    siteName: "CVPro Sénégal",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: '/image/og-image.png', 
        width: 1200,
        height: 630,
        alt: "Aperçu de CVPro Sénégal"
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "CVPro Sénégal",
    description: "Le n°1 du CV professionnel au Sénégal.",
    images: ['/image/og-image.png'],
  },

  // Favicons et Icônes
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Robots : autorise l'indexation
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Manifeste pour Android/PWA
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth"> {/* Ajout du scroll-smooth pour tes ancres */}
      <body className="bg-zinc-950 flex flex-col min-h-screen antialiased">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}