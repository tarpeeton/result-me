import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='rounded-[30px] bg-white100 mx-[16px] py-[30px] px-[20px] mt-[20px] mdl:mt-[25px] 3xl:mt-[30px] mdl:rounded-[40px] 3xl:rounded-[100px] mdl:my-[50px] mdl:px-[40px] 3xl:py-[80px] 3xl:px-[70px] mb-[60px] mdl:mb-[80px] 3xl:mb-[100px]'>

		<div className='3xl:flex 3xl:flex-row mb-[26px] mdl:mb-[40px] 3xl:mb-[60px]'>
				<div className='3xl:w-[50%]'>
				<h5 className='text-[28px] font-bold text-titleDark mdl:text-[50px]'>Контакты</h5>
				<button
				type="submit"
				className="w-[50%] p-4 rounded-[100px] bg-[#7B72EB] text-white font-bold text-[14px] hover:bg-opacity-90 transition duration-300 mdl:py-[20px] mdl:px-[30px] mdl:w-[40%] mdl:mt-[40px] mdl:text-[18px] 3xl:w-[40%]"
				>
				Связаться с нами
				</button>
			</div>
			<div className='flex flex-col mdl:flex-row 3xl:mdl:flex-col mt-[20px] 3xl:w-[50%]'>
        <div>
          <p className='text-[#A6A6A6] text-[14px] font-medium mdl:text-[18px] 3xl:text-[19px]'>Номера телефонов</p>
          <p className='text-titleDark text-[20px] mdl:text-[28px] 3xl:text-[30px] font-semibold '>+998 90 509 25 62</p>
          <p className='text-titleDark text-[20px] mdl:text-[28px] 3xl:text-[30px] font-semibold '>+998 90 022 80 73</p>
        </div>
        <div className='mt-[20px] 3xl:mt-[40px]'>
          <p className='text-[#A6A6A6] text-[14px] font-medium mdl:text-[18px] 3xl:text-[19px]'>Менеджер</p>

          <div className='flex flex-row gap-[8px] mt-[12px]'>
            <FaTelegram className='w-[30px] h-[30px] text-[#2AABEE] 3xl:w-[40px] 3xl:h-[40px]'/>
            <p className='text-[20px] font-semibold  3xl:text-[30px]'>Telegram</p>
          </div>
        </div>
      </div>
		</div>
      

     

      {/* MAP */}
      <div className='rounded-[30px] mt-[20px] overflow-hidden'>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=69.288984%2C41.351260&z=16&pt=69.288984,41.351260,pm2rdl"
          width="100%"
          height="400px"
          frameBorder="0"
          allowFullScreen
          className="rounded-[30px] 3xl:rounded-[40px] 3xl:h-[600px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
