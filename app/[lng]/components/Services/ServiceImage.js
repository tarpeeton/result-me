"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { serviceImageData } from "@/constants/service/serviceImage";

const ServiceImage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { slug, lng } = useParams();

  useEffect(() => {
    const filter = serviceImageData.filter((item) => item.slug === slug);
    setFilteredData(filter);
  }, [slug]);

  const formatText = (text) => {
    return text.split("\n").map((str, index) => (
      <span key={index}>
        {str}
        <br />
      </span>
    ));
  };

  const getOrderClass = (i) => {
    return i % 2 === 0 ? "mdl:order-[2] 2xl:order-[-1]" : "mdl:order-[-1]";
  };
  const scrollToCostCard = () => {
	const element = document.getElementById("cost-card");
	if (element) {
	  element.scrollIntoView({ behavior: "smooth" });
	}
  };
  

  return (
    <section className="mt-[20px] mdl:mt-[20px] 3xl:mt-[25px] rounded-[30px] mdl:rounded-[40px] flex flex-col 3xl:flex-row py-[30px] px-[24px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] bg-white mx-[16px] mdl:mx-[20px] 3xl:mx-[30px]">
      {filteredData.map((data, i) => (
        <div
          key={i}
          className={`${
            i !== serviceImageData.length - 1 ? "mb-[50px] mdl:mb-[80px]" : ""
          } flex flex-col mdl:flex-row mdl:justify-between 2xl:w-[50%] 2xl:flex-col 2xl:justify-normal`}
        >
          <Image
            src={data.img}
            quality={100}
            width={300}
            height={300}
            className={`w-[50%] ${getOrderClass(
              i
            )} mdl:w-[35%] mdl:transform mdl:-scale-x-100 2xl:h-[230px] 2xl:transform 2xl:scale-x-100 2xl:w-[50%]`}
            alt={data.img}
          />
          <div className="mdl:w-[60%] 2xl:w-[90%] 2xl:mt-[30px]">
            <h1
              className={`text-titleDark font-bold  2xl:min-h-[60px] text-[23px] mdl:text-[40px] mt-[15px] ${
                i === 1 ? "mdl:w-[50%]" : ""
              }`}
            >
              {formatText(data.title[lng])}
            </h1>
            <p className="font-robotoFlex text-[15px] 2xl:min-h-[120px] text-titleDark font-normal mt-[12px] mdl:text-[20px] mdl:mt-[25px]">
              {formatText(data.subtitle[lng])}
            </p>
            <button onClick={scrollToCostCard}  className="text-violet100 text-[15px] font-bold mt-2 mdl:mt-3 ">
              {i === 0 || i === 1
                ? lng === "ru"
                  ? "Подробнее"
                  : lng === "uz"
                  ? "Batafsil"
                  : "More details"
                : lng === "ru"
                ? "А еще.."
                : lng === "uz"
                ? "Learn more"
                : "And also..."}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceImage;
