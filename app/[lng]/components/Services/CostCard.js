'use client'
import { FaCheck } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import ServicePriceModal from '../Modal/SericePrice'
import { useParams } from 'next/navigation'

const CostCardData = {
  'web-development': [
    {
      title: {
        ru: 'Одностраничный сайт',
        uz: 'Bir sahifali sayt',
        en: 'Single-Page Website  '
      },
      description: {
        ru: 'Статичный сайт для специалиста или небольшой клиники. размер: 1 страница срок: 1 месяц (при быстром получении запрашиваемой информации от клиента)',
        uz: "Mutaxassis yoki kichik klinika uchun statik sayt. hajmi: 1 sahifa muddati: 1 oy (so'ralgan ma'lumot mijozdan tezda olinsa)",
        en: 'A static website for a specialist or small clinic'
      },
      services: {
        ru: [
          'Разработка сайта',
          'Заполнение контентом на 2 языках',
          'Интеграция с CMS панелью',
          'Индексация в Google',
          'SEO оптимизация под ключевые слова',
          'Хостинг на 3 месяца',
          'Доменное имя на 1 год',
          'Экспорт кода (при желании заказчика)'
        ],
        uz: [
          "Sayt yaratish",
          "2 tilda tarkib bilan to'ldirish",
          "CMS paneli bilan integratsiyalash",
          "Google da indekslash",
          "Kalit so'zlar uchun SEO optimallashtirish",
          "3 oyga hosting",
          "1 yilga domen nomi ",
          "Kodni yuklab olish (agar mijoz xohlasa)",
          
        ],
        en: [
          "Size: 1 page  ",
          "Timeline: 1 month (with prompt client information delivery)  ",
          "Website development  ",
          "Content creation in two languages  ",
          "CMS panel integration  ",
          "Google indexing  ",
          "SEO optimization for keywords  ",
          "3 months of hosting  ",
          "Domain name for 1 year  ",
          "Code export (upon client's request)  ",
          
        ]
      },
      price: {
        ru: '300$',
        uz: '300$',
        en: '300$'
      },
      link: 'slug/odnostranichny-site'
    },
    {
      title: {
        ru: 'Многостраничный сайт',
        uz: "Ko'p sahifali sayt",
        en: 'Multi-Page Website'
      },
      description: {
        ru: 'Гибкий многостраничный сайт для специалиста или клиники. размер:5 страниц срок: 1 месяц (при быстром получении запрашиваемой информации от клиента)',
        uz: "Mutaxassis yoki klinika uchun moslashuvchan ko'p sahifali sayt. hajmi: 5 sahifa muddati: 1 oy (so'ralgan ma'lumot mijozdan tezda olinsa)",
        en: 'A flexible multi-page website for a specialist or clinic. '
      },
      services: {
        ru: [
          'Разработка сайта',
          'Разработка административной панели',
          'Заполнение контентом на 2 языках',
          'Интеграция с CMS панелью',
          'Индексация в Google',
          'SEO оптимизация под ключевые слова',
          'Хостинг на 3 месяца',
          'Доменное имя на 1 год',
          'Экспорт кода (при желании заказчика)'
        ],
        uz: [
         "Sayt yaratish",
         "Ma'muriy panelni yaratish",
         "2 tilda tarkib bilan to'ldirish",
         "CMS paneli bilan integratsiyalash",
         "Google da indekslash",
         "Kalit so'zlar uchun SEO optimallashtirish",
         "3 oyda hosting",
         "1 yilga domen nomi ",
         "Kodni yuklab olish (agar mijoz xohlasa)",

        ],
        en: [
         "Website development",  
         "Administrative panel development  ",
         "Content creation in two languages ", 
         "CMS panel integration ", 
         "Google indexing ", 
         "SEO optimization for keywords ", 
         "3 months of hosting ", 
         "Domain name for 1 year ", 
         "Code export (upon client's request)",
        ]
      },
      price: {
        ru: '600$',
        uz: '600$',
        en: '600$'
      },
      link: 'slug/mnogostranichny-site',
      specialFeatures: {
        ru: [
          'Возможность менять актуальную информацию (о врачах, услугах и ценах)',
          'Возможность ведения блога'
        ],
        uz: [
          "Shifokorlar, xizmatlar va narxlar haqidagi ma'lumotlarni o'zgartirish imkoniyati",
          'Blog yuritish imkoniyati'
        ],
        en: [
          'Ability to change relevant information (about doctors, services, and prices)',
          'Blog management capability'
        ]
      }
    },
    {
      title: {
        ru: 'Другой сайт',
        uz: 'Boshqa sayt',
        en: 'Custom Website'
      },
      description: {
        ru: 'Разработка любого другого сайта исходя из вашего ТЗ срок: от 2 недель (при быстром получении запрашиваемой информации от клиента)',
        uz: "Sizning BT asosida boshqa har qanday saytni yaratish muddati: 2 haftadan (agar so'ralgan ma'lumot mijozdan tezda olinsa)",
        en: 'Development of any other website based on your technical requirements.- Timeline: From 2 weeks (with prompt client information delivery) '
      },
      services: {
        ru: [
          'Разработка сайта',
          'Заполнение контентом',
          'Интеграция с CMS панелью',
          'Индексация в Google',
          'Хостинг на 3 месяца',
          'Доменное имя на 1 год',
          'Экспорт кода'
        ],
        uz: [
          "Sayt yaratish",
          "Tarkib bilan to'ldirish",
          "CMS paneli bilan integratsiyalash",
          "Google da indekslash",
          "3 oyda hosting",
          "1 yilga domen nomi ",
          "Kodni yuklab olish",
        ],
        en: [
          "Development of any other website based on your technical requirements.  ",
          "Timeline: From 2 weeks (with prompt client information delivery)  ",
          "Website development  ",
          "Content creation  ",
          "CMS panel integration  ",
          "Google indexing  ",
          "3 months of hosting  ",
          "Domain name for 1 year  ",
          "Code export  ",
          "Price: Negotiable  ",

        ]
      },
      price: {
        ru: 'цена договорная',
        uz: 'narxi kelishiladi',
        en: 'Negotiable'
      },
      link: 'slug/drugoy-site',
      specialFeatures: {
        ru: [
          'Возможность разработать любой сайт исходя из предпочтений и пожеланий заказчика'
        ],
        uz: [
          'Mijozning xohish va talablariga muvofiq sayt ishlab chiqish imkoniyati'
        ],
        en: [
          'Possibility to develop any website based on customer preferences and wishes'
        ]
      }
    }
  ],
  'telegram-bot-development': [
    {
      title: {
        ru: 'Start',
        uz: 'Boshlang‘ich',
        en: 'Start'
      },
      description: {
        ru: '- Быстрая разработка при оперативном получении всей необходимой информации от клиента\n- Возможность дальнейшего расширения функционала (по договоренности)\n- Экспорт кода (по желанию заказчика)\nСрок: 2 недели',
        uz: "- Mijozdan barcha kerakli ma'lumotlarni darrov olinganda tezkor yaratish\n- Funktsionalni yanada kengaytirish imkoniyati (kelishuv asosida)\n- Kodni yuklab olish (agar mijoz xohlasa)\nMuhlat: 2 hafta",
        en: "- Fast development upon receiving all required information from the client\n- Option for future functionality expansion (upon agreement)\n- Code export (upon client's request)\n- Timeline: 2 weeks"
      },
      services: {
        ru: [
          'Разработка базового чат-бота',
          'Сбор заявок',
          'Поддержка до 5 категорий',
          'Добавление до 50 услуг/товаров',
          'Обычные кнопки',
          'Поддержка на 1 месяц',
          'Настройка автоответов'
        ],
        uz: [
          "Asosiy chat-botni yaratish",
          "So’rovlar to'plash",
          "5 toifagacha qo'llab-quvvatlash",
          "50 tagacha xizmat/mahsulot qo'shish",
          "Oddiy tugmalar",
          "1 oy qo'llab-quvvatlash",
          "Avtomatik javoblarni sozlash",
          
        ],
        en: [
         "Development of a basic chatbot",  
         "Lead collection",  
         "Support for up to 5 categories",  
         "Addition of up to 50 services/products",  
         "Standard buttons",  
         "1-month support",  
         "Auto-reply setup",  
          
        ]
      },
      price: {
        ru: '200$',
        uz: '200$',
        en: '200$'
      },
      link: 'slug/start',
    },
    {
      title: {
        ru: 'Medium',
        uz: 'Medium',
        en: 'Medium'
      },
      description: {
        ru: '- Быстрая разработка при оперативном получении всей необходимой информации от клиента\n- Возможность дальнейшего расширения функционала (по договоренности)\n- Экспорт кода (по желанию заказчика)\nСрок: 1 месяц',
        uz: "- Mijozdan barcha kerakli ma'lumotlarni darrov olinganda tezkor yaratish\n- Funktsionalni yanada kengaytirish imkoniyati (kelishuv asosida)\n- Kodni yuklab olish (agar mijoz xohlasa)\nMuhlat: 1 oy",
        en: "- Fast development upon receiving all required information from the client\n- Option for future functionality expansion (upon agreement)\n- Code export (upon client's request)\n- Timeline: 1 month"
      },
      services: {
        ru: [
          "Все услуги из тарифа 'Start'",
          'Интеграция с базой данных',
          'Возможность сбора и хранения пользовательских данных',
          'Рассылка уведомлений и новостей',
          'Интерактивные меню и кнопки',
          'Поддержка до 10 категорий',
          'Неограниченное количество услуг/товаров',
          'Поддержка на 3 месяца',
          'Настройка аналитики взаимодействий',
          'Админ панель для управления контентом и пользователями'
        ],
        uz: [
          "'Start' tarifidagi barcha xizmatlar",
          "Ma'lumotlar bazasi bilan integratsiyalash",
          "Foydalanuvchilarning ma'lumotlarini to'plash va saqlash imkoniyati",
          "Bildirishnomalarni va yangiliklarni yuborish",
          "Interaktiv menyular va tugmalar",
          "10 toifagacha qo'llab-quvvatlash",
          "Cheksiz miqdordagi xizmatlar/mahsulotlar",
          "3 oy qo'llab-quvvatlash",
          "O'zaro ta'sir tahlilini o'rnatish",
          "Kontent va foydalanuvchilarni boshqarish uchun boshqaruv paneli",

        ],
        en: [
          "All services from the `Start` package ", 
          "Database integration",  
          "Ability to collect and store user data",  
          "Notification and news broadcasts",  
          "Interactive menus and buttons",  
          "Support for up to 10 categories",  
          "Unlimited number of services/products",  
          "3-month support",  
          "Interaction analytics setup",  
          "Admin panel for content and user management",  
        ]
      },
      price: {
        ru: '500$',
        uz: '500$',
        en: '500$'
      },
      link: 'slug/medium',
    
    },
    {
      title: {
        ru: 'Pro',
        uz: 'Pro',
        en: 'Pro'
      },
      description: {
        ru: '- Быстрая разработка при оперативном получении всей необходимой информации от клиента\n- Возможность дальнейшего расширения функционала (по договоренности)\n- Экспорт кода (по желанию заказчика)\nСрок: 1,5 месяца',
        uz: "- Mijozdan barcha kerakli ma'lumotlarni darrov olinganda tezkor yaratish\n-Funktsionalni yanada kengaytirish imkoniyati (kelishuv asosida)\n- Kodni yuklab olish (agar mijoz xohlasa)\nMuhlat: 1,5 oy\n'Medium' tarifidagi barcha xizmatlar",
        en: "- Fast development upon receiving all required information from the client\n- Option for future functionality expansion (upon agreement)\n- Code export (upon client's request)\n- Timeline: 1.5 months\n- All services from the 'Medium' package"
      },
      services: {
        ru: [
          "Все услуги из тарифа 'Medium'",
          'Интеграция с CRM системой',
          'Возможность оплаты через бота',
          'Подробная аналитика и отчеты по взаимодействиям пользователей',
          'Многоязычная поддержка (до 3 языков)',
          'Поддержка и обновление на 6 месяцев',
          'Админ панель с расширенными функциями управления и отчетности',
          'Дизайн кастомных кнопок'
        ],
        uz: [
          "CRM tizimi bilan integratsiyalash",
          "Bot orqali to'lash imkoniyati",
          "Foydalanuvchilarning o'zaro ta'siri bo'yicha batafsil tahlil va hisobotlar",
          "Ko'p tilli (3 tilgacha)",
          "6 oyda qo'llab-quvvatlash va yangilanishlar",
          "Kengaytirilgan boshqaruv va hisobot funksiyalariga ega boshqaruv paneli",
          "Maxsus tugma dizayni",

        ],
        en: [
         "CRM system integration",  
         "Payment processing through the bot",  
         "Detailed user interaction analytics and reports",  
         "Multilingual support (up to 3 languages)",  
         "6-month support and updates",  
         "Admin panel with extended management and reporting features",  
         "Custom button design",  

        ]
      },
      price: {
        ru: '800$',
        uz: '800$',
        en: '800$'
      },
      link: 'slug/pro',
    }
  ],
  smm: [
    {
      title: {
        ru: 'SMM Mini',
        uz: 'SMM Mini',
        en: 'SMM Mini'
      },
      description: {
        ru: '1 неделя (при быстром получении запрашиваемой информации от клиента)\n\nПреимущества:\n- низкая стоимость\n- в дальнейшем клиент сможет вести блог самостоятельно',
        uz: "1 hafta (so'ralgan ma'lumot mijozdan tezda olinsa)\nAfzalliklar:\n- arzon narx\n- kelajakda mijoz blogni mustaqil ravishda yurita oladi",
        en: '1 week (with prompt client data)\n\nAdvantages:\n- low cost\n- client can manage the blog independently in the future'
      },
      services: {
        ru: [
          'Контент-план: 1',
          'Публикации: 3 (3 картинки, 0 видео)',
          'Истории: 10 (10 картинок, 0 видео)',
          'Иконки: 10 (10 картинок)',
          'Наполнение актуального: 5 (5 картинок)',
          'Запуск рекламы: 3'
        ],
        uz: [
          "Kontent-reja: 1",
          "Nashrlar: 3 (3 ta rasm, 0 video)",
          "Hikoyalar: 10 (10 ta rasm, 0 video)",
          "Ikonchalar: 10 (10 ta rasm)",
          "Dolzarb tarkibi: 5 (5 ta rasm)",
          "Reklamani ishga tushirish: 3",
        ],
        en: [
        "Content Plan: 1  ",
        "Posts: 3 (3 images, 0 videos) ", 
        "Stories: 10 (10 images, 0 videos)  ",
        "Icons: 10 (10 images) ", 
        "Highlight Fill: 5 (5 images)  ",
        "Ad Campaigns: 3 ", 

        ]
      },
      price: {
        ru: '250$',
        uz: '250$',
        en: '250$'
      },
      link: 'slug/smm-mini'
    },
    {
      title: {
        ru: 'SMM Standard',
        uz: 'SMM Standard',
        en: 'SMM Standard'
      },
      description: {
        ru: 'Запуск и ведение маркетинга в социальных сетях\nПреимущества:\n- оптимальное количество публикаций',
        uz: 'Marketingni ijtimoiy tarmoqlarda ishga tushirish va yuritish\nAfzalliklar:\n nashrlarning optimal soni',
        en: 'Advantages:\nOptimal number of posts'
      },
      services: {
        ru: [
          'Контент-план: 1',
          'Публикации: 8 (6 картинки, 2 видео)',
          'Истории: 15 (10 картинок, 5 видео)',
          'Иконки: 10 (10 картинок)',
          'Наполнение актуального: 10 (10 картинок)',
          'Запуск рекламы: 8',
          'Оформление аккаунтов: 3',
          'Фото-видеосъемка: 2 часа / 1 локация'
        ],
        uz: [
          "Kontent-reja: 1",
          "Nashrlar: 8 (6 ta rasm, 2 ta video)",
          "Hikoyalar: 15 (10 ta rasm, 5 ta video)",
          "Ikonchalar: 10 (10 ta rasm)",
          "Dolzarb tarkibi: 10 (10 ta rasm)",
          "Reklamani ishga tushirish: 8",
          "Akkauntlar dizayini: 3",
          "Foto va video suratga olish: 2 soat / 1 joy",
        ],
        en: [
         "Content Plan: 1",  
         "Posts: 8 (6 images, 2 videos)",  
         "Stories: 15 (10 images, 5 videos)",  
         "Icons: 10 (10 images)",  
         "Highlight Fill: 10 (10 images)",  
         "Ad Campaigns: 8 ", 
         "Account Design: 3 ", 
         "Photo/Video Shooting: 2 hours / 1 location",

        ]
      },
      price: {
        ru: '600$',
        uz: '600$',
        en: '600$'
      },
      link: 'slug/smm-standard'
    },
    {
      title: {
        ru: 'SMM Premium',
        uz: 'SMM Premium',
        en: 'SMM Premium'
      },
      description: {
        ru: 'Запуск и ведение маркетинга в социальных сетях\nПреимущества:\n- наибольшее количество публикаций для достижения быстрого результата',
        uz: "Marketingni ijtimoiy tarmoqlarda ishga tushirish va yuritish\nAfzalliklar:\ntezda natijaga erishish uchun eng ko'p nashrlar",
        en: 'Advantages:\nThe highest number of posts for quick results'
      },
      services: {
        ru: [
          'Контент-план: 1',
          'Публикации: 12 (6 картинки, 6 видео)',
          'Истории: 30 (15 картинок, 15 видео)',
          'Иконки: 15 (15 картинок)',
          'Наполнение актуального: 15 (15 картинок)',
          'Запуск рекламы: 12',
          'Оформление аккаунтов: 5',
          'Фото-видеосъемка: 6 часов / 3 локации'
        ],
        uz: [
         "Kontent-reja: 1",
         "Nashrlar: 12 (6 ta rasm, 6 ta video)",
         "Hikoyalar: 30 (15 ta rasm, 15 ta video)",
         "Ikonchalar: 15 (15 ta rasm)",
         "Dolzarb tarkibi: 15 (15 ta rasm)",
         "Reklamani ishga tushirish: 12",
         "Akkauntlar dizayini: 5",
         "Foto va video suratga olish: 6 soat / 3 ta joy",
        ],
        en: [
          "Content Plan: 1",  
          "Posts: 12 (6 images, 6 videos)",  
          "Stories: 30 (15 images, 15 videos)",  
          "Icons: 15 (15 images)",  
          "Highlight Fill: 15 (15 images)",  
          "Ad Campaigns: 12",  
          "Account Design: 5",  
          "Photo/Video Shooting: 6 hours / 3 locations", 
        ]
      },
      price: {
        ru: '1200$',
        uz: '1200$',
        en: '1200$'
      },
      link: 'slug/smm-premium'
    }
  ],

  'ads-launch': [
    {
      title: {
        ru: 'Запуск контекстной рекламы',
        uz: 'Kontekstli reklamani ishga tushirish',
        en: 'Contextual ads launch'
      },
      description: {
        ru: 'Настройка и запуск рекламных кампаний в рекламных сетях Google и Yandex',
        uz: "Google va Yandex reklama tarmoqlarida reklama kampaniyalarini o'rnatish va ishga tushirish",
        en: 'Setting up and launching ad campaigns in Google and Yandex ad networks'
      },
      services: {
        ru: [
          'Открытие личного кабинета в одной из сетей',
          'Настройка до 5 кампаний',
          'Поиск ключевых слов',
          'Составление семантического ядра',
          'Сбор маркерных запросов',
          'Создание рекламных объявлений',
          'Определение целевой аудитории',
          'Ежемесячный отчет по кампаниям'
        ],
        uz: [
          "Tarmoqlarning birida shaxsiy kabinet ochish",
          "5 tagacha kampaniya o’rnatish",
          "Kalit so'zlarni qidirish",
          "Semantik yadroni tuzish",
          "Marker so'rovlarini yig'ish",
          "Reklamalar yaratish",
          "Maqsadli auditoriyani aniqlash",
          "Kampaniyalar bo’yicha oylik hisobot",

        ],
        en: [
          'Opening a personal account',
          'Setting up to 5 campaigns',
          'Keyword research',
          'Building semantic core',
          'Collecting marker queries',
          'Creating ad announcements',
          'Defining target audience',
          'Monthly campaign report'
        ]
      },
      price: {
        ru: '300$',
        uz: '300$',
        en: '300$'
      },
      link: 'slug/ads-launch-google'
    },
    {
      title: {
        ru: 'Запуск таргетированной рекламы',
        uz: 'Target reklamani ishga tushirish',
        en: 'Launching Targeted Ads'
      },
      description: {
        ru: 'Настройка и запуск рекламных кампаний в сетях Instagram и Facebook',
        uz: "Instagram va Facebook tarmoqlarida reklama kampaniyalarini o'rnatish va ishga tushirish",
        en: 'Setup and launch of ad campaigns on Instagram and Facebook networks'
      },
      services: {
        ru: [
          'Открытие личного кабинета',
          'Настройка до 5 кампаний',
          'Разработка до 2 креативов',
          'Создание рекламных объявлений',
          'Определение целевой аудитории',
          'Ежемесячный отчет по кампаниям'
        ],
        uz: [
          "Shaxsiy kabinet ochish",
          "5 tagacha kampaniya o'rnatish",
          "2 tagacha kreativ ishlab chiqarish",
          "Reklamalar yaratish",
          "Maqsadli auditoriyani aniqlash",
          "Kampaniyalar bo’yicha oylik hisobot",

        ],
        en: [
         "Opening a personal account",  
         "Setting up to 5 campaigns",  
         "Developing up to 2 creatives",  
         "Creating ad copies",  
         "Defining the target audience",  
         "Monthly campaign report",
    ]
      },
      price: {
        ru: '300$',
        uz: '300$',
        en: '300$'
      },
      link: 'slug/ads-launch-facebook'
    }
  ],

  seo: [
    {
      title: {
        ru: 'Базовая настройка',
        uz: 'Asosiy sozlama',
        en: 'Basic setup'
      },
      description: {
        ru: 'Поднятие в поисковых выдачах Google и Yandex',
        uz: 'Google va Yandex qidiruv natijalarida ko‘tarish',
        en: 'Boosting in Google and Yandex search results'
      },
      services: {
        ru: [
          'Технический аудит сайта',
          'Индексация сайта в Google и Yandex',
          'Уменьшение размера картинок',
          'Написание целевых “Title”, “Description” и “Text” для 10 страниц',
          'Поиск ключевых слов',
          'Составление семантического ядра',
          'Сбор маркерных запросов',
          'Создание рекламных объявлений',
          'Определение целевой аудитории'
        ],
        uz: [
          'Saytning texnik auditi',
          'Saytni Google va Yandex’da indeksatsiya qilish',
          'Rasmlar hajmini kamaytirish',
          '10 sahifa uchun maqsadli “Title”, “Description” va “Text” yozish',
          'Kalit so‘zlarni qidirish',
          'Semantik yadro tuzish',
          'Markirovka so‘zlarni yig‘ish',
          'Reklama e’lonlarini yaratish',
          'Maqsadli auditoriyani aniqlash'
        ],
        en: [
          'Technical site audit',
          'Google and Yandex indexing',
          'Image size reduction',
          'Writing target “Title”, “Description” and “Text” for 10 pages',
          'Keyword research',
          'Building semantic core',
          'Collecting marker queries',
          'Creating ad announcements',
          'Defining target audience'
        ]
      },
      price: {
        ru: '350$',
        uz: '350$',
        en: '350$'
      },
      link: 'slug/seo-basic'
    },
    {
      title: {
        ru: 'Ежемесячная услуга',
        uz: 'Oylik xizmat',
        en: 'Monthly service'
      },
      description: {
        ru: 'Поднятие в поисковых выдачах Google и Yandex',
        uz: 'Google va Yandex qidiruv natijalarida ko‘tarish',
        en: 'Boosting in Google and Yandex search results'
      },
      services: {
        ru: [
          'Технический аудит сайта',
          'Индексация сайта в Google и Yandex',
          'Уменьшение размера картинок',
          'Написание целевых “Title”, “Description” и “Text” для 10 страниц',
          'Поиск ключевых слов',
          'Составление семантического ядра',
          'Сбор маркерных запросов',
          'Создание рекламных объявлений',
          'Определение целевой аудитории',
          'Публикация целевых блогов',
          'Переиндексация в поисковых системах',
          'Поддержание актуальности “Title”, “Description” и “Text”'
        ],
        uz: [
          'Saytning texnik auditi',
          'Saytni Google va Yandex’da indeksatsiya qilish',
          'Rasmlar hajmini kamaytirish',
          '10 sahifa uchun maqsadli “Title”, “Description” va “Text” yozish',
          'Kalit so‘zlarni qidirish',
          'Semantik yadro tuzish',
          'Markirovka so‘zlarni yig‘ish',
          'Reklama e’lonlarini yaratish',
          'Maqsadli auditoriyani aniqlash',
          'Maqsadli bloglarni chop etish',
          'Qidiruv tizimlarida qayta indeksatsiya qilish',
          '“Title”, “Description” va “Text” dolzarbligini qo‘llab-quvvatlash'
        ],
        en: [
          'Technical site audit',
          'Google and Yandex indexing',
          'Image size reduction',
          'Writing target “Title”, “Description” and “Text” for 10 pages',
          'Keyword research',
          'Building semantic core',
          'Collecting marker queries',
          'Creating ad announcements',
          'Defining target audience',
          'Publishing target blogs',
          'Re-indexing in search engines',
          'Maintaining relevance of “Title”, “Description” and “Text”'
        ]
      },
      price: {
        ru: '300$',
        uz: '300$',
        en: '300$'
      },
      link: 'slug/seo-monthly'
    }
  ],
  branding: [
    {
      title: {
        ru: 'Брендбук mini',
        uz: 'Brendbuk mini',
        en: 'Brandbook mini'
      },
      description: {
        ru: 'Разработка брендбука',
        uz: 'Brendbuk ishlab chiqish',
        en: 'Brandbook development'
      },
      services: {
        ru: [
          'Дизайн логотипа в двух вариантах',
          'Дизайн визитки',
          'Типографика (подбор шрифта)',
          'Дизайн униформы',
          'Дизайн блокнота',
          'Руководство по использованию фирменного стиля'
        ],
        uz: [
          'Ikki xil logotip dizayni',
          'Vizitka dizayni',
          'Tipografiya (shrift tanlash)',
          'Formani dizayni',
          'Bloknot dizayni',
          'Brend uslubini qo‘llash bo‘yicha qo‘llanma'
        ],
        en: [
          'Logo design in two versions',
          'Business card design',
          'Typography (font selection)',
          'Uniform design',
          'Notebook design',
          'Brand style usage guide'
        ]
      },
      price: {
        ru: '100$',
        uz: '100$',
        en: '100$'
      },
      link: 'slug/branding-mini'
    },
    {
      title: {
        ru: 'Брендбук standart',
        uz: 'Brendbuk standart',
        en: 'Brandbook standard'
      },
      description: {
        ru: 'Разработка брендбука',
        uz: 'Brendbuk ishlab chiqish',
        en: 'Brandbook development'
      },
      services: {
        ru: [
          'Дизайн логотипа в двух вариантах',
          'Дизайн визитки',
          'Типографика (подбор шрифта)',
          'Дизайн униформы',
          'Дизайн блокнота',
          'Дизайн корпоративного пакета',
          'Дизайн фирменного бланка',
          'Разработка фирменного слогана',
          'Руководство по использованию фирменного стиля'
        ],
        uz: [
          'Ikki xil logotip dizayni',
          'Vizitka dizayni',
          'Tipografiya (shrift tanlash)',
          'Formani dizayni',
          'Bloknot dizayni',
          'Korporativ paket dizayni',
          'Firmaviy blank dizayni',
          'Brend shiorini ishlab chiqish',
          'Brend uslubini qo‘llash bo‘yicha qo‘llanma'
        ],
        en: [
          'Logo design in two versions',
          'Business card design',
          'Typography (font selection)',
          'Uniform design',
          'Notebook design',
          'Corporate package design',
          'Branded letterhead design',
          'Brand slogan development',
          'Brand style usage guide'
        ]
      },
      price: {
        ru: '200$',
        uz: '200$',
        en: '200$'
      },
      link: 'slug/branding-standart'
    }
  ]
}

const CostCard = () => {
  const { slug } = useParams() // Get slug from URL
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    // Filter the data by slug
    if (slug && CostCardData[slug]) {
      setFilteredData(CostCardData[slug])
    }
  }, [slug])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState(null) // New state variable

  const openModal = (price, title) => {
    setSelectedPrice(price) // Set the selected price
    setSelectedTitle(title) // Set the selected title
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPrice(null) // Reset the selected price
    setSelectedTitle(null) // Reset the selected title
  }

  return (
    <div className='bg-white100 px-[24px] pt-[30px] rounded-[30px] flex flex-col 3xl:flex-col  3xl:p-[40px] mx-[16px] mt-[20px] 3xl:mx-[30px]'>
      <div>
        <h3 className='text-[28px] mdl:text-[50px] font-bold text-titleDark'>
          Стоимость услуг
        </h3>
      </div>
      <div className='rounded-[30px] mt-[20px] relative flex flex-col 2xl:flex-wrap 2xl:flex-row 2xl:gap-[25px]'>
        {/* Mapping through filteredData array */}
        {filteredData.map((card, index) => (
          <div
            key={index}
            className='relative  w-full border px-[24px] py-[30px] border-[#F0F0F0] rounded-[30px] mt-[20px]  2xl:w-[calc(32.333%-16px)] pb-[150px]'
          >
            <div>
              <p className='text-[20px] font-semibold 2xl:font-bold mdl:text-[30px] text-titleDark'>
                {card.title}
              </p>
            </div>
            <div className='mt-[20px]'>
              {card.description.split('\n').map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className='text-[15px] mdl:text-[18px] text-[#454545] font-normal font-robotoFlex'
                >
                  {line}
                </p>
              ))}
            </div>
            <div className='h-[1px] w-full bg-[#F0F0F0] mt-[25px]' />
            <div className='flex flex-col mt-[25px] relative gap-[11px]'>
              {card.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className='flex flex-row gap-[12px] items-center'
                >
                  <div className='rounded-[6px] flex items-center justify-center bg-violet100 bg-opacity-20 w-[30px] h-[30px]'>
                    <FaCheck className='text-violet100' />
                  </div>
                  <div className='flex items-center w-[90%]'>
                    <p className='text-[#010101] text-[15px] font-medium font-robotoFlex'>
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='h-[1px] w-full bg-[#F0F0F0] mt-[25px] mb-[40px]' />
            <button
              onClick={() => openModal(card.price, card.title)} // Passing title as well
              className='text-white text-center text-[18px] font-bold w-[90%] mx-auto py-[30px] 3xl:py-[24px] px-[20px] bg-violet100 rounded-[100px] mt-[7px] absolute left-0 right-0 bottom-[20px]'
            >
              Узнать цену
            </button>
          </div>
        ))}
      </div>
      <ServicePriceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        price={selectedPrice}
        serviceName={selectedTitle}
      />
    </div>
  )
}

export default CostCard
