'use client'
import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrLinkPrevious } from 'react-icons/gr'
import { GrLinkNext } from 'react-icons/gr'


import revTop from '@/public/images/reviews/revTop.png';
import revBottom from '@/public/images/reviews/revBottom.png';
import revBG from '@/public/images/reviews/revBG.png';
import { useRef } from 'react'



const SampleNextArrow = ({ onClick }) => (
	<div className='cursor-pointer text-[20px]' onClick={onClick}>
		<GrLinkNext />
	</div>
)

const SamplePrevArrow = ({ onClick }) => (
	<div className='cursor-pointer text-[20px]' onClick={onClick}>
		<GrLinkPrevious />
	</div>
)





const Reviews = () => {
	const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
	arrows: false,
    autoplaySpeed: 3000,
    arrows: false, // Add arrows if needed
  };

  const handlePrev = () => {
	if (sliderRef.current) {
		sliderRef.current.slickPrev() // Trigger prev slide
	}
}

const handleNext = () => {
	if (sliderRef.current) {
		sliderRef.current.slickNext() // Trigger next slide
	}
}

  return (
    <div
      className="relative w-full mt-[20px] mdl:mt-[30px] rounded-[30px] bg-cover bg-no-repeat px-5 py-8 bg-[#161616] bg-opacity-[90%]"
      style={{ backgroundImage: `url(${revBG.src})` }}
    >
      {/* Top Decorative Image */}
      <div className="w-[80%] absolute top-0 right-0 rounded-[30px] ">
        <Image width={400} height={400} src={revTop} alt="revTop"  className='rounded-[30px] '/>
      </div>

      {/* Reviews Title */}
      <p className="text-[28px] text-white font-bold relative z-50 mb-6">Отзывы клиентов</p>

      {/* Reviews Carousel */}
      <Slider {...settings} ref={sliderRef} className='z-[99999]'>
        <div className="rounded-[30px] p-4 bg-[#161616] bg-opacity-[50%]  text-white  z-[99999] min-h-[400px] border border-[#5A5A5A]">
          <h3 className="text-[18px] font-semibold mb-2">Матьякуб Назарович</h3>
          <p className="text-[14px] opacity-75 mb-4">Главврач Intermed</p>
          <p className="text-[15px] leading-[18px]">
            Отличная работа! Команда профессионалов создала для нас сайт, который идеально отражает нашу клинику и помогает привлекать новых пациентов.
          </p>
        </div>
        <div className="rounded-[30px] p-4 bg-[#161616]  bg-opacity-[50%] text-white  min-h-[400px] border border-[#5A5A5A]">
          <h3 className="text-[18px] font-semibold mb-2">Матьякуб Назарович</h3>
          <p className="text-[14px] opacity-75 mb-4">Главврач Intermed</p>
          <p className="text-[15px] leading-[18px]">
            Отличная работа! Команда профессионалов создала для нас сайт, который идеально отражает нашу клинику и помогает привлекать новых пациентов.
          </p>
        </div>
        {/* Add more review slides here */}
      </Slider>

      {/* Bottom Decorative Image */}
      <div className="absolute bottom-0 left-0">
        <Image width={400} height={400} src={revBottom} alt="revBottom" className='rounded-[30px]' />
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-6 flex items-center">
        <button className="w-[80%] mx-auto py-[20px] px-[30px] bg-white text-violet100 font-bold text-[14px]  rounded-full hover:bg-gray-200 transition z-[99999]">
          Стать нашим клиентом
        </button>
		<div className='sm:hidden flex flex-row gap-[8px] 2xl:flex z-[9999]'>
					<SamplePrevArrow onClick={handlePrev} />
					<SampleNextArrow onClick={handleNext} />
				</div>
      </div>
    </div>
  );
};

export default Reviews;
