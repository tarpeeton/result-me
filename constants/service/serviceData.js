import web from '@/public/images/services/web.svg'
import bot from '@/public/images/services/bot.svg'
import smm from '@/public/images/services/smm.svg'
import Group from '@/public/images/services/Group.svg'
import seo from '@/public/images/services/seo.svg'
import branding from '@/public/images/services/branding.svg'
import doctor from '@/public/images/services/doctor.png'






export const serviceDataMain = [
	{
	  id: 0,
	  slug: 'web-development',
	  name: {
		ru: 'Разработка сайтов',
		uz: 'Saytlar Yaratish',
		en: 'Website development'
	  },
	  shortDescription: {
		ru: 'Разработка сайтов, которые просты в использовании и выглядят профессионально, помогая бизнесу выделяться в интернете',
		uz: "Foydalanish uchun qulay va professional ko'rinadigan saytlarni yaratish",
		en: 'Creating websites that are user-friendly and look professional'
	  },
	  icon: web,
	  active: true,
	  main: true
	},
	{
	  id: 1,
	  slug: 'telegram-bot-development',
	  name: {
		ru: 'Разработка Telegram-ботов',
		uz: 'Telegram-botini yaratish',
		en: 'Telegram Bot Development'
	  },
	  shortDescription: {
		ru: 'Создание Telegram-ботов, которые облегчают общение с клиентами и автоматизируют рутинные процессы',
		uz: 'Mijozlar bilan aloqani yaxshilash uchun Telegram-botlarini yaratish',
		en: 'Creating Telegram bots to enhance customer communication'
	  },
	  icon: bot,
	  active: true,
	  main: true
	},
	{
	  id: 2,
	  slug: 'smm',
	  name: {
		ru: 'SMM',
		uz: 'SMM',
		en: 'SMM'
	  },
	  shortDescription: {
		ru: 'Помощь в создании и управлении социальными сетями, чтобы увеличить аудиторию и улучшить имидж бренда',
		uz: 'Ijtimoiy tarmoqlarni yaratish va boshqarishda yordam berish',
		en: 'Helping to create and manage social media accounts'
	  },
	  icon: smm,
	  active: true,
	  main: true
	},
	{
	  id: 3,
	  slug: 'ads-launch',
	  name: {
		ru: 'Запуск рекламы',
		uz: 'Reklamani ishga tushirish',
		en: 'Ad Campaign Launch'
	  },
	  shortDescription: {
		ru: 'Настройка рекламы, которая привлекает нужных клиентов и приносит бизнесу больше прибыли',
		uz: 'Mijozlarni jalb qilish va daromadni oshirish uchun reklama yaratish',
		en: 'Setting up advertising that attracts the right customers and brings more profit to the business'
	  },
	  icon: Group,
	  active: true,
	  main: true
	},
	{
	  id: 4,
	  slug: 'seo',
	  name: {
		ru: 'SEO',
		uz: 'SEO',
		en: 'SEO'
	  },
	  shortDescription: {
		ru: 'Оптимизация сайта, чтобы он был выше в поисковых системах и привлекал больше посетителей',
		uz: 'Qidiruv tizimining reytingini yaxshilash uchun saytlarni optimallashtirish',
		en: 'Optimizing websites to improve search engine rankings'
	  },
	  icon: seo,
	  active: true,
	  main: true
	},
	{
	  id: 5,
	  slug: 'branding',
	  name: {
		ru: 'Брендинг',
		uz: 'Brending',
		en: 'Branding'
	  },
	  shortDescription: {
		ru: 'Создание уникального стиля и образа для бизнеса, который будет легко узнаваем и привлекателен для клиентов',
		uz: "Biznesingiz uchun o'zgacha uslub va tasvir yaratish",
		en: 'Creating a unique style and image for your business'
	  },
	  icon: branding,
	  active: true,
	  main: true
	},
	{
	  id: 6,
	  slug: 'doctor-brand',
	  name: {
		ru: 'Доктор Бренд',
		uz: 'Doktor Brendi',
		en: 'Doctor Brand'
	  },
	  shortDescription: {
		ru: 'Доступный тариф для врачей и других специалистов из мира медицины для гарантированного увеличения потока пациентов. В тариф входит создание сайта визитки с ключевой информацией о специалисте, а также запуск рекламы в Google по ключевым запросам.',
		uz: "",
		en: 'An affordable plan for doctors and other medical professionals to ensure an increased patient flow. The plan includes creating a business card website with key information about the specialist and launching Google ads based on targeted keywords.'
	  },
	  icon: doctor,
	  active: true,
	  main: true
	},
  ]