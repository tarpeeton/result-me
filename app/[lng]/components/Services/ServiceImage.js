import Image from 'next/image'

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
]

const ServiceImage = () => {
	const formatText = (text) => {
		return text.split('\n').map((str, index) => (
			<span key={index}>
				{str}
				<br />
			</span>
		))
	}

	const getOrderClass = (i) => {
		// For even index (0, 2), image will have order-2, and for odd index (1), image will have order-1
		return i % 2 === 0 ? 'mdl:order-[2] 2xl:order-[-1]' : 'mdl:order-[-1]'
	}

	return (
		<div className='mt-[20px] mdl:mt-[20px] 3xl:mt-[25px] rounded-[30px] mdl:rounded-[40px] flex flex-col 3xl:flex-row py-[30px] px-[24px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] bg-white mx-[16px] mdl:mx-[20px] 3xl:mx-[30px]'>
			{Data.map((data, i) => (
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
						<h1 className='text-titleDark font-bold text-[23px] mdl:text-[40px] mt-[15px] '>
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
