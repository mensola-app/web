import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mensola — Discover, Share and Track",
  description:
    "Gather your music, movies, and books all in one place with Mensola. Discover your tastes, share with your friends. Join the closed beta test!",
  keywords: ["mensola", "music", "movie", "book", "social", "track", "beta"],
  openGraph: {
    title: "Mensola — Discover, Share and Track",
    description: "Track what's happening in your music, movie, and book world. Join the closed beta test!",
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mensola — Closed Beta",
    description: "Track what's happening in your music, movie, and book world.",
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }];
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  return (
    <html lang={lang}>
      <body>{props.children}</body>
    </html>
  );
}
