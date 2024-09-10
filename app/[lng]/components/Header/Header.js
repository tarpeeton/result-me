'use client'
import Image from 'next/image'
import { useCustomTranslation } from '../../../i18n/client'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '@/public/svg/logoSVG.svg'
import footerLogo from '@/public/svg/footerLogo.svg'
import { useState, useEffect } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Select } from 'antd'
import Link from 'next/link'
import { languages, cookieName } from '../../../i18n/settings'
import { useCookies } from 'react-cookie'

const { Option } = Select

const Header = ({ lng }) => {
	const { t } = useCustomTranslation(lng, 'header')
	const [cookies, setCookie] = useCookies([cookieName])
	const [navbar, setNavbar] = useState(false)
	const [isMainPage, setIsMainPage] = useState(false) // State to track if it's the main page

	
	useEffect(() => {
		const currentPath = window.location.pathname
		
		// Check if the current path is the main page
		setIsMainPage(currentPath === `/${lng}`)
	}, [])

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

	return (
		<div
			className={`w-full flex justify-between px-[20px] py-[16px] 
			${isMainPage ? 'bg-violet100' : 'bg-white'}`} // Conditionally apply background color
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
					href='/keysi'
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
				<Link
					href='/getInfo'
					className={`font-semibold text-[16px] leading-[23px] 4xl:text-[18px]  ${
						isMainPage ? 'text-white hover:text-titleDark' : 'text-titleDark'
					}`}
				>
					{t('getInfo')}
				</Link>
			</div>

			<div>
				<Image
					src={isMainPage ? footerLogo : logo}
					width={130}
					quality={100}
					height={40}
					alt='Picture of the author'
				/>
			</div>

			<div className='flex items-center gap-3'>
				<div className='hidden 2xl:flex '>
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

				<button className='bg-violet100 hidden mdx:block w-[230px] h-[50px] border rounded-[30px]'>
					<p className='font-bold text-white100 text-[16px]'>{t('getInfo')}</p>
				</button>

				<div
					className='flex items-center justify-center 2xl:hidden'
					onClick={() => setNavbar(!navbar)}
				>
					<button className='w-[40px] h-[40px] border-[1px] border-[white] rounded-[100%] flex items-center justify-center'>
						<RxHamburgerMenu className='text-white100' />
					</button>
				</div>

				<div className='hidden 2xl:flex w-[90px] h-[50px]'>
					<Select
						value={lng}
						onChange={handleLanguageChange}
						className={`w-[80px] h-[50px] ${isMainPage ? 'bg-[#9A93F6]' : 'bg-selectBg' } rounded-full text-seletcText font-bold text-center`}
						bordered={false}
						dropdownClassName='custom-dropdown'
					>
						<Option value='ru' className='text-seletcText'>
							Ру
						</Option>
						<Option value='uz' className='text-seletcText'>
							Uz
						</Option>
						<Option value='en' className='text-seletcText'>
							En
						</Option>
					</Select>
				</div>
			</div>

			{navbar ? <div>Salom</div> : null}
		</div>
	)
}

export default Header
