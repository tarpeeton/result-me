"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useCustomTranslation } from "../../../i18n/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";
import Link from "next/link";
import caseDesckription from "@/public/images/Vector.png";

const caseData = [
  {
    id: 2,
    banner: {
      title: "MRJ Trade",
      shortDescription: "Сайт SEO Брендинг Реклама",
      photo:
        "https://ucarecdn.com/581a982e-f1c1-44c1-8dd4-1862300a3e0c/-/preview/720x450/",
      slug: "mrj-trade",
    },
  },
  {
    id: 3,
    banner: {
      title: "Prime medical center",
      shortDescription: "SMM Сайт",
      photo:
        "https://ucarecdn.com/3d44d91c-b27b-41a0-9eb5-a02d51e18ad0/-/preview/720x450/",
      slug: "prime-medical-center",
    },
  },
  {
    id: 4,
    banner: {
      title: "Dr Odil Alisherovich",
      shortDescription: "Сайт SMM ",
      photo:
        "https://ucarecdn.com/3821b6ff-68bf-49a0-95a1-3a97a2b24367/-/preview/720x450/",
      slug: "dr-odil-alisherovich",
    },
  },
];

const Cases = () => {
  const { lng } = useParams();
  const { t } = useCustomTranslation(lng, "case");

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Adjust the autoplay speed
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className=" mdl:mt-[100px] 2xl:mt-[200px]">
      {/* Case Title */}
      <div className="flex flex-col p-[24px] w-full h-full">
        <h5 className="text-[28px] mdl:text-[50px] 3xl:text-[60px] font-bold">
          {t("case_title")}
        </h5>
      </div>
      {/* Slider Section */}
      <div className="2xl:mt-[60px] mdl:max-h-[500px] 4xl:max-h-[900px]">
        <Slider {...settings} className="w-full cursor-pointer">
          {/* Slides */}
          {caseData.map((item) => (
            <div
              key={item.id}
              className="w-full mt-[20px] slg:max-w-[99%] 6xl:max-w-[99%]"
            >
              <Link href={`/cases/${item.banner.slug}`} passHref>
                <div>
                  <Image
                    src={item.banner.photo}
                    width={740}
                    height={450}
                    quality={100}
                    alt={`${item.banner.title} banner`}
                    className="object-contain w-full h-full"
                  />
                  <div className="mt-[20px] 3xl:mt-[25px] flex flex-col gap-[4px]">
                    <p className="text-[20px] font-semibold  mdx:text-[28px] 4xl:text-[35px]">
                      {item.banner.title}
                    </p>
                    <p className="text-[14px] text-violet100 mdx:text-[18px] font-semibold flex items-center flex-wrap">
                      {/* Replace spaces in description with an image */}
                      {item.banner.shortDescription
                        .split(" ")
                        .map((word, index) => (
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
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <Link
        href="/cases"
        className="mt-[40px] mdx:mt-[60px] w-[175px] h-[50px] px-[30px] py-[20px] mx-auto rounded-[100px] bg-violet100 flex items-center justify-center xl:mt-[60px] 3xl:mt-[100px] 4xl:w-[300px] 4xl:h-[62px] 4xl:mt-[60px] 2xl:w-[250px]"
      >
        <p className="text-white font-semibold text-[14px] 4xl:text-[18px]">
          {t("case_all")}
        </p>
      </Link>
    </div>
  );
};

export default Cases;
