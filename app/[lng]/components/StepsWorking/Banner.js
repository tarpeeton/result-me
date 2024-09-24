import step from '@/public/images/step/step.png'
import down from '@/public/images/step/down.svg'
import Image from 'next/image'

const Banner = () => {
	return (
	  <div className='bg-violet100 px-[16px] py-[40px] w-full  4xl:py-[80px] 2xl:px-[30px] 2xl:py-[40px] h-screen'>
		  <div className='flex flex-col'>
				<h1 className='text-white100 text-[35px] font-bold font-montserrat w-[80%] mdl:text-[50px] 2xl:text-[60px] '>КАК МЫ РАБОТАЕМ</h1>
				<p className='text-white100 opacity-80 mt-[15px] text-[15px] font-semibold mdl:text-[20px] 2xl:w-[50%] 4xl:w-[40%]'>Каждый проект начинается с продуманной стратегии и четкого плана действий. Мы уделяем внимание каждому этапу, чтобы гарантировать успех и рост вашего бизнеса</p>
		  </div>
		  <div className='flex flex-col mt-[40px] mdl:flex-row mdl:items-end mdl:justify-between 2xl:mt-[0] 3xl:h-[400px]'>
			<div className='flex w-[80px] h-[80px] items-center justify-center rounded-full border border-white'>
			<Image src={down} width={40} quality={100} height={40} className='object-contain w-[24px] h-[24px]'/>
			</div>
			<div className='flex justify-end items-center mt-[120px] pr-[-20px]'>
			<Image src={step} width={400} quality={100} height={400} className='object-cover w-[250px] 2xl:w-[300px]'/>
			</div>
		  </div>
	  </div>
	);
  };
  
  export default Banner;