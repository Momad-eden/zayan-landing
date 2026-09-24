import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Zayan — La plateforme des professionnels de la beauté",
  description:
    "Créez votre boutique en ligne et gérez votre activité beauté avec Zayan.",
  keywords: [
    "Zayan",
    "cosmétiques Sénégal",
    "boutique beauté Sénégal",
    "vente en ligne Sénégal",
    "e-commerce beauté",
    "parfumerie Sénégal",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}