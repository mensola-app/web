import { fetchUser, getServerLang } from "@/lib/api";
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
  const user = await fetchUser(id);

  if (!user) {
    return {
      title: lang === "en" ? "User Not Found | Mensola" : "Kullanıcı Bulunamadı | Mensola",
      description:
        lang === "en"
          ? "The user profile you are looking for does not exist."
          : "Aradığınız kullanıcı bulunamadı veya hesabı kapatılmış olabilir.",
    };
  }

  const displayName = user.fullname || user.username;
  const title = `${displayName} (@${user.username}) | Mensola`;
  const description =
    user.bio ||
    (lang === "en"
      ? `Explore @${user.username}'s profile, lists, and music & movie taste on Mensola.`
      : `@${user.username} Mensola profilini, listelerini ve müzik zevkini keşfet.`);

  const image = user.avatar || "/icon.png";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://mensola.app"),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "profile",
      siteName: "Mensola",
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [image],
    },
  };
}

export default async function UserPreviewPage(props: PageProps) {
  const { id } = await props.params;
  const { lang: queryLang } = await props.searchParams;
  const lang = await getServerLang(queryLang);
  const user = await fetchUser(id);

  if (!user) {
    notFound();
  }

  const displayName = user.fullname || user.username;

  return (
    <PreviewCard
      targetType="user"
      targetId={id}
      title={displayName}
      subtitle={`@${user.username}`}
      description={user.bio || undefined}
      image={user.avatar}
      initialLang={lang}
    />
  );
}
