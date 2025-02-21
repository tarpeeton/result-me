"use client";
import { FaCheck } from "react-icons/fa";
import { useState, useEffect , useRef } from "react";
import ServicePriceModal from "../Modal/SericePrice";
import { useParams } from "next/navigation";
import { CostCardData } from "@/constants/cost/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';
import 'swiper/css';
import { GrNext , GrPrevious } from "react-icons/gr";

const CostCard = () => {
  const { slug, lng } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (slug && CostCardData[slug]) {
      setFilteredData(CostCardData[slug]);
    }
  }, [slug]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const openModal = (price, title) => {
    setSelectedPrice(price);
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPrice(null);
    setSelectedTitle(null);
  };

  return (
    <section id="cost-card" className="bg-white100  px-[24px] pt-[30px] rounded-[30px] flex flex-col 3xl:flex-col  3xl:p-[40px] mx-[16px] mt-[20px] 3xl:mx-[30px]">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-[21px] mdl:text-[50px] font-bold text-titleDark">
          {lng === "ru"
            ? "Стоимость услуг"
            : lng === "uz"
            ? "Xizmat Narxlari"
            : "Service Cost"}
        </h3>
        <div className="flex flex-row items-center gap-2">
            <button ref={prevRef}  className="rounded-full w-8 h-8  bg-violet100 text-white 2xl:w-16 2xl:h-16 flex items-center justify-center hover:bg-violet-900 transition-all duration-200 ease-in-out"><GrPrevious   className="2xl:w-4 2xl:h-4"/></button>
            <button ref={nextRef}  className="rounded-full w-8 h-8  bg-violet100 text-white 2xl:w-16 2xl:h-16 flex items-center justify-center hover:bg-violet-900 transition-all duration-200 ease-in-out"><GrNext  className="2xl:w-4 2xl:h-4" /></button>
        </div>
      </div>
      <div className="rounded-[30px] mt-[20px] relative">
        <Swiper
          loop={true}
          modules={[Autoplay , Navigation]}
          autoplay={{
            delay: 4300,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1420: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {filteredData.map((card, index) => (
            <SwiperSlide key={index} className="w-full relative">
              <div className="relative 2xl:min-h-[1100px] 2xl:h-[1150px] cursor-pointer   border px-[24px] py-[30px] border-[#F0F0F0] rounded-[30px] mt-[20px]  pb-[150px]">
                
                <div>
                  <p className="text-[20px] font-semibold 2xl:font-bold mdl:text-[30px] text-titleDark">
                    {card?.title[lng]}
                  </p>
                </div>
                <div className="mt-[20px]">
                  {card?.description &&
                    card?.description[lng].length > 0 &&
                    card?.description[lng]
                      .split("\n")
                      .map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-[15px] mdl:text-[18px] text-[#454545] font-normal font-robotoFlex"
                        >
                          {line}
                        </p>
                      ))}
                </div>

                <div className="h-[1px] w-full bg-[#F0F0F0] mt-[25px]" />
                <div className="flex flex-col mt-[25px] relative gap-[11px]">
                  {card?.services[lng].map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex flex-row gap-[12px] items-center"
                    >
                      <div className="rounded-[6px] flex items-center justify-center bg-violet100 bg-opacity-20 w-[30px] h-[30px]">
                        <FaCheck className="text-violet100" />
                      </div>
                      <div className="flex items-center w-[90%]">
                        <p className="text-[#010101] text-[15px] font-medium font-robotoFlex">
                          {service}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>



                <div className="h-[1px] w-full bg-[#F0F0F0] mt-[25px] mb-[40px]" />
                <button
                  onClick={() => openModal(card.price, card.title)} 
                  className="text-white text-center text-[15px] font-bold w-[90%] mx-auto py-[15px] 3xl:py-[24px] px-[20px] bg-violet100 rounded-[100px] mt-[7px] absolute 2xl:text-[18px] left-0 right-0 bottom-[20px]"
                >
                  {lng === "ru"
                    ? " Узнать цену"
                    : lng === "uz"
                    ? "Narxni Korish"
                    : "Find out the price"}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ServicePriceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        price={selectedPrice}
        serviceName={selectedTitle}
      />
    </section>
  );
};

export default CostCard;
