import { getDictionary } from "../../i18n";
import SharedContentLanding from "../../components/SharedContentLanding";

export default async function NotFound() {
  // Default to Turkish or fallback
  const dict = await getDictionary("tr");

  return (
    <SharedContentLanding
      dict={dict.teaser}
      dictNav={dict.nav}
      lang="tr"
    />
  );
}
