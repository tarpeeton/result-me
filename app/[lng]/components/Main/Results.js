import { useParams } from 'next/navigation'
import { useCustomTranslation } from '../../../i18n/client'
import Image from 'next/image'
// import card from '@/public/images/card.png'
import user from '@/public/images/user.png'
import progress from '@/public/images/progress.png'
import money from '@/public/images/money.png'

const Result = () => {
	const { lng } = useParams()
	const { t } = useCustomTranslation(lng, 'result')

	return (
		<div className='rounded-[30px] mdl:rounded-[60px] 2xl:rounded-[100px] bg-bgDark 3xl:px-[70px] mt-[30px] px-[12px]'>
			{/* RESULT TITLE */}
			<div className='flex flex-col p-[24px]'>
				<p className='text-[28px] mdl:text-[50px] 3xl:text-[60px] font-bold'>
					{t('result_title')}
				</p>
				<p className='bg-violet100 text-white100 text-[23px] mdl:text-[40px] 3xl:text-[50px] font-bold p-[10px] w-[243px] mdl:w-[426px] 3xl:w-[535px] rounded-[170px] text-center rotate-[-5deg]'>
					{t('result_subtitle')}
				</p>
			</div>
			
			{/* RESULT CARDS */}
			<div className='mt-[20px] mb-[30px] mdl:mb-[30px] 2xl:mb-[60px] flex flex-col gap-[12px] mdl:gap-[20px] mdl:flex-row mdl:flex-wrap 3xl:flex-row 3xl:justify-between'>
				{/* CARD ONE */}
				{/* <div className='bg-white100 rounded-[25px] p-[24px] mdl:justify-between mdl:basis-[48%] 2xl:basis-[23%]'>
					<div>
						<p className='text-[28px] text-black font-bold'>31</p>
						<p className='text-[14px] text-titleDark50'>{t('card')}</p>
					</div>
					<div className='mt-[25px]'>
						<Image
							width={400}
							height={400}
							src={card}
							quality={100}
							alt='Ilustration'
							className='object-cover w-full'
						/>
					</div>
				</div> */}

				{/* CARD ONE */}
				<div className='bg-white100 max-h-[440px]  flex flex-col  items-center rounded-[25px] p-[24px] mdl:justify-between mdl:basis-[48%] 2xl:basis-[32%] pr-0'>
					<div>
						<p className='text-[28px]  mdl:text-[40px]  4xl:text-[50px] text-center text-black font-bold'>2 890+</p>
						<p className='text-[14px] mdl:text-[18px]   4xl:text-[20px] text-titleDark50'>{t('card_two')}</p>
					</div>
					<div className='mt-[97px] sm:w-[100%] md:w-[60%] mdx:w-[70%] mdl:w-[65%]  4xl:w-[50%]'>
						<div className='relative w-[99px] h-[99px] flex flex-row 4xl:w-[126px] 4xl:h-[136px]'>
							<Image
								width={100}
								height={100}
								quality={100}
								src={user}
								alt='Ilustration'
								className='object-cover w-full absolute left-0'
							/>
							<Image
								width={100}
								height={100}
								quality={100}
								src={user}
								alt='Ilustration'
								className='object-cover w-full absolute left-[50px]'
							/>
							<Image
								width={100}
								height={100}
								quality={100}
								src={user}
								alt='Ilustration'
								className='object-cover w-full absolute left-[100px]'
							/>
							<div className='w-[99px] border-[4px] border-white100 h-[99px] bg-violet100 rounded-[50px] absolute left-[150px] text-white100 flex items-center justify-center text-[24px] font-semibold 4xl:w-[126px] 4xl:h-[126px] 4xl:rounded-[100px]'>
							2 890+
							</div>
						</div>
					</div>
				</div>

				{/* CARD TWO */}
				<div className='bg-white100 max-h-[440px] flex flex-col  items-center rounded-[25px] p-[24px] mdl:justify-between mdl:basis-[100%] mdl:order-1 2xl:basis-[32%] pr-0 pb-0 '>
					<div>
						<p className='text-[28px] mdl:text-[40px]  text-center text-black font-bold 4xl:text-[50px]'>58 700+</p>
						<p className='text-[14px] mdl:text-[18px]  4xl:text-[20px] text-titleDark50'>{t('card_three')}</p>
					</div>
					<div className='mt-[42px] mdl:mt-[30px] 3xl:mt-[80px] w-full mdx:w-[100%] mdx:h-[90%] lg:h-[70%] lg:w-[100%]'>
						<Image
							width={400}
							height={400}
							src={progress}
							quality={100}
							alt='Ilustration'
							className='object-cover w-full mdx:w-[100%] mdx:h-[90%] mdl:h-[100%] mdx:object-contain  3xl:object-cover  3xl:h-[100%]'
						/>
					</div>
				</div>

				{/* CARD THREE */}
				<div className='bg-white100 max-h-[440px] flex flex-col  items-center rounded-[25px] p-[24px]  mdl:justify-between mdl:basis-[48%]  2xl:basis-[32%] pr-0 3xl:order-3'>
					<div>
						<p className='text-[28px] 2xl:text-[40px]  mdl:text-[40px] 4xl:text-[50px] text-center text-black font-bold'>1.1$</p>
						<p className='text-[14px] mdl:text-[18px] 4xl:text-[20px] text-titleDark50'>{t('card_three')}</p>
					</div>
					<div className='mt-[42px]   3xl:w-[45%]'>
						<Image
							width={100}
							height={100}
							src={money}
							quality={100}
							alt='Ilustration'
							className='object-cover w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Result
