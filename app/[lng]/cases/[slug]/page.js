import Main from "@/app/[lng]/components/CaseItem/Main";
import { metaInfoCase } from '@/constants/case/meta-info';

export async function generateStaticParams() {
  // Dinamik URL-lar uchun kerak bo'lsa, parametrlar ro'yxatini qaytaradi
  return [
    { slug: 'rustam' },
    { slug: 'another-case' },
  ];
}

// Meta ma'lumotlarni dinamik yaratish
export async function generateMetadata({ params }) {
  const { slug } = params;
  const meta = metaInfoCase[slug] || metaInfoCase.default;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      type: 'website',
    },
    alternates: {
      canonical: meta.url,
    },
  };
}

// Asosiy komponent
export default function Cases({ params }) {
  return (
    <main>
      <Main />
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
    </main>
  );
}
