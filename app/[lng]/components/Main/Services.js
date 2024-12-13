import { useCustomTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation'
import { GrLinkNext } from 'react-icons/gr'
import { serviceDataMain } from '@/constants/service/serviceData'


import Image from 'next/image'

import Link from 'next/link'


const Services = () => {
  const { lng } = useParams()
  const { t } = useCustomTranslation(lng, 'services')
  
  return (
    <div className='w-full flex flex-col flex-wrap justify-between gap-6 mt-[20px] bg-[#F8F8F8] py-[24px] px-[16px] rounded-[30px] mdl:pl-[24px] mdl:pr-[14px]'>
      {/* Card 1 */}
      <div>
        <h3 className='text-[28px] mdl:text-[50px] font-semibold text-titleDark'>
          {t('service_title')}
        </h3>
      </div>

      {/* =========================== START ===================================== */}
      <div className='flex  flex-col gap-[16px] mdl:gap-[24px] 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:gap-[30px]'>
        {/* 1 */}
        <Link
          href={`/services/${serviceDataMain[0].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[60%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={serviceDataMain[0].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {serviceDataMain[0].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%] font-robotoFlex'>
              {serviceDataMain[0].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 2 */}
        <Link
          href={`/services/${serviceDataMain[1].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[36%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={serviceDataMain[1].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {serviceDataMain[1].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%] font-robotoFlex'>
              {serviceDataMain[1].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 3 */}
        <Link
          href={`/services/${serviceDataMain[2].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[36%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={serviceDataMain[2].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {serviceDataMain[2].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%] font-robotoFlex'>
              {serviceDataMain[2].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 4 */}
        <Link
          href={`/services/${serviceDataMain[3].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[60%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={serviceDataMain[3].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {serviceDataMain[3].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%] font-robotoFlex'>
              {serviceDataMain[3].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        <Link
          href={`/services/${serviceDataMain[4].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[48%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={serviceDataMain[4].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {serviceDataMain[4].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%] font-robotoFlex'>
              {serviceDataMain[4].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 5 */}
        <Link
          href={`/services/${serviceDataMain[5].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[48%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={serviceDataMain[5].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101]  group-hover:text-white'>
              {serviceDataMain[5].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%] font-robotoFlex'>
              {serviceDataMain[5].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 6 */}
        <Link
          href={`/services/${serviceDataMain[6].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[60%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={serviceDataMain[6].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {serviceDataMain[6].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%] font-robotoFlex'>
              {serviceDataMain[6].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
      </div>

      {/* ===================================END================================= */}
    </div>
  )
}

export default Services
