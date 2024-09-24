import Image from 'next/image'

const data = [
	{
		id: 1,
		number: '01',
		title: 'Консультация',
		img: 'https://ucarecdn.com/68d3b9df-ca7d-4fa7-bcc7-280b2ba43579/-/preview/12x14/',
		imgtitle: 'С участием заказчика',
		subtitle:
			'Консультация позволяет лучше понять задачи и подобрать оптимальные услуги',
		sel: 'Цель',
		selTitle: 'Определить задачи и предложить решения',
	},
	{
		id: 2,
		number: '02',
		title: 'Заключение договора',
		img: 'https://ucarecdn.com/68d3b9df-ca7d-4fa7-bcc7-280b2ba43579/-/preview/12x14/',
		imgtitle: 'С участием заказчика',
		subtitle:
			'Фиксируются условия работы, сроки выполнения, объем услуг и стоимость. Это гарантирует прозрачность и защиту интересов обеих сторон',
		sel: 'Цель',
		selTitle: 'Зафиксировать условия и защитить интересы',
	},
	{
		id: 3,
		number: '03',
		title: 'Сбор информации',
		img: 'https://ucarecdn.com/68d3b9df-ca7d-4fa7-bcc7-280b2ba43579/-/preview/12x14/',
		imgtitle: 'С участием заказчика',
		subtitle:
			'Собирается вся необходимая информация: данные о бизнесе, целевой аудитории, текущие инструменты продвижения, показатели эффективности, конкуренты',
		sel: 'Цель',
		selTitle: 'Получить данные для анализа',
	},
	{
		id: 4,
		number: '04',
		title: 'Анализ и исследование',
		subtitle:
			'Проводится глубокий анализ собранных данных. Это помогает определить сильные и слабые стороны и построить эффективную стратегию',
		sel: 'Цель',
		selTitle: 'Определить возможности и точки роста',
	},
	{
		id: 5,
		number: '05',
		title: 'Разработка стратегии',
		subtitle:
			'Создается индивидуальная маркетинговая стратегия, основанная на результатах анализа. Включает выбор каналов продвижения, форматов контента и ключевых действий для достижения целей',
		sel: 'Цель',
		selTitle: 'Составить план для достижения целей',
	},
	{
		id: 6,
		number: '06',
		title: 'Согласование',
		img: 'https://ucarecdn.com/68d3b9df-ca7d-4fa7-bcc7-280b2ba43579/-/preview/12x14/',
		imgtitle: 'С участием заказчика',
		subtitle:
			'Подготовленная стратегия обсуждается с заказчиком, при необходимости вносятся коррективы, после чего утверждается план работы',
		sel: 'Цель',
		selTitle: 'Утвердить план',
	},
	{
		id: 7,
		number: '07',
		title: 'Основная работа над проектом',
		subtitle:
			'На данном этапе выполняется вся основная работа: создание контента, разработка IT продуктов, настройка рекламных кампаний, а также создание других материалов проекта',
		sel: 'Цель',
		selTitle: 'Реализовать все запланированные действия',
	},
	{
		id: 8,
		number: '08',
		title: 'Запуск и реализация',
		subtitle:
			'Запускается активная фаза проекта: публикация контента, запуск рекламных кампаний, внедрение IT-решений',
		sel: 'Цель',
		selTitle: 'Обеспечить успешный запуск',
	},
	{
		id: 9,
		number: '09',
		title: 'Мониторинг и корректировка',
		subtitle:
			'Постоянно отслеживаются результаты, анализируются показатели и эффективность кампаний. В случае необходимости вносятся корректировки для улучшения результатов и повышения отдачи',
		sel: 'Цель',
		selTitle: 'Оптимизировать процессы для улучшения результатов',
	},
	{
		id: 10,
		number: '10',
		title: 'Отчетность и подведение итогов',
		subtitle:
			'Предоставляется отчет о проделанной работе, затраченных средств на рекламные кампании, достигнутых результатов и планах на следующий месяц. Отчет включает рекомендации для дальнейшего улучшения и развития проекта',
		sel: 'Цель',
		selTitle:
			'Отчитаться о потраченных средствах на рекламу и выполненных задачах',
	},
	{
		id: 11,
		number: '11',
		title: 'Поддержка и развитие',
		subtitle:
			'Продолжается поддержка проекта после его завершения. Предлагаются долгосрочные решения для дальнейшего развития бизнеса, улучшения показателей и удержания достигнутых результатов',
		sel: 'Цель',
		selTitle: 'Обеспечить долгосрочный рост проекта',
	},
]

const Steps = () => {
	return (
		<div className='relative'>
			<div className='flex flex-col'>
				{/* CRAD */}
				{data.map(step => (
					<div
					className={`flex flex-col py-[40px] px-[16px] ${
						step.id === 7 ? 'bg-violet100' : 'bg-white100'
					} ${step.id <= 10 ? 'border-b border-[#F0F0F0]' : ''}`} // Apply border-b conditionally
					key={step.id}
				>
						<div className='flex items-center rounded-[10px] border border-[#F0F0F0] p-[10px] text-center w-[50px] justify-center'>
							<p
								className={` text-[23px] font-medium ${
									step.id === 7 ? 'text-white' : 'text-violet100'
								}`}
							>
								{step.number}
							</p>
						</div>
						<div className='flex flex-col mt-[25px]'>
							<div className='flex flex-row gap-[8px]'>
								{step.img && (
									<Image
										src={step.img}
										width={16}
										height={16}
										quality={100}
										alt={step.imgtitle}
										className='object-contain'
									/>
								)}

								<p className='text-violet100 text-[15px] font-semibold font-montserrat'>
									{step.imgtitle}
								</p>
							</div>
						</div>
						<div className='mt-[10px] flex flex-col gap-[10px]'>
							<p
								className={` font-bold text-[23px] ${
									step.id === 7 ? 'text-white100' : 'text-titleDark'
								}`}
							>
								{step.title}
							</p>
							<p
								className={` ${
									step.id === 7 ? 'text-white100' : 'text-titleDark'
								} tex-[15px] font-medium`}
							>
								{step.subtitle}
							</p>
						</div>
						<div className={`mt-[20px] rounded-[20px] py-[25px] px-[20px] flex flex-col gap-[10px] ${step.id === 7 ?`bg-white bg-opacity-15` : 'bg-violet100 bg-opacity-10 '}`}>
							<p
								className={`text-[20px] font-semibold  font-montserrat ${
									step.id === 7 ? 'text-white' : 'text-violet100'
								}`}
							>
								{step.sel}
							</p>
							<p
								className={`text-[15px]  font-medium font-montserrat leading-[19px] ${
									step.id === 7 ? 'text-white' : 'text-violet100'
								}`}
							>
								{step.selTitle}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Steps
