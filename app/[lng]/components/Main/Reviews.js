import Image from 'next/image'
import ServiceModal from '../Modal/SeriviceModal'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrLinkPrevious } from 'react-icons/gr'
import { GrLinkNext } from 'react-icons/gr'

import revBG from '@/public/images/reviews/revBG.png'
import { useRef, useState } from 'react'

const SampleNextArrow = ({ onClick }) => (
	<div
		className='cursor-pointer text-[20px] w-[60px] h-[60px] rounded-[100px] border border-white100 flex items-center justify-center'
		onClick={onClick}
	>
		<GrLinkNext className='text-white100' />
	</div>
)

const SamplePrevArrow = ({ onClick }) => (
	<div
		className='cursor-pointer text-[20px] w-[60px] h-[60px] rounded-[100px] border border-white100 flex items-center justify-center'
		onClick={onClick}
	>
		<GrLinkPrevious className='text-white100' />
	</div>
)

const Reviews = () => {
	const sliderRef = useRef(null)
	var settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev() // Trigger prev slide
		}
	}

	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext() // Trigger next slide
		}
	}
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => {
		setIsModalOpen(true)
	}

	// Close modal function
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div
			className='relative w-full mt-[20px] mdl:mt-[30px] rounded-[30px] bg-cover bg-no-repeat px-5 py-8 bg-[#161616] bg-opacity-[90%] mdl:px-[40px] mdl:py-[50px]'
			style={{ backgroundImage: `url(${revBG.src})` }}
		>
			{/* Top Decorative Image */}
			<div className=' absolute top-0 right-0 rounded-[30px]'>
				<Image
					width={400}
					height={400}
					src='https://ucarecdn.com/74cec222-166d-4b2a-a08d-a2dffb1a8d80/-/preview/867x810/'
					alt='revTop'
					className='rounded-[30px]  opacity-40 '
				/>
			</div>

			{/* Reviews Title */}
			<p className='text-[28px] text-white font-bold relative z-50 mb-6 mdl:text-[50px] mdl:mb-[40px]'>
				Отзывы клиентов
			</p>

			{/* Reviews Carousel */}
			<Slider {...settings} ref={sliderRef} className='z-[999] overflow-hidden'>
				<div className='rounded-[30px] px-[20px] py-[25px] bg-[#161616] bg-opacity-[50%]  text-white  z-[99999] min-h-[400px] border border-[#5A5A5A] 2xl:max-w-[90%]'>
					<h2 className='text-[18px] font-semibold  mdl:text-[28px] 3xl:text-[30px]'>
						Матьякуб Назарович
					</h2>
					<p className='text-[14px] mt-[4px] opacity-75 mb-[20px] text-[#7B7B7B] font-robotoFlex'>
						Главврач Intermed
					</p>
					<p className='text-[15px] leading-[18px] mdl:text-[20px] mdl:leading-[28px] font-robotoFlex'>
						Отличная работа! Команда профессионалов создала для нас сайт,
						который идеально отражает нашу клинику и помогает привлекать новых
						пациентов.
					</p>
				</div>
				<div className='rounded-[30px] px-[20px] py-[25px] bg-[#161616]  bg-opacity-[50%] 2xl:max-w-[90%] text-white  min-h-[400px] border border-[#5A5A5A]'>
					<h3 className='text-[18px] font-semibold mb-[4px] mdl:text-[28px] 3xl:text-[30px]'>
					Бахтиер Наджиюллаевич
					</h3>
					<p className='text-[14px] opacity-75 mb-[20px] text-[#7B7B7B] font-robotoFlex'>
					Сотрудничаю с фирмой "Result" в течении 6 месяцев.
					</p>
					<p className='text-[15px] leading-[18px] mdl:text-[20px] mdl:leading-[28px] font-robotoFlex '>
					Очень грамотная и обходительная команда сотрудников, принимает во внимание все пожелания и замечания клиента. При необходимости предлагает свои варианты работы. Никаких нареканий, одна благодарность! Спасибо за помощь!
					</p>
				</div>
				{/* Add more review slides here */}
			</Slider>

			{/* Bottom Decorative Image */}
			<div className='absolute bottom-0 left-0'>
				<Image
					width={400}
					height={400}
					src='https://ucarecdn.com/fe33ea4c-9361-44a1-8702-ef9372cf4c7f/-/preview/1000x731/'
					alt='revBottom'
					className='rounded-[30px] opacity-40 '
				/>
			</div>

			{/* Call to Action Button */}
			<div className='text-center mt-6 flex items-center justify-between'>
				<button
					onClick={openModal}
					className='w-[80%] 2xl:w-[20%] 2xl:mx-0 mx-auto py-[20px] px-[30px] bg-white text-violet100 font-bold text-[14px]  rounded-full hover:bg-gray-200 transition z-[999]'
				>
					Стать нашим клиентом
				</button>
				<div className='sm:hidden flex flex-row gap-[8px] 2xl:flex z-[9999]'>
					<SamplePrevArrow onClick={handlePrev} />
					<SampleNextArrow onClick={handleNext} />
				</div>
			</div>
			{/* MODAL */}
			<ServiceModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
}

export default Reviews
