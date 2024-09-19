"use client"
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';


// dr-odil-alisherovich
// nafisa-shuxratovna
// xayrullo-rahmatullaevich
// ant-group
// alisher-baxromovich
// sanjar-akbarovich
// aziza-shaxzadeevna
const data = [
  {
    slug: 'prime-medical-center',
    providedService: [
      {
        title: 'Разработка сайта',
        description:
          "Мы создали современный сайт с удобным интерфейсом и быстрым откликом, который легко адаптируется под любые устройства. Это позволило увеличить охват и улучшить пользовательский опыт.",
      },
      {
        title: 'SMM-продвижение',
        description:
          'Организовали масштабное продвижение в Instagram и YouTube, привлекая внимание аудитории к передовым услугам стоматологии. YouTube стал источником значительного органического трафика, благодаря профессионально созданным видеороликам.',
      },
      {
        title: 'Запуск контекстной рекламы',
        description:
          'Мы настроили контекстную рекламу, ориентированную на целевую аудиторию, заинтересованную в стоматологических услугах. Лидогенерация была направлена на привлечение высококачественных заявок и пациентов.',
      },
      {
        title: 'Заполнение онлайн-пространства',
        description:
          'В дополнение к основным услугам, мы инициировали активное размещение информации о клинике на различных онлайн-картах и сервисах-агрегаторах. Это обеспечило максимальное присутствие бренда в сети.',
      },
    ],
  },
  {
    slug: 'smile-design',
    providedService: [
      {
        title: 'Запуск контекстной рекламы',
        description:
          "Мы настроили высокоэффективную контекстную рекламу, ориентированную на целевую аудиторию, которая искала стоматологические услуги в Узбекистане и Центральной Азии. Стратегия была направлена на получение целевого трафика и максимизацию видимости бренда на ключевых платформах.",
      },
    ],
  },
  {
    slug: 'mrj-trade',
    providedService: [
      {
        title: 'Разработка сайта',
       
      },
      {
        title: 'Брендинг',
       
      },
      {
        title: 'Запуск контекстной рекламы',
       
      },
    ],
  },
  {
    slug: 'baxtiyor-nadjullayevich',
    providedService: [
      {
        title: 'Запуск контекстной рекламы',
        description:
          "Мы разработали стратегию и запустили контекстную рекламу, ориентированную на целевую аудиторию. Кампания была настроена таким образом, чтобы обеспечить максимальный охват и привлечь пациентов, нуждающихся в услугах эндоскопической хирургии. В результате врач начал активно принимать новых пациентов, увеличилось количество записей на консультации и операции.",
      },
    ],
  },
  {
    slug: 'mostona-med',
    providedService: [
      {
        title: 'Контент-менеджмент',
        description:
          "Мы разработали стратегический контент-план, который включал подробные темы для статей, публикаций и видео. Каждый пункт был адаптирован под специфику интегративной медицины и авторские методики клиники Mastona Med. Помимо этого, мы создали сценарии для видео и тексты для социальных сетей, чтобы команда клиники могла самостоятельно реализовать их, не привлекая внешних специалистов. Все материалы были структурированы и подготовлены таким образом, чтобы их было легко интегрировать в текущие процессы маркетинга клиники.",
      },
    ],
  },
  {
    slug: 'intermed',
    providedService: [
      {
        title: 'Разработка сайта',
      },
      {
        title: 'Таргетированная реклама',
      },
    ],
  },
  // Add more data objects here with different slugs...
];

const ServicesProvided = () => {
	const {slug} = useParams()
  const [providedService, setProvidedService] = useState([]);
	console.log(providedService , 'Mana data')
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
        {providedService.map((item, index) => (
          <div key={index} className="mb-6 mdl:mb-[70px] 3xl:mb-[40px]">
            {/* Название услуги */}
            <p className="text-[18px] font-semibold text-black mb-2 mdl:text-[23px]">
              {item.title}
            </p>

            {/* Описание услуги */}
            <ul className="list-disc list-inside text-[#454545]">
              <li className={`text-[15px] mdl:text-[20px] mb-1 relative  
				${item.description && item.description.length > 2 ? 'before:content-['-']' : ''}before:absolute before:left-[-15px] before:text-[#000] list-none font-robotoFlex`}>
                {item.description}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesProvided;
