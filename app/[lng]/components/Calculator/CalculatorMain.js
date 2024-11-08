"use client";
import ButtonCard from "../Modal/Cards/ButtonCard";
import RatioCard from "../Modal/Cards/RatioCard";
import { useState } from "react";

const data = [
  {
    type: "button",
    title: "Контекстная реклама",
    active: false,
    value: "Контекстная реклама",
    descriptions: "Реклама вашего сайта в Google, Yandex",
    icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-4-photo-1.png",
  },
  {
    type: "button",
    title: "Таргетированная реклама",
    active: false,
    value: "Таргетированная реклама",
    descriptions: "Реклама вашей странички в Instagram, Facebook",
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
        calcValue: "budget",
        title: "Рекламный бюджет",
        saleSymbol: "$",
        from: 200,
        to: 2000,
        value: 900,
        step: 1,
        active: false,
        descriptions: "Сумма, выделенная на канал или кампанию за отчетный период",
      },
      {
        type: "ratio",
        title: "Цена за клик",
        calcValue: "cpc",
        saleSymbol: "$",
        from: 0.05,
        to: 1.0,
        step: 0.01,
        value: 0.4,
        active: false,
        descriptions: "Количество кликов по рекламе, показатель интереса к рекламному материалу",
      },
      {
        type: "ratio",
        title: "Конверсия в лиды",
        calcValue: "leadConv",
        saleSymbol: "%",
        from: 3,
        to: 20,
        step: 1,
        value: 9,
        active: false,
        descriptions: "Доля кликов, которые стали лидами",
      },
      {
        type: "ratio",
        calcValue: "meetingConv",
        title: "Конверсия в встречи",
        saleSymbol: "%",
        from: 3,
        to: 20,
        step: 1,
        value: 9,
        active: false,
        descriptions: "Ожидаемый процент встреч на основе приведенных лидов",
      },
      {
        type: "ratio",
        calcValue: "clientConv",
        title: "Конверсия в клиента",
        saleSymbol: "$",
        from: 3,
        to: 20,
        step: 1,
        value: 10,
        active: false,
        descriptions: "Процент встреч, приводящих к заключению сделки с клиентом",
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
        calcValue: "budget",
        title: "Рекламный бюджет",
        saleSymbol: "$",
        from: 200,
        to: 2000,
        value: 500,
        step: 1,
        active: false,
        descriptions: "Сумма, выделенная на канал или кампанию за отчетный период",
      },
      {
        type: "ratio",
        title: "Цена за лид",
        calcValue: "leadConv",
        saleSymbol: "$",
        from: 0.8,
        to: 4.0,
        value: 2.0,
        step: 0.1,
        active: false,
        descriptions: "Стоимость приведенного лида",
      },
      {
        type: "ratio",
        title: "Конверсия в встречи",
        calcValue: "meetingConv",
        saleSymbol: "%",
        from: 3,
        to: 20,
        value: 10,
        step: 1,
        active: false,
        descriptions: "Ожидаемый процент встреч на основе приведенных лидов",
      },
      {
        type: "ratio",
        title: "Конверсия в клиента",
        calcValue: "clientConv",
        saleSymbol: "$",
        from: 3,
        to: 20,
        value: 10,
        step: 1,
        active: false,
        descriptions: "Процент встреч, приводящих к заключению сделки с клиентом",
      },
    ],
  },
];

export default function CalculatorMain() {
  const [calcData, setCalcData] = useState(initialCalcData);
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  const [ratioValues, setRatioValues] = useState({});
  const [results, setResults] = useState(null);

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
          <h1 className="text-5xl max-mdl:text-3xl font-semibold">Калькулятор</h1>
          <p className="text-[#7B7B7B] w-full max-w-[900px]">
            Воспользуйтесь калькулятором для точного расчета количества клиентов, привлеченных с помощью вашей рекламной кампании...
          </p>
        </div>
        <div className="space-y-4 mt-12">
          <h2 className="text-3xl max-mdl:text-xl font-semibold">Выберите способ продвижения:</h2>
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
                Рассчитать
              </button>
            </div>
          </div>
        )}
        {results && (
          <div className="mt-12 w-full flex items-center flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Результаты:</h2>
            <div className="flex gap-4 max-mdl:flex-col">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold">Кол-во лидов</h3>
                <p className="text-2xl text-[#7B72EB]">{results.kolvo_lidov}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold">Кол-во клиентов</h3>
                <p className="text-2xl text-[#7B72EB]">{results.kolvo_klientov}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold">Кол-во встреч</h3>
                <p className="text-2xl text-[#7B72EB]">{results.kolvo_vstrech}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
