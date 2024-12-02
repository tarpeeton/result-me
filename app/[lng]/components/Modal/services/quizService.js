export const quizData = [
    {
      type: 1,
      title: {ru:"Кто вы?", uz: "Siz kimsiz?" , en: "Who are you?"},
      value: "kto_vi",
      descriptions: {ru:"Выберите подходящее описание для себя", uz: "O‘zingiz uchun mosini tanlang" , en: "Select the appropriate description for yourself"},
      data: [
        {
          type: "button",
          title: {ru:"Владелец бизнеса", uz: "Biznes egasi" , en: "Business Owner"},
          active: false,
          value: "Владелец бизнеса",
          descriptions:{ru: "Учредитель, соучредитель или генеральный директор компании", uz: "Kompaniya asoschisi, hammuassisi yoki bosh direktori" , en: "Founder, co-founder, or CEO of a company"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-1-photo-1.png",
        },
        {
          type: "button",
          title: {ru:"Руководитель", uz: "Boshqaruvchi" ,en: "Manager"},
          active: false,
          value: "Руководитель",
          descriptions:{ru:"Менеджер или директор, управляющий процессами внутри компании" , uz: "Kompaniya ichidagi jarayonlarni boshqaradigan menejer yoki direktor" ,en: "A manager or director overseeing company processes"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-1-photo-2.png",
        },
        {
          type: "button",
          title: {ru:"Специалист" , uz: 'Mutaxassis' ,en: "Specialist"},
          active: false,
          value: "Специалист",
          descriptions: {ru:"Принимающий специалист как лечащий врач, психолог или косметолог." , uz: "Qabul qiluvchi mutaxassis, uni davolaydigan shifokor, psixolog yoki kosmetologga o‘xshatsa bo‘ladi." , en: "A practicing professional such as a doctor, psychologist, or cosmetologist"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-1-photo-3.png",
        },
        {
          type: "button",
          title: {ru:"Маркетолог", uz: "Marketolog" , en: "Marketer "},
          active: false,
          value: "Маркетолог",
          descriptions:{ru:"Специалист в области продвижения, рекламы и аналитики", uz: "Targ‘ibot, reklama va tahlillar bo‘yicha mutaxassis" , en: "A specialist in promotion, advertising, and analytics"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-1-photo-4.png",
        },
        {
          type: "input",
          title: {ru:"Ввести вручную", uz: "Qo‘lda kiritish" , en: "Enter manually"},
          active: false,
          value: "",
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-6.png",
        },
      ],
    },
    {
      type: 1,
      value: "jelaimniy_rezultat",
      title: {ru:"Желаемый результат", uz: "Istalgan natija" , en: "Desired Outcome"},
      descriptions: {ru:"Какой результат вы хотите получить?", uz: "Qanday natijaga erishmoqchisiz?" ,en: "What result do you want to achieve?"},
      data: [
        {
          type: "button",
          title: {ru: "Поток клиентов" , uz: "Mijozlar oqimi" ,en: "Client Flow"},
          active: false,
          value: "Поток клиентов",
          descriptions:{ru:"Увеличение числа лидов: заявок, звонков и сообщений", uz: "Lidlar soni ko‘payadi: ilovalar, qo‘ng‘iroqlar va xabarlar" , en: "Increase in the number of leads: applications, calls, and messages"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-1.png",
        },
        {
          type: "button",
          title: {ru:"Повышение видимости", uz: "Ko‘rinishning ortishi" ,en: "Brand Strengthening"},
          active: false,
          value: "Повышение видимости",
          descriptions:
            {ru:"Увеличение количества показов и охвата вашей компании или услуг", uz: "Kompaniyangiz yoki xizmatlaringiz boshqalarga ko‘proq ko‘rinadi va qamrovi oshadi" , en: "Increase in the number of impressions and reach for your company or services"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-2.png",
        },
        {
          type: "button",
          title: {ru:"Укрепление бренда ", uz:"Brendni mustahkamlash " ,en: "Brand Strengthening"},
          active: false,
          value: "Укрепление бренда",
          descriptions:
           { ru:"Создание устойчивого и запоминающегося образа бренда, отражающего ценности компании и повышающего доверие клиентов.", uz: "Kompaniya qadriyatlarini aks ettiradigan va mijozlar ishonchini oshiradigan barqaror va unutilmaydigan brend imidjini yaratish." , en: "Creation of a strong and memorable brand image that reflects the company's values and builds customer trust"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-3.png",
        },
        {
          type: "button",
          title: {ru:"Увеличение лояльности", uz:"Sodiqlikni oshirish " ,en: "Increased Loyalty "},
          active: false,
          value: "Увеличение лояльности",
          descriptions:
            {ru:"Повышение уровня доверия и удовлетворенности текущих клиентов.", uz: " Joriy mijozlarning ishonch darajasini va mamnunligini oshirish." , en: "Improved trust and satisfaction among current clients"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-4.png",
        },
        {
          type: "button",
          title: {ru:"Реклама новой услуги или продукта", uz: "Yangi xizmat yoki mahsulotni reklama qilish" ,en: "Advertising a New Service or Product"},
          active: false,
          value: "Увеличение лояльности",
          descriptions:
            {ru:"Привлечение внимания к новому предложению для быстрого формирования интереса и спроса.", uz:"Qiziqish va talabni tezda shakllantirish uchun yangi taklifga e‘tiborni jalb qilish." , en: "Attract attention to a new offering for quick interest generation and demand"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-5.png",
        },
        {
          type: "input",
          title: {ru:"Ввести вручную", uz: "Qo‘lda kiritish" , en: "Enter manually"},
          active: false,
          value: "",
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-6.png",
        },
      ],
    },
    {
      type: 2,
      value: "istochniki_klientov",
      title: {ru:"Источники клиентов", uz: "Mijozlar manbalari" , en: "Client Sources"},
      descriptions:
        {ru:"Определите, откуда клиенты чаще всего узнают о вашей компании", uz: "Mijozlar kompaniyangiz haqida qayerdan ko‘proq bilib olayotganini aniqlang." , en: "Identify where your clients most frequently learn about your company."},
      data: [
        {
          type: "button",
          title:{ru: "Рекомендации других клиентов", uz: "Boshqa mijozlarning tavsiyalari " , en: "Client Recommendations"},
          active: false,
          value: "Рекомендации других клиентов",
          descriptions:
          {ru:  "Сарафанное радио и личные рекомендации", uz: "Og‘zaki va shaxsiy tavsiyalar" , en: "Word-of-mouth and personal referrals"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-3-photo-1.png",
        },
        {
          type: "button",
          title: {ru:"Направления специалистов", uz: "Mutaxassislarning tavsiyalari" , en: "Specialist Referrals"},
          active: false,
          value: "Направления специалистов",
          descriptions:
            {ru:"Перенаправление клиентов от партнеров или специалистов", uz: "Mijozlarni sheriklar yoki mutaxassislar yuboradi;" , en: "Client referrals from partners or professionals"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-3-photo-2.png",
        },
        {
          type: "button",
          title: {ru:"Социальные сети", uz: "Ijtimoiy tarmoqlar" , en: "Social Media"},
          active: false,
          value: "Социальные сети",
          descriptions:
          { ru: "Instagram, Telegram, YouTube, Facebook", uz: "Instagram, Telegram, YouTube, Facebook" , en: "Instagram, Telegram, YouTube, Facebook"} ,
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-3-photo-3.png",
        },
        {
          type: "button",
          title: {ru:"Сайт", uz: "Sayt" , en: "Website"},
          active: false,
          value: "Сайт",
          descriptions:
         {ru:"Ваша главная цифровая платформа, на которой клиенты получают полную информацию о вас и услугах, делая первый шаг к взаимодействию", uz:"Sizning asosiy raqamli platformangiz, u erda mijozlar siz va xizmatlaringiz haqida to‘liq ma‘lumot oladi va hamkorlikka birinchi qadam qo‘yadi" , en: "Your main digital platform where clients obtain full information about your services and make initial contact"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-3-photo-4.png",
        },
        {
          type: "button",
          title: {ru:"Сервисы-агрегаторы", uz: "Aggregator-xizmatlari" , en: "Aggregator Services"},
          active: false,
          value: "Сервисы-агрегаторы",
          descriptions:
           {ru:"Платформы, объединяющие компании одной ниши (Med 24, Apteka.uz, Clinics.uz)", uz: " Bir xil yo‘nalishdagi kompaniyalarni birlashtiruvchi platformalar (Med 24, Apteka.uz, Clinics.uz)" , en: " Platforms that group companies in the same niche (Med 24, Apteka.uz, Clinics.uz)"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-3-photo-5.png",
        },
        {
          type: "button",
          title: {ru:"Наружная реклама", uz: "Tashqi reklama" , en: "Outdoor Advertising "},
          active: false,
          value: "Наружная реклама",
          descriptions:
           { ru:"Постеры, баннеры или цифровые экраны", uz: "Plakatlar, bannerlar yoki raqamli ekranlar" , en: "Posters, banners, or digital screens"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-3-photo-6.png",
        },
        {
          type: "input",
          title: {ru:"Ввести вручную", uz: "Qo‘lda kiritish" ,en: "Enter manually"},
          active: false,
          value: "",
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-2-photo-6.png",
        },
      ],
    },
    {
      type: 1,
      value: "calculator",
      title: {ru:"Калькулятор", uz: "Kalkulyator" , en: "Calculator"},
      descriptions:{ru:"Подсчитайте количество приведенных клиентов за рекламную кампанию:", uz: "Reklama kampaniyasi davomida kelgan mijozlar sonini hisoblang:" ,en: "Calculate the number of clients generated from an advertising campaign:"},
      data: [
        {
          type: "button",
          title: {ru:"Контекстная реклама", uz: "Kontekstli reklama" ,en: "Contextual Advertising"},
          active: false,
          value: "Контекстная реклама",
          descriptions:{ru:"Реклама вашего сайта в Google, Yandex", uz:"Saytingizni Google, Yandex da reklama qilish" , en: "Ads for your website on Google, Yandex"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-4-photo-1.png",
        },
        {
          type: "button",
          title: {ru:"Таргетированная реклама", uz: "Target reklama" , en: "Targeted Advertising"},
          active: false,
          value: "Таргетированная реклама",
          descriptions:
            {ru:"Реклама вашей странички в Instagram, Facebook", uz: "Instagram, Facebook da sahifangizni reklama qilish" , en: "Ads for your page on Instagram, Facebook"},
          icon: "https://shotambrat.github.io/cdndelivery/assets/result-site-quiz-step-4-photo-2.png",
        },
      ],
    },
    {
      type: 2,
      title: {ru: "Контекстная реклама", uz: "Target reklama" ,en: "Targeted Advertising"},
      value: "Контекстная реклама",
      data: [
        {
          type: "ratio",
          calcValue: 'budget',
          title: {ru:"Рекламный бюджет", uz: "Reklama byudjeti" ,en: "Advertising Budget "},
          saleSymbol: "$",
          from: 100,
          to: 3000,
          value: 300,
          step: 1,
          active: false,
          descriptions:
            {ru:"Сумма, выделенная на канал или кампанию за отчетный период", uz:"Hisobot davrida har bir kanal yoki kampaniya uchun ajratilgan miqdor" , en: "The amount allocated to the channel or campaign for the reporting period "}
        },
        {
          type: "ratio",
          title: {ru:"Цена за клик", uz:"Chertish narxi" ,en: "Cost per Click "},
          calcValue: 'cpc',
          saleSymbol: "$",
          from: 0.05,
          to: 2,
          step: 0.01,
          value: 0.15,
          active: false,
          descriptions:
            {ru: "Количество кликов по рекламе, показатель интереса к рекламному материалу", uz:"Reklamani chertish soni, reklama materiallariga nisbatan ko‘rsatilgan qiziqish" , en: "Number of clicks on the ad, indicating interest in the material"}
        },
        {
          type: "ratio",
          title: {ru:"Конверсия в лиды", uz: "Lidga konversiya" , en: "Conversion to Leads "},
          calcValue: 'leadConv',
          saleSymbol: "%",
          from: 3,
          to: 40,
          step: 1,
          value: 9,
          active: false,
          descriptions:
            {ru:"Доля кликов, которые стали лидами", uz: "Lidga aylangan chertishlar foizi " , en: "The share of clicks that converted to leads "},
        },
        {
          type: "ratio",
          calcValue: 'meetingConv',
          title: {ru:"Конверсия в встречи", uz: "Uchrashuvga konversiya" , en: "Conversion to Appointments"},
          saleSymbol: "%",
          from: 3,
          to: 40,
          step: 1,
          value: 9,
          active: false,
          descriptions:
            {ru:"Ожидаемый процент встреч на основе приведенных лидов", uz: "Taqdim etilgan lidlar asosida kutilayotgan uchrashuvlar foizi" , en: "The expected percentage of appointments from the acquired "},
        },
        // {
        //   type: "ratio",
        //   calcValue: 'clientConv',
        //   title: {ru:"Конверсия в клиента", uz: "Xaridorga konversiya" , en: "Conversion to Clients"},
        //   saleSymbol: "%",
        //   from: 3,
        //   to: 40,
        //   step: 1,
        //   value: 10,
        //   active: false,
        //   descriptions:
        //     {ru:"Процент встреч, приводящих к заключению сделки с клиентом", uz:"Mijoz bilan kelishuvga olib keladigan uchrashuvlar foizi " , en: "The percentage of appointments that result in a client deal"}
        // },
      ],
    },
    {
      type: 2,
      title: "Таргетированная реклама",
      value: "Таргетированная реклама",
      data: [
        {
          type: "ratio",
          calcValue: 'budget',
          title: {ru:"Рекламный бюджет", uz: "Reklama byudjeti" ,en: "Advertising Budget "},
          saleSymbol: "$",
          from: 100,
          to: 3000,
          value: 300,
          step: 1,
          active: false,
          descriptions:
            {ru:"Сумма, выделенная на канал или кампанию за отчетный период", uz:"Hisobot davrida har bir kanal yoki kampaniya uchun ajratilgan miqdor" , en: "The amount allocated to the channel or campaign for the reporting period "}
        },
        {
          type: "ratio",
          title:{ ru:"Цена за лид" , uz: "Lid narxi" , en: "Cost per Lead"},
          calcValue: 'leadConv',
          saleSymbol: "$",
          from: 0.8,
          to: 20,
          value: 2.0,
          step: 0.1,
          active: false,
          descriptions:
            {ru:"Стоимость приведенного лида", uz: "Ko‘rsatilgan lid narxi" , en: "The cost of an acquired lead"},
        },
        {
          type: "ratio",
          title: {ru:"Конверсия в встречи" , uz: "Uchrashuvga konversiya" ,en: "Conversion to Appointments "},
          calcValue: 'meetingConv',
          saleSymbol: "%",
          from: 3,
          to: 40,
          value: 10,
          step: 1,
          active: false,
          descriptions:
            {ru:"Ожидаемый процент встреч на основе приведенных лидов", uz: "Taqdim etilgan lidlar asosida kutilayotgan uchrashuvlar foizi " , en: "The expected percentage of appointments from the acquired "},
        },
        // {
        //   type: "ratio",
        //   title: {ru:"Конверсия в клиента" , uz: "Xaridorga konversiya" , en: "Conversion to Clients"},
        //   calcValue: 'clientConv',
        //   saleSymbol: "%",
        //   from: 3,
        //   to: 40,
        //   value: 10,
        //   step: 1,
        //   active: false,
        //   descriptions:
        //     {ru:"Процент встреч, приводящих к заключению сделки с клиентом" , uz: "Mijoz bilan kelishuvga olib keladigan uchrashuvlar foizi " ,en: "The percentage of appointments that result in a client deal"},
        // },
      ],
    },
  ];
