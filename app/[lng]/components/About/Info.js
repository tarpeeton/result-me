"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import AboutImage from '@/public/images/about/about.png'
import { useCustomTranslation } from '@/app/i18n/client'

const Info = () => {
	const {lng} = useParams()
	const {t} = useCustomTranslation(lng , 'aboutus')

	return (
		<div className='rounded-[30px] bg-violet100 py-[30px] px-[20px] mx-[16px] relative  mdl:py-[50px] mdl:px-[40px] 3xl:rounded-[100px] 3xl:py-[80px] 3xl:px-[70px] mt-[20px] mdl:mt-[25px] 3xl:mt-[30px] overflow-hidden'>
			<div className='relative z-50 3xl:w-[55%]'>
				<div>
					<div className='w-[80%] 3xl:w-[95%]'>
						<h1 className='text-[28px] font-bold text-white100 mdl:text-[60px]'>
							{t("title")}
						</h1>
					</div>
					<div className='mt-[12px] mdl:mt-[30px]'>
						<p className='text-[14px] mdl:text-[18px] mdl:font-semibold font-medium text-white100 font-robotoFlex'>
					{t('description')}
						</p>
					</div>
				</div>
				<div className='w-full h-[1px] bg-[#A49DF2] mt-[30px] mb-[30px] mdl:mb-[40px] mdl:mt-[40px] 3xl:mt-[50px] 3xl:mb-[50px]' />
				<div className='flex flex-col gap-[30px] 3xl:flex-row'>
					<div className='flex flex-col gap-[7px]'>
						<p className='text-[28px] text-white100 font-bold mdl:text-[40px]'>
							{t('date')}
						</p>
						<p className='text-[14px] text-[#FFFFFF] mdl:text-[20px] font-robotoFlex'>
							{t('date_info')}
						</p>
					</div>
					<div className='flex flex-col gap-[7px]'>
						<div className='border-b border-white'>
							<Link
								href='https://document.birdarcha.uz/certificate/legal-entity/2875c7eb-48ec-4ff3-91f6-fd8a394f8439/pdf?download'
								className='text-[28px] text-white100 font-bold mdl:text-[40px]  '
							>
								{t('dowload_text')}
							</Link>
						</div>

						<Link href='https://document.birdarcha.uz/certificate/legal-entity/2875c7eb-48ec-4ff3-91f6-fd8a394f8439/pdf?download' className='text-[14px] text-[#FFFFFF] mdl:text-[20px] font-robotoFlex'>
							{t('dowload')}
						</Link>
					</div>
				</div>
			</div>

			<div className='mt-[130px] 3xl:mt-0 '>
				<div className='absolute bottom-[-80px] mdl:right-0'>
					<Image
						src={AboutImage}
						width={455}
						height={411}
						alt='about image'
						className='z-50 absolute bottom-[-20px] right-[-90px] rotate-[15%] 3xl:bottom-[100px] 3xl:right-[250px]'
					/>
					<Image
						src='https://ucarecdn.com/36149bc5-65e2-4628-ab91-622eb61f0299/-/preview/288x294/'
						width={800}
						height={800}
						alt='about image'
						className=' mdl:w-[600px] mdl:h-[600px] 3xl:w-[900px] 3xl:h-[800px]'
					/>
				</div>
			</div>
		</div>
	)
}

export default Info
