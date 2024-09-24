import Cases from '../Main/Cases'
import Banner from './Banner'
import Form from './Form'
import Steps from './Steps'

const Main = () => {
	return (
		<div className='relative z-[999] bg-white100'>
			<Banner/>
			<div className='bg-white100 relative z-[99]'>
				<Steps />
				<Form />
				<div className='pb-[100px] mdl:pb-[120px] 2xl:pb-[160px] px-[16px] mdl:px-[20px] 2xl:px-[30px]'>
					<Cases />
				</div>
			</div>
		</div>
	)
}

export default Main
