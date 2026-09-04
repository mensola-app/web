import DeleteAccountClient from "@/components/DeleteAccountClient";
import type { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;
  const isTr = lang === "tr";

  return {
    title: isTr ? "mensola — Hesap ve Veri Silme" : "mensola — Account & Data Deletion",
    description: isTr
      ? "mensola mobil uygulaması hesap ve kişisel verilerinizi silme adımları ve talep formu."
      : "Step-by-step instructions and request form for deleting your mensola account and personal data.",
    openGraph: {
      title: isTr ? "mensola — Hesap ve Veri Silme" : "mensola — Account & Data Deletion",
      description: isTr
        ? "mensola mobil uygulaması hesap ve kişisel verilerinizi silme adımları ve talep formu."
        : "Step-by-step instructions and request form for deleting your mensola account and personal data.",
      images: ["/icon.png"],
      type: "website",
    },
  };
}

export default async function DeleteAccountPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  return <DeleteAccountClient lang={lang} />;
}
