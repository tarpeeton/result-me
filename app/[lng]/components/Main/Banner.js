
import { useParams } from 'next/navigation'
import { useCustomTranslation } from '../../../i18n/client';
import Link from 'next/link'
import Image from 'next/image'

const Banner = () => {
	const {lng} = useParams()
	const { t } = useCustomTranslation(lng, 'banner')

  return (
	<div className='w-full rounded-b-[100px] bg-violet100 '>
		<div className='mx-auto'>
			<h1>{t('title')}</h1>
			<p>{t('subtitle')}</p>
			<Link href='predloshenya'>
				<p>{t('getInfo')}</p>
			</Link>

			<Image 
				width={500}
				height={500}
				quality={100}
				alt='banner image'
				className='object-cover'
			/>
		</div>
	</div>
  );
};

export default Banner;