import React from "react";

export default function QuizModalContainer() {
  return (
    <div className="bg-[#F8F8F8] w-full h-full rounded-[100px] p-8 relative">
      <button
        onClick={() => setQuizModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ✕ {/* Иконка для закрытия модалки */}
      </button>

      {/* Содержимое модального окна */}
      <h2 className="text-2xl font-bold mb-4">Кто вы?</h2>
      <p className="mb-6">Выберите подходящее описание для себя</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Владелец бизнеса</h3>
            <p className="text-sm text-gray-500">
              Учредитель, соучредитель или генеральный директор компании
            </p>
          </div>
          <span className="text-lg">⬆️</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Руководитель</h3>
            <p className="text-sm text-gray-500">
              Описание должности руководителя
            </p>
          </div>
          <span className="text-lg">⬇️</span>
        </div>
        {/* Добавьте остальные элементы */}
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Маркетолог</h3>
            <p className="text-sm text-gray-500">
              Описание должности маркетолога
            </p>
          </div>
          <span className="text-lg">⬇️</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Ввести вручную</h3>
            <p className="text-sm text-gray-500">0 / 80</p>
          </div>
          <span className="text-lg">⬆️</span>
        </div>
      </div>
    </div>
  );
}
