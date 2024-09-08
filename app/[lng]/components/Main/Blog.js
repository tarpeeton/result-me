import Link from 'next/link'
import Image from 'next/image'
import blog from '@/public/images/blog/blog.png'
import blog2 from '@/public/images/blog/blog2.png'
import blog3 from '@/public/images/blog/blog3.png'
import { GrLinkNext } from 'react-icons/gr'

const Blog = () => {
	return (
		<div className='flex flex-col mt-[100px] gap-[40px] py-[30px] px-[12px] w-full rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] bg-[#F8F8F8] mdl:px-[40px] '>
			<div className='ml-[12px] mdl:ml-[28px]'>
				<p className='text-[28px] mdl:text-[50px] font-bold text-titleDark'>
					Блог
				</p>
			</div>

			{/* СARD 1 */}

			<div className='flex flex-col gap-[40px] mdl:gap-[50px] slg:flex-row  slg:flex-wrap'>
				<div className='card__blog slg:w-[45%]  cursor-pointer 2xl:w-[30%]'>
					<div classNmae='slg:h-[200px]'>
						<Image
							width={600}
							height={600}
							quality={100}
							alt='blog image'
							src={blog}
							className='object-contain w-full h-full'
						/>
					</div>
					{/* ЕУЧе */}
					<div className='mt-[14px] flex flex-col gap-[8px]'>
						<p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px]'>
							Как социальные сети могут улучшить репутацию вашей компании
						</p>
						<p className='text-[14px] text-[#7B7B7B] leading-[24.38px] mdl:text-[18px] mdl:leading-[23px]'>
							От репутации компании зависит успех и развитие. Она предопределяет
							восприятие наименования потенциальными пациентами
						</p>
					</div>
					<div className='mt-[8px] mdl:mt-[20px]'>
						<Link
							href='blog'
							className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'
						>
							Подробнее
							<GrLinkNext className='text-violet100 ml-[8px]' />
						</Link>
					</div>
				</div>
				{/* СARD 2 */}
				<div className='card__blog cursor-pointer slg:w-[45%] 2xl:w-[30%]'>
					<div classNmae='slg:max-h-[200px]'>
						<Image
							width={600}
							height={600}
							quality={100}
							alt='blog image'
							src={blog2}
							className='object-cover'
						/>
					</div>
					{/* ЕУЧе */}
					<div className='mt-[14px] flex flex-col gap-[8px]'>
						<p
							className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px]
 mdl:leading-[30.48px]'
						>
							Интерактивный опрос: оцените эффективность вашего маркетинга
						</p>
						<p
							className='text-[14px] 
mdl:text-[18px] text-[#7B7B7B] leading-[24.38px] mdl:leading-[23px]'
						>
							Интерактивный опрос представляет собой метод сбора данных, при
							котором участники активно взаимодействуют с вопросами, используя
							различные форматы ответов
						</p>
					</div>
					<div className='mt-[8px] mdl:mt-[20px]'>
						<Link
							href='blog'
							className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'
						>
							Подробнее
							<GrLinkNext className='text-violet100 ml-[8px]' />
						</Link>
					</div>
				</div>
				<div className='card__blog cursor-pointer slg:w-[45%] 2xl:w-[30%]'>
					<div classNmae='slg:max-h-[200px]'>
						<Image
							width={600}
							height={600}
							quality={100}
							alt='blog image'
							src={blog3}
							className='object-cover'
						/>
					</div>
					{/* ЕУЧе */}
					<div className='mt-[14px] flex flex-col gap-[8px]'>
						<p
							className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px]
 mdl:leading-[30.48px]'
						>
							SEO для медицинских сайтов: Полное руководство
						</p>
						<p
							className='text-[14px] 
mdl:text-[18px] text-[#7B7B7B] leading-[24.38px] mdl:leading-[23px]'
						>
							Основы SEO состоят из нескольких ключевых элементов, которые важно
							понимать и правильно применять для успешного продвижения
							медицинских сайтов
						</p>
					</div>
					<div className='mt-[8px] mdl:mt-[20px]'>
						<Link
							href='blog'
							className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'
						>
							Подробнее
							<GrLinkNext className='text-violet100 ml-[8px]' />
						</Link>
					</div>
				</div>
				<div className='card__blog cursor-pointer slg:w-[45%] 2xl:w-[30%]'>
					<div classNmae='lg:max-h-[200px]'>
						<Image
							width={600}
							height={600}
							quality={100}
							alt='blog image'
							src={blog}
							className='object-contain'
						/>
					</div>
					{/* ЕУЧе */}
					<div className='mt-[14px] flex flex-col gap-[8px]'>
						<p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px]'>
							Как социальные сети могут улучшить репутацию вашей компании
						</p>
						<p
							className='text-[14px] 
mdl:text-[18px] text-[#7B7B7B] leading-[24.38px] mdl:leading-[23px]'
						>
							От репутации компании зависит успех и развитие. Она предопределяет
							восприятие наименования потенциальными пациентами
						</p>
					</div>
					<div className='mt-[8px] mdl:mt-[20px]'>
						<Link
							href='blog'
							className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'
						>
							Подробнее
							<GrLinkNext className='text-violet100 ml-[8px]' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog
