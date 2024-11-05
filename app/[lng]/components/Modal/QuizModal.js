// components/QuizModal.js
"use client";
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { QuizService, quizData } from "./services/quizService";
import { QuizAnimator } from "./services/quizAnimator";

export default function QuizModal({ setQuizModal }) {
  const quizService = new QuizService(quizData);
  const containerRef = useRef(null);
  const [currentData, setCurrentData] = useState(quizService.getCurrentStepData());
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
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white p-4 overflow-y-scroll no-scrollbar">
      <div className="bg-[#F8F8F8] w-full h-full rounded-[100px] flex items-center justify-center p-16 relative">
        <div ref={containerRef} className="w-full text-center">
          <h2 className="text-2xl font-bold mb-4">{currentData.title}</h2>
          <p className="text-lg mb-8">{currentData.descriptions}</p>

          <div className="grid grid-cols-2 gap-4">
            {currentData.data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelection(item)}
                className={`bg-white p-4 rounded-lg cursor-pointer shadow-md flex items-center justify-center ${
                  selectedItems.includes(item.value) ? "bg-gray-300" : ""
                }`}
              >
                <span className="text-lg font-medium">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg">Назад</button>
            {currentData.type === 2 && (
              <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Далее</button>
            )}
            <button onClick={skipStep} className="px-4 py-2 bg-gray-300 rounded-lg">Пропустить</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
