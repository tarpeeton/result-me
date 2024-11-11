"use client";
import { useParams } from 'next/navigation'
import ButtonCard from "../Modal/Cards/ButtonCard";
import RatioCard from "../Modal/Cards/RatioCard";
import { useState } from "react";

const data = [
  {
    type: "button",
    title: {ru:"Контекстная реклама" , uz: "Kontekstli reklama" , en: "Contextual Advertising"},
    active: false,
    value: "Контекстная реклама",
    descriptions: {ru:"Реклама вашего сайта в Google, Yandex", uz: "Saytingizni Google, Yandex da reklama qilish" , en: "Ads for your website on Google, Yandex"},
    icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-4-photo-1.png",
  },
  {
    type: "button",
    title: {ru:"Таргетированная реклама" , uz: "Target reklama" , en: "Targeted Advertising"},
    active: false,
    value: "Таргетированная реклама",
    descriptions: {ru:"Реклама вашей странички в Instagram, Facebook", uz: "Instagram, Facebook da sahifangizni reklama qilish" , en: "Ads for your page on Instagram, Facebook"},
    icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-4-photo-2.png",
  },
];

const initialCalcData = [
  {
    type: 2,
    title: "Контекстная реклама",
    value: "Контекстная реклама",
    data: [
      {
        type: "ratio",
        calcValue: 'budget',
        title: {ru:"Рекламный бюджет", uz: "Reklama byudjeti" ,en: "Advertising Budget "},
        saleSymbol: "$",
        from: 200,
        to: 3000,
        value: 300,
        step: 1,
        active: false,
        descriptions:
          {ru:"Сумма, выделенная на канал или кампанию за отчетный период", uz:"Hisobot davrida har bir kanal yoki kampaniya uchun ajratilgan miqdor" , en: "The amount allocated to the channel or campaign for the reporting period "}
      },
      {
        type: "ratio",
        title: {ru:"Цена за клик", uz:"Chertish narxi" ,en: "Cost per Click "},
        calcValue: 'cpc',
        saleSymbol: "$",
        from: 0.05,
        to: 2,
        step: 0.01,
        value: 0.15,
        active: false,
        descriptions:
          {ru: "Количество кликов по рекламе, показатель интереса к рекламному материалу", uz:"Reklamani chertish soni, reklama materiallariga nisbatan ko‘rsatilgan qiziqish" , en: "Number of clicks on the ad, indicating interest in the material"}
      },
      {
        type: "ratio",
        title: {ru:"Конверсия в лиды", uz: "Lidga konversiya" , en: "Conversion to Leads "},
        calcValue: 'leadConv',
        saleSymbol: "%",
        from: 3,
        to: 40,
        step: 1,
        value: 9,
        active: false,
        descriptions:
          {ru:"Доля кликов, которые стали лидами", uz: "Lidga aylangan chertishlar foizi " , en: "The share of clicks that converted to leads "},
      },
      {
        type: "ratio",
        calcValue: 'meetingConv',
        title: {ru:"Конверсия в встречи", uz: "Uchrashuvga konversiya" , en: "Conversion to Appointments"},
        saleSymbol: "%",
        from: 3,
        to: 40,
        step: 1,
        value: 9,
        active: false,
        descriptions:
          {ru:"Ожидаемый процент встреч на основе приведенных лидов", uz: "Taqdim etilgan lidlar asosida kutilayotgan uchrashuvlar foizi" , en: "The expected percentage of appointments from the acquired "},
      },
      {
        type: "ratio",
        calcValue: 'clientConv',
        title: {ru:"Конверсия в клиента", uz: "Xaridorga konversiya" , en: "Conversion to Clients"},
        saleSymbol: "%",
        from: 3,
        to: 40,
        step: 1,
        value: 10,
        active: false,
        descriptions:
          {ru:"Процент встреч, приводящих к заключению сделки с клиентом", uz:"Mijoz bilan kelishuvga olib keladigan uchrashuvlar foizi " , en: "The percentage of appointments that result in a client deal"}
      },
    ],
  },
  {
    type: 2,
    title: "Таргетированная реклама",
    value: "Таргетированная реклама",
    data: [
      {
        type: "ratio",
        calcValue: 'budget',
        title: {ru:"Рекламный бюджет", uz: "Reklama byudjeti" ,en: "Advertising Budget "},
        saleSymbol: "$",
        from: 200,
        to: 3000,
        value: 300,
        step: 1,
        active: false,
        descriptions:
          {ru:"Сумма, выделенная на канал или кампанию за отчетный период", uz:"Hisobot davrida har bir kanal yoki kampaniya uchun ajratilgan miqdor" , en: "The amount allocated to the channel or campaign for the reporting period "}
      },
      {
        type: "ratio",
        title:{ ru:"Цена за лид" , uz: "Lid narxi" , en: "Cost per Lead"},
        calcValue: 'leadConv',
        saleSymbol: "$",
        from: 0.8,
        to: 20,
        value: 2.0,
        step: 0.1,
        active: false,
        descriptions:
          {ru:"Стоимость приведенного лида", uz: "Ko‘rsatilgan lid narxi" , en: "The cost of an acquired lead"},
      },
      {
        type: "ratio",
        title: {ru:"Конверсия в встречи" , uz: "Uchrashuvga konversiya" ,en: "Conversion to Appointments "},
        calcValue: 'meetingConv',
        saleSymbol: "%",
        from: 3,
        to: 40,
        value: 10,
        step: 1,
        active: false,
        descriptions:
          {ru:"Ожидаемый процент встреч на основе приведенных лидов", uz: "Taqdim etilgan lidlar asosida kutilayotgan uchrashuvlar foizi " , en: "The expected percentage of appointments from the acquired "},
      },
      {
        type: "ratio",
        title: {ru:"Конверсия в клиента" , uz: "Xaridorga konversiya" , en: "Conversion to Clients"},
        calcValue: 'clientConv',
        saleSymbol: "%",
        from: 3,
        to: 40,
        value: 10,
        step: 1,
        active: false,
        descriptions:
          {ru:"Процент встреч, приводящих к заключению сделки с клиентом" , uz: "Mijoz bilan kelishuvga olib keladigan uchrashuvlar foizi " ,en: "The percentage of appointments that result in a client deal"},
      },
    ],
  },
];

export default function CalculatorMain() {
  const [calcData, setCalcData] = useState(initialCalcData);
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  const [ratioValues, setRatioValues] = useState({});
  const [results, setResults] = useState(null);
  const {lng} = useParams()
  const handleSelection = (item) => {
    const selectedData = calcData.find((dataItem) => dataItem.value === item.value);
    if (selectedData) {
      setSelectedCalculator(selectedData);
      
      // Сброс значений при переключении калькулятора
      const resetValues = selectedData.data.reduce((acc, curr) => {
        acc[curr.calcValue] = curr.value;
        return acc;
      }, {});
      setRatioValues(resetValues);
      setResults(null);
    }
  };

  const handleRatioChange = (calcValue, title, value) => {
    setRatioValues((prevValues) => ({
      ...prevValues,
      [calcValue]: parseFloat(value),
    }));
  };

  const handleCalculation = () => {
    if (selectedCalculator) {
      const { budget, cpc, leadConv, meetingConv, clientConv } = ratioValues;

      if (selectedCalculator.value === "Контекстная реклама") {
        const kolvo_lidov = Math.floor((budget / cpc) * (leadConv / 100));
        const kolvo_vstrech = Math.floor(kolvo_lidov * (meetingConv / 100));
        const kolvo_klientov = Math.floor(kolvo_vstrech * (clientConv / 100));
        setResults({ kolvo_lidov, kolvo_vstrech, kolvo_klientov });
      } else if (selectedCalculator.value === "Таргетированная реклама") {
        const kolvo_lidov = Math.floor(budget / leadConv);
        const kolvo_vstrech = Math.floor(kolvo_lidov * (meetingConv / 100));
        const kolvo_klientov = Math.floor(kolvo_vstrech * (clientConv / 100));
        setResults({ kolvo_lidov, kolvo_vstrech, kolvo_klientov });
      }
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden max-mdl:p-2 max-mdl:py-4 p-4">
      <div className="bg-[#F8F8F8] w-full h-auto min-h-full rounded-[100px] max-slg:rounded-3xl max-slg:p-4 max-slg:py-8 p-16">
        <div className="space-y-4">
          <h1 className="text-5xl max-mdl:text-3xl font-semibold">
            {lng === 'ru' ? 'Калькулятор' : lng === 'uz' ? 'Kalkulyator' : 'Calculator'}
            </h1>
          <p className="text-[#7B7B7B] w-full max-w-[900px]">
           
            {lng === 'ru' ? ' Воспользуйтесь калькулятором для точного расчета количества клиентов, привлеченных с помощью вашей рекламной кампании...' : lng === 'uz' ? 'Reklama kampaniyangiz bilan jalb qilingan mijozlar sonini aniq hisoblash uchun kalkulyatordan foydalaning...' : 'Use the calculator to accurately calculate the number of customers attracted through your advertising campaign...'}
            
          </p>
        </div>
        <div className="space-y-4 mt-12">
          <h2 className="text-3xl max-mdl:text-xl font-semibold">
           
            {lng === 'ru' ? 'Выберите способ продвижения:' : lng === 'uz' ? 'Reklama usulini tanlang:' : 'Choose the promotion method:'}
            
            </h2>
          <div className="grid grid-cols-1 mdl:grid-cols-2 gap-4">
            {data.map((item, index) => (
              <ButtonCard
                handleSelection={handleSelection}
                key={index}
                item={item}
                selectedItems={selectedCalculator ? [selectedCalculator.title] : []}
              />
            ))}
          </div>
        </div>
        {selectedCalculator && (
          <div className="mt-24">
            <div className="grid grid-cols-1 mdl:grid-cols-2 2xl:grid-cols-3 gap-4">
              {selectedCalculator.data.map((ratioItem, index) => (
                <RatioCard
                  key={index}
                  item={ratioItem}
                  handleRatioChange={handleRatioChange}
                  value={ratioValues[ratioItem.calcValue]}
                />
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <button onClick={handleCalculation} className="px-12 py-3 mt-8 rounded-full bg-[#7B72EB] text-white font-semibold">
              {lng === 'ru' ? 'Рассчитать' : lng === 'uz' ? 'Hisoblash' : 'Calculate'}
              </button>
            </div>
          </div>
        )}
        {results && (
          <div className="mt-12 w-full flex items-center flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">

            {lng === 'ru' ? 'Результаты:' : lng === 'uz' ? 'Hisoblash' : 'Calculate'}

            </h2>
            <div className="flex gap-4 max-mdl:flex-col">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold">
                {lng === 'ru'
              ? 'Кол-во лидов'
              : lng === 'uz'
              ? 'lidlar soni'
              : 'number of leads'}
                </h3>
                <p className="text-2xl text-[#7B72EB]">{results.kolvo_lidov}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold">
                {lng === 'ru'
              ? 'Кол-во клиентов'
              : lng === 'uz'
              ? 'mijozlar soni'
              : 'number of clients'}
                </h3>
                <p className="text-2xl text-[#7B72EB]">{results.kolvo_klientov}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold">
                {lng === 'ru'
              ? 'Кол-во встреч'
              : lng === 'uz'
              ? 'uchrashuvlar soni '
              : 'number of appointments'}
                </h3>
                <p className="text-2xl text-[#7B72EB]">{results.kolvo_vstrech}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
