'use client'
import React, { useState, useEffect, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'
import { gsap } from 'gsap'
import Link from 'next/link'

import inter from '@/public/images/cases/inter.png'
import caseDesckription from '@/public/images/Vector.png'
import { useParams } from 'next/navigation'

// Items for filtering
const items = [
  {
    id: 1,
    name: {
      uz: 'Barchasi',
      ru: 'Все',
      en: 'All'
    },
    type: 'all'
  },
  {
    id: 2,
    name: {
      uz: 'Saytlar',
      ru: 'Сайты',
      en: 'Websites'
    },
    type: 'Сайт'
  },
  {
    id: 3,
    name: {
      uz: 'Telegram botlar',
      ru: 'Telegram-боты',
      en: 'Telegram Bots'
    },
    type: 'Telegram Bots'
  },
  {
    id: 4,
    name: {
      uz: 'SMM',
      ru: 'SMM',
      en: 'SMM'
    },
    type: 'SMM'
  },
  {
    id: 5,
    name: {
      uz: 'Reklama',
      ru: 'Реклама',
      en: 'Advertising'
    },
    type: 'Реклама'
  },
  {
    id: 6,
    name: {
      uz: 'SEO',
      ru: 'SEO',
      en: 'SEO'
    },
    type: 'SEO'
  },
  {
    id: 7,
    name: {
      uz: 'Brending',
      ru: 'Брендинг',
      en: 'Branding'
    },
    type: 'Брендинг'
  }
]

const data = [
  {
    id: 1,
    banner: {
      title: 'Intermed Innovation',
      shortDescription: {
        uz: 'Sayt SEO',
        ru: 'Сайт SEO',
        en: 'Website SEO'
      },
      photo: inter,
      slug: 'intermed'
    },
    statistics: [
      {
        value: {
          uz: '+17%',
          ru: '+17%',
          en: '+17%'
        },
        label: {
          uz: 'Sayt koversiyasi 1 oyda',
          ru: 'Конверсия с сайта за 1 месяц',
          en: 'Conversion rate from the website '
        }
      },
      {
        value: {
          uz: '200+ yetakchilar',
          ru: '200+ лидов',
          en: '200+ leads'
        },
        label: {
          uz: '1 oy davomida har bir lid uchun 2,1$ narxda',
          ru: 'По цене 2,1$ за лид в течение 1 месяца',
          en: ' At a cost of $2.10 per lead over one month'
        }
      },
      {
        value: {
          uz: '+15%',
          ru: '+15%',
          en: '+15%'
        },
        label: {
          uz: "Obunachilar sonini ko'paytirish",
          ru: 'Увеличение числа подписчиков',
          en: 'Increase in the number of followers'
        }
      }
    ]
  },
  {
    id: 2,
    banner: {
      title: 'MRJ Trade',
      shortDescription: {
        uz: 'Sayt SEO Brending Reklama',
        ru: 'Сайт SEO Брендинг Реклама',
        en: 'Website SEO Branding Advertising'
      },
      photo:
        'https://ucarecdn.com/581a982e-f1c1-44c1-8dd4-1862300a3e0c/-/preview/1000x533/',
      slug: 'mrj-trade'
    },
    statistics: [
      {
        value: {
          uz: '+1,560',
          ru: '+1,560',
          en: '+1,560'
        },
        label: {
          uz: 'Oyiga saytga chertishlar',
          ru: 'кликов на сайт за месяц',
          en: 'Clicks to the website in a month'
        }
      },
      {
        value: {
          uz: '+0,32$',
          ru: '+0,32$',
          en: '+0.32$'
        },
        label: {
          uz: 'Bitta chertish narxi',
          ru: 'цена за клик',
          en: 'Cost per click '
        }
      },
      {
        value: { uz: '+11,22%', ru: '+11,22%', en: '+11.22%' },
        label: { uz: 'CTR', ru: 'CTR', en: 'CTR' }
      }
    ]
  },
  {
    id: 3,
    banner: {
      title: 'Prime medical center',
      shortDescription: {
        uz: 'SMM Sayt',
        ru: 'SMM Сайт',
        en: 'SMM Website'
      },
      photo:
        'https://ucarecdn.com/3d44d91c-b27b-41a0-9eb5-a02d51e18ad0/-/preview/1000x533/',
      slug: 'prime-medical-center'
    },
    statistics: [
      {
        value: {
          uz: '+41%',
          ru: '+41%',
          en: '+41%'
        },
        label: {
          uz: 'Klinikaga tashriflar soni / oy',
          ru: 'число обращений в клинику',
          en: 'Number of inquiries to the clinic per month'
        }
      },
      {
        value: {
          uz: '+23%',
          ru: '+23%',
          en: '+23%'
        },
        label: {
          uz: "Tashrif buyuruvchilar o'sishi",
          ru: 'посещаемость',
          en: ' Increase in visits'
        }
      },
      {
        value: {
          uz: '+18,200%',
          ru: '+18,200%',
          en: '+18,200%'
        },
        label: {
          uz: 'Saytga tashriflar / yil',
          ru: 'посещений сайта / год',
          en: 'Website visits per year'
        }
      }
    ]
  },
  {
    id: 4,
    banner: {
      title: 'Dr Odil Alisherovich',
      shortDescription: {
        uz: 'Sayt SMM',
        ru: 'Сайт SMM',
        en: 'Website SMM'
      },
      photo:
        'https://ucarecdn.com/3821b6ff-68bf-49a0-95a1-3a97a2b24367/-/preview/1000x533/',
      slug: 'dr-odil-alisherovich'
    },
    statistics: [
      {
        value: {
          uz: '750',
          ru: '750',
          en: '750'
        },
        label: {
          uz: 'Telegram obunachilari',
          ru: 'подписчиков в Telegram',
          en: 'Subscribers on Telegram'
        }
      },
      {
        value: {
          uz: '1070',
          ru: '1070',
          en: '1070'
        },
        label: {
          uz: 'Instagram obunachilari',
          ru: 'подписчиков в Instagram',
          en: 'Subscribers on Instagram'
        }
      },
      {
        value: {
          uz: 'Shifokorning imidji',
          ru: 'Имидж врача',
          en: 'Doctor’s image'
        },
        label: {
          uz: 'Shifokorning shaxsiy brendini mustahkamlash',
          ru: 'Укрепление личного бренда врача',
          en: 'Strengthening of the doctor’s personal brand '
        }
      }
    ]
  },
  {
    id: 5,
    banner: {
      title: 'Mastona Med',
      shortDescription: {
        uz: 'SMM',
        ru: 'SMM',
        en: 'SMM'
      },
      photo:
        'https://ucarecdn.com/9838f328-be53-4820-beb0-50de671b5042/-/preview/1000x533/',
      slug: 'mostona-med'
    },
    statistics: [
      {
        label: {
          uz: 'SMM uchun kontent-menejment',
          ru: 'Контент-менеджмент для SMM',
          en: 'Content Management for SMM'
        }
      }
    ]
  },
  {
    id: 6,
    banner: {
      title: 'Бахтиер Наджиюллаевич',
      shortDescription: {
        uz: 'Reklama',
        ru: 'Реклама',
        en: 'Advertising'
      },
      photo:
        'https://ucarecdn.com/59e5684a-271c-41ab-a8d2-1efe4622449e/-/preview/1000x533/',
      slug: 'baxtiyor-nadjullayevich'
    },
    statistics: [
      {
        value: {
          uz: '+4,820',
          ru: '+4,820',
          en: '+4,820'
        },
        label: {
          uz: 'Saytga chertishlar / 1 oyda',
          ru: 'кликов на сайт / за 1 месяц',
          en: 'Clicks to the website   / in 1 month'
        }
      },
      {
        value: {
          uz: '0,10$',
          ru: '0,10$',
          en: '0.10$'
        },
        label: {
          uz: 'Har bir chertish narxi / 1 oyda',
          ru: 'цена за клик / за 1 месяц',
          en: 'Cost per click / in 1 month'
        }
      },
      {
        value: {
          uz: '+14,22%',
          ru: '+14,22%',
          en: '+14.22%'
        },
        label: {
          uz: 'CTR / 1 oyda',
          ru: 'CTR / за 1 месяц',
          en: 'CTR / in 1 month'
        }
      }
    ]
  },
  {
    id: 7,
    banner: {
      title: 'Smile Design',
      shortDescription: {
        uz: 'Reklama',
        ru: 'Реклама',
        en: 'Advertising'
      },
      photo:
        'https://ucarecdn.com/319af659-eec1-45b4-9cfc-870415179a17/-/preview/1000x533/',
      slug: 'smile-design'
    },
    statistics: [
      {
        value: {
          uz: '2,450',
          ru: '2,450',
          en: '2,450'
        },
        label: {
          uz: 'Saytga chertishlar / 1 oyda',
          ru: 'кликов на сайт / за 1 месяц',
          en: 'Clicks to the website / in 1 month'
        }
      },
      {
        value: {
          uz: '0,05$',
          ru: '0,05$',
          en: '0.05$'
        },
        label: {
          uz: 'Har bir chertish narxi / 1 oyda',
          ru: 'цена за клик / за 1 месяц',
          en: 'Cost per click / in 1 month'
        }
      },
      {
        value: {
          uz: '11,64%',
          ru: '11,64%',
          en: '11.64%'
        },
        label: {
          uz: 'CTR / 1 oyda',
          ru: 'CTR / за 1 месяц',
          en: 'CTR / in 1 month'
        }
      }
    ]
  },
  {
    id: 8,
    banner: {
      title: 'Нафиса Шухратовна',
      shortDescription: {
        uz: 'Sayt Brending',
        ru: 'Сайт Брендинг',
        en: 'Website Branding'
      },
      photo:
        'https://ucarecdn.com/ff5c48de-f62f-43d3-930f-deda157f95d8/-/preview/1000x533/',
      slug: 'nafisa-shuxratovna'
    },
    statistics: [
      {
        label: {
          uz: "Sayt orqali mijozlar sonini ko'paytirish",
          ru: 'Увеличение числа клиентов через сайт',
          en: 'Increased Clientele Through the Website'
        }
      },
      {
        label: {
          uz: 'Foydalanuvchilar tajribasini yaxshilash',
          ru: 'Улучшение пользовательского опыта',
          en: 'Improved User Experience '
        }
      }
    ]
  },
  {
    id: 10,
    banner: {
      title: 'Хайрилло Рахматуллаевич',
      shortDescription: {
        uz: 'Sayt Brending',
        ru: 'Сайт Брендинг',
        en: 'Website Branding'
      },
      photo:
        'https://ucarecdn.com/2ba0ba68-c9fe-4385-9455-ab649077f091/-/preview/1000x533/',
      slug: 'xayrullo-rahmatullaevich'
    },
    statistics: [
      {
        label: {
          uz: 'Professional imidj',
          ru: 'Профессиональный имидж',
          en: 'Professional image'
        }
      },
      {
        label: {
          uz: 'Ishonchni oshirish',
          ru: 'Увеличение доверия',
          en: 'Increased Trust'
        }
      }
    ]
  },
  {
    id: 11,
    banner: {
      title: 'Ant Group',
      shortDescription: {
        uz: 'SMM',
        ru: 'SMM',
        en: 'SMM'
      },
      photo:
        'https://ucarecdn.com/49c73bea-744c-4688-9381-749f0a02dddd/-/preview/1000x533/',
      slug: 'ant-group'
    },
    statistics: [
      {
        value: {
          uz: 'SMM',
          ru: 'SMM',
          en: 'SMM'
        },
        label: {
          uz: 'SMM Instagram / Telegram / YouTube',
          ru: 'SMM Instagram / Telegram / YouTube',
          en: 'SMM Instagram / Telegram / YouTube'
        }
      }
    ]
  },
  {
    id: 12,
    banner: {
      title: 'Алишер Бахромович',
      shortDescription: {
        uz: 'Sayt Reklama SEO Brending',
        ru: 'Сайт Реклама SEO Брендинг',
        en: 'Website Advertising SEO Branding'
      },
      photo:
        'https://ucarecdn.com/63e07933-c844-4595-bb71-7f8daeb71e1a/-/preview/1000x533/',
      slug: 'alisher-baxromovich'
    },
    statistics: [
      {
        value: {
          uz: '2,840',
          ru: '2,840',
          en: '2,840'
        },
        label: {
          uz: 'Saytga chertishlar / 1 oyda',
          ru: 'кликов на сайт   / за 1 месяц',
          en: 'Clicks to the website  / in 1 month'
        }
      },
      {
        value: {
          uz: '0,11$',
          ru: '0,11$',
          en: '0.11$'
        },
        label: {
          uz: 'Chertish narxi / 1 oyda',
          ru: 'цена за клик   / за 1 месяц',
          en: 'Cost per click    / in 1 month'
        }
      },
      {
        value: {
          uz: '13,63%',
          ru: '13,63%',
          en: '13.63%'
        },
        label: {
          uz: 'CTR   / 1 oyda',
          ru: 'CTR   / за 1 месяц',
          en: 'CTR   / in 1 month'
        }
      }
    ]
  },
  {
    id: 13,
    banner: {
      title: 'Ахмедов Санджар Акбарович',
      shortDescription: {
        uz: 'Sayt Reklama Brending',
        ru: 'Сайт Реклама Брендинг',
        en: 'Website Advertising Branding'
      },
      photo:
        'https://ucarecdn.com/15d5c5c4-5760-4093-a6a7-4df1af132578/-/preview/1000x533/',
      slug: 'sanjar-akbarovich'
    },
    statistics: [
      {
        value: {
          uz: '14,500',
          ru: '14,500',
          en: '14,500'
        },
        label: {
          uz: 'Saytga chertishlar',
          ru: 'кликов на сайт',
          en: 'Clicks to the website  '
        }
      },
      {
        value: {
          uz: '0,07$',
          ru: '0,07$',
          en: '0.07$'
        },
        label: {
          uz: 'Bitta chertish narxi',
          ru: 'цена за клик',
          en: 'Cost per click'
        }
      },
      {
        value: { uz: '14,11%', ru: '14,11%', en: '14.11%' },
        label: { uz: 'CTR', ru: 'CTR', en: 'CTR' }
      }
    ]
  },
  {
    id: 14,
    banner: {
      title: 'Азиза Шахзадэевна',
      shortDescription: {
        uz: 'Reklama Sayt',
        ru: 'Реклама Сайт',
        en: 'Advertising Website'
      },
      photo:
        'https://ucarecdn.com/c1131e2f-5cdb-4c1a-8a37-46bd923ceae2/-/preview/1000x533/',
      slug: 'aziza-shaxzadeevna'
    },
    statistics: [
      {
        value: {
          uz: '+80%',
          ru: '+80%',
          en: '+80%'
        },
        label: {
          uz: "Onlayn-so'rovlarning o'sishi",
          ru: 'Рост онлайн-запросов',
          en: 'Increase in online inquiries'
        }
      }
    ]
  }
]

const Content = () => {
  const [selected, setSelected] = useState(1)
  const [filteredData, setFilteredData] = useState(data) // State for filtered data
  const mobileSpansRef = useRef([])
  const desktopSpansRef = useRef([])
  const { lng } = useParams()
  const handleSelect = (id, type) => {
    setSelected(id)

    // Filter data based on the selected type
    if (type === 'all') {
      setFilteredData(data) // Show all if "Все" is selected
    } else {
      setFilteredData(
        data.filter(item => item.banner.shortDescription.includes(type))
      )
    }
  }

  // GSAP animation effect for menu
  useEffect(() => {
    if (mobileSpansRef.current[selected]) {
      gsap.fromTo(
        mobileSpansRef.current[selected],
        { width: 0 },
        { width: '100%', duration: 0.5, ease: 'power2.out' }
      )
    }
    if (desktopSpansRef.current[selected]) {
      gsap.fromTo(
        desktopSpansRef.current[selected],
        { width: 0 },
        { width: '100%', duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [selected])

  const responsive = {
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3
    }
  }

  return (
    <div className='w-full'>
      <div className='lg:hidden w-full px-[16px] py-[20px]'>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={false}
          infinite={false}
        >
          {items.map(item => (
            <div key={item.id} className='text-center'>
              <button
                className={`text-[15px] pb-[10px] font-semibold ${
                  selected === item.id ? 'text-violet100' : 'text-titleDark'
                }`}
                onClick={() => handleSelect(item.id, item.type)}
              >
                {item.name[lng]}
              </button>
              {selected === item.id && (
                <span
                  ref={el => (mobileSpansRef.current[item.id] = el)}
                  className='block w-full h-[5px] mt-2 bg-violet100 mx-auto rounded-t-[5px]'
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Filter Options */}
      <div className='hidden lg:flex lg:gap-[50px] py-[30px] px-[20px]'>
        {items.map(item => (
          <div key={item.id} className='text-center'>
            <button
              className={`text-[20px] font-semibold ${
                selected === item.id ? 'text-violet100' : 'text-titleDark'
              }`}
              onClick={() => handleSelect(item.id, item.type)}
            >
              {item.name[lng]}
            </button>
            {selected === item.id && (
              <span
                ref={el => (desktopSpansRef.current[item.id] = el)}
                className='block w-full h-[5px] mt-2 bg-violet100 mx-auto rounded-t-[5px]'
              />
            )}
          </div>
        ))}
      </div>

      {/* Cards Section (Filtered Data) */}
      <div className='mx-[16px] flex flex-col gap-[5px] 2xl:flex 2xl:flex-row 2xl:flex-wrap  2xl:justify-between 2xl:mx-[30px]'>
        {filteredData.map((item, idx) => (
          <Link
            href={`/cases/${item.banner.slug}`} // Dynamic route based on slug
            key={idx}
            className='w-full mt-[20px] 3xl:w-[49%] 6xl:max-w-[99%] relative group cursor-pointer 2xl:mb-[80px]'
          >
            <div className='relative'>
              <Image
                src={item.banner.photo}
                width={1500}
                height={900}
                quality={100}
                alt='banner image'
                className='object-cover w-full h-full   2xl:h-[400px] 4xl:h-[500px]'
              />
              {/* Hidden content that appears on hover */}
              <div className='hidden 3xl:absolute bottom-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 3xl:flex justify-center items-center bg-opacity-[70%]'>
                <div className='h-[100px] absolute bottom-[20px]'>
                  <div className='flex flex-row gap-[40px] items-center justify-center 3xl:px-[40px]'>
                    {item.statistics.map((stat, statIdx) => (
                      <div
                        key={statIdx}
                        className='flex flex-col gap-[5px] text-center'
                      >
                        <p className='text-white100 text-[18px] 3xl:text-[30px] 4xl:text-[50px] font-bold'>
                          {stat.value && stat.value[lng]
                            ? stat.value[lng]
                            : null}
                        </p>
                        <p className='text-white100 text-[18px] 4xl:text-[20px] font-medium 3xl:text-[18px] font-robotoFlex'>
                          {stat.label && stat.label[lng]
                            ? stat.label[lng]
                            : null}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-[20px] 3xl:mt-[25px] flex flex-col gap-[4px]'>
              <p className='text-[20px] font-semibold mdx:text-[28px] 4xl:text-[35px]'>
                {item.banner.title}
              </p>
              <p className='text-[14px] text-violet100 mdx:text-[18px] font-semibold w-full flex flex-row '>
                {item.banner.shortDescription[lng]
                  .split(' ')
                  .map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <Image
                          src={caseDesckription}
                          width={40}
                          quality={100}
                          height={40}
                          alt='separator'
                          className='mx-[6px] w-[14px] h-[14px] mdl:w-[20px] mdl:h-[20px]'
                        />
                      )}
                      <span>{word}</span>
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Content
