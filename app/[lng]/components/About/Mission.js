'use client'
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation'

const MissinResult = () => {
  const { lng } = useParams()
  const { t } = useCustomTranslation(lng, 'aboutus')

  return (
    <div className='rounded-[30px] bg-white mt-[20px] mdl:mt-[25px] 3xl:mt-[30px] mdl:rounded-[40px] 3xl:rounded-[100px] flex flex-col 3xl:flex-row mx-[16px] mdl:mx-[20px] 3xl:mx-[30px] py-[30px] px-[24px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[100px] 3xl:px-[70px] relative'>
      <div className='3xl:w-[40%]'>
	  <h2 className='text-[28px] mdl:text-[40px] font-bold 3xl:text-[50px] text-titleDark'>
  {t('mission_title').replace('Result', '')}
  {t('mission_title').includes('Result') && (
    <span className='text-[28px] mdl:text-[40px] font-bold 3xl:text-[50px] text-violet100'>
      Result
    </span>
  )}
</h2>


        <p className='font-medium text-[15px] mdl:text-[20px] text-titleDark 3xl:w-[80%] mt-[20px] 3xl:mt-[30px] font-robotoFlex'>
          {t('mission_description')}
        </p>
      </div>
      <div className='w-full mb-[40px] min-h-[100px] flex justify-center mdl:h-[200px] 3xl:w-[50%] '>
        <div className='relative w-[90%] bn:w-[70%] mx-auto h-full mt-[40px]'>
          <div className='flex relative justify-center'>
            <div className='text-center text-[13px] mdl:text-[18px] mdl:font-semibold text-white100 absolute left-[-10px] w-[100px] h-[100px] rounded-full bg-violet100 flex items-center justify-center border-[3px] z-50 mdl:w-[200px] mdl:h-[200px] 3xl:w-[250px] 3xl:h-[250px] 3xl:left-[0] cursor-pointer'>
              <p className='font-semibold w-[80%] '>{t('mission_one')}</p>{' '}
            </div>
            <div className='text-center text-[13px] mdl:text-[18px] mdl:font-semibold text-white100 absolute left-[75px] w-[100px] h-[100px] rounded-full bg-violet100 flex items-center justify-center border-[3px] mdl:w-[200px] mdl:left-[150px] mdl:h-[200px] 3xl:w-[250px] 3xl:h-[250px] 3xl:left-[200px] cursor-pointer'>
              <p className='font-semibold w-[80%] '>{t('mission_two')}</p>
            </div>
            <div className='text-center text-[13px] mdl:text-[18px] mdl:font-semibold text-white100 absolute left-[160px] w-[100px] h-[100px] rounded-full bg-violet100 flex items-center justify-center border-[3px] mdl:w-[200px] mdl:left-[300px] mdl:h-[200px] 3xl:w-[250px] 3xl:h-[250px] 3xl:left-[380px] cursor-pointer'>
              <p className='font-semibold w-[80%] '>{t('mission_three')}</p>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissinResult
