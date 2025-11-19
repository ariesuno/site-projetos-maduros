import type { Metadata } from "next";
import { fontHeading, fontBody } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suno Energias Limpas Projetos Maduros S.A",
  description: "Documentos da oferta de distribuição pública - Suno Energias Limpas Projetos Maduros S.A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
