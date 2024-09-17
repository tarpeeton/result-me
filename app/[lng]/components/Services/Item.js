'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ServiceModal from '../Modal/SeriviceModal'
import { useParams } from 'next/navigation'
import slugImage from '@/public/images/slug/slug.png'  // Default fallback image
import web from '@/public/images/serviceImage/web.jpg'
import Add from '@/public/images/serviceImage/Add.jpg'
import Branding from '@/public/images/serviceImage/Branding.jpg'
import seo from '@/public/images/serviceImage/SEO.jpg'
import tgbot from '@/public/images/serviceImage/tgbot.jpg'
import smm from '@/public/images/serviceImage/smm.jpg'

const ServiceItem = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { slug } = useParams()  // Get the slug from the URL
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [imageUrl, setImageUrl] = useState(slugImage)

	// Data with slugs and information
	const dataAndSlugFilter = [
		{
			slug: 'web-development',
			title: 'Разработка Web-сайтов',
			imagePath: web,
			description:
				'Комплексная разработка сайтов: дизайн, программирование, перевод и заполнение контентом. Обеспечиваем безопасность, скорость и удобство использования для роста бизнеса.',
		},
		{
			slug: 'telegram-bot-development',
			title: 'Разработка Telegram-ботов',
			imagePath: tgbot,
			description:
				'Комплексная разработка чат-ботов: от проектирования функционала до программирования и запуска. Обеспечиваем высокую производительность, защиту данных и удобство взаимодействия для пользователей.',
		},
		{
			slug: 'smm',
			title: 'Услуга SMM',
			imagePath: smm,
			description:
				'Продвижение в социальных сетях: от разработки стратегии до создания контента и его анализа. Мы помогаем вам привлекать целевую аудиторию, увеличивать вовлеченность и строить доверительные отношения с клиентами через эффективные SMM-кампании.',
		},
		{
			slug: 'ads-launch',
			title: 'Запуск контекстной и таргетированной рекламы',
			imagePath: Add,
			description:
				'Мы предлагаем полный цикл услуг по настройке и запуску контекстной и таргетированной рекламы. Наша цель — привести к вам целевых клиентов, увеличив охваты и конверсии с минимальными затратами.',
		},
		{
			slug: 'seo',
			title: 'SEO-оптимизация',
			imagePath: seo,
			description:
				'SEO-оптимизация для повышения видимости вашего сайта в поисковых системах. Наша задача — улучшить позиции вашего сайта по ключевым запросам и привлечь целевых посетителей.',
		},
		{
			slug: 'branding',
			title: 'Брендинг',
			imagePath: Branding,
			description:
				'Создание уникального и запоминающегося имиджа вашего бизнеса. Включает разработку логотипа, визуальных элементов и корпоративной атрибутики, которая подчеркнет индивидуальность вашего бренда.',
		},
	]

	// Update the state based on the slug using useEffect
	useEffect(() => {
		// Find the matching data by slug
		const matchedService = dataAndSlugFilter.find((item) => item.slug === slug)

		// If matched, update the state with the relevant information
		if (matchedService) {
			setTitle(matchedService.title)
			setDescription(matchedService.description)
			setImageUrl(matchedService.imagePath || slugImage)  // Use specific image or fallback to default
		}
	}, [slug])

	// Open modal function
	const openModal = () => {
		setIsModalOpen(true)
	}

	// Close modal function
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='mx-[16px] 3xl:mx-[30px] mt-[20px] mdl:mt-[30px] '>
			<div className='bg-white100 px-[16px] pt-[16px] rounded-[30px] flex flex-col 3xl:flex-row 3xl:justify-center 3xl:items-center 3xl:p-[40px]'>
				{/* IMAGE */}
				<div className='rounded-[30px] w-full mx-[12px] 3xl:w-[50%] 3xl:order-2'>
					<Image
						className='rounded-[30px] object-cover'
						src={imageUrl}
						width={1000}
						height={900}
						quality={100}
						alt={title}
					/>
				</div>
				{/* TEXT INFO */}
				<div className='flex flex-col mt-[30px] px-[20px] mdl:mt-[40px] 3xl:w-[50%]'>
					<div className='w-[80%] 3xl:w-[90%] 4xl:w-[70%]'>
						<h1 className='text-[28px] font-bold text-titleDark mdl:text-[40px] 3xl:text-[50px]'>
							{title}
						</h1>
					</div>
					<div className='mt-[15px] 3xl:mt-[40px] 3xl:w-[80%]'>
						<p className='text-[14px] mdl:text-[18px] leading-[23px] font-medium text-[#454545] 3xl:text-[20px]'>
							{description}
						</p>
					</div>
					<button
						onClick={openModal}
						className='w-[80%] 4xl:w-[30%] mt-[30px] mdl:mt-[40px] mdl:w-[40%] mdl:mx-0 mx-auto bg-[#7B72EB] rounded-[100px] py-[20px] px-[30px] text-center text-[14px] font-bold text-white100 3xl:text-[18px] 3xl:mt-[80px]'
					>
						Оставить заявку
					</button>
				</div>
			</div>
			<ServiceModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
}

export default ServiceItem
