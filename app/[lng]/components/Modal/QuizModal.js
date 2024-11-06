"use client";
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { quizData } from "./services/quizService";
import { QuizAnimator } from "./services/quizAnimator";
import ButtonCard from "./Cards/ButtonCard";
import InputCard from "./Cards/InputCard";
import RatioCard from "./Cards/RatioCard";

export default function QuizModal({ setQuizModal }) {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizSteps, setQuizSteps] = useState([
    quizData[0],
    quizData[1],
    quizData[2],
    quizData[3],
  ]);
  const [currentData, setCurrentData] = useState(quizSteps[0]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [responses, setResponses] = useState({});
  const [ratioValues, setRatioValues] = useState({});

  useEffect(() => {
    setCurrentData(quizSteps[currentStep]);
  }, [currentStep, quizSteps]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentStep]);

  const handleSelection = (item) => {
    const stepValue = currentData.value;

    if (currentData.type === 2) {
      setSelectedItems((prevItems) => {
        const updatedItems = prevItems.includes(item.value)
          ? prevItems.filter((val) => val !== item.value)
          : [...prevItems, item.value];
        return updatedItems;
      });
    } else {
      setResponses((prevResponses) => ({
        ...prevResponses,
        [stepValue]: item.value,
      }));

      if (stepValue === "calculator") {
        if (item.value === "Контекстная реклама") {
          setQuizSteps((prevSteps) => [...prevSteps, quizData.find(step => step.value === "context")]);
        } else if (item.value === "Таргетированная реклама") {
          setQuizSteps((prevSteps) => [...prevSteps, quizData.find(step => step.value === "target")]);
        }
      }

      nextStep();
    }
  };

  const handleRatioChange = (title, value) => {
    setRatioValues((prevValues) => ({
      ...prevValues,
      [title]: value,
    }));
  };

  const nextStep = () => {
    if (currentData.type === 2 && currentData.value !== "context" && currentData.value !== "target") {
      const stepValue = currentData.value;
      setResponses((prevResponses) => ({
        ...prevResponses,
        [stepValue]: selectedItems.join(", "),
      }));
    }

    if (currentStep >= quizSteps.length - 1) {
      handleQuizCompletion();
    } else {
      QuizAnimator.fadeOutLeft(containerRef.current, () => {
        setSelectedItems([]);
        setCurrentStep((prevStep) => prevStep + 1);
        QuizAnimator.slideLeft(containerRef.current);
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      QuizAnimator.fadeOutRight(containerRef.current, () => {
        setSelectedItems([]);
        setCurrentStep((prevStep) => prevStep - 1);
        QuizAnimator.slideRight(containerRef.current);
      });
    }
  };

  const handleCalculate = () => {
    // Здесь выполняем необходимые вычисления
    const finalResults = {
      ...responses,
      ...ratioValues,
      // Ваши дополнительные вычисления
    };

    console.log("Финальные данные для отправки:", finalResults);
    sendDataToAPI(finalResults);
  };

  const handleQuizCompletion = () => {
    // Если есть дополнительные шаги после расчета, можете переместить логику из handleCalculate сюда
    // Иначе просто закрыть модальное окно или показать результаты
    setQuizModal(false);
  };

  const sendDataToAPI = async (data) => {
    try {
      const response = await fetch("URL_ВАШЕГО_API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Данные успешно отправлены");
        // Закрываем модальное окно после успешной отправки
        setQuizModal(false);
      } else {
        console.error("Ошибка при отправке данных");
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
    }
  };

  useEffect(() => {
    QuizAnimator.slideLeft(containerRef.current);
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div
        ref={scrollContainerRef}
        className="h-full w-full overflow-y-auto overflow-x-hidden max-mdl:p-2 max-mdl:py-4 p-4"
      >
        <div className="bg-[#F8F8F8] w-full h-auto min-h-full rounded-[100px] max-mdl:rounded-3xl max-mdl:p-4 max-mdl:py-8 flex items-center justify-center p-16 relative">
          <div ref={containerRef} className="w-full">
            <h2 className="text-5xl max-mdl:text-2xl max-mdl:font-bold font-semibold mb-4">
              {currentData.title}
            </h2>
            <p className="text-3xl max-mdl:text-xl max-mdl:leading-6 font-semibold mb-8">
              {currentData.descriptions}
            </p>
            <div className="flex gap-4 mb-8">
              {currentStep !== 0 && (
                <button
                  onClick={prevStep}
                  className="px-24 py-3 text-lg rounded-full text-[#7B72EB] font-bold bg-white"
                >
                  Назад
                </button>
              )}
              {currentData.type === 2 && selectedItems.length !== 0 && (
                <button
                  onClick={nextStep}
                  className="px-24 py-3 text-lg rounded-full text-[#7B72EB] font-bold bg-white"
                >
                  Вперёд
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 max-mdl:grid-cols-1">
              {currentData.data.map((item, index) => {
                switch (item.type) {
                  case "button":
                    return (
                      <ButtonCard
                        handleSelection={handleSelection}
                        key={index}
                        item={item}
                        selectedItems={selectedItems}
                      />
                    );
                  case "input":
                    return (
                      <InputCard
                        key={index}
                        item={item}
                        handleSelection={handleSelection}
                      />
                    );
                  case "ratio":
                    return (
                      <RatioCard
                        key={index}
                        item={item}
                        handleRatioChange={handleRatioChange}
                      />
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {(currentData.value === "context" || currentData.value === "target") && (
              <button
                onClick={handleCalculate}
                className="px-24 py-3 text-lg rounded-full text-[#7B72EB] font-bold bg-white mt-4"
              >
                Рассчитать
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
