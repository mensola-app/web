import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mensola — Müziğini, Filmini, Kitabını Takip Et",
  description:
    "Mensola, müzik dinleme alışkanlıklarını, izlediğin filmleri ve okuduğun kitapları tek bir yerde takip etmeni sağlayan sosyal bir mobil uygulama. Kapalı beta testine başvur!",
  keywords: ["mensola", "müzik", "film", "kitap", "sosyal", "takip", "beta"],
  openGraph: {
    title: "Mensola — Müziğini, Filmini, Kitabını Takip Et",
    description: "Müzik, film ve kitap dünyanda ne yaşandığını takip et. Kapalı beta testine başvur!",
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mensola — Kapalı Beta",
    description: "Müzik, film ve kitap dünyanda ne yaşandığını takip et.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
