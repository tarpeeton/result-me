import React, { useState } from 'react';
import { Button } from '@mui/material';
import ServiceModal from '../Modal/SeriviceModal';
import Image from 'next/image';
import my from '@/public/images/Object.png';
import blur from '@/public/images/Blur.png';
import { useCustomTranslation } from '../../../i18n/client';
import { useParams } from 'next/navigation';

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lng } = useParams();
  const { t } = useCustomTranslation(lng, 'banner');

  // Open modal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full rounded-b-[30px] 2xl:rounded-b-[100px] bg-violet100  relative ">
      <div className="w-full pt-[100px]  2xl:w-[80%] 2xl:mx-auto flex flex-col justify-center items-center ">
        <div className="w-[80%] px-[16px] flex flex-col justify-center items-center text-center mb-[200px] mdl:mb-[360px] 3xl:mb-[500px]">
          <h1 className="text-[35px] font-bold text-white100 mdl:text-[70px] 4xl:text-[90px]">{t('title')}</h1>
          <p className="w-[90%] text-[15px] font-semibold text-white100 mt-[10px] mdl:text-[18px] ">
            {t('subtitle')}
          </p>
          <button  onClick={openModal}
						className='bg-white100 rounded-[60px] px-[30px] py-[20px] w-[230px] mt-[30px] mdl:w-[300px]'
					>
						<p className='text-violet100 text-[14px] font-bold mdl:text-[18px]'>
							{t('getInfo')}
						</p>
					</button>
        </div>

      

        {/* Pass the modal open/close state to the modal component */}
        <ServiceModal isOpen={isModalOpen} onClose={closeModal} />

        <div className="w-full mt-[30px] absolute bottom-0">
          <Image
            src={my}
            width={1200}
            height={500}
            quality={100}
            alt="Main banner image"
            className="object-cover w-full"
          />
          <Image
            src={blur}
            width={1200}
            height={400}
            quality={100}
            alt="blurred background image"
            className="object-cover absolute bottom-0  w-full h-[40px] 3xl:h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
