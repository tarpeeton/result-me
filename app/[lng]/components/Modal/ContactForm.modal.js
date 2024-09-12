"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#__next'); // Assuming you're using Next.js, otherwise replace with your root element

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="bg-primary text-white px-6 py-3 rounded-md"
      >
        Оставить заявку
      </button>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Application Form"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Оставить заявку</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>

        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Введите ваше имя"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Номер телефона
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Введите номер телефона"
            />
          </div>

          {/* Service Select */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Выберите услугу
            </label>
            <select
              id="service"
              name="service"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option>Услуга 1</option>
              <option>Услуга 2</option>
              <option>Услуга 3</option>
            </select>
          </div>

          {/* Comments TextArea */}
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
              Комментарий
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Ваш комментарий"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Отправить
          </button>
        </form>
      </Modal>

      {/* Modal and Overlay Styles */}
      <style jsx>{`
        .custom-modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 8px;
          padding: 2rem;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .custom-overlay {
          background-color: rgba(0, 0, 0, 0.75);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default ContactModal;
