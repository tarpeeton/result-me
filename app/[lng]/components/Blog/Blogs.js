'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkNext } from 'react-icons/gr'
import { useParams } from 'next/navigation'
import { blogData } from '@/constants/blogs'

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(6) // Initially show 6 blogs
  const { lng } = useParams()
  // Handler for showing more blogs
  const showMoreBlogs = () => {
    setVisibleCount(prevCount => prevCount + 6) // Show 6 more blogs when clicked
  }

  return (
    <div className='flex flex-col mt-[40px] mdl:mt-[60px] gap-[40px] py-[30px] px-[12px] w-full rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] bg-[#F8F8F8] mdl:px-[40px]'>
      {/* Blog Cards */}
      <div className='flex flex-col mdl:flex mdl:flex-row mdl:flex-wrap gap-[40px] mdl:gap-[50px] slg:flex-row slg:flex-wrap relative'>
        {blogData.slice(0, visibleCount).map(item => (
          <Link
            href={`/blog/${item.slug}`}
            key={item.id}
            className='card__blog slg:w-[45%] cursor-pointer 2xl:w-[30%] relative'
          >
            {/* Only display the image if the URL is not empty */}
            {item.photo && item.photo.url ? (
              <div className='slg:h-[230px] '>
                <Image
                  width={600}
                  height={600}
                  quality={100}
                  alt='blog image'
                  src={item.photo.url}
                  className='object-cover w-full h-full'
                />
              </div>
            ) : null}
            <div className='mt-[14px] flex flex-col gap-[8px] mb-[40px]'>
              <p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px]'>
                {item.title[lng]} {/* Adjust language as needed */}
              </p>
              <p className='text-[14px] text-[#7B7B7B] leading-[24.38px] mdl:text-[18px] mdl:leading-[23px]'>
                {item.description[lng]} {/* Adjust language as needed */}
              </p>
            </div>
            <div className='mt-[8px] mdl:mt-[20px] absolute bottom-[0]'>
              <span className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'>
                {lng === 'ru'
                  ? 'Подробнее'
                  : lng === 'uz'
                  ? 'Batafsil'
                  : 'Read more'}
                <GrLinkNext className='text-violet100 ml-[8px]' />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < blogData.length && (
        <div className='hidden mdl:flex justify-center mt-[40px]'>
          <button
            onClick={showMoreBlogs}
            className='px-[24px] py-[12px] bg-violet100 text-white rounded-full text-[18px]'
          >
            {lng === 'ru'
              ? 'Загрузить еще'
              : lng === 'uz'
              ? "Ko'proq yuklash"
              : 'Load more'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Blogs
