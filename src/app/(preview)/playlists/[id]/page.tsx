import { fetchPlaylist, getServerLang } from "@/lib/api";
import PreviewCard from "@/components/PreviewCard";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { id } = await props.params;
  const { lang: queryLang } = await props.searchParams;
  const lang = await getServerLang(queryLang);
  const playlist = await fetchPlaylist(id);

  if (!playlist) {
    return {
      title: lang === "en" ? "Playlist Not Found | Mensola" : "Çalma Listesi Bulunamadı | Mensola",
      description:
        lang === "en"
          ? "The playlist you are looking for does not exist or was deleted."
          : "Aradığınız çalma listesi bulunamadı veya silinmiş olabilir.",
    };
  }

  const title =
    lang === "en"
      ? `${playlist.title} | Playlist on Mensola`
      : `${playlist.title} | Mensola Çalma Listesi`;

  const description =
    playlist.description ||
    (lang === "en"
      ? "Listen to this playlist and more on the Mensola app."
      : "Mensola uygulamasında bu çalma listesini ve daha fazlasını dinleyin.");

  const image = playlist.image || "/icon.png";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://mensola.app"),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "website",
      siteName: "Mensola",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function PlaylistPreviewPage(props: PageProps) {
  const { id } = await props.params;
  const { lang: queryLang } = await props.searchParams;
  const lang = await getServerLang(queryLang);
  const playlist = await fetchPlaylist(id);

  if (!playlist) {
    notFound();
  }

  const creatorData = playlist.creator || playlist.owners?.[0];
  const creator = creatorData
    ? {
        name: creatorData.fullname || creatorData.username,
        username: creatorData.username,
        avatar: creatorData.avatar,
      }
    : null;

  return (
    <PreviewCard
      targetType="playlist"
      targetId={id}
      title={playlist.title}
      description={playlist.description || undefined}
      image={playlist.image}
      creator={creator}
      initialLang={lang}
    />
  );
}
