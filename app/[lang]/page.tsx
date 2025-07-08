import { getDictionary } from "../../lib/dictionary";
import Global from "../../components/Global";

type PageProps = {
  readonly params: Promise<{ lang: string | string[] | undefined }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const rawLang = resolvedParams.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const safeLang = lang === "es" || lang === "en" ? lang : "es";

  const dict = await getDictionary(safeLang);
  return <Global dict={dict} />;
}
