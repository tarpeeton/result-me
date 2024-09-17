"use client";
import React, { useState } from "react";
import Image from "next/image";
import { createVakansy } from "../../lib/api/api";
import { FaCheckCircle } from "react-icons/fa";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material"; // Assuming you're using Material-UI

import revTop from "@/public/images/reviews/revTop.png";
import revBottom from "@/public/images/reviews/revBottom.png";
import revBG from "@/public/images/reviews/revBG.png";

const Job = () => {
  // Define state for each input field
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    specialization: "",
    experience: "",
    phone: "",
    salary: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State for tracking submission success

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform the API call
      await createVakansy(formData); // Make sure the phone number is included
      // Set submission success to true
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        fullName: "",
        age: "",
        specialization: "",
        experience: "",
        phone: "",
        salary: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle closing of the success modal
  const handleCloseSuccessModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div
      className="relative mx-[16px] mt-[20px] mdl:mt-[30px] rounded-[30px] bg-cover bg-no-repeat px-5 py-8 bg-[#161616] bg-opacity-[90%] 3xl:px-[70px] 3xl:flex 3xl:flex-row 3xl:py-[80px] 3xl:justify-between"
      style={{ backgroundImage: `url(${revBG.src})` }}
    >
      {/* Top Decorative Image - Background */}
      <div className="absolute top-0 right-0 rounded-[30px] z-0">
        <Image
          width={400}
          height={400}
          src={revTop}
          alt="revTop"
          className="rounded-[30px] opacity-[40%]"
        />
      </div>

      {/* Title */}
      <p className="text-[28px] text-white font-bold relative z-[99999] mb-6 mdl:text-[50px] mdl:mb-[40px] 3xl:w-[40%]">
        Присоединяйтесь к нашей команде!
      </p>

      {/* Form */}
      <form
        className="z-[99] relative 3xl:w-[50%] 3xl:justify-center 3xl:flex 3xl:flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="fullName"
          placeholder="ФИО"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]"
        />
        <input
          type="text"
          name="age"
          placeholder="Возраст"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]"
        />
        <input
          type="text"
          name="specialization"
          placeholder="Специализация"
          value={formData.specialization}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]"
        />
        <input
          type="text"
          name="experience"
          placeholder="Опыт работы"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]"
        />
        <input
          type="text"
          name="phone"
          placeholder="Номер телефона"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]"
        />
        <input
          type="text"
          name="salary"
          placeholder="Желаемая ЗП"
          value={formData.salary}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px]"
        />
        <button
          type="submit"
          className="w-full p-4 rounded-[100px] bg-[#7B72EB] text-white font-bold text-[14px] hover:bg-opacity-90 transition duration-300 mdl:py-[20px] mdl:px-[30px] mdl:w-[40%] mdl:mt-[40px] mdl:text-[18px] 3xl:w-[60%] mt-[20px]"
        >
          Отправить
        </button>
      </form>

      {/* Success Modal */}
      {isSubmitted && (
        <Dialog
          open={isSubmitted}
          onClose={handleCloseSuccessModal}
          fullWidth
          className="z-[999]"
          PaperProps={{
            sx: {
              maxWidth: "460px",
              borderRadius: { xs: "20px", mdl: "30px" },
              padding: { xs: "2px 20px", mdl: "30px 25px" },
              zIndex: 999, // Set z-index for the success modal
            },
          }}
        >
          <DialogContent
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 999, // Set z-index for DialogContent
            }}
          >
            <FaCheckCircle
              style={{
                color: "#7B72EB",
                fontSize: "80px",
                marginBottom: "16px",
              }}
            />
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Заявка отправлена!
            </h2>
            <p style={{ fontSize: "16px", color: "gray", marginTop: "8px" }}>
              Ваша заявка отправлена менеджерам на рассмотрение
            </p>
          </DialogContent>
          <DialogActions sx={{ width: "100%", zIndex: 99999 }}>
            <Button
              onClick={handleCloseSuccessModal}
              sx={{
                width: "90%",
                fontSize: { xs: "14px", mdl: "18px" },
                mx: "auto",
                borderRadius: "100px",
                py: "20px",
                fontWeight: "bold",
                px: "30px",
                backgroundColor: "#7B72EB",
                color: "white",
              }}
            >
              Ок
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Bottom Decorative Image - Background */}
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          width={400}
          height={400}
          src={revBottom}
          alt="revBottom"
          className="rounded-[30px] opacity-[40%]"
        />
      </div>
    </div>
  );
};

export default Job;
