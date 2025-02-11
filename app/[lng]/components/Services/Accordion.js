'use client'
import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useParams } from 'next/navigation'
import { useCustomTranslation } from '@/app/i18n/client'

const FAQ_DATA = [
  {
    question: {
      ru: 'Для чего нужен сайт?',
      en: 'Why do you need a website?',
      uz: 'Nima uchun sayt kerak?'
    },
    answer: {
      ru: 'Сайт служит основным каналом для предоставления информации о вашем бизнесе, услугах или продуктах. Он позволяет потенциальным клиентам получить все необходимые данные, ознакомиться с предложениями и установить контакт. Это также важный инструмент для создания и укрепления профессионального имиджа компании, обеспечивая доступность информации 24/7 и позволяя пользователям взаимодействовать с брендом в удобное для них время.',
      en: 'A website is the main channel for providing information about your business, services, or products. It allows potential clients to get all the necessary data, explore offers, and establish contact. It’s also a crucial tool for creating and enhancing your company’s professional image, ensuring 24/7 availability of information, and allowing users to interact with your brand at their convenience.',
      uz: "Sayt sizning biznesingiz, xizmatlaringiz yoki mahsulotlaringiz haqida ma'lumot berish uchun asosiy kanaldir. Bu potentsial mijozlarga barcha kerakli ma'lumotlarni olish, takliflarni o'rganish va aloqa qilish imkonini beradi. Bu, shuningdek, kompaniyangizning professional imidjini yaratish va yaxshilash, ma'lumotlarning 24/7 mavjudligini ta'minlash va foydalanuvchilarga o'ziga qulay vaqtda brendingiz bilan aloqa qilish imkonini beradigan muhim vositadir."
    }
  },
  {
    question: {
      ru: 'Как вы работаете?',
      en: 'How do you work?',
      uz: 'Qanday ishlaysiz?'
    },
    answer: {
      ru: 'Работа начинается с тщательного сбора информации о вашем бизнесе, целевой аудитории и текущих потребностях. На этом этапе мы проводим глубокий анализ, чтобы понять ваши цели, предпочтения и требования. После сбора данных разрабатывается стратегия, которая включает планирование, разработку и реализацию проекта. Каждый этап процесса — от создания контента до мониторинга результатов — осуществляется с учетом собранной информации и направлен на достижение оптимальных результатов.',
      en: 'The work begins with thoroughly gathering information about your business, target audience, and current needs. At this stage, we conduct an in-depth analysis to understand your goals, preferences, and requirements. After gathering the data, a strategy is developed that includes planning, developing, and executing the project. Every stage of the process — from content creation to result monitoring — is carried out with the collected information in mind and aimed at achieving optimal results.',
      uz: "Ish biznesingiz, maqsadli auditoriyangiz va hozirgi ehtiyojlar haqida to'liq ma'lumot to'plashdan boshlanadi. Bu bosqichda maqsadlaringiz, afzalliklaringiz va talablaringizni tushunish uchun chuqur tahlil o’tkazamiz. Ma'lumotlar yig'ilgach, loyihani rejalashtirish, rivojlantirish va amalga oshirishni o'z ichiga olgan strategiya ishlab chiqiladi. Jarayonning har bir bosqichi - kontent yaratishdan to natijalarni monitoring qilishgacha - to'plangan ma'lumotlarni hisobga olgan holda amalga oshiriladi va optimal natijalarga erishishga qaratilgan."
    }
  },
  {
    question: {
      ru: 'В чем отличие между SEO и контекстной рекламой?',
      en: 'What is the difference between SEO and contextual advertising?',
      uz: "SEO va kontekstli reklama o'rtasida qanday farq bor?"
    },
    answer: {
      ru: 'SEO (поисковая оптимизация) и контекстная реклама — разные подходы к привлечению трафика. SEO улучшает позиции сайта в органических результатах поиска через оптимизацию контента и ссылочную массу. Результаты видны со временем и долговечны. Контекстная реклама, наоборот, платная: объявления показываются на основе поисковых запросов и обеспечивают мгновенный трафик, но затраты продолжаются, пока реклама финансируется. SEO фокусируется на долгосрочных результатах, контекстная реклама — на быстром привлечении пользователей',
      en: 'SEO (Search Engine Optimization) and contextual advertising are different approaches to attracting traffic. SEO improves a site’s position in organic search results by optimizing content and links. The results are visible over time and long-lasting. Contextual advertising, on the other hand, is paid: ads are shown based on search queries and provide immediate traffic, but costs persist as long as the ads are funded. SEO focuses on long-term results, while contextual advertising is aimed at quickly attracting users.',
      uz: "SEO (qidiruvni optimallashtirish) va kontekstli reklama - bu trafikni jalb qilishga qaratilgan turli yondashuv. SEO kontent va havolalarni optimallashtirish orqali saytning organik qidiruv natijalaridagi o'rnini yaxshilaydi. Natijalar vaqt o'tgani sayin ko'rinadi va uzoq davom etadi. Kontekstli reklama esa pulli: e’lonlar qidiruv so'rovlari asosida ko'rsatiladi va darhol trafikni ta'minlaydi, ammo reklama pul to’languncha xarajatlar davom etadi. SEO uzoq muddatli natijalarga e'tibor qaratadi, kontekstli reklama esa foydalanuvchilarni tezda jalb qilishga qaratilgan."
    }
  },
  {
    question: {
      ru: 'Что такое Telegram-бот и для чего он нужен?',
      en: 'What is a Telegram bot and why is it needed?',
      uz: 'Telegram bot nima va u nima uchun kerak?'
    },
    answer: {
      ru: 'Telegram-бот — это программа, которая работает внутри мессенджера Telegram и выполняет автоматизированные задачи. Он помогает автоматизировать процессы, такие как поддержка клиентов, сбор данных, предоставление информации или выполнение заказов. Боты упрощают взаимодействие с пользователями, экономят время и обеспечивают доступность услуг 24/7.',
      en: 'A Telegram bot is a program that operates within the Telegram messenger and performs automated tasks. It helps automate processes like customer support, data collection, providing information, or handling orders. Bots simplify user interaction, save time, and ensure 24/7 availability of services.',
      uz: "Telegram bot — bu Telegram messenjerida ishlaydigan va avtomatlashtirilgan vazifalarni bajaradigan dasturdir. U mijozlarga yordam ko'rsatish, ma'lumot yig'ish, ma'lumot taqdim etish yoki buyurtmalarni bajarish kabi jarayonlarni avtomatlashtirishga yordam beradi. Botlar foydalanuvchilar bilan o'zaro aloqani soddalashtiradi, vaqtni tejaydi va xizmatlarning 24/7 mavjudligini ta'minlaydi."
    }
  },
  {
    question: {
      ru: 'Что такое брендинг и почему он важен?',
      en: 'What is branding and why is it important?',
      uz: 'Branding nima va u nima uchun muhim?'
    },
    answer: {
      ru: 'Брендинг — это процесс создания уникального образа и идентичности компании или продукта. Он включает в себя разработку логотипа, фирменного стиля, ключевых сообщений и стратегии, которые делают бренд узнаваемым. Успешный брендинг помогает выделиться на рынке, привлекает клиентов, создает доверие и укрепляет долгосрочные отношения с аудиторией.',
      en: 'Branding is the process of creating a unique image and identity for a company or product. It includes developing a logo, brand style, key messages, and a strategy that makes the brand recognizable. Successful branding helps stand out in the market, attracts customers, builds trust, and strengthens long-term relationships with the audience.',
      uz: "Branding — bu kompaniya yoki mahsulot uchun noyob qiyofa va identifikatsiyani yaratish jarayonidir. U logotip, brend uslubi, asosiy xabarlar va brendni taniqli qiladigan strategiyani ishlab chiqishni o'z ichiga oladi. Muvaffaqiyatli branding bozorda ajralib turishga, mijozlarni jalb qilishga, ishonchni shakllantirishga va auditoriya bilan uzoq muddatli aloqalarni mustahkamlashga yordam beradi."
    }
  }
]

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const contentRefs = useRef([]) // Store refs to the content divs
  const { lng } = useParams()
  const {t} = useCustomTranslation(lng , 'acardion')
  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (activeIndex === index) {
          gsap.fromTo(
            content,
            { height: 0, opacity: 0 },
            { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
          )
        } else {
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
          })
        }
      }
    })
  }, [activeIndex])

  return (
    <div className='w-full max-w-full mx-auto  p-4 mdl:p-[20px] 3xl:p-[30px] '>
      <h2 className='text-[28px] font-bold mb-[30px] mdl:text-[50px]'>
        {t('title')}
      </h2>
      {FAQ_DATA.map((item, index) => (
        <div
          key={index}
          className={`mb-2 2xl:mb-[20px] border-[2px] rounded-[20px] 2xl:rounded-[30px] overflow-hidden transition-all duration-300 ${
            activeIndex === index ? 'border-[#7B72EB]' : 'border-gray-300'
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className='flex justify-between items-center w-full p-[20px] bg-white text-left focus:outline-none 2xl:p-[40px]'
          >
            <span className='text-[15px] font-semibold mdl:text-[25px] '>
              {item.question[lng]}
            </span>
            <svg
              className={`w-6 h-6 mdl:w-[30px] mdl:h-[30px] 3xl:w-[] 3xl:h-[] transition-transform transform text-[#7B72EB] ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>

          {/* Content Section */}
          <div
            ref={el => (contentRefs.current[index] = el)}
            className='p-0 overflow-hidden'
            style={{
              height: activeIndex === index ? 'auto' : 0,
              opacity: activeIndex === index ? 1 : 0
            }}
          >
            <div className='p-[20px] mt-[-20px] bg-white mdl:p-[20px] mdl:mt-[-20px] 2xl:p-[40px] 2xl:mt-[-50px] 3xl:p-[40px] 3xl:mt-[-40px]'>
              <p className='text-[15px] text-[#454545] font-medium mdl:text-[20px] font-robotoFlex '>
                {item.answer[lng]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
