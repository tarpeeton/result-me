import Image from 'next/image';


import aboutUS from '@/public/images/aboutUS/aboutUS.png'
import Link from 'next/link'

const AboutUs = () => {
	return (
		<div className='rounded-[30px] bg-violet100 mdl:rounded-[60px] 2xl:rounded-[100px] px-[20px] py-[30px] w-full mt-[20px] mdl:mt-[25px] 2xl:mt-[30px]'>

			<div>
				<p className='text-[28px] text-white100 font-bold mdl:text-[50px]'>Result Agency — ваш путь к успеху</p>
			</div>
			<div>
				<span className='text-[14px] mdl:text-[18px] text-white100 font-medium'>
				Result Agency — это команда профессионалов, которые превращают идеи в результат. Мы специализируемся на комплексных маркетинговых решениях, направленных на рост вашего бизнеса. С Result Agency вы получаете не просто услуги, а партнера, который работает на ваш успех
				</span>
			</div>
			<div className=' rotate-[15%] overflow-hidden relative h-[160px] mt-[-90px]'>
				<Image className='absolute h-[160px] right-[-50px]' width={200} height={300} src={aboutUS} quality={100}/>
			</div>
			<div className='w-[80%] mx-auto bg-white rounded-[100px]  py-[20px] px-[30px] text-center '>
			<Link href='/about' className='  text-violet100 font-bold text-[14px] mdl:text-[18px] text-center bg-white100'>
				 Подробнее
			</Link>
			</div>
			
		</div>
	)
}


export default AboutUs;