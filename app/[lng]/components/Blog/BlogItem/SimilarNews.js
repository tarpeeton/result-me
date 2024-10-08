'use client'
import Link from 'next/link'
import { GrLinkNext } from 'react-icons/gr'
import Links from './Links'
import { useParams } from 'next/navigation'


const similarNewsData = [
	{
		id: 9,
		slug: 'blog10',
		title: {
		  uz: 'Teletibbiyot qanday ishlaydi: onlayn-konsultatsiyalar afzalliklari va imkoniyatlari',
		  ru: 'Как работает телемедицина: преимущества и возможности онлайн-консультаций',
		  en: 'How Telemedicine Works: Advantages and Opportunities of Online Consultations',
		},
		description: {
		  uz: 'Teletibbiyotni klinikangizga qanday joriy etishni va onlayn-konsultatsiyalar bemorlar va shifokorlarga qanday imtiyozlar taqdim etishini bilib oling.',
		  ru: 'Узнайте, как внедрить телемедицину в вашу клинику и какие преимущества онлайн-консультации предлагают пациентам и врачам.',
		  en: ' Learn how to implement telemedicine in your clinic and what benefits online consultations offer to patients and doctors.',
		},
	
		orderNum: 9,
	  },
	  {
		id: 10,
		slug: 'blog11',
		title: {
		  uz: 'Tibbiy klinikada CRM dan qanday foydalansa bo’ladi: bemorlar bilan ishlashni yaxshilash',
		  ru: 'Как использовать CRM в медицинской клинике: улучшение работы с пациентами',
		  en: 'How to Utilize CRM in a Medical Clinic: Enhancing Patient Management',
		},
		description: {
		  uz: ' CRM tizimi tibbiy klinikalarga bemorlarga g’amxo’rlik qilishni yaxshilash va ichki jarayonlarni tashkil etishga qanday yordam berishini bilib oling.',
		  ru: 'Узнайте, как CRM-система помогает медицинским клиникам улучшить обслуживание пациентов и организовать внутренние процессы.',
		  en: 'Discover how a CRM system helps medical clinics improve patient service and organize internal processes.',
		},
		
		orderNum: 10,
		
	  },
	  {
		id: 11,
		slug: 'blog12',
		title: {
		  uz: "B2B-segmentida tibbiy asbob-uskunalar va xizmatlarni qanday targ'ib qilish kerak: asosiy strategiyalar",
		  ru: 'Как продвигать медицинское оборудование и услуги в B2B-сегменте: ключевые стратегии',
		  en: 'How to Promote Medical Equipment and Services in the B2B Segment: Key Strategies',
		},
		description: {
		  uz: "Zamonaviy marketing vositalaridan foydalangan holda B2B segmentida tibbiy asbob-uskunalar va xizmatlarni qanday samarali targ'ib qilishni aniqlaymiz.",
		  ru: 'Разбираемся, как эффективно продвигать медицинское оборудование и услуги в сегменте B2B с использованием современных маркетинговых инструментов.',
		  en: 'Exploring effective strategies for promoting medical equipment and services in the B2B segment using modern marketing tools.',
		},
	
		orderNum: 11,
	  },
]

const SimilarNews = () => {
  const { lng } = useParams()

  return (
    <div className='bg-white py-[30px] px-[16px] rounded-[30px] mx-[16px] mdl:py-[50px] mdl:px-[30px]'>
      <h2 className='text-[#7B72EB] text-[23px] mdl:text-[50px] font-bold mb-6  3xl:text-[30px] 3xl:font-medium'>
        {lng === 'ru'
          ? 'Похожие новости'
          : lng === 'uz'
          ? 'Tavsiya etamiz'
          : 'Recommended News'}
      </h2>

      <div className='flex flex-col gap-6'>
        {similarNewsData.map(news => (
          <Link
            href={`/blog/${news.slug}`}
            key={news.id}
            passHref
            className='border-b-[1px] border-[#F0F0F0] pb-[25px]'
          >
            <div className='block rounded-md '>
              <h3 className='text-[#010101] text-[18px] mdl:text-[25px] font-bold mb-2 3xl:text-[20px]'>
                {news.title[lng]}
              </h3>
              <p className='text-[#7B7B7B] text-[14px] mdl:text-[18px] mb-4 font-robotoFlex'>
                {news.description[lng]}
              </p>
              <span className='text-[#7B72EB] text-[14px] font-bold flex items-center mdl:text-[18px]'>
                {lng === 'ru'
                  ? 'Подробнее'
                  : lng === 'uz'
                  ? 'Batafsil'
                  : 'Read more'}
                <GrLinkNext className='ml-2' />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className='3xl:absolute right-[20px] bottom-[-50px]'>
        <Links />
      </div>
    </div>
  )
}

export default SimilarNews
