'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' // For getting the slug from the URL
import CaseResultModalSocials from '../Modal/CaseResultModal'
import { useCustomTranslation } from '@/app/i18n/client'
import { obtainedResult } from '@/constants/case/result'

const Result = () => {
  const [filteredResult, setFilteredResult] = useState({ result: [], link: '' })
  const [modalLinks, setModalLinks] = useState(false)
  const [expandedItems, setExpandedItems] = useState([])
  const { slug, lng } = useParams() // Get slug from the URL
  const { t } = useCustomTranslation(lng, 'caseslug')
  const caseResultModalOpen = () => setModalLinks(!modalLinks)

  useEffect(() => {
    // Find the result based on the slug
    const resultData = obtainedResult.find(item => item.slug === slug)
    if (resultData) {
      setFilteredResult(resultData) // Set both result and link
    }
  }, [slug]) // Run this effect when slug changes

  const toggleShowMore = index => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className='mt-[20px] py-[30px] px-[24px] rounded-[30px] bg-white 3xl:flex 3xl:items-center relative mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px]'>
      {/* Левая часть: Заголовок и кнопка */}
      <div className='3xl:w-[45%] mb-[30px] 3xl:mb-0 3xl:flex 3xl:flex-col'>
        {/* Заголовок */}
        <p className='text-[#7B72EB] font-bold text-[28px] mb-4 3xl:text-[50px] w-[50%] 3xl:mb-[30px]'>
          {t('result')}
        </p>
        {/* Кнопка */}
        {filteredResult.link ? (
          <button
            onClick={caseResultModalOpen}
            className='block text-center text-white bg-[#7B72EB] py-[20px] px-[30px] w-[90%] rounded-[30px] font-bold mt-4 absolute bottom-[20px] mdl:w-[50%] 3xl:w-[50%] 3xl:relative 3xl:mt-[30px]'
          >
            {t('button')}
          </button>
        ) : null}
      </div>

      <CaseResultModalSocials
        isOpen={modalLinks}
        onClose={caseResultModalOpen}
        link={filteredResult.link}
      />

      {/* Правая часть: результаты */}
      <div className='flex flex-col 3xl:flex 3xl:w-[50%] 3xl:justify-between mb-[80px] mdl:flex-row mdl:justify-between mdl:flex-wrap mdl:gap-[20px]'>
        {filteredResult.result.map((item, index) => (
          <div className='flex flex-col' key={index}>
            <div key={index} className='mb-6 3xl:mb-0'>
              <p className='text-[35px] mdl:text-[40px] font-medium text-[#010101] 3xl:text-[50px]'>
                {item?.item?.[lng]?.length ? item.item[lng] : null}
              </p>
              <p className='text-[14px] mdl:text-[20px] text-[#A6A6A6] 3xl:text-[18px] font-robotoFlex'>
                {item?.name?.[lng]?.length ? item.name[lng] : null}
              </p>
            </div>
            {item?.descrip ? (
              <div className='mdl:mt-[15px] 2xl:mt-[20px]'>
                <p className='text-[#454545]'>
                  {expandedItems.includes(index) ||
                  item.descrip[lng]?.length <= 50
                    ? item.descrip[lng]
                    : `${item.descrip[lng]?.slice(0, 200)}...`}
                </p>
                {item.descrip[lng]?.length > 200 && (
                  <button
                    className=' text-violet100 font-medium  mt-2'
                    onClick={() => toggleShowMore(index)}
                  >
                    {expandedItems.includes(index)
                      ? lng === 'ru'
                        ? 'Скрыть'
                        : lng === 'uz'
                        ? 'Yopish'
                        : 'Hide'
                      : lng === 'ru'
                      ? 'Показать больше'
                      : lng === 'uz'
                      ? 'Ko‘proq ko‘rsatish'
                      : 'Show more'}
                  </button>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Result
