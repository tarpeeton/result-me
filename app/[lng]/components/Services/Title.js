'use client'
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation';



const Title = () => {
	const {lng} = useParams();
	const {t} = useCustomTranslation(lng , 'services')
	return (
	  <section className='pt-[40px]  mdl:pt-[50px]  flex flex-col gap-[15px] px-[16px] mdl:px-[20px] 3xl:px-[30px]'>
		  <div className='w-full 3xl:w-[50%]'>
			<h1 className='text-[28px] mdl:text-[40px] 3xl:text-[50px] text-titleDark font-bold'>
				{t('info_title')}
			</h1>
		  </div>
		  <div className='w-full 3xl:w-[50%]'>
			<p className='text-[14px] mdl:text-[18px] 3xl:text-[20px] text-[#454545]'>
			{t('text')}
			</p>
		  </div>
	  </section>
	);
  };
  
  export default Title;