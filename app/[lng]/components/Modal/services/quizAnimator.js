// services/quizAnimator.js
import { gsap } from "gsap";

export const QuizAnimator = {
  slideLeft: (element, onComplete) => {
    gsap.fromTo(
      element,
      { opacity: 1, x: "100%" }, // Начальная позиция для анимации влево
      { opacity: 1, x: "0%", duration: 0.5, onComplete }
    );
  },
  slideRight: (element, onComplete) => {
    gsap.fromTo(
      element,
      { opacity: 1, x: "-100%" }, // Начальная позиция для анимации вправо
      { opacity: 1, x: "0%", duration: 0.5, onComplete }
    );
  },
  fadeOutLeft: (element, onComplete) => {
    gsap.to(element, {
      opacity: 0,
      x: "-100%", // Убираем влево
      duration: 0.5,
      onComplete,
    });
  },
  fadeOutRight: (element, onComplete) => {
    gsap.to(element, {
      opacity: 0,
      x: "100%", // Убираем вправо
      duration: 0.5,
      onComplete,
    });
  },
};
