'use client'
import Image from 'next/image'
import SimilarNews from './SimilarNews'
import { useParams } from 'next/navigation'
import { mainBlogData } from '@/constants/mainBlogItem'

const MainBlogItem = () => {
  const { slug, lng } = useParams()
  const blog = mainBlogData.find(item => item.slug === slug)

  if (!blog) {
    return <p>Blog post not found</p>
  }

  return (
    <div className='bg-[#F8F8F8] 3xl:flex 3xl:flex-row 3xl:px-[30px]'>
      <div className='bg-white rounded-[30px] py-[24px] px-[16px] mdl:py-[40px] mdl:px-[20px] 3xl:mt-[70px] 3xl:flex 3xl:flex-col 3xl:w-[80%] 3xl:px-[138px] 3xl:py-[70px] mb-[60px] 3xl:mb-[120px]'>
        <p className='text-[23px] font-bold mdl:text-[40px] 3xl:text-[45px] text-titleDark'>
          {blog.title[lng]}
        </p>

        {/* Render the image only if it exists */}
        {blog.photo && blog.photo.url && (
          <div className='mt-[15px] mdl:mt-[40px]'>
            <Image
              width={1117}
              height={635}
              quality={100}
              src={blog.photo.url}
              alt='Blog Image'
              className='object-contain rounded-[20px] 2xl:rounded-[40px]'
            />
          </div>
        )}
        {/* Render the description */}
        <p className='text-[15px] mdl:text-[20px] 3xl:text-[22px] 3xl:font-normal text-[#454545] font-medium mt-[20px] mdl:mt-[30px] 3xl:mt-[50px] font-robotoFlex'>
          {blog.description[lng] || 'Описание на русском отсутствует'}
        </p>
        {/* Render the blog text, ensuring new lines are handled */}
        <div className='text-[15px] mdl:text-[20px] 3xl:text-[22px] 3xl:font-normal text-[#454545] font-medium mt-[20px] mdl:mt-[30px] 3xl:mt-[50px] font-robotoFlex'>
          {blog.text[lng].split('\n').map((paragraph, idx) => {
            // Check if the paragraph contains bold markers "**"
            if (paragraph.includes('**')) {
              // Split around the "**" markers
              const parts = paragraph.split('**')
              return (
                <p key={idx} className='mt-4'>
                  {/* Render the parts: first part is regular, second part is bold */}
                  {parts.map((part, index) =>
                    index % 2 === 1 ? (
                      <strong
                        key={index}
                        className='font-semibold text-titleDark 3xl:text-[25px]'
                      >
                        {part.trim()}
                      </strong>
                    ) : (
                      <span key={index}>{part}</span>
                    )
                  )}
                </p>
              )
            }
            return (
              <p key={idx} className='mt-4'>
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>

      <div className='3xl:w-[30%] 3xl:mt-[70px] mb-[60px] 3xl:mb-[120px]'>
        <SimilarNews />
      </div>
    </div>
  )
}

export default MainBlogItem
