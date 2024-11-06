// components/QuizModal.js
"use client";
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { QuizService, quizData } from "./services/quizService";
import { QuizAnimator } from "./services/quizAnimator";
import ButtonCard from "./Cards/ButtonCard";
import InputCard from "./Cards/InputCard";

export default function QuizModal({ setQuizModal }) {
  const quizService = new QuizService(quizData);
  const containerRef = useRef(null);
  const [currentData, setCurrentData] = useState(
    quizService.getCurrentStepData()
  );
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelection = (item) => {
    const stepType = currentData.type;

    if (stepType === 1) {
      quizService.saveSelection([item.value]);
      nextStep();
    } else if (stepType === 2) {
      setSelectedItems((prev) =>
        prev.includes(item.value)
          ? prev.filter((val) => val !== item.value)
          : [...prev, item.value]
      );
    }
  };

  const nextStep = () => {
    if (currentData.type === 2) {
      quizService.saveSelection(selectedItems);
    }
    QuizAnimator.fadeOutLeft(containerRef.current, () => {
      quizService.goToNextStep();
      setCurrentData(quizService.getCurrentStepData());
      setSelectedItems([]);
      QuizAnimator.slideLeft(containerRef.current); // Переход влево
    });
  };

  const prevStep = () => {
    QuizAnimator.fadeOutRight(containerRef.current, () => {
      quizService.goToPrevStep();
      setCurrentData(quizService.getCurrentStepData());
      setSelectedItems([]);
      QuizAnimator.slideRight(containerRef.current); // Обратный свайп вправо
    });
  };

  const skipStep = () => {
    quizService.skipStep();
    setCurrentData(quizService.getCurrentStepData());
    setSelectedItems([]);
    QuizAnimator.slideLeft(containerRef.current);
  };

  useEffect(() => {
    QuizAnimator.slideLeft(containerRef.current); // Инициализация с плавным появлением слева
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div className="h-full w-full overflow-y-auto overflow-x-hidden max-mdl:p-2 max-mdl:py-4 p-4">
        <div className="bg-[#F8F8F8] w-full h-auto min-h-full rounded-[100px] max-mdl:rounded-3xl max-mdl:p-4 max-mdl:py-8 flex items-center justify-center p-16 relative">
          <div ref={containerRef} className="w-full">
            <h2 className="text-5xl max-mdl:text-2xl max-mdl:font-bold font-semibold mb-4">{currentData.title}</h2>
            <p className="text-3xl max-mdl:text-xl max-mdl:leading-6 font-semibold mb-8">{currentData.descriptions}</p>

            <div className="grid grid-cols-3 gap-4 max-mdl:grid-cols-1">
              {currentData.data.map((item, index) => 
                {
                 return item.type == 'button' ? (<ButtonCard key={index} title={item.title} descriptions={item.descriptions} icon={item.icon} />) : item.type == 'input' ? (<InputCard key={index} title={item.title} descriptions={item.descriptions} icon={item.icon} />) : null;
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}



            {/* <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Назад
              </button>
              {currentData.type === 2 && (
                <button
                  onClick={nextStep}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Далее
                </button>
              )}
              <button
                onClick={skipStep}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Пропустить
              </button>
            </div> */}