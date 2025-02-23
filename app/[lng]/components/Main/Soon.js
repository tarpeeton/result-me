"use client"
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'next/navigation';
import { useCustomTranslation } from '@/app/i18n/client'
import { SoonData } from '@/constants/soon';
const Soon = () => {
  const {lng} = useParams()
  const {t} = useCustomTranslation(lng , 'product')
 

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='mt-[80px] flex flex-col gap-[20px]'>
      <div className='flex flex-col p-[24px] w-full h-full'>
        <p className='text-[28px] mdl:text-[50px] 3xl:text-[60px] font-bold'>
        {t('title')}
        </p>
        <p className='bg-violet100 text-white100 text-[23px] mdl:text-[40px] 3xl:text-[50px] font-bold p-[10px] w-[243px] mdl:w-[426px] 3xl:w-[535px] rounded-[170px] text-center rotate-[-5deg]'>
        {t('subtitle')}
        </p>
      </div>
      <Slider {...settings}>
        {SoonData.map((d, index) => (
          <div key={index} className="relative">
            <div
              className={`2xl:w-[95%] cursor-pointer rounded-[25px] w-full h-full px-[12px] bg-gray-900 pt-[24px]  ${
                d.isSoon ? '' : 'bg-white  backdrop-blur-xl'
              }`}
            >
				<div>
				<Image
                src={d.img}
                width={300}
                alt='soon Image'
                height={300}
                quality={100}
                className={`'object-contain rounded-[25px] w-full h-full' ${d.isSoon ? '' : 'bg-black  blur-[2px] '}`}
              />
				</div>
              
              {!d.isSoon && (
                <div className="absolute inset-0 flex items-center justify-center w-[183px] mx-auto">
                  <button className="bg-white p-[10px] border-t border-[#F0F0F0] rounded-[100px] text-[18px] shadow-lg shadow-[#000] w-full">{t('soon')}</button>
                </div>
              )}

              <div className='3xl:mt-[20px] mt-[20px] text-center'>
                <p className='text-violet100 3xl:text-[21px] font-bold'>{d.description[lng]}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Soon;
