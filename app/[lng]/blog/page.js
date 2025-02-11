import Head from "next/head";
import Main from "@/app/[lng]/components/Blog/Main";

export const metadata = {
  title: "Блог о маркетинге, IT-решениях и разработке сайтов – Result Agency",
  description: `Добро пожаловать в блог Result Agency! Здесь вы найдете статьи о маркетинге, разработке сайтов и внедрении IT-решений. Узнайте, как продвигать бизнес, создавать современные сайты и автоматизировать процессы для достижения лучших результатов. Мы делимся практическими советами, основанными на реальных кейсах, чтобы помочь вашему бизнесу расти и развиваться.`,
  keywords:
    "маркетинг, IT-решения, разработка сайтов, автоматизация, продвижение бизнеса, создание сайтов, SEO, брендинг, стратегии роста, бизнес-инструменты, цифровые решения, оптимизация процессов, технологии для бизнеса",
};

export default function Blog() {
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
        <meta property="og:url" content="https://result-me.uz/ru/blog" />
        <meta property="og:image" content="/path-to-image.jpg" />
        <link rel="canonical" href="https://result-me.uz/ru/blog" />
      </Head>
      <div>
        <Main />
      </div>
      <a href="https://result-me.uz/" className="links-hidden"></a>
      <a href="https://result-me.uz/ru/cases" className="links-hidden"></a>
      <a href="https://result-me.uz/ru/services" className="links-hidden"></a>
      <a href="https://med-trip.uz/" className="links-hidden"></a>
      <a href="https://med-trip.uz/en/tours" className="links-hidden"></a>
      <a href="https://med-trip.uz/en/sanatoriums" className="links-hidden"></a>
      <a href="https://interlab.uz/" className="links-hidden"></a>
      <a href="https://interlab.uz/ru/services" className="links-hidden"></a>
      <a href="https://interlab.uz/ru/about" className="links-hidden"></a>
      <a href="https://imed.uz/" className="links-hidden"></a>
      <a href="https://imed.uz/ru/partners" className="links-hidden"></a>
      <a href="https://rmcdeluxe.com/" className="links-hidden"></a>
      <a href="https://rmcdeluxe.com/ru/blog" className="links-hidden"></a>
      <a href="https://rmcdeluxe.com/ru/contacts" className="links-hidden"></a>
      <a href="https://europol.uz/" className="links-hidden"></a>
      <a href="https://europol.uz/about" className="links-hidden"></a>
      <a href="https://europol.uz/projects" className="links-hidden"></a>
    </>
  );
}
