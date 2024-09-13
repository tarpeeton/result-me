import Link from 'next/link'
import Image from 'next/image'
import blog from '@/public/images/blog/blog.png'
import blog2 from '@/public/images/blog/blog2.png'
import blog3 from '@/public/images/blog/blog3.png'
import { GrLinkNext } from 'react-icons/gr'

const blogData = [
  {
    title: 'Как социальные сети могут улучшить репутацию вашей компании',
    description: 'От репутации компании зависит успех и развитие. Она предопределяет восприятие наименования потенциальными пациентами',
    photo: blog,
    slug: 'blog1'
  },
  {
    title: 'Интерактивный опрос: оцените эффективность вашего маркетинга',
    description: 'Интерактивный опрос представляет собой метод сбора данных, при котором участники активно взаимодействуют с вопросами, используя различные форматы ответов',
    photo: blog2,
    slug: 'blog2'
  },
  {
    title: 'SEO для медицинских сайтов: Полное руководство',
    description: 'Основы SEO состоят из нескольких ключевых элементов, которые важно понимать и правильно применять для успешного продвижения медицинских сайтов',
    photo: blog3,
    slug: 'blog3'
  }
];

const Blog = () => {
  return (
    <div className='flex flex-col mt-[100px] gap-[40px] py-[30px] px-[12px] w-full rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] bg-[#F8F8F8] mdl:px-[40px] '>

      <div className='ml-[12px] mdl:ml-[28px]'>
        <p className='text-[28px] mdl:text-[50px] font-bold text-titleDark'>
          Блог
        </p>
      </div>

      {/* Render blogs using map() */}
      <div className='flex flex-col gap-[40px] mdl:gap-[50px] slg:flex-row'>
        {blogData.map((blogItem, index) => (
          <Link  href={`/blog/${blogItem.slug}`} key={index} className='card__blog slg:w-[45%] cursor-pointer 2xl:w-[30%]'>
            <div className='2xl:max-h-[500px]'>
              <Image
                width={600}
                height={600}
                quality={100}
                alt='blog image'
                src={blogItem.photo}
                className='object-contain w-full h-full'
              />
            </div>
            <div className='mt-[14px] flex flex-col gap-[8px]'>
              <p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px]'>
                {blogItem.title}
              </p>
              <p className='text-[14px] text-[#7B7B7B] leading-[24.38px] mdl:text-[18px] mdl:leading-[23px]'>
                {blogItem.description}
              </p>
            </div>
            <div className='mt-[8px] mdl:mt-[20px]'>
                <p className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'>
                  Подробнее
                  <GrLinkNext className='text-violet100 ml-[8px]' />
                </p>
            </div>
          </Link>
        ))}
      </div>

	  <Link href='/blog' className='py-[20px] px-[30px] bg-violet100 text-center text-white100 rounded-full w-[90%] mdl:w-[20%] mx-auto'>
	  Все новости
	  </Link>
    </div>
  );
};

export default Blog;
