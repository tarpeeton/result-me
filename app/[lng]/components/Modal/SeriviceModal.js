"use client"
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { FaCheckCircle } from "react-icons/fa";

const ServiceModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control the success modal

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true); // Show success modal after submission
    onClose(); // Close the form modal when the form is submitted
  };

  // Close success modal
  const handleCloseSuccessModal = () => {
    setIsSubmitted(false); // Close the success modal
  };

  return (
    <>
      {/* Main Form Modal */}
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        className="rounded-[30px] mdl:rounded-[40px] 3xl:rounded-[100px] py-[25px] px-[20px]"
      >
        <DialogTitle className="text-[23px] mdl:text-[30px] 3xl:text-[30px] font-bold flex flex-row justify-between">
          Оставить заявку
          <div onClick={onClose} className="cursor-pointer">
            <IoClose className="text-titleDark" />
          </div>
        </DialogTitle>
        <DialogContent>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#F0F0F0] rounded-[10px]"
                placeholder="Имя"
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#F0F0F0] rounded-[10px]"
                placeholder="Номер телефона"
              />
            </div>

            {/* Service Select */}
            <div className="mb-4">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#F0F0F0] rounded-[10px]"
              >
                <option value="" disabled>Выберите услугу</option>
                <option value="Web Development">Разработка сайтов</option>
                <option value="Telegram Bot">Разработка Telegram-ботов</option>
                <option value="SMM">SMM</option>
                <option value="SEO">SEO</option>
              </select>
            </div>

            {/* Comment Input */}
            <div className="mb-4">
              <input
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full p-3 border border-[#F0F0F0] rounded-[10px]"
                placeholder="Комментарий"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions className="w-full">
          <Button
            onClick={handleSubmit}
            className=" w-[90%] text-[14px] 3xl:w-[80%] mx-auto rounded-[100px] py-[20px] mdl:text-[18px] font-bold px-[30px] bg-violet100 text-center text-white"
          >
            Отправить
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Modal */}
      <Dialog
        open={isSubmitted} // This will open the success modal after submission
        onClose={handleCloseSuccessModal}
        fullWidth
        maxWidth="sm"
        maxHeiht='sm'
        sx={{
          borderRadius: {
            xs: '30px', // For small screens
            mdl: '40px', // For medium screens
            '3xl': '100px', // For extra large screens
          },
          padding: {
            xs: '25px 20px', // For small screens
            mdl: '30px', // For medium screens
            '3xl': '40px 90px', // For extra large screens
          },
        }}
        className="rounded-[30px] mdl:rounded-[40px] 3xl:rounded-[100px] py-[25px] px-[90px]"
      >
        <DialogContent className="text-center flex flex-col items-center">
          <FaCheckCircle className="text-violet100 text-[50px] mb-4" />
          <h2 className="text-[20px] mdl:text-[24px] 3xl:text-[28px] font-bold">
            Заявка отправлена!
          </h2>
          <p className="text-[16px] text-gray-500 mt-2">
            Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
          </p>
        </DialogContent>
        <DialogActions className="w-full">
          <Button
            onClick={handleCloseSuccessModal}
            className=" w-[90%] text-[14px] 3xl:w-[80%] mx-auto rounded-[100px] py-[20px] mdl:text-[18px] font-bold px-[30px] bg-violet100 text-center text-white"
          >
            Ок
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ServiceModal;
