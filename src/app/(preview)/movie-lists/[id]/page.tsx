import { fetchMovieList, getServerLang } from "@/lib/api";
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
  const list = await fetchMovieList(id);

  if (!list) {
    return {
      title: lang === "en" ? "Movie List Not Found | Mensola" : "Film Listesi Bulunamadı | Mensola",
      description:
        lang === "en"
          ? "The movie list you are looking for does not exist or was deleted."
          : "Aradığınız film listesi bulunamadı veya silinmiş olabilir.",
    };
  }

  const title =
    lang === "en"
      ? `${list.title} | Movie List on Mensola`
      : `${list.title} | Mensola Film Listesi`;

  const description =
    list.description ||
    (lang === "en"
      ? "Explore this movie list and more cultural recommendations on the Mensola app."
      : "Mensola uygulamasında bu film listesini ve daha fazlasını keşfedin.");

  const image = list.image || "/icon.png";

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

export default async function MovieListPreviewPage(props: PageProps) {
  const { id } = await props.params;
  const { lang: queryLang } = await props.searchParams;
  const lang = await getServerLang(queryLang);
  const list = await fetchMovieList(id);

  if (!list) {
    notFound();
  }

  const owner = list.owners?.[0];
  const creator = owner
    ? {
        name: owner.fullname || owner.username,
        username: owner.username,
        avatar: owner.avatar,
      }
    : null;

  return (
    <PreviewCard
      targetType="movie_list"
      targetId={id}
      title={list.title}
      description={list.description || undefined}
      image={list.image}
      creator={creator}
      initialLang={lang}
    />
  );
}
