"use client";
import React, { useState, useEffect } from "react";
import QuizButton from "./QuizButton";
import QuizModal from "./QuizModal";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const [quizModal, setQuizModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Проверяем, есть ли #quiz в URL при загрузке страницы
    if (window.location.hash === "#quiz") {
      setQuizModal(true); // Открываем модальное окно, если хеш #quiz найден
    }
  }, []);

  useEffect(() => {
    // Блокировка скролла при открытом модальном окне
    if (quizModal) {
      document.body.classList.add("overflow-hidden");
      window.location.hash = "quiz"; // Добавляем #quiz в URL
    } else {
      document.body.classList.remove("overflow-hidden");
      // Убираем хеш из URL, если модалка закрыта
      router.replace(window.location.pathname, undefined, { shallow: true });
    }

    // Удаление класса при размонтировании компонента
    return () => document.body.classList.remove("overflow-hidden");
  }, [quizModal, router]);

  return (
    <div>
      <QuizButton setQuizModal={setQuizModal} />
      {quizModal && <QuizModal setQuizModal={setQuizModal} />}
    </div>
  );
}
