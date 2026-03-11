// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google"; // Importe Cinzel
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' }); // Configure Cinzel

export const metadata: Metadata = {
  title: "Diablo Immortal - App1 Sample",
  description: "Explore os segredos de Sanctuary no seu navegador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Adicione a classe da variável da fonte aqui */}
      <body className={`${inter.variable} ${cinzel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}