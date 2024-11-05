"use client";
import React, { useEffect, useState, useCallback } from "react";
import QuizButton from "./QuizButton";
import QuizModal from "./QuizModal";

export default function Quiz() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    if (window.location.hash !== "#quiz") {
      window.history.pushState(null, "", "#quiz");
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    if (window.location.hash === "#quiz") {
      window.history.pushState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === "#quiz") {
      setIsModalOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#quiz") {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <div>
      <QuizButton setQuizModal={openModal} />
      {isModalOpen && <QuizModal setQuizModal={closeModal} />}
    </div>
  );
}
