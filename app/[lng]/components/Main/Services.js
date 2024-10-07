import { useCustomTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation'
import { GrLinkNext } from 'react-icons/gr'

import Image from 'next/image'
import web from '@/public/images/services/web.svg'
import bot from '@/public/images/services/bot.svg'
import smm from '@/public/images/services/smm.svg'
import Group from '@/public/images/services/Group.svg'
import seo from '@/public/images/services/seo.svg'
import branding from '@/public/images/services/branding.svg'
import Link from 'next/link'

const data = [
  {
    id: 0,
    slug: 'web-development',
    name: {
      ru: 'Разработка сайтов',
      uz: 'Saytlar Yaratish',
      en: 'Website development'
    },
    shortDescription: {
      ru: 'Разработка сайтов, которые просты в использовании и выглядят профессионально, помогая бизнесу выделяться в интернете',
      uz: "Foydalanish uchun qulay va professional ko'rinadigan saytlarni yaratish",
      en: 'Creating websites that are user-friendly and look professional'
    },
    icon: web,
    active: true,
    main: true
  },
  {
    id: 1,
    slug: 'telegram-bot-development',
    name: {
      ru: 'Разработка Telegram-ботов',
      uz: 'Telegram-botini yaratish',
      en: 'Telegram Bot Development'
    },
    shortDescription: {
      ru: 'Создание Telegram-ботов, которые облегчают общение с клиентами и автоматизируют рутинные процессы',
      uz: 'Mijozlar bilan aloqani yaxshilash uchun Telegram-botlarini yaratish',
      en: 'Creating Telegram bots to enhance customer communication'
    },
    icon: bot,
    active: true,
    main: true
  },
  {
    id: 2,
    slug: 'smm',
    name: {
      ru: 'SMM',
      uz: 'SMM',
      en: 'SMM'
    },
    shortDescription: {
      ru: 'Помощь в создании и управлении социальными сетями, чтобы увеличить аудиторию и улучшить имидж бренда',
      uz: 'Ijtimoiy tarmoqlarni yaratish va boshqarishda yordam berish',
      en: 'Helping to create and manage social media accounts'
    },
    icon: smm,
    active: true,
    main: true
  },
  {
    id: 3,
    slug: 'ads-launch',
    name: {
      ru: 'Запуск рекламы',
      uz: 'Reklamani ishga tushirish',
      en: 'Ad Campaign Launch'
    },
    shortDescription: {
      ru: 'Настройка рекламы, которая привлекает нужных клиентов и приносит бизнесу больше прибыли',
      uz: 'Mijozlarni jalb qilish va daromadni oshirish uchun reklama yaratish',
      en: 'Setting up advertising that attracts the right customers and brings more profit to the business'
    },
    icon: Group,
    active: true,
    main: true
  },
  {
    id: 4,
    slug: 'seo',
    name: {
      ru: 'SEO',
      uz: 'SEO',
      en: 'SEO'
    },
    shortDescription: {
      ru: 'Оптимизация сайта, чтобы он был выше в поисковых системах и привлекал больше посетителей',
      uz: 'Qidiruv tizimining reytingini yaxshilash uchun saytlarni optimallashtirish',
      en: 'Optimizing websites to improve search engine rankings'
    },
    icon: seo,
    active: true,
    main: true
  },
  {
    id: 5,
    slug: 'branding',
    name: {
      ru: 'Брендинг',
      uz: 'Brending',
      en: 'Branding'
    },
    shortDescription: {
      ru: 'Создание уникального стиля и образа для бизнеса, который будет легко узнаваем и привлекателен для клиентов',
      uz: "Biznesingiz uchun o'zgacha uslub va tasvir yaratish",
      en: 'Creating a unique style and image for your business'
    },
    icon: branding,
    active: true,
    main: true
  }
]

const Services = () => {
  const { lng } = useParams()
  const { t } = useCustomTranslation(lng, 'service')
  return (
    <div className='w-full flex flex-col flex-wrap justify-between gap-6 mt-[20px] bg-[#F8F8F8] py-[24px] px-[16px] rounded-[30px] mdl:pl-[24px] mdl:pr-[14px]'>
      {/* Card 1 */}
      <div>
        <p className='text-[28px] mdl:text-[50px] font-semibold text-titleDark'>
          {t('service_title')}
        </p>
      </div>

      {/* =========================== START ===================================== */}
      <div className='flex  flex-col gap-[16px] mdl:gap-[24px] 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:gap-[30px]'>
        {/* 1 */}
        <Link
          href={`/services/${data[0].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[60%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={data[0].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {data[0].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%] font-robotoFlex'>
              {data[0].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 2 */}
        <Link
          href={`/services/${data[1].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[36%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={data[1].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {data[1].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%] font-robotoFlex'>
              {data[1].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 3 */}
        <Link
          href={`/services/${data[2].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[36%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={data[2].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {data[2].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%] font-robotoFlex'>
              {data[2].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 4 */}
        <Link
          href={`/services/${data[3].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[60%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={data[3].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {data[3].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%] font-robotoFlex'>
              {data[3].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        <Link
          href={`/services/${data[4].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[48%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={seo}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101] group-hover:text-white'>
              {data[4].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[60%] font-robotoFlex'>
              {data[4].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
        {/* 5 */}
        <Link
          href={`/services/${data[5].slug}`}
          className='bg-white w-full rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col  relative mdl:min-h-[302px] 2xl:w-[48%] cursor-pointer hover:bg-violet100 duration-[600ms] ease-in-out group'
        >
          <div className='w-[50px] h-[50px] mb-[20px] mdx:w-[60px] mdx:h-[50px] mdx:mb-[50px] 3xl:w-[67px] 3xl:h-[67px] 3xl:mb-[55px]'>
            <Image
              width={90}
              height={90}
              src={data[5].icon}
              alt='service Image'
              className='object-cover group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:sepia-[100%]'
            />
          </div>
          <div>
            <h2 className='text-xl mdl:text-[28px] font-semibold text-[#010101]  group-hover:text-white'>
              {data[5].name[lng]}
            </h2>
            <p className='text-[#A6A6A6] mdl:text-[18px] leading-[20.4px] mt-[12px] group-hover:text-white 3xl:w-[80%] font-robotoFlex'>
              {data[5].shortDescription[lng]}
            </p>
          </div>
          <div className='w-[71px] h-[71px] mdl:w-[91px] mdl:h-[91px] mb-[-20px] mr-[-20px] flex justify-end absolute right-0 bottom-0 border-[10px] border-[#F8F8F8] rounded-[100%]'>
            <div className='w-full h-full bg-bgDark shadow-md rounded-full flex items-center justify-center'>
              <GrLinkNext className='text-violet100 mdl:w-[25px] mdl:h-[25px]' />
            </div>
          </div>
        </Link>
      </div>

      {/* ===================================END================================= */}
    </div>
  )
}

export default Services
