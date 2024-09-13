import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';
import Links from './Links';
const similarNewsData = [
  {
    id: 1,
    title: "Как социальные сети могут улучшить репутацию вашей компании",
    description:
      "От репутации компании зависит успех и развитие. Она предопределяет восприятие наименования потенциальными пациентами.",
    slug: "social-media-reputation",
  },
  {
    id: 2,
    title: "Интерактивный опрос: оцените эффективность вашего маркетинга",
    description:
      "Интерактивный опрос представляет собой метод сбора данных, при котором участники активно взаимодействуют с вопросами, используя различные форматы ответов.",
    slug: "interactive-survey",
  },
  {
    id: 3,
    title: "SEO для медицинских сайтов: Полное руководство",
    description:
      "Основы SEO состоят из нескольких ключевых элементов, которые важно понимать и правильно применять для успешного продвижения медицинских сайтов.",
    slug: "seo-medical-guide",
  },
];

const SimilarNews = () => {
  return (
    <div className="bg-white py-[30px] px-[16px] rounded-[30px] mx-[16px] mdl:py-[50px] mdl:px-[40px]">
      <h2 className="text-[#7B72EB] text-[23px] mdl:text-[50px] font-bold mb-6  3xl:text-[30px] 3xl:font-medium">
        Похожие новости
      </h2>

      <div className="flex flex-col gap-6">
        {similarNewsData.map((news) => (
          <Link href={`/blog/${news.slug}`} key={news.id} passHref className='border-b-[1px] border-[#F0F0F0] pb-[25px]'>
            <div className="block rounded-md ">
              <h3 className="text-[#010101] text-[18px] mdl:text-[25px] font-bold mb-2 3xl:text-[20px]">
                {news.title}
              </h3>
              <p className="text-[#7B7B7B] text-[14px] mdl:text-[18px] mb-4 font-robotoFlex">
                {news.description}
              </p>
              <span className="text-[#7B72EB] text-[14px] font-bold flex items-center mdl:text-[18px]">
                Подробнее
                <GrLinkNext className="ml-2" />
              </span>
            </div>
          </Link>
        ))}
      </div>

	  <div className='3xl:absolute right-[20px] bottom-[-50px]'>
			<Links/>
			</div>
    </div>
  );
};

export default SimilarNews;
