'use client'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import Image from 'next/image';


import One from '@/public/images/partners/1.png';
import Two from '@/public/images/partners/2.png';
import Three from '@/public/images/partners/3.png';
import Five from '@/public/images/partners/4.png';
import six from '@/public/images/partners/5.png';
import seven from '@/public/images/partners/6.png';
import eigth from '@/public/images/partners/7.png';
import partners from '@/public/images/partners/8.png';

const SampleNextArrow = ({ onClick }) => (
  <div className="cursor-pointer text-[20px]" onClick={onClick}>
    <GrLinkNext />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="cursor-pointer text-[20px]" onClick={onClick}>
    <GrLinkPrevious />
  </div>
);

const Partners = () => {
	const sliderRef = useRef(null);

	const settings = {
	  dots: false,
	  infinite: false,
	  speed: 500,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false, // Disable built-in arrows
	};
  
	const handlePrev = () => {
	  if (sliderRef.current) {
		sliderRef.current.slickPrev(); // Trigger prev slide
	  }
	};
  
	const handleNext = () => {
	  if (sliderRef.current) {
		sliderRef.current.slickNext(); // Trigger next slide
	  }
	};

  return (
    <div className='flex flex-col rounded-[30px] bg-[#F8F8F8] mt-[20px] py-[30px] px-[20px]'>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <p className='text-[28px] font-bold'>Партнеры</p>
        </div>
        {/* Custom navigation buttons */}
        <div className='flex flex-row gap-[8px]'>
          <SamplePrevArrow onClick={handlePrev} />
          <SampleNextArrow  onClick={handleNext}/>
        </div>
        {/* End of custom navigation */}
      </div>
      <div className='mt-[30px]'>
        <Slider ref={sliderRef} {...settings}>

			<div className='flex flex-col'>
			<div className='rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] '>
            <Image src={One} width={400} height={400} quality={100} alt='partners Logo' />
          </div>
          <div className='rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] '>
            <Image src={Three} width={400} height={400} quality={100} alt='partners Logo' />
          </div>
          <div className='rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]'>
            <Image src={Five} width={400} height={400} quality={100} alt='partners Logo' />
          </div>
          <div className='rounded-[20px] bg-white100 py-[36px] px-[66px] '>
            <Image src={six} width={400} height={400} quality={100} alt='partners Logo' />
          </div>
          
			</div>

			<div className='flex flex-col'>
			<div className='rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] '>
            <Image src={seven} width={400} height={400} quality={100} alt='partners Logo' />
          </div>
          <div className='rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] '>
            <Image src={eigth} width={400} height={400} quality={100} alt='partners Logo' />
          </div>
          <div className='rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] '>
            <Image src={partners} width={400} height={400} quality={100} alt='partners Logo' />
          </div>
			</div>
		
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
