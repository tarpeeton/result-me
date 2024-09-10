"use client"
import { useCustomTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation'
import { GrLinkNext } from "react-icons/gr";

import Image from 'next/image'
import web from '@/public/images/services/web.svg'
import bot from '@/public/images/services/bot.svg'
import smm from '@/public/images/services/smm.svg'
import Group from '@/public/images/services/Group.svg'
import seo from '@/public/images/services/seo.svg'
import branding from '@/public/images/services/branding.svg'


const Services = () => {
	const {lng} = useParams()
	const {t} = useCustomTranslation(lng , 'services')
	return (
		<div className="w-full flex flex-col flex-wrap justify-between gap-6 mt-[30px] bg-[#F8F8F8] py-[24px] px-[16px] rounded-[30px] mdl:pl-[24px] mdl:pr-[14px] mdl:mt-[50px] 3xl:mt-[60px] ">
		{/* Card 1 */}


{/* =========================== START ===================================== */}
<div className='flex  flex-col gap-[16px] mdl:gap-[24px] 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:gap-[30px]'>
	{/* 1 */}
		<div className="bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[60%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group">
		<div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
			<Image width={90} height={90} src={web} alt='service Image' className="object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]"/>
		</div>
		  <div>
			<h2 className="text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white">{t('card_titleOne')}</h2>
			<p className="text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%]">
			 {t('card_textOne')}
			</p>
		  </div>
		  <div className="w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]">
			<div className="w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center">
			 <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]'/>
			</div>
		  </div>
		</div>
		{/* 2 */}
		<div className="bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[36%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group">
		<div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
			<Image width={90} height={90} src={bot} alt='service Image' className="object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]"/>
		</div>
		  <div>
			<h2 className="text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white">{t('card_titleTwo')}</h2>
			<p className="text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%]">
			  {t('card_textTwo')}
			</p>
		  </div>
		  <div className="w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]">
			<div className="w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center">
			 <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]'/>
			</div>
		  </div>
		</div>
		{/* 3 */}
		<div className="bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[36%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group">
		<div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
			<Image width={90} height={90} src={smm} alt='service Image' className="object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]"/>
		</div>
		  <div>
			<h2 className="text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white">{t('card_titleThree')}</h2>
			<p className="text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%]">
			 {t('card_textThree')}
			</p>
		  </div>
		  <div className="w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]">
			<div className="w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center">
			 <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]'/>
			</div>
		  </div>
		</div>
		{/* 4 */}
		<div className="bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[60%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group">
		<div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
			<Image width={90} height={90} src={Group} alt='service Image' className="object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]"/>
		</div>
		  <div>
			<h2 className="text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white">{t('card_titleFour')}</h2>
			<p className="text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%]">
			  {t('card_textFour')}
			</p>
		  </div>
		  <div className="w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]">
			<div className="w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center">
			 <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]'/>
			</div>
		  </div>
		</div>
		<div className="bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[48%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group">
		<div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
			<Image width={90} height={90} src={seo} alt='service Image' className="object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]"/>
		</div>
		  <div>
			<h2 className="text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white">{t('card_titleFive')}</h2>
			<p className="text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%]">
			 {t('card_textFive')}
			</p>
		  </div>
		  <div className="w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]">
			<div className="w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center">
			 <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]'/>
			</div>
		  </div>
		</div>
		{/* 5 */}
		<div className="bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[48%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group" >
			<div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
			<Image width={90} height={90} src={branding} alt='service Image' className="object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]"/>
		</div>
		  <div>
			<h2 className="text-xl mdl:text-[28px] font-semibold text-[#010101]  group-hover:text-white">{t('card_titleSix')}</h2>
			<p className="text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%]">
			  {t('card_textSix')}
			</p>
		  </div>
		  <div className="w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]">
			<div className="w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center">
			 <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]'/>
			</div>
		  </div>
		</div>
		</div>

{/* ===================================END================================= */}


























		
	
	
  
	
  
	
  
	
	  </div>
	);
  };
  
  export default Services;