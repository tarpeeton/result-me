'use client'
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { QuestionData } from '@/constants/case/question'

const Question = () => {
  const [filteredData, setFilteredData] = useState([])
  const [expandedItems, setExpandedItems] = useState([]) 
  const { slug, lng } = useParams() // Get slug and locale
  const { t } = useCustomTranslation(lng, 'caseslug')

 
  useEffect(() => {
    // slug bilan filter qilsih 
    const filtered = QuestionData.find(item => item.slug === slug)?.data || []
    setFilteredData(filtered)
  }, [slug])

  const toggleShowMore = index => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className='rounded-[30px] bg-white100 mt-[20px] flex flex-col py-[30px] px-[24px] mdl:rounded-[40px] 3xl:rounded-[50px] mdl:py-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] 3xl:flex 3xl:flex-row'>
      <div className='3xl:w-[40%]'>
        <p className='text-titleDark text-[28px] mdl:text-[40px] 3xl:text-[50px] font-bold'>
          {t('question')}
        </p>
      </div>

      <div className='3xl:w-[60%]'>
        {/* List of titles */}
        <ul className='flex flex-col mt-[20px] ml-[24px] 3xl:w-[60%]'>
          {filteredData
            .filter(item => item.title) // Only display list items with titles
            .map((item, index) => (
              <li
                key={index}
                className='text-[15px] list-disc font-medium text-titleDark mdl:text-[20px] 3xl:text-[25px] font-robotoFlex'
              >
                {item.title[lng]}
              </li>
            ))}
        </ul>

        {/* Descriptions */}
        {filteredData
          .filter(item => item.description) // Only display items with descriptions
          .map((item, index) => {
            const isExpanded = expandedItems.includes(index)
            const shouldTruncate =
              item.description[lng] && item.description[lng].length > 50

            return (
              <div key={index} className='mt-4 ml-[24px]'>
                {shouldTruncate ? (
                  <>
                    <p className='text-[#454545] text-[15px]'>
                      {isExpanded
                        ? item.description[lng]
                        : item.description[lng].substring(0, 50) + '...'}
                      <button
                        className='ml-2 text-blue-500 underline cursor-pointer'
                        onClick={() => toggleShowMore(index)}
                      >
                        {isExpanded
                          ? lng === 'ru'
                            ? 'Свернуть'
                            : lng === 'uz'
                            ? 'Yopish'
                            : 'Hide'
                          : lng === 'ru'
                          ? 'Показать больше'
                          : lng === 'uz'
                          ? 'Ko‘proq ko‘rsatish'
                          : 'Show more'}
                      </button>
                    </p>
                  </>
                ) : (
                  <p>{item.description[lng]}</p>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Question
