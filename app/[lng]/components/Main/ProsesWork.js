import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';

const ProsesWork = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,

    responsive: [
      {
        breakpoint: 750, // Disable slider for screen widths below 750px
        settings: 'unslick'
      },
    ]
  };

  return (
    <div className='flex flex-col mt-[80px] gap-[10px]'>
      {/* Slider will only activate for screens larger than 750px */}
      <Slider {...settings} className="2xl:block">
        {/* CARD 1 */}
        <div className='w-full rounded-[30px] bg-violet100 p-[30px] pb-[26px] flex flex-col justify-between mb-[10px] slg:w-[45%]'> {/* Added margin-bottom for gap */}
          <div className='w-[50%]'>
            <p className='text-[28px] text-white100 font-bold'>
              Процесс работы максимально чистый и прозрачный
            </p>
          </div>
          <div className='py-[20px] px-[20px] rounded-[100px] bg-white text-center mt-[51px] slg:w-[300px]'>
            <Link href='free' className='text-[14px] font-bold text-violet100'>
              Бесплатная консультация
            </Link>
          </div>
        </div>
        {/* CARD 2 */}
        <div className='w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between mb-[10px] slg:w-[45%]'> {/* Added margin-bottom for gap */}
          <div className='w-[60%]'>
            <p className='text-[23px] text-titleDark font-bold'>РАБОТАЕМ ПО ДОГОВОРУ</p>
          </div>
          <div className='mt-[15px] w-[85%]'>
            <p className='text-[14px] text-[#454545]'>
              Мы тщательно прорабатываем все детали и фиксируем наши обязательства в договоре. Это гарантирует прозрачность, защищает ваши интересы и обеспечивает надежность наших услуг.
            </p>
          </div>
        </div>
        {/* CARD 3 */}
        <div className='w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between mb-[10px]'> {/* Added margin-bottom for gap */}
          <div className='w-[60%]'>
            <p className='text-[23px] text-titleDark font-bold'>УТВЕРЖДАЕМ ПЛАНЫ</p>
          </div>
          <div className='mt-[15px] w-[85%]'>
            <p className='text-[14px] text-[#454545]'>
              На этом этапе мы окончательно согласовываем все детали проекта, включая сроки, ресурсы и этапы выполнения. Важно, чтобы все участники имели четкое представление о ходе работы.
            </p>
          </div>
        </div>
      </Slider>

      {/* Column layout for small screens (360px to 500px) */}
      <div className="sm:hidden md:hidden lg:hidden 2xl:hidden">
        <div className='w-full rounded-[30px] bg-violet100 p-[30px] pb-[26px] flex flex-col justify-between mb-[10px]'>
          <div>
            <p className='text-[28px] text-white100 font-bold'>
              Процесс работы максимально чистый и прозрачный
            </p>
          </div>
          <div className='py-[20px] px-[30px] rounded-[100px] bg-white text-center mt-[51px]'>
            <Link href='free' className='text-[14px] font-bold text-violet100'>
              Бесплатная консультация
            </Link>
          </div>
        </div>
        <div className='w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between mb-[10px]'>
          <div className='w-[60%]'>
            <p className='text-[23px] text-titleDark font-bold'>РАБОТАЕМ ПО ДОГОВОРУ</p>
          </div>
          <div className='mt-[15px] w-[85%]'>
            <p className='text-[14px] text-[#454545]'>
              Мы тщательно прорабатываем все детали и фиксируем наши обязательства в договоре.
            </p>
          </div>
        </div>
        <div className='w-full rounded-[30px] bg-[#F4F3FF] p-[30px] pb-[26px] flex flex-col justify-between mb-[10px]'>
          <div className='w-[60%]'>
            <p className='text-[23px] text-titleDark font-bold'>УТВЕРЖДАЕМ ПЛАНЫ</p>
          </div>
          <div className='mt-[15px] w-[85%]'>
            <p className='text-[14px] text-[#454545]'>
              На этом этапе мы окончательно согласовываем все детали проекта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsesWork;
