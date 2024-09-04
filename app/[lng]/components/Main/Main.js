import { useCustomTranslation } from '../../../i18n/client'
import {useLanguage} from '../../../i18n/locales/LanguageContext'

const Main = () => {
	const lng = useLanguage()
	const { t } = useCustomTranslation(lng, 'header')


	console.log("Rerender")
	return (
		<div className='flex flex-row gap-[20px]'>
			<p className='text-violet100'>{t('uslugi')}</p>
		</div>
	)
}

export default Main;