import Link from 'next/link'
import Image from 'next/image'
import blog from '@/public/images/blog.png'
import { GrLinkNext } from "react-icons/gr";

const Blog = () => {
  return (
	<div className='flex flex-col mt-[100px] gap-[40px] py-[30px] px-[12px] w-full rounded-[30px] bg-[#F8F8F8]'>
		<div>
			<p className='text-[28px] font-bold text-titleDark'>Блог</p>
		</div>

		<div>
			<div>
			<Image  width={600} height={600} quality={100} alt='blog image' src={blog}/>
			</div>
			{/* ЕУЧе */}
			<div className='mt-[14px] flex flex-col gap-[8px]'>
				<p className='text-[20px] text-titleDark font-semibold'>Как социальные сети могут улучшить репутацию вашей компании</p>
				<p className='text-[14px] text-[#7B7B7B] leading-[24.38px]'>От репутации компании зависит успех и развитие. Она предопределяет восприятие наименования потенциальными пациентами</p>
			</div>
			<div className='mt-[4px]'>
				<Link href='blog' className='text-violet100 text-[14px] font-bold flex items-center'>
				Подробнее
				<GrLinkNext className='text-violet100 ml-[8px]'/>
				</Link>
			</div>
		</div>
	</div>
  );
};

export default Blog;