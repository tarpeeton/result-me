"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const data = [
  {
    slug: 'prime-medical-center',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
          "Мы создали современный сайт с удобным интерфейсом и быстрым откликом, который легко адаптируется под любые устройства. Это позволило увеличить охват и улучшить пользовательский опыт."
        ],
      },
      {
        title: 'SMM-продвижение',
        descriptions: [
          'Организовали масштабное продвижение в Instagram и YouTube, привлекая внимание аудитории к передовым услугам стоматологии.',
          'YouTube стал источником значительного органического трафика, благодаря профессионально созданным видеороликам.'
        ],
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          'Мы настроили контекстную рекламу, ориентированную на целевую аудиторию, заинтересованную в стоматологических услугах.',
          'Лидогенерация была направлена на привлечение высококачественных заявок и пациентов.'
        ],
      },
      {
        title: 'Заполнение онлайн-пространства',
        descriptions: [
          'В дополнение к основным услугам, мы инициировали активное размещение информации о клинике на различных онлайн-картах и сервисах-агрегаторах.',
          'Это обеспечило максимальное присутствие бренда в сети.'
        ],
      },
    ],
  },
  {
    slug: 'smile-design',
    providedService: [
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          "Мы настроили высокоэффективную контекстную рекламу, ориентированную на целевую аудиторию, которая искала стоматологические услуги в Узбекистане и Центральной Азии.",
          "Стратегия была направлена на получение целевого трафика и максимизацию видимости бренда на ключевых платформах."
        ],
      },
    ],
  },
  {
    slug: 'ant-group',
    providedService: [
      {
        title: 'SMM',
        descriptions: [
          "Разработана и реализована стратегия SMM для повышения вовлеченности и узнаваемости компании в онлайн-пространстве.",
        ],
      },
    ],
  },
  {
    slug: 'dr-odil-alisherovich',
    providedService: [
      {
        title: 'Брендинг',
        descriptions: [
          "Разработан уникальный фирменный стиль, который помогает выделиться на фоне конкурентов.",
          
        ],
      },
      {
        title: 'Разработка сайта',
        descriptions: [
          "Создан информативный сайт, представляющий услуги и опыт врача.",
        ],
      },
      {
        title: 'SMM',
        descriptions: [
          "Настроено активное присутствие в социальных сетях для взаимодействия с пациентами и расширения аудитории.",
        ],
      },
      {
        title: 'Запуск блога в Telegram',
        descriptions: [
          "Открыт блог для публикации актуальных материалов, что способствует поддержанию интереса к услугам.",
        ],
      },
    ],
  },
  {
    slug: 'mrj-trade',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: ["Мы создали современный и функциональный сайт, полностью соответствующий требованиям клиента."]
      },
      {
        title: 'Брендинг',
        descriptions: ["Разработали логотип, визитки и другие маркетинговые материалы для формирования сильного имиджа компании."]
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: ["Настроили таргетированную рекламу, направленную на соответствующие рынки, для привлечения новых клиентов."]
      },
    ],
  },
  {
    slug: 'baxtiyor-nadjullayevich',
    providedService: [
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
          "Мы разработали стратегию и запустили контекстную рекламу, ориентированную на целевую аудиторию. Кампания была настроена таким образом, чтобы обеспечить максимальный охват и привлечь пациентов, нуждающихся в услугах эндоскопической хирургии. В результате врач начал активно принимать новых пациентов, увеличилось количество записей на консультации и операции.",
          
        ],
      },
    ],
  },
  {
    slug: 'mostona-med',
    providedService: [
      {
        title: 'Контент-менеджмент',
        descriptions: [
         "Мы разработали стратегический контент-план, который включал подробные темы для статей, публикаций и видео. Каждый пункт был адаптирован под специфику интегративной медицины и авторские методики клиники Mastona Med. Помимо этого, мы создали сценарии для видео и тексты для социальных сетей, чтобы команда клиники могла самостоятельно реализовать их, не привлекая внешних специалистов. Все материалы были структурированы и подготовлены таким образом, чтобы их было легко интегрировать в текущие процессы маркетинга клиники."
        ],
      },
    ],
  },
  {
    slug: 'nafisa-shuxratovna',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
         "Был разработан современный и информативный сайт в формате Landing (посадочная страница), который легко воспринимается и предоставляет пользователям всю нужную информацию."
        ],
      },
    ],
  },
  {
    slug: 'xayrullo-rahmatullaevich',
    providedService: [
      {
        title: 'Брендинг',
        descriptions: [
         "Был разработан фирменный стиль, включая логотип, визитки и элементы униформы."
        ],
      },
      {
        title: 'Разработка сайта',
        descriptions: [
         "Создан информационный сайт, который представляет услуги и опыт врача, а также улучшает его онлайн-репутацию."
        ],
      },
    ],
  },
  {
    slug: 'aziza-shaxzadeevna',
    providedService: [
      {
        title: 'Разработка сайта',
        descriptions: [
         "Создан современный сайт, который включает блоги и актуальную информацию о деятельности врача."
        ],
      },
    ],
  },
  {
    slug: 'alisher-baxromovich',
    providedService: [
      {
        title: 'Фирменный стиль',
        descriptions: [
         "Разработан уникальный фирменный стиль, включая логотип, визитки и элементы униформы."
        ],
      },
      {
        title: 'Разработка сайта',
        descriptions: [
         "Создан современный и информативный сайт для клиники."
        ],
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
         "Настроена эффективная контекстная реклама для привлечения целевой аудитории."
        ],
      },
    ],
  },
  {
    slug: 'sanjar-akbarovich',
    providedService: [
      {
        title: 'Фирменный стиль',
        descriptions: [
         "Разработан логотип, визитки и другие элементы фирменного стиля, включая коврики для мышки."
        ],
      },
      {
        title: 'Разработка сайта',
        descriptions: [
         "Создан полноценный сайт на платформе Tilda, который удобно представляет услуги врача."
        ],
      },
      {
        title: 'Блог в Telegram',
        descriptions: [
         "Открыт блог, который успешно набирает органический трафик и активно взаимодействует с аудиторией."
        ],
      },
      {
        title: 'Запуск контекстной рекламы',
        descriptions: [
         "Настроена эффективная контекстная реклама для привлечения новых клиентов."
        ],
      },
      {
        title: 'Заполнение онлайн пространства',
        descriptions: [
         "Бонусом мы решили инициировать заполнение онлайн-пространства и разместили информацию о докторе на сервисы агрегаторы"
        ],
      },
    ],
  },
  {
    slug: 'intermed',
    providedService: [
      {
        title: 'Создали современный и интуитивно понятный сайт, который соответствует всем актуальным требованиям. В процессе работы были внедрены новые функции, такие как:',
        descriptions: [
          'Улучшенный интерфейс и адаптивный дизайн.',
          'Полный перевод сайта на узбекский язык для удобства местной аудитории.',
          'Адаптация контента для повышенной лидогенерации.',
          'Ускорение работы сайта с помощью технологии React JS.'
        ],
      },
      {
        title: 'Запуск таргетированной рекламы',
        descriptions: [
          "Мы разработали стратегию таргетированной рекламы с акцентом на:",
          'Генерация лидов.',
          'Повышение вовлеченности пользователей.',
          'Увеличение числа подписчиков.'
        ],
      },
    ],
  },
  // Add more data objects here with different slugs...
];

const ServicesProvided = () => {
  const { slug } = useParams();
  const [providedService, setProvidedService] = useState([]);

  useEffect(() => {
    // Filter the providedService based on the slug
    const filteredService = data.find((item) => item.slug === slug);
    if (filteredService) {
      setProvidedService(filteredService.providedService);
    }
  }, [slug]); // Re-run the effect when slug changes

  return (
    <div className="mt-[20px] py-[30px] px-[24px] rounded-[30px] bg-white mdl:py-[50px] mdl:px-[40px] 3xl:flex 3xl:flex-row mdl:rounded-[40px] 3xl:rounded-[50px]">
      {/* Заголовок */}
      <div className="w-[50%] mb-6 mdl:mb-[50px] 3xl:w-[40%]">
        <p className="text-titleDark font-bold text-[28px] mdl:text-[40px] 3xl:text-[50px] 3xl:w-[10%]">
          Оказанные услуги
        </p>
      </div>

      <div className="3xl:w-[60%]">
        {/* Перебираем список предоставленных услуг */}
        {providedService.map((service, index) => (
          <div key={index} className="mb-6 mdl:mb-[70px] 3xl:mb-[40px]">
            {/* Название услуги */}
            <p className="text-[18px] font-semibold text-black mb-2 mdl:text-[23px]">
              {service.title}
            </p>

            {/* Описание услуги (map through multiple descriptions if they exist) */}
            <ul className="list-disc list-inside text-[#454545]">
              {service.descriptions.map((description, descIndex) => (
                <li
                  key={descIndex}
                  className="text-[15px] mdl:text-[20px] mb-1 relative font-robotoFlex"
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesProvided;
