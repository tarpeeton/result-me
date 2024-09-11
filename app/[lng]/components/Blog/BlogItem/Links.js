import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsTelegram, BsLink } from 'react-icons/bs';
import Link from 'next/link'

const Links = () => {
  return (
    <div className='flex flex-row gap-[8px] justify-end items-center mb-[60px] mt-[20px] pr-[16px]'>
		<Link href='telegram' className='cursor-pointer w-[50px] h-[50px] 3xl:w-[70px] 3xl:h-[70px] flex items-center justify-center bg-[#DFDDF5] rounded-[100px]'>
			<FaFacebookF className='text-violet100 3xl:text-[35px]'/>
		</Link>
		<Link href='telegram' className='cursor-pointer w-[50px] h-[50px] 3xl:w-[70px] 3xl:h-[70px] flex items-center justify-center bg-[#DFDDF5] rounded-[100px]'>
			<FaInstagram className='text-violet100 3xl:text-[35px]'/>
		</Link>
		<Link href='telegram' className='cursor-pointer w-[50px] h-[50px] 3xl:w-[70px] 3xl:h-[70px] flex items-center justify-center bg-[#DFDDF5] rounded-[100px]'>
			<BsTelegram className='text-violet100 3xl:text-[35px]'/>
		</Link>
		<Link href='telegram' className='cursor-pointer w-[70px] h-[70px]  3xl:w-[90px] 3xl:h-[90px] flex items-center justify-center bg-violet100 rounded-[100px]'>
			<BsLink className='text-white100 text-[32px] 3xl:text-[45px]'/>
		</Link>
    </div>
  );
};

export default Links;
