import { getDictionary } from "../../../lib/dictionary";
//import Global from "../../../components/Global";
import AboutSection from "@/components/About";

type PageProps = {
  readonly params: Promise<{ lang: string | string[] | undefined }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const rawLang = resolvedParams.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const safeLang = lang === "es" || lang === "en" ? lang : "es";

  const dict = await getDictionary(safeLang);
  const aboutSection = (dict as any)["about-section"] ?? dict;
  return <AboutSection dict={ {
    title: aboutSection.title,
    subtitle: aboutSection.subtitle,
    description: aboutSection.description,
    mission: aboutSection.mission,
    vision: aboutSection.vision
  } } />;
}
