import { getDictionary } from "../i18n";
import SharedContentLanding from "../components/SharedContentLanding";
import "./globals.css";

export default async function GlobalNotFound() {
  const dict = await getDictionary("tr");

  return (
    <html lang="tr">
      <body>
        <SharedContentLanding
          dict={dict.teaser}
          dictNav={dict.nav}
          lang="tr"
        />
      </body>
    </html>
  );
}
