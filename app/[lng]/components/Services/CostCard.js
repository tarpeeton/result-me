'use client';
import { FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ServicePriceModal from '../Modal/SericePrice';
import { useParams } from 'next/navigation';

const CostCardData = {
  'web-development': [
    {
      title: 'Одностраничный сайт',
      description: `Статичный сайт для специалиста или небольшой клиники. размер: 1 страница срок: 1 месяц (при быстром получении запрашиваемой информации от клиента)`,
      services: [
        'Разработка сайта',
        'Заполнение контентом на 2 языках',
        'Интеграция с CMS панелью',
        'Индексация в Google',
        'SEO оптимизация под ключевые слова',
        'Хостинг на 3 месяца',
        'Доменное имя на 1 год',
        'Экспорт кода (при желании заказчика)',
      ],
      price: '300$',
      link: 'slug/odnostranichny-site',
    },
  
    {
      title: 'Многостраничный сайт',
      description: ` Гибкий многостраничный сайт для специалиста или клиники. размер:5 страниц срок: 1 месяц (при быстром получении запрашиваемой информации от клиента)`,
      services: [
        'Разработка сайта',
        'Разработка административной панели',
        'Заполнение контентом на 2 языках',
        'Интеграция с CMS панелью',
        'Индексация в Google',
        'SEO оптимизация под ключевые слова',
        'Хостинг на 3 месяца',
        'Доменное имя на 1 год',
        'Экспорт кода (при желании заказчика)',
      ],
      price: '600$',
      link: 'slug/mnogostranichny-site',
      specialFeatures: [
        'Возможность менять актуальную информацию (о врачах, услугах и ценах)',
        'Возможность ведения блога',
      ],
    },
    
    {
      title: 'Другой сайт',
      description: ` Разработка любого другого сайта исходя из вашего ТЗ срок: от 2 недель (при быстром получении запрашиваемой информации от клиента)`,
      services: [
        'Разработка сайта',
        'Заполнение контентом',
        'Интеграция с CMS панелью',
        'Индексация в Google',
        'Хостинг на 3 месяца',
        'Доменное имя на 1 год',
        'Экспорт кода',
      ],
      price: 'цена договорная',
      link: 'slug/drugoy-site',
      specialFeatures: [
        'Возможность разработать любой сайт исходя из предпочтений и пожеланий заказчика',
      ],
    },
  ],

  'telegram-bot-development': [
    {
      title: 'Start',
      description: `- Быстрая разработка при оперативном получении всей необходимой информации от клиента
- Возможность дальнейшего расширения функционала (по договоренности)
- Экспорт кода (по желанию заказчика)
Срок: 2 недели`,
      services: [
        'Разработка базового чат-бота',
        'Сбор заявок',
        'Поддержка до 5 категорий',
        'Добавление до 50 услуг/товаров',
        'Обычные кнопки',
        'Поддержка на 1 месяц',
        'Настройка автоответов',
      ],
      price: '200$',
      link: 'slug/start',
      generalTerms: [
        'Быстрая разработка при оперативном получении всей необходимой информации от клиента',
        'Возможность дальнейшего расширения функционала (по договоренности)',
        'Экспорт кода (по желанию заказчика)',
      ],
    },
    {
      title: 'Medium',
      description: `- Быстрая разработка при оперативном получении всей необходимой информации от клиента
- Возможность дальнейшего расширения функционала (по договоренности)
- Экспорт кода (по желанию заказчика)
Срок: 1 месяц`,
      services: [
        'Все услуги из тарифа "Start"',
        'Интеграция с базой данных',
        'Возможность сбора и хранения пользовательских данных',
        'Рассылка уведомлений и новостей',
        'Интерактивные меню и кнопки',
        'Поддержка до 10 категорий',
        'Неограниченное количество услуг/товаров',
        'Поддержка на 3 месяца',
        'Настройка аналитики взаимодействий',
        'Админ панель для управления контентом и пользователями',
      ],
      price: '500$',
      link: 'slug/medium',
      generalTerms: [
        'Быстрая разработка при оперативном получении всей необходимой информации от клиента',
        'Возможность дальнейшего расширения функционала (по договоренности)',
        'Экспорт кода (по желанию заказчика)',
      ],
    },
    {
      title: 'Pro',
      description: `- Быстрая разработка при оперативном получении всей необходимой информации от клиента
- Возможность дальнейшего расширения функционала (по договоренности)
- Экспорт кода (по желанию заказчика)
Срок: 1,5 месяца`,
      services: [
        'Все услуги из тарифа "Medium"',
        'Интеграция с CRM системой',
        'Возможность оплаты через бота',
        'Подробная аналитика и отчеты по взаимодействиям пользователей',
        'Многоязычная поддержка (до 3 языков)',
        'Поддержка и обновление на 6 месяцев',
        'Админ панель с расширенными функциями управления и отчетности',
        'Дизайн кастомных кнопок',
      ],
      price: '800$',
      link: 'slug/pro',
      generalTerms: [
        'Быстрая разработка при оперативном получении всей необходимой информации от клиента',
        'Возможность дальнейшего расширения функционала (по договоренности)',
        'Экспорт кода (по желанию заказчика)',
      ],
    },
  ],

  'smm': [
    {
      title: 'SMM Mini',
      description: `1 неделя (при быстром получении запрашиваемой информации от клиента)\n\nПреимущества:\n- низкая стоимость\n- в дальнейшем клиент сможет вести блог самостоятельно`,
      services: [
        'Контент-план: 1',
        'Публикации: 3 (3 картинки, 0 видео)',
        'Истории: 10 (10 картинок, 0 видео)',
        'Иконки: 10 (10 картинок)',
        'Наполнение актуального: 5 (5 картинок)',
        'Запуск рекламы: 3',
      ],
      price: '250$',
      link: 'slug/smm-mini',
    },
    {
      title: 'SMM Standard',
      description: ` Запуск и ведение маркетинга в социальных сетях\n Преимущества:\n- оптимальное количество публикаций`,
      services: [
        'Контент-план: 1',
        'Публикации: 8 (6 картинок, 2 видео)',
        'Истории: 15 (10 картинок, 5 видео)',
        'Иконки: 10 (10 картинок)',
        'Наполнение актуального: 10 (10 картинок)',
        'Запуск рекламы: 8',
        'Оформление аккаунтов: 3',
        'Фото-видеосъемка: 2 часа / 1 локация',
      ],
      price: '600$',
      link: 'slug/smm-standard',
    },
    {
      title: 'SMM Premium',
      description: ` Запуск и ведение маркетинга в социальных сетях\nПреимущества:\n

- наибольшее количество публикаций для достижения быстрого результата`,
      services: [
        'Контент-план: 1',
        'Публикации: 12 (6 картинок, 6 видео)',
        'Истории: 30 (15 картинок, 15 видео)',
        'Иконки: 15 (15 картинок)',
        'Наполнение актуального: 15 (15 картинок)',
        'Запуск рекламы: 12',
        'Оформление аккаунтов: 5',
        'Фото-видеосъемка: 6 часов / 3 локации',
      ],
      price: '1200$',
      link: 'slug/smm-premium',
    },
  ],

  'ads-launch': [
    {
      title: 'Запуск контекстной рекламы',
      description: `Настройка и запуск рекламных кампаний в рекламных сетях Google и Yandex`,
      services: [
        'Открытие личного кабинета в одной из сетей',
        'Настройка до 5 кампаний',
        'Поиск ключевых слов',
        'Составление семантического ядра',
        'Сбор маркерных запросов',
        'Создание рекламных объявлений',
        'Определение целевой аудитории',
        'Ежемесячный отчет по кампаниям',
      ],
      price: '300$',
      link: 'slug/ads-launch-google',
    },
    {
      title: 'Запуск таргетированной рекламы',
      description: `Настройка и запуск рекламных кампаний в сетях Instagram и Facebook`,
      services: [
        'Открытие личного кабинета',
        'Настройка до 5 кампаний',
        'Разработка до 2 креативов',
        'Создание рекламных объявлений',
        'Определение целевой аудитории',
        'Ежемесячный отчет по кампаниям',
      ],
      price: '300$',
      link: 'slug/ads-launch-facebook',
    },
  ],

  'seo': [
    {
      title: 'Базовая настройка',
      description: `Поднятие в поисковых выдачах Google и Yandex`,
      services: [
        'Технический аудит сайта',
        'Индексация сайта в Google и Yandex',
        'Уменьшение размера картинок',
        'Написание целевых “Title”, “Description” и “Text” для 10 страниц',
        'Поиск ключевых слов',
        'Составление семантического ядра',
        'Сбор маркерных запросов',
        'Создание рекламных объявлений',
        'Определение целевой аудитории',
      ],
      price: '350$',
      link: 'slug/seo-basic',
    },
    {
      title: 'Ежемесячная услуга',
      description: `Поднятие в поисковых выдачах Google и Yandex`,
      services: [
        'Технический аудит сайта',
        'Индексация сайта в Google и Yandex',
        'Уменьшение размера картинок',
        'Написание целевых “Title”, “Description” и “Text” для 10 страниц',
        'Поиск ключевых слов',
        'Составление семантического ядра',
        'Сбор маркерных запросов',
        'Создание рекламных объявлений',
        'Определение целевой аудитории',
        'Публикация целевых блогов',
        'Переиндексация в поисковых системах',
        'Поддержание актуальности “Title”, “Description” и “Text”',
      ],
      price: '300$',
      link: 'slug/seo-monthly',
    },
  ],

  'branding': [
    {
      title: 'Брендбук mini',
      description: `Разработка брендбука`,
      services: [
        'Дизайн логотипа в двух вариантах',
        'Дизайн визитки',
        'Типографика (подбор шрифта)',
        'Дизайн униформы',
        'Дизайн блокнота',
        'Руководство по использованию фирменного стиля',
      ],
      price: '100$',
      link: 'slug/branding-mini',
    },
    {
      title: 'Брендбук standart',
      description: `Разработка брендбука`,
      services: [
        'Дизайн логотипа в двух вариантах',
        'Дизайн визитки',
        'Типографика (подбор шрифта)',
        'Дизайн униформы',
        'Дизайн блокнота',
        'Дизайн корпоративного пакета',
        'Дизайн фирменного бланка',
        'Разработка фирменного слогана',
        'Руководство по использованию фирменного стиля',
      ],
      price: '200$',
      link: 'slug/branding-standart',
    },
  ],
};

const CostCard = () => {
  const { slug } = useParams(); // Get slug from URL
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter the data by slug
    if (slug && CostCardData[slug]) {
      setFilteredData(CostCardData[slug]);
    }
  }, [slug]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null); // New state variable

  const openModal = (price, title) => {
    setSelectedPrice(price); // Set the selected price
    setSelectedTitle(title); // Set the selected title
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPrice(null); // Reset the selected price
    setSelectedTitle(null); // Reset the selected title
  };

  return (
    <div className='bg-white100 px-[24px] pt-[30px] rounded-[30px] flex flex-col 3xl:flex-col  3xl:p-[40px] mx-[16px] mt-[20px] 3xl:mx-[30px]'>
      <div>
        <h3 className='text-[28px] mdl:text-[50px] font-bold text-titleDark'>
          Стоимость услуг
        </h3>
      </div>
      <div className='rounded-[30px] mt-[20px] relative flex flex-col 2xl:flex-wrap 2xl:flex-row 2xl:gap-[25px]'>
        {/* Mapping through filteredData array */}
        {filteredData.map((card, index) => (
          <div
            key={index}
            className='relative  w-full border px-[24px] py-[30px] border-[#F0F0F0] rounded-[30px] mt-[20px]  2xl:w-[calc(32.333%-16px)] pb-[150px]'
          >
            <div>
              <p className='text-[20px] font-semibold 2xl:font-bold mdl:text-[30px] text-titleDark'>
                {card.title}
              </p>
            </div>
            <div className='mt-[20px]'>
              {card.description.split('\n').map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className='text-[15px] mdl:text-[18px] text-[#454545] font-normal font-robotoFlex'
                >
                  {line}
                </p>
              ))}
            </div>
            <div className='h-[1px] w-full bg-[#F0F0F0] mt-[25px]' />
            <div className='flex flex-col mt-[25px] relative gap-[11px]'>
              {card.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className='flex flex-row gap-[12px] items-center'>
                  <div className='rounded-[6px] flex items-center justify-center bg-violet100 bg-opacity-20 w-[30px] h-[30px]'>
                    <FaCheck className='text-violet100' />
                  </div>
                  <div className='flex items-center w-[90%]'>
                    <p className='text-[#010101] text-[15px] font-medium font-robotoFlex'>
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='h-[1px] w-full bg-[#F0F0F0] mt-[25px] mb-[40px]' />
            <button
              onClick={() => openModal(card.price, card.title)} // Passing title as well
              className='text-white text-center text-[18px] font-bold w-[90%] mx-auto py-[30px] 3xl:py-[24px] px-[20px] bg-violet100 rounded-[100px] mt-[7px] absolute left-0 right-0 bottom-[20px]'
            >
              Узнать цену
            </button>
          </div>
        ))}
      </div>
      <ServicePriceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        price={selectedPrice}
        serviceName={selectedTitle}
      />
    </div>
  );
};

export default CostCard;