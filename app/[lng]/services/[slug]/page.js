import ServiceItem from "@/app/[lng]/components/Services/Item";
import ServiceImage from '@/app/[lng]/components/Services/ServiceImage';
import ItemInfo from "@/app/[lng]/components/Services/ItemInfo";
import InfoCard from "@/app/[lng]/components/Services/InfoCard";
import CostCard from "@/app/[lng]/components/Services/CostCard";
import CaseFilter from "@/app/[lng]/components/CaseFilterSlug/CaseFilter";
import Blog from "@/app/[lng]/components/Main/Blog";
import Navigation from '../../components/Services/Navigation';
const Service = () => {
		


  return (
	<div className='bg-[#F8F8F8] relative'>
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
	</div>
  );
};

export default Service;

