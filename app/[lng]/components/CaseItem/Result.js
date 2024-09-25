'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' // For getting the slug from the URL
import CaseResultModalSocials from '../Modal/CaseResultModal'

const obtainedResult = [
	{
		slug: 'prime-medical-center',
		link: {
			web: 'https://pmcenter.uz/',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '+41%', name: 'число обращений в клинику / мес' },
			{ item: '+23%', name: 'посещаемость' },
			{ item: '+18,200', name: 'посещений сайта / год' },
			{
				descrip:
					'Эти результаты подтверждают успешный ребрендинг и активную работу по привлечению новых пациентов, что привело к значительному росту показателей.',
			},
		],
	},
	{
		slug: 'xayrullo-rahmatullaevich',
		link: {
			web: 'https://dr-khashimov.uz/',
			telegram: '',
			instagram: '',
		},
		result: [
			{
				item: 'Профессиональный имидж',
			},
			{
				item: 'Увеличение доверия',
			},
			{
				descrip:
					'Создание фирменного стиля и информационного сайта значительно укрепило личный бренд врача, повысив его узнаваемость и профессиональный статус. Благодаря этому, доверие со стороны пациентов возросло, что привело к увеличению числа обращений и записей на прием.',
			},
		],
	},
	{
		slug: 'aziza-shaxzadeevna',
		link: {
			web: 'https://endocrinolog.uz/',
			telegram: '',
			instagram: '',
		},
		result: [
			{
				item: '+80%',
				name: 'Рост онлайн-запросов'
			},
			{
				descrip:
					'Новый сайт стал важным инструментом для привлечения новых пациентов, предоставив доступ к актуальной информации 24/7, что улучшило видимость врача в интернете.',
			},
		],
	},
	{
		slug: 'alisher-baxromovich',
		link: {
			web: 'https://alisher-lor.uz/',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '+2,840', name: 'кликов на сайт / за 1 месяц' },
			{ item: '0,11$', name: 'цена за клик / за 1 месяц' },
			{ item: '+13,63%', name: 'CTR / за 1 месяц' },
		],
	},
	{
		slug: 'nafisa-shuxratovna',
		link: {
			web: 'https://www.stom-tashkent.uz/',
			telegram: '',
			instagram: '',
		},
		result: [
			{
				item: 'Увеличение числа клиентов через сайт',
			},
			{
				item: 'Улучшение пользовательского опыта',
			},
			{
				descrip: 'Сайт стал важным инструментом для привлечения пациентов и повышения их осведомленности о профессиональных услугах доктора.',
			},
		],
	},
	{
		slug: 'smile-design',
		link: {
			web: '',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '2,450', name: 'кликов на сайт / за 1 месяц' },
			{ item: '0,05$', name: 'цена за клик / за 1 месяц' },
			{ item: '11,64%', name: 'CTR / за 1 месяц' },
			{ descrip: 'Рекламная кампания позволила привлечь значительный трафик и уменьшить стоимость привлечения клиентов.' },
		],
	},
	{
		slug: 'sanjar-akbarovich',
		link: {
			web: 'https://dr-psixoterapevt.uz',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '14,500', name: 'кликов на сайт' },
			{ item: '0,07$', name: 'цена за клик' },
			{ item: '14,11%', name: 'CTR' },
			{descrip: 'Результаты показывают значительное увеличение онлайн-активности, органического трафика и успех рекламных кампаний, что привело к росту числа пациентов и укреплению связи с аудиторией.' },
		],
	},
	{
		slug: 'baxtiyor-nadjullayevich',
		link: {
			web: '',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '4,820', name: 'кликов на сайт / за 1 месяц' },
			{ item: '0,10$', name: 'цена за клик / за 1 месяц' },
			{ item: '14,22%', name: 'CTR / за 1 месяц' },
			{  descrip: 'Результатом работы стало значительное увеличение посещаемости сайта и роста числа пациентов, что позволило врачу активно наращивать количество консультаций и операций.' },
		],
	},
	{
		slug: 'intermed',
		link: {
			web: 'https://imed.uz/',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '+17%', name: 'Конверсия с сайта / за 1 месяц' },
			{ item: '200+ лидов', name: 'По цене 2,1$ за лид в течение 1 месяца' },
			{ item: '+15%', name: 'Увеличение числа подписчиков / за 1 месяц' },
			{  descrip: 'Реализация проекта привела к значительному увеличению числа лидов и улучшению конверсии с сайта.' },
		],
	},
	{
		slug: 'mostona-med',
		link: {
			web: '',
			telegram: '',
			instagram: 'https://www.instagram.com/nargiza_xamidulayevna/',
		},
		result: [
			{
				item: 'Контент-менеджмент для SMM',
			},
			{
				descrip: 'Предоставленные материалы позволили команде клиники эффективно продвигать свои услуги и сохранять постоянное присутствие в соцсетях.',
			},
		],
	},
	{
		slug: 'mrj-trade',
		link: {
			web: 'https://mrj-trade.com',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '1,560', name: 'Кликов на сайт за месяц' },
			{ item: '0,32$', name: 'цена за клик ' },
			{ item: '11,22%', name: 'CTR' },
			{ item: 'Фирменный стиль', name: 'Логотип, раздаточный материал' },
			{
				descrip: 'Компания успешно вышла на рынок, сайт был переведен на английский язык, а рекламные кампании привлекли значительное количество целевых клиентов.',
			},
		],
	},
	{
		slug: 'dr-odil-alisherovich',
		link: {
			web: 'https://dr-odil.uz/',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '750' , name: ' подписчиков в Telegram' },
			{ item: '1079' , name: ' подписчиков в Instagram' },
			{ item: 'Имидж врача' , name: 'Укрепление личного бренда врача' },
			{
				descrip: 'Реализованные стратегии, включая новый сайт, фирменный стиль, активность в SMM и блог в Telegram, помогли укрепить имидж врача и сохранить постоянное взаимодействие с пациентами.',
			},
		],
	},
	{
		slug: 'nafisa-shuxratovna',
		link: {
			web: '',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: 'Увеличение числа клиентов через сайт' },
			{ item: 'Улучшение пользовательского опыта' },
			{ descrip: 'Сайт стал важным инструментом для привлечения пациентов и повышения их осведомленности о профессиональных услугах доктора.' },
		],
	},
	{
		slug: 'ant-group',
		link: {
			web: '',
			telegram: '',
			instagram: 'https://www.instagram.com/antgroup_uz/',
		},
		result: [
			{
				item: 'SMM',
				name: 'Instagram / Telegram / YouTube',
			},
			{
				descrip: "SMM-стратегия способствовала активному взаимодействию с аудиторией и укреплению бренда компании в социальных сетях, что привело к значительному росту вовлеченности и подписчиков."
			}
		],
	},
	{
		slug: 'xayrullo-rahmatullaevich',
		link: {
			web: '',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: 'Профессиональный имидж' },
			{ item: 'Увеличение доверия'},
			{ descrip: 'Создание фирменного стиля и информационного сайта значительно укрепило личный бренд врача, повысив его узнаваемость и профессиональный статус. Благодаря этому, доверие со стороны пациентов возросло, что привело к увеличению числа обращений и записей на прием.' },
		],
	},
	{
		slug: 'alisher-baxromovich',
		link: {
			web: '',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '1,560', name: 'кликов на сайт /за 1 месяц' },
			{ item: '0,76$', name: 'цена за клик /за 1 месяц' },
			{ item: '8,22%', name: 'CTR за /1 месяц' },
			{ descrip: 'Эти результаты демонстрируют успешное привлечение новых пациентов через интернет, значительное увеличение посещаемости сайта и эффективное использование контекстной рекламы для достижения целей клиента.'},
		],
	},
	{
		slug: 'sanjar-akbarovich',
		link: {
			web: 'https://dr-psixoterapevt.uz',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '14,500', name: 'кликов на сайт' },
			{ item: '0,07$', name: 'цена за клик' },
			{ item: '14,11%', name: 'CTR' },
			{ descrip: 'Результаты показывают значительное увеличение онлайн-активности, органического трафика и успех рекламных кампаний, что привело к росту числа пациентов и укреплению связи с аудиторией.' },
		],
	},
	{
		slug: 'aziza-shaxzadeevna',
		link: {
			web: '',
			telegram: '',
			instagram: '',
		},
		result: [
			{ item: '+80%', name: 'Рост онлайн-запросов' },
			{ descrip: 'Новый сайт стал важным инструментом для привлечения новых пациентов, предоставив доступ к актуальной информации 24/7, что улучшило видимость врача в интернете.'},
			
		],
	},
	// Add more results with different slugs if needed
]

const Result = () => {
	const { slug } = useParams() // Get slug from the URL
	const [filteredResult, setFilteredResult] = useState({ result: [], link: '' })
	const [modalLinks, setModalLinks] = useState(false)

	const caseResultModalOpen = () => setModalLinks(!modalLinks)

	useEffect(() => {
		// Find the result based on the slug
		const resultData = obtainedResult.find(item => item.slug === slug)
		if (resultData) {
			setFilteredResult(resultData) // Set both result and link
		}
	}, [slug]) // Run this effect when slug changes

	return (
		<div className='mt-[20px] py-[30px] px-[24px] rounded-[30px] bg-white 3xl:flex 3xl:items-center relative mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px]'>
			{/* Левая часть: Заголовок и кнопка */}
			<div className='3xl:w-[45%] mb-[30px] 3xl:mb-0 3xl:flex 3xl:flex-col'>
				{/* Заголовок */}
				<p className='text-[#7B72EB] font-bold text-[28px] mb-4 3xl:text-[50px] w-[50%] 3xl:mb-[30px]'>
					Полученный результат
				</p>

				{/* Кнопка */}
				{filteredResult.link ? (
					<button
						onClick={caseResultModalOpen}
						// Use the link from filtered result
						className='block text-center text-white bg-[#7B72EB] py-[20px] px-[30px] w-[90%] rounded-[30px] font-bold mt-4 absolute bottom-[20px] mdl:w-[50%] 3xl:w-[50%] 3xl:relative 3xl:mt-[30px]'
					>
						Перейти
					</button>
				) : null}
			</div>

			<CaseResultModalSocials
				isOpen={modalLinks}
				onClose={caseResultModalOpen}
				link={filteredResult.link}
			/>
			{/* Правая часть: результаты */}
			<div className='flex flex-col 3xl:flex 3xl:w-[50%] 3xl:justify-between mb-[80px] mdl:flex-row mdl:justify-between mdl:flex-wrap mdl:gap-[20px]'>
				{filteredResult?.result.map((item, index) => (
					<div key={index} className='mb-6 3xl:mb-0'>
						<p className='text-[35px] mdl:text-[40px] font-medium text-[#010101] 3xl:text-[50px]'>
							{item?.item}
						</p>
						<p className='text-[14px] mdl:text-[20px] text-[#A6A6A6] 3xl:text-[18px] font-robotoFlex'>
							{item?.name}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Result
