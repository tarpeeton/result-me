"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';

// Example data for blogs
const blogData = {
  message: "string",
  data: [
    {
      id: 0,
      slug: "seo-guide",
      option: [
        {
          id: 0,
          title: "SEO для медицинских сайтов: Полное руководство",
          description: "Основы SEO состоят из нескольких ключевых элементов, которые важно понимать и правильно применять для успешного продвижения медицинских сайтов.",
          photo: {
            id: 0,
            url: "https://ucarecdn.com/96e9e892-2635-46af-b227-44c75ed492d3/-/preview/603x343/"
          },
          orderNum: 0
        }
      ]
    },
    {
      id: 1,
      slug: "social-media-impact",
      option: [
        {
          id: 1,
          title: "Как социальные сети могут улучшить репутацию вашей компании",
          description: "От репутации компании зависит успех и развитие. Она предопределяет восприятие наименования потенциальными пациентами.",
          photo: {
            id: 1,
            url: "https://ucarecdn.com/818df712-2cb1-44f3-8539-29485dc01d4e/-/preview/603x343/"
          },
          orderNum: 1
        }
      ]
    },
    {
      id: 2,
      slug: "interactive-survey",
      option: [
        {
          id: 2,
          title: "Интерактивный опрос: оцените эффективность вашего маркетинга",
          description: "Интерактивный опрос представляет собой метод сбора данных, при котором участники активно взаимодействуют с вопросами.",
          photo: {
            id: 2,
            url: "https://ucarecdn.com/96e9e892-2635-46af-b227-44c75ed492d3/-/preview/603x343/"
          },
          orderNum: 2
        }
      ]
    },
    {
      id: 3,
      slug: "marketing-survey",
      option: [
        {
          id: 3,
          title: "Интерактивный опрос: оцените эффективность маркетинга",
          description: "Этот опрос представляет собой метод сбора данных для маркетингового анализа.",
          photo: {
            id: 3,
            url: "https://ucarecdn.com/96e9e892-2635-46af-b227-44c75ed492d3/-/preview/603x343/"
          },
          orderNum: 3
        }
      ]
    }
    // Add more blog items here if needed...
  ]
};

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 blogs

  // Handler for showing more blogs
  const showMoreBlogs = () => {
    setVisibleCount(visibleCount + 6); // Show 6 more blogs when clicked
  };

  return (
    <div className='flex flex-col mt-[40px] mdl:mt-[60px]  gap-[40px] py-[30px] px-[12px] w-full rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] bg-[#F8F8F8] mdl:px-[40px] '>
     
      {/* Blog Cards */}
      <div className='flex flex-col gap-[40px] mdl:gap-[50px] slg:flex-row slg:flex-wrap'>
        {blogData.data.slice(0, visibleCount).map((item) => (
          <Link href={`/blog/${item.slug}`} key={item.id} className='card__blog slg:w-[45%] cursor-pointer 2xl:w-[30%]'>
            <div className='slg:h-[200px]'>
              <Image
                width={600}
                height={600}
                quality={100}
                alt='blog image'
                src={item.option[0].photo.url}
                className='object-contain w-full h-full'
              />
            </div>
            <div className='mt-[14px] flex flex-col gap-[8px]'>
              <p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px]'>
                {item.option[0].title}
              </p>
              <p className='text-[14px] text-[#7B7B7B] leading-[24.38px] mdl:text-[18px] mdl:leading-[23px]'>
                {item.option[0].description}
              </p>
            </div>
            <div className='mt-[8px] mdl:mt-[20px]'>
              <span className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'>
                Подробнее
                <GrLinkNext className='text-violet100 ml-[8px]' />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < blogData.data.length && (
        <div className='flex justify-center mt-[40px]'>
          <button
            onClick={showMoreBlogs}
            className='px-[24px] py-[12px] bg-violet100 text-white rounded-full text-[18px]'
          >
            Загрузить еще
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
