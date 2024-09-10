import ServiceItem from "@/app/[lng]/components/Services/Item";
import ItemInfo from "@/app/[lng]/components/Services/ItemInfo";
import InfoCard from "@/app/[lng]/components/Services/InfoCard";
import CostCard from "@/app/[lng]/components/Services/CostCard";

const Service = () => {
  return (
	<div className='bg-[#F8F8F8] relative'>
		<div className='pt-[20px] mdl:pt-[30px]'>
		<ServiceItem/>
		<ItemInfo/>
		<InfoCard/>
		<CostCard/>
		</div>
	</div>
  );
};

export default Service;