import ServiceItem from "@/app/[lng]/components/Services/Item";
import ItemInfo from "@/app/[lng]/components/Services/ItemInfo";
import InfoCard from "@/app/[lng]/components/Services/InfoCard";
import CostCard from "@/app/[lng]/components/Services/CostCard";
import CaseFilter from "@/app/[lng]/components/CaseFilterSlug/CaseFilter";
import Blog from "@/app/[lng]/components/Main/Blog";
import Navigation from '../../components/Services/Navigation';
const Service = () => {
		


  return (
	<div className='bg-[#F8F8F8] relative'>
		<div className='pt-[20px] mdl:pt-[30px]'>
		<Navigation/>
		<ServiceItem/>
		<ItemInfo/>
		<InfoCard/>
		<CostCard/>
		<div className='px-[24px]'>
		<CaseFilter title={"Наши кейсы"}/>
		</div>
		<Blog/>
		</div>
	</div>
  );
};

export default Service;

