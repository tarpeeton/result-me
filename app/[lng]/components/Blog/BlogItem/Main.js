import Image from 'next/image'
import SimilarNews from './SimilarNews'
import Links from './Links'

const data = {
	id: 0,
	slug: 'string',
	option: [
		{
			id: 0,
			title: {
				uz: 'Как социальные сети могут улучшить репутацию вашей компании',
				ru: 'Как социальные сети могут улучшить репутацию вашей компании',
				en: 'Как социальные сети могут улучшить репутацию вашей компании',
			},
			description: {
				uz: 'Lorem ipsum dolor sit amet consectetur. Vel a sit id venenatis vitae...',
				ru: 'Lorem ipsum dolor sit amet consectetur. Vel a sit id venenatis vitae...',
				en: 'Lorem ipsum dolor sit amet consectetur. Vel a sit id venenatis vitae...',
			},
			photo: {
				id: 0,
				url: 'https://ucarecdn.com/96e9e892-2635-46af-b227-44c75ed492d3/-/preview/603x343/', // Example URL
			},
			orderNum: 0,
		},
	],
	orderNum: 0,
	main: true,
	active: true,
}

const MainBlogItem = () => {
	return (
		<div className='bg-[#F8F8F8] 3xl:flex 3xl:flex-row 3xl:px-[30px]'>
			<div className='bg-white rounded-[30px] py-[24px] px-[16px] mdl:py-[40px] mdl:px-[20px] 3xl:mt-[70px] 3xl:flex 3xl:flex-col 3xl:w-[80%] 3xl:px-[138px] 3xl:py-[70px] mb-[60px] 3xl:mb-[120px]'>
				{/* Access the title from the first item in the option array */}
				<p className='text-[23px] font-bold mdl:text-[40px] 3xl:text-[45px] text-titleDark'>
					{data.option[0].title.ru}
				</p>

				{/* Display the image */}
				<div className='mt-[15px] mdl:mt-[40px]'>
					<Image
						width={1117}
						height={635}
						quality={100}
						src={data.option[0].photo.url} // Correctly accessing the photo URL
						alt='Blog Image'
						className='object-contain'
					/>
				</div>

				{/* Access the description from the first item in the option array */}
				<p className='text-[15px] mdl:text-[20px] 3xl:text-[22px] 3xl:font-normal text-[#454545] font-medium mt-[20px] mdl:mt-[30px] 3xl:mt-[50px] font-robotoFlex'>
					{data.option[0].description.ru || 'Описание на русском отсутствует'}
				</p>
			</div>

			<div className='3xl:w-[30%] 3xl:mt-[70px]  mb-[60px] 3xl:mb-[120px]'>
				<SimilarNews />
				
			</div>
			
		</div>
	)
}

export default MainBlogItem
