import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick/lib/slider'
import Link from 'next/link'
const ProsesWork = () => {
	// SLIDER
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 750, // Disable slider for screens smaller than 750px
				settings: 'unslick',
			},
		],
	}



	return (
		<div className='flex flex-col mt-[80px] gap-[10px]'>
			{/* Slider for screens larger than 750px */}
			<div className='hidden slg:block w-full cursor-pointer'>
				<Slider {...settings} className='w-full'>
					{/* CARD 1 */}
					<div className='w-full mdl:max-w-full  4xl:max-w-[50%] rounded-[30px] bg-violet100 p-[30px] pb-[26px] relative flex flex-col justify-between mdl:pl-[40px] mdl:rounded-[60px] mdl:pt-[50px]  2xl:max-w-[98%] 3xl:min-w-[98%] 2xl:min-h-[450px]  4xl:min-h-[600px]'>
						<div className='mdl:w-[80%] 4xl:w-[100%]'>
							<p className='text-[28px] mdl:text-[30px] text-white100 font-bold 4xl:text-[50px]'>
								Процесс работы максимально понятный и открытый
							</p>
						</div>
						<div className='relative w-full  mt-[200px] 3xl:absolute 3xl:bottom-[25px] 3xl:right-[25px]'>
							<div className='py-[20px] absolute  bottom-[20px] right-[20px] px-[30px] rounded-[100px] bg-white text-center  mdl:w-[300px] 4xl:w-[370px]'>
								<Link
									href='steps-working'
									className='text-[14px] font-bold text-violet100 mdl:text-[18px] 4xl:text-[20px]'
								>
									Этапы работы
								</Link>
							</div>
						</div>
					</div>
					{/* CARD 2 */}
					<div className='w-full mdl:min-w-full  4xl:max-w-[50%] rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between  xl:min-w-[90%]  2xl:max-w-[98%] 3xl:min-w-[98%] 2xl:min-h-[450px] 4xl:min-h-[600px]'>
						<div className='w-[60%] mdl:w-[70%]'>
							<p className='text-[23px] mdl:text-[35px] text-titleDark font-bold 4xl:text-[50px]'>
								РАБОТАЕМ ПО ДОГОВОРУ
							</p>
						</div>
						<div className='mt-[15px] mdl:text-[18px] w-[85%]  mdl:mt-[40px]'>
							<p className='text-[14px] mdl:text-[18px] text-[#454545] 4xl:text-[20px]'>
								Все условия сотрудничества фиксируются в договоре для
								уверенности в надежности.
							</p>
						</div>
					</div>
					{/* CARD 3 */}
					<div className='w-full 2xl:max-w-[98%]  mdl:min-w-full 2xl:min-h-[450px]  rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between xl:min-w-[90%]  2xl:min-w-[98%] 4xl:min-h-[600px]'>
						<div className='w-[60%]'>
							<p className='text-[23px] mdl:text-[35px] text-titleDark font-bold 4xl:text-[50px]'>
								УТВЕРЖДАЕМ ПЛАНЫ
							</p>
						</div>
						<div className='mt-[15px] w-[85%] mdl:mt-[40px]'>
							<p className='text-[14px] mdl:text-[18px] 4xl:text-[20px] text-[#454545]'>
								Планы выполнения проекта утверждаются с заказчиком со сроками и
								ресурсами.
							</p>
						</div>
					</div>
					<div className='w-full 2xl:max-w-[98%]  mdl:min-w-full 2xl:min-h-[450px]  rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between xl:min-w-[90%]  2xl:min-w-[98%] 4xl:min-h-[600px]'>
						<div className='w-[60%]'>
							<p className='text-[23px] mdl:text-[35px] text-titleDark font-bold 4xl:text-[50px]'>
							ПРЕДОСТАВЛЯЕМ ОТЧЕТЫ
							</p>
						</div>
						<div className='mt-[15px] w-[85%] mdl:mt-[40px]'>
							<p className='text-[14px] mdl:text-[18px] 4xl:text-[20px] text-[#454545]'>
								Ежемесячно отправляем отчеты по рекламным кампаниям и
								выполненным задачам.
							</p>
						</div>
					</div>
				</Slider>
			</div>
			{/* ============================================================================= */}
			{/* Column layout for screens smaller than 750px */}
			<div className='sm:flex sm:flex-col sm:gap-[20px] slg:hidden '>
				<div className='w-full rounded-[30px] bg-violet100 p-[30px] pb-[26px] flex flex-col justify-between '>
					<div>
						<p className='text-[28px] text-white100 font-bold'>
							Процесс работы максимально чистый и прозрачный
						</p>
					</div>
					<div className='py-[20px] px-[30px] rounded-[100px] bg-white text-center mt-[51px]'>
						<Link
							href='/steps-working'
							className='text-[14px] font-bold text-violet100'
						>
							Этапы работы
						</Link>
					</div>
				</div>
				<div className='w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between mdl:mt-[20px]'>
					<div className='w-[60%]'>
						<p className='text-[23px] text-titleDark font-bold'>
							РАБОТАЕМ ПО ДОГОВОРУ
						</p>
					</div>
					<div className='mt-[15px] w-[85%]'>
						<p className='text-[14px] text-[#454545] font-robotoFlex'>
							Все условия сотрудничества фиксируются в договоре для уверенности
							в надежности.
						</p>
						<div className='w-full flex items-center justify-end'>
							<Link
								href='/steps-working'
								className='mt-[12px] text-violet100 text-[14px] text-end w-full'
							>
								{' '}
								Подробнее{' '}
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between'>
					<div className='w-[60%]'>
						<p className='text-[23px] text-titleDark font-bold'>
							УТВЕРЖДАЕМ ПЛАНЫ
						</p>
					</div>
					<div className='mt-[15px] w-[85%]'>
						<p className='text-[14px] text-[#454545] font-robotoFlex'>
							Планы выполнения проекта утверждаются с заказчиком со сроками и
							ресурсами.
						</p>
						<div className='w-full flex items-center justify-end'>
							<Link
								href='/steps-working'
								className='mt-[12px] text-violet100 text-[14px] text-end w-full'
							>
								{' '}
								Подробнее{' '}
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between'>
					<div className='w-[60%]'>
						<p className='text-[23px] text-titleDark font-bold'>
						ПРЕДОСТАВЛЯЕМ ОТЧЕТЫ
						</p>
					</div>
					<div className='mt-[15px] w-[85%]'>
						<p className='text-[14px] text-[#454545] font-robotoFlex'>
							Ежемесячно отправляем отчеты по рекламным кампаниям и выполненным
							задачам.
						</p>
						<div className='w-full flex items-center justify-end'>
							<Link
								href='/steps-working'
								className='mt-[12px] text-violet100 text-[14px] text-end w-full'
							>
								{' '}
								Подробнее{' '}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProsesWork
