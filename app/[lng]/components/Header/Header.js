"use client";

import { useState } from "react";
import Image from "next/image";
import { useCustomTranslation } from "../../../i18n/client";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "@/public/svg/logoSVG.svg";
import footerLogo from "@/public/svg/footerLogo.svg";
import Link from "next/link";
import CustomSelect from "./CustomSelect";
import { usePathname } from "next/navigation";
import ServiceModal from "../Modal/SeriviceModal";
import { GB, RU, UZ } from "country-flag-icons/react/3x2";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
const Header = ({ lng }) => {
  const { t } = useCustomTranslation(lng, "header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const isModalOpen2Handler = () =>  setIsModalOpen2(true)
  const closeModal2 = () => setIsModalOpen2(false)
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Check if it's the main page by checking if the pathname is exactly `/${lng}`
  const isMainPage = pathname === `/${lng}` || pathname === `/${lng}/steps-working`;

  // Current language code
  const currentLanguage = lng;

  const handleLanguageChange = (newLng) => {
    // Set the cookie with the new language code

    const pathArray = window.location.pathname.split("/");

    // List of supported language codes
    const supportedLanguages = ["ru", "uz", "en"];

    if (supportedLanguages.includes(pathArray[1])) {
      // Replace the language code in the URL
      pathArray[1] = newLng;
    } else {
      // Insert the new language code at the beginning
      pathArray.unshift(newLng);
    }

    const newPath = pathArray.join("/");
    window.location.href = newPath;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full slg:flex slg:items-center flex justify-between px-[20px] z-[999] py-[16px] 
                ${isMainPage ? "bg-violet100" : "bg-white"}`}
    >
      <div className="hidden 2xl:flex items-center gap-[25px] 4xl:gap-[40px] xl:w-[30%] 4xl:w-[25%]">
        <Link
          href="/services"
          className={`font-montserrat font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
            isMainPage ? "text-white hover:text-titleDark" : "text-titleDark"
          }`}
        >
          {t("uslugi")}
        </Link>
        <Link
          href="/cases"
          className={`font-montserrat font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
            isMainPage ? "text-white hover:text-titleDark" : "text-titleDark"
          }`}
        >
          {t("keysi")}
        </Link>
        <Link
          href="/blog"
          className={`font-montserrat font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
            isMainPage ? "text-white hover:text-titleDark" : "text-titleDark"
          }`}
        >
          {t("blog")}
        </Link>
        <Link
          href="/about"
          className={`font-montserrat font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
            isMainPage ? "text-white hover:text-titleDark" : "text-titleDark"
          }`}
        >
          {t("about")}
        </Link>
      </div>
      {/* MOBILE NAVIGATION */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full h-[100%] bg-white z-[999] flex flex-col text-2xl">
          <a
            href="/services"
            className="flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]"
          >
            <p className="font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark">
              {t("uslugi")}
            </p>
            <GrLinkNext className="text-titleDark" />
          </a>
          <a
            href="/cases"
            className="font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]"
          >
            <p className="font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark">
              {t("keysi")}
            </p>
            <GrLinkNext className="text-titleDark" />
          </a>

          <a
            href="/blog"
            className="font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]"
          >
            <p className="font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark">
              {t("blog")}
            </p>
            <GrLinkNext className="text-titleDark" />
          </a>

          <a
            href="/about"
            className="font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]"
          >
            <p className="font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark">
              {t("about")}
            </p>
            <GrLinkNext className="text-titleDark" />
          </a>

          <div
            className="font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0] z-[999]"
          >
            <Link href='tel:+998905092562' className="font-semibold text-[14px] leading-[23px] mdl:text-[25px] text-white100 bg-violet100 flex flex-row rounded-full py-[20px] px-[10px]">
            Позвонить <BsFillTelephoneOutboundFill className='ml-[10px]'/>
            </Link>
            <Link href='https://t.me/Result_man' className="font-semibold text-[14px] leading-[23px] mdl:text-[25px] text-white100 bg-violet100 flex flex-row rounded-full py-[20px] px-[10px] items-center justify-center">
            Написать <FaTelegramPlane  className='ml-[10px]'/>
            </Link>
          
          </div>
        </div>
      )}
      <a href="/" className='h-[45px]  slg:h-[55px]'>
        <Image
          src={isMainPage ? footerLogo : logo}
          width={130}
          quality={100}
          height={45}
          alt="Logo"
          className='h-full'
        />
      </a>
      <div className="flex items-center gap-3 h-[40px]">
        <div className="hidden 2xl:flex">
          <Link
            href="tel:++998905092562"
            className={`font-montserrat w-[50px] h-[50px] border-[1px] border-[white] rounded-[100%] flex items-center justify-center ${
              isMainPage ? "bg-inherit" : "bg-selectBg"
            }`}
          >
            <BsFillTelephoneFill
              className={`${isMainPage ? "text-white" : "text-violet100"}`}
            />
          </Link>
        </div>

        <button
          onClick={openModal}
          className="bg-violet100 hidden mdx:block w-[230px] h-[50px] border rounded-[30px] mdl:h-[49px]"
        >
          <p className="font-robotoFlex font-bold text-white100 text-[16px]">
            {t("getInfo")}
          </p>
        </button>
        <ServiceModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="font-robotoFlex flex mdl:h-[49px]   3xl:h-[50px]">
          <CustomSelect
            value={currentLanguage}
			      main={isMainPage}
            onChange={handleLanguageChange}
            options={[
              {
                value: "ru", // English language code
                label: (
                  <>
                   Ру
                  </>
                ),
              },
              {
                value: "uz", // English language code
                label: (
                  <>
                     O'z
                  </>
                ),
              },
              {
                value: "en", // English language code
                label: (
                  <>
                    En
                  </>
                ),
              },
            ]}
          />
        </div>
        {isModalOpen2 && (
          <ServiceModal isOpen={isModalOpen2} onClose={closeModal2}/>
        )}
        <div className="flex 2xl:hidden items-center justify-center rounded-full border border-[#F0F0F0] py-[10px] px-[10px] mdl:py-[12px] mdl:px-[12px] mdl:h-[49px]">
  <button onClick={toggleMenu}  className="text-[22px] flex justify-center items-center w-full h-full">
    {isMenuOpen ? (
      <AiOutlineClose
        className={`font-montserrat ${isMainPage ? "text-white" : "text-black"}`}
      />
    ) : (
      <RxHamburgerMenu
        className={`${isMainPage ? "text-white" : "text-[#010101]"}`}
      />
    )}
  </button>
</div>

      </div>
    </div>
  );
};

export default Header;
