"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';
import medicalMarketin from '@/public/images/blog/medicalMarketin.jpg'
import blogImage from '@/public/images/blog/meditsiniskiySe0.jpg'
import videoMarketing from '@/public/images/blog/video.jpg'
import klinikcastniy from '@/public/images/blog/klinikcastniy.jpg'
import target from '@/public/images/blog/Target.jpg'
import patient from '@/public/images/blog/patient.jpg'
import like from '@/public/images/blog/like.jpg'
import brand from '@/public/images/blog/brand.jpg'
import tv from '@/public/images/blog/tv.jpg'
import crm from '@/public/images/blog/crm.jpg'
import equipment from '@/public/images/blog/equipment.jpg'
import { useParams } from 'next/navigation'


const blogData = [
	{
	  id: 0,
	  slug: 'blog1',
	  title: {
		uz: ' Xususiy tibbiy klinikalar uchun samarali marketing: asosiy xususiyatlar',
		ru: 'Эффективный маркетинг для частных медицинских клиник: ключевые особенности',
		en: 'Effective Marketing for Private Medical Clinics: Key Features',
	  },
	  description: {
		uz: "Shaxsiy tibbiy amaliyotni qanday targ'ib qilishni, ko'proq bemorlarni jalb qilishni va tasdiqlangan marketing strategiyalari yordamida ishonchni mustahkamlashni bilib oling.",
		ru: 'Узнайте, как продвигать частную медицинскую клинику, привлекать больше пациентов и усиливать доверие с помощью проверенных маркетинговых стратегий.',
		en: 'Discover how to promote a private medical clinic, attract more patients, and build trust through proven marketing strategies.',
	  },
	  photo: {
		id: 0,
		url: medicalMarketin,
	  },
	  orderNum: 0,
	},
	{
	  id: 1,
	  slug: 'blog2',
	  title: {
		uz: "Tibbiy saytlar uchun SEO: ko'rinishni yaxshilash bo'yicha maslahatlar",
		ru: 'SEO для медицинских сайтов: лучшие советы для повышения видимости в интернете',
		en: ' SEO for Medical Websites: Tips for Improving Visibility',
	  },
	  description: {
		uz: "Tibbiy saytni qidiruv tizimlarida ko'rinishini yaxshilash, ko'proq bemorlarni jalb qilish va klinika reytingini oshirish uchun SEO dan qanday foydalanishni bilib oling.",
		ru: 'Узнайте, как с помощью SEO улучшить видимость медицинского сайта в поисковых системах, привлечь больше пациентов и повысить рейтинг клиники.',
		en: ' Discover how to leverage SEO to improve the visibility of your medical website in search engines, attract more patients, and elevate your clinic’s ranking.',
	  },
	  photo: {
		id: 1,
		url: blogImage,
	  },
	  orderNum: 1,
	},
	{
	  id: 2,
	  slug: 'blog3',
	  title: {
		uz: ' Tibbiyot kompaniyasi uchun samarali kontent-marketing strategiyasi: bemorlarni qanday jalb qilish mumkin',
		ru: ' Эффективная стратегия контент-маркетинга для медицинской компании: как привлечь пациентов',
		en: 'Effective Content Marketing Strategy for a Medical Company: How to Attract Patients',
	  },
	  description: {
		uz: "Ko'proq bemorlarni jalb qilish va klinikangizga ishonchni oshirish maqsadida tibbiy kompaniya uchun kontent-marketing strategiyasini qanday ishlab chiqishni bilib oling.",
		ru: 'Узнайте, как разработать стратегию контент-маркетинга для медицинской компании, чтобы привлечь больше пациентов и повысить доверие к вашей клинике.',
		en: 'Learn how to develop a content marketing strategy for a medical company to attract more patients and enhance trust in your clinic',
	  },
	  photo: {
		id: 2,
		url: klinikcastniy, // Placeholder URL
	  },
	  orderNum: 2,
	
	},
	{
	  id: 3,
	  slug: 'blog4',
	  title: {
		uz: 'Bemorlarni jalb qilish uchun tibbiyot sanoatida video-marketingdan qanday foydalansa bo’ladi',
		ru: 'Как использовать видео-маркетинг в медицинской сфере для привлечения пациентов',
		en: 'How to Use Video Marketing in the Medical Field to Attract Patients',
	  },
	  description: {
		uz: "Tibbiy klinikalar uchun video-marketing bo'yicha eng yaxshi amaliyotlarni o'rganing va qaysi videolar haqiqatan ham ishlayotganini bilib oling.",
		ru: 'Откройте для себя лучшие практики видео-маркетинга для медицинских клиник и узнайте, какие видео действительно работают.',
		en: 'Discover the best practices for video marketing in medical clinics and learn which types of videos are truly effective.',
	  },
	  photo: {
		id: 3,
		url: videoMarketing, // Placeholder URL
	  },
	  orderNum: 3,
	},
	{
	  id: 4,
	  slug: 'blog5',
	  title: {
		uz: 'Tibbiy klinikalar uchun target reklamaning xususiyatlari: bemorlarni jalb qilish',
		ru: 'Особенности таргетированной рекламы для медицинских клиник: привлечение пациентов',
		en: 'Key Features of Targeted Advertising for Medical Clinics: Attracting Patients',
	  },
	  description: {
		uz: "Tibbiyot klinikasi uchun target reklamani qanday qilib to'g'ri yo'lga qo'yish va bemorlar oqimini ko'paytirishni bilib oling.",
		ru: 'Узнайте, как правильно настроить таргетированную рекламу для медицинской клиники и увеличить поток пациентов.',
		en: 'Discover how to effectively set up targeted advertising for a medical clinic and increase patient traffic.',
	  },
	  photo: {
		id: 4,
		url: target, // Placeholder URL
	  },
	  orderNum: 4,
	},
	{
	  id: 5,
	  slug: 'blog6',
	  title: {
		uz: 'Klinikalar uchun bemorga qaratilgan marketing: xizmatni qanday yaxshilash va bemorlarni jalb qilish mumkin',
		ru: 'Пациентоориентированный маркетинг для клиник: как улучшить сервис и привлечь пациентов',
		en: ' Patient-Centered Marketing for Clinics: Enhancing Service and Attracting Patients',
	  },
	  description: {
		uz: ' Qanday qilib bemorga qaratilgan marketing yondashuvi klinika xizmatini yaxshilashga va yangi mijozlarni jalb qilishga yordam beradi. Muvaffaqiyatga erishish uchun oddiy qadamlar.',
		ru: 'Как пациентоориентированный подход в маркетинге помогает улучшить сервис клиники и привлечь новых клиентов. Простые шаги для достижения успеха.',
		en: ' Discover how a patient-centered approach in marketing helps improve clinic service and attract new clients. Simple steps to achieve success.',
	  },
	  photo: {
		id: 5,
		url: patient, // Placeholder URL
	  },
	  orderNum: 5,
	 
	},
	{
	  id: 6,
	  slug: 'blog7',
	  title: {
		uz: "Bemorlarning izohlari klinikani targ'ib qilishga va yangi mijozlarni jalb qilishga qanday yordam beradi",
		ru: 'Как отзывы пациентов помогают продвигать клинику и привлекать новых клиентов',
		en: ' How Patient Reviews Help Promote Clinics and Attract New Clients',
	  },
	  description: {
		uz: "Klinikaning obro'sini oshirish va ko'proq mijozlarni jalb qilish uchun bemorlarning izohlari bilan qanday ishlashni bilib oling.",
		ru: 'Узнайте, как работать с отзывами пациентов, чтобы улучшить репутацию клиники и привлечь больше клиентов.',
		en: "Learn how to leverage patient reviews to enhance your clinic's reputation and attract more clients.",
	  },
	  photo: {
		id: 6,
		url: like, // Placeholder URL
	  },
	  orderNum: 6,
	},
	{
	  id: 7,
	  slug: 'blog8',
	  title: {
		uz: 'Klinika brendini qanday yaratish mumkin: kontseptsiyadan to muvaffaqiyat ila olg’a qadam bosishgacha',
		ru: 'Как создать бренд клиники: шаги от концепции до успешного продвижения',
		en: 'How to Create a Clinic Brand: Steps from Concept to Successful Promotion',
	  },
	  description: {
		uz: "Raqobatchilardan ajralib turish va ko'proq bemorlarni jalb qilish uchun tibbiy klinika brendini qanday yaratish va rivojlantirish mumkinligini bilib oling.",
		ru: 'Узнайте, как создать и развить бренд медицинской клиники, чтобы выделиться среди конкурентов и привлечь больше пациентов.',
		en: "Discover how to create and develop a brand for your medical clinic to stand out among competitors and attract more patients.",
	  },
	  photo: {
		id: 7,
		url: brand, // Placeholder URL
	  },
	  orderNum: 7,
	},
	{
	  id: 9,
	  slug: 'blog10',
	  title: {
		uz: 'Teletibbiyot qanday ishlaydi: onlayn-konsultatsiyalar afzalliklari va imkoniyatlari',
		ru: 'Как работает телемедицина: преимущества и возможности онлайн-консультаций',
		en: 'How Telemedicine Works: Advantages and Opportunities of Online Consultations',
	  },
	  description: {
		uz: 'Teletibbiyotni klinikangizga qanday joriy etishni va onlayn-konsultatsiyalar bemorlar va shifokorlarga qanday imtiyozlar taqdim etishini bilib oling.',
		ru: 'Узнайте, как внедрить телемедицину в вашу клинику и какие преимущества онлайн-консультации предлагают пациентам и врачам.',
		en: ' Learn how to implement telemedicine in your clinic and what benefits online consultations offer to patients and doctors.',
	  },
	  photo: {
		id: 9,
		url: tv, // Placeholder URL
	  },
	  orderNum: 9,
	},
	{
	  id: 10,
	  slug: 'blog11',
	  title: {
		uz: 'Tibbiy klinikada CRM dan qanday foydalansa bo’ladi: bemorlar bilan ishlashni yaxshilash',
		ru: 'Как использовать CRM в медицинской клинике: улучшение работы с пациентами',
		en: 'How to Utilize CRM in a Medical Clinic: Enhancing Patient Management',
	  },
	  description: {
		uz: ' CRM tizimi tibbiy klinikalarga bemorlarga g’amxo’rlik qilishni yaxshilash va ichki jarayonlarni tashkil etishga qanday yordam berishini bilib oling.',
		ru: 'Узнайте, как CRM-система помогает медицинским клиникам улучшить обслуживание пациентов и организовать внутренние процессы.',
		en: 'Discover how a CRM system helps medical clinics improve patient service and organize internal processes.',
	  },
	  photo: {
		id: 10,
		url: crm, // Placeholder URL
	  },
	  orderNum: 10,
	  text: `
		Управление медицинской клиникой — это не только приём пациентов, но и работа с документами, расписанием, напоминаниями и многим другим. Чтобы всё это было организовано эффективно, клинике нужна CRM-система. Она упрощает работу с пациентами, улучшает взаимодействие и помогает увеличить поток клиентов.
  
	
	  `,
	},
	{
	  id: 11,
	  slug: 'blog12',
	  title: {
		uz: "B2B-segmentida tibbiy asbob-uskunalar va xizmatlarni qanday targ'ib qilish kerak: asosiy strategiyalar",
		ru: 'Как продвигать медицинское оборудование и услуги в B2B-сегменте: ключевые стратегии',
		en: 'How to Promote Medical Equipment and Services in the B2B Segment: Key Strategies',
	  },
	  description: {
		uz: "Zamonaviy marketing vositalaridan foydalangan holda B2B segmentida tibbiy asbob-uskunalar va xizmatlarni qanday samarali targ'ib qilishni aniqlaymiz.",
		ru: 'Разбираемся, как эффективно продвигать медицинское оборудование и услуги в сегменте B2B с использованием современных маркетинговых инструментов.',
		en: 'Exploring effective strategies for promoting medical equipment and services in the B2B segment using modern marketing tools.',
	  },
	  photo: {
		id: 11,
		url: equipment, // Placeholder URL
	  },
	  orderNum: 11,
	},
  ];
  

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 blogs
	const {lng} = useParams()
  // Handler for showing more blogs
  const showMoreBlogs = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Show 6 more blogs when clicked
  };

  return (
    <div className='flex flex-col mt-[40px] mdl:mt-[60px] gap-[40px] py-[30px] px-[12px] w-full rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] bg-[#F8F8F8] mdl:px-[40px]'>
      {/* Blog Cards */}
      <div className='flex flex-col mdl:flex mdl:flex-row mdl:flex-wrap gap-[40px] mdl:gap-[50px] slg:flex-row slg:flex-wrap relative'>
        {blogData.slice(0, visibleCount).map((item) => (
          <Link
            href={`/blog/${item.slug}`}
            key={item.id}
            className='card__blog slg:w-[45%] cursor-pointer 2xl:w-[30%] relative'
          >
            {/* Only display the image if the URL is not empty */}
            {item.photo && item.photo.url ? (
              <div className='slg:h-[230px] '>
                <Image
                  width={600}
                  height={600}
                  quality={100}
                  alt='blog image'
                  src={item.photo.url}
                  className='object-cover w-full h-full'
                />
              </div>
            ) : null}
            <div className='mt-[14px] flex flex-col gap-[8px] mb-[40px]'>
              <p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px]'>
                {item.title[lng]} {/* Adjust language as needed */}
              </p>
              <p className='text-[14px] text-[#7B7B7B] leading-[24.38px] mdl:text-[18px] mdl:leading-[23px]'>
                {item.description[lng]} {/* Adjust language as needed */}
              </p>
            </div>
            <div className='mt-[8px] mdl:mt-[20px] absolute bottom-[0]'>
              <span className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'>
                	Подробнее
                <GrLinkNext className='text-violet100 ml-[8px]' />
              </span>
            </div>
          </Link>
        ))}
      </div>
	
      {/* Load More Button */}
      {visibleCount < blogData.length && (
        <div className='hidden mdl:flex justify-center mt-[40px]'>
          <button
            onClick={showMoreBlogs}
            className='px-[24px] py-[12px] bg-violet100 text-white rounded-full text-[18px]'
          >
            
			{lng === "ru" ? "Загрузить еще" : lng === "uz" ? "Ko'proq yuklash" : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
