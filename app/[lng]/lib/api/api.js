// lb/api.js
import axios from 'axios';

const VAKANSY_API_CREATE = 'https://result-me.uz/api/application/vacancy';

export const createVakansy = async (formData) => {
  try {
    const response = await axios.post(VAKANSY_API_CREATE, {
      name: formData.fullName,
      age: formData.age,
      specialization: formData.specialization,
      experience: formData.experience,
      salary: formData.salary,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error; // You can throw the error if you want to handle it in the component
  }
};
