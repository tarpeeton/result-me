"use client";
import React , {useState , useEffect} from "react";
import { useParams } from 'next/navigation';
import { useCustomTranslation } from '../../../i18n/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import inter from '@/public/images/cases/inter.png';
import Image from 'next/image';
import Link from 'next/link';
import caseDesckription from '@/public/images/Vector.png';



const casedata = [
	{
	  id: 1,
	  banner: {
		title: "Intermed Innovation",
		shortDescription: "Сайт SEO",
		photo: inter,
		slug: 'intermed'
	  },
	  statistics: [
		{label: 'Конверсия с сайта увеличилась на 17%. Запущенная реклама приносит 200+ лидов по цене 2,1$ за лид в течении 1 месяца Эти результаты подтверждают успешное привлечение клиентов и повышение интереса к продуктам компании.'}
	  ],
	  serviceDataFilterTypeSlug: 'web-development , seo'
	},
	{
	  id: 2,
	  banner: {
		title: "MRJ Trade",
		shortDescription: "Сайт SEO Брендинг Реклама",
		photo: "https://ucarecdn.com/581a982e-f1c1-44c1-8dd4-1862300a3e0c/-/preview/1000x533/",
		slug: 'mrj-trade'
	  },
	  statistics: [
		{ value: "+1,560", label: "кликов на сайт за месяц" },
		{ value: "+0,32$", label: "цена за клик" },
		{ value: "+11,22%", label: "CTR" },
	  ],
	  serviceDataFilterTypeSlug: 'web-development , brending , ads-launch , seo'
	},
	{
	  id: 3,
	  banner: {
		title: "Prime medical center",
		shortDescription: "SMM Сайт",
		photo: 'https://ucarecdn.com/3d44d91c-b27b-41a0-9eb5-a02d51e18ad0/-/preview/1000x533/',
		slug: 'prime-medical-center'
	  },
	  statistics: [
		{ value: "+41%", label: "число обращений в клинику" },
		{ value: "+23%", label: "посещаемость" },
		{ value: "+18,200%", label: "посещений сайта / год" },
	  ],
	  serviceDataFilterTypeSlug: 'web-development , smm'
	},
	{
	  id: 4,
	  banner: {
		title: "Dr Odil Alisherovich",
		shortDescription: "Сайт SMM ",
		photo: 'https://ucarecdn.com/3821b6ff-68bf-49a0-95a1-3a97a2b24367/-/preview/1000x533/',
		slug: 'dr-odil-alisherovich'
	  },
	  statistics: [
		{ value: "+750", label: "подписчиков в Telegram" },
		{ value: "+1070", label: "подписчиков в Instagram" },
	  ],
	  serviceDataFilterTypeSlug: 'web-development , smm'
	},
	{
	  id: 5,
	  banner: {
		title: "Mastona Med",
		shortDescription: "SMM",
		photo: 'https://ucarecdn.com/9838f328-be53-4820-beb0-50de671b5042/-/preview/1000x533/',
		slug: 'mostona-med'
	  },
	  statistics: [
		{label: 'Мы предоставили клинике все необходимые материалы для работы, что позволило их команде эффективно справляться с задачами.'}
	  ],
	  serviceDataFilterTypeSlug: 'smm'
	},
	{
	  id: 6,
	  banner: {
		title: "Бахтиер Наджиюллаевич",
		shortDescription: "Реклама",
		photo: 'https://ucarecdn.com/59e5684a-271c-41ab-a8d2-1efe4622449e/-/preview/1000x533/',
		slug: 'baxtiyor-nadjullayevich'
	  },
	  statistics: [
		{ value: "+4,820", label: "кликов на сайт" },
		{ value: "0,10$", label: "цена за клик" },
		{ value: "+14,22%", label: "CTR" },
	  ],
	  serviceDataFilterTypeSlug: 'ads-launch'
	},
	{
	  id: 7,
	  banner: {
		title: "Smile Design",
		shortDescription: "Реклама",
		photo: 'https://ucarecdn.com/319af659-eec1-45b4-9cfc-870415179a17/-/preview/1000x533/',
		slug: 'smile-design'
	  },
	  statistics: [
		{ value: "2,450", label: "кликов на сайт" },
		{ value: "0,05$", label: "цена за клик" },
		{ value: "11,64%", label: "CTR" },
	  ],
	  serviceDataFilterTypeSlug: 'ads-launch'
	},
	{
	  id: 8,
	  banner: {
		title: "Нафиса Шухратовна",
		shortDescription: "Сайт Брендинг",
		photo: "https://ucarecdn.com/ff5c48de-f62f-43d3-930f-deda157f95d8/-/preview/1000x533/",
		slug: 'nafisa-shuxratovna'
	  },
	  statistics: [
		{label: "Разработанный сайт оказался удобным и информативным, что позволило пациентам быстро находить необходимую информацию о стоматологе и услугах."}
	  ],
	  serviceDataFilterTypeSlug: 'web-development , brending'
	},
	{
	  id: 10,
	  banner: {
		title: "Хайрилло Рахматуллаевич",
		shortDescription: "Сайт Брендинг",
		photo: "https://ucarecdn.com/2ba0ba68-c9fe-4385-9455-ab649077f091/-/preview/1000x533/",
		slug: 'xayrullo-rahmatullaevich'
	  },
	  statistics: [
		{ label: "Разработанный сайт стал успешным информационным ресурсом, который привлекает внимание потенциальных клиентов и повышает имидж врача. Фирменный стиль был успешно внедрен, что помогло повысить узнаваемость врача на рынке." },
	  ],
	  serviceDataFilterTypeSlug: 'web-development , brending'
	},
	{
	  id: 11,
	  banner: {
		title: "Ant Group",
		shortDescription: "SMM",
		photo: 'https://ucarecdn.com/49c73bea-744c-4688-9381-749f0a02dddd/-/preview/1000x533/',
		slug: 'ant-group'
	  },
	  statistics: [
		{label: 'Успешно проведены SMM-мероприятия, что способствовало росту взаимодействия с аудиторией и укреплению бренда компании.'}
	  ],
	  serviceDataFilterTypeSlug: 'smm'
	},
	{
	  id: 12,
	  banner: {
		title: "Алишер Бахромович",
		shortDescription: "Сайт Реклама SEO Брендинг",
		photo: "https://ucarecdn.com/63e07933-c844-4595-bb71-7f8daeb71e1a/-/preview/1000x533/",
		slug: 'alisher-baxromovich'
	  },
	  statistics: [
		{ value: "2,840", label: "кликов на сайт" },
		{ value: "0,11$", label: "цена за клик" },
		{ value: "13,63%", label: "CTR" },
	  ],
	  serviceDataFilterTypeSlug: 'web-development , adss-launch , seo , brending'
	},
	{
	  id: 13,
	  banner: {
		title: "Ахмедов Санджар Акбарович",
		shortDescription: "Сайт Реклама Брендинг",
		photo: "https://ucarecdn.com/15d5c5c4-5760-4093-a6a7-4df1af132578/-/preview/1000x533/",
		slug: 'sanjar-akbarovich'
	  },
	  statistics: [
		{ value: '14,5 тыс', label: 'кликов на сайт' },
		{ value: '0,07$', label: 'цена за клик' },
		{ value: '14,11%', label: 'CTR' },
	  ],
	  serviceDataFilterTypeSlug: 'web-development , smm , brending'
	},
	{
	  id: 14,
	  banner: {
		title: "Азиза Шахзадэевна",
		shortDescription: "Реклама Сайт",
		photo: "https://ucarecdn.com/c1131e2f-5cdb-4c1a-8a37-46bd923ceae2/-/preview/1000x533/",
		slug: 'aziza-shaxzadeevna'
	  },
	  statistics: [
		{ label: "Разработанный сайт стал хорошим ресурсом для пациентов, предоставив всю информацию о враче в свободном доступе 24 / 7, что способствовало увеличению видимости в интернете." },
	  ],
	  serviceDataFilterTypeSlug: 'web-development , ads-launch'
	},
  ];

const CaseFilter = ({title}) => {
	const { lng, slug } = useParams(); // Extract the slug from URL
	const { t } = useCustomTranslation(lng, 'result');
	const [filteredCases, setFilteredCases] = useState(null);
  

	console.log(filteredCases , "FILTERED CAS")


	// Filtering the case data based on different slugs
	useEffect(() => {
	  if (slug) {
		const filtered = casedata.filter(item => {
		  const slugsArray = item.serviceDataFilterTypeSlug.split(',').map(s => s.trim());
		  return slugsArray.includes(slug); // Check if the current slug is in the array
		});
		setFilteredCases(filtered);
	  } else {
		setFilteredCases(casedata); // Default to showing all cases if no slug matches
	  }
	}, [slug]);
  


	if (!filteredCases || filteredCases.length === 0) {
		return null; // Prevent rendering if there is no case data
	}

	// Slider settings
	const settings = {
	  dots: false,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 1,
			infinite: true,
		  },
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 1,
			rows: 1,
			infinite: true,
		  },
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 1,
			infinite: true,
		  },
		},
	  ],
	};





  return (
    <div className='mt-[80px] mdl:mt-[100px] 2xl:mt-[200px]'>
      {/* Case Title */}
      <div className='flex flex-col p-[24px] w-full h-full'>
        <p className='text-[28px] mdl:text-[50px] 3xl:text-[60px] font-bold'>
           {title[lng]}
        </p>
        <p className='bg-violet100 text-white100 text-[23px] mdl:text-[40px] 3xl:text-[50px] font-bold p-[10px] w-[243px] mdl:w-[426px] 3xl:w-[535px] rounded-[170px] text-center rotate-[-5deg]'>
          {t('case_subtitle')}
        </p>
      </div>
      {/* Slider Section */}
      <div className='2xl:mt-[60px] mdl:max-h-[500px] 4xl:max-h-[900px]'>
        <Slider {...settings} className='w-full cursor-pointer'>
          {/* Slides */}
          {filteredCases.map((item) => (
            <div key={item.id} className="w-full mt-[20px] slg:max-w-[99%] 6xl:max-w-[99%]">
              <Link href={`/cases/${item.banner.slug}`} passHref>
                <div>
                  <Image
                    src={item.banner.photo}
                    width={740}
                    height={450}
                    quality={100}
                    alt={`${item.banner.title} banner`}
                    className="object-contain w-full h-full"
                  />
                  <div className="mt-[20px] 3xl:mt-[25px] flex flex-col gap-[4px]">
                    <p className="text-[20px] font-semibold  mdx:text-[28px] 4xl:text-[35px]">
                      {item.banner.title}
                    </p>
                    <p className="text-[14px] text-violet100 mdx:text-[18px] font-semibold flex items-center flex-wrap">
                      {/* Replace spaces in description with an image */}
                      {item.banner.shortDescription.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <Image
                              src={caseDesckription}
                              width={40}
                              quality={100}
                              height={40}
                              alt="separator"
                              className="mx-[6px] w-[14px] h-[14px] mdl:w-[20px] mdl:h-[20px]"
                            />
                          )}
                          <span>{word}</span>
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <Link
        href='/cases'
        className='mt-[40px] mdx:mt-[60px] w-[175px] h-[50px] px-[30px] py-[20px] mx-auto rounded-[100px] bg-violet100 flex items-center justify-center xl:mt-[60px] 3xl:mt-[100px] 4xl:w-[300px] 4xl:h-[62px] 4xl:mt-[60px]'
      >
        <p className='text-white100 font-bold text-[14px] 4xl:text-[18px]'>
		{lng === 'ru' ? "Все кейсы" : lng === 'uz' ? "Barcha Keyslar" : "All Cases"}
        </p>
      </Link>
    </div>
  );
};

export default CaseFilter;
