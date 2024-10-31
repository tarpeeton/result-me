import Title from './Title'
import Content from './Content'
import Blog from '../Main/Blog'


const Cases = () => {
  return (
	<div>
		<Title/>
		<Content/>
		<div className='px-[16px] mdl:px-[20px] 3xl:px-[30px]'>
		<Blog/>
		</div>
	</div>
  );
};

export default Cases;