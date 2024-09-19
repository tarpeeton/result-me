"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


// nafisa-shuxratovna
// xayrullo-rahmatullaevich
// ant-group
// alisher-baxromovich
// sanjar-akbarovich
// aziza-shaxzadeevna

const Question = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { slug } = useParams(); // Get slug from the URL
  
  const data = [
    { slug: 'prime-medical-center', data: [
        { title: 'Увеличение потока пациентов' },
        { title: 'Накопление и сохранение базы постоянных пациентов' },
        { title: 'После получения новой лицензии и расширения команды врачей, Prime Medical Center решил провести ребрендинг и предложить новые гастроэнтерологические услуги. Основной задачей было продвижение обновленного бренда, сохраняя лояльность многолетней базы постоянных пациентов, которые уже полюбили клинику.' }
      ]
    },
    { slug: 'mrj-trade', data: [
        { title: 'Полная подготовка к запуску на рынок' },
        { title: 'Создание сайта, брендинг и запуск рекламы' },
        { title: 'Компания MRJ TRADE обратилась к нам с целью подготовки всех необходимых инструментов для успешного выхода на рынок. ' },
        
      ]
    },
    { slug: 'intermed', data: [
        { title: 'Улучшение и доработка сайта' },
        { title: 'Привлечение лидов с Instagram' },
        { title: 'Компания обратилась с просьбой улучшить сайт и исправить существующие ошибки. Также был запрос на получение лидов через социальные сети.' },
      ]
    },
    { slug: 'smile-design', data: [
        { title: 'Максимальное расширение интернет-присутствия в Узбекистане' },
        { title: 'Выход на рынок соседних стран Центральной Азии' },
        { title: 'Стоматология Smile Design обратилась к нам с целью укрепить свои позиции в сети и привлечь как можно больше пациентов в Узбекистане, а также начать выход на рынок ближайших стран Центральной Азии. Клиент стремился расширить свою базу пациентов, активно работая с новыми платформами и развивая присутствие в онлайн-пространстве.' }
      ]
    },
    { slug: 'baxtiyor-nadjullayevich', data: [
        { title: 'Увеличить число пациентов' },
        { title: 'Привлечь трафик на сайт' },
        { title: 'Врач Шамирзаев Бахтиёр Наджиюллаевич обратился к нам с готовым сайтом, который был хорошо разработан, но без активной рекламы не приносил ожидаемого результата. Основной целью было привлечение новых пациентов и увеличение количества операций через сайт.' },
      ]
    },
    { slug: 'mostona-med', data: [
        { title: 'Разработка стратегий и контента' },
        { title: 'Клиника Mastona Med обратилась к нам с задачей предоставить готовые сценарии, темы и тексты для продвижения их услуг. Важным условием было создание контент-плана, который их команда могла бы реализовывать самостоятельно, без постоянного стороннего участия.' },
       
      ]
    },
    { slug: 'mrj-trade', data: [
        { title: 'Задача 1 для MRJ Trade' },
        { title: 'Задача 2 для MRJ Trade' }
      ]
    },
    { slug: 'aziza-shaxzadeevna', data: [
        { title: 'Увеличение видимости в интернете' },
        { title: 'Увеличение числа пациентов' }
      ]
    },
    { slug: 'alisher-baxromovich', data: [
        { title: 'Привлечение пациентов' },
        { title: 'Увеличение видимости в сети' }
      ]
    },
    { slug: 'sanjar-akbarovich', data: [
        { title: 'Увеличить число пациентов' },
        { title: 'Сохранить базу пациентов' }
      ]
    },
    { slug: 'nafisa-shuxratovna', data: [
        { title: 'Создание сайта' },
      ]
    },
    { slug: 'dr-odil-alisherovich', data: [
        { title: 'Укрепление имиджа' },
        { title: 'Сохранение базы пациентов' }
      ]
    },
    { slug: 'xayrullo-rahmatullaevich', data: [
        { title: 'Повышение имиджа' },
        { title: 'Увеличение видимости в сети' }
      ]
    },
    { slug: 'ant-group', data: [
        { title: 'Запрос на развитие SMM-стратегии' },
      ]
    },
    // You can add more slug-data pairs here
  ];

  useEffect(() => {
    // Filter data based on the slug
    const filtered = data.find(item => item.slug === slug)?.data || [];
    setFilteredData(filtered);
  }, [slug]);

  return (
    <div className="rounded-[30px] bg-white100 mt-[20px] flex flex-col py-[30px] px-[24px] mdl:rounded-[40px] 3xl:rounded-[50px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] 3xl:flex 3xl:flex-row">
      <div className='3xl:w-[40%]'>
        <p className="text-titleDark text-[28px] mdl:text-[40px] 3xl:text-[50px] font-bold">Запросы</p>
      </div>
      <ul className="flex flex-col mt-[20px] ml-[24px] 3xl:w-[60%]">
        {filteredData.map((item, index) => (
          <li key={index} className="text-[15px] list-disc font-medium text-titleDark mdl:text-[20px] 3xl:text-[25px] font-robotoFlex">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
