'use client';

import { IoClose } from "react-icons/io5";
import React, { useState, useCallback } from 'react';
import InputMask from 'react-input-mask';
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    onClose();
    localStorage.removeItem('formData');
  };

  // Close success modal
  const handleCloseSuccessModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Main Form Modal */}
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        className='z-[99999]'
        PaperProps={{
          sx: {
            maxWidth: '460px',
            borderRadius: { xs: '20px', mdl: '30px' },
            padding: { xs: '2px 20px', mdl: '30px 25px' },
            zIndex: 99999, // Set z-index for the main modal
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: { xs: '23px', mdl: '30px' },
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            zIndex: 99999, // Set z-index for DialogTitle
          }}
        >
          Оставить заявку
          <div onClick={onClose} style={{ cursor: 'pointer' }}>
            <IoClose />
          </div>
        </DialogTitle>
        <DialogContent sx={{ zIndex: 99999 }} className='z-[99999999]'>
          <form>
            {/* Name Input */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #F0F0F0',
                  borderRadius: '10px',
                }}
                placeholder="Имя"
              />
            </div>

            {/* Phone Input with Mask */}
            <div style={{ marginBottom: '16px' }}>
              <InputMask
                mask="+998 (99) 999-99-99"
                value={formData.phone}
                onChange={handleChange}
              >
                {() => (
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #F0F0F0',
                      borderRadius: '10px',
                    }}
                    placeholder="Номер телефона"
                  />
                )}
              </InputMask>
            </div>

            {/* Service Select */}
            <div style={{ marginBottom: '16px' }}>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #F0F0F0',
                  borderRadius: '10px',
                }}
              >
                <option value="" disabled>
                  Выберите услугу
                </option>
                <option value="Web Development">Разработка сайтов</option>
                <option value="Telegram Bot">Разработка Telegram-ботов</option>
                <option value="SMM">SMM</option>
                <option value="SEO">SEO</option>
              </select>
            </div>

            {/* Comment Input */}
            <div style={{ marginBottom: '16px' }}>
              <input
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #F0F0F0',
                  borderRadius: '10px',
                }}
                placeholder="Комментарий"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions sx={{ width: '100%', zIndex: 99999 }}>
          <Button
            onClick={handleSubmit}
            sx={{
              width: '90%',
              fontSize: { xs: '14px', mdl: '18px' },
              mx: 'auto',
              borderRadius: '100px',
              py: '20px',
              fontWeight: 'bold',
              px: '30px',
              backgroundColor: '#7B72EB',
              color: 'white',
            }}
          >
            Отправить
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Modal */}
      <Dialog
        open={isSubmitted}
        onClose={handleCloseSuccessModal}
        fullWidth
        PaperProps={{
          sx: {
            maxWidth: '460px',
            borderRadius: { xs: '20px', mdl: '30px' },
            padding: { xs: '2px 20px', mdl: '30px 25px' },
            zIndex: 99999, // Set z-index for the success modal
          },
        }}
      >
        <DialogContent
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 99999, // Set z-index for DialogContent
          }}
        >
          <FaCheckCircle
            style={{ color: '#7B72EB', fontSize: '80px', marginBottom: '16px' }}
          />
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Заявка отправлена!
          </h2>
          <p style={{ fontSize: '16px', color: 'gray', marginTop: '8px' }}>
            Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
          </p>
        </DialogContent>
        <DialogActions sx={{ width: '100%', zIndex: 99999 }}>
          <Button
            onClick={handleCloseSuccessModal}
            sx={{
              width: '90%',
              fontSize: { xs: '14px', mdl: '18px' },
              mx: 'auto',
              borderRadius: '100px',
              py: '20px',
              fontWeight: 'bold',
              px: '30px',
              backgroundColor: '#7B72EB',
              color: 'white',
            }}
          >
            Ок
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ServiceModal;
