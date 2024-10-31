import '@/app/_styles/globals.css'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { LanguageProvider } from '../i18n/locales/LanguageContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Script from 'next/script'

export async function generateStaticParams() {
  if (!languages || !Array.isArray(languages)) {
    throw new Error('Languages array is not defined or is not an array.')
  }
  return languages.map(lng => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta charSet="UTF-8" />
        <title>Result Agency - Разработка комплексных стратегий для медицинского бизнеса</title>
        <meta
          name="description"
          content="Мы специализируемся на разработке комплексных стратегий, направленных на рост вашего медицинского бизнеса."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://result-me.uz" />
        <meta
          property="og:title"
          content="Result Agency - Разработка комплексных стратегий для медицинского бизнеса"
        />
        <meta
          property="og:description"
          content="Мы специализируемся на разработке комплексных стратегий, направленных на рост вашего медицинского бизнеса."
        />
        <meta
          property="og:image"
          content="https://result-me.uz/grap.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Result Agency" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Result Agency - Разработка комплексных стратегий для медицинского бизнеса"
        />
        <meta
          name="twitter:description"
          content="Мы специализируемся на разработке комплексных стратегий, направленных на рост вашего медицинского бизнеса."
        />
        <meta
          name="twitter:image"
          content="https://result-me.uz/favicon-32x32.png"
        />

        <link rel="canonical" href="https://result-me.uz" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="yandex-verification" content="424c2acd41a91a33" />
      </head>

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
