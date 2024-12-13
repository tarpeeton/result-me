import ServiceItem from "@/app/[lng]/components/Services/Item";
import ServiceImage from '@/app/[lng]/components/Services/ServiceImage';
import ItemInfo from "@/app/[lng]/components/Services/ItemInfo";
import InfoCard from "@/app/[lng]/components/Services/InfoCard";
import CostCard from "@/app/[lng]/components/Services/CostCard";
import CaseFilter from "@/app/[lng]/components/CaseFilterSlug/CaseFilter";
import Blog from "@/app/[lng]/components/Main/Blog";
import Navigation from '../../components/Services/Navigation';
import { metaInfoService } from '@/constants/service/service-metada';


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
  const meta = metaInfoService[slug] || metaInfoService.default;

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

const Service = () => {
		


  return (
	<main className='bg-[#F8F8F8] relative'>
		<Navigation/>
		<ServiceItem/>
		<ServiceImage/>
		<ItemInfo/>
		<InfoCard/>
		<CostCard/>
		<div className='px-[24px]'>
		<CaseFilter title={{ru:"Наши кейсы" , uz:  "Bizning Keyslar" , en: "Our cases"}} />
		</div>
		<Blog/>
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
};

export default Service;

