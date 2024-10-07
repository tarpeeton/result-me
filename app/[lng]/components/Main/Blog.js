"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import medicalMarketin from '@/public/images/blog/medicalMarketin.jpg'
import blogImage from '@/public/images/blog/meditsiniskiySe0.jpg'
import klinikcastniy from '@/public/images/blog/klinikcastniy.jpg'
import { GrLinkNext } from 'react-icons/gr'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCustomTranslation } from '@/app/i18n/client'
const blogData = [
  {
    title: 'Эффективный маркетинг для частных медицинских клиник: ключевые особенности',
    description: 'Узнайте, как продвигать частную медицинскую клинику, привлекать больше пациентов и усиливать доверие с помощью проверенных маркетинговых стратегий.',
    photo: medicalMarketin,
    slug: 'blog1'
  },
  {
    title: 'SEO для медицинских сайтов: лучшие советы для повышения видимости в интернете',
    description: 'Узнайте, как с помощью SEO улучшить видимость медицинского сайта в поисковых системах, привлечь больше пациентов и повысить рейтинг клиники.',
    photo: blogImage,
    slug: 'blog2'
  },
  {
    title: 'Эффективная стратегия контент-маркетинга для медицинской компании: как привлечь пациентов',
    description: 'Узнайте, как разработать стратегию контент-маркетинга для медицинской компании, чтобы привлечь больше пациентов и повысить доверие к вашей клинике.',
    photo: klinikcastniy,
    slug: 'blog3'
  }
];

const Blog = () => {
  const {lng} = useParams()
  const {t} = useCustomTranslation(lng , 'blog')
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
    };
  return (
    <div className='flex flex-col mt-[100px] gap-[40px] py-[30px] px-[12px] w-full rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] bg-[#F8F8F8] mdl:px-[40px] 2xl:mb-[120px]'>

      <div className='ml-[12px] mdl:ml-[28px]'>
        <p className='text-[28px] mdl:text-[50px] font-bold text-titleDark'>
          {t('title')}
        </p>
      </div>

      <div className='mdl:hidden'>
	  <Carousel
        responsive={responsive}
        arrows={false}         
        autoPlay={true}        
        autoPlaySpeed={3000}    
        infinite={true}        
        className='flex flex-row mdl:hidden relative'
      >
        {blogData.map((item) => (
          <Link
            href={`/blog/${item.slug}`}
            key={item.id}
            className='card__blog slg:w-[45%] cursor-pointer 2xl:w-[30%] relative'
          >
            {/* Only display the image if the URL is not empty */}
            {item.photo && item.photo ? (
              <div className='slg:h-[230px] '>
                <Image
                  width={600}
                  height={600}
                  quality={100}
                  alt='blog image'
                  src={item.photo}
                  className='object-cover w-full h-full'
                />
              </div>
            ) : null}
            <div className='mt-[14px] flex flex-col gap-[8px] mb-[40px]'>
              <p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px]'>
                {item.title} {/* Adjust language as needed */}
              </p>
              <p className='text-[14px] text-[#7B7B7B] leading-[24.38px] mdl:text-[18px] mdl:leading-[23px]'>
                {item.description} {/* Adjust language as needed */}
              </p>
            </div>
            <div>
              <span className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'>
                {t('more')}
                <GrLinkNext className='text-violet100 ml-[8px]' />
              </span>
            </div>
          </Link>
        ))}
	</Carousel>
	  </div>



      {/* Render blogs using map() */}
      <div className='hidden mld:flex-col mdl:flex gap-[40px] mdl:gap-[50px] slg:flex-row'>
        {blogData.map((blogItem, index) => (
          <Link  href={`/blog/${blogItem.slug}`} key={index} className='card__blog slg:w-[45%] cursor-pointer 2xl:w-[30%] relative mb-[10px]'>
            <div className='2xl:max-h-[500px]'>
              {blogItem.photo && <Image
                width={600}
                height={600}
                quality={100}
                alt='blog image'
                src={blogItem.photo}
                className='object-contain w-full h-full'
              /> }
              
            </div>
            <div className='mt-[14px] mb-[40px] flex flex-col gap-[8px] 3xl:mb-[40px]'>
              <p className='w-full text-[20px] text-titleDark font-semibold mdl:text-[25px] mdl:leading-[30.48px] relative'>
                {blogItem.title}
              </p>
              <p className='text-[14px] text-[#7B7B7B] leading-[24.38px] mdl:text-[18px] mdl:leading-[23px] font-robotoFlex'>
                {blogItem.description}
              </p>
            </div>
            <div className='mt-[10px] mdl:mt-[20px] absolute bottom-0'>
                <p className='text-violet100 text-[14px] font-bold flex items-center mdl:text-[18px]'>
                  Подробнее
                  <GrLinkNext className='text-violet100 ml-[8px]' />
                </p>
            </div>
          </Link>
        ))}
      </div>

	  <Link href='/blog' className='py-[20px] px-[30px] bg-violet100 text-center text-white100 rounded-full w-[90%] mdl:w-[20%] mx-auto'>
    {t('button')}
	  </Link>
    </div>
  );
};

export default Blog;
