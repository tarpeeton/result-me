import Form from '../StepsWorking/Form'
import FAQAccordion from './Accordion'
import Services from './Services'
import Title from './Title'

const ServicesMain = () => {







	return (
		<div>
			<div className='bg-[#F8F8F8]'>
				<Title />
				<Services />
				<Form />
				<div className='mt-[100px] mdl:mt-[120px] 2xl:mt-[150px]'>
					<FAQAccordion />
				</div>
			</div>
		</div>
	)
}

export default ServicesMain
