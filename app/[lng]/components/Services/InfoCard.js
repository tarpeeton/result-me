"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InfoCard = () => {
  const { slug } = useParams();  // Getting the slug from the URL
  const [filteredData, setFilteredData] = useState([]);  // State to store filtered data

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,  // Disable slider for screens smaller than 750px
        settings: 'unslick',
      },
    ],
  };

  const data = {
    'web-development': [
      {
        title: 'Индивидуальный подход',
        description:
          'Мы создаем уникальные решения, учитывая специфику вашего бизнеса и цели.',
      },
      {
        title: 'Современный дизайн',
        description:
          'Создание привлекательных и визуально понятных сайтов которые запоминаются.',
      },
      {
        title: 'Адаптивность на всех устройствах',
        description:
          'Ваш сайт будет идеально отображаться на смартфонах, планшетах и компьютерах.',
      },
      {
        title: 'Гибкие тарифы',
        description:
          'Мы предлагаем различные тарифные планы, подходящие для любого бюджета.',
      },
      {
        title: 'Международный опыт',
        description:
          'Мы успешно работаем с клиентами и проектами по всему миру.',
      },
    ],
  
    'telegram-bot-development': [
      {
        title: 'Индивидуальный подход',
        description:
          'Мы разрабатываем ботов с учетом специфики вашего бизнеса и задач.',
      },
      {
        title: 'Интуитивный интерфейс',
        description:
          'Наши боты обеспечивают удобное и понятное взаимодействие для пользователей.',
      },
      {
        title: 'Интеграция с системами',
        description:
          'Боты легко интегрируются с CRM, платежными системами и другими сервисами.',
      },
      {
        title: 'Гибкие тарифы',
        description:
          'Мы предлагаем различные тарифы, которые подойдут для любого масштаба проекта.',
      },
    ],
  
    'smm': [
      {
        title: 'Персонализированная стратегия',
        description:
          'Мы разрабатываем уникальные SMM-кампании, ориентированные на ваши бизнес-цели и аудиторию.',
      },
      {
        title: 'Постоянный анализ и оптимизация',
        description:
          'Мы регулярно оцениваем результаты и вносим корректировки для повышения эффективности кампаний.',
      },
      {
        title: 'Гибкие пакеты услуг',
        description:
          'Предлагаем SMM-услуги под любые задачи: от разовых проектов до долгосрочного сопровождения.',
      },
      {
        title: 'Отчеты во время',
        description:
          'Предоставляем детализированные отчеты о каждой кампании, с четкой аналитикой и рекомендациями для дальнейшего улучшения результатов.',
      },
      {
        title: 'Мы на связи',
        description:
          'Мы всегда доступны для консультаций и вопросов, предоставляя оперативную поддержку и обсуждение стратегии на каждом этапе сотрудничества.',
      },
      {
        title: 'Таргетированная реклама',
        description:
          'Настраиваем рекламу с точным таргетингом на вашу аудиторию, что позволяет сократить расходы и повысить конверсию.',
      },
    ],
  
    'ads-launch': [
      {
        title: 'Персонализированная реклама',
        description:
          'Настраиваем кампании, которые обращаются напрямую к вашей целевой аудитории, максимально повышая вероятность конверсии.',
      },
      {
        title: 'Гибкий бюджет',
        description:
          'Мы эффективно управляем вашим рекламным бюджетом, обеспечивая максимальную отдачу с минимальными затратами.',
      },
      {
        title: 'Точный таргетинг',
        description:
          'Реклама показывается только тем, кто заинтересован в ваших услугах или продуктах, что повышает результативность кампании.',
      },
      {
        title: 'Постоянный мониторинг и оптимизация',
        description:
          'Мы следим за ходом кампании в режиме реального времени и вносим изменения для достижения наилучших результатов.',
      },
      {
        title: 'Подробная отчетность',
        description:
          'Предоставляем регулярные отчеты, чтобы вы видели четкие результаты и понимали, как работает ваша реклама.',
      },
    ],
  
    'seo': [
      {
        title: 'Глубокий анализ сайта',
        description:
          'Проводим тщательный анализ вашего сайта, выявляя слабые места и возможности для улучшения.',
      },
      {
        title: 'Исследование ключевых слов',
        description:
          'Подбираем самые эффективные ключевые слова, чтобы ваш сайт занимал высокие позиции по актуальным запросам.',
      },
      {
        title: 'Оптимизация контента',
        description:
          'Создаем и улучшаем контент с учетом SEO-требований для повышения его релевантности и привлекательности.',
      },
      {
        title: 'Построение ссылок',
        description:
          'Используем белые методы построения ссылок для повышения авторитетности вашего сайта и улучшения его позиций в поисковиках.',
      },
      {
        title: 'Регулярная отчетность',
        description:
          'Предоставляем детализированные отчеты о проделанной работе и достигнутых результатах, что позволяет отслеживать эффективность и планировать дальнейшие шаги.',
      },
    ],
  
    'branding': [
      {
        title: 'Индивидуальный подход',
        description:
          'Разработка уникального бренда, который отражает суть бизнеса и привлекает внимание целевой аудитории.',
      },
      {
        title: 'Гибкость в дизайне',
        description:
          'Предоставляем возможность внести изменения в дизайн на любом этапе работы, чтобы полностью удовлетворить ваши требования.',
      },
      {
        title: 'Персонализированные решения',
        description:
          'Предлагаем персонализированные решения для каждого клиента, чтобы создать индивидуальный стиль и имидж.',
      },
      {
        title: 'Доступные цены',
        description:
          'Обеспечиваем конкурентоспособные цены на продукцию без потери качества.',
      },
    ],
  };
  

  useEffect(() => {
    if (slug && data[slug]) {
      setFilteredData(data[slug]);  // Set the filtered data based on the slug
    } else {
      setFilteredData([]);  // Set empty array if slug doesn't match any data
    }
  }, [slug]);

  return (
    <div className='flex flex-col mt-[80px] gap-[10px] 3xl:mx-[30px]'>
      {/* Slider for screens larger than 750px */}
      {filteredData.length > 0 && (
        <div className='hidden slg:block w-full cursor-pointer'>
          <Slider {...settings} className='w-full'>
            {filteredData.map((item, index) => (
              <div
                key={index}
                className={`w-full mdl:min-w-full 4xl:max-w-[50%] rounded-[30px] p-[30px] pb-[26px] flex flex-col justify-between 2xl:max-w-[98%] 2xl:min-h-[450px] 4xl:min-h-[600px] 3xl:py-[40px] 3xl:px-[40px] ${
                  index === 0 ? 'bg-violet100' : 'bg-[#F4F3FF]'
                }`}
              >
                <div className='w-[60%] 3xl:w-[100%]'>
                  <p className={`text-[23px] mdl:text-[35px] ${index === 0 ? 'text-white100' : 'text-titleDark'} font-bold 4xl:text-[50px]`}>
                    {item.title}
                  </p>
                </div>
                <div className='mt-[15px] mdl:text-[18px] w-[85%] mdl:mt-[40px]'>
                  <p className={`text-[14px] mdl:text-[18px] ${index === 0 ? 'text-white100' : 'text-[#454545]'} 4xl:text-[20px] font-robotoFlex 3xl:w-[100%]`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Column layout for screens smaller than 750px */}
      <div className="sm:flex sm:flex-col sm:gap-[20px] slg:hidden mx-[16px] mdl:mx-[20px]">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className={`w-full rounded-[30px] p-[30px] pb-[26px] flex flex-col min-h-[240px] ${
              index === 0 ? 'bg-violet100' : 'bg-[#F4F3FF]'
            }`}
          >
            <div className='w-[60%]'>
              <p className={`text-[23px] ${index === 0 ? 'text-white100' : 'text-titleDark'} font-bold`}>
                {item.title}
              </p>
            </div>
            <div className='mt-[15px] w-[85%]'>
              <p className={`text-[14px] ${index === 0 ? 'text-white100' : 'text-[#454545]'} font-robotoFlex`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
