// lb/api.js
import axios from 'axios';

const VAKANSY_API_CREATE = 'https://result-me.uz/api/application/vacancy';
const SERVICE_API_CREATE = 'https://result-me.uz/api/application/service';

export const createVakansy = async (formData) => {
  try {
    const response = await axios.post(VAKANSY_API_CREATE, {
      name: formData.fullName,
      age: formData.age,
      specialization: formData.specialization,
      experience: formData.experience,
      phone: formData.phone,
      salary: formData.salary,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error; 
  }
};

export const createService = async (FormData) => {
  try {
    const res = await axios.post(SERVICE_API_CREATE , {
      name: FormData.name,
      phone: FormData.phone,
      service: FormData.service,
      comment: FormData.comment
    })

    return res.data
  } catch (error) {
    console.error('Error submitting form data:', error);
  }
}