"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // For getting the slug from the URL
import CaseResultModalSocials from '../Modal/CaseResultModal';

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
		  name: 'Разработанный сайт стал успешным информационным ресурсом, который привлекает внимание потенциальных клиентов и повышает имидж врача. Фирменный стиль был успешно внедрен, что помогло повысить узнаваемость врача на рынке.',
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
		  name: 'Разработанный сайт стал хорошим ресурсом для пациентов, предоставив всю информацию о враче в свободном доступе 24 / 7, что способствовало увеличению видимости в интернете.',
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
		{ item: '+2,840', name: 'кликов на сайт' },
		{ item: '0,11$', name: 'цена за клик' },
		{ item: '+13,63%', name: 'CTR' },
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
		  name: 'Разработанный сайт оказался удобным и информативным, что позволило пациентам быстро находить необходимую информацию о стоматологе и услугах.',
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
		{ item: '2,450', name: 'кликов на сайт' },
		{ item: '0,05$', name: 'цена за клик' },
		{ item: '11,64%', name: 'CTR' },
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
		{ item: '14,5 тыс', name: 'кликов на сайт' },
		{ item: '0,07$', name: 'цена за клик' },
		{ item: '14,11%', name: 'CTR' },
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
		{ item: '4,820', name: 'кликов на сайт' },
		{ item: '0,10$', name: 'цена за клик' },
		{ item: '14,22%', name: 'CTR' },
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
		{ name: 'Конверсия с сайта увеличилась на 17%.' },
		{ name: 'Запущенная реклама приносит 200+ лидов по цене 2,1$ за лид в течении 1 месяца' },
		{ name: 'Эти результаты подтверждают успешное привлечение клиентов и повышение интереса к продуктам компании.' },
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
		  name: 'Мы предоставили клинике все необходимые материалы для работы, что позволило их команде эффективно справляться с задачами.',
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
		{ item: '1,560', name: 'кликов на сайт / мес' },
		{ item: '0,32$', name: 'цена за клик / мес' },
		{ item: '11,22%', name: 'CTR  / мес' },
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
		{ name: '750 подписчиков в Telegram' },
		{ name: '1070 подписчиков в Instagram' },
		{
		  name: 'Успешно реализованы: фирменный стиль, новый сайт, активное присутствие в SMM и блог в Telegram. Эти элементы помогли укрепить имидж врача и поддерживать связь с пациентами.',
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
		{ item: '1,560', name: 'кликов на сайт' },
		{ item: '0,76$', name: 'цена за клик' },
		{ item: '8,22%', name: 'CTR' },
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
		  name: 'Успешно проведены SMM-мероприятия, что способствовало росту взаимодействия с аудиторией и укреплению бренда компании.',
		},
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
		{ item: '1,560', name: 'кликов на сайт' },
		{ item: '0,76$', name: 'цена за клик' },
		{ item: '8,22%', name: 'CTR' },
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
		{ item: '1,560', name: 'кликов на сайт' },
		{ item: '0,76$', name: 'цена за клик' },
		{ item: '8,22%', name: 'CTR' },
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
		{ item: '1,560', name: 'кликов на сайт' },
		{ item: '0,76$', name: 'цена за клик' },
		{ item: '8,22%', name: 'CTR' },
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
		{ item: '1,560', name: 'кликов на сайт' },
		{ item: '0,76$', name: 'цена за клик' },
		{ item: '8,22%', name: 'CTR' },
	  ],
	},
	// Add more results with different slugs if needed
  ];
  

const Result = () => {
	const { slug } = useParams(); // Get slug from the URL
	const [filteredResult, setFilteredResult] = useState({ result: [], link: '' });
	const [modalLinks , setModalLinks] = useState(false)

	const caseResultModalOpen = () => setModalLinks(!modalLinks)

	useEffect(() => {
		// Find the result based on the slug
		const resultData = obtainedResult.find((item) => item.slug === slug);
		if (resultData) {
			setFilteredResult(resultData); // Set both result and link
		}
	}, [slug]); // Run this effect when slug changes

	return (
		<div className="mt-[20px] py-[30px] px-[24px] rounded-[30px] bg-white 3xl:flex 3xl:items-center relative mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px]">
			{/* Левая часть: Заголовок и кнопка */}
			<div className="3xl:w-[45%] mb-[30px] 3xl:mb-0 3xl:flex 3xl:flex-col">
				{/* Заголовок */}
				<p className="text-[#7B72EB] font-bold text-[28px] mb-4 3xl:text-[50px] w-[50%] 3xl:mb-[30px]">
					Полученный результат
				</p>

				{/* Кнопка */}
				{filteredResult.link ? <button
				onClick={caseResultModalOpen}
					 // Use the link from filtered result
					className="block text-center text-white bg-[#7B72EB] py-[20px] px-[30px] w-[90%] rounded-[30px] font-bold mt-4 absolute bottom-[20px] mdl:w-[50%] 3xl:w-[50%] 3xl:relative 3xl:mt-[30px]"
				>
					Перейти
				</button> : null}
				
			</div>

<CaseResultModalSocials isOpen={modalLinks}
onClose={caseResultModalOpen} link={filteredResult.link}/>
			{/* Правая часть: результаты */}
			<div className="flex flex-col 3xl:flex 3xl:w-[50%] 3xl:justify-between mb-[80px] mdl:flex-row mdl:justify-between mdl:flex-wrap mdl:gap-[20px]">
				{filteredResult?.result.map((item, index) => (
					<div key={index} className="mb-6 3xl:mb-0">
						<p className="text-[35px] mdl:text-[40px] font-medium text-[#010101] 3xl:text-[50px]">
							{item?.item}
						</p>
						<p className="text-[14px] mdl:text-[20px] text-[#A6A6A6] 3xl:text-[18px] font-robotoFlex">
							{item?.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Result;
