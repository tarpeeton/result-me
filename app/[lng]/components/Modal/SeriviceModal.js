'use client';
import { IoClose } from "react-icons/io5";
import React, { useState, useCallback, useEffect } from 'react';
import { createService } from '../../lib/api/api';
import InputMask from 'react-input-mask';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { FaCheckCircle } from "react-icons/fa";
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation'

const ServiceModal = ({ isOpen, onClose }) => {
  const {lng} = useParams()
  const { t } = useCustomTranslation(lng , 'servicemodal') 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Check if the form is valid (all fields are filled)
  useEffect(() => {
    const { name, phone, service, comment } = formData;
    if (name && phone && service && comment) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to Telegram Bot
      await createService(formData);
      // After successful submission
      setIsSubmitted(true);
      onClose();
      localStorage.removeItem('formData');
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
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
        className='z-[99999999999]'
        PaperProps={{
          sx: {
            maxWidth: '460px',
            borderRadius: { xs: '20px', mdl: '30px' },
            padding: { xs: '2px 20px', mdl: '30px 25px' },
            zIndex: 99999999, // Set z-index for the main modal
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: { xs: '23px', mdl: '30px' },
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            zIndex: 99999999, // Set z-index for DialogTitle
          }}
        >
          {t('submit_request')} {/* Translated "Оставить заявку" */}
          <div onClick={onClose} style={{ cursor: 'pointer' }}>
            <IoClose />
          </div>
        </DialogTitle>
        <DialogContent sx={{ zIndex: 99999999 }} className='z-[99999999]'>
          {/* Form submission handled here */}
          <form onSubmit={handleSubmit}>
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
                placeholder={t('name')} 
              />
            </div>

            {/* Phone Input with Mask */}
            <div style={{ marginBottom: '16px' }}>
              <InputMask
                mask="+999 (99) 999-99-99"
                value={formData.phone}
                onChange={handleChange}
                required
              >
                {() => (
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #F0F0F0',
                      borderRadius: '10px',
                    }}
                    placeholder={t('phone_number')} 
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
                  {t('select_service')} 
                </option>
                <option value="Web Development">{t('web_development')}</option>
                <option value="Telegram Bot">{t('telegram_bot')}</option>
                <option value="SMM">{t('smm')}</option>
                <option value="SEO">{t('seo')}</option>
                <option value="reklama">{t('advertising')}</option>
                <option value="brending">{t('branding')}</option>
                <option value="firmeniy stil">{t('corporate_identity')}</option>
              </select>
            </div>

            {/* Comment Input */}
            <div style={{ marginBottom: '16px' }}>
              <input
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #F0F0F0',
                  borderRadius: '10px',
                }}
                placeholder={t('comment')} 
              />
            </div>

            {/* Submit Button inside the form */}
            <DialogActions sx={{ width: '100%', zIndex: 9999 }}>
              <Button
                type="submit"
                disabled={!isFormValid} // Disable the button if the form is not valid
                sx={{
                  width: '90%',
                  fontSize: { xs: '14px', mdl: '18px' },
                  mx: 'auto',
                  borderRadius: '100px',
                  py: '20px',
                  fontWeight: 'bold',
                  px: '30px',
                  backgroundColor: isFormValid ? '#7B72EB' : '#ccc', // Change color based on validity
                  color: 'white',
                }}
              >
                {t('submit')} 
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
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
            zIndex: 999999, // Set z-index for the success modal
          },
        }}
      >
        <DialogContent
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 999999, // Set z-index for DialogContent
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
            {t('request_submitted')} {/* Translated "Заявка отправлена!" */}
          </h2>
          <p style={{ fontSize: '16px', color: 'gray', marginTop: '8px' }}>
            {t('request_success')} 
          </p>
        </DialogContent>
        <DialogActions sx={{ width: '100%', zIndex: 9999 }}>
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
            {t('ok')} 
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ServiceModal;













