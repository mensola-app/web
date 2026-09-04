import { getDictionary, Locale } from "../../../i18n";
import SharedContentLanding from "../../../components/SharedContentLanding";
import type { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ lang: string; catchAll?: string[] }>;
}): Promise<Metadata> {
  const { lang: paramLang } = await props.params;
  const lang = (paramLang === "tr" ? "tr" : "en") as Locale;
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
  const { lang: paramLang } = await props.params;
  const lang = (paramLang === "tr" ? "tr" : "en") as Locale;
  const dict = await getDictionary(lang);

  return (
    <SharedContentLanding
      dict={dict.teaser}
      dictNav={dict.nav}
      lang={lang}
    />
  );
}
