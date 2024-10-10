'use client'
import { useParams } from 'next/navigation'
import { useCustomTranslation } from '@/app/i18n/client'

const BlogTitle = () => {
  const { lng } = useParams()
  const { t } = useCustomTranslation(lng, 'blog')

  return (
    <div className='flex flex-col mx-[16px] mdl:mx-[20px] 3xl:mx-[30px]'>
      <div>
        <h1 className='font-bold text-titleDark text-[28px] mdl:text-[40px] 3xl:text-[50px]'>
          {t('blog_title')}
        </h1>
      </div>
      <div className='mt-[15px] '>
        <p className='text-[#454545] text-[14px] mdl:text-[18px] 3xl:text-[20px] font-medium'>
          {t('blog_description')}
        </p>
      </div>
    </div>
  )
}

export default BlogTitle
