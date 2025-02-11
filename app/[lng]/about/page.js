import Main from "@/app/[lng]/components/About/Main";
import Head from "next/head";

export const metadata = {
  title:
    "О компании Result Agency – Эксперты в разработке сайтов, SEO и IT‑решениях в Ташкенте",
  description: `Result Agency – лидер в разработке сайтов, SEO‑оптимизации и IT‑решениях для бизнеса в Ташкенте и Узбекистане. Мы создаем инновационные digital‑решения, которые помогают компаниям увеличивать клиентскую базу, повышать видимость в поисковых системах и получать конкурентное преимущество. Узнайте, как наш профессиональный подход и передовые технологии способствуют успеху вашего бизнеса.`,
  keywords:
    "Result Agency, разработка сайтов, SEO оптимизация, IT-решения, digital решения, веб-разработка, Ташкент, Узбекистан, бизнес-решения, инновационные технологии, эксперты, SMM, маркетинг",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://result-me.uz/ru/about" />
        <meta property="og:image" content="/path-to-image.jpg" />
        <link rel="canonical" href="https://result-me.uz/ru/about" />
      </Head>
      <main>
        <Main />
        {/* Скрытые ссылки для улучшения внутренней перелинковки */}
        <a href="https://result-me.uz/" className="links-hidden"></a>
        <a href="https://result-me.uz/ru/cases" className="links-hidden"></a>
        <a href="https://result-me.uz/ru/services" className="links-hidden"></a>
        <a href="https://med-trip.uz/" className="links-hidden"></a>
        <a href="https://med-trip.uz/en/tours" className="links-hidden"></a>
        <a
          href="https://med-trip.uz/en/sanatoriums"
          className="links-hidden"
        ></a>
        <a href="https://interlab.uz/" className="links-hidden"></a>
        <a href="https://interlab.uz/ru/services" className="links-hidden"></a>
        <a href="https://interlab.uz/ru/about" className="links-hidden"></a>
        <a href="https://imed.uz/" className="links-hidden"></a>
        <a href="https://imed.uz/ru/partners" className="links-hidden"></a>
        <a href="https://rmcdeluxe.com/" className="links-hidden"></a>
        <a href="https://rmcdeluxe.com/ru/blog" className="links-hidden"></a>
        <a
          href="https://rmcdeluxe.com/ru/contacts"
          className="links-hidden"
        ></a>
        <a href="https://europol.uz/" className="links-hidden"></a>
        <a href="https://europol.uz/about" className="links-hidden"></a>
        <a href="https://europol.uz/projects" className="links-hidden"></a>
      </main>
    </>
  );
}
