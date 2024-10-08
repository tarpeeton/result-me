'use client'
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Question = () => {
  const [filteredData, setFilteredData] = useState([])
  const [expandedItems, setExpandedItems] = useState([]) // Track expanded items
  const { slug, lng } = useParams() // Get slug from the URL
  const { t } = useCustomTranslation(lng, 'caseslug')

  const data = [
    {
      slug: 'prime-medical-center',
      data: [
        {
          title: {
            uz: 'Bemorlar sonini oshirish',
            ru: 'Увеличение потока пациентов',
            en: 'Increase patient inflow  '
          }
        },
        {
          title: {
            uz: "Doimiy bemorlar bazasini to'plash va saqlash",
            ru: 'Накопление и сохранение базы постоянных пациентов',
            en: 'Build and maintain a database of loyal patients'
          }
        },
        {
          description: {
            uz: "Prime Medical Center rebrending o’tkazdi va gastroenterologiya xizmatlarini kengaytirdi. Asosiy vazifa yangilangan brendni targ'ib qilish va doimiy bemorlarning sodiqligini saqlab qolish edi.",
            ru: 'Prime Medical Center провел ребрендинг и расширил гастроэнтерологические услуги. Главная задача заключалась в продвижении обновленного бренда и сохранении лояльности постоянных пациентов.',
            en: 'Prime Medical Center underwent rebranding and expanded its gastroenterological services. The primary goal was to promote the updated brand and retain the loyalty of existing patients.  '
          }
        }
      ]
    },
    {
      slug: 'mrj-trade',
      data: [
        {
          title: {
            uz: "Bozorga kirish uchun to'liq tayyorgarlik",
            ru: 'Полная подготовка к запуску на рынок',
            en: 'Complete preparation for market entry'
          }
        },
        {
          title: {
            uz: 'Sayt yaratish, brending va reklamani ishga tushirish',
            ru: 'Создание сайта, брендинг и запуск рекламы',
            en: ' Website creation, branding, and advertising launch '
          }
        },
        {
          description: {
            uz: "MRJ TRADE bozorga muvaffaqiyatli kirish va o'z brendini olg’a surish uchun kerakli vositalarni yaratishni so'radi.",
            ru: 'MRJ TRADE обратились с запросом на создание необходимых инструментов для успешного выхода на рынок и продвижения своего бренда.',
            en: 'MRJ TRADE approached us with a request for the necessary tools to successfully enter the market and promote their brand. '
          }
        }
      ]
    },
    {
      slug: 'intermed',
      data: [
        {
          title: {
            uz: 'Saytni yahshilash va oxirigacha yakunlash',
            ru: 'Улучшение и доработка сайта',
            en: 'Improvement and refinement of the website'
          }
        },
        {
          title: {
            uz: 'Instagram dan lidlarni jalb qilish',
            ru: 'Привлечение лидов с Instagram',
            en: 'Lead generation from Instagram'
          }
        },
        {
          description: {
            uz: "Intermed kompaniyasi saytni yaxshilash va ijtimoiy tarmoqlar orqali etakchilarni yaratish bo'yicha so'rov bilan chiqdi. Asosiy maqsad - mavjud sayt xatolarini tuzatish va marketing samaradorligini oshirish.",
            ru: 'Компания Intermed обратилась с запросом на улучшение сайта и генерацию лидов через социальные сети. Основная цель — исправить существующие ошибки сайта и повысить эффективность маркетинга.',
            en: 'Intermed approached us with a request to enhance their website and generate leads through social media. The main objective was to rectify existing website errors and improve marketing effectiveness.  '
          }
        }
      ]
    },
    {
      slug: 'smile-design',
      data: [
        {
          title: {
            uz: "O'zbekistonda Internet-mavjudligini maksimal darajada kengaytirish",
            ru: 'Максимальное расширение интернет-присутствия в Узбекистане',
            en: 'Maximize online presence in Uzbekistan '
          }
        },
        {
          title: {
            uz: "Qo'shni Markaziy Osiyo davlatlari bozoriga kirish",
            ru: 'Выход на рынок соседних стран Центральной Азии',
            en: 'Enter the markets of neighboring Central Asian countries'
          }
        },
        {
          description: {
            uz: "Smile Design stomatologiyasi o‘zining bemorlar bazasini kengaytirishga, O‘zbekiston bozoridagi o‘z o‘rnini mustahkamlashga va qo‘shni Markaziy Osiyo mamlakatlari bozoriga kirishga intilgan. Asosiy e'tibor onlayn reklamaga qaratilgan.",
            ru: 'Стоматология Smile Design стремилась расширить свою пациентскую базу, укрепить позиции на рынке Узбекистана и выйти на рынок соседних стран Центральной Азии. Основной упор был сделан на продвижение онлайн.',
            en: 'Smile Design sought to expand its patient base, strengthen its market position in Uzbekistan, and penetrate the markets of neighboring Central Asian countries. The primary focus was on online promotion.  '
          }
        }
      ]
    },
    {
      slug: 'baxtiyor-nadjullayevich',
      data: [
        {
          title: {
            uz: "Bemorlar sonini ko'paytirish",
            ru: 'Увеличить число пациентов',
            en: 'Increase the number of patients '
          }
        },
        {
          title: {
            uz: 'Saytga trafikni jalb qilish',
            ru: 'Привлечение трафика на сайт',
            en: 'Drive traffic to the website  '
          }
        },
        {
          description: {
            uz: "Mijozning yaxshi rivojlangan sayti bor edi, lekin bemorlar va operatsiyalar sonini ko'paytirish uchun faol reklama etishmagandi. Asosiy maqsad - Internet orqali yangi bemorlarni jalb qilish.",
            ru: 'Закзачик имел хорошо разработанный сайт, но ему не хватало активной рекламы для увеличения числа пациентов и операций. Основная цель — привлечение новых пациентов через интернет.',
            en: 'The client had a well-designed website but lacked active advertising to increase patient numbers and surgeries. The primary goal was to attract new patients through the internet.'
          }
        }
      ]
    },
    {
      slug: 'mostona-med',
      data: [
        {
          title: {
            uz: 'Xizmatlarni olg’a surish uchun strategiya va kontentni rivojlantirish',
            ru: 'Разработка стратегий и контента для продвижения услуг',
            en: 'Development of strategies and content to promote services  '
          }
        },
        {
          description: {
            uz: "Mastona Med klinikasi o'zlarining noyob tibbiy xizmatlarini targ'ib qilish uchun kontent-rejani yaratish masalasida murojaat qildi. Asosiy maqsad - klinika jamoasi mustaqil ravishda amalga oshirishi mumkin bo'lgan materiallarni taqdim etish.",
            ru: 'Клиника Mastona Med обратилась за созданием контент-плана для продвижения их уникальных медицинских услуг. Основная задача — предоставить материалы, которые команда клиники могла бы реализовывать самостоятельно.',
            en: "Mastona Med clinic sought assistance in creating a content plan to promote their unique medical services. The primary goal was to provide materials that the clinic's team could implement independently.  "
          }
        }
      ]
    },
    {
      slug: 'aziza-shaxzadeevna',
      data: [
        {
          title: {
            uz: "Internetda ko'rinishni oshirish",
            ru: 'Увеличение видимости в интернете',
            en: 'Increased Online Visibility'
          }
        },
        {
          title: {
            uz: 'Yangi bemorlarni jalb qilish',
            ru: 'Увеличение числа пациентов',
            en: 'Attracting New Patients'
          }
        },
        {
          description: {
            uz: "Aziza Shaxzadeevna o'zining onlayn-mavjudligini yaxshilash va Internet orqali bemorlar sonini ko'paytirish maqsadida murojaat qildi",
            ru: 'Азиза Шахзадэевна обратилась с целью улучшения своего онлайн-присутствия и увеличения числа пациентов через интернет.',
            en: 'Aziza Shakhzadeevna sought to enhance her online presence and increase the number of patients through the internet. '
          }
        }
      ]
    },
    {
      slug: 'alisher-baxromovich',
      data: [
        {
          title: {
            uz: 'Bemorlarni jalb qilish',
            ru: 'Привлечение пациентов',
            en: 'Patient Attraction '
          }
        },
        {
          title: {
            uz: "Internetda ko'rinishni orttirish",
            ru: 'Увеличение видимости в сети',
            en: 'Increased Online Visibility'
          }
        },
        {
          description: {
            uz: 'Asosiy vazifa klinikaning onlayn-ishtirokini yaratish va Internet orqali yangi bemorlarni jalb qilish edi.',
            ru: 'Основной задачей было создание онлайн-присутствия для клиники и привлечение новых пациентов через интернет.',
            en: 'The primary objective was to establish an online presence for the clinic and attract new patients via the internet.  '
          }
        }
      ]
    },
    {
      slug: 'sanjar-akbarovich',
      data: [
        {
          title: {
            uz: "Bemorlar sonini ko'paytirish",
            ru: 'Увеличить число пациентов',
            en: 'Increase in Patient Numbers '
          }
        },
        {
          title: {
            uz: 'Bemorlar bazasini saqlab qolish',
            ru: 'Сохранение базы пациентов',
            en: 'Patient Base Retention '
          }
        },
        {
          description: {
            uz: "Mijoz yangi bemorlar oqimini ko'paytirish va yaxshilangan onlayn-mavjudligi orqali bor bo’lgan bemorlarni saqlab qolishga intilgan.",
            ru: 'Клиент стремился увеличить поток новых пациентов и удерживать существующих через улучшенное онлайн-присутствие.',
            en: 'The client aimed to boost the flow of new patients while retaining existing ones through enhanced online presence.  '
          }
        }
      ]
    },
    {
      slug: 'nafisa-shuxratovna',
      data: [
        {
          title: {
            uz: 'Sayt yaratish',
            ru: 'Создание сайта',
            en: ' Website Creation'
          }
        },
        {
          description: {
            uz: "Mijoz potentsial bemorlarni ko'rsatilayotgan xizmatlar haqida xabardor qilish va yangi mijozlarni jalb qilish uchun zamonaviy sayt yaratish masalasi bilan murojaat qildi.",
            ru: 'Клиент обратился с задачей создать современный сайт для информирования потенциальных пациентов о предоставляемых услугах и привлечения новых клиентов.',
            en: 'The client approached us with the task of creating a modern website to inform potential patients about the services offered and attract new clients. '
          }
        }
      ]
    },
    {
      slug: 'dr-odil-alisherovich',
      data: [
        {
          title: {
            uz: 'Imidjni mustahkamlash',
            ru: 'Укрепление имиджа',
            en: 'Image Strengthening'
          }
        },
        {
          title: {
            uz: 'Shifokorning shaxsiy brendini mustahkamlash',
            ru: 'укрепление личного бренда врача',
            en: 'Personal Brand Enhancement'
          }
        },
        {
          description: {
            uz: "Bemorlar bazasini saqlab qolish Odil Alisherovich faol onlayn-ishtirok etish orqali o'z imidjini yaxshilashga va bemorlarning ishonchini saqlab qolishga harakat qilgan. Bemorlar bazasini bir joyda to'plab, uni yanada kengaytirish muhim edi",
            ru: 'Одил Алишерович стремился улучшить свой имидж и сохранить доверие своих пациентов через активное онлайн-присутствие. Важно было собрать базу пациентов в одном месте и преувеличить ее',
            en: 'Odil Alisherovich aimed to improve his image and maintain the trust of his patients through active online presence. It was crucial to consolidate the patient base in one place and enhance it. '
          }
        }
      ]
    },
    {
      slug: 'xayrullo-rahmatullaevich',
      data: [
        {
          title: {
            uz: 'Imidjni oshirish',
            ru: 'Профессиональный имидж',
            en: 'Image Enhancement'
          }
        },
        {
          title: {
            uz: "Internetda ko'rishni orttirish",
            ru: 'Увеличение доверия',
            en: 'Increased Online Visibility'
          }
        },
        {
          description: {
            uz: "Asosiy maqsad - shifokorga o'z imidjini oshirish va Internet orqali ko'proq bemorlarni jalb qilish imkonini beradigan onlayn-resurs va brend yaratish.",
            ru: 'Создание фирменного стиля и информационного сайта значительно укрепило личный бренд врача, повысив его узнаваемость и профессиональный статус. Благодаря этому, доверие со стороны пациентов возросло, что привело к увеличению числа обращений и записей на прием.',
            en: 'The primary goal was to create an online resource and brand that would allow the doctor to strengthen their image and attract more patients through the internet. '
          }
        }
      ]
    },
    {
      slug: 'ant-group',
      data: [
        {
          title: {
            uz: 'SMM-strategiyasini ishlab chiqish',
            ru: 'Разработка SMM-стратегии',
            en: 'Development of an SMM Strategy '
          }
        },
        {
          description: {
            uz: "ANT-GROUP kompaniyani ijtimoiy tarmoqlarda faol targ'ib qilish va uning onlayn-obro'sini mustahkamlash strategiyasini ishlab chiqish masalasi bilan murojaat qildi.",
            ru: 'ANT-GROUP обратились с запросом на разработку стратегии для активного продвижения компании в социальных сетях и укрепления онлайн-репутации.',
            en: 'ANT-GROUP approached us with a request to devise a strategy for actively promoting the company on social media and strengthening its online reputation.  '
          }
        }
      ]
    }
  ]

  useEffect(() => {
    // Filter data based on the slug
    const filtered = data.find(item => item.slug === slug)?.data || []
    setFilteredData(filtered)
  }, [slug])

  const toggleShowMore = index => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className='rounded-[30px] bg-white100 mt-[20px] flex flex-col py-[30px] px-[24px] mdl:rounded-[40px] 3xl:rounded-[50px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] 3xl:flex 3xl:flex-row'>
      <div className='3xl:w-[40%]'>
        <p className='text-titleDark text-[28px] mdl:text-[40px] 3xl:text-[50px] font-bold'>
          {t('question')}
        </p>
      </div>

      <div className='3xl:w-[60%]'>
        {/* List of titles */}
        <ul className='flex flex-col mt-[20px] ml-[24px] 3xl:w-[60%]'>
          {filteredData
            .filter(item => item.title) // Only display list items with titles
            .map((item, index) => (
              <li
                key={index}
                className='text-[15px] list-disc font-medium text-titleDark mdl:text-[20px] 3xl:text-[25px] font-robotoFlex'
              >
                {item.title}
              </li>
            ))}
        </ul>

        {/* Descriptions */}
        {filteredData
          .filter(item => item.description) // Only display items with descriptions
          .map((item, index) => {
            const isExpanded = expandedItems.includes(index)
            const shouldTruncate =
              item.description && item.description.length > 50

            return (
              <div key={index} className='mt-4 ml-[24px]'>
                {shouldTruncate ? (
                  <>
                    <p className='text-[#454545] text-[15px]'>
                      {isExpanded
                        ? item.description
                        : item.description.substring(0, 50) + '...'}
                      <button
                        className='ml-2 text-blue-500 underline cursor-pointer'
                        onClick={() => toggleShowMore(index)}
                      >
                        {isExpanded ? 'Свернуть' : 'Показать больше'}
                      </button>
                    </p>
                  </>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Question
