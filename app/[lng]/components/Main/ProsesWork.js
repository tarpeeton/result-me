"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProsesWork = () => {
  const { lng } = useParams();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750, // Disable slider for screens smaller than 750px
        settings: "unslick",
      },
    ],
  };

  const t = (key) => {
    const translations = {
      processWork: {
        ru: "Процесс работы максимально понятный и открытый",
        uz: "Ish jarayoni maksimal darajada tushunarli va ochiq",
        en: "The work process is as transparent and understandable as possible",
      },
      workStages: {
        ru: "Этапы работы",
        uz: "Batafsil",
        en: "Work Stages",
      },
      workByContract: {
        ru: "РАБОТАЕМ ПО ДОГОВОРУ",
        uz: "SHARTNOMA BO‘YICHA ISHLAYMIZ",
        en: "WORKING UNDER CONTRACT",
      },
      workByContractDesc: {
        ru: "Все условия сотрудничества фиксируются в договоре для уверенности в надежности.",
        uz: "Hamkorlik shartlari ishonchlilik uchun shartnomada belgilangan.",
        en: "All collaboration terms are fixed in a contract to ensure reliability.",
      },
      approvePlans: {
        ru: "УТВЕРЖДАЕМ ПЛАНЫ",
        uz: "REJALARNI TASDIQLAYMIZ",
        en: "APPROVE PLANS",
      },
      approvePlansDesc: {
        ru: "Планы выполнения проекта утверждаются с заказчиком со сроками и ресурсами.",
        uz: "Loyihaning bajarilish rejalarini mijoz bilan muddatlar va resurslar bilan tasdiqlash.",
        en: "Project execution plans are approved with the client along with timelines and resources.",
      },
      provideReports: {
        ru: "ПРЕДОСТАВЛЯЕМ ОТЧЕТЫ",
        uz: "HISOBOTLARNI TAQDIM ETAMIZ",
        en: "PROVIDE REPORTS",
      },
      provideReportsDesc: {
        ru: "Ежемесячно отправляем отчеты по рекламным кампаниям и выполненным задачам.",
        uz: "Har oy reklama kampaniyalari va bajarilgan vazifalar bo‘yicha hisobotlarni yuboramiz.",
        en: "We send monthly reports on advertising campaigns and completed tasks.",
      },
      readMore: {
        ru: "Подробнее",
        uz: "Batafsil",
        en: "Read More",
      },
      processWorkColumn: {
        ru: "Процесс работы максимально чистый и прозрачный",
        uz: "Ish jarayoni maksimal darajada toza va shaffof",
        en: "The work process is as clean and transparent as possible",
      },
    };

    return translations[key][lng] || translations[key]["en"];
  };

  return (
    <section className="flex flex-col mt-[80px] gap-[10px]">
      {/* Slider for screens larger than 750px */}
      <div className="hidden slg:block w-full cursor-pointer">
        <Slider {...settings} className="w-full">
          {/* CARD 1 */}
          <Link
            href="/steps-working"
            className="w-full mdl:max-w-full 4xl:max-w-[50%] rounded-[30px] bg-violet100 p-[30px] pb-[26px] relative flex flex-col justify-between mdl:pl-[40px] mdl:rounded-[60px] mdl:pt-[50px] 2xl:max-w-[98%] 3xl:min-w-[98%] 2xl:min-h-[450px] 4xl:min-h-[600px]"
          >
            <div>
              <div className="mdl:w-[80%] 4xl:w-[100%]">
                <h5 className="text-[28px] mdl:text-[30px] text-white100 font-bold 4xl:text-[50px]">
                  {t("processWork")}
                </h5>
              </div>
              <div className="relative w-full mt-[100px] ">
                <div className="py-[20px]  mx-auto  px-[30px] rounded-[100px] bg-white text-center mdl:w-[300px] 4xl:w-[370px]">
                  <p className="text-[14px] font-bold text-violet100 mdl:text-[18px] 4xl:text-[20px]">
                    {t("workStages")}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* CARD 2 */}
          <Link
            href="/steps-working"
            className="w-full mdl:min-w-full 4xl:max-w-[50%] rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between xl:min-w-[90%] 2xl:max-w-[98%] 3xl:min-w-[98%] 2xl:min-h-[450px] 4xl:min-h-[600px]"
          >
            <div className="w-full h-full">
              <div className="w-[60%] mdl:w-[70%]">
                <p className="text-[23px] mdl:text-[35px] text-titleDark font-bold 4xl:text-[50px]">
                  {t("workByContract")}
                </p>
              </div>
              <div className="mt-[15px] mdl:text-[18px] w-[85%] mdl:mt-[40px]">
                <p className="text-[14px] mdl:text-[18px] text-[#454545] 4xl:text-[20px]">
                  {t("workByContractDesc")}
                </p>
              </div>
            </div>
          </Link>
          {/* CARD 3 */}
          <Link
            href="/steps-working"
            className="w-full 2xl:max-w-[98%] mdl:min-w-full 2xl:min-h-[450px] rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between xl:min-w-[90%] 2xl:min-w-[98%] 4xl:min-h-[600px]"
          >
            <div className="w-[60%]">
              <p className="text-[23px] mdl:text-[35px] text-titleDark font-bold 4xl:text-[50px]">
                {t("approvePlans")}
              </p>
            </div>
            <div className="mt-[15px] w-[85%] mdl:mt-[40px]">
              <p className="text-[14px] mdl:text-[18px] 4xl:text-[20px] text-[#454545]">
                {t("approvePlansDesc")}
              </p>
            </div>
          </Link>
          {/* CARD 4 */}
          <Link
            href="/steps-working"
            className="w-full 2xl:max-w-[98%] mdl:min-w-full 2xl:min-h-[450px] rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between xl:min-w-[90%] 2xl:min-w-[98%] 4xl:min-h-[600px]"
          >
            <div className="w-[60%]">
              <p className="text-[23px] mdl:text-[35px] text-titleDark font-bold 4xl:text-[50px]">
                {t("provideReports")}
              </p>
            </div>
            <div className="mt-[15px] w-[85%] mdl:mt-[40px]">
              <p className="text-[14px] mdl:text-[18px] 4xl:text-[20px] text-[#454545]">
                {t("provideReportsDesc")}
              </p>
            </div>
          </Link>
        </Slider>
      </div>
      {/* ============================================================================= */}
      {/* Column layout for screens smaller than 750px */}
      <div className="sm:flex sm:flex-col sm:gap-[20px] slg:hidden ">
        {/* CARD 1 */}
        <Link
          href="/steps-working"
          className="w-full rounded-[30px] bg-violet100 p-[30px] pb-[26px] flex flex-col justify-between "
        >
          <div>
            <p className="text-[28px] text-white100 font-bold">
              {t("processWorkColumn")}
            </p>
          </div>
          <div className="py-[20px] px-[30px] rounded-[100px] bg-white text-center mt-[51px]">
            <p className="text-[14px] font-bold text-violet100">
              {t("workStages")}
            </p>
          </div>
        </Link>
        {/* CARD 2 */}
        <Link
          href="/steps-working"
          className="w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between mdl:mt-[20px]"
        >
          <div className="w-[60%]">
            <p className="text-[23px] text-titleDark font-bold">
              {t("workByContract")}
            </p>
          </div>
          <div className="mt-[15px] w-[85%]">
            <p className="text-[14px] text-[#454545]">
              {t("workByContractDesc")}
            </p>
            <div className="w-full flex items-center justify-end">
              <div className="mt-[12px] text-violet100 text-[14px] text-end w-full">
                {t("readMore")}
              </div>
            </div>
          </div>
        </Link>
        {/* CARD 3 */}
        <Link
          href="/steps-working"
          className="w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between"
        >
          <div className="w-[60%]">
            <p className="text-[23px] text-titleDark font-bold">
              {t("approvePlans")}
            </p>
          </div>
          <div className="mt-[15px] w-[85%]">
            <p className="text-[14px] text-[#454545]">
              {t("approvePlansDesc")}
            </p>
            <div className="w-full flex items-center justify-end">
              <div className="mt-[12px] text-violet100 text-[14px] text-end w-full">
                {t("readMore")}
              </div>
            </div>
          </div>
        </Link>
        {/* CARD 4 */}
        <Link
          href="/steps-working"
          className="w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between"
        >
          <div className="w-[60%]">
            <p className="text-[23px] text-titleDark font-bold">
              {t("provideReports")}
            </p>
          </div>
          <div className="mt-[15px] w-[85%]">
            <p className="text-[14px] text-[#454545]">
              {t("provideReportsDesc")}
            </p>
            <div className="w-full flex items-center justify-end">
              <div className="mt-[12px] text-violet100 text-[14px] text-end w-full">
                {t("readMore")}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProsesWork;
