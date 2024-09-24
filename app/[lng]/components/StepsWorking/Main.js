import Cases from '../Main/Cases'
import Banner from './Banner'
import Form from './Form'
import Steps from './Steps'


const Main = () => {
  return (
	<div className=''>
		<Banner/>

		<div className='bg-white100 relative z-[99]'>
			
			<Steps/>

		<Form/>
		<div className='mb-[100px] mdl:mb-[120px] 2xl:mb-[160px] px-[16px] mdl:px-[20px] 2xl:px-[30px]'>
		<Cases/>

		</div></div>
		
	</div>
  );
};

export default Main;