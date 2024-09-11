"use client";
import { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import caseimg from '@/public/images/caseimg.jpg';
import { gsap } from "gsap";
import Link from 'next/link'

const items = [
  { id: 1, name: "Все" },
  { id: 2, name: "Сайты" },
  { id: 3, name: "Telegram-боты" },
  { id: 4, name: "SMM" },
  { id: 5, name: "Реклама" },
  { id: 6, name: "SEO" },
  { id: 7, name: "Брендинг" },
];

const Content = () => {
  const [selected, setSelected] = useState(1);
  const mobileSpansRef = useRef([]);
  const desktopSpansRef = useRef([]);

  const handleSelect = (id) => {
    setSelected(id);
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
                onClick={() => handleSelect(item.id)}
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

      <div className="hidden lg:flex lg:gap-[50px] py-[30px] px-[20px]">
        {items.map((item) => (
          <div key={item.id} className="text-center">
            <button
              className={`text-[20px] font-medium ${
                selected === item.id ? "text-violet100" : "text-titleDark"
              }`}
              onClick={() => handleSelect(item.id)}
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

      {/* Cards Section */}
      <div className="mx-[16px] 3xl:flex 3xl:flex-row 3xl:flex-wrap 3xl:gap-[100px] 3xl:mx-[30px]">
        {[1, 2, 3, 4].map((_, idx) => (
          <Link
		  	href={`/cases/${idx}`}
            key={idx}
            className="w-full mt-[20px] 3xl:w-[45%] 6xl:max-w-[99%] relative group cursor-pointer"
          >
            <div className="relative">
              <Image
                src={caseimg}
                width={1500}
                height={900}
                quality={100}
                alt="banner image"
                className="object-cover w-full h-full"
              />
              {/* Hidden content that appears on hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <div className='h-[100px]'>
                  <div className='flex flex-row gap-[80px] items-center justify-center'>
                    <div className='flex flex-col gap-[5px]'>
                      <p className='text-white100 text-[18px] 3xl:text-[50px] font-bold'>+30%</p>
                      <p className='text-white100 text-[18px] 3xl:text-[20px] font-medium'>конверсия</p>
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                      <p className='text-white100 text-[18px] 3xl:text-[50px] font-bold'>+75%</p>
                      <p className='text-white100 text-[18px] 3xl:text-[20px] font-medium'>посещаемость</p>
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                      <p className='text-white100 text-[18px] 3xl:text-[50px] font-bold'>+50%</p>
                      <p className='text-white100 text-[18px] 3xl:text-[20px] font-medium'>приток клиентов</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[20px] 3xl:mt-[25px] flex flex-col gap-[4px]">
              <p className="text-[20px] font-semibold mdx:text-[28px] 4xl:text-[35px]">
                Intermed Innovation
              </p>
              <p className="text-[14px] text-violet100 mdx:text-[18px] font-semibold">
                Сайт | SEO
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
