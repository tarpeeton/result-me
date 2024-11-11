import Image from 'next/image'
import React, { useState } from 'react'
import RightOf from '@/public/images/right-of.png'
import LeftOf from '@/public/images/left-of.png'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { useParams } from 'next/navigation'

export default function ResultSection({
  setQuizModal,
  responses,
  results,
  resultContainerRef,
  resetQuiz
}) {
  const [formData, setFormData] = useState({ fio: '', phoneNumber: '+998' })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { lng } = useParams()
  // Валидация ввода ФИО (только буквы)
  const handleFioChange = e => {
    const value = e.target.value
    if (/^[а-яА-ЯёЁa-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, fio: value })
      setErrors({ ...errors, fio: '' })
    } else {
      setErrors({
        ...errors,
        fio: 
          lng === 'ru' 
            ? 'ФИО может содержать только буквы' 
            : lng === 'uz' 
            ? 'Ism faqat harflardan iborat bo‘lishi kerak' 
            : 'Full Name can only contain letters'
      });
    }
  }

  // Валидация номера телефона (начинается с +998 и только цифры)
  const handlePhoneChange = e => {
    let value = e.target.value

    // Разрешаем ввод только цифр после "+998"
    if (/^\+998\d*$/.test(value) && value.length <= 13) {
      setFormData({ ...formData, phoneNumber: value })
      setErrors({ ...errors, phoneNumber: '' })
    } else {
      setErrors({
        ...errors,
        phoneNumber: 
          lng === 'ru' 
            ? 'Номер должен содержать только цифры, максимум 13 символов' 
            : lng === 'uz' 
            ? 'Raqam faqat sonlardan iborat bo‘lishi kerak, maksimal 13 ta belgi' 
            : 'The number must contain only digits, up to 13 characters'
      });
      
    }
  }

  const handleSubmit = () => {
    if (!formData.fio || !formData.phoneNumber) {
      if (!formData.phoneNumber) {
        toast.error('Пожалуйста, введите номер телефона.')
      }
      setErrors({
        fio: !formData.fio ? 'Введите ФИО' : '',
        phoneNumber: !formData.phoneNumber ? 'Введите номер телефона' : ''
      })
    } else {
      setIsLoading(true)
      function postToApi() {
        const {
          calculator,
          istochniki_klientov,
          jelaimniy_rezultat,
          kto_vi,
          ...data
        } = responses
        const reklama = Object.values(data).map(item => ({
          nazivanie: item.nazivanie,
          znachenie: `${item.znachenie}${
            item.nazivanie.includes('Конверсия') ? '%' : '$'
          }`
        }))

        const { kolvo_klientov, kolvo_lidov, kolvo_vstrech } = results
        axios
          .post('https://result-me.uz/api/application/kviz', {
            calculator: calculator,
            istochniki_klientov: istochniki_klientov,
            jelaimniy_rezultat: jelaimniy_rezultat,
            kto_vi: kto_vi,
            fio: formData.fio,
            nomer_telefona: formData.phoneNumber,
            reklama: reklama,
            kolvo_klientov: kolvo_klientov,
            kolvo_lidov,
            kolvo_vstrech
          })
          .then(() => {
            toast.success('Данные успешно отправлены!')
            setQuizModal()
          })
          .catch(() => {
            toast.error('Ошибка при отправке данных. Попробуйте снова.')
          })
          .finally(() => {
            setIsLoading(false)
          })
      }

      postToApi()
    }
  }

  return (
    <div ref={resultContainerRef}>
      <Toaster position='top-right' />
      {results && Object.keys(results).length > 0 && (



        <div className='mt-12'>
          <h2 className='text-5xl font-semibold mb-8 max-2xl:text-3xl'>
            {lng === 'ru'
              ? ' Прогнозируемые данные:'
              : lng === 'uz'
              ? 'Kutilayotgan ma‘lumotlar:'
              : 'Projected Data:'}
          </h2>
          <div className='flex max-2xl:flex-wrap justify-between gap-8'>
            <div className='bg-white p-4 rounded-lg shadow-md text-center max-2xl:w-full w-1/3'>
              <h3 className='text-2xl font-bold mb-2'>

                {lng === 'ru'
              ? 'Кол-во лидов'
              : lng === 'uz'
              ? 'lidlar soni'
              : 'number of leads'}

              </h3>
              <p className='text-4xl text-[#7B72EB]'>{results.kolvo_lidov}</p>
            </div>
            {/* <div className='bg-white p-4 rounded-lg shadow-md text-center max-2xl:w-full w-1/3'>
              <h3 className='text-2xl font-bold mb-2'>
                
                {lng === 'ru'
              ? 'Кол-во клиентов'
              : lng === 'uz'
              ? 'mijozlar soni'
              : 'number of clients'}
                
                </h3>
              <p className='text-4xl text-[#7B72EB]'>
                {results.kolvo_klientov}
              </p>
            </div> */}
            <div className='bg-white p-4 rounded-lg shadow-md text-center max-2xl:w-full w-1/3'>
              <h3 className='text-2xl font-bold mb-2'>
                   
                {lng === 'ru'
              ? 'Кол-во встреч'
              : lng === 'uz'
              ? 'uchrashuvlar soni '
              : 'number of appointments'}
                
                </h3>
              <p className='text-4xl text-[#7B72EB]'>{results.kolvo_vstrech}</p>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          background: 'linear-gradient(to right, #7B72EB 50%, #FFFFFF 150%)'
        }}
        className='p-12 relative rounded-[100px] overflow-hidden px-36 mt-12 flex max-2xl:px-4 max-2xl:p-8 max-2xl:rounded-[40px] max-2xl:flex-col max-2xl:gap-2 gap-12 justify-between'
      >
        <Image
          src={RightOf}
          width={500}
          height={500}
          alt='Right Bg Image Of Application'
          className='h-full absolute 2xl:top-0  max-2xl:h-1/2 left-0 bottom-0 w-auto'
        />
        <Image
          src={LeftOf}
          width={500}
          height={500}
          alt='Left Bg Image Of Application'
          className='h-full absolute right-0 top-0 w-auto max-2xl:hidden'
        />
        <div className='flex relative flex-col gap-3 max-2xl:gap-0'>
          <h2 className='text-4xl font-semibold mb-4 max-2xl:text-2xl max-2xl:text-center text-white w-full max-2xl:max-w-full max-w-[500px]'>
       
            {lng === 'ru'
              ? ' Получить бесплатную консультацию!'
              : lng === 'uz'
              ? 'Bepul konsultatsiya olish'
              : 'Get a Free Consultation'}
          </h2>
          <p className='text-2xl max-2xl:text-lg max-2xl:text-center mb-6 text-white font-semibold w-full max-w-[650px]'>
            {lng === 'ru'
              ? 'Мы проанализируем ваши ответы и поделимся профессиональным видением на продвижение вашей компании!'
              : lng === 'uz'
              ? ' Biz javoblaringizni tahlil qilamiz va kompaniyangizni olg‘a surish bo‘yicha professional nuqtai nazarimiz bilan bo‘lishamiz'
              : 'We will analyze your responses and share professional insights for promoting your company.'}
          </p>
        </div>
        <div className='flex relative flex-col gap-4 w-full max-w-[350px] max-2xl:max-w-full'>
          <input
            type='text'
            placeholder={
              lng === 'ru' ? 'ФИО' : lng === 'uz' ? 'To‘liq ism' : 'Full Name'
            }
            value={formData.fio}
            onChange={handleFioChange}
            className='p-3 rounded-2xl border border-gray-300'
          />
          {errors.fio && <span className='text-red-500'>{errors.fio}</span>}

          <input
            type='text'
            placeholder='+998'
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            className='p-3 rounded-lg border border-gray-300'
          />
          {errors.phoneNumber && (
            <span className='text-red-500'>{errors.phoneNumber}</span>
          )}

          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            variant='contained'
            color='primary'
            className='text-[#7B72EB] bg-white hover:text-white hover:bg-[#7B72EB] transition-all duration-300 max-2xl:w-full font-bold py-3 mdl:px-20 self-start rounded-full mt-4'
            startIcon={
              isLoading && <CircularProgress size={20} color='inherit' />
            }
          >
            {isLoading
              ? lng === 'ru'
                ? 'Отправка...'
                : lng === 'uz'
                ? 'Yuborilmoqda...'
                : 'Sending...'
              : lng === 'ru'
              ? 'Отправить'
              : lng === 'uz'
              ? 'Yuborish'
              : 'Send'}
          </Button>
        </div>
      </div>
      <div className='w-full flex justify-end mt-12 max-2xl:p-0 px-12'>
        <button
          onClick={resetQuiz}
          className='px-12 py-3 max-2xl:text-md max-2xl:px-0 max-2xl:w-full text-lg rounded-full font-semibold text-white bg-[#7B72EB]'
        >
         {lng === 'ru' ? 'Пройти еще раз' : lng === 'uz' ? 'qayta o‘tish' : 'Try again'}
        </button>
      </div>
    </div>
  )
}
