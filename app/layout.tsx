import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CVPro Sénégal - Créez un CV qui décroche des entretiens",
  description: "Le service n°1 au Sénégal pour des CV modernes, optimisés ATS et lettres de motivation. Boostez votre carrière dès aujourd'hui.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-zinc-950 flex flex-col min-h-screen">
        {/* Le Header sera en haut de TOUTES les pages */}
        <Header />

        {/* Le contenu spécifique de chaque page s'affichera ici */}
        <main className="grow">
          {children}
        </main>

        {/* Le Footer sera en bas de TOUTES les pages */}
        <Footer />
      </body>
    </html>
  );
}