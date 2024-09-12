'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCustomTranslation } from '../../../i18n/client'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai' // Иконка для закрытия
import { GrLinkNext } from 'react-icons/gr' // Иконка для стрелки
import { BsFillTelephoneFill } from 'react-icons/bs'
import logo from '@/public/svg/logoSVG.svg'
import footerLogo from '@/public/svg/footerLogo.svg'
import Link from 'next/link'
import { languages, cookieName } from '../../../i18n/settings'
import { useCookies } from 'react-cookie'
import CustomSelect from './CustomSelect' // Импортируем кастомный селект
import { usePathname } from 'next/navigation'
import ServiceModal from '../Modal/SeriviceModal'



const Header = ({ lng }) => {
	const { t } = useCustomTranslation(lng, 'header')
	const [cookies, setCookie] = useCookies([cookieName])
	const [isMenuOpen, setIsMenuOpen] = useState(false) // Состояние для управления открытием/закрытием меню
	const pathname = usePathname()

	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
	  setIsModalOpen(true);
	};
  
	// Close modal function
	const closeModal = () => {
	  setIsModalOpen(false);
	};
	// Check if it's the main page by checking if the pathname is exactly `/${lng}`
	const isMainPage = pathname === `/${lng}`

	const handleLanguageChange = newLng => {
		setCookie(cookieName, newLng, { path: '/' })

		const pathArray = window.location.pathname.split('/')

		if (languages.includes(pathArray[1])) {
			pathArray[1] = newLng
		} else {
			pathArray.unshift(newLng)
		}

		const newPath = pathArray.join('/')
		window.location.href = newPath
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen) // Открыть или закрыть меню
	}

	return (
		<div
			className={`w-full flex justify-between px-[20px] py-[16px] 
            ${isMainPage ? 'bg-violet100' : 'bg-white'}`} // Зависимость от флага isMainPage
		>
			<div className='hidden 2xl:flex items-center gap-[25px] 4xl:gap-[40px]'>
				<Link
					href='/services'
					className={`font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('uslugi')}
				</Link>
				<Link
					href='/cases'
					className={`font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('keysi')}
				</Link>
				<Link
					href='/blog'
					className={`font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('blog')}
				</Link>
				<Link
					href='/about'
					className={`font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('about')}
				</Link>
				<button
				onClick={openModal}
					className={`font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('getInfo')}
				</button>
			</div>

			{isMenuOpen && (
				<div className='absolute top-[70px] left-0 w-full h-[100%] bg-white z-[99999] flex flex-col  space-y-8 text-2xl'>
					<Link
						href='/services'
						className='flex w-full justify-between items-center flex-row px-[20px] py-[20px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('uslugi')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</Link>
					<Link
						href='/cases'
						className='flex w-full justify-between items-center flex-row px-[20px] py-[20px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('keysi')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</Link>

					<Link
						href='/blog'
						className='flex w-full justify-between items-center flex-row px-[20px] py-[20px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('blog')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</Link>

					<Link
						href='/about'
						className='flex w-full justify-between items-center flex-row px-[20px] py-[20px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('about')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</Link>

					<button
						onClick={openModal
							}	
						className='flex w-full justify-between items-center flex-row px-[20px] py-[20px] border-b-[1px] border-[#F0F0F0]'
					>
						<p className='font-semibold text-[20px] leading-[23px] mdl:text-[25px] text-titleDark hover:text-titleDark'>
							{t('getInfo')}
						</p>
						<GrLinkNext className='text-titleDark' />
					</button>
				</div>
			)}
				<ServiceModal isOpen={isModalOpen} onClose={closeModal}/>

			<Link href='/'>
				<Image
					src={isMainPage ? footerLogo : logo}
					width={130}
					quality={100}
					height={40}
					alt='Logo'
				/>
			</Link>

			<div className='flex items-center gap-3'>
				<div className='hidden 2xl:flex'>
					<button
						className={`w-[50px] h-[50px] border-[1px] border-[white] rounded-[100%] flex items-center justify-center ${
							isMainPage ? 'bg-inherit' : 'bg-selectBg'
						}`}
					>
						<BsFillTelephoneFill
							className={`${isMainPage ? 'text-white' : 'text-violet100'}`}
						/>
					</button>
				</div>

					<button onClick={openModal} className='bg-violet100 hidden mdx:block w-[230px] h-[50px] border rounded-[30px]'>
					<p className='font-bold text-white100 text-[16px]'>{t('getInfo')}</p>
				</button>

				<div className='flex 3xl:w-[150px]  3xl:h-[50px]'>
					<CustomSelect
						value={lng}
						onChange={handleLanguageChange}
						options={[
							{ value: 'ru', label: 'Ру' },
							{ value: 'uz', label: 'Uz' },
							{ value: 'en', label: 'En' },
						]}
					/>
				</div>
				<div className='flex 2xl:hidden items-center'>
					<button onClick={toggleMenu} className='text-3xl'>
						{isMenuOpen ? (
							<AiOutlineClose
								className={`${isMainPage ? 'text-white' : 'text-black'}`}
							/>
						) : (
							<RxHamburgerMenu
								className={`${isMainPage ? 'text-white' : 'text-black'}`}
							/>
						)}
						{/* Меняем иконку в зависимости от состояния */}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
