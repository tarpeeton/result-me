'use client'
import { useCustomTranslation } from '../../../i18n/client'
import { GrLinkNext } from 'react-icons/gr'
import logo from '@/public/svg/footerLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { LiaTelegramPlane } from 'react-icons/lia'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import ServiceModal from '../Modal/SeriviceModal'

const Footer = ({ lng }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	// Close modal function
	const closeModal = () => {
		setIsModalOpen(false)
	}

	const { t } = useCustomTranslation(lng, 'footer')

	return (
		<div className='flex flex-col bg-footerBgDark w-full'>
			<button
				onClick={openModal}
				className='bg-violet100 flex items-center py-[40px] px-[16px] gap-[40px] 2xl:gap-0 2xl:justify-between 2xl:px-[20px] 6xl:px-[20px] mdx:justify-between mdx:gap-0'
			>
				<h3 className='text-white100 text-[23px] font-bold 2xl:text-[40px] 6xl:text-[80px] mdx:text-[45px]'>
					{t('no_pasient')}
				</h3>
				<GrLinkNext className='text-white100 w-[40px] h-[40px] 2xl:w-[40px] mdx:w-[50px] mdx:h-[50px] 2xl:h-[40px] 6xl:w-[85px] 6xl:h-[85px]' />
			</button>
			<div className=' flex flex-col mt-[30px] px-[16px]'>
				<div className='lg:flex lg:flex-row lg:items-center  4xl:flex 4xl:flex-row '>
					{/* LOGO */}
					<div className='w-[140px] h-[55px] 3xl:w-[160px] 3xl:h-[60px]'>
						<Image
							src={logo}
							width={190}
							quality={100}
							height={100}
							alt='Picture of the author'
							className='object-cover'
						/>
					</div>

					<div className='mdx:flex mdx:flex-col lg:flex-row lg:w-[100%] lg:justify-between'>
						{/* SOCIALS LINKS */}
						<div className='flex flex-row items-center gap-[8px] mt-[10px] mdx:mt-[40px]'>
							<Link
							aria-label='instagram'
								href='https://www.instagram.com/result_med?igsh=MXQ3NnVncW4xbjBwMg=='
								className='bg-[#383838] w-[40px] h-[40px]  rounded-[100%] flex items-center justify-center mdx:w-[40px] mdx:h-[40px]'
							>
								<FaInstagram className='text-white100 text-[20px]' />
							</Link>
							<Link
							aria-label='telegram'
								href='https://t.me/result_med'
								className='bg-[#383838] w-[40px] h-[40px]  rounded-[100%] flex items-center justify-center mdx:w-[40px] mdx:h-[40px]'
							>
								<LiaTelegramPlane className='text-white100 text-[20px]' />
							</Link>
							<Link
							aria-label='facebook'
								href='https://www.facebook.com/people/Result-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3/61551538436032/'
								className='bg-[#383838] w-[40px] h-[40px]  rounded-[100%] flex items-center justify-center mdx:w-[40px] mdx:h-[40px]'
							>
								<FaFacebookF className='text-white100 text-[20px]' />
							</Link>
							<Link
							aria-label='Youtube'
								href='https://www.youtube.com/channel/UC7NUprxgJnTasokxaUFfbug'
								className='bg-[#383838] w-[40px] h-[40px]  rounded-[100%] flex items-center justify-center mdx:w-[40px] mdx:h-[40px]'
							>
								<BsYoutube className='text-white100 text-[20px]' />
							</Link>
						</div>

						<div className='mdx:flex mdx:flex-row mdx:gap-[60px] mdx:order-[-1] lg:ml-[200px] 3xl:ml-[230px]'>
							{/* TELEPHONE INFO */}
							<div className='flex flex-col mt-[40px] gap-[12px]'>
								<h4 className='text-white100 text-[18px] font-semibold mdx:text-[20px]'>
									{t('phone_title')}
								</h4>
								<div className='flex flex-col gap-[8px] mdl:gap-[10px] '>
									<a
										href='tel:+998905092562'
										className='text-titleDark20 text-[15px] font-medium mdx:text-[15px] hover:text-violet100'
									>
										+998 (90) 509-25-62
									</a>
									<a
										href='tel:+998900228073'
										className='text-titleDark20 text-[15px] font-medium mdx:text-[15px] hover:text-violet100'
									>
										+998 (90) 022-80-73
									</a>
								</div>
							</div>
							{/* ADDRESS INFO */}
							<div className='flex flex-col mt-[40px] gap-[12px]'>
								<h5 className='text-white100 font-semibold text-[18px] mdx:text-[20px]'>
									{t('address_title')}
								</h5>
								<div>
									<p className='text-[15px] font-medium text-titleDark20 mdx:text-[18px]'>
										{t('some_address')}
									</p>
									<Link
										href='https://maps.google.com/maps?q=41.351260,69.288984&ll=41.351260,69.288984&z=16'
										className='flex items-center gap-[6px] group'
										target='_blank'
										rel='noopener noreferrer'
									>
										<p className='text-violet100 text-[14px] font-bold mdx:text-[16px]'>
											{t('show_map')}
										</p>
										<GrLinkNext className='text-violet100 w-[20px] h-[20px] transition-transform duration-400 group-hover:translate-x-[6px]' />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* POLITIC */}
				<div className='flex flex-col border-t border-[#7B7B7B] mt-[40px] mdx:flex-row mdx:justify-between'>
					<div className='w-[200px] mt-[20px] mdx:w-[240px] mdx:mb-[20px] lg:w-[700px]'>
						<p className='text-titleDark50 text-[14px] mdx:text-[16px]'>
							{t('copyright')}
						</p>
					</div>
					<div className='mt-[20px] mb-[20px] mdx:flex mdx:items-center mdx:mt-0 mdx:mb-0'>
						<Link
							href='https://docs.google.com/document/d/1t0tpWRAT0-I_GExyBIWtVJgqbcs_oPiyCATfHHVcA5k/edit?pli=1'
							className='text-violet100 text-[14px] font-medium  mdx:text-[16px]'
						>
							{t('privacy')}
						</Link>
					</div>
				</div>
			</div>
			<ServiceModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
}

export default Footer
