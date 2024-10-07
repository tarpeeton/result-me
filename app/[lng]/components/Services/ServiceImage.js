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
	  title: {
		ru: 'Для чего\nнужен сайт',
		en: 'Why You Need a Website',
		uz: 'Nima uchun sayt kerak'
	  },
	  subtitle: {
		ru: 'Сайт — это ваше цифровое представительство. Он помогает бизнесу быть доступным онлайн, привлекая новых клиентов и создавая доверие к вашему бренду.',
		en: 'A website is your digital representation. It helps your business stay accessible online, attracting new customers and building trust in your brand.',
		uz: 'Sayt - sizning raqamli vakilingiz. Uning yordamida biznes onlayn rejimda bo’ladi, yangi mijozlar jalb etiladi va brendingizga bo’lgan ishonch oshadi'
	  }
	},
	{
	  slug: 'web-development',
	  img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
	  title: {
		ru: 'Как это работает',
		en: 'How It Works',
		uz: 'U qanday ishlaydi'
	  },
	  subtitle: {
		ru: 'Сайт помогает вашему бизнесу стать доступным 24/7, позволяя пользователям находить вас, изучать услуги и связываться с вами в любое удобное время.',
		en: 'A website makes your business available 24/7, allowing users to find you, explore your services, and contact you at any convenient time. ',
		uz: "Sayt biznesingizga 24/7 ochiq bo'lishiga yordam beradi, u foydalanuvchilarga sizni topish, xizmatlaringizni o'rganish va qulay vaqtda siz bilan bog'lanish imkonini beradi"
	  }
	},
	{
	  slug: 'web-development',
	  img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
	  title: {
		ru: 'Что я получу',
		en: 'What You Will Get ',
		uz: 'Men nimaga ega bo’laman'
	  },
	  subtitle: {
		ru: 'Ваш сайт будет эффективным инструментом для привлечения клиентов, увеличения охвата и роста бизнеса в цифровом пространстве.',
		en: 'Your website will be an effective tool for attracting clients, expanding your reach, and driving business growth in the digital space.',
		uz: "Saytingiz mijozlarni jalb qilish, raqamli makonda biznes qamrovini oshirish va uni rivojlantirish uchun samarali vosita bo'ladi."
	  }
	},
	{
	  slug: 'telegram-bot-development',
	  img: tg,
	  title: {
		ru: 'Для чего нужна\nэта услуга',
		en: 'Why You Need This Service',
		uz: 'Bu xizmat nima uchun kerak?'
	  },
	  subtitle: {
		ru: 'Разработка Telegram ботов помогает автоматизировать взаимодействие с клиентами, экономить время и улучшить качество обслуживания. Боты могут обрабатывать запросы, принимать заказы и предоставлять информацию 24/7.',
		en: 'Developing Telegram bots helps automate client interactions, saving time and improving service quality. Bots can handle requests, take orders, and provide information 24/7.',
		uz: "Telegram-botlarini rivojlantirish mijozlar bilan aloqani avtomatlashtirishga, vaqtni tejashga va xizmat ko‘rsatish sifatini oshirishga yordam beradi. Botlar 24/7 so'rovlarni qayta ishlashi, buyurtmalar olishi va ma'lumot taqdim etishlari mumkin."
	  }
	},
	{
	  slug: 'telegram-bot-development',
	  img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
	  title: {
		ru: 'Как это работает',
		en: 'How It Works',
		uz: 'Bu qanday ishlaydi'
	  },
	  subtitle: {
		ru: 'Бот работает как виртуальный помощник, моментально реагируя на запросы пользователей. Это увеличивает скорость обслуживания, улучшает клиентский опыт и позволяет быстро решать задачи, от заказа до консультации.',
		en: 'The bot acts as a virtual assistant, instantly responding to user queries. This increases service speed, improves the customer experience, and allows for quick task resolutions, from orders to consultations. ',
		uz: "Bot virtual yordamchi sifatida ishlaydi, foydalanuvchi so‘rovlariga darrov javob beradi. Bu xizmat ko'rsatish tezligini oshiradi, mijozlar tajribasini yaxshilaydi va buyurtma berishdan to konsultatsiyagacha vazifalarni tezda hal qilish imkonini beradi."
	  }
	},
	{
	  slug: 'telegram-bot-development',
	  img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
	  title: {
		ru: 'Что я получу',
		en: 'What You Will Get  ',
		uz: 'Men nimaga ega bo’laman'
	  },
	  subtitle: {
		ru: 'Вы получите удобного и умного помощника, который автоматизирует рутинные процессы, сокращает время обработки запросов и повышает удовлетворённость клиентов, улучшая их взаимодействие с вашим бизнесом.',
		en: 'You will receive a smart and convenient assistant that automates routine processes, reduces query handling time, and enhances customer satisfaction by improving their interaction with your business.  ',
		uz: "Muntazam jarayonlarni avtomatlashtiradigan, so'rovlarni ko'rib chiqish vaqtini qisqartiradigan va mijozlarning qoniqishini oshiradigan, ularning biznesingiz bilan o'zaro aloqani yaxshilaydigan qulay va aqlli yordamchiga ega bo’lasiz."
	  }
	},
	{
	  slug: 'smm',
	  img: SMM,
	  title: {
		ru: 'Для чего нужна\nэта услуга',
		en: 'Why You Need This Service',
		uz: 'Bu xizmat nima uchun kerak?'
	  },
	  subtitle: {
		ru: 'SMM помогает вашему бизнесу быть заметным в социальных сетях. Это инструмент для привлечения и удержания внимания целевой аудитории, увеличения узнаваемости бренда и взаимодействия с клиентами.',
		en: 'SMM helps your business stay visible on social media. It’s a tool for attracting and retaining your target audience’s attention, increasing brand awareness, and interacting with clients.  ',
		uz: "SMM biznesingiz ijtimoiy tarmoqlarda ko'rinib turishga yordam beradi. Bu maqsadli auditoriyani jalb qilishga va e'tiborini ushlab qolishga, brendni ko’proq tanilishga va mijozlar bilan o'zaro aloqani oshirishga qaratilgan vosita."
	  }
	},
	{
	  slug: 'smm',
	  img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
	  title: {
		ru: 'Как это работает',
		en: 'How It Works',
		uz: 'Bu qanday ishlaydi'
	  },
	  subtitle: {
		ru: 'SMM увеличивает вашу видимость в социальных сетях, делая ваш контент доступным для тех, кто заинтересован в ваших услугах или товарах. Это способствует росту аудитории и повышению уровня доверия.',
		en: 'SMM enhances your presence on social networks, making your content accessible to those interested in your services or products. It helps grow your audience and build trust.',
		uz: "SMM ijtimoiy tarmoqlardagi ko'rinishingizni oshiradi, shunda xizmatlaringiz yoki mahsulotlaringiz bilan qiziqayotganlar kontentingizni bemalol ko’ra oladi. Bu auditoriya va ishonch darajasi o'sishiga hissa qo’shadi."
	  }
	},
	{
	  slug: 'smm',
	  img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
	  title: {
		ru: 'Что я получу',
		en: 'What You Will Get  ',
		uz: 'Men nimaga ega bo’laman'
	  },
	  subtitle: {
		ru: 'Вы получите эффективную стратегию продвижения, которая увеличит количество подписчиков, улучшит взаимодействие с клиентами и повысит конверсию ваших предложений, превращая подписчиков в лояльных клиентов.',
		en: 'You will receive an effective promotion strategy that will increase the number of followers, improve client interactions, and boost the conversion of your offers, turning followers into loyal customers.',
		uz: "Siz obunachilar sonini ko'paytiradigan, mijozlar bilan o'zaro aloqani yaxshilaydigan va takliflaringizning konversiyasini oshiradigan, obunachilarni sodiq mijozlarga aylantiradigan samarali reklama strategiyasiga ega bo’lasiz."
	  }
	},
	{
	  slug: 'ads-launch',
	  img: Advertising,
	  title: {
		ru: 'Для чего нужна\nэта услуга',
		en: 'Why You Need This Service',
		uz: 'Bu xizmat nima uchun kerak?'
	  },
	  subtitle: {
		ru: 'Контекстная и таргетированная реклама помогает показывать ваш бизнес именно тем, кто уже заинтересован в ваших товарах или услугах. Это ускоряет привлечение клиентов и увеличивает конверсию.',
		en: 'Ads are shown to people who are searching for your specific offers or similar products. They are tailored to the right audience, helping you attract potential customers more quickly and accurately.',
		uz: "Kontekstli va target reklama aynan mahsulotingizga yoki xizmatlaringizga qiziqayotganlarga biznesingizni ko'rsatishga yordam beradi. Bu mijozlarni jalb qilishni tezlashtiradi va konversiyani oshiradi."
	  }
	},
	{
	  slug: 'ads-launch',
	  img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
	  title: {
		ru: 'Как это работает',
		en: 'How It Works',
		uz: 'Bu qanday ishlaydi'
	  },
	  subtitle: {
		ru: 'Реклама показывается людям, которые ищут именно ваши предложения или похожие товары. Она настраивается на нужную аудиторию, что помогает быстрее и точнее привлечь потенциальных клиентов.',
		en: 'Ads are shown to people who are searching for your specific offers or similar products. They are tailored to the right audience, helping you attract potential customers more quickly and accurately.',
		uz: "Reklama aynan sizning takliflaringizni yoki o'xshash mahsulotlarni qidirayotgan odamlarga ko'rsatiladi. U kerakli auditoriyaga sozlanadi, bu potentsial mijozlarni yanada tez va to’g’ri jalb qilishga yordam beradi."
	  }
	},
	{
	  slug: 'ads-launch',
	  img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
	  title: {
		ru: 'Что я получу',
		en: 'What You Will Get  ',
		uz: 'Men nimaga ega bo’laman'
	  },
	  subtitle: {
		ru: 'Вы получите поток целевых клиентов, увеличение продаж и более эффективное использование рекламного бюджета. Ваши объявления будут работать на конкретную аудиторию, готовую к покупке.',
		en: 'You will get a flow of targeted clients, increased sales, and more efficient use of your advertising budget. Your ads will work for a specific audience ready to make a purchase.',
		uz: "Siz maqsadli mijozlar oqimiga ega bo’lib, sotuvlaringiz ko'payadi va reklama byudjetidan samaraliroq foydalanasiz. Eʼlonlaringiz sotib olishga tayyor bo'lgan muayyan auditoriyaga mo'ljallangan bo’ladi."
	  }
	},
	{
	  slug: 'seo',
	  img: SEO,
	  title: {
		ru: 'Для чего нужна\nэта услуга',
		en: 'Why You Need This Service',
		uz: 'Bu xizmat nima uchun kerak?'
	  },
	  subtitle: {
		ru: 'SEO необходимо для того, чтобы ваш сайт занимал высокие позиции в поисковых системах. Это помогает привлечь больше органического трафика и сделать ваш бизнес видимым для целевой аудитории.',
		en: 'SEO is essential to ensure your website ranks high in search engines. This helps to attract more organic traffic and makes your business more visible to your target audience.',
		uz: "Bu xizmat nima uchun kerak? SEO saytingiz qidiruv tizimlarida yuqori o'rinni egallashi uchun juda muhim. Bu ko'proq organik trafikni jalb qilishga va biznesingizni maqsadli auditoriyaga ko'rinadigan qilishga yordam beradi."
	  }
	},
	{
	  slug: 'seo',
	  img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
	  title: {
		ru: 'Как это работает',
		en: 'How It Works',
		uz: 'Bu qanday ishlaydi'
	  },
	  subtitle: {
		ru: 'SEO оптимизирует ваш сайт под поисковые запросы ваших клиентов. Это увеличивает шанс, что ваш сайт будет найден в результатах поиска, привлекая заинтересованных посетителей и улучшая ваши позиции в поисковых системах.',
		en: 'SEO optimizes your website for your clients’ search queries. This increases the likelihood that your site will be found in search results, attracting interested visitors and improving your rankings in search engines.',
		uz: "SEO mijozlaringizning qidiruv so'rovlari uchun saytingizni optimallashtiradi. Bu saytingizni qidiruv natijalarida topish imkoniyatini oshiradi, qiziquvchi tashrif buyuruvchilarni jalb qilib, qidiruv tizimlarida pozisiyalaringizni yaxshilaydi."
	  }
	},
	{
	  slug: 'seo',
	  img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
	  title: {
		ru: 'Что я получу',
		en: 'What You Will Get  ',
		uz: 'Men nimaga ega bo’laman'
	  },
	  subtitle: {
		ru: 'Вы получите лучшее ранжирование сайта в поисковых системах, больше органического трафика и увеличение количества потенциальных клиентов, которые ищут именно ваши продукты или услуги.',
		en: 'You will achieve higher search engine rankings, increased organic traffic, and a greater number of potential clients looking for your specific products or services.',
		uz: 'Qidiruv tizimlarida saytni ranjlashga, ko’proq organik trafik va aynan sizning mahsulotlaringizni yoki xizmatlaringizni qidirayotgan ko‘proq potentsial mijozlarga ega bo‘lasiz.'
	  }
	},
	{
	  slug: 'branding',
	  img: Branding,
	  title: {
		ru: 'Для чего нужна\nэта услуга',
		en: 'Why You Need This Service',
		uz: 'Bu xizmat nima uchun kerak?'
	  },
	  subtitle: {
		ru: 'Брендинг помогает вашему бизнесу выделиться среди конкурентов и создать уникальный образ, который запомнится вашим клиентам. Это ключ к построению долгосрочных отношений с аудиторией и укреплению доверия.',
		en: 'Branding helps your business differentiate itself from competitors and establish a unique identity that resonates with your clients. It is key to building long-term relationships with your audience and fostering trust.',
		uz: "Brending biznesingizga raqobatchilardan ajralib turishiga va mijozlaringizga eslab qoladigan noyob tasvirni yaratishga yordam beradi. Bu auditoriyangiz bilan uzoq muddatli munosabatlarni o'rnatish va ishonchni mustahkamlashning kalitidir."
	  }
	},
	{
	  slug: 'branding',
	  img: 'https://ucarecdn.com/327eed30-073c-4729-a985-f3d95e7c68dc/-/preview/230x230/',
	  title: {
		ru: 'Как это работает',
		en: 'How It Works',
		uz: 'Bu qanday ishlaydi'
	  },
	  subtitle: {
		ru: 'Брендинг создаёт узнаваемый стиль, который привлекает внимание и запоминается. Это помогает формировать положительное восприятие бренда, укреплять связь с клиентами и увеличивать лояльность к вашей компании.',
		en: 'Branding creates a recognizable style that captures attention and leaves a lasting impression. It helps to form a positive perception of the brand, strengthen customer connections, and increase loyalty to your company.  ',
		uz: 'Brending diqqatni tortadigan va eslab qoladigan taniqli uslubni yaratadi. Bu brendni ijobiy tarzda qabul qilishga, mijozlar bilan aloqani mustahkamlashga va kompaniyangizga sodiqlikni oshirishga yordam beradi.'
	  }
	},
	{
	  slug: 'branding',
	  img: 'https://ucarecdn.com/650068a2-cc46-4457-9900-3eae3c7a5abf/-/preview/230x230/',
	  title: {
		ru: 'Что я получу',
		en: 'What You Will Get  ',
		uz: 'Men nimaga ega bo’laman'
	  },
	  subtitle: {
		ru: 'Вы получите уникальный бренд с чёткой идентификацией, который выделяется на рынке, вызывает доверие у клиентов и способствует росту продаж, благодаря сильной визуальной и эмоциональной связи с аудиторией.',
		en: 'You will receive a unique brand with clear identification that stands out in the market, inspires trust among customers, and promotes sales growth through a strong visual and emotional connection with the audience.',
		uz: "Bozorda ajralib turadigan, mijozlar ishonchini uyg'otadigan va auditoriya bilan kuchli vizual va hissiy aloqa orqali sotuvni oshirishga hissa qo’shadigan aniq identifikatsiyaga ega noyob brendga ega bo'lasiz."
	  }
	}
  ];
  

const ServiceImage = () => {
	const [filteredData , setFilteredData] = useState([])
	const {slug , lng} = useParams()

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
				{formatText(data.title[lng])}
			</h1>
						<p className='font-robotoFlex text-[15px] text-titleDark font-normal mt-[12px] mdl:text-[20px] mdl:mt-[25px]'>
							{formatText(data.subtitle[lng])}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default ServiceImage
