"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useParams } from "next/navigation";
import { useCustomTranslation } from "@/app/i18n/client";

const DATA_FOR_FAQ = [
  {
    slug: "web-development",
    faqs: [
      {
        question: {
          ru: "В какие сроки сделают сайт?",
          en: "How long does it take to build a website?",
          uz: "Sayt qanchada tayyor bo‘ladi?",
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
        Tezlik sayt hajmi va kerakli ma’lumotlarni qanchalik tez taqdim etishingizga bog‘liq.`,
        },
      },
      {
        question: {
          ru: "Будет ли мой сайт в общем доступе?",
          en: "Will my website be publicly accessible?",
          uz: "Saytim internetda ochiq bo‘ladimi?",
        },
        answer: {
          ru: "Да, конечно! Мы индексируем его в Google и Яндекс, чтобы он был доступен для всех.",
          en: "Yes, of course! We index it in Google & Yandex, making it accessible to everyone.",
          uz: "Ha, albatta! Biz uni Google va Yandex qidiruv tizimlariga indekslaymiz, shunda hamma ko‘ra oladi.",
        },
      },
      {
        question: {
          ru: "Могу ли я редактировать сайт?",
          en: "Can I edit my website?",
          uz: "Saytni o‘zim tahrirlashim mumkinmi?",
        },
        answer: {
          ru: "Да, почти во всех тарифах есть админ-панель, где можно менять текст, фото, товары.",
          en: "Yes! Most of our plans include an admin panel, allowing you to edit text, images, and products.",
          uz: "Ha, deyarli barcha tariflarda admin panel bor. Unda matn, rasmlar va mahsulotlarni o‘zgartirish mumkin.",
        },
      },
      {
        question: {
          ru: "Кто будет владельцем сайта?",
          en: "Who owns the website?",
          uz: "Sayt egasi kim bo‘ladi?",
        },
        answer: {
          ru: "Полным владельцем будете вы. Мы передадим вам код и доступы, и вы сможете распоряжаться сайтом по своему усмотрению.",
          en: "You are the full owner. We provide you with the source code and all access credentials, giving you complete control over your website.",
          uz: "To‘liq egasi siz bo‘lasiz. Biz sizga kod va barcha kirish huquqlarini topshiramiz, sayt bilan o‘zingiz ishlashingiz mumkin.",
        },
      },
      {
        question: {
          ru: "Нужно ли платить за сайт после покупки?",
          en: "Are there additional costs after purchasing the website?",
          uz: "Sayt uchun keyinchalik to‘lov qilish kerakmi?",
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
        - Reklama – mijoz jalb qilish uchun alohida to‘lov asosida sozlash mumkin.`,
        },
      },
      {
        question: {
          ru: "Какие данные нужны от меня?",
          en: "What information do you need from me?",
          uz: "Mendan qanday ma’lumotlar kerak?",
        },
        answer: {
          ru: "Контактная информация о вас или вашей компании. Название, контакты, описание услуг, логотип, фото, тексты и пожелания по дизайну. Чем больше информации, тем быстрее работа.",
          en: "We require your company's contact details, name, services description, logo, images, text content, and design preferences. The more details you provide, the faster the development process.",
          uz: "Siz yoki kompaniyangiz haqidagi ma’lumotlar: nomi, aloqa ma’lumotlari, xizmat tavsifi, logotip, rasmlar, matnlar va dizayn bo‘yicha istaklar. Qancha ko‘p ma’lumot bersangiz, ish shuncha tez bo‘ladi.",
        },
      },
    ],
  },

  {
    slug: "telegram-bot-development",
    faqs: [
      {
        question: {
          ru: "Сколько времени занимает разработка чат-бота?",
          en: "How long does it take to develop a chatbot?",
          uz: "Chat-botni ishlab chiqish qancha vaqt oladi?",
        },
        answer: {
          ru: `В зависимости от сложности: от 3 дней до 1 месяца. В среднем около 1 - 2 недель`,
          en: `Depending on the complexity: from 3 days to 1 month. On average, about 1 - 2 weeks.`,
          uz: `Murakkabligiga qarab 3 kundan 1 oygacha. O‘rtacha 1-2 hafta davom etadi.`,
        },
      },
      {
        question: {
          ru: "Можно ли интегрировать бота с CRM и другими сервисами?",
          en: "Can the bot be integrated with CRM and other services?",
          uz: "Botni CRM va boshqa xizmatlarga ulash mumkinmi?",
        },
        answer: {
          ru: `Конечно! Мы подключаем бота к CRM, 1C, API, платежным системам и другим сервисам.`,
          en: `A description of tasks, dialogue scenarios, company data, and functionality preferences.`,
          uz: `Albatta! Biz botni CRM, 1C, API, to‘lov tizimlari va boshqa xizmatlarga bog‘laymiz.`,
        },
      },
      {
        question: {
          ru: "Что нужно предоставить для разработки бота?",
          en: "What needs to be provided for bot development?",
          uz: "Botni ishlab chiqish uchun nimalar kerak?",
        },
        answer: {
          ru: `Описание задач, сценарий диалогов, данные компании и пожелания по функционалу.`,
          en: `A description of tasks, dialogue scenarios, company data, and functionality preferences.`,
          uz: `Vazifalar tavsifi, suhbat senariylari, kompaniya ma’lumotlari va funksionallik bo‘yicha istaklar.`,
        },
      },
      {
        question: {
          ru: "Нужно ли платить после разработки бота за его поддержку?",
          en: "Do I need to pay for bot maintenance after development?",
          uz: "Bot ishlab chiqilgandan keyin qo‘shimcha to‘lovlar bo‘ladimi?",
        },
        answer: {
          ru: `Бот не требует ежемесячных платежей, если работает без изменений.
Оплачиваются только доработки, обновления и расширение функционала.
Для ИИ-ботов списание средств происходит за обработку данных ChatGPT.
Также возможны расходы на сервер (ежегодная, но небольшая оплата). 
Если у вас есть свой сервер, мы можем разместить бота на нём – тогда дополнительных затрат не будет.`,
          en: `The bot does not require monthly payments if it works without modifications. 
Only additional improvements, updates, and functionality expansions are paid for.
For AI bots, funds are deducted for ChatGPT data processing. There may also be server costs (annually, but minor).
If you have your own server, we can host the bot there – in this case, there will be no additional expenses.`,
          uz: `Agar bot o‘zgartirishsiz ishlasa, oylik to‘lov talab qilinmaydi. 
Faqat qo‘shimcha sozlamalar, yangilanishlar va funksionallik kengaytirilishi uchun to‘lov amalga oshiriladi.
AI-botlar uchun ChatGPT ma’lumotlarni qayta ishlashi uchun mablag‘ sarflanadi. 
Shuningdek, server xarajatlari (yiliga bir marta, ammo katta emas) bo‘lishi mumkin. 
Agar o‘z serveringiz bo‘lsa, botni unga joylashtirishimiz mumkin – bu holda qo‘shimcha xarajat bo‘lmaydi.`,
        },
      },
      {
        question: {
          ru: "Кто будет владельцем бота после разработки?",
          en: "Who will own the bot after development?",
          uz: "Bot ishlab chiqilgandan keyin uning egasi kim bo‘ladi?",
        },
        answer: {
          ru: `Полным владельцем бота будете вы. После завершения работы мы передаём вам исходный код, доступ к боту и серверу (если требуется), и вы сможете управлять им по своему усмотрению.`,
          en: `You will be the full owner of the bot. After completion, we transfer to you the source code, access to the bot, and the server (if required), and you will be able to manage it as you see fit.`,
          uz: `To‘liq egasi siz bo‘lasiz. Ish yakunlangandan so‘ng, biz sizga manba kod, bot va serverga kirish huquqini (kerak bo‘lsa) taqdim etamiz, va siz uni o‘zingiz boshqarishingiz mumkin.`,
        },
      },
    ],
  },
  {
    "slug": "context-launch",
    "faqs": [
      {
        "question": {
          "ru": "Что такое контекстная реклама простыми словами?",
          "en": "What is contextual advertising in simple terms?",
          "uz": "Kontekst reklama nima?"
        },
        "answer": {
          "ru": "Вы платите только за результат, а не за показы. Результатом могут быть переходы на сайт, звонки, заявки или покупки. Мы настраиваем рекламу так, чтобы привлекать только целевых клиентов.",
          "en": "You pay only for results, not for ad impressions. The results can be website visits, phone calls, inquiries, or purchases. We configure your ads to attract only the most relevant clients.",
          "uz": "Siz faqat natijalar uchun to‘laysiz, ko‘rsatishlar uchun emas. Natijalar – saytga o‘tishlar, qo‘ng‘iroqlar, buyurtmalar yoki xaridlardir. Biz reklamani faqat kerakli mijozlarga yo‘naltiramiz."
        }
      },
      {
        "question": {
          "ru": "Как я могу быть уверен, что мои деньги тратятся именно на рекламу?",
          "en": "How can I be sure my money is spent on actual advertising?",
          "uz": "Mening pullarim aynan reklama uchun sarflanayotganiga qanday ishonchim komil bo‘ladi?"
        },
        "answer": {
          "ru": "Мы можем в реальном времени показать рекламный кабинет, где видно, сколько потрачено и какие результаты получены. Также можно запустить кампанию в вашем рекламном кабинете, чтобы вы сами контролировали расходы.",
          "en": "We can provide real-time access to the ad account, showing exactly how much has been spent and what results have been achieved. Additionally, we can run the campaign directly from your ad account, so you have full control over expenses.",
          "uz": "Sizga real vaqt rejimida reklamalar kabinetini ko‘rsatishimiz mumkin – qancha sarflanganini va qanday natijalar olinganini ko‘rasiz. Shuningdek, kampaniyani o‘z reklama kabinetingizda ishga tushirishimiz mumkin, shunda siz barcha xarajatlarni nazorat qilasiz."
        }
      },
      {
        "question": {
          "ru": "Можно ли запустить рекламу в моем рекламном кабинете?",
          "en": "Can you launch ads from my existing ad account?",
          "uz": "Reklamani o‘z kabinetimda yuritsam bo‘ladimi?"
        },
        "answer": {
          "ru": "Да, но если кабинет новый, его нужно полностью настраивать с нуля. Стоимость создания и настройки кабинета на ваше имя составляет 1,3 млн сумов, после чего вы получите полный доступ.",
          "en": "Yes, but if your account is new, it will require full setup from scratch. The cost of setting up a new ad account in your name is 1.3 million UZS, after which you will have full access.",
          "uz": "Ha, lekin yangi hisob qaydnomasini sozlash va to‘liq moslashtirish talab etiladi. Shaxsiy reklama kabinetini yaratish va sozlash narxi 1.3 million so‘m, shundan keyin sizga to‘liq kirish huquqi beriladi."
        }
      },
      {
        "question": {
          "ru": "Где лучше запускать рекламу: в Google или Яндекс?",
          "en": "Which platform is better for advertising: Google or Yandex?",
          "uz": "Google yoki Yandex – qaysi biri yaxshiroq?"
        },
        "answer": {
          "ru": "Если ваш бизнес ориентирован на международную аудиторию – Google. Если основная целевая аудитория в СНГ – стоит протестировать Яндекс. Оптимальный вариант – запустить в обеих системах и выбрать лучший источник заявок.",
          "en": " If your business targets an international audience – Google is the best choice. If your primary audience is in the CIS region , Yandex is worth testing. The most effective approach is to launch campaigns on both platforms and determine which generates the best leads.",
          "uz": "Agar biznesingiz xalqaro auditoriyaga mo‘ljallangan bo‘lsa – Google. Agar mijozlaringiz asosan MDH davlatlarida bo‘lsa – Yandex sinab ko‘rilishi kerak. Eng yaxshi usul – ikkala platformada ham reklama ishga tushirish va eng samarali manbani tanlash."
        }
      },
      {
        "question": {
          "ru": "Могу ли я сам управлять рекламной кампанией после запуска?",
          "en": "Can I manage the advertising campaign myself after launch?",
          "uz": "Reklama kampaniyalarini o‘zim boshqarishim mumkinmi?"
        },
        "answer": {
          "ru": "Да, у нас есть тариф с единовременной оплатой и трёхмесячным сопровождением с обучением, где мы объясним, как вести кампанию самостоятельно и повышать её эффективность.",
          "en": "Yes! We offer a one-time payment package with three months of support and training, where we teach you how to manage your campaign and improve its effectiveness.",
          "uz": "Ha, bizda bir martalik to‘lov va 3 oylik qo‘llab-quvvatlash va o‘qitish opsiyasi mavjud. Unda siz mustaqil reklama yuritish va natijalarni yaxshilashni o‘rganasiz."
        }
      },
      {
        "question": {
          "ru": "Как долго нужно вести рекламу и когда её можно остановить?",
          "en": "How long should I run ads, and when can I stop?",
          "uz": "Reklamani qancha muddat davom ettirish kerak va uni qachon to‘xtatish mumkin?"
        },
        "answer": {
          "ru": "Рекламу лучше вести постоянно, чтобы стабильно привлекать клиентов. Со временем её стоимость снижается: правильно настроенная кампания автоматически уменьшает цену за результат, пока не достигнет минимально возможного уровня.",
          "en": "Advertising should ideally run continuously to maintain a steady flow of customers. Over time, costs decrease—well-optimized campaigns automatically lower the cost per result until they reach the most efficient level.",
          "uz": "Reklamani doimiy ravishda yuritish tavsiya etiladi, shunda mijozlarni doimiy jalb qilasiz. Vaqt o‘tishi bilan reklamaning narxi kamayadi – yaxshi sozlangan kampaniya natijalar narxini avtomatik ravishda pasaytiradi."
        }
      },
    ]
  }
  
];

export const ServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqDataWithSlug, setFaqDataWithSlug] = useState([]);

  const contentRefs = useRef([]);
  const { lng, slug } = useParams();
  const { t } = useCustomTranslation(lng, "acardion");
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const category = DATA_FOR_FAQ.find((item) => item.slug === slug);
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
            { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        } else {
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }
    });
  }, [activeIndex]);

  if (faqDataWithSlug.length === 0) {
    return null;
  }
  

  return (
    <section className="w-full max-w-full mx-auto mt-11  p-4 mdl:p-[20px] 3xl:p-[30px] 2xl:mt-[100px] ">
      <h2 className="text-[28px] font-bold mb-[30px] mdl:text-[45px]">
        {t("title")}
      </h2>
      {faqDataWithSlug.map((item, index) => (
        <div
          key={index}
          className={`mb-2 2xl:mb-[20px] border-[2px] rounded-[20px] 2xl:rounded-[30px] overflow-hidden transition-all duration-300 ${
            activeIndex === index ? "border-[#7B72EB]" : "border-gray-300"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-[20px] bg-white text-left focus:outline-none 2xl:p-[40px]"
          >
            <span className="text-[15px] font-semibold mdl:text-[25px] ">
              {item.question[lng]}
            </span>
            <svg
              className={`w-6 h-6 mdl:w-[30px] mdl:h-[30px] 3xl:w-[] 3xl:h-[] transition-transform transform text-[#7B72EB] ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="p-0 overflow-hidden"
            style={{
              height: activeIndex === index ? "auto" : 0,
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <div className="p-[20px] mt-[-20px] bg-white mdl:p-[20px] mdl:mt-[-20px] 2xl:p-[40px] 2xl:mt-[-50px] 3xl:p-[40px] 3xl:mt-[-40px]">
              <p className="text-[15px] whitespace-pre-wrap text-[#454545] font-medium mdl:text-[20px] font-robotoFlex ">
                {item.answer[lng]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
