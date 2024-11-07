import Image from "next/image";
import React, { useState } from "react";
import RightOf from '@/public/images/right-of.png'
import LeftOf from '@/public/images/left-of.png'

export default function ResultSection({ results, resultContainerRef }) {
  const [formData, setFormData] = useState({ fio: "", phoneNumber: "+998" });
  const [errors, setErrors] = useState({});

  // Валидация ввода ФИО (только буквы)
  const handleFioChange = (e) => {
    const value = e.target.value;
    if (/^[а-яА-ЯёЁa-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, fio: value });
      setErrors({ ...errors, fio: "" });
    } else {
      setErrors({ ...errors, fio: "ФИО может содержать только буквы" });
    }
  };

  // Валидация номера телефона (начинается с +998 и максимум 14 символов)
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.startsWith("+998") && value.length <= 13) {
      setFormData({ ...formData, phoneNumber: value });
      setErrors({ ...errors, phoneNumber: "" });
    } else {
      setErrors({
        ...errors,
        phoneNumber:
          "Номер должен начинаться с +998 и содержать максимум 13 символов",
      });
    }
  };

  const handleSubmit = () => {
    if (!formData.fio || !formData.phoneNumber) {
      setErrors({
        fio: !formData.fio ? "Введите ФИО" : "",
        phoneNumber: !formData.phoneNumber ? "Введите номер телефона" : "",
      });
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div ref={resultContainerRef}>
      <div className="mt-12">
        <h2 className="text-5xl font-semibold mb-8">Прогнозируемые данные:</h2>
        <div className="flex justify-between gap-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center w-1/3">
            <h3 className="text-2xl font-bold mb-2">Кол-во лидов</h3>
            <p className="text-4xl text-[#7B72EB]">{results.leads}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center w-1/3">
            <h3 className="text-2xl font-bold mb-2">Кол-во клиентов</h3>
            <p className="text-4xl text-[#7B72EB]">{results.clients}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center w-1/3">
            <h3 className="text-2xl font-bold mb-2">Кол-во встреч</h3>
            <p className="text-4xl text-[#7B72EB]">{results.meetings}</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center px-2 mdl:px-6"></div>
      </div>
      <div
        style={{
          background: "linear-gradient(to right, #7B72EB 50%, #FFFFFF 150%)",
          borderRadius: "100px",
        }}
        className="p-12 relative overflow-hidden px-36 flex gap-12 justify-between"
      >
        <Image
        src={RightOf}
        width={500}
        height={500}
        alt="Left Bg Image Of Application"
        className="h-full absolute left-0 top-0 w-auto"
        />
        <Image
        src={LeftOf}
        width={500}
        height={500}
        alt="Left Bg Image Of Application"
        className="h-full absolute right-0 top-0 w-auto"
        />
        <div className="flex relative flex-col gap-3">
          <h2 className="text-4xl font-semibold mb-4 text-white w-full max-w-[500px]">
            Получить бесплатную консультацию!
          </h2>
          <p className="text-2xl mb-6 text-white font-semibold w-full max-w-[650px]">
            Мы проанализируем ваши ответы и поделимся профессиональным видением
            на продвижение вашей компании!
          </p>
        </div>
        <div className="flex relative flex-col gap-4 w-full max-w-[350px]">
          <input
            type="text"
            placeholder="ФИО"
            value={formData.fio}
            onChange={handleFioChange}
            className="p-3 rounded-2xl border border-gray-300"
          />
          {errors.fio && <span className="text-red-500">{errors.fio}</span>}

          <input
            type="text"
            placeholder="+998"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            className="p-3 rounded-lg border border-gray-300"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber}</span>
          )}

          <button
            onClick={handleSubmit}
            className="text-[#7B72EB] bg-white hover:text-white hover:bg-[#7B72EB] transition-all duration-300 font-bold py-3 mdl:px-20 self-start rounded-full mt-4"
          >
            Отправить
          </button>
        </div>
      </div>
      <div className="w-full flex justify-end mt-12 px-12">
          <button className="px-12 py-3 text-lg rounded-full font-semibold text-white bg-[#7B72EB]">
            Пройти еще раз
          </button>
      </div>
    </div>
  );
}
