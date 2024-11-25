'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ServiceModal from '../Modal/SeriviceModal'
import { useParams } from 'next/navigation'
import web from '@/public/images/serviceImage/web.jpg'
import Add from '@/public/images/serviceImage/Add.jpg'
import Branding from '@/public/images/serviceImage/Branding.jpg'
import seo from '@/public/images/serviceImage/SEO.jpg'
import tgbot from '@/public/images/serviceImage/tgbot.jpg'
import smm from '@/public/images/serviceImage/smm.jpg'
import doctor from '@/public/images/serviceImageInfo/doctor.jpg'

const ServiceItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { slug, lng } = useParams() // Get the slug from the URL
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState()

  // Data with slugs and information
  const dataAndSlugFilter = [
    {
      slug: 'web-development',
      title: {
        ru: 'Разработка Web-сайтов',
        en: 'Website Development',
        uz: 'Web-sayt yaratish'
      },
      imagePath: web,
      description: {
        ru: 'Комплексная разработка сайтов: дизайн, программирование, перевод и заполнение контентом. Обеспечиваем безопасность, скорость и удобство использования для роста бизнеса.',
        en: 'Comprehensive website development: design, programming, translation, and content filling. We ensure security, speed, and ease of use to support business growth. ',
        uz: "Saytlarni keng qamrovda rivojlantirish: dizayn, dasturlash, tarjima va tarkib bilan to'ldirish. Biznesni rivojlantirish uchun xavfsizlik, tezlik va foydalanish qulayligini ta'minlaymiz."
      }
    },
    {
      slug: 'telegram-bot-development',
      title: {
        ru: 'Разработка Telegram-ботов',
        en: 'Telegram Bot Development ',
        uz: 'Telegram-botlarini yaratish'
      },
      imagePath: tgbot,
      description: {
        ru: 'Комплексная разработка чат-ботов: от проектирования функционала до программирования и запуска. Обеспечиваем высокую производительность, защиту данных и удобство взаимодействия для пользователей.',
        en: 'Comprehensive chatbot development: from functionality design to programming and launch. We ensure high performance, data protection, and user-friendly interaction.',
        uz: "Chat-botlarni keng qamrovda rivojlantirish: funktsional dizayndan dasturlash va ishga tushirishgacha. Biz foydalanuvchilar uchun yuqori unumdorlik, ma'lumotlarni himoya qilish va o'zaro aloqa qilish qulayligini ta'minlaymiz"
      }
    },
    {
      slug: 'smm',
      title: {
        ru: 'Услуга SMM',
        en: 'Social Media Marketing Service',
        uz: 'SMM xizmati'
      },
      imagePath: smm,
      description: {
        ru: 'Продвижение в социальных сетях: от разработки стратегии до создания контента и его анализа. Мы помогаем вам привлекать целевую аудиторию, увеличивать вовлеченность и строить доверительные отношения с клиентами через эффективные SMM-кампании.',
        en: 'Promotion in social networks: from strategy development to content creation and analysis. We help you attract your target audience, increase engagement, and build trust with clients through effective SMM campaigns.',
        uz: 'Ijtimoiy tarmoqlarda reklama: strategiya ishlab chiqqrishdan kontent yaratish va uni tahlil qilishgacha. Samarali SMM kampaniyalari orqali sizga maqsadli auditoriyanni jalb qilishga, faollikni oshirishga va mijozlar bilan ishonchli munosabatlarni qurishga yordam beramiz.'
      }
    },
    {
      slug: 'ads-launch',
      title: {
        ru: 'Запуск контекстной и таргетированной рекламы',
        en: 'Launching Contextual and Targeted Ads',
        uz: 'Kontekstli va target reklamani ishga tushirish'
      },
      imagePath: Add,
      description: {
        ru: 'Мы предлагаем полный цикл услуг по настройке и запуску контекстной и таргетированной рекламы. Наша цель — привести к вам целевых клиентов, увеличив охваты и конверсии с минимальными затратами.',
        en: 'We offer a full range of services for setting up and launching contextual and targeted ads. Our goal is to bring targeted clients to you, increasing reach and conversions with minimal costs. We configure the ads to be displayed to your target audience at the right time and in the right places.Why You Need  This Service Contextual and targeted advertising helps show your business to those already interested in your products or services. This speeds up customer acquisition and boosts conversion rates.',
        uz: "Kontekstli va target reklamani o'rnatish va ishga tushirish bo'yicha to'liq siklli xizmatlarni taklif etamiz. Maqsadimiz - minimal xarajat evaziga qamrovlarni va konversiyalarni oshirish bilan birga maqsadli mijozlarni sizga jalb qilishdir. Reklamani faqat maqsadli auditoriyangizga kerakli vaqtda va kerakli joylarda ko'rsatadigan qilib sozlaymiz."
      }
    },
    {
      slug: 'seo',
      title: {
        ru: 'SEO-оптимизация',
        en: 'SEO Optimization  ',
        uz: 'SEO-optimallashtirish'
      },
      imagePath: seo,
      description: {
        ru: 'SEO-оптимизация для повышения видимости вашего сайта в поисковых системах. Наша задача — улучшить позиции вашего сайта по ключевым запросам и привлечь целевых посетителей.',
        en: "SEO optimization to improve your website's visibility in search engines. Our goal is to enhance your site’s ranking for key search terms, increase organic traffic, and attract targeted visitors. We use advanced methods and up-to-date technologies to achieve maximum results.",
        uz: "Saytingizning qidiruv tizimlarida ko'rinishini oshirish uchun SEO-optimallashtirish. Vazifamiz - asosiy so'rovlar bo'yicha saytingiz pozitsiyasini yaxshilash, organik trafikni oshirish va maqsadli tashrif buyuruvchilarni jalb qilish. Maksimal natijalarga erishish uchun ilg'or usullar va aktual texnologiyalardan foydalanamiz."
      }
    },
    {
      slug: 'branding',
      title: {
        ru: 'Брендинг',
        en: 'Branding',
        uz: 'Brending'
      },
      imagePath: Branding,
      description: {
        ru: 'Создание уникального и запоминающегося имиджа вашего бизнеса. Включает разработку логотипа, визуальных элементов и корпоративной атрибутики, которая подчеркнет индивидуальность вашего бренда.',
        en: "Creating a unique and memorable image for your business. Branding encompasses the development of logos, visual elements, and corporate identity that highlight your brand's individuality. The primary focus is on crafting a cohesive and appealing image that stands out among competitors and attracts the target audience.",
        uz: "Biznesingizning noyob va unutilmas imidjini yaratish. Brending logotip, vizual elementlar va korporativ atributlarni yaratishni o'z ichiga oladi, bu brendingiz individualligini ta’kidlaydi. Asosiy e'tibor raqobatchilardan ajralib turadigan va maqsadli auditoriyani jalb qiladigan izchil va jozibali imidjni yaratishga qaratiladi."
      }
    },
    {
      slug: 'doctor-brand',
      title: {
        ru: 'Доктор Бренд',
        en: 'Doctor Brand',
        uz: 'Brending'
      },
      imagePath: doctor,
      description: {
        ru: 'Доступный тариф для врачей и других специалистов из мира медицины для гарантированного увеличения потока пациентов. В тариф входит создание сайта визитки с ключевой информацией о специалисте, а также запуск рекламы в Google по ключевым запросам.Пациенты получают удобный доступ к полной информации о специалисте, что делает процесс выбора врача простым и быстрым.',
        en: "An affordable plan for doctors and other medical professionals to ensure an increased patient flow. The plan includes creating a business card website with key information about the specialist and launching Google ads based on targeted keywords.Patients gain easy access to comprehensive information about the specialist, making the process of choosing a doctor simple and fast.",
        uz: "Bu bemorlar soni ko'payishini kafolatlash uchun shifokorlar va  tibbiyot olamidagi boshqa mutaxassislar uchun qulay tarif. Tarif mutaxassis haqidagi asosiy ma'lumotlarga ega bo'lgan tashrifnoma-sayt yaratishni va asosiy so'rovlar bo'yicha Google da reklamani ishga tushirishni o'z ichiga oladi.Bemorlar mutaxassis haqida to'liq ma'lumot olishi mumkin, bu tufayli ular shifokorni oson va tezda tanlay olishadi."
      }
    },
  ]

  // Update the state based on the slug using useEffect
  useEffect(() => {
    // Find the matching data by slug
    const matchedService = dataAndSlugFilter.find(item => item.slug === slug)

    // If matched, update the state with the relevant information
    if (matchedService) {
      setTitle(matchedService.title)
      setDescription(matchedService.description)
      setImageUrl(matchedService.imagePath || slugImage) // Use specific image or fallback to default
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
        <div className='rounded-[30px] w-full 3xl:mx-[12px] 3xl:w-[50%] 3xl:order-2'>
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
              {title[lng]}
            </h1>
          </div>
          <div className='mt-[15px] 3xl:mt-[40px] 3xl:w-[80%]'>
            <p className='text-[14px] mdl:text-[18px] leading-[23px] font-medium text-[#454545] 3xl:text-[20px]'>
              {description[lng]}
            </p>
          </div>
          <button
            onClick={openModal}
            className='w-[80%] mb-[20px] 4xl:w-[30%] mt-[30px] mdl:mt-[40px] mdl:w-[40%] mdl:mx-0 mx-auto bg-[#7B72EB] rounded-[100px] py-[20px] px-[30px] text-center text-[14px] font-bold text-white100 3xl:text-[18px] 3xl:mt-[80px]'
          >
            {lng === 'ru'
              ? 'Оставить заявку'
              : lng === 'uz'
              ? "So'rov to’ldirish"
              : 'Submit a reques'}
          </button>
        </div>
      </div>
      <ServiceModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default ServiceItem
