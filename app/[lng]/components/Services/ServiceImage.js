"use client"
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect , useState} from 'react'
import tg from '@/public/images/serviceImageInfo/tg.png'
import Advertising from '@/public/images/serviceImageInfo/Advertising.png'
import SEO from '@/public/images/serviceImageInfo/SEO.png'
import SMM from '@/public/images/serviceImageInfo/SMM.png'
import Branding from '@/public/images/serviceImageInfo/Branding.png'

const Data = [
	{
		slug: 'web-development',
		img: 'https://ucarecdn.com/8f42e62c-c8cd-4a22-8c97-0ef4362b740e/-/preview/230x230/',
		title: 'Для чего\nнужен сайт',
		subtitle:
			'Сайт — это ваше цифровое представительство. Он помогает бизнесу быть доступным онлайн, привлекая новых клиентов и создавая доверие к вашему бренду',
	},
	{
		slug: 'web-development',
		img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
		title: 'Как это работает',
		subtitle:
			'Сайт помогает вашему бизнесу стать доступным 24/7, позволяя пользователям находить вас, изучать услуги и связываться с вами в любое удобное время',
	},
	{
		slug: 'web-development',
		img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
		title: 'Что я получу',
		subtitle:
			'Ваш сайт будет эффективным инструментом для привлечения клиентов, увеличения охвата и роста бизнеса в цифровом пространстве',
	},
	{
		slug: 'telegram-bot-development',
		img: tg,
		title: 'Для чего нужна\nэта услуга',
		subtitle:
			'Разработка Telegram ботов помогает автоматизировать взаимодействие с клиентами, экономить время и улучшить качество обслуживания. Боты могут обрабатывать запросы, принимать заказы и предоставлять информацию 24/7.',
	},
	{
		slug: 'telegram-bot-development',
		img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
		title: 'Как это работает',
		subtitle:
			'Бот работает как виртуальный помощник, моментально реагируя на запросы пользователей. Это увеличивает скорость обслуживания, улучшает клиентский опыт и позволяет быстро решать задачи, от заказа до консультации.',
	},
	{
		slug: 'telegram-bot-development',
		img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
		title: 'Что я получу',
		subtitle:
			'Вы получите удобного и умного помощника, который автоматизирует рутинные процессы, сокращает время обработки запросов и повышает удовлетворённость клиентов, улучшая их взаимодействие с вашим бизнесом.',
	},
	{
		slug: 'smm',
		img: SMM,
		title: 'Для чего нужна\nэта услуга',
		subtitle:
			'SMM помогает вашему бизнесу быть заметным в социальных сетях. Это инструмент для привлечения и удержания внимания целевой аудитории, увеличения узнаваемости бренда и взаимодействия с клиентами.',
	},
	{
		slug: 'smm',
		img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
		title: 'Как это работает',
		subtitle:
			'SMM увеличивает вашу видимость в социальных сетях, делая ваш контент доступным для тех, кто заинтересован в ваших услугах или товарах. Это способствует росту аудитории и повышению уровня доверия.',
	},
	{
		slug: 'smm',
		img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
		title: 'Что я получу',
		subtitle:
			'Вы получите эффективную стратегию продвижения, которая увеличит количество подписчиков, улучшит взаимодействие с клиентами и повысит конверсию ваших предложений, превращая подписчиков в лояльных клиентов.',
	},
	{
		slug: 'ads-launch',
		img: Advertising,
		title: 'Для чего нужна\nэта услуга',
		subtitle:
			'Контекстная и таргетированная реклама помогает показывать ваш бизнес именно тем, кто уже заинтересован в ваших товарах или услугах. Это ускоряет привлечение клиентов и увеличивает конверсию.',
	},
	{
		slug: 'ads-launch',
		img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
		title: 'Как это работает',
		subtitle:
			'Реклама показывается людям, которые ищут именно ваши предложения или похожие товары. Она настраивается на нужную аудиторию, что помогает быстрее и точнее привлечь потенциальных клиентов.',
	},
	{
		slug: 'ads-launch',
		img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
		title: 'Что я получу',
		subtitle:
			'Вы получите поток целевых клиентов, увеличение продаж и более эффективное использование рекламного бюджета. Ваши объявления будут работать на конкретную аудиторию, готовую к покупке.',
	},
	{
		slug: 'seo',
		img: SEO,
		title: 'Для чего нужна\nэта услуга',
		subtitle:
			'SEO необходимо для того, чтобы ваш сайт занимал высокие позиции в поисковых системах. Это помогает привлечь больше органического трафика и сделать ваш бизнес видимым для целевой аудитории.',
	},
	{
		slug: 'seo',
		img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
		title: 'Как это работает',
		subtitle:
			'SEO оптимизирует ваш сайт под поисковые запросы ваших клиентов. Это увеличивает шанс, что ваш сайт будет найден в результатах поиска, привлекая заинтересованных посетителей и улучшая ваши позиции в поисковых системах.',
	},
	{
		slug: 'seo',
		img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
		title: 'Что я получу',
		subtitle:
			'Вы получите лучшее ранжирование сайта в поисковых системах, больше органического трафика и увеличение количества потенциальных клиентов, которые ищут именно ваши продукты или услуги.',
	},
	{
		slug: 'branding',
		img: Branding,
		title: 'Для чего нужна\nэта услуга',
		subtitle:
			'Брендинг помогает вашему бизнесу выделиться среди конкурентов и создать уникальный образ, который запомнится вашим клиентам. Это ключ к построению долгосрочных отношений с аудиторией и укреплению доверия.',
	},
	{
		slug: 'branding',
		img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
		title: 'Как это работает',
		subtitle:
			'Брендинг создаёт узнаваемый стиль, который привлекает внимание и запоминается. Это помогает формировать положительное восприятие бренда, укреплять связь с клиентами и увеличивать лояльность к вашей компании.',
	},
	{
		slug: 'branding',
		img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
		title: 'Что я получу',
		subtitle:
			'Вы получите уникальный бренд с чёткой идентификацией, который выделяется на рынке, вызывает доверие у клиентов и способствует росту продаж, благодаря сильной визуальной и эмоциональной связи с аудиторией.',
	},
]

const ServiceImage = () => {
	const [filteredData , setFilteredData] = useState([])
	const {slug} = useParams()

	useEffect(()  =>  {
		const filter = Data.filter((item) => item.slug === slug)
		setFilteredData(filter)
	} , [slug])



	const formatText = (text) => {
		return text.split('\n').map((str, index) => (
			<span key={index}>
				{str}
				<br />
			</span>
		))
	}

	const getOrderClass = (i) => {
		return i % 2 === 0 ? 'mdl:order-[2] 2xl:order-[-1]' : 'mdl:order-[-1]'
	}

	return (
		<div className='mt-[20px] mdl:mt-[20px] 3xl:mt-[25px] rounded-[30px] mdl:rounded-[40px] flex flex-col 3xl:flex-row py-[30px] px-[24px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] bg-white mx-[16px] mdl:mx-[20px] 3xl:mx-[30px]'>
			{filteredData.map((data, i) => (
				<div key={i} className={`${i !== Data.length - 1 ? 'mb-[50px] mdl:mb-[80px]' : ''} flex flex-col mdl:flex-row mdl:justify-between  2xl:flex-col 2xl:justify-normal`}>
					<Image
						src={data.img}
						quality={100}
						width={300}
						height={300}
						className={`w-[50%] ${getOrderClass(i)} mdl:w-[35%] mdl:transform mdl:-scale-x-100 2xl:h-[230px] 2xl:transform 2xl:scale-x-100 2xl:w-[50%]`}
						alt={data.img}
					/>
					<div className='mdl:w-[60%] 2xl:w-[90%] 2xl:mt-[30px]'>
					<h1 
				className={`text-titleDark font-bold text-[23px] mdl:text-[40px] mt-[15px] ${i === 1 ? 'mdl:w-[50%]' : ''}`}
			>
				{formatText(data.title)}
			</h1>
						<p className='font-robotoFlex text-[15px] text-titleDark font-normal mt-[12px] mdl:text-[20px] mdl:mt-[25px]'>
							{formatText(data.subtitle)}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default ServiceImage
