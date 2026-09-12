import type { Metadata } from "next";
import { getServerLang } from "@/lib/api";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mensola",
  description: "Mensola — Discover, Share and Track",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://mensola.app"),
};


export default async function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getServerLang();
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}

