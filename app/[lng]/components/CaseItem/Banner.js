import Image from 'next/image';

const Banner = ({ data }) => {
  // Extract banner data
  const { banner } = data;

  return (
    <div
      className='w-full rounded-[30px]  3xl:flex 3xl:flex-row 3xl:justify-center 3xl:items-center mt-[20px] mdl:mt-[30px] mdl:rounded-[40px] 3xl:rounded-[50px] mdl:p-[0] '
      style={{
        backgroundImage: `url(${banner.background.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
		
      <div className='3xl:w-[60%] 3xl:flex 3xl:items-center 3xl:justify-center mb-[50px] py-[30px] px-[20px]'>
        <div className='3xl:w-[80%]'>
          <h1 className='text-white text-[35px] mdl:text-[50px] font-bold mb-[15px]'>
            {banner.title.ru}
          </h1>

          {/* Short description */}
          <p className='text-white text-[14px] mdl:text-[20px] 3xl:text-[21px] mb-[15px]'>
            {banner.shortDescription.ru}
          </p>
        </div>
      </div>

      <div className='relative w-full 3xl:w-[40%]'>
        {/* Logo */}
        {banner.logo?.url && (
          <div className='absolute right-0 3xl:right-[25px]'>
            <Image
              src={banner.logo.url}
              alt='Logo'
              width={100}
              height={100}
              quality={100}
              className='w-[100px] h-auto'
            />
          </div>
        )}

        {/* Photo */}
        {banner.photo?.url && (
          <div className='2xl:rounded-[50px]'>
            <Image
              src={banner.photo.url}
              alt='Banner Photo'
              width={500} // Adjust according to your design
              height={500} // Adjust according to your design
              quality={100}
              className='w-full h-auto 2xl:rounded-[50px]'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
