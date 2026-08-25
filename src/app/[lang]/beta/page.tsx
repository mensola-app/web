import { getDictionary, Locale } from "../../../i18n";
import BetaClient from "./BetaClient";

export default async function BetaPage(props: { params: Promise<{ lang: string }> }) {
  const { lang: paramLang } = await props.params;
  const lang = paramLang as Locale;
  const dict = await getDictionary(lang);

    return <BetaClient dict={dict.beta} dictNav={dict.nav} lang={lang} />;
}
