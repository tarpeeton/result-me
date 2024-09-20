"use client";
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { gsap } from "gsap";
import Link from 'next/link';

import inter from '@/public/images/cases/inter.png';
import caseDesckription from '@/public/images/Vector.png';

// Items for filtering
const items = [
  { id: 1, name: "Все", type: "all" },
  { id: 2, name: "Сайты", type: "Сайт" },
  { id: 3, name: "Telegram-боты", type: "Telegram Bots" },
  { id: 4, name: "SMM", type: "SMM" },
  { id: 5, name: "Реклама", type: "Реклама" },
  { id: 6, name: "SEO", type: "SEO" },
  { id: 7, name: "Брендинг", type: "Брендинг" },
];

// Example data with different service types and statistics
const data = [
  {
    id: 1,
    banner: {
      title: "Intermed Innovation",
      shortDescription: "Сайт SEO",
      photo: inter,
      slug: 'intermed'
    },
    statistics: [
      {label: 'Конверсия с сайта увеличилась на 17%. Запущенная реклама приносит 200+ лидов по цене 2,1$ за лид в течении 1 месяца Эти результаты подтверждают успешное привлечение клиентов и повышение интереса к продуктам компании.'}
    ],
  },
  {
    id: 2,
    banner: {
      title: "MRJ Trade",
      shortDescription: "Сайт SEO Брендинг Реклама",
      photo: "https://ucarecdn.com/581a982e-f1c1-44c1-8dd4-1862300a3e0c/-/preview/1000x533/",
      slug: 'mrj-trade'
    },
    statistics: [
      { value: "+1,560", label: "кликов на сайт за месяц" },
      { value: "+0,32$", label: "цена за клик" },
      { value: "+11,22%", label: "CTR" },
    ],
  },
  {
    id: 3,
    banner: {
      title: "Prime medical center",
      shortDescription: "SMM Сайт",
      photo: 'https://ucarecdn.com/3d44d91c-b27b-41a0-9eb5-a02d51e18ad0/-/preview/1000x533/',
      slug: 'prime-medical-center'
    },
    statistics: [
      { value: "+41%", label: "число обращений в клинику" },
      { value: "+23%", label: "посещаемость" },
      { value: "+18,200%", label: "посещений сайта / год" },
    ],
  },
  {
    id: 4,
    banner: {
      title: "Dr Odil Alisherovich",
      shortDescription: "Сайт SMM ",
      photo: 'https://ucarecdn.com/3821b6ff-68bf-49a0-95a1-3a97a2b24367/-/preview/1000x533/',
      slug: 'dr-odil-alisherovich'
    },
    statistics: [
      { value: "+750", label: "подписчиков в Telegram" },
      { value: "+1070", label: "подписчиков в Instagram" },
    ],
  },
  {
    id: 5,
    banner: {
      title: "Mastona Med",
      shortDescription: "SMM",
      photo: 'https://ucarecdn.com/9838f328-be53-4820-beb0-50de671b5042/-/preview/1000x533/',
      slug: 'mostona-med'
    },
    statistics: [
      {label: 'Мы предоставили клинике все необходимые материалы для работы, что позволило их команде эффективно справляться с задачами.'}
    ],
  },
  {
    id: 6,
    banner: {
      title: "Бахтиер Наджиюллаевич",
      shortDescription: "Реклама",
      photo: 'https://ucarecdn.com/59e5684a-271c-41ab-a8d2-1efe4622449e/-/preview/1000x533/',
      slug: 'baxtiyor-nadjullayevich'
    },
    statistics: [
      { value: "+4,820", label: "кликов на сайт" },
      { value: "0,10$", label: "цена за клик" },
      { value: "+14,22%", label: "CTR" },
    ],
  },
  {
    id: 7,
    banner: {
      title: "Smile Design",
      shortDescription: "Реклама",
      photo: 'https://ucarecdn.com/319af659-eec1-45b4-9cfc-870415179a17/-/preview/1000x533/',
      slug: 'smile-design'
    },
    statistics: [
      { value: "2,450", label: "кликов на сайт" },
      { value: "0,05$", label: "цена за клик" },
      { value: "11,64%", label: "CTR" },
    ],
  },
  {
    id: 8,
    banner: {
      title: "Нафиса Шухратовна",
      shortDescription: "Сайт Брендинг",
      photo: "https://ucarecdn.com/ff5c48de-f62f-43d3-930f-deda157f95d8/-/preview/1000x533/",
      slug: 'nafisa-shuxratovna'
    },
    statistics: [
      {label: "Разработанный сайт оказался удобным и информативным, что позволило пациентам быстро находить необходимую информацию о стоматологе и услугах."}
    ],
  },
  {
    id: 10,
    banner: {
      title: "Хайрилло Рахматуллаевич",
      shortDescription: "Сайт Брендинг",
      photo: "https://ucarecdn.com/2ba0ba68-c9fe-4385-9455-ab649077f091/-/preview/1000x533/",
      slug: 'xayrullo-rahmatullaevich'
    },
    statistics: [
      { label: "Разработанный сайт стал успешным информационным ресурсом, который привлекает внимание потенциальных клиентов и повышает имидж врача. Фирменный стиль был успешно внедрен, что помогло повысить узнаваемость врача на рынке." },
    ],
  },
  {
    id: 11,
    banner: {
      title: "Ant Group",
      shortDescription: "SMM",
      photo: 'https://ucarecdn.com/49c73bea-744c-4688-9381-749f0a02dddd/-/preview/1000x533/',
      slug: 'ant-group'
    },
    statistics: [
      {label: 'Успешно проведены SMM-мероприятия, что способствовало росту взаимодействия с аудиторией и укреплению бренда компании.'}
    ],
  },
  {
    id: 12,
    banner: {
      title: "Алишер Бахромович",
      shortDescription: "Сайт Реклама SEO Брендинг",
      photo: "https://ucarecdn.com/63e07933-c844-4595-bb71-7f8daeb71e1a/-/preview/1000x533/",
      slug: 'alisher-baxromovich'
    },
    statistics: [
      { value: "2,840", label: "кликов на сайт" },
      { value: "0,11$", label: "цена за клик" },
      { value: "13,63%", label: "CTR" },
    ],
  },
  {
    id: 13,
    banner: {
      title: "Ахмедов Санджар Акбарович",
      shortDescription: "Сайт Реклама Брендинг",
      photo: "https://ucarecdn.com/15d5c5c4-5760-4093-a6a7-4df1af132578/-/preview/1000x533/",
      slug: 'sanjar-akbarovich'
    },
    statistics: [
      { value: '14,5 тыс', label: 'кликов на сайт' },
      { value: '0,07$', label: 'цена за клик' },
      { value: '14,11%', label: 'CTR' },
    ],
  },
  {
    id: 14,
    banner: {
      title: "Азиза Шахзадэевна",
      shortDescription: "Реклама Сайт",
      photo: "https://ucarecdn.com/c1131e2f-5cdb-4c1a-8a37-46bd923ceae2/-/preview/1000x533/",
      slug: 'aziza-shaxzadeevna'
    },
    statistics: [
      { label: "Разработанный сайт стал хорошим ресурсом для пациентов, предоставив всю информацию о враче в свободном доступе 24 / 7, что способствовало увеличению видимости в интернете." },
    ],
  },
];

const Content = () => {
  const [selected, setSelected] = useState(1);
  const [filteredData, setFilteredData] = useState(data); // State for filtered data
  const mobileSpansRef = useRef([]);
  const desktopSpansRef = useRef([]);

  const handleSelect = (id, type) => {
    setSelected(id);

    // Filter data based on the selected type
    if (type === "all") {
      setFilteredData(data); // Show all if "Все" is selected
    } else {
      setFilteredData(data.filter(item => item.banner.shortDescription.includes(type)));
    }
  };

  // GSAP animation effect for menu
  useEffect(() => {
    if (mobileSpansRef.current[selected]) {
      gsap.fromTo(
        mobileSpansRef.current[selected],
        { width: 0 },
        { width: "100%", duration: 0.5, ease: "power2.out" }
      );
    }
    if (desktopSpansRef.current[selected]) {
      gsap.fromTo(
        desktopSpansRef.current[selected],
        { width: 0 },
        { width: "100%", duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selected]);

  const responsive = {
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="w-full">
      {/* Mobile Carousel for Filter Options */}
      <div className="lg:hidden w-full px-[16px] py-[20px]">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={false}
          infinite={false}
        >
          {items.map((item) => (
            <div key={item.id} className="text-center">
              <button
                className={`text-[15px] pb-[10px] font-semibold ${
                  selected === item.id ? "text-violet100" : "text-titleDark"
                }`}
                onClick={() => handleSelect(item.id, item.type)}
              >
                {item.name}
              </button>
              {selected === item.id && (
                <span
                  ref={(el) => (mobileSpansRef.current[item.id] = el)}
                  className="block w-full h-[5px] mt-2 bg-violet100 mx-auto rounded-t-[5px]"
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Filter Options */}
      <div className="hidden lg:flex lg:gap-[50px] py-[30px] px-[20px]">
        {items.map((item) => (
          <div key={item.id} className="text-center">
            <button
              className={`text-[20px] font-semibold ${
                selected === item.id ? "text-violet100" : "text-titleDark"
              }`}
              onClick={() => handleSelect(item.id, item.type)}
            >
              {item.name}
            </button>
            {selected === item.id && (
              <span
                ref={(el) => (desktopSpansRef.current[item.id] = el)}
                className="block w-full h-[5px] mt-2 bg-violet100 mx-auto rounded-t-[5px]"
              />
            )}
          </div>
        ))}
      </div>

      {/* Cards Section (Filtered Data) */}
      <div className="mx-[16px] flex flex-col gap-[5px] 2xl:flex 2xl:flex-row 2xl:flex-wrap  2xl:justify-between 2xl:mx-[30px]">
        {filteredData.map((item, idx) => (
          <Link
            href={`/cases/${item.banner.slug}`}  // Dynamic route based on slug
            key={idx}
            className="w-full mt-[20px] 3xl:w-[49%] 6xl:max-w-[99%] relative group cursor-pointer 2xl:mb-[80px]"
          >
            <div className="relative">
              <Image
                src={item.banner.photo}
                width={1500}
                height={900}
                quality={100}
                alt="banner image"
                className="object-cover w-full h-full   2xl:h-[400px] 4xl:h-[500px]"
              />
              {/* Hidden content that appears on hover */}
              <div className="hidden 3xl:absolute bottom-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 3xl:flex justify-center items-center bg-opacity-[70%]">
                <div className="h-[100px] absolute bottom-[20px]">
                  <div className="flex flex-row gap-[40px] items-center justify-center 3xl:px-[40px]">
                    {item.statistics.map((stat, statIdx) => (
                      <div key={statIdx} className="flex flex-col gap-[5px] text-center">
                        <p className="text-white100 text-[18px] 3xl:text-[30px] 4xl:text-[50px] font-bold">
                          {stat.value}
                        </p>
                        <p className="text-white100 text-[18px] 4xl:text-[20px] font-medium 3xl:text-[18px] font-robotoFlex">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[20px] 3xl:mt-[25px] flex flex-col gap-[4px]">
              <p className="text-[20px] font-semibold mdx:text-[28px] 4xl:text-[35px]">
                {item.banner.title}
              </p>
              <p className="text-[14px] text-violet100 mdx:text-[18px] font-semibold w-full flex flex-row ">
                {item.banner.shortDescription.split(' ').map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <Image
                        src={caseDesckription}
                        width={40}
                        quality={100}
                        height={40}
                        alt="separator"
                        className="mx-[6px] w-[14px] h-[14px] mdl:w-[20px] mdl:h-[20px]"
                      />
                    )}
                    <span>{word}</span>
                  </React.Fragment>
                ))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
