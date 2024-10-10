'use client'
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ServicesProvidedData } from '@/constants/case/serviceProvided'

  

const ServicesProvided = () => {
  const { slug, lng } = useParams()
  const [providedService, setProvidedService] = useState([])
  const { t } = useCustomTranslation(lng, 'caseslug')

  useEffect(() => {
    const filteredService = ServicesProvidedData.find(item => item.slug === slug)
    if (filteredService) {
      setProvidedService(filteredService.providedService)
    }
  }, [slug]) // Re-run the effect when slug changes

  return (
    <div className='mt-[20px] py-[30px] px-[24px] rounded-[30px] bg-white mdl:py-[50px] mdl:px-[40px] 3xl:flex 3xl:flex-row mdl:rounded-[40px] 3xl:rounded-[50px]'>
      {/* Заголовок */}
      <div className='w-[50%] mb-6 mdl:mb-[50px] 3xl:w-[40%]'>
        <p className='text-titleDark font-bold text-[28px] mdl:text-[40px] 3xl:text-[50px] 3xl:w-[10%]'>
          {t('optained')}
        </p>
      </div>

      <div className='3xl:w-[60%]'>
        {/* Перебираем список предоставленных услуг */}
        {providedService.map((service, index) => (
          <div key={index} className='mb-6 mdl:mb-[70px] 3xl:mb-[40px]'>
            {/* Название услуги */}
            <p className='text-[18px] font-semibold text-black mb-2 mdl:text-[25px]'>
              {service.title[lng]}
            </p>

            {/* Описание услуги (map through multiple descriptions if they exist) */}
            <ul className='list-disc list-inside text-[#454545]'>
              {service.descriptions.map((description, descIndex) => (
                <p
                  key={descIndex}
                  className="text-[15px] mdl:text-[20px] mb-1 relative font-robotoFlex before:content-['-'] before:mr-2"
                >
                  {description[lng]}
                </p>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesProvided
