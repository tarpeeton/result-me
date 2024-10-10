'use client' // Указываем, что этот компонент должен рендериться на стороне клиента

import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useParams } from 'next/navigation'
import { Image } from 'antd'
import { useCustomTranslation } from '@/app/i18n/client'
import { sliderData } from '@/constants/sliderData'

// Параметры адаптивности
const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1 // Показывать 1 изображение на мобильных устройствах
  },
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 2 // Показывать 2 изображения на планшетах
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 2 // Показывать 2 изображения на десктопах
  }
}

const Images = () => {
  const { slug, lng } = useParams() // Получаем slug из URL
  const [filteredImages, setFilteredImages] = useState([])
  const { t } = useCustomTranslation(lng, 'caseslug')
  useEffect(() => {
    // Фильтруем изображения по slug
    const sliderItem = sliderData.find(item => item.slug === slug)
    if (sliderItem) {
      setFilteredImages(sliderItem.images)
    }
  }, [slug]) // Запускаем эффект при изменении slug

  return (
    <>
      {filteredImages.length > 0 ? (
        <div className='mt-[80px] mb-[80px] 3xl:mb-[200px]'>
          <h2 className='text-[28px] mdl:text-[50px] font-bold mb-[20px] mdl:mb-[40px]'>
            {t('gallery')}
          </h2>
          {/* Слайдер */}
          {filteredImages.length > 0 ? (
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000} // Скорость переключения
              arrows={false} // Отключить стрелки
              containerClass='carousel-container'
              itemClass='carousel-item-padding-40-px'
            >
              {filteredImages.map(image => (
                <div key={image.id} className='px-2 cursor-pointer'>
                  <Image
                    src={image.url}
                    alt={`Slide ${image.id}`}
                    className='object-cover bg-center w-[150px] mdl:w-[600px]'
                    quality={100}
                  />
                </div>
              ))}
            </Carousel>
          ) : null}
        </div>
      ) : null}
    </>
  )
}

export default Images
