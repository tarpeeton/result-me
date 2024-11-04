'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCustomTranslation } from '../../../i18n/client'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { GrLinkNext } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import logo from '@/public/svg/logoSVG.svg'
import footerLogo from '@/public/svg/footerLogo.svg'
import Link from 'next/link'
import CustomSelect from './CustomSelect'
import { usePathname } from 'next/navigation'
import ServiceModal from '../Modal/SeriviceModal'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'

const Header = ({ lng }) => {
	const { t } = useCustomTranslation(lng, 'header')
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const ariaLabel =
    lng === 'ru'
      ? 'Позвонить по номеру +99850 900 47 38'
      : lng === 'uz'
      ? 'Raqam orqali qo\'ng\'iroq qiling: +99850 900 47 38'
      : 'Call number +99850 900 47 38';
	const [isModalOpen2, setIsModalOpen2] = useState(false)
	const closeModal2 = () => setIsModalOpen2(false)
	const openModal = () => {
		setIsModalOpen(true)
	}

	// Close modal function
	const closeModal = () => {
		setIsModalOpen(false)
	}

	// Check if it's the main page by checking if the pathname is exactly `/${lng}`
	const isMainPage =
		pathname === `/${lng}` || pathname === `/${lng}/steps-working`

	// Current language code
	const currentLanguage = lng

	const handleLanguageChange = (newLng) => {
		const pathArray = window.location.pathname.split('/');
	  
		// List of supported language codes
		const supportedLanguages = ['ru', 'uz', 'en'];
	  
		// Remove existing language code from the path if exists
		if (supportedLanguages.includes(pathArray[1])) {
		  pathArray.splice(1, 1); // Remove the existing language code
		}
	  
		// Add new language code at the beginning of the path
		pathArray.unshift(newLng);
	  
		// Build the new path and redirect
		const newPath = pathArray.filter(Boolean).join('/'); // Ensure there are no empty segments
	  
		// Redirect to the new path
		window.location.href = `/${newPath}`;
	  };
	  
	  

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div
			className={`w-full slg:flex slg:items-center flex justify-between px-[20px] sticky top-0 z-[99999] py-[16px] 
                ${isMainPage ? 'bg-violet100' : 'bg-white'}`}
		>
			<div className='hidden 2xl:flex items-center gap-[25px] 4xl:gap-[40px] xl:w-[40%] 4xl:w-[25%]'>
				<Link
					href={`/${lng}/services`}
					className={`font-montserrat font-semibold text-[18px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('uslugi')}
				</Link>
				<Link
					href={`/${lng}/cases`}
					className={`font-montserrat font-semibold text-[18px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('keysi')}
				</Link>
				<Link
					href={`/${lng}/blog`}
					className={`font-montserrat font-semibold text-[18px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('blog')}
				</Link>
				<Link
					href={`/${lng}/about`}
					className={`font-montserrat font-semibold text-[18px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('about')}
				</Link>
				<Link
					href={`/${lng}/steps-working`}
					className={`font-montserrat font-semibold text-[18px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('steps')}
				</Link>
			</div>
			{/* MOBILE NAVIGATION */}
			{isMenuOpen && (
				<div className='absolute top-[70px] left-0 w-full h-[100vh] bg-white z-[99999] flex flex-col text-2xl'>
					<a
						href={`/${lng}/services`}
						className='flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('uslugi')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</a>
					<a
						href={`/${lng}/cases`}
						className='font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('keysi')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</a>

					<a
						href={`/${lng}/blog`}
						className='font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('blog')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</a>

					<a
						href={`/${lng}/about`}
						className='font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('about')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</a>
					<a
						href={`/${lng}/steps-working`}
						className='font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('steps')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</a>

					<div className='font-montserrat flex w-full justify-between items-center flex-row px-[20px] py-[28px] border-b-[1px] border-[#F0F0F0] z-[99999]'>
						<Link
							href='tel:+998509004738'
							className='font-semibold text-[12px] leading-[23px] mdl:text-[23px] text-white100 bg-violet100 flex flex-row rounded-full py-[15px] px-[12px] items-center justify-center w-[45%]'
						>
							{t('call')} <BsFillTelephoneOutboundFill className='ml-[10px]' />
						</Link>
						<Link
							href='https://t.me/Result_man'
							className='font-semibold text-[12px] leading-[23px] mdl:text-[25px] text-white100 bg-violet100 flex flex-row rounded-full py-[15px] px-[12px] items-center justify-center w-[45%]'
						>
							{t('message')} <FaTelegramPlane className='ml-[10px]' />
						</Link>
					</div>
				</div>
			)}
			<a href='/' className='h-[45px]  slg:h-[55px]'>
				<Image
					src={isMainPage ? footerLogo : logo}
					width={130}
					quality={100}
					height={45}
					alt='Logo'
					className='h-full'
				/>
			</a>
			<div className='flex items-center gap-3 h-[40px] 3xl:w-[38%] 3xl:justify-end'>
				<div className='hidden 2xl:flex'>
					<Link
						href='tel:+998509004738'
						aria-label={ariaLabel}
						className={`font-montserrat w-[50px] h-[50px] border-[1px] border-[white] rounded-[100%] flex items-center justify-center ${
							isMainPage ? 'bg-inherit' : 'bg-selectBg'
						}`}
					>
						<BsFillTelephoneFill
							className={`${isMainPage ? 'text-white' : 'text-violet100'}`}
						/>
					</Link>
				</div>

				<button
					onClick={openModal}
					className='bg-violet100 hidden mdx:block w-[230px] h-[50px] border rounded-[30px] mdl:h-[49px]'
				>
					<p className='font-robotoFlex font-bold text-white100 text-[16px]'>
						{t('getInfo')}
					</p>
				</button>
				<ServiceModal isOpen={isModalOpen} onClose={closeModal} />
				<div className='font-robotoFlex flex mdl:h-[49px]  3xl:h-[50px]'>
					<CustomSelect
						value={currentLanguage}
						main={isMainPage}
						onChange={handleLanguageChange}
						options={[
							{ value: 'ru', label: 'Ру', flag: 'fi fi-ru' }, // Russian flag
							{ value: 'uz', label: 'O\'z', flag: 'fi fi-uz' }, // Uzbek flag
							{ value: 'en', label: 'Eng', flag: 'fi fi-gb' }, // English flag
						]}
					/>
				</div>
				{isModalOpen2 && (
					<ServiceModal isOpen={isModalOpen2} onClose={closeModal2} />
				)}
				<div className='flex 2xl:hidden items-center justify-center rounded-full border border-[#F0F0F0] py-[10px] px-[10px] mdl:py-[12px] mdl:px-[12px] mdl:h-[49px]'>
					<button
						onClick={toggleMenu}
						className='text-[22px] flex justify-center items-center w-full h-full'
					>
						{isMenuOpen ? (
							<AiOutlineClose
								className={`font-montserrat ${
									isMainPage ? 'text-white' : 'text-black'
								}`}
							/>
						) : (
							<RxHamburgerMenu
								className={`${isMainPage ? 'text-white' : 'text-[#010101]'}`}
							/>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
