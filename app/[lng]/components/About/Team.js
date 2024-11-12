'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '@/public/images/members/1.png'
import img3 from '@/public/images/members/3.png'
import img4 from '@/public/images/members/4.png'
import img5 from '@/public/images/members/5.png'
import img6 from '@/public/images/members/6.png'
import img8 from '@/public/images/members/8.png'
import img9 from '@/public/images/members/9.png'
import img10 from '@/public/images/members/10.png'
import img11 from '@/public/images/members/11.png'
import img12 from '@/public/images/members/12.png'
import img13 from '@/public/images/members/13.png'
import img16 from '@/public/images/members/16.png'
import { useCustomTranslation } from '@/app/i18n/client'
import { useParams } from 'next/navigation'

const teamData = [
  {
    id: 1,
    fullName: {
      uz: 'Abdulbosit',
      ru: 'Абдулбосит',
      en: 'Abdulbosit'
    },
    position: 'Project Manager',
    photo: img1,
    active: true,
    orderNum: 1
  },
  {
    id: 2,
    fullName: {
      uz: 'Rustam',
      ru: 'Рустам',
      en: 'Rustam'
    },
    position: 'Frontend-developer',
    photo: img11,
    active: true,
    orderNum: 2,
    github: 'https://github.com/tarpeeton'
  },
  {
    id: 3,
    fullName: {
      uz: 'Veronika',
      ru: 'Вероника',
      en: 'Veronika'
    },
    position: 'Контент-менеджер',
    photo: img3,
    active: true,
    orderNum: 3
  },
  {
    id: 4,
    fullName: {
      uz: 'Farangiz',
      ru: 'Фарангиз',
      en: 'Farangiz'
    },
    position: 'Переводчик',
    photo: img4,
    active: true,
    orderNum: 4
  },
  // {
  //   id: 5,
  //   fullName: {
  //     uz: 'Daler',
  //     ru: 'Далер',
  //     en: 'Daler'
  //   },
  //   position: 'Дизайнер',
  //   photo: img5,
  //   active: true,
  //   orderNum: 4
  // },
  {
    id: 6,
    fullName: {
      uz: 'Husnora',
      ru: 'Хуснора',
      en: 'Husnora'
    },
    position: 'Мобилограф',
    photo: img6,
    active: true,
    orderNum: 4
  },
  {
    id: 8,
    fullName: {
      uz: 'Abduhakim',
      ru: 'Абдухаким',
      en: 'Abduhakim'
    },
    position: 'Fullstack Developer',
    photo: img8,
    active: true,
    orderNum: 4,
    github: 'https://github.com/Shotambrat'
  },
  {
    id: 9,
    fullName: {
      uz: 'Davlatbek',
      ru: 'Давлатбек',
      en: 'Davlatbek'
    },
    position: 'Backend Developer',
    photo: img9,
    active: true,
    orderNum: 4,
    github: 'https://github.com/davlatbek-j'
  },
  {
    id: 10,
    fullName: {
      uz: 'Andrey',
      ru: 'Андрей',
      en: 'Andrey'
    },
    position: 'Frontend Developer',
    photo: img16,
    active: true,
    orderNum: 4,
    github: 'https://github.com/artemevb'
  },
  {
    id: 11,
    fullName: {
      uz: 'Nodir',
      ru: 'Нодир',
      en: 'Nodir'
    },
    position: 'Backend Developer',
    photo: img10,
    active: true,
    orderNum: 4,
    github: 'https://github.com/nodirjon2901'
  },
  {
    id: 12,
    fullName: {
      uz: 'Sabina',
      ru: 'Сабина',
      en: 'Sabina'
    },
    position: 'Backend Developer',
    photo: img12,
    active: true,
    orderNum: 4
  },
  {
    id: 13,
    fullName: {
      uz: 'Bahodir',
      ru: 'Баходыр',
      en: 'Bahodir'
    },
    position: 'UX / UI дизайнер',
    photo: img13,
    active: true,
    orderNum: 4
  }
]

const Team = () => {
  const [showAll, setShowAll] = useState(false)
  const { lng } = useParams()
  const { t } = useCustomTranslation(lng, 'aboutus')
  // Show only first 4 members initially, and all when 'showAll' is true
  const visibleTeam = showAll ? teamData : teamData.slice(0, 4)
  return (
    <div className='rounded-[30px] bg-white mdl:rounded-[40px] 3xl:rounded-[100px] mdl:mx-[20px] 3xl:mx-[30px] flex flex-col py-[30px] px-[16px] mdl:py-[50px] mdl:px-[40px] 3xl:p-[70px] mt-[20px] mdl:mt-[25px] 3xl:mt-[30px]'>
      <div className='w-[90%]'>
        <h3 className='text-[28px] text-titleDark font-bold mdl:text-[50px] 3xl:text-[50px]'>
          {t('team_title')}
        </h3>
        <p className='text-[15px] text-[#7B7B7B] font-bold mdl:text-[20px] mt-[8px] w-[80%] mdl:w-[90%] 3xl:w-[45%] font-robotoFlex'>
          {t('team_description')}
        </p>
      </div>
      <div className='flex flex-row flex-wrap justify-between mt-[30px] mdl:mt-[50px]'>
        {visibleTeam.map(member =>
          member.github ? (
            <Link
              key={member.id}
              href={member.github}
              target='_blank' // Opens in a new tab
              rel='noopener noreferrer' // Ensures security by preventing access to window.opener
              className='flex flex-col min-h-[239px] w-[45%] mb-[20px] mdl:mb-[40px] 3xl:w-[24%]'
            >
              <div className='rounded-[10px] bg-[#FAFAFA] flex items-center justify-center py-[6px] px-[1px] mdl:py-[30px] mdl:px-[30px] 2xl:p-[40px]'>
                <Image
                  src={member.photo}
                  width={340}
                  quality={100}
                  height={340}
                  alt={`${member.fullName[lng]} Photo`}
                  className='object-cover'
                />
              </div>
              <div className='mt-[12px] mdl:mt-[25px] flex flex-col'>
                <h4 className='text-[15px] text-titleDark mdl:text-[25px] font-semibold'>
                  {member.fullName[lng]}
                </h4>
                <p className='text-[14px] text-[#A6A6A6] mdl:text-[18px] font-robotoFlex'>
                  {member.position}
                </p>
              </div>
            </Link>
          ) : (
            <div
              key={member.id}
              className='flex flex-col min-h-[239px] w-[45%] mb-[20px] mdl:mb-[40px] 3xl:w-[24%]'
            >
              <div className='rounded-[10px] bg-[#FAFAFA] flex items-center justify-center py-[6px] px-[1px] mdl:py-[30px] mdl:px-[30px] 2xl:p-[40px]'>
                <Image
                  src={member.photo}
                  width={340}
                  quality={100}
                  height={340}
                  alt={`${member.fullName[lng]} Photo`}
                  className='object-cover'
                />
              </div>
              <div className='mt-[12px] mdl:mt-[25px] flex flex-col'>
                <h4 className='text-[15px] text-titleDark mdl:text-[25px] font-semibold'>
                  {member.fullName[lng]}
                </h4>
                <p className='text-[14px] text-[#A6A6A6] mdl:text-[18px] font-robotoFlex'>
                  {member.position}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Button to toggle visibility */}
      <div className='mdl:mt-[20px] text-center'>
        <button
          onClick={() => setShowAll(!showAll)}
          className='bg-violet100 text-white py-2 px-4 rounded-md'
        >
          {showAll
            ? lng === 'ru'
              ? 'Скрыть'
              : lng === 'uz'
              ? 'Yopish'
              : 'Hide'
            : lng === 'ru'
            ? 'Вся команда'
            : lng === 'uz'
            ? 'Barcha jamoa'
            : 'All Team'}
        </button>
      </div>
    </div>
  )
}

export default Team
