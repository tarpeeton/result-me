import Main from "@/app/[lng]/components/Cases/Main";
import Head from "next/head";

const description = `Изучите кейсы Result Agency: проекты в области маркетинга, разработки сайтов, SEO и рекламы. На этой странице вы найдете реальные примеры нашей работы, которые помогут понять, как наши решения способствуют росту бизнеса. Мы создаем эффективные сайты, запускаем рекламные кампании и оптимизируем проекты для поисковых систем.`;

export const metadata = {
  title: "Кейсы Result Agency – Разработка сайтов, SEO и реклама",
  description: description,
  keywords:
    "кейсы, Result Agency, разработка сайтов, SEO, реклама, брендинг, проекты, автоматизация бизнеса, продвижение сайтов, маркетинг, эффективные решения",
};

export default function Cases() {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://result-me.uz/ru/cases" />
        <link rel="canonical" href="https://result-me.uz/ru/cases" />
      </Head>
      <Main />
    </main>
  );
}
