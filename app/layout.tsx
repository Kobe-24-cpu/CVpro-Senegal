import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CVPro Sénégal",
  description: "Création de CV professionnels",
  // Ajoute la ligne ci-dessous :
  verification: {
    google: "qN3mFa6ROzwdopfMbHJLRgigwXHjUGFlict3", // C'est le code de ta capture d'écran
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