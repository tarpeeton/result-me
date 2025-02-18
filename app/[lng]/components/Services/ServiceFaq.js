'use client'
import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useParams } from 'next/navigation'
import { useCustomTranslation } from '@/app/i18n/client'

const DATA_FOR_FAQ = [
    {slug: "web-development" , faqs:[
        {
            question: {
              ru: "В какие сроки сделают сайт?",
              en: "How long does it take to build a website?",
              uz: "Sayt qanchada tayyor bo‘ladi?"
            },
            answer: {
              ru: `Зависит от типа сайта:
        - Шаблонный – от 3 дней. В среднем 2 недели.
        - Уникальный – от 2 недель. В среднем 4 недели.
        Скорость зависит от размера сайта и того, насколько быстро вы предоставите информацию.`,
              en: `It depends on the type of website:
        - Template-based – from 3 days. On average, 2 weeks.
        - Unique – from 2 weeks. On average, 4 weeks.
        The speed depends on the website's size and how quickly you provide the necessary content.`,
              uz: `Sayt turiga bog‘liq:
        - Shablon – 3 kundan boshlab. O‘rtacha 2 hafta.
        - Unikal – 2 haftadan boshlab. O‘rtacha 4 hafta.
        Tezlik sayt hajmi va kerakli ma’lumotlarni qanchalik tez taqdim etishingizga bog‘liq.`
            }
          },
          {
            question: {
              ru: "Будет ли мой сайт в общем доступе?",
              en: "Will my website be publicly accessible?",
              uz: "Saytim internetda ochiq bo‘ladimi?"
            },
            answer: {
              ru: "Да, конечно! Мы индексируем его в Google и Яндекс, чтобы он был доступен для всех.",
              en: "Yes, of course! We index it in Google & Yandex, making it accessible to everyone.",
              uz: "Ha, albatta! Biz uni Google va Yandex qidiruv tizimlariga indekslaymiz, shunda hamma ko‘ra oladi."
            }
          },
          {
            question: {
              ru: "Могу ли я редактировать сайт?",
              en: "Can I edit my website?",
              uz: "Saytni o‘zim tahrirlashim mumkinmi?"
            },
            answer: {
              ru: "Да, почти во всех тарифах есть админ-панель, где можно менять текст, фото, товары.",
              en: "Yes! Most of our plans include an admin panel, allowing you to edit text, images, and products.",
              uz: "Ha, deyarli barcha tariflarda admin panel bor. Unda matn, rasmlar va mahsulotlarni o‘zgartirish mumkin."
            }
          },
          {
            question: {
              ru: "Кто будет владельцем сайта?",
              en: "Who owns the website?",
              uz: "Sayt egasi kim bo‘ladi?"
            },
            answer: {
              ru: "Полным владельцем будете вы. Мы передадим вам код и доступы, и вы сможете распоряжаться сайтом по своему усмотрению.",
              en: "You are the full owner. We provide you with the source code and all access credentials, giving you complete control over your website.",
              uz: "To‘liq egasi siz bo‘lasiz. Biz sizga kod va barcha kirish huquqlarini topshiramiz, sayt bilan o‘zingiz ishlashingiz mumkin."
            }
          },
          {
            question: {
              ru: "Нужно ли платить за сайт после покупки?",
              en: "Are there additional costs after purchasing the website?",
              uz: "Sayt uchun keyinchalik to‘lov qilish kerakmi?"
            },
            answer: {
              ru: `Есть обязательные расходы:
        - Домен и хостинг – первый год оплачиваем мы, затем 187 000 сум/год.
        - Реклама – если хотите привлекать клиентов, её можно настроить за отдельную плату.`,
              en: `There are a few necessary expenses:
        - Domain & hosting – We cover the first year, then it's 187,000 UZS/year.
        - Advertising – If you want to attract customers, you can set up ads for an additional cost.`,
              uz: `Majburiy xarajatlar bor:
        - Domen va hosting – birinchi yil biz to‘laymiz, keyingi yildan 187 000 so‘m/yil.
        - Reklama – mijoz jalb qilish uchun alohida to‘lov asosida sozlash mumkin.`
            }
          },
          {
            question: {
              ru: "Какие данные нужны от меня?",
              en: "What information do you need from me?",
              uz: "Mendan qanday ma’lumotlar kerak?"
            },
            answer: {
              ru: "Контактная информация о вас или вашей компании. Название, контакты, описание услуг, логотип, фото, тексты и пожелания по дизайну. Чем больше информации, тем быстрее работа.",
              en: "We require your company's contact details, name, services description, logo, images, text content, and design preferences. The more details you provide, the faster the development process.",
              uz: "Siz yoki kompaniyangiz haqidagi ma’lumotlar: nomi, aloqa ma’lumotlari, xizmat tavsifi, logotip, rasmlar, matnlar va dizayn bo‘yicha istaklar. Qancha ko‘p ma’lumot bersangiz, ish shuncha tez bo‘ladi."
            }
          }
    ]},
   
];

export const ServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [faqDataWithSlug , setFaqDataWithSlug] = useState([])

  const contentRefs = useRef([])
  const { lng  , slug} = useParams()
  const {t} = useCustomTranslation(lng , 'acardion')
  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  console.log(slug , 'slug')

  useEffect(() => {
    const category = DATA_FOR_FAQ.find(item => item.slug === slug);
    if (category) {
      setFaqDataWithSlug(category.faqs);
    } else {
      setFaqDataWithSlug([]);
    }
  }, [slug]);



  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (activeIndex === index) {
          gsap.fromTo(
            content,
            { height: 0, opacity: 0 },
            { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
          )
        } else {
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
          })
        }
      }
    })
  }, [activeIndex])

  return (
    <div className='w-full max-w-full mx-auto mt-11  p-4 mdl:p-[20px] 3xl:p-[30px] 2xl:mt-[100px] '>
      <h2 className='text-[28px] font-bold mb-[30px] mdl:text-[45px]'>
        {t('title')}
      </h2>
      {faqDataWithSlug.map((item, index) => (
        <div
          key={index}
          className={`mb-2 2xl:mb-[20px] border-[2px] rounded-[20px] 2xl:rounded-[30px] overflow-hidden transition-all duration-300 ${
            activeIndex === index ? 'border-[#7B72EB]' : 'border-gray-300'
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className='flex justify-between items-center w-full p-[20px] bg-white text-left focus:outline-none 2xl:p-[40px]'
          >
            <span className='text-[15px] font-semibold mdl:text-[25px] '>
              {item.question[lng]}
            </span>
            <svg
              className={`w-6 h-6 mdl:w-[30px] mdl:h-[30px] 3xl:w-[] 3xl:h-[] transition-transform transform text-[#7B72EB] ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>


          <div
            ref={el => (contentRefs.current[index] = el)}
            className='p-0 overflow-hidden'
            style={{
              height: activeIndex === index ? 'auto' : 0,
              opacity: activeIndex === index ? 1 : 0
            }}
          >
            <div className='p-[20px] mt-[-20px] bg-white mdl:p-[20px] mdl:mt-[-20px] 2xl:p-[40px] 2xl:mt-[-50px] 3xl:p-[40px] 3xl:mt-[-40px]'>
              <p className='text-[15px] whitespace-pre-wrap text-[#454545] font-medium mdl:text-[20px] font-robotoFlex '>
                {item.answer[lng]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

