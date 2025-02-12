"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useParams } from "next/navigation";

const Navigation = () => {
  const { slug, lng } = useParams();
  const [activeNav, setActiveNav] = useState(slug); // Change to use slugs for activeNav
  const navRefs = useRef([]); // Array to store refs for `a` elements
  const spanRefs = useRef([]); // Array to store refs for `span` elements

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

  const navItems = [
    {
      name: {
        ru: "Сайты",
        uz: "Saytlar",
        en: "Web Development",
      },
      slug: "web-development",
    },
    {
      name: {
        ru: "Telegram-боты",
        uz: "Telegram-botlar",
        en: "Telegram Bots",
      },
      slug: "telegram-bot-development",
    },

    {
      name: {
        ru: "Реклама",
        uz: "Reklama",
        en: "Ads Launch",
      },
      slug: "ads-launch",
    },
    {
      name: {
        ru: "SEO",
        uz: "SEO",
        en: "SEO",
      },
      slug: "seo",
    },
    {
      name: {
        ru: "Брендинг",
        uz: "Brending",
        en: "Branding",
      },
      slug: "branding",
    },
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
    window.addEventListener("resize", updateSpanWidths);
    return () => window.removeEventListener("resize", updateSpanWidths);
  }, []);

  useEffect(() => {
    // Animate the span when activeNav changes
    navRefs.current.forEach((ref, index) => {
      const spanRef = spanRefs.current[index];
      if (ref && spanRef) {
        const aWidth = ref.offsetWidth;
        if (navItems[index].slug === activeNav) {
          gsap.to(spanRef, {
            width: aWidth,
            opacity: 1,
            marginTop: "10px",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(spanRef, { width: "0%", opacity: 0, duration: 0.1 });
        }
      }
    });
  }, [activeNav]);

  const handleSelect = (slug) => {
    setActiveNav(slug);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden 2xl:flex px-[20px] gap-[50px] border-t border-t-[#F0F0F0] 2xl:items-center">
        {navItems.map((item, index) => (
          <div
            key={item.slug}
            className="flex flex-col items-center relative justify-center text-center pt-[25px]"
          >
            <a
              ref={(el) => (navRefs.current[index] = el)} // Ref for a element
              href={`/${lng}/services/${item.slug}`}
              className={`text-[20px] font-semibold ${
                activeNav === item.slug ? "text-[#7B72EB]" : "text-black"
              } hover:text-[#7B72EB] pb-1`}
              onClick={() => handleSelect(item.slug)}
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {item.name[lng]}
            </a>
            <span
              ref={(el) => (spanRefs.current[index] = el)} // Ref for span element
              className="absolute bottom-[-15px] left-0 h-[5px] bg-[#7B72EB] rounded-tl-[5px] rounded-tr-[5px]"
              style={{ width: 0 }} // Start with width 0 for animation
            ></span>
          </div>
        ))}
      </nav>

      {/* Mobile Carousel Navigation */}
      <div className="2xl:hidden w-full  pt-[20px] border-t border-t-[#F0F0F0] ">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={false}
          infinite={false}
        >
          {navItems.map((item, index) => (
            <div key={item.slug} className="text-center">
              <Link
                href={`/${lng}/services/${item.slug}`}
                className={`text-[15px] pb-[10px] font-semibold ${
                  activeNav === item.slug ? "text-violet100" : "text-titleDark"
                }`}
                onClick={() => handleSelect(item.slug)}
              >
                {item.name[lng]}
              </Link>
              {activeNav === item.slug && (
                <span
                  ref={(el) => (spanRefs.current[index] = el)} // Ref for span element
                  className="block w-[80%] h-[5px] mt-[20px] bg-violet100 mx-auto rounded-t-[5px]"
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Navigation;
