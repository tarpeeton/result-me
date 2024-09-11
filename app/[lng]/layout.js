import "@/app/_styles/globals.css";
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { LanguageProvider } from '../i18n/locales/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export async function generateStaticParams() {
    if (!languages || !Array.isArray(languages)) {
        throw new Error("Languages array is not defined or is not an array.");
    }
    return languages.map((lng) => ({ lng }));
}

export const metadata = {
    title: {
        template: "%s",
        default: "Result"
    },
    description: "Result ",
    icons: {
        icon: [
            '/favicon.ico'
        ]
    },
    manifest: '/site.webmanifest'
};

export default function RootLayout({
    children,
    params: { lng }
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                {/* Встраивание Google Analytics через gtag.js */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11414753579"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'AW-11414753579');
                        `,
                    }}
                />
            </head>
            <body>
                {/* Поддержка Google Tag Manager через noscript */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MDWVM3M"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                <LanguageProvider lng={lng}>
                    <Header lng={lng} />
                    <main className="w-full bg-white relative">{children}</main>
                    <Footer lng={lng} />
                </LanguageProvider>
            </body>
        </html>
    );
}
