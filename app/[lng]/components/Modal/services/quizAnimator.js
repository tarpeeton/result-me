import { gsap } from "gsap";

export const QuizAnimator = {
  slideLeft: (element, onComplete) => {
    gsap.fromTo(
      element,
      { opacity: 1, x: "110%" }, // Начальная позиция для анимации влево
      { opacity: 1, x: "0%", duration: 0.5, onComplete }
    );
  },
  slideRight: (element, onComplete) => {
    gsap.fromTo(
      element,
      { opacity: 1, x: "-110%" }, // Начальная позиция для анимации вправо
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
  fadeUp: (element, onComplete) => {
    gsap.to(element, {
      opacity: 0,
      y: "-100%",
      duration: 0.5,
      onComplete,
    });
  },
  fadeDown: (element, onComplete) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "0%", duration: 0.5, onComplete }
    );
  },
  slideUp: (element, onComplete) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: "100%" }, // Начальная позиция снизу
      { opacity: 1, y: "0%", duration: 0.5, onComplete }
    );
  },
  slideDown: (element, onComplete) => {
    gsap.to(element, {
      opacity: 0,
      y: "100%", // Двигаем вниз
      duration: 0.5,
      onComplete,
    });
  },
};
