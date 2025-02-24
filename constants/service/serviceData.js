import web from '@/public/images/services/web.svg'
import bot from '@/public/images/services/bot.svg'
import smm from '@/public/images/services/smm.svg'
import Group from '@/public/images/services/Group.svg'
import seo from '@/public/images/services/seo.svg'
import branding from '@/public/images/services/branding.svg'







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
	  slug: 'context-launch',
	  name: {
		ru: 'Запуск контекстной рекламы',
		uz: 'Kontekstli reklamani ishga tushirish',
		en: 'Launching contextual advertising'
	},
	shortDescription: {
		ru: 'Эффективная настройка рекламных кампаний в поисковых сетях Google и Яндекс',
		uz: 'Google va Yandex qidiruv tarmoqlarida reklama kampaniyalarini samarali sozlash',
		en: 'Effective setup of advertising campaigns in Google and Yandex search networks'
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
	
  ]