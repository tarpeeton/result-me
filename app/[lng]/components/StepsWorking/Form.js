'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { createService } from '../../lib/api/api'
import { FaCheckCircle } from 'react-icons/fa'
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material'
import { useParams } from 'next/navigation'
import { useCustomTranslation } from '@/app/i18n/client'

const Form = () => {
	const { lng } = useParams()
	const { t } = useCustomTranslation(lng, 'steps')

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		service: '',
		comment: '',
	})

	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await createService(formData)
			setIsSubmitted(true)
			setFormData({
				name: '',
				phone: '',
				service: '',
				comment: '',
			})
		} catch (error) {
			console.error('Error submitting form:', error)
		}
	}

	const handleCloseSuccessModal = () => {
		setIsSubmitted(false)
	}

	return (
		<div
			className='relative mx-[16px] mt-[100px]  mdl:mt-[150px] rounded-[30px] bg-cover bg-no-repeat px-5 py-8 bg-[#161616] bg-opacity-[90%] 3xl:px-[70px] 3xl:flex 3xl:flex-row 3xl:py-[80px] 3xl:justify-between 2xl:rounded-[100px] overflow-hidden z-0'
			style={{
				backgroundImage: `url(https://ucarecdn.com/d1dc5f20-760a-44db-a051-fe0050d6c706/-/preview/999x497/)`,
			}}
		>
			<div className='absolute top-0 right-0 rounded-[30px] 2xl:rounded-[100px] z-0'>
				<Image
					width={400}
					height={400}
					src='https://ucarecdn.com/74cec222-166d-4b2a-a08d-a2dffb1a8d80/-/preview/867x810/'
					alt='revTop'
					className='rounded-[30px] opacity-[40%]'
				/>
			</div>

			<div className='flex flex-col w-full 2xl:w-[50%]'>
				<p className='text-[28px] text-white font-bold relative z-[99999] mb-6 mdl:text-[50px] mdl:mb-[40px] '>
					{t('application_title')}
				</p>
				<p className='text-[18px] text-white font-bold relative z-[99999] mb-6 mdl:text-[25px] w-[100%] mdl:mb-[40px] 3xl:w-[80%]'>
					{t('application_subtitle')}
				</p>
			</div>

			<form
				className='z-[99] relative 3xl:w-[50%] 3xl:justify-center 3xl:flex 3xl:flex-col'
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					name='name'
					placeholder={t('placeholder_name')}
					value={formData.name}
					onChange={handleChange}
					required
					className='w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]'
				/>
				<input
					type='text'
					name='phone'
					placeholder={t('placeholder_phone')}
					value={formData.phone}
					onChange={handleChange}
					required
					className='w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]'
				/>
				<select
					name='service'
					value={formData.service}
					onChange={handleChange}
					required
					className='w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]'
				>
					<option value='' disabled>
						{t('select_service')}
					</option>
					<option value='Разработка сайтов'>{t('service_1')}</option>
					<option value='Разработка Telegram-ботов'>
						{t('service_2')}
					</option>
					<option value='SMM'>{t('service_3')}</option>
					<option value='SEO'>{t('service_4')}</option>
					<option value='Запуск рекламы'>{t('service_5')}</option>
					<option value='Брендинг'>{t('service_6')}</option>
					<option value='Фирменный стиль'>{t('service_7')}</option>
				</select>
				<input
					type='text'
					name='comment'
					placeholder={t('placeholder_comment')}
					value={formData.comment}
					onChange={handleChange}
					className='w-full p-4 rounded-[15px] bg-[#16161680] border border-[#5A5A5A] text-[#fff] placeholder-[#7B7B7B] text-[12px] mdl:text-[20px] mb-[12px] mdl:mb-[19px]'
				/>
				<button
					type='submit'
					className='w-full p-4 rounded-[100px] bg-[#7B72EB] text-white font-bold text-[14px] hover:bg-opacity-90 transition duration-300 mdl:py-[20px] mdl:px-[30px] mdl:w-[40%] mdl:mt-[40px] mdl:text-[18px] 3xl:w-[60%] mt-[20px]'
				>
					{t('submit_button')}
				</button>
			</form>

			{isSubmitted && (
				<Dialog
					open={isSubmitted}
					onClose={handleCloseSuccessModal}
					fullWidth
					className='z-[999]'
					PaperProps={{
						sx: {
							maxWidth: '460px',
							borderRadius: { xs: '20px', mdl: '30px' },
							padding: { xs: '2px 20px', mdl: '30px 25px' },
							zIndex: 999,
						},
					}}
				>
					<DialogContent
						sx={{
							textAlign: 'center',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							zIndex: 999,
						}}
					>
						<FaCheckCircle
							style={{
								color: '#7B72EB',
								fontSize: '80px',
								marginBottom: '16px',
							}}
						/>
						<h2
							style={{
								fontSize: '20px',
								fontWeight: 'bold',
								marginBottom: '8px',
							}}
						>
							{t('success_title')}
						</h2>
						<p style={{ fontSize: '16px', color: 'gray', marginTop: '8px' }}>
							{t('success_message')}
						</p>
					</DialogContent>
					<DialogActions sx={{ width: '100%', zIndex: 99999 }}>
						<Button
							onClick={handleCloseSuccessModal}
							sx={{
								width: '90%',
								fontSize: { xs: '14px', mdl: '18px' },
								mx: 'auto',
								borderRadius: '100px',
								py: '20px',
								fontWeight: 'bold',
								px: '30px',
								backgroundColor: '#7B72EB',
								color: 'white',
							}}
						>
							{t('ok_button')}
						</Button>
					</DialogActions>
				</Dialog>
			)}

			<div className='absolute bottom-0 left-0 z-0'>
				<Image
					width={400}
					height={400}
					src='https://ucarecdn.com/fe33ea4c-9361-44a1-8702-ef9372cf4c7f/-/preview/1000x731/'
					alt='revBottom'
					className='rounded-[30px] opacity-[40%]'
				/>
			</div>
		</div>
	)
}

export default Form
