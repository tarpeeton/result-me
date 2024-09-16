import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Soon = () => {
  const Data = [
    {
      img: 'https://ucarecdn.com/01959c30-254f-4c22-921e-9bf13b9f45d7/-/preview/1000x981/',
      isSoon: false,
    },
    {
      img: 'https://ucarecdn.com/d609136f-34ee-4bbe-b0da-629f8c2ea340/-/preview/1000x981/',
      isSoon: false,
    },
    {
      img: 'https://ucarecdn.com/e133f08c-8257-4164-9243-c226521c4f6e/-/preview/1000x981/',
      isSoon: false,
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mt-[80px] flex flex-col gap-[20px]'>
      <div className='flex flex-col p-[24px] w-full h-full'>
        <p className='text-[28px] mdl:text-[50px] 3xl:text-[60px] font-bold'>
          Творчество без границ
        </p>
        <p className='bg-violet100 text-white100 text-[23px] mdl:text-[40px] 3xl:text-[50px] font-bold p-[10px] w-[243px] mdl:w-[426px] 3xl:w-[535px] rounded-[170px] text-center rotate-[-5deg]'>
          наши проекты
        </p>
      </div>
      <Slider {...settings}>
        {Data.map((d, index) => (
          <div key={index} className="relative">
            <div
              className={`2xl:w-[97%] cursor-pointer rounded-[25px] w-full h-full px-[12px] bg-gray-900 pt-[24px]  ${
                d.isSoon ? '' : 'bg-white bg-opacity-50 backdrop-blur-xl'
              }`}
            >
				<div>
				<Image
                src={d.img}
                width={300}
                height={300}
                quality={100}
                className={`'object-contain rounded-[25px] w-full h-full' ${d.isSoon ? '' : 'bg-white bg-opacity-50 blur-[4px]'}`}
              />
				</div>
              
              {!d.isSoon && (
                <div className="absolute inset-0 flex items-center justify-center w-[183px] mx-auto">
                  <button className="bg-white p-[10px] rounded-[100px] text-[18px] w-full">Скоро</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Soon;
