import '@/app/_styles/globals.css'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { LanguageProvider } from '../i18n/locales/LanguageContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Head from 'next/head'
import Script from 'next/script'

export async function generateStaticParams() {
  if (!languages || !Array.isArray(languages)) {
    throw new Error('Languages array is not defined or is not an array.')
  }
  return languages.map(lng => ({ lng }))
}

export const metadata = {
  title: {
    template: '%s',
    default:
      'Result Agency - Разработка комплексных стратегий для медицинского бизнеса'
  },
  description:
    'Мы специализируемся на разработке комплексных стратегий, направленных на рост вашего медицинского бизнеса.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://result-me.uz',
    title:
      'Result Agency - Разработка комплексных стратегий для медицинского бизнеса',
    description:
      'Мы специализируемся на разработке комплексных стратегий, направленных на рост вашего медицинского бизнеса.',
    images: [
      {
        url: 'https://result-me.uz/grap.png',
        width: 1200,
        height: 630,
        alt: 'Result Agency - Логотип'
      }
    ],
    site_name: 'Result Agency'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Result Agency - Разработка комплексных стратегий для медицинского бизнеса',
    description:
      'Мы специализируемся на разработке комплексных стратегий, направленных на рост вашего медицинского бизнеса.',
    images: ['https://result-me.uz/favicon-32x32.png']
  },
  alternates: {
    canonical: 'https://result-me.uz'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} /> */}
        {/* <!-- For Android --> */}
        {/* <link rel='icon'  sizes="48x48" href={metadata.icons.icon} />

      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/> */}

      {/* <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel='manifest' href={metadata.manifest} />
      </Head> */}

      <body>
        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-MDWVM3M'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Google Analytics */}
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=AW-11414753579'
        ></Script>
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'AW-11414753579');
                        `
          }}
        ></Script>

        {/* Yandex Metrika */}
        <Script
          id='yandex-metrika'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
                          (function(m,e,t,r,i,k,a){
                            m[i]=m[i]||function(){
                              (m[i].a=m[i].a||[]).push(arguments)
                            };
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {
                              if (document.scripts[j].src === r) { return; }
                            }
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                          ym(98508546, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                          });
                        `
          }}
        ></Script>
        <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/98508546'
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript>

        <LanguageProvider lng={lng}>
          <Header lng={lng} />
          <main className='w-full bg-white relative'>{children}</main>
          <Footer lng={lng} />
        </LanguageProvider>
      </body>
    </html>
  )
}
