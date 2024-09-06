import Banner from './Banner'
import Result from './Results'

const Main = () => {
	return (
		<div>
			<Banner />

			<div className='flex flex-col w-full px-[16px] mdl:px-[20px] 2xl:px-[30px]'>
				<Result />
			</div>
		</div>
	)
}

export default Main
