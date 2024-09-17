'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('Сайты');
  const navRefs = useRef([]);  // Array to store refs for `a` elements
  const spanRefs = useRef([]); // Array to store refs for `span` elements

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4, 
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '40px'
        },
      },
    ],
  };

  const navItems = [
    { name: 'Сайты',  slug: 'web-development' },
    { name: 'Telegram-боты', slug: 'telegram-bot-development' },
    { name: 'SMM', href: 'smm', slug: 'smm' },
    { name: 'Реклама',  slug: 'ads-launch' },
    { name: 'SEO', slug: 'seo' },
    { name: 'Брендинг', slug: 'branding' },
  ];

  const updateSpanWidths = () => {
    navRefs.current.forEach((ref, index) => {
      if (ref && spanRefs.current[index]) {
        const aWidth = ref.offsetWidth;
        spanRefs.current[index].style.width = `${aWidth}px`;
      }
    });
  };

  useEffect(() => {
    // Ensure the span width matches the a element width on initial load and window resize
    updateSpanWidths();
    window.addEventListener('resize', updateSpanWidths);
    return () => window.removeEventListener('resize', updateSpanWidths);
  }, []);

  useEffect(() => {
    // Animate the span when activeNav changes
    navRefs.current.forEach((ref, index) => {
      const spanRef = spanRefs.current[index];
      if (ref && spanRef) {
        const aWidth = ref.offsetWidth;
        if (navItems[index].name === activeNav) {
          gsap.to(spanRef, { width: aWidth, opacity: 1, marginTop: '5px', duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(spanRef, { width: '0%', opacity: 0, duration: 0.1 });
        }
      }
    });
  }, [activeNav]);

  return (
    <>
      {/* FOR DESKTOP VIEW */}
      <nav className="hidden 2xl:flex px-[20px] gap-[50px] border-t border-t-[#F0F0F0] 2xl:items-center">
        {navItems.map((item, index) => (
          <div key={item.name} className="flex flex-col items-center relative justify-center text-center pt-[25px]">
            <a
              ref={(el) => (navRefs.current[index] = el)} // Ref for a element
              href={`/ru/services/${item.slug}`}
              className={`text-[20px] font-semibold ${activeNav === item.name ? 'text-[#7B72EB]' : 'text-black'} hover:text-[#7B72EB] pb-1`}
              onClick={() => setActiveNav(item.name)}
              style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
            >
              {item.name}
            </a>
            <span
              ref={(el) => (spanRefs.current[index] = el)} // Ref for span element
              className="absolute bottom-[-15px] left-0 h-[5px] bg-[#7B72EB] rounded-tl-[5px] rounded-tr-[5px]"
              style={{ width: 0 }} // Start with width 0 for animation
            ></span>
          </div>
        ))}
      </nav>

      {/* FOR MOBILE AND TABLET VIEW */}
      <nav className=" 2xl:hidden py-[20px] px-[16px]">
      <Slider {...settings}>
        {navItems.map((item, index) => (
          <div key={item.name} className="flex flex-col items-center relative px-2">
            <a
              ref={el => (navRefs.current[index] = el)}
              href={`/ru/services/${item.slug}`}
              className={`text-sm font-semibold ${activeNav === item.name ? 'text-[#7B72EB]' : 'text-black'} hover:text-[#7B72EB] pb-1`}
              onClick={() => setActiveNav(item.name)}
            >
              {item.name}
            </a>
            <span
              ref={el => (spanRefs.current[index] = el)}
              className="absolute bottom-[-10px] h-1 bg-[#7B72EB] rounded"
              style={{ width: 0 }}
            ></span>
          </div>
        ))}
      </Slider>
    </nav>
    </>
  );
};

export default Navigation;
