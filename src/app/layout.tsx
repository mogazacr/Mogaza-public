import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-brand",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "mogaza — panadería artesanal",
  description: "Pan artesanal hecho con amor. Costa Rica.",
  openGraph: {
    title: "mogaza",
    description: "Panadería artesanal",
    siteName: "mogaza",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
