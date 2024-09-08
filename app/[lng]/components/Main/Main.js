import Banner from './Banner'
import Result from './Results'
import Services from './Services'
import Cases from './Cases'
import ProsesWork from './ProsesWork'
import Blog from './Blog'
import Partners from './Partners'
import Puzzle from './Puzzle'

const Main = () => {
	return (
		<div>
			<Banner />

			<div className='flex flex-col w-full px-[16px] mdl:px-[20px] 2xl:px-[30px]'>
				<Result />
				<Services/>
				<Puzzle/>
				<Cases/>
				<ProsesWork/>
				<Partners />
				<Blog/>
			</div>
		</div>
	)
}

export default Main
