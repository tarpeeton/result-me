import { useParams } from 'next/navigation'
import { useCustomTranslation } from '../../../i18n/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider'
import Image from 'next/image'
import caseimg from '@/public/images/case.png'
import Link from 'next/link'

const Cases = () => {
	const {lng} = useParams()
	const { t } = useCustomTranslation(lng, 'result')

	// Slider settings
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true, // Enable autoplay
		autoplaySpeed: 3000, // Adjust the autoplay speed
		arrows:false,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
					slidesToScroll: 2,
				rows:1,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	};

	return (
		<div>
			{/* Case Title */}
			<div className='flex flex-col p-[24px]'>
				<p className='text-[28px] mdl:text-[50px] 3xl:text-[60px] font-bold'>
					{t('case_title')}
				</p>
				<p className='bg-violet100 text-white100 text-[23px] mdl:text-[40px] 3xl:text-[50px] font-bold p-[10px] w-[243px] mdl:w-[426px] 3xl:w-[535px] rounded-[170px] text-center rotate-[-5deg]'>
					{t('case_subtitle')}
				</p>
			</div>

			{/* Slider Section */}
			<div className='2xl:mt-[60px] '>
				<Slider {...settings} className='w-full cursor-pointer'>
					{/* First Slide */}
					<div className='w-full mt-[20px] mdx:max-w-[500px] mdl:max-w-[700px] 2xl:max-w-[650px] 4xl:max-w-[700px]'>
						<Image
							src={caseimg}
							width={500}
							height={500}
							quality={100}
							alt='banner image'
							className='object-cover w-full h-full'
						/>
						<div className='mt-[20px] 3xl:mt-[25px] flex flex-col gap-[4px]'>
							<p className='text-[20px] font-semibold  mdx:text-[28px] 4xl:text-[35px]'>Intermed Innovation</p>
							<p className='text-[14px] text-violet100 mdx:text-[18px] font-semibold'>Сайт | SEO</p>
						</div>
					</div>

					{/* Second Slide */}
					<div className='w-full mt-[20px] mdx:max-w-[500px] mdl:max-w-[700px] 2xl:max-w-[650px] 4xl:max-w-[700px]'>
						<Image
							src={caseimg}
							width={500}
							height={400}
							quality={100}
							alt='banner image'
							className='object-contain w-full h-full'
						/>
						<div className='mt-[20px] 3xl:mt-[25px] flex flex-col gap-[4px]'>
							<p className='text-[20px] font-semibold  mdx:text-[28px] 4xl:text-[35px]'>Another Case</p>
							<p className='text-[14px] text-violet100 mdx:text-[18px] font-semibold'>Development | Marketing</p>
						</div>
					</div>
				</Slider>
			</div>

			<div className='mt-[40px] mdx:mt-[60px] w-[175px] px-[30px] py-[20px] mx-auto rounded-[100px] bg-violet100 flex items-center justify-center'>
				<Link href='cases' className='text-white100 font-bold text-[14px]'>
				Все кейсы
				</Link>
			</div>
		</div>
	);
};

export default Cases;
