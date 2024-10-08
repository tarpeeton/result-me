"use client";
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Question = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]); // Track expanded items
  const { slug , lng } = useParams(); // Get slug from the URL
  const {t} = useCustomTranslation(lng , 'caseslug')

  const data = [
    { slug: 'prime-medical-center', data: [
        { title: 'Увеличение потока пациентов' },
        { title: 'Накопление и сохранение базы постоянных пациентов' },
        { description: 'Prime Medical Center провел ребрендинг и расширил гастроэнтерологические услуги. Главная задача заключалась в продвижении обновленного бренда и сохранении лояльности постоянных пациентов.' }
      ]
    },
    { slug: 'mrj-trade', data: [
        { title: 'Полная подготовка к запуску на рынок' },
        { title: 'Создание сайта, брендинг и запуск рекламы' },
        { description: 'MRJ TRADE обратились с запросом на создание необходимых инструментов для успешного выхода на рынок и продвижения своего бренда.' }
      ]
    },
    { slug: 'intermed', data: [
        { title: 'Улучшение и доработка сайта' },
        { title: 'Привлечение лидов с Instagram' },
        { description: 'Компания Intermed обратилась с запросом на улучшение сайта и генерацию лидов через социальные сети. Основная цель — исправить существующие ошибки сайта и повысить эффективность маркетинга.' }
      ]
    },
    { slug: 'smile-design', data: [
        { title: 'Максимальное расширение интернет-присутствия в Узбекистане' },
        { title: 'Выход на рынок соседних стран Центральной Азии' },
        { description: 'Стоматология Smile Design стремилась расширить свою пациентскую базу, укрепить позиции на рынке Узбекистана и выйти на рынок соседних стран Центральной Азии. Основной упор был сделан на продвижение онлайн.' }
      ]
    },
    { slug: 'baxtiyor-nadjullayevich', data: [
        { title: 'Увеличить число пациентов' },
        { title: 'Привлечение трафика на сайт' },
        { description: 'Закзачик имел хорошо разработанный сайт, но ему не хватало активной рекламы для увеличения числа пациентов и операций. Основная цель — привлечение новых пациентов через интернет.' }
      ]
    },
    { slug: 'mostona-med', data: [
        { title: 'Разработка стратегий и контента для продвижения услуг' },
        { description: 'Клиника Mastona Med обратилась за созданием контент-плана для продвижения их уникальных медицинских услуг. Основная задача — предоставить материалы, которые команда клиники могла бы реализовывать самостоятельно.' },
      ]
    },
    { slug: 'aziza-shaxzadeevna', data: [
        { title: 'Увеличение видимости в интернете' },
        { title: 'Увеличение числа пациентов' }
      ]
    },
    { slug: 'alisher-baxromovich', data: [
        { title: 'Привлечение пациентов' },
        { title: 'Увеличение видимости в сети' },
        { description: 'Азиза Шахзадэевна обратилась с целью улучшения своего онлайн-присутствия и увеличения числа пациентов через интернет.' }
      ]
    },
    { slug: 'sanjar-akbarovich', data: [
        { title: 'Увеличить число пациентов' },
        { title: 'Сохранение базы пациентов' },
        { description: 'Клиент стремился увеличить поток новых пациентов и удерживать существующих через улучшенное онлайн-присутствие.' },
      ]
    },
    { slug: 'nafisa-shuxratovna', data: [
        { title: 'Создание сайта' },
        { description: 'Клиент обратился с задачей создать современный сайт для информирования потенциальных пациентов о предоставляемых услугах и привлечения новых клиентов.' },
      ]
    },
    { slug: 'dr-odil-alisherovich', data: [
        { title: 'Укрепление имиджа' ,description: 'укрепление личного бренда врача' },
        { title: 'Сохранение базы пациентов' , description: 'Одил Алишерович стремился улучшить свой имидж и сохранить доверие своих пациентов через активное онлайн-присутствие. Важно было собрать базу пациентов в одном месте и преувеличить ее' },
      ]
    },
    { slug: 'xayrullo-rahmatullaevich', data: [
        { title: 'Профессиональный имидж' },
        { title: 'Увеличение доверия' },
        { description: 'Создание фирменного стиля и информационного сайта значительно укрепило личный бренд врача, повысив его узнаваемость и профессиональный статус. Благодаря этому, доверие со стороны пациентов возросло, что привело к увеличению числа обращений и записей на прием.' },
      ]
    },
    { slug: 'ant-group', data: [
        { title: 'Разработка SMM-стратегии' },
        { description: 'ANT-GROUP обратились с запросом на разработку стратегии для активного продвижения компании в социальных сетях и укрепления онлайн-репутации.' },
      ]
    }
  ];

  useEffect(() => {
    // Filter data based on the slug
    const filtered = data.find(item => item.slug === slug)?.data || [];
    setFilteredData(filtered);
  }, [slug]);

  const toggleShowMore = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="rounded-[30px] bg-white100 mt-[20px] flex flex-col py-[30px] px-[24px] mdl:rounded-[40px] 3xl:rounded-[50px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] 3xl:flex 3xl:flex-row">
      <div className='3xl:w-[40%]'>
        <p className="text-titleDark text-[28px] mdl:text-[40px] 3xl:text-[50px] font-bold">
          {t('question')}
          </p>
      </div>

      <div className='3xl:w-[60%]'>
        {/* List of titles */}
        <ul className="flex flex-col mt-[20px] ml-[24px] 3xl:w-[60%]">
          {filteredData
            .filter(item => item.title) // Only display list items with titles
            .map((item, index) => (
              <li key={index} className="text-[15px] list-disc font-medium text-titleDark mdl:text-[20px] 3xl:text-[25px] font-robotoFlex">
                {item.title}
              </li>
            ))
          }
        </ul>

        {/* Descriptions */}
        {filteredData
          .filter(item => item.description) // Only display items with descriptions
          .map((item, index) => {
            const isExpanded = expandedItems.includes(index);
            const shouldTruncate = item.description && item.description.length > 50;

            return (
              <div key={index} className="mt-4 ml-[24px]">
                {shouldTruncate ? (
                  <>
                    <p className='text-[#454545] text-[15px]'>
                      {isExpanded ? item.description : item.description.substring(0, 50) + '...'}
                      <button
                        className="ml-2 text-blue-500 underline cursor-pointer"
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
            );
          })
        }
      </div>
    </div>
  );
};

export default Question;
