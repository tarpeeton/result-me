'use client'
import { FaCheck } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import ServicePriceModal from '../Modal/SericePrice'
import { useParams } from 'next/navigation'
import { CostCardData } from '@/constants/cost/data'












const CostCard = () => {
  const { slug, lng } = useParams() // Get slug from URL
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    // Filter the data by slug
    if (slug && CostCardData[slug]) {
      setFilteredData(CostCardData[slug])
    }
  }, [slug])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState(null) // New state variable

  const openModal = (price, title) => {
    setSelectedPrice(price) // Set the selected price
    setSelectedTitle(title) // Set the selected title
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPrice(null) // Reset the selected price
    setSelectedTitle(null) // Reset the selected title
  }

  return (
    <div className='bg-white100 px-[24px] pt-[30px] rounded-[30px] flex flex-col 3xl:flex-col  3xl:p-[40px] mx-[16px] mt-[20px] 3xl:mx-[30px]'>
      <div>
        <h3 className='text-[28px] mdl:text-[50px] font-bold text-titleDark'>
          {lng === 'ru'
            ? 'Стоимость услуг'
            : lng === 'uz'
            ? 'Xizmat Narxlari'
            : 'Service Cost'}
        </h3>
      </div>
      <div className='rounded-[30px] mt-[20px] relative flex flex-col 2xl:flex-wrap 2xl:flex-row 2xl:gap-[25px]'>
        {/* Mapping through filteredData array */}
        {filteredData.map((card, index) => (
          <div
            key={index}
            className='relative  w-full border px-[24px] py-[30px] border-[#F0F0F0] rounded-[30px] mt-[20px]  2xl:w-[calc(32.333%-16px)] pb-[150px]'
          >
            <div>
              <p className='text-[20px] font-semibold 2xl:font-bold mdl:text-[30px] text-titleDark'>
                {card?.title[lng]}
              </p>
            </div>
            <div className='mt-[20px]'>
              {card?.description &&
                card?.description[lng].length > 0 &&
                card?.description[lng].split('\n').map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className='text-[15px] mdl:text-[18px] text-[#454545] font-normal font-robotoFlex'
                  >
                    {line}
                  </p>
                ))}
            </div>

            <div className='h-[1px] w-full bg-[#F0F0F0] mt-[25px]' />
            <div className='flex flex-col mt-[25px] relative gap-[11px]'>
              {card?.services[lng].map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className='flex flex-row gap-[12px] items-center'
                >
                  <div className='rounded-[6px] flex items-center justify-center bg-violet100 bg-opacity-20 w-[30px] h-[30px]'>
                    <FaCheck className='text-violet100' />
                  </div>
                  <div className='flex items-center w-[90%]'>
                    <p className='text-[#010101] text-[15px] font-medium font-robotoFlex'>
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className='h-[1px] w-full bg-[#F0F0F0] mt-[25px] mb-[40px]' />
            <button
              onClick={() => openModal(card.price, card.title)} // Passing title as well
              className='text-white text-center text-[15px] font-bold w-[90%] mx-auto py-[15px] 3xl:py-[24px] px-[20px] bg-violet100 rounded-[100px] mt-[7px] absolute 2xl:text-[18px] left-0 right-0 bottom-[20px]'
            >
              {lng === 'ru'
                ? ' Узнать цену'
                : lng === 'uz'
                ? 'Narxni Korish'
                : 'Find out the price'}
            </button>
          </div>
        ))}
      </div>
      <ServicePriceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        price={selectedPrice}
        serviceName={selectedTitle}
      />
    </div>
  )
}

export default CostCard
