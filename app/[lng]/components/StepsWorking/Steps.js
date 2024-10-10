'use client'
import Image from 'next/image'
import { stepsData } from '@/constants/steps'
import { useParams } from 'next/navigation'

const Steps = () => {
  const { lng } = useParams()
  return (
    <div className='relative'>
      <div className='flex flex-col 2xl:flex-row 2xl:flex-wrap'>
        {/* CRAD */}
        {stepsData.map(step => (
          <div
            className={`flex 2xl:w-[50%] flex-col py-[40px] px-[16px] mdl:py-[60px] 2xl:py-[80px] 2xl:px-[70px] mdl:px-[30px] relative ${
              step.id === 7 ? 'bg-violet100' : 'bg-white100'
            } ${
              step.id <= 10 ? 'border-b border-[#F0F0F0]' : ''
            }   2xl:border-b 2xl:border-r border-[#F0F0F0]`} // Apply border-b conditionally
            key={step.id}
          >
            <div className='flex items-center rounded-[10px] border border-[#F0F0F0] p-[10px] text-center w-[50px] justify-center mdl:w-[65px]'>
              <p
                className={` text-[23px] mdl:text-[30px] font-medium ${
                  step.id === 7 ? 'text-white' : 'text-violet100'
                }`}
              >
                {step.number}
              </p>
            </div>
            <div className='flex flex-col mt-[25px] mdl:mt-[40px]'>
              <div className='flex flex-row gap-[8px] mdl:gap-[12px]'>
                {step.img && (
                  <Image
                    src={step.img}
                    width={36}
                    height={36}
                    quality={100}
                    alt={step.imgtitle?.[lng]}
                    className='object-contain w-[16px] mdl:w-[20px]'
                  />
                )}

                {step.imgtitle?.[lng] && (
                  <p className='text-violet100 text-[15px] font-semibold font-montserrat mdl:text-[18px]'>
                    {step.imgtitle[lng]}
                  </p>
                )}
              </div>
            </div>
            <div className='mt-[10px] flex flex-col gap-[10px] 2xl:mb-[180px] '>
              <p
                className={` font-bold text-[23px] ${
                  step.id === 7 ? 'text-white100' : 'text-titleDark'
                } mdl:text-[45px]`}
              >
                {step.title?.[lng]}
              </p>
              <p
                className={` ${
                  step.id === 7 ? 'text-white100' : 'text-titleDark'
                } tex-[15px] font-medium mdl:text-[20px]`}
              >
                {step.subtitle?.[lng]}
              </p>
            </div>
            <div
              className={`mt-[20px] rounded-[20px] py-[25px] px-[20px] flex flex-col gap-[10px] ${
                step.id === 7
                  ? `bg-white bg-opacity-15`
                  : 'bg-violet100 bg-opacity-10 '
              } mdl:mt-[40px] 2xl:absolute 2xl:bottom-20 2xl:w-[80%]`}
            >
              <p
                className={`text-[20px] font-semibold  font-montserrat ${
                  step.id === 7 ? 'text-white' : 'text-violet100'
                } mdl:text-[25px]`}
              >
                {step.sel?.[lng]}
              </p>
              <p
                className={`text-[15px]  font-medium font-montserrat leading-[19px] ${
                  step.id === 7 ? 'text-white' : 'text-violet100'
                } mdl:text-[20px] 2xl:leading-[25px] 3xl:leading-[30px]`}
              >
                {step.selTitle?.[lng]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
