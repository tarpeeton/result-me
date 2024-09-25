'use client'; // Указываем, что этот компонент должен рендериться на стороне клиента

import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useParams } from 'next/navigation';
import { Image } from "antd";
import b from '@/public/images/gallery/b.png'
// Данные с изображениями и slug
const sliderData = [
  {
    slug: 'prime-medical-center',
    images: [
      { id: 1, url: 'https://ucarecdn.com/c9c35c0f-c192-4f62-9d63-8664b3945108/-/preview/851x850/' },
      { id: 2, url: 'https://ucarecdn.com/39b456e2-39e5-42f8-99e6-c183e446dd9e/-/preview/1000x875/' },
      { id: 3, url: 'https://ucarecdn.com/d45d5341-7004-42e3-8993-027217514fd7/-/preview/999x507/' },
      { id: 4, url: 'https://ucarecdn.com/1bdb645b-2d66-4516-88dc-609db5e4ad9b/-/preview/1000x524/' },
      { id: 5, url: 'https://ucarecdn.com/a7222323-7da4-4f92-81e3-22d6cb214506/-/preview/999x573/' },
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
      { id: 5, url: 'https://ucarecdn.com/0085485b-ee8a-4b3d-9cc3-fd2ec7349b9c/-/preview/1000x583/' },
      { id: 73, url: 'https://ucarecdn.com/78fd5fba-25f8-49c1-84d3-6587842b3c0a/-/preview/999x553/' },
      { id: 12, url: 'https://ucarecdn.com/a4d43c06-f696-4905-9d3f-c53970b2a80b/-/preview/1000x569/' },
    ],
  },
  {
    slug: 'dr-odil-alisherovich',
    images: [
      { id: 6, url: 'https://ucarecdn.com/169ddc16-a2d7-489f-9b46-6b5bb794f05e/-/preview/1000x647/' },
      { id: 7, url: 'https://ucarecdn.com/433efeed-1ba1-4b2b-8f45-32f7736854fa/-/preview/1000x487/' },
      { id: 7, url: 'https://ucarecdn.com/a37faddf-7a97-476c-b726-a6cfac96e6d7/-/preview/1000x325/' },
      { id: 7, url: 'https://ucarecdn.com/b8ed1ffd-e463-44ce-bbc7-612984e6f148/-/preview/1000x501/' },
    ],
  },
  {
    slug: 'mrj-trade',
    images: [
      { id: 7, url: 'https://ucarecdn.com/ec66c4a4-a1c5-4ed0-a43d-07b0c28d6ec5/-/preview/999x478/' },
      { id: 7, url: 'https://ucarecdn.com/076cc861-aef3-4df0-a4db-710ef7c4bcc2/-/preview/1000x478/' },
      { id: 7, url: 'https://ucarecdn.com/218f837b-5869-4032-a0dd-53a7d3fcba63/-/preview/1000x478/' },
      { id: 7, url: 'https://ucarecdn.com/40d81068-0924-4626-ba44-107a6089a74d/-/preview/1000x480/' },
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
      { id: 9, url: 'https://ucarecdn.com/1b30d390-b7bf-4019-960a-ed4ff04d6a20/-/preview/1000x625/' },
      { id: 9, url: 'https://ucarecdn.com/f456c740-7832-406b-ae78-82633d14d6dc/-/preview/999x662/' },
    ],
  },
  {
    slug: 'nafisa-shuxratovna',
    images: [
      { id: 10, url: 'https://ucarecdn.com/e0596cda-90bc-419a-a3e1-3af1595b1094/-/preview/1000x496/' },
      { id: 10, url: 'https://ucarecdn.com/8bba8076-bb94-401b-b16a-51621f04b0dc/-/preview/1000x487/' },
      { id: 10, url: 'https://ucarecdn.com/4ddb1ddd-17bd-4be5-9cea-d85da912411b/-/preview/999x485/' },
    ],
  },
  {
    slug: 'xayrullo-rahmatullaevich',
    images: [
      { id: 11, url: 'https://ucarecdn.com/fa70f6cf-3837-441f-9978-5d1036185d18/-/preview/1000x493/' },
      { id: 11, url: 'https://ucarecdn.com/7d28a0d3-39db-4bb6-a165-e433865c9dab/-/preview/1000x495/' },
      { id: 11, url: 'https://ucarecdn.com/6836a43e-9a60-4bec-8b44-41f97613b44b/-/preview/999x498/' },
    ],
  },
  {
    slug: 'aziza-shaxzadeevna',
    images: [
      { id: 12, url: 'https://ucarecdn.com/d13f7970-dd37-423f-b99c-e6629ea2b267/-/preview/1000x478/' },
      { id: 12, url: 'https://ucarecdn.com/dec96844-da28-4372-aa8d-bb830a30712e/-/preview/1000x481/' },
      { id: 12, url: 'https://ucarecdn.com/e293e330-47fd-470c-b160-ef468de4f308/-/preview/1000x481/' },
    ],
  },
  {
    slug: 'alisher-baxromovich',
    images: [
      { id: 13, url: 'https://ucarecdn.com/66a3a807-1ea6-4e45-8576-2490d238e00d/-/preview/1000x508/' },
      { id: 13, url: 'https://ucarecdn.com/1d2feeb7-2a9e-4545-a8cb-748af7375f1a/-/preview/1000x481/' },
    
    ],
  },
  {
    slug: 'sanjar-akbarovich',
    images: [
      { id: 14, url: 'https://ucarecdn.com/e079d725-085f-4e1d-a71e-309208934dec/-/preview/1000x501/' },
      { id: 14, url: 'https://ucarecdn.com/3586cebb-ab75-4658-979b-cb1845f1c466/-/preview/1000x487/' },
      { id: 14, url: 'https://ucarecdn.com/579b8aea-01a6-4bdc-a3a4-84f03426b95f/-/preview/633x932/' },
      { id: 14, url: 'https://ucarecdn.com/042bbcde-cf79-4710-a6f3-2ba3fb04518f/-/preview/1000x505/' },
    ],
  },
  {
    slug: 'intermed',
    images: [
      { id: 15, url: 'https://ucarecdn.com/746adde7-b318-43eb-aaa0-14594b2bd986/-/preview/1000x479/' },
      { id: 15, url: 'https://ucarecdn.com/dd12b1cd-aa8a-41c8-82ad-97d7225fdcd6/-/preview/1000x477/' },
      { id: 15, url: 'https://ucarecdn.com/c72cd82c-34dc-4df4-8a18-97c9c6e8e529/-/preview/1000x476/' },
     
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
    <>
     {filteredImages.length > 0 ? (<div className="mt-[80px] mb-[80px] 3xl:mb-[200px]">
      <h2 className="text-[28px] mdl:text-[50px] font-bold mb-[20px] mdl:mb-[40px]">Галерея</h2>

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
  src={image.url}
  alt={`Slide ${image.id}`}
  className="object-cover w-[150px] mdl:w-[600px]"
  // Rasmni kattalashtirish uchun preview imkoniyatini qo'shish
   // Maksimal sifatni ta'minlash uchun sifatni belgilang
/>

            </div>
          ))}
        </Carousel>
      ) : null}
    </div>) : null}
    </>
   
    
  );
};

export default Images;
