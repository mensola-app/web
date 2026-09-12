import { getDictionary, Locale } from "../../../i18n";
import SharedContentLanding from "../../../components/SharedContentLanding";
import { resolveShortLink } from "@/lib/api";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ lang: string; catchAll?: string[] }>;
}): Promise<Metadata> {
  const { lang: paramLang, catchAll } = await props.params;
  const lang = (paramLang === "tr" ? "tr" : "en") as Locale;

  // Check if catchAll is a short link code
  if (catchAll && catchAll.length === 1 && /^[1-9a-zA-HJ-NP-Za-km-z]{5,8}$/.test(catchAll[0])) {
    const shortLink = await resolveShortLink(catchAll[0]);
    if (shortLink) {
      const route =
        shortLink.targetType === "movie_list"
          ? "movie-lists"
          : shortLink.targetType === "user"
            ? "users"
            : "playlists";
      redirect(`/${route}/${shortLink.targetId}?lang=${lang}`);
    }
  }

  const dict = await getDictionary(lang);

  const title = `${dict.teaser.titlePrefix} ${dict.teaser.titleHighlight} ${dict.teaser.titleSuffix}`;
  return {
    title: `Mensola — ${title}`,
    description: dict.teaser.subtitle,
    openGraph: {
      title: `Mensola — ${title}`,
      description: dict.teaser.subtitle,
      images: ["/icon.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Mensola — ${title}`,
      description: dict.teaser.subtitle,
      images: ["/icon.png"],
    },
  };
}

export default async function SharedCatchAllPage(props: {
  params: Promise<{ lang: string; catchAll?: string[] }>;
}) {
  const { lang: paramLang, catchAll } = await props.params;
  const lang = (paramLang === "tr" ? "tr" : "en") as Locale;

  // Check if catchAll is a short link code
  if (catchAll && catchAll.length === 1 && /^[1-9a-zA-HJ-NP-Za-km-z]{5,8}$/.test(catchAll[0])) {
    const shortLink = await resolveShortLink(catchAll[0]);
    if (shortLink) {
      const route =
        shortLink.targetType === "movie_list"
          ? "movie-lists"
          : shortLink.targetType === "user"
            ? "users"
            : "playlists";
      redirect(`/${route}/${shortLink.targetId}?lang=${lang}`);
    }
  }

  const dict = await getDictionary(lang);

  return (
    <SharedContentLanding
      dict={dict.teaser}
      dictNav={dict.nav}
      lang={lang}
    />
  );
}
