import Main from "@/app/[lng]/components/Services/Main";
import Head from "next/head";

const description = `Услуги Result Agency: разработка сайтов, SEO-оптимизация и Telegram-боты для бизнеса. Комплексные решения для роста, высокой конверсии и эффективного онлайн-продвижения.`;

export const metadata = {
  title: "Услуги разработки сайтов и SEO – Result Agency",
  description: description,
  keywords:
    "разработка сайтов, SEO, Telegram-боты, Result Agency, эффективные решения, онлайн-продвижение",
};

export default function Services() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://result-me.uz/ru/services" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
