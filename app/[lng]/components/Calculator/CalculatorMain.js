"use client";
import ButtonCard from "../Modal/Cards/ButtonCard";
import RatioCard from "../Modal/Cards/RatioCard";
import { QuizAnimator } from "../Modal/services/quizAnimator";
import { useState, useRef, useEffect } from "react";

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

const calcData = [
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
        descriptions:
          "Сумма, выделенная на канал или кампанию за отчетный период",
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
        descriptions:
          "Количество кликов по рекламе, показатель интереса к рекламному материалу",
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
        descriptions:
          "Процент встреч, приводящих к заключению сделки с клиентом",
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
        descriptions:
          "Сумма, выделенная на канал или кампанию за отчетный период",
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
        descriptions:
          "Процент встреч, приводящих к заключению сделки с клиентом",
      },
    ],
  },
];

export default function CalculatorMain() {
  const ratioContainerRef = useRef(null);
  const ratioContainerContentRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCalculator, setShowCalculator] = useState(null);

  const handleSelection = (item) => {
    const selectedData = calcData.find((dataItem) => dataItem.value === item.value);
    if (selectedData) {
      setSelectedItems([item.title]);
      if (showCalculator) {
        // Animate the current content out before showing new content
        QuizAnimator.fadeDown(ratioContainerContentRef.current, () => {
          setShowCalculator(selectedData);
          QuizAnimator.slideUp(ratioContainerContentRef.current);
        });
      } else {
        setShowCalculator(selectedData);
        QuizAnimator.slideDown(ratioContainerContentRef.current);
      }
    }
  };

  const handleRatioChange = (calcValue, title, value) => {
    console.log(`Value changed for ${title}: ${calcValue} = ${value}`);
    // Add your logic for handling ratio changes
  };

  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden max-mdl:p-2 max-mdl:py-4 p-4">
      <div className="bg-[#F8F8F8] w-full h-auto min-h-full rounded-[100px] max-slg:rounded-3xl max-slg:p-4 max-slg:py-8 p-16">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold">Калькулятор</h1>
          <p className="text-[#7B7B7B] w-full max-w-[900px]">
            Воспользуйтесь калькулятором для точного расчета количества клиентов, привлеченных с помощью вашей рекламной кампании. Выберите предпочитаемый метод продвижения, чтобы проанализировать его эффективность и получить ценные данные для оптимизации ваших маркетинговых стратегий. Этот инструмент поможет вам повысить рентабельность инвестиций и достичь ваших бизнес-целей.
          </p>
        </div>
        <div className="space-y-4 mt-12">
          <h2 className="text-3xl font-semibold">Выберите способ продвижения:</h2>
          <div className="grid grid-cols-1 mdl:grid-cols-2 gap-4">
            {data.map((item, index) => (
              <ButtonCard
                handleSelection={handleSelection}
                key={index}
                item={item}
                selectedItems={selectedItems}
              />
            ))}
          </div>
        </div>
        {showCalculator && (
          <div ref={ratioContainerRef} className="mt-24">
            <div ref={ratioContainerContentRef} className="grid grid-cols-1 mdl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
              {showCalculator.data.map((ratioItem, index) => (
                <RatioCard key={index} item={ratioItem} handleRatioChange={handleRatioChange} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
