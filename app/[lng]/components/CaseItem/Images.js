'use client'; // Указываем, что этот компонент должен рендериться на стороне клиента

import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Данные с изображениями и slug
const sliderData = [
  {
    slug: 'prime-medical-center',
    images: [
      { id: 1, url: 'https://ucarecdn.com/738ca6c2-a35e-41e7-916c-e22fa73ee28f/-/preview/1000x533/' },
      { id: 2, url: 'https://ucarecdn.com/60966bb0-661a-4e9a-80f6-d6ead1e42ba4/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'smile-design',
    images: [
      { id: 3, url: 'https://ucarecdn.com/9f7e748e-39cb-4883-9b8d-1b23a94d8e3a/-/preview/1000x533/' },
     
    ],
  },
  {
    slug: 'ant-group',
    images: [
      { id: 5, url: 'https://ucarecdn.com/52a344f3-1977-4a25-87f4-4711344f54ba/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'dr-odil-alisherovich',
    images: [
      { id: 6, url: 'https://ucarecdn.com/73d1a231-e993-475d-9ede-057ce26d9ffd/-/preview/1000x533/' },
      { id: 7, url: 'https://ucarecdn.com/3690f5d0-a634-4cd1-9640-a201ae793e86/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'mrj-trade',
    images: [
      { id: 7, url: 'https://ucarecdn.com/00dc2204-8b38-4b36-88df-78e431cca0f2/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'baxtiyor-nadjullayevich',
    images: [
      { id: 8, url: 'https://ucarecdn.com/822ce9da-2b80-4868-a1ae-3f1b5aef67e5/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'mostona-med',
    images: [
      { id: 9, url: 'https://ucarecdn.com/2e05f127-87bb-42b8-9f41-522a6a3d0938/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'nafisa-shuxratovna',
    images: [
      { id: 10, url: 'https://ucarecdn.com/fbb1227f-955c-449f-8661-7f0ee1a21ce8/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'xayrullo-rahmatullaevich',
    images: [
      { id: 11, url: 'https://ucarecdn.com/e534d29b-4837-47c1-9798-df709d3ac4b2/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'aziza-shaxzadeevna',
    images: [
      { id: 12, url: 'https://ucarecdn.com/bfd4e70f-bc5e-41d2-a267-565123f798bd/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'alisher-baxromovich',
    images: [
      { id: 13, url: 'https://ucarecdn.com/bbe6faa2-12e5-4740-bd93-e26a4d39c12a/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'sanjar-akbarovich',
    images: [
      { id: 14, url: 'https://ucarecdn.com/895a315c-7b9b-410a-95aa-1f2972b3cdf0/-/preview/1000x533/' },
      { id: 14, url: 'https://ucarecdn.com/89f29dbd-3dab-4be5-827e-478322a7bb47/-/preview/1000x533/' },
    ],
  },
  {
    slug: 'intermed',
    images: [
      { id: 15, url: 'https://ucarecdn.com/47eb0d5d-33fa-4f77-ac71-715685d172d6/-/preview/1000x611/' },
    ],
  },
];

// Параметры адаптивности
const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1, // Показывать 1 изображение на мобильных устройствах
  },
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 2, // Показывать 2 изображения на планшетах
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 2, // Показывать 2 изображения на десктопах
  },
};

const Images = () => {
  const { slug } = useParams(); // Получаем slug из URL
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    // Фильтруем изображения по slug
    const sliderItem = sliderData.find((item) => item.slug === slug);
    if (sliderItem) {
      setFilteredImages(sliderItem.images);
    }
  }, [slug]); // Запускаем эффект при изменении slug

  return (
    <div className="mt-[80px] mb-[80px] 3xl:mb-[200px]">
      <h2 className="text-[28px] mdl:text-[50px] font-bold mb-[20px] mdl:mb-[40px]">Итоги наглядно</h2>

      {/* Слайдер */}
      {filteredImages.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Скорость переключения
          arrows={false} // Отключить стрелки
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {filteredImages.map((image) => (
            <div key={image.id} className="px-2 cursor-pointer">
              <Image
                width={1600}
                height={670}
                quality={100}
                src={image.url}
                alt={`Slide ${image.id}`}
                className="object-cover w-full"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Нет изображений для отображения</p>
      )}
    </div>
  );
};

export default Images;
