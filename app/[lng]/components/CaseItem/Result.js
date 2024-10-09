'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' // For getting the slug from the URL
import CaseResultModalSocials from '../Modal/CaseResultModal'
import { useCustomTranslation } from '@/app/i18n/client'

const obtainedResult = [
  {
    slug: 'prime-medical-center',
    link: {
      web: 'https://pmcenter.uz/',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '+41%', uz: '+41%', en: '+41%' },
        name: {
          ru: 'число обращений в клинику / мес',
          uz: 'Klinikaga tashriflar soni / oy',
          en: 'Number of inquiries to the clinic per month'
        }
      },
      {
        item: { ru: '+23%', uz: '+23%', en: '+23%' },
        name: {
          ru: 'посещаемость',
          uz: 'Tashrif buyuruvchilar o`sishi',
          en: 'Increase in visits  '
        }
      },
      {
        item: { ru: '+18,200', uz: '+18,200', en: '+18,200' },
        name: {
          ru: 'посещений сайта / год',
          uz: 'Saytga tashriflar / yil',
          en: 'Website visits per year  '
        }
      },
      {
        descrip: {
          ru: 'Эти результаты подтверждают успешный ребрендинг и активную работу по привлечению новых пациентов, что привело к значительному росту показателей.',
          uz: "Bu natijalar samarador rebrending va yangi bemorlarni jalb qilish bo'yicha faol harakatlarni tasdiqlaydi, bu esa ko'rsatkichlarning sezilarli o'sishiga olib keldi.",
          en: 'These results confirm the success of the rebranding and active efforts to attract new patients, leading to a significant growth in metrics.'
        }
      }
    ]
  },
  {
    slug: 'xayrullo-rahmatullaevich',
    link: {
      web: 'https://dr-khashimov.uz/',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: {
          ru: 'Профессиональный имидж',
          uz: 'Professional imidj',
          en: 'Professional Image'
        }
      },
      {
        item: {
          ru: 'Увеличение доверия',
          uz: 'Ishonchni oshirish',
          en: 'Increased Trust '
        }
      },
      {
        descrip: {
          ru: 'Создание фирменного стиля и информационного сайта значительно укрепило личный бренд врача, повысив его узнаваемость и профессиональный статус. Благодаря этому, доверие со стороны пациентов возросло, что привело к увеличению числа обращений и записей на прием.',
          uz: "Korporativ identifikatsiya va axborot saytining yaratilishi shifokorning shaxsiy brendini sezilarli darajada mustahkamladi, uni ko’plar taniy boshladi va professional maqomi oshdi. Bu tufayli bemorlarning ishonchi ortdi, bu o’ navbatda so'rovlarning va qabulga yozilishlarning soni ko'payishiga olib keldi.",
          en: "The creation of a corporate identity and informational website significantly strengthened the doctor's personal brand, enhancing their visibility and professional status. As a result, patient trust increased, leading to a rise in inquiries and appointment bookings."
        }
      }
    ]
  },
  {
    slug: 'aziza-shaxzadeevna',
    link: {
      web: 'https://endocrinolog.uz/',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '+80%', uz: '+80%', en: '+80%' },
        name: {
          ru: 'Рост онлайн-запросов',
          uz: `Onlayn-so'rovlarning o'sishi`,
          en: 'Increase in online inquiries'
        }
      },
      {
        descrip: {
          ru: 'Новый сайт стал важным инструментом для привлечения новых пациентов, предоставив доступ к актуальной информации 24/7, что улучшило видимость врача в интернете.',
          uz: `Yangi sayt yangi bemorlarni jalb qilishda muhim vositaga aylandi, 24/7 dolzarb ma'lumotlardan foydalanishni ta'minladi, bu esa shifokorning Internetda ko'rinishini yaxshiladi.`,
          en: `The new website has become a crucial tool for attracting new patients, providing access to relevant information 24/7, which has improved the doctor's visibility on the internet.`
        }
      }
    ]
  },
  {
    slug: 'alisher-baxromovich',
    link: {
      web: 'https://alisher-lor.uz/',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '+2,840', uz: '+2,840', en: '+2,840' },
        name: {
          ru: 'кликов на сайт / за 1 месяц',
          uz: 'Saytga chertishlar',
          en: 'Clicks to the website '
        }
      },
      {
        item: { ru: '0,11$', uz: '0,11$', en: '0,11$' },
        name: {
          ru: 'цена за клик / за 1 месяц',
          uz: 'Chertish narxi',
          en: 'Cost per click  '
        }
      },
      {
        item: { ru: '+13,63%', uz: '+13,63%', en: '+13,63%' },
        name: {
          ru: 'CTR / за 1 месяц',
          uz: 'CTR',
          en: 'Click-through rate (CTR)'
        }
      },
      {
        descrip: {
          ru: 'Эти результаты демонстрируют успешное привлечение новых пациентов через интернет, значительное увеличение посещаемости сайта и эффективное использование контекстной рекламы для достижения целей клиента.',
          uz: "Bu natijalar bemorlar muvaffaqiyatli tarzda Internet orqali jalb qilinayotganini, saytga kirayotganlar soni sezilarli darajada oshayotganini va mijozning maqsadlariga erishish uchun kontekstli reklamadan samarali foydalanilayotganini ko'rsatyapti.",
          en: 'These results demonstrate successful online patient acquisition, a significant increase in website traffic, and effective use of contextual advertising to achieve the client’s goals.  '
        }
      }
    ]
  },
  {
    slug: 'nafisa-shuxratovna',
    link: {
      web: 'https://www.stom-tashkent.uz/',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: {
          ru: 'Увеличение числа клиентов через сайт',
          uz: "Sayt orqali mijozlar sonini ko'paytirish",
          en: 'Increased Clientele Through the Website '
        }
      },
      {
        item: {
          ru: 'Улучшение пользовательского опыта',
          uz: 'Foydalanuvchilar tajribasini yaxshilash',
          en: ' Improved User Experience '
        }
      },
      {
        descrip: {
          ru: 'Сайт стал важным инструментом для привлечения пациентов и повышения их осведомленности о профессиональных услугах доктора.',
          uz: 'Sayt bemorlarni jalb qilish va shifokorning professional xizmatlaridan xabardorligini oshirish uchun muhim vositaga aylandi.',
          en: "The website became an essential tool for attracting patients and raising their awareness of the doctor's professional services."
        }
      }
    ]
  },
  {
    slug: 'smile-design',
    link: {
      web: '',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '2,450', uz: '2,450', en: '2,450' },
        name: {
          ru: 'кликов на сайт / за 1 месяц',
          uz: 'Saytga chertishlar',
          en: 'Clicks to the website '
        }
      },
      {
        item: { ru: '0,05$', uz: '0,05$', en: '0,05$' },
        name: {
          ru: 'цена за клик / за 1 месяц',
          uz: 'Har bir chertish narxi',
          en: 'Cost per click  '
        }
      },
      {
        item: { ru: '11,64%', uz: '11,64%', en: '11,64%' },
        name: { ru: 'CTR / за 1 месяц', uz: 'CTR', en: 'CTR ' }
      },
      {
        descrip: {
          ru: 'Рекламная кампания позволила привлечь значительный трафик и уменьшить стоимость привлечения клиентов.',
          uz: 'Reklama kampaniyasi sezilarli trafikni jalb qilish va mijozlarni jalb qilish uchun xarajatlarni kamaytirish imkonini berdi.',
          en: 'The advertising campaign successfully attracted significant traffic and reduced customer acquisition costs.'
        }
      }
    ]
  },
  {
    slug: 'sanjar-akbarovich',
    link: {
      web: 'https://dr-psixoterapevt.uz',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '14,500', uz: '14,500', en: '14,500' },
        name: {
          ru: 'кликов на сайт',
          uz: 'Saytga chertishlar',
          en: 'Clicks to the website  '
        }
      },
      {
        item: { ru: '0,07$', uz: '0,07$', en: '0,07$' },
        name: {
          ru: 'цена за клик',
          uz: 'Chertish narxi',
          en: 'Cost per click '
        }
      },
      {
        item: { ru: '14,11%', uz: '14,11%', en: '14,11%' },
        name: { ru: 'CTR', uz: '  CTR', en: 'Click-through rate (CTR)  ' }
      },
      {
        descrip: {
          ru: 'Результаты показывают значительное увеличение онлайн-активности, органического трафика и успех рекламных кампаний, что привело к росту числа пациентов и укреплению связи с аудиторией.',
          uz: "Natijalar onlayn-faollikning sezilarli darajada oshganini, organik trafik va reklama kampaniyalarining muvaffaqiyatini ko'rsatyapti, bu esa bemorlar soni ko'payishiga va auditoriya bilan aloqa mustahkamlanishiga olib keldi.",
          en: 'The results indicate a significant increase in online activity, organic traffic, and the success of advertising campaigns, leading to growth in patient numbers and strengthened connections with the audience.'
        }
      }
    ]
  },
  {
    slug: 'baxtiyor-nadjullayevich',
    link: {
      web: '',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '4,820', uz: '4,820', en: '4,820' },
        name: {
          ru: 'кликов на сайт / за 1 месяц',
          uz: 'Saytga chertishlar',
          en: 'Clicks to the website'
        }
      },
      {
        item: { ru: '0,10$', uz: '0,10$', en: '0,10$' },
        name: {
          ru: 'цена за клик / за 1 месяц',
          uz: 'Har bir chertish narxi',
          en: 'Cost per click'
        }
      },
      {
        item: { ru: '14,22%', uz: '14,22%', en: '14,22%' },
        name: { ru: 'CTR / за 1 месяц', uz: '', en: 'CTR' }
      },
      {
        descrip: {
          ru: "Результатом работы стало значительное увеличение посещаемости сайта и роста числа пациентов, что позволило врачу активно наращивать количество консультаций и операций.', uz: 'Ishning natijasi saytga tashriflar sezilarli darajada oshdi va bemorlar soni ko'paydi, bu shifokorga konsultatsiyalar va operatsiyalar sonini faol tarzda oshirishga imkon berdi.",
          en: 'The results of our efforts led to a significant increase in website traffic and a rise in the number of patients, allowing the doctor to actively increase consultations and surgeries.'
        }
      }
    ]
  },
  {
    slug: 'intermed',
    link: {
      web: 'https://imed.uz/',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '+17%', uz: '+17%', en: '+17%' },
        name: { ru: 'Конверсия с сайта / за 1 месяц', uz: '', en: '' }
      },
      {
        item: { ru: '200+ лидов', uz: '200+ lidlar', en: '' },
        name: {
          ru: 'По цене 2,1$ за лид в течение 1 месяца',
          uz: ' 1 oy davomida har bir lid uchun 2,1$ narxda',
          en: 'At a cost of $2.10 per lead over one month'
        }
      },
      {
        item: { ru: '+15%', uz: '+15%', en: '+15%' },
        name: {
          ru: 'Увеличение числа подписчиков / за 1 месяц',
          uz: "Obunachilar sonini ko'paytirish",
          en: 'Increase in the number of followers'
        }
      },
      {
        descrip: {
          ru: 'Реализация проекта привела к значительному увеличению числа лидов и улучшению конверсии с сайта.',
          uz: 'Loyihaning amalga oshirilishi lidlar sonining sezilarli darajada oshishiga va sayt konversiyasi yaxshilanishiga olib keldi.',
          en: 'The project implementation resulted in a significant increase in leads and improved conversion rates from the website.'
        }
      }
    ]
  },
  {
    slug: 'mostona-med',
    link: {
      web: '',
      telegram: '',
      instagram: 'https://www.instagram.com/nargiza_xamidulayevna/'
    },
    result: [
      {
        item: {
          ru: 'Контент-менеджмент для SMM',
          uz: 'SMM uchun kontent-menejment',
          en: 'Content Management for SMM'
        }
      },
      {
        descrip: {
          ru: 'Предоставленные материалы позволили команде клиники эффективно продвигать свои услуги и сохранять постоянное присутствие в соцсетях.',
          uz: 'Taqdim etilgan materiallar klinika jamoasiga o‘z xizmatlarini samarali targ‘ib qilish va ijtimoiy tarmoqlarda doimiy ishtirok etish imkonini berdi.',
          en: "The materials provided enabled the clinic's team to effectively promote their services and maintain a consistent presence on social media."
        }
      }
    ]
  },
  {
    slug: 'mrj-trade',
    link: {
      web: 'https://mrj-trade.com',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '1,560', uz: '1,560', en: '1,560' },
        name: {
          ru: 'Кликов на сайт за месяц',
          uz: 'Oyiga saytga chertishlar',
          en: 'Clicks to the website in a month'
        }
      },
      {
        item: { ru: '0,32$', uz: '0,32$', en: '0,32$' },
        name: {
          ru: 'цена за клик ',
          uz: 'Bitta chertish narxi',
          en: 'Cost per click  '
        }
      },
      {
        item: { ru: '11,22%', uz: '11,22%', en: '11,22%' },
        name: { ru: 'CTR', uz: 'CTR', en: 'CTR ' }
      },
      {
        item: {
          ru: 'Фирменный стиль',
          uz: 'Logotip korporativ',
          en: 'Corporate Identity'
        },
        name: {
          ru: 'Логотип, раздаточный материал',
          uz: 'identifikatsiya, tarqatma materiallar',
          en: 'Logo, promotional materials '
        }
      },
      {
        descrip: {
          ru: 'Компания успешно вышла на рынок, сайт был переведен на английский язык, а рекламные кампании привлекли значительное количество целевых клиентов.',
          uz: "Kompaniya bozorga muvaffaqiyatli kirdi, sayt ingliz tiliga tarjima qilindi, reklama kampaniyalari esa ko'plab maqsadli mijozlarni jalb qildi.",
          en: 'The company successfully entered the market, the website was translated into English, and advertising campaigns attracted a significant number of targeted clients.'
        }
      }
    ]
  },
  {
    slug: 'dr-odil-alisherovich',
    link: {
      web: 'https://dr-odil.uz/',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: { ru: '750', uz: '750', en: '750' },
        name: {
          ru: ' подписчиков в Telegram',
          uz: 'Telegram obunachilari',
          en: 'Subscribers on Telegram'
        }
      },
      {
        item: { ru: '1079', uz: '1079', en: '1079' },
        name: {
          ru: ' подписчиков в Instagram',
          uz: 'Instagram obunachilari',
          en: 'Subscribers on Instagram'
        }
      },
      {
        item: {
          ru: 'Имидж врача',
          uz: 'Shifokor imidji',
          en: `Doctor's Image`
        },
        name: {
          ru: 'Укрепление личного бренда врача',
          uz: 'Shifokorning shaxsiy brendini mustahkamlash',
          en: 'Strengthening of the doctor’s personal brand'
        }
      },
      {
        descrip: {
          ru: 'Реализованные стратегии, включая новый сайт, фирменный стиль, активность в SMM и блог в Telegram, помогли укрепить имидж врача и сохранить постоянное взаимодействие с пациентами.',
          uz: 'Shifokorning shaxsiy brendini mustahkamlash Amalga oshirilgan strategiyalar, jumladan, yangi sayt, korporativ identifikatsiya, SMM faolligi va Telegramdagi blog shifokorning imidjini mustahkamlashga va bemorlar bilan doimiy muloqotda bo‘lishga yordam berdi.',
          en: `The implemented strategies, including a new website, corporate identity, active SMM presence, and a Telegram blog, helped enhance the doctor's image and maintain ongoing interaction with patients.`
        }
      }
    ]
  },
  {
    slug: 'nafisa-shuxratovna',
    link: {
      web: '',
      telegram: '',
      instagram: ''
    },
    result: [
      {
        item: {
          ru: 'Увеличение числа клиентов через сайт',
          uz: `Sayt orqali mijozlar sonini ko'paytirish`,
          en: 'Increased Clientele Through the Website'
        }
      },
      {
        item: {
          ru: 'Улучшение пользовательского опыта',
          uz: 'Foydalanuvchilar tajribasini yaxshilash',
          en: 'Improved User Experience'
        }
      },
      {
        descrip: {
          ru: 'Сайт стал важным инструментом для привлечения пациентов и повышения их осведомленности о профессиональных услугах доктора.',
          uz: 'Sayt bemorlarni jalb qilish va shifokorning professional xizmatlaridan xabardorligini oshirish uchun muhim vositaga aylandi.',
          en: "The website became an essential tool for attracting patients and raising their awareness of the doctor's professional services."
        }
      }
    ]
  },
  {
    slug: 'ant-group',
    link: {
      web: '',
      telegram: '',
      instagram: 'https://www.instagram.com/antgroup_uz/'
    },
    result: [
      {
        item: { ru: 'SMM', uz: 'SMM', en: 'SMM' },
        name: {
          ru: 'Instagram / Telegram / YouTube',
          uz: 'SMM Instagram / Telegram / YouTube',
          en: 'SMM Instagram / Telegram / YouTube'
        }
      },
      {
        descrip: {
          ru: 'SMM-стратегия способствовала активному взаимодействию с аудиторией и укреплению бренда компании в социальных сетях, что привело к значительному росту вовлеченности и подписчиков.',
          uz: `SMM-strategiya yordamida ijtimoiy tarmoqlarda auditoriya bilan faol muloqotga hissa qo'shildi va kompaniyaning brendi mustahkamlandi, bu esa ishtirokchilar va obunachilarning sezilarli darajada oshishiga olib keldi.`,
          en: 'The SMM strategy facilitated active interaction with the audience and bolstered the company’s brand presence on social media, resulting in a significant increase in engagement and followers.'
        }
      }
    ]
  }
]

const Result = () => {
  const [filteredResult, setFilteredResult] = useState({ result: [], link: '' })
  const [modalLinks, setModalLinks] = useState(false)
  const [expandedItems, setExpandedItems] = useState([])
  const { slug, lng } = useParams() // Get slug from the URL
  const { t } = useCustomTranslation(lng, 'caseslug')
  const caseResultModalOpen = () => setModalLinks(!modalLinks)

  useEffect(() => {
    // Find the result based on the slug
    const resultData = obtainedResult.find(item => item.slug === slug)
    if (resultData) {
      setFilteredResult(resultData) // Set both result and link
    }
  }, [slug]) // Run this effect when slug changes

  const toggleShowMore = index => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className='mt-[20px] py-[30px] px-[24px] rounded-[30px] bg-white 3xl:flex 3xl:items-center relative mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px]'>
      {/* Левая часть: Заголовок и кнопка */}
      <div className='3xl:w-[45%] mb-[30px] 3xl:mb-0 3xl:flex 3xl:flex-col'>
        {/* Заголовок */}
        <p className='text-[#7B72EB] font-bold text-[28px] mb-4 3xl:text-[50px] w-[50%] 3xl:mb-[30px]'>
          {t('result')}
        </p>
        {/* Кнопка */}
        {filteredResult.link ? (
          <button
            onClick={caseResultModalOpen}
            className='block text-center text-white bg-[#7B72EB] py-[20px] px-[30px] w-[90%] rounded-[30px] font-bold mt-4 absolute bottom-[20px] mdl:w-[50%] 3xl:w-[50%] 3xl:relative 3xl:mt-[30px]'
          >
            {t('button')}
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
        {filteredResult.result.map((item, index) => (
          <div className='flex flex-col' key={index}>
            <div key={index} className='mb-6 3xl:mb-0'>
              <p className='text-[35px] mdl:text-[40px] font-medium text-[#010101] 3xl:text-[50px]'>
                {item?.item?.[lng]?.length ? item.item[lng] : null}
              </p>
              <p className='text-[14px] mdl:text-[20px] text-[#A6A6A6] 3xl:text-[18px] font-robotoFlex'>
			  {item?.name?.[lng]?.length ? item.name[lng] : null}
              </p>
            </div>
            {item?.descrip ? (
              <div className='mdl:mt-[15px] 2xl:mt-[20px]'>
                <p className='text-[#454545]'>
                  {expandedItems.includes(index) ||
                  item.descrip[lng]?.length <= 50
                    ? item.descrip[lng]
                    : `${item.descrip[lng]?.slice(0, 200)}...`}
                </p>
                {item.descrip[lng]?.length > 200 && (
                  <button
                    className='text-[#7B72EB] font-bold mt-2'
                    onClick={() => toggleShowMore(index)}
                  >
                    {expandedItems.includes(index)
                      ? lng === 'ru'
                        ? 'Скрыть'
                        : lng === 'uz'
                        ? 'Yopish'
                        : 'Hide'
                      : lng === 'ru'
                      ? 'Показать больше'
                      : lng === 'uz'
                      ? 'Ko‘proq ko‘rsatish'
                      : 'Show more'}
                  </button>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Result
