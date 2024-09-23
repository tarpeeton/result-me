"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useCustomTranslation } from '../../../i18n/client'

// import user from '@/public/images/user.png'
// import progress from '@/public/images/progress.png'
// import money from '@/public/images/money.png'

const Result = () => {
  const { lng } = useParams()
  const { t } = useCustomTranslation(lng, 'result')
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {
        threshold: 0.5,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className='rounded-[30px] mdl:rounded-[60px] 2xl:rounded-[100px] bg-bgDark 3xl:px-[70px] mt-[30px] px-[12px]'>
      <div className='flex flex-col p-[24px]'>
        <p className='text-[28px] mdl:text-[50px] 3xl:text-[60px] font-bold'>
          {t('result_title')}
        </p>
        <p className='bg-violet100 text-white100 text-[23px] mdl:text-[40px] 3xl:text-[50px] font-bold p-[10px] w-[243px] mdl:w-[426px] 3xl:w-[535px] rounded-[170px] text-center rotate-[-5deg]'>
          {t('result_subtitle')}
        </p>
      </div>
        
      <div className='mt-[20px] mb-[30px] mdl:mb-[30px] 2xl:mb-[60px] flex flex-col gap-[12px] mdl:gap-[20px] mdl:flex-row mdl:flex-wrap 3xl:flex-row 3xl:justify-between'>
        {/* CARD ONE */}
        <div className='bg-white100 max-h-[440px]  flex flex-col  items-center rounded-[25px] p-[24px] mdl:justify-between mdl:basis-[48%] 2xl:basis-[32%] pr-0'>
          <div>
            <div ref={sectionRef} className='flex justify-center'>
              {inView ? (
                <p className='text-[28px] mdl:text-[40px] 4xl:text-[50px] text-center text-black font-bold'>
                  <CountUp start={0} end={5700} duration={2.5} suffix='+' />
                </p>
              ) : (
                <p className='text-[28px] mdl:text-[40px] 4xl:text-[50px] text-center text-black font-bold'>
                  5700+
                </p>
              )}
            </div>
            <p className='text-[14px] mdl:text-[18px] 4xl:text-[20px] text-titleDark50 font-robotoFlex'>
              {t('card_two')}
            </p>
          </div>
          <div className='mt-[97px] sm:w-[100%] md:w-[80%] mdx:w-[70%] mdl:w-[65%] 4xl:w-[50%]'>
            <div className='relative w-[99px] h-[99px] flex flex-row 4xl:w-[126px] 4xl:h-[136px]'>
              <Image
                src='https://ucarecdn.com/4744ddb8-1408-42ca-b135-f0703b7a5146/-/preview/99x99/'
                width={100}
                height={100}
                quality={80}
                alt='Ilustration'
                sizes="(max-width: 600px) 100px, (max-width: 1200px) 150px, 200px"
                className='object-cover w-full absolute left-0'
              />
              <Image
                src='https://ucarecdn.com/4744ddb8-1408-42ca-b135-f0703b7a5146/-/preview/99x99/'
                width={100}
                height={100}
                quality={80}
                alt='Ilustration'
                sizes="(max-width: 600px) 100px, (max-width: 1200px) 150px, 200px"
                className='object-cover w-full absolute left-[50px]'
              />
              <Image
                src='https://ucarecdn.com/4744ddb8-1408-42ca-b135-f0703b7a5146/-/preview/99x99/'
                width={100}
                height={100}
                quality={80}
                alt='Ilustration'
                sizes="(max-width: 600px) 100px, (max-width: 1200px) 150px, 200px"
                className='object-cover w-full absolute left-[100px]'
              />
            </div>
          </div>
        </div>

        {/* CARD TWO */}
        <div className='bg-white100 max-h-[440px] flex flex-col  items-center rounded-[25px] p-[24px] mdl:justify-between mdl:basis-[100%] mdl:order-1 2xl:basis-[32%] pr-0 pb-0'>
          <div>
            {inView ? (
              <p className='text-[28px] mdl:text-[40px] text-center text-black font-bold 4xl:text-[50px]'>
                <CountUp start={0} end={140000} duration={2.4} suffix='+' />
              </p>
            ) : (
              <p className='text-[28px] mdl:text-[40px] text-center text-black font-bold 4xl:text-[50px]'>
                140,000+
              </p>
            )}
            <p className='text-[14px] mdl:text-[18px] 4xl:text-[20px] text-titleDark50 font-robotoFlex'>
              {t('card_three')}
            </p>
          </div>
          <div className='mt-[42px] mdl:mt-[30px] 3xl:mt-[80px] w-full mdx:w-[100%] mdx:h-[90%] lg:h-[70%] lg:w-[100%]'>
            <Image
              src='https://ucarecdn.com/d0f73bf4-119e-4b96-ac55-c56e6c0b8e39/-/preview/563x247/'
              width={400}
              height={400}
              quality={80}
              alt='Ilustration'
              sizes="(max-width: 600px) 200px, (max-width: 1200px) 300px, 400px"
              className='object-cover w-full'
            />
          </div>
        </div>

        {/* CARD THREE */}
        <div className='bg-white100 max-h-[440px] flex flex-col  items-center rounded-[25px] p-[24px] mdl:justify-between mdl:basis-[48%] 2xl:basis-[32%] pr-0 3xl:order-3'>
          <div>
            {inView ? (
              <p className='text-[28px] 2xl:text-[40px] mdl:text-[40px] 4xl:text-[50px] text-center text-black font-bold'>
                <CountUp start={0} end={1.1} duration={2.4} decimals={1} suffix='$' />
              </p>
            ) : (
              <p className='text-[28px] 2xl:text-[40px] mdl:text-[40px] 4xl:text-[50px] text-center text-black font-bold'>
                1.1$
              </p>
            )}
            <p className='text-[14px] mdl:text-[18px] 4xl:text-[20px] text-titleDark50 font-robotoFlex'>
              {t('card_four')}
            </p>
          </div>
          <div className='mt-[42px] w-[50%] 3xl:w-[45%]'>
            <Image
              src='https://ucarecdn.com/66cfe918-5e71-4bb1-9b93-304736067445/-/preview/181x159/'
              width={100}
              height={100}
              quality={80}
              alt='Ilustration'
              sizes="(max-width: 600px) 100px, (max-width: 1200px) 150px, 200px"
              className='object-cover w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
