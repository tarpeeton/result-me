"use client";
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { quizData } from "./services/quizService";
import { QuizAnimator } from "./services/quizAnimator";
import ButtonCard from "./Cards/ButtonCard";
import InputCard from "./Cards/InputCard";
import RatioCard from "./Cards/RatioCard";
import ResultSection from "./ResultSection";
import { useParams } from 'next/navigation'


export default function QuizModal({ setQuizModal }) {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const resultContainerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentData, setCurrentData] = useState(quizData[0]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [responses, setResponses] = useState({});
  const [quizSteps, setQuizSteps] = useState([quizData[0], quizData[1], quizData[2], quizData[3]]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});
  const [header , setHeader] = useState(false)
  const {lng} = useParams()

  useEffect(() => {
    setCurrentData(quizSteps[currentStep]);
  }, [currentStep, quizSteps]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentStep]);

  useEffect(() => {
    if (showResults && resultContainerRef.current) {
      QuizAnimator.slideUp(resultContainerRef.current);
    }
  }, [showResults]);

  const handleRatioChange = (calcValue, title, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [calcValue]: { nazivanie: title[lng], znachenie: value },
    }));
  };

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
        const newQuizSteps = quizSteps.slice(0, currentStep + 1);
        const nextStepData = quizData.find((step) => step.value === item.value);
        if (nextStepData) {
          QuizAnimator.fadeOutLeft(containerRef.current, () => {
            setQuizSteps([...newQuizSteps, nextStepData]);
            setSelectedItems([]);
            setCurrentStep((prevStep) => prevStep + 1);
            QuizAnimator.slideLeft(containerRef.current);
          });
        } else {
          console.error("Не удалось найти следующий шаг для:", item.value);
        }
      } else {
        nextStep();
      }
    }
  };

  const nextStep = () => {
    if (currentData.type === 2 && !["Контекстная реклама", "Таргетированная реклама"].includes(currentData.value)) {
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
        if (["Контекстная реклама", "Таргетированная реклама"].includes(quizSteps[currentStep].value)) {
          const newQuizSteps = quizSteps.slice(0, currentStep);
          setQuizSteps(newQuizSteps);
        }
        setSelectedItems([]);
        setCurrentStep((prevStep) => prevStep - 1);
        QuizAnimator.slideRight(containerRef.current);
      });
    }
  };

  const handleQuizCompletion = () => {
    if (currentData.value === "Контекстная реклама") {
      calculateContextualResults();
    } else if (currentData.value === "Таргетированная реклама") {
      calculateTargetedResults();
    }
    setShowResults(true);
    setHeader(true)
  };

  const calculateContextualResults = () => {
    const { budget, cpc, leadConv, meetingConv, clientConv } = responses;
    const kolvo_lidov = Math.floor((budget.znachenie / cpc.znachenie) * (leadConv.znachenie / 100));
    const kolvo_vstrech = Math.floor(kolvo_lidov * (meetingConv.znachenie / 100));
    setResults({ kolvo_lidov, kolvo_vstrech });
  };

  const calculateTargetedResults = () => {
    const { budget, leadConv, meetingConv, clientConv } = responses;
    const kolvo_lidov = Math.floor(budget.znachenie / leadConv.znachenie);
    const kolvo_vstrech = Math.floor(kolvo_lidov * (meetingConv.znachenie / 100));
    setResults({ kolvo_lidov, kolvo_vstrech });
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setShowResults(false);
    setHeader(false)
    setResponses({});
    setQuizSteps([quizData[0], quizData[1], quizData[2], quizData[3]]);
  };

  useEffect(() => {
    QuizAnimator.slideLeft(containerRef.current);
  }, []);

  return createPortal(
    <div className={`fixed inset-0   z-[99999] flex items-center justify-center bg-white ${header && 'top-[87px] z-[999]'}`}>
      <div ref={scrollContainerRef} className="h-full w-full overflow-y-auto overflow-x-hidden max-mdl:p-2 max-mdl:py-4 p-4">
        <div className="bg-[#F8F8F8]  w-full h-auto min-h-full rounded-[100px] max-slg:rounded-3xl max-slg:p-4 max-slg:py-8 flex items-center justify-center p-16 relative">
          <button onClick={setQuizModal} className="absolute max-2xl:right-2 max-2xl:px-4 top-2 right-16 hover:bg-[#7B72EB] hover:text-white px-8 text-xs py-2 max-2xl:py-1 rounded-full border border-[#7B72EB] text-[#7B72EB]">
          {lng === 'ru' ? 'Закрыть' : lng === 'uz' ? 'Yopish' : 'Close'}
          </button>
          <div ref={containerRef} className="w-full ">
            {!showResults ? (
              <>
                <h2 className="text-5xl max-mdl:text-2xl transition-all duration-300 max-mdl:font-bold font-semibold mb-4">
                  {currentData.title[lng]}
                </h2>
                <p className="text-3xl max-mdl:text-xl transition-all duration-300 max-mdl:leading-6 font-semibold mb-8">
                {currentData.descriptions && currentData.descriptions[lng] ? currentData.descriptions[lng] : null}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {currentStep !== 0 && (
                    <button onClick={prevStep} className="px-24 max-2xl:w-full max-2xl:px-0 py-3 text-lg rounded-full text-[#7B72EB] font-bold bg-white">
                      {lng === 'ru' ? 'Назад' : lng === 'uz' ? 'Orqaga' : 'Back'}
                    </button>
                  )}
                  {currentData.type === 2 && !["Контекстная реклама", "Таргетированная реклама"].includes(currentData.value) && selectedItems.length !== 0 && (
                    <button onClick={nextStep} className="px-24  max-2xl:w-full max-2xl:px-0 py-3 text-lg rounded-full text-[#7B72EB] font-bold bg-white">
                       {lng === 'ru' ? 'Вперёд' : lng === 'uz' ? 'Oldinga' : 'Next'}
                    </button>
                  )}
                  {currentStep == 3 && (
                    <button onClick={nextStep} className="px-24  max-2xl:w-full max-2xl:px-0 py-3 text-lg rounded-full text-[#7B72EB] font-bold bg-white">
                     {lng === 'ru' ? 'Пропустить' : lng === 'uz' ? 'Oʻtkazib yuborish' : 'Skip'}
                    </button>
                  )}
                </div>
                <div className={`grid max-2xl:grid-cols-2 ${currentStep == 3 ? 'grid-cols-2': 'grid-cols-3'} gap-4 max-slg:grid-cols-1`}>
                  {currentData.data.map((item, index) => {
                    return item.type === "button" ? (
                      <ButtonCard handleSelection={handleSelection} key={index} item={item} selectedItems={selectedItems} />
                    ) : item.type === "input" ? (
                      <InputCard key={index} item={item} handleSelection={handleSelection} />
                    ) : (
                      <RatioCard item={item} handleRatioChange={handleRatioChange} />
                    );
                  })}
                </div>
                {currentStep == 4 && (
                  <div className="flex w-full justify-center items-center mt-12">
                    <button onClick={handleQuizCompletion} className="px-12 py-3 text-lg rounded-full bg-[#7B72EB] text-white font-semibold">
                      {lng === 'ru' ? 'Рассчитать' : lng === 'uz' ? 'Hisoblash' : 'Calculate'}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div>
                <ResultSection resetQuiz={resetQuiz} setQuizModal={setQuizModal} responses={responses} results={results} resultContainerRef={resultContainerRef} />
              </div>
             
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}