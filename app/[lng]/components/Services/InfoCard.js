'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules';



const InfoCard = () => {
  const { slug } = useParams() // Getting the slug from the URL
  const [filteredData, setFilteredData] = useState([]) // State to store filtered data
  const [activeIndex, setActiveIndex] = useState(0);
  

  const data = {
    'web-development': [
      {
        title: { ru: 'Индивидуальный подход', uz: 'Individual yondashuv', en: 'Individual Approach' },
        description: {
          ru: 'Мы создаем уникальные решения, учитывая специфику вашего бизнеса и цели',
          uz: "Biznesingiz va maqsadlaringizning o'ziga xos xususiyatlarini inobatga olgan holda noyob yechimlarni yaratamiz.",
          en: 'We create unique solutions tailored to your business needs and goals.'
        }
      },
      {
        title: { ru: 'Современный дизайн', uz: 'Zamonaviy dizayn', en: 'Modern Design' },
        description: {
          ru: 'Создание привлекательных и визуально понятных сайтов которые запоминаются.',
          uz: 'Yodda qoladigan qiziqarli va vizual tushunarli saytlarni yaratish.',
          en: 'Crafting visually appealing and easy-to-navigate websites that leave a lasting impression.'
        }
      },
      {
        title: { ru: 'Адаптивность на всех устройствах', uz: 'Barcha qurilmalarda javob beradi', en: 'Device Adaptability' },
        description: {
          ru: 'Ваш сайт будет идеально отображаться на смартфонах, планшетах и компьютерах.',
          uz: 'Saytingiz smartfonlar, planshetlar va kompyuterlarda ideal tarzda aks etiladi.',
          en: 'Your website will display perfectly on smartphones, tablets, and computers.'
        }
      },
      {
        title: { ru: 'Гибкие тарифы', uz: 'Moslashuvchan tariflar ', en: 'Flexible Pricing' },
        description: {
          ru: 'Мы предлагаем различные тарифные планы, подходящие для любого бюджета.',
          uz: 'Har qanday byudjetga mos keladigan turli tarif rejalarini taklif etamiz.',
          en: 'We offer various pricing plans suitable for any budget.'
        }
      },
      {
        title: { ru: 'Международный опыт', uz: 'Xalqaro tajriba', en: 'International Experience' },
        description: {
          ru: 'Мы успешно работаем с клиентами и проектами по всему миру.',
          uz: "Butun dunyo bo'ylab mijozlar va loyihalar bilan muvaffaqiyatli ishlaymiz",
          en: 'We successfully collaborate with clients and projects from around the globe.'
        }
      }
    ],

    'telegram-bot-development': [
      {
        title: { ru: 'Индивидуальный подход', uz: 'Individual yondashuv', en: 'Individual Approach' },
        description: {
          ru: 'Мы разрабатываем ботов с учетом специфики вашего бизнеса и задач.',
          uz: "Biznesingiz va vazifalaringizning o'ziga xos xususiyatlarini inobatga olgan holda botlarni yaratamiz.",
          en: "We develop bots considering the specifics of your business and tasks."
        }
      },
      {
        title: { ru: 'Интуитивный интерфейс', uz: 'Intuitiv interfeys', en: 'Intuitive Interface' },
        description: {
          ru: 'Наши боты обеспечивают удобное и понятное взаимодействие для пользователей.',
          uz: "Biznesingiz va vazifalaringizning o'ziga xos xususiyatlarini inobatga olgan holda botlarni yaratamiz.",
          en: 'Our bots provide a simple and user-friendly interaction for your clients.'
        }
      },
      {
        title: { ru: 'Интеграция с системами', uz: 'Tizimlar bilan integratsiya', en: 'System Integration' },
        description: {
          ru: 'Боты легко интегрируются с CRM, платежными системами и другими сервисами.',
            uz: " Botlar CRM, to'lov tizimlari va boshqa xizmatlar bilan oson integratsiyalanadi.",
          en: "Bots easily integrate with CRM systems, payment gateways, and other services. "
        }
      },
      {
        title: { ru: 'Гибкие тарифы', uz: 'Moslashuvchan tariflar', en: 'Flexible Pricing ' },
        description: {
          ru: 'Мы предлагаем различные тарифы, которые подойдут для любого масштаба проекта.',
           uz: " Har qanday miqyosdagi loyihaga mos keladigan turli tariflarni taklif qilamiz.",
           en: "We offer different pricing plans to suit any project scale."
        }
      }
    ],

    smm: [
      {
        title: { ru: 'Персонализированная стратегия', uz: 'Shaxsiylashtirilgan strategiya', en: 'Personalized Strategy' },
        description: {
          ru: 'Мы разрабатываем уникальные SMM-кампании, ориентированные на ваши бизнес-цели и аудиторию.',
          uz: "Sizning biznes maqsadlaringiz va auditoriyangizga qaratilgan noyob SMM-kampaniyalarni ishlab chiqaramiz.",
          en: "We create unique SMM campaigns tailored to your business goals and audience."
        }
      },
      {
        title: { ru: 'Постоянный анализ и оптимизация', uz: 'Doimiy tahlil va optimallashtirish', en: 'Continuous Analysis and Optimization' },
        description: {
          ru: 'Мы регулярно оцениваем результаты и вносим корректировки для повышения эффективности кампаний.',
          uz: 'Natijalarni muntazam ravishda baholaymiz va kampaniyalar samaradorligini oshirish uchun tuzatishlar kiritamiz',
          en: 'We regularly evaluate results and make adjustments to improve campaign effectiveness. '
        }
      },
      {
        title: { ru: 'Гибкие пакеты услуг', uz: 'Moslashuvchan xizmat paketlari', en: 'Flexible Service Packages' },
        description: {
          ru: 'Предлагаем SMM-услуги под любые задачи: от разовых проектов до долгосрочного сопровождения.',
          uz: "Har qanday vazifalar uchun SMM-xizmatlarni taklif qilamiz: bir martalik loyihalardan uzoq muddatli qo'llab-quvvatlashgacha.",
          en: "We offer SMM services for any task: from one-time projects to long-term management."
        }
      },
      {
        title: { ru: 'Отчеты во время', uz: 'Batafsil hisobotlar', en: 'Detailed Reporting' },
        description: {
          ru: 'Предоставляем детализированные отчеты о каждой кампании, с четкой аналитикой и рекомендациями для дальнейшего улучшения результатов.',
          uz: "Har bir reklama kampaniyasi haqida batafsil hisobotlarni taqdim etamiz, ular natijalarni yanada yaxshilash bo'yicha aniq tahlillar va tavsiyalardan iborat.",
          en: 'We provide detailed reports for each campaign, with clear analytics and recommendations for future improvements. '
        }
      },
      {
        title: { ru: 'Мы на связи', uz: 'Biz aloqadamiz', en: "We're Always in Touch" },
        description: {
          ru: 'Мы всегда доступны для консультаций и вопросов, предоставляя оперативную поддержку и обсуждение стратегии на каждом этапе сотрудничества.',
          uz: "Doim konsultatsiya va savollarga tayyormiz, hamkorlikning har bir bosqichida tezkor yordam beramiz va strategiyani muhokama qilamiz.",
          en: 'We are always available for consultations, providing prompt support and discussing strategy at every stage of collaboration.'
        }
      },
      {
        title: { ru: 'Таргетированная реклама', uz: 'Target reklama', en: 'Targeted Advertising' },
        description: {
          ru: 'Настраиваем рекламу с точным таргетингом на вашу аудиторию, что позволяет сократить расходы и повысить конверсию.',
          uz: "Reklamani aynan auditoriyangizga qaratilgan holda sozlaymiz, bu xarajatlarni kamaytirishga va konversiyani oshirishga imkon beradi.",
          en: "We set up advertising with precise targeting for your audience, which helps reduce costs and increase conversions."
        }
      }
    ],

    'context-launch': [
      {
        title: { ru: 'Целенаправленность', uz: 'Aniqlik', en: 'Targeted Approach' },
        description: {
          ru: 'Реклама показывается только вашей целевой аудитории по нужным запросам, что увеличивает конверсию и снижает ненужные расходы.',
          uz: "Reklama faqat kerakli auditoriyaga ko‘rsatiladi, bu esa konversiyani oshiradi va keraksiz xarajatlarni kamaytiradi.",
          en: 'Ads are displayed only to your target audience based on relevant search queries, increasing conversion rates and reducing unnecessary expenses.'
        }
      },
      {
        title: { ru: 'Скорость', uz: 'Tezkor natijalar', en: 'Speed' },
        description: {
          ru: 'Реклама начинает привлекать клиентов уже в день запуска. Быстрая настройка и моментальный отклик обеспечивают поток заявок без ожидания.',
          uz: "Reklama ishga tushirilgan kuni mijozlarni jalb qila boshlaydi. Tez sozlash va zudlik bilan javob olish – ortiqcha kutishsiz arizalar oqimi.",
          en: 'Ads start attracting clients on the very first day. Fast setup and instant feedback ensure a steady flow of leads without delays.'
        }
      },
      {
        title: { ru: 'Стоимость', uz: 'Budjet nazorati', en: 'Cost Efficiency' },
        description: {
          ru: 'Платите только за реальные клики, без переплат. Гибкие настройки бюджета позволяют эффективно распределять средства и снижать затраты.',
          uz: "Siz faqat haqiqiy bosishlar uchun to‘laysiz, ortiqcha xarajatlarsiz. Budjetni moslashtirish orqali mablag‘laringizni samarali taqsimlash mumkin.",
          en: 'You pay only for actual clicks, avoiding overpayments. Flexible budget settings allow for efficient fund allocation and cost reduction.'
        }
      },
      {
        title: { ru: 'Отчетность', uz: 'Shaffof hisobotlar', en: 'Transparency' },
        description: {
          ru: 'Прозрачная статистика: отчёты по регионам, полу, возрасту помогут вам лучше изучить аудиторию и улучшать эффективность рекламы.',
          uz: "Hudud, yosh va jins bo‘yicha batafsil statistika orqali auditoriyangizni yaxshiroq tushunasiz va reklama samaradorligini oshirasiz.",
          en: 'Clear statistics: reports by region, gender, and age help you better understand your audience and improve advertising performance.'
        }
      },
    ],




    seo: [
      {
        title: { ru: 'Глубокий анализ сайта', uz: 'Saytning chuqur tahlili', en: 'In-depth Website Analysis ' },
        description: {
          ru: 'Проводим тщательный анализ вашего сайта, выявляя слабые места и возможности для улучшения.',
          uz: "Saytingizni to'liq tahlil qilamiz, zaif tomonlarini va yaxshilash imkoniyatlarini aniqlaymiz.",
          en: 'We conduct a thorough analysis of your site, identifying weak points and opportunities for improvement.'
        }
      },
      {
        title: { ru: 'Исследование ключевых слов', uz: "Kalit so'zlarni o'rganish", en: 'Keyword Research' },
        description: {
          ru: 'Подбираем самые эффективные ключевые слова, чтобы ваш сайт занимал высокие позиции по актуальным запросам.',
          uz: "Saytingiz aktual so'rovlar bo'yicha yuqori o'rinni egallashi uchun eng samarali kalit so'zlarni tanlaymiz.",
          en: ' We select the most effective keywords to ensure your website ranks high for relevant queries. '
        }
      },
      {
        title: { ru: 'Оптимизация контента', uz: 'Kontentni optimallashtirish', en: 'Content Optimization  ' },
        description: {
          ru: 'Создаем и улучшаем контент с учетом SEO-требований для повышения его релевантности и привлекательности.',
          uz: 'Kontentning relevantligini va jozibadorligini oshirish uchun SEO-talablarni inobatga olgan holda uni yaratamiz va yaxshilaymiz.',
          en: 'We create and enhance content with SEO requirements in mind, increasing its relevance and appeal. '
        }
      },
      {
        title: { ru: 'Построение ссылок', uz: 'Havolalarni tuzish', en: 'Link Building' },
        description: {
          ru: 'Используем белые методы построения ссылок для повышения авторитетности вашего сайта и улучшения его позиций в поисковиках.',
          uz: "Saytingizning obro'sini oshirish va qidiruv tizimlarida reytingini yaxshilash uchun havolalarni tuzishning oq usullaridan foydalanamiz.",
          en: ' We use white-hat link-building techniques to increase your site’s authority and improve its search engine rankings.'
        }
      },
      {
        title: { ru: 'Регулярная отчетность', uz: 'Doimiy hisobot', en: 'Regular Reporting' },
        description: {
          ru: 'Предоставляем детализированные отчеты о проделанной работе и достигнутых результатах, что позволяет отслеживать эффективность и планировать дальнейшие шаги.',
          uz: ' Bajarilgan ishlar va erishilgan natijalar haqida batafsil hisobotlarni taqdim etamiz, bu esa samaradorlikni kuzatish va keyingi qadamlarni rejalashtirish imkonini beradi.',
          en: 'We provide detailed reports on the work done and the results achieved, allowing you to track effectiveness and plan future steps.  '
        }
      }
    ],

    branding: [
      {
        title: { ru: 'Индивидуальный подход', uz: 'Individual yondashuv', en: 'Individual Approach' },
        description: {
          ru: 'Разработка уникального бренда, который отражает суть бизнеса и привлекает внимание целевой аудитории.',
          uz: "Biznes mohiyatini aks ettiradigan va maqsadli auditoriya e'tiborini tortadigan noyob brendni ishlab chiqarish.",
          en: 'Development of a unique brand that reflects the essence of the business and attracts the target audience’s attention.'
        }
      },
      {
        title: { ru: 'Гибкость в дизайне', uz: 'Dizayndagi moslashuvchanlik', en: 'Flexibility in Design  ' },
        description: {
          ru: 'Предоставляем возможность внести изменения в дизайн на любом этапе работы, чтобы полностью удовлетворить ваши требования.',
          uz: "Talablaringizni to'liq qondirish uchun ishning istalgan bosqichida dizaynga o'zgartirishlar kiritish imkoniyatini taqdim etamiz.",
          en: ' We provide the option to make design changes at any stage of the process to fully meet your requirements.  '
        }
      },
      {
        title: { ru: 'Персонализированные решения', uz: 'Shaxsiylashtirilgan echimlar', en: 'Personalized Solutions ' },
        description: {
          ru: 'Предлагаем персонализированные решения для каждого клиента, чтобы создать индивидуальный стиль и имидж.',
          uz: 'Har bir mijoz uchun individual uslub va tasvirni yaratish uchun moslashtirilgan echimlarni taklif etamiz.',
          en: ' We offer tailored solutions for each client to create an individual style and image. '
        }
      },
      {
        title: { ru: 'Доступные цены', uz: 'Arzon narxlar', en: 'Affordable Prices  ' },
        description: {
          ru: 'Обеспечиваем конкурентоспособные цены на продукцию без потери качества.',
          uz: "Mahsulotlarga sifatni yo'qotmasdan raqobatbardosh narxlarni taqdim etamiz.",
          en: 'We ensure competitive pricing on products without compromising quality.  '
        }
      }
    ],

    'doctor-brand': [
      {
        title: { ru: 'Индивидуальный подход', uz: "Individual yondashuv", en: 'Personalized approach:' },
        description: {
          ru: 'сайт отражает вашу личность и профессиональный стиль.',
          uz: "sayt sizning shaxsiyatingiz va professional uslubiyatingizni aks ettiradi.",
          en: 'The website reflects your personality and professional style.'
        }
      },
      {
        title: { ru: 'Полный функционал', uz: "To'liqfunksional", en: 'Complete functionality' },
        description: {
          ru: 'включает контактные данные, карту, расписание приема и перечень услуг',
          uz: "aloqa ma'lumotlari, xarita, qabul jadvali va xizmatlar ro'yxati kiradi.",
          en: 'Includes contact details, location map, schedule, and list of services'
        }
      },
      {
        title: { ru: 'Профессиональный запуск рекламы', uz: 'Reklamani professional darajada ishga tushirish', en: 'Professional ad launch' },
        description: {
          ru: 'контекстная реклама привлекает целевую аудиторию.',
          uz: 'kontekstli reklama maqsadli auditoriyani jalb qiladi.',
          en: 'Contextual advertising that attracts the target audience'
        }
      },
      {
        title: { ru: 'Анализ и оптимизация', uz: 'Tahlil va optimallashtirish', en: 'Analysis and optimization' },
        description: {
          ru: 'регулярный мониторинг и корректировки кампаний.',
          uz: "doimiy monitoring va kampaniyalarga o'zgarish kiritib turish.",
          en: 'Regular campaign monitoring and adjustments'
        }
      },
      {
        title: { ru: 'Прозрачная отчетность', uz: 'Shaffof hisobot', en: 'Transparent reporting' },
        description: {
          ru: 'детализированные отчеты и рекомендации.',
          uz: "batafsil hisobotlar va tavsiyalar.",
          en: 'Detailed reports and recommendations.'
        }
      },
      {
        title: { ru: 'Поддержка на каждом этапе', uz: 'Har bir bosqichda yordam', en: 'Support at every stage' },
        description: {
          ru: 'консультации и помощь в течение всего процесса.',
          uz: "butun jarayon davomida konsultatsiyalar va qo'llab-quvvatlash.",
          en: 'Consultations and assistance throughout the process.'
        }
      },
    ],
  }

  useEffect(() => {
    if (slug && data[slug]) {
      setFilteredData(data[slug]) // Set the filtered data based on the slug
    } else {
      setFilteredData([]) // Set empty array if slug doesn't match any data
    }
  }, [slug])

  const { lng } = useParams()
  return (
    <section className='flex flex-col mt-[80px] gap-[10px] 3xl:mx-[30px]'>
      {filteredData.length > 0 && (
        <div className='hidden slg:block w-full cursor-pointer'>
          <Swiper 
           modules={[Autoplay]}
           spaceBetween={12}
           loop={true}
           speed={700}
           autoplay={{ delay: 3000, disableOnInteraction: false }}
           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
           breakpoints={{
             320: { slidesPerView: 1 },
             640: { slidesPerView: 2 },
             1024: { slidesPerView: 3 }
           }}
          className='w-full'>
            {filteredData.map((item, index) => (
              <SwiperSlide key={index}>
 <div
                key={index}
                className={`w-full  rounded-[30px] 2xl:rounded-[60px] 2xl:h-[350px] p-[30px] pb-[26px] flex flex-col justify-between   3xl:py-[40px] 3xl:px-[40px] ${
                   activeIndex === index  ? 'bg-violet100 ' : 'bg-[#ededf6]'
                }`}
              >
                <div className='w-[60%] 3xl:w-[100%]'>
                  <p
                    className={`text-[23px] mdl:text-[35px] ${
                      activeIndex === index  ?  'text-white100' : 'text-titleDark'
                    } font-bold 4xl:text-[50px]`}
                  >
                    {item.title[lng]}
                  </p>
                </div>
                <div className='mt-[15px] mdl:text-[18px] w-[85%] mdl:mt-[40px]'>
                  <p
                    className={`text-[14px] mdl:text-[18px] ${
                      activeIndex === index  ? 'text-white100' : 'text-[#454545]'
                    } 4xl:text-[20px] font-robotoFlex 3xl:w-[100%]`}
                  >
                    {item.description[lng]}
                  </p>
                </div>
              </div>
              </SwiperSlide>
             
            ))}
          </Swiper>
        </div>
      )}

      {/* Column layout for screens smaller than 750px */}
      <div className='sm:flex sm:flex-col sm:gap-[20px] slg:hidden mx-[16px] mdl:mx-[20px]'>
        {filteredData.map((item, index) => (
          <div
            key={index}
            className={`w-full rounded-[30px] p-[30px] pb-[26px] flex flex-col min-h-[240px] ${
              index === 0 ? 'bg-violet100' : 'bg-[#F4F3FF]'
            }`}
          >
            <div className='w-[60%]'>
              <p
                className={`text-[23px] ${
                  index === 0 ? 'text-white100' : 'text-titleDark'
                } font-bold`}
              >
                {item.title[lng]}
              </p>
            </div>
            <div className='mt-[15px] w-[85%]'>
              <p
                className={`text-[14px] ${
                  index === 0 ? 'text-white100' : 'text-[#454545]'
                } font-robotoFlex`}
              >
                {item.description[lng]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InfoCard
