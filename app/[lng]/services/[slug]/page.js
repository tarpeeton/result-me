import ServiceItem from "@/app/[lng]/components/Services/Item";
import ServiceImage from "@/app/[lng]/components/Services/ServiceImage";
import ItemInfo from "@/app/[lng]/components/Services/ItemInfo";
import InfoCard from "@/app/[lng]/components/Services/InfoCard";
import CostCard from "@/app/[lng]/components/Services/CostCard";
import CaseFilter from "@/app/[lng]/components/CaseFilterSlug/CaseFilter";
import Navigation from "../../components/Services/Navigation";
import { metaInfoService } from "@/constants/service/service-metada";
import {ServiceFaq} from '../../components/Services/ServiceFaq'

export async function generateStaticParams() {
  return [{ slug: "rustam" }, { slug: "another-case" }];
}

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
      type: "website",
    },
    alternates: {
      canonical: meta.url,
    },
  };
}

const Service = () => {
  return (
    <main className="bg-[#F8F8F8] relative">
      <Navigation />
      <ServiceItem />
      <ServiceImage />
      <ItemInfo />
      <InfoCard />
      <CostCard  />
      <section className="px-[24px] pb-14 2xl:pb-24">
        <CaseFilter
          title={{ ru: "Наши кейсы", uz: "Bizning Keyslar", en: "Our cases" }}
        />
      </section>
      <ServiceFaq />
    </main>
  );
};

export default Service;
