'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const itemData = {
  'web-development': {
    title: {
      ru: 'Этапы разработки сайтов',
      en: 'Website Development Stages',
      uz: 'Saytlarni yaratish bosqichlari'
    },
    number: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    subtitle: {
      ru: [
        'Сбор информации',
        'Аналитика',
        'Определение функционала',
        'Планирование',
        'UX / UI дизайн',
        'Утверждение концепции',
        'Программирование',
        'Заполнение контентом',
        'Тестирование',
        'Развертывание на сервере',
        'Передача заказчику'
      ],
      uz: [
        "Ma'lumot to'plash",
        'Analitika',
        'Funktsionalni aniqlash',
        'Rejalashtirish',
        'UX/UI dizayni',
        'Kontseptsiyani tasdiqlash',
        'Dasturlash',
        "Tarkib bilan to'ldirish",
        'Sinov',
        'Serverda joylashtirish',
        'Xaridorga yetkazish'
      ],
      en: [
        'Information Gathering ',
        'Analysis ',
        'Functionality Definition ',
        'Planning ',
        'UX/UI Design ',
        'Concept Approval ',
        'Programming ',
        'Content Creation ',
        'Testing ',
        ' Server Deployment ',
        ' Handover to the Client '
      ]
    }
  },
  'telegram-bot-development': {
    title: {
      ru: 'Этапы разработки Telegram-ботов',
      en: 'Telegram Bot Development Stages ',
      uz: 'Telegram-botlarini yaratish bosqichlari'
    },
    number: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    subtitle: {
      ru: [
        'Сбор информации',
        'Аналитика',
        'Определение сценариев взаимодействия',
        'Планирование',
        'Утверждение концепции',
        'Программирование',
        'Наполнение контентом',
        'Тестирование',
        'Развертывание на сервере',
        'Передача заказчику'
      ],
      uz: [
        "Ma'lumot to'plash",
        'Analitika',
        "O'zaro ta'sir stsenariylarini aniqlash",
        'Rejalashtirish',
        'Kontseptsiyani tasdiqlash',
        'Dasturlash',
        "Tarkib bilan to'ldirish",
        'Sinov',
        'Serverda joylashtirish',
        'Xaridorga yetkazish'
      ],
      en: [
        'Information Gathering  ',
        'Analysis  ',
        'Interaction Scenario Definition  ',
        'Planning  ',
        'Concept Approval  ',
        'Programming  ',
        'Content Creation  ',
        'Testing  ',
        'Server Deployment  ',
        ' Handover to the Client  '
      ]
    }
  },
  smm: {
    title: {
      ru: 'Этапы работы по SMM',
      en: 'SMM Workflow Stages ',
      uz: 'SMM bo’yicha ishlash bosqichlari'
    },
    number: [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12'
    ],
    subtitle: {
      ru: [
        'Сбор информации',
        'Изучение бренда и аудитории',
        'Анализ конкурентов и рынка',
        'Разработка SMM-стратегии',
        'Составление контент-плана',
        'Создание уникального визуала',
        'Утверждение',
        'Заполнение соц. сетей',
        'Запуск рекламы',
        'Ведение страниц и размещение контента',
        'Анализ результатов и корректировки',
        'Отчетность по итогам кампаний'
      ],
      uz: [
        "Ma'lumot to'plash",
        'Brend va auditoriya tadqiqoti',
        'Raqobatchlar va bozor tahlili',
        'SMM-strategiyasini rivojlantirish',
        'Kontent-rejani tuzish',
        'Noyob vizual yaratish',
        'Tasdiqlash',
        "Ijtimoiy tarmoqlarni to'ldirish",
        'Reklamani ishga tushirish',
        'Sahifalarni yuritish va kontent joylashtirish',
        'Natijalar va tuzatishlar tahlili',
        'Kampaniya natijalari bo’yicha hisobot'
      ],
      en: [
        'Information Gathering',
        'Brand and Audience Research  ',
        'Competitor and Market Analysis  ',
        'SMM Strategy Development  ',
        'Content Plan Creation  ',
        'Visual Content Creation  ',
        'Approval  ',
        'Social Media Content Posting  ',
        'Advertising Campaign Launch  ',
        ' Page Management and Content Posting ',
        ' Results Analysis and Adjustments  ',
        ' Reporting on Campaign Performance  '
      ]
    }
  },
  'ads-launch': {
    title: {
      ru: 'Этапы запуска рекламы',
      en: 'Ad Launch Stages ',
      uz: 'Reklamani ishga tushirish bosqichlari'
    },
    number: [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12'
    ],
    subtitle: {
      ru: [
        'Сбор информации',
        'Изучение вашего бизнеса и целевой аудитории',
        'Анализ конкурентов и ключевых запросов',
        'Получение доступов или открытие рекламных кабинетов',
        'Разработка стратегии рекламной кампании',
        'Подбор ключевых слов и настроек таргетинга',
        'Создание рекламных объявлений',
        'Запуск кампаний на выбранных площадках',
        'Мониторинг и оптимизация в реальном времени',
        'Предоставление отчетов с результатами',
        'Корректировка стратегии на основе аналитики',
        'Оценка эффективности и поддержка'
      ],
      uz: [
        "Ma'lumot to'plash",
        "Biznesingizni va maqsadli auditoriyangizni o'rganish",
        "Raqobatchilar va asosiy so'rovlar tahlili ",
        'Reklama kabinetlariga kirish yoki ochish imkoniyati',
        'Reklama kampaniyasi strategiyasini rivojlantirish',
        "Kalit so'zlarni va targeting sozlamalarini tanlash",
        'Reklamalar yaratish',
        'Tanlangan platformalarda kampaniyalarni ishga tushirish',
        'Haqiqiy vaqtda monitoring va optimallashtirish',
        'Hisobotlarni natijalar bilan taqdim etish',
        'Tahlil asosida strategiyani tuzatish',
        "Samaradorlikni baholash va qo'llab-quvvatlash"
      ],
      en: [
        'Gathering information ',
        'Studying your business and target audience  ',
        ' Competitor and keyword analysis  ',
        ' Gaining access or opening ad accounts  ',
        'Developing an ad campaign strategy  ',
        ' Selecting keywords and targeting settings  ',
        ' Creating ad copies  ',
        ' Launching campaigns on chosen platforms  ',
        ' Monitoring and real-time optimization  ',
        ' Providing reports with results  ',
        ' Adjusting the strategy based on analytics  ',
        ' Evaluating effectiveness and ongoing support  '
      ]
    }
  },
  seo: {
    title: {
      ru: 'Этапы SEO-оптимизации',
      en: 'Stages of SEO Optimization',
      uz: 'SEO-optimallashtirish bosqichlari'
    },
    number: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    subtitle: {
      ru: [
        'Сбор информации',
        'Анализ текущего состояния сайта',
        'Исследование ключевых слов и конкурентов',
        'Разработка стратегии SEO',
        'Оптимизация внутренней структуры сайта',
        'Улучшение контента и мета-тегов',
        'Построение качественных ссылок',
        'Настройка и мониторинг аналитики',
        'Регулярное обновление и оптимизация',
        'Отчетность по результатам',
        'Корректировка стратегии и поддержка'
      ],
      uz: [
        "Ma'lumot to'plash",
        'Saytning joriy holatini tahlil qilish',
        "Kalit so'z va raqobatchilarni o'rganish",
        'SEO strategiyasini ishlab chiqish',
        'Saytning ichki tuzilishini optimallashtirish',
        'Kontent va meta-teglarni yaxshilash',
        'Sifatli havolalar yaratish',
        'Tahlillarni sozlash va monitoring qilish',
        'Doimiy yangilanishlar va optimallashtirish',
        'Natijalar bo’yicha hisobot',
        "Strategiyani sozlash va qo'llab-quvvatlash"
      ],
      en: [
        'Gathering information',
        'Analyzing the current state of the website',
        'Researching keywords and competitors',
        'Developing an SEO strategy',
        'Optimizing the internal structure of the website',
        'Improving content and meta tags',
        'Building quality backlinks',
        'Setting up and monitoring analytics',
        'Regular updates and optimization',
        ' Reporting results  ',
        ' Strategy adjustment and support  '
      ]
    }
  },
  branding: {
    title: {
      ru: 'Этапы брендинга',
      en: 'Stages of Branding',
      uz: 'Brending bosqichlari'
    },
    number: ['01', '02', '03', '04', '05', '06', '07', '08'],
    subtitle: {
      ru: [
        'Сбор информации',
        'Анализ рынка и целевой аудитории',
        'Исследование конкурентов',
        'Определение уникальных предложений и ценностей',
        'Разработка стратегии брендинга',
        'Создание логотипа и визуальных элементов',
        'Формирование бренд-стиля и гайдлайнов',
        'Оценка эффективности и корректировка'
      ],
      uz: [
        "Ma'lumot to'plash",
        'Bozor va maqsadli auditoriyani tahlil qilish',
        "Raqobatchilarni o'rganish",
        'Noyob takliflar va qadriyatlarni aniqlash',
        'Brending strategiyasini rivojlantirish',
        'Logotip va vizual elementlarni yaratish',
        'Brend-uslubi va gaydlayinlarni shakllantirish',
        'Samaradorlikni baholash va sozlash'
      ],
      en: [
        'Information gathering',
        'Market and target audience analysis  ',
        'Competitor research  ',
        'Identification of unique offerings and values  ',
        'Development of branding strategy  ',
        'Creation of logo and visual elements  ',
        'Formation of brand style and guidelines  ',
        'Effectiveness evaluation and adjustments '
      ]
    }
  },
  'doctor-brand': {
    title: {
      ru: 'Этапы работы по созданию сайта и запуску рекламы',
      en: 'Steps for Creating the Website and Launching Ads',
      uz: ''
    },
    number: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    subtitle: {
      ru: [
         'Сбор информации о специалисте',
         'Наполнение контентом: фото, текст, услуги',
         'Утверждение',
         'Запуск сайта на платформе Med Yordam',
         'Настройка контекстной рекламы в Google',
         'Подбор ключевых слов и аудитории',
         'Запуск рекламной кампании',
         'Мониторинг и корректировка рекламы',
         'Анализ эффективности и отчетность'
      ],
      uz: [
        "Mutaxassis haqida ma'lumot yig'ish",
        "Kontent bilan to'ldirish: fotosurat, matn, xizmatlar",
        "Tasdiqlash",
        "Med Yordam platformasida saytni ishga tushirish",
        "Google da kontekstli reklamani o'rnatish",
        "Kalit so'zlar va auditoriyani tanlash",
        "Reklama kampaniyasini ishga tushirish",
        "Monitoring va reklamaga o'zgarishlar kiritib turish",
        "Samaradorlikni tahlil qilish va hisobot berish"
      ],
      en: [
        'Collecting specialist information',
        'Adding content: photos, text, services',
        'Approval',
        'Launching the website on the Med Yordam platform',
        'Setting up Google ads',
        'Selecting keywords and target audience',
        'Launching the ad campaign',
        'Monitoring and campaign adjustments',
        'Performance analysis and reporting'
      ]
    }
  },
}

const ItemInfo = () => {
	const { slug, lng } = useParams() // Get the current slug and language from the URL
	const [content, setContent] = useState({
	  title: { ru: '', uz: '', en: '' },
	  subtitle: { ru: [], uz: [], en: [] },
	  number: []
	})
  
	useEffect(() => {
	  if (slug && itemData[slug]) {
		// Set the content based on the slug and language
		const selectedContent = {
		  title: itemData[slug].title || { ru: 'Услуга', uz: 'Xizmat', en: 'Service' }, // Fallback if the language doesn't exist
		  subtitle: itemData[slug].subtitle[lng] || ['Описание услуги будет здесь.'],
		  number: itemData[slug].number || []
		}
		setContent(selectedContent)
	  } else {
		// Default content if the slug is invalid or not found
		setContent({
		  title: { ru: 'Услуга', uz: 'Xizmat', en: 'Service' },
		  subtitle: ['Описание услуги будет здесь.'],
		  number: []
		})
	  }
	}, [slug, lng])

  return (
    <div className='mt-[20px] mdl:mt-[20px] 3xl:mt-[25px] rounded-[30px] mdl:rounded-[40px] flex flex-col 3xl:flex-row py-[30px] px-[24px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] bg-white mx-[16px] mdl:mx-[20px] 3xl:mx-[30px]'>
      <div className='2xl:w-[50%]'>
        <h2 className='text-[28px] 2xl:w-[80%] 4xl:w-[60%] mdl:text-[40px] 3xl:text-[50px] font-bold'>
          {content.title[lng]}
        </h2>
      </div>
      <div className='mt-[20px] mdl:mt-[30px] 3xl:mt-0 2xl:order-1 2xl:w-[50%]'>
        {content.number.map((num, index) => (
          <div
            key={index}
            className='flex items-start py-[15px] mdl:py-[20px] border-b border-[#F0F0F0]'
          >
            <p className='text-violet100 font-robotoFlex text-[15px] font-medium mdl:text-[20px] mr-[10px]'>
              {num}
            </p>
            <p className='text-titleDark text-[15px] font-robotoFlex font-medium mdl:text-[20px]'>
              {content.subtitle[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemInfo
