'use client'
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const data = [
  {
    slug: 'prime-medical-center',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создали современный сайт с удобной навигацией и адаптацией под все устройства.'
        ]
      },
      {
        title: 'SMM-продвижение',
        descriptions: [
          'Провели активное продвижение на Instagram и YouTube, увеличив количество подписчиков.'
        ]
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          'Настроили рекламу для целевой аудитории, привлеченной к гастроэнтерологическим услугам.'
        ]
      },
      {
        title: 'Заполнение онлайн-пространства',
        descriptions: [
          'Организовали размещение на онлайн-агрегаторах и картах, обеспечив полное присутствие клиники в сети.'
        ]
      }
    ]
  },
  {
    slug: 'smile-design',
    providedService: [
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          'Настроили рекламу, направленную на целевую аудиторию в Узбекистане и Центральной Азии.'
        ]
      },
      {
        title: 'SMM-продвижение',
        descriptions: [
          'Активное продвижение в социальных сетях для привлечения новых пациентов.'
        ]
      },
      {
        title: 'Оптимизация онлайн-пространства',
        descriptions: [
          'Размещение на ключевых онлайн-платформах для максимального охвата аудитории.'
        ]
      }
    ]
  },
  {
    slug: 'ant-group',
    providedService: [
      {
        title: 'SMM',
        descriptions: [
          'Разработана и реализована стратегия SMM для повышения вовлеченности и узнаваемости компании в онлайн-пространстве.'
        ]
      },
      {
        title: 'Создание контента',
        descriptions: [
          'Создали и адаптировали контент для социальных сетей, чтобы привлечь целевую аудиторию и поддерживать активность.'
        ]
      }
    ]
  },
  {
    slug: 'dr-odil-alisherovich',
    providedService: [
      {
        title: 'Брендинг',
        descriptions: [
          'Разработали уникальный фирменный стиль, который помогает врачу выделиться среди конкурентов.'
        ]
      },
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создали информативный сайт, представляющий услуги и опыт врача, что способствовало улучшению имиджа.'
        ]
      },
      {
        title: 'SMM',
        descriptions: [
          'Запустили активное присутствие в социальных сетях для взаимодействия с пациентами и расширения аудитории.'
        ]
      },
      {
        title: 'Запуск блога в Telegram',
        descriptions: [
          'Открыли блог для публикации актуальных материалов, что способствовало поддержанию интереса к услугам врача.'
        ]
      }
    ]
  },
  {
    slug: 'mrj-trade',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создали функциональный и современный сайт, полностью соответствующий требованиям клиента.'
        ]
      },
      {
        title: 'Брендинг',
        descriptions: [
          'Разработали логотип, визитки и маркетинговые материалы для формирования сильного имиджа компании.'
        ]
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          'Настроили таргетированную рекламу на соответствующие рынки для привлечения новых клиентов.'
        ]
      }
    ]
  },
  {
    slug: 'baxtiyor-nadjullayevich',
    providedService: [
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          'Запущена реклама, ориентированная на привлечение пациентов, нуждающихся в эндоскопических операциях.'
        ]
      },
      {
        title: 'Оптимизация сайта',
        descriptions: [
          'Улучшение скорости работы сайта и его юзабилити для лучшего взаимодействия с пациентами.'
        ]
      },
      {
        title: 'SMM-продвижение',
        descriptions: [
          'Поддержка активности в социальных сетях для увеличения охвата.'
        ]
      }
    ]
  },
  {
    slug: 'mostona-med',
    providedService: [
      {
        title: 'Контент-менеджмент',
        descriptions: [
          'Разработали контент-план с темами для публикаций, статей и видео, адаптированных под авторские методики.'
        ]
      },
      {
        title: 'Сценарии для видео',
        descriptions: [
          'Создали готовые сценарии для видеоматериалов, которые клиника могла бы реализовать самостоятельно.'
        ]
      },
      {
        title: 'Тексты для социальных сетей',
        descriptions: [
          'Подготовлены тексты для регулярного размещения в Instagram и других соцсетях.'
        ]
      }
    ]
  },
  {
    slug: 'nafisa-shuxratovna',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создали современный и информативный сайт в формате посадочной страницы (Landing page), который предоставляет всю необходимую информацию о стоматологе и его услугах.'
        ]
      }
    ]
  },
  {
    slug: 'xayrullo-rahmatullaevich',
    providedService: [
      {
        title: 'Брендинг',
        descriptions: [
          'Разработан фирменный стиль, включая логотип, визитки и элементы униформы, которые подчеркивают профессионализм врача.'
        ]
      },
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создан современный информационный сайт, представляющий услуги и опыт врача, что помогло повысить его узнаваемость.'
        ]
      }
    ]
  },
  {
    slug: 'aziza-shaxzadeevna',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создан современный сайт, включающий блог и актуальную информацию о деятельности врача, что позволило улучшить доступность для пациентов.'
        ]
      },
      {
        title: 'Оптимизация контента',
        descriptions: [
          'Адаптировали контент сайта для удобного восприятия и эффективного привлечения новых пациентов.'
        ]
      }
    ]
  },
  {
    slug: 'alisher-baxromovich',
    providedService: [
      {
        title: 'Фирменный стиль',
        descriptions: [
          'Разработан уникальный фирменный стиль, включающий логотип, визитки и элементы униформы для клиники.'
        ]
      },
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создан современный, информативный сайт для клиники, который предоставляет пользователям легкий доступ к информации и онлайн-записи.'
        ]
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          'Настроена эффективная контекстная реклама для привлечения целевой аудитории.'
        ]
      }
    ]
  },
  {
    slug: 'sanjar-akbarovich',
    providedService: [
      {
        title: 'Фирменный стиль',
        descriptions: [
          'Разработан логотип, визитки и элементы фирменного стиля, включая маркетинговые материалы для продвижения услуг.'
        ]
      },
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создан сайт на платформе Tilda, который обеспечивает удобный доступ к информации о медицинских услугах.'
        ]
      },
      {
        title: 'Блог в Telegram',
        descriptions: [
          'Открыт блог для публикации актуальных материалов, что привлекло органический трафик.'
        ]
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          'Настроена реклама для привлечения новых клиентов и удержания текущих пациентов.'
        ]
      }
    ]
  },
  {
    slug: 'intermed',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
          'Создали современный и интуитивный сайт с улучшенным интерфейсом, адаптивным дизайном и полной локализацией для узбекской аудитории.'
        ]
      },
      {
        title: 'Запуск таргетированной рекламы',
        descriptions: [
          'Настроили таргетированную рекламу в Instagram для генерации лидов и увеличения вовлеченности пользователей.'
        ]
      },
      {
        title: 'Ускорение работы сайта',
        descriptions: [
          'Внедрили технологию React JS для ускорения загрузки и улучшения пользовательского опыта.'
        ]
      }
    ]
  }
]


const ServicesProvided = () => {
  const { slug, lng } = useParams()
  const [providedService, setProvidedService] = useState([])
  const { t } = useCustomTranslation(lng, 'caseslug')

  useEffect(() => {
    const filteredService = data.find(item => item.slug === slug)
    if (filteredService) {
      setProvidedService(filteredService.providedService)
    }
  }, [slug]) // Re-run the effect when slug changes

  return (
    <div className='mt-[20px] py-[30px] px-[24px] rounded-[30px] bg-white mdl:py-[50px] mdl:px-[40px] 3xl:flex 3xl:flex-row mdl:rounded-[40px] 3xl:rounded-[50px]'>
      {/* Заголовок */}
      <div className='w-[50%] mb-6 mdl:mb-[50px] 3xl:w-[40%]'>
        <p className='text-titleDark font-bold text-[28px] mdl:text-[40px] 3xl:text-[50px] 3xl:w-[10%]'>
          {t('optained')}
        </p>
      </div>

      <div className='3xl:w-[60%]'>
        {/* Перебираем список предоставленных услуг */}
        {providedService.map((service, index) => (
          <div key={index} className='mb-6 mdl:mb-[70px] 3xl:mb-[40px]'>
            {/* Название услуги */}
            <p className='text-[18px] font-semibold text-black mb-2 mdl:text-[25px]'>
              {service.title}
            </p>

            {/* Описание услуги (map through multiple descriptions if they exist) */}
            <ul className='list-disc list-inside text-[#454545]'>
              {service.descriptions.map((description, descIndex) => (
                <p
                  key={descIndex}
                  className="text-[15px] mdl:text-[20px] mb-1 relative font-robotoFlex before:content-['-'] before:mr-2"
                >
                  {description}
                </p>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesProvided
