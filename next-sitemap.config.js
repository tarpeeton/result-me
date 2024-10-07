// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://result-me.uz',  // Saytning asosiy URL manzili
    generateRobotsTxt: true,  // Robots.txt faylini generatsiya qilish
    changefreq: 'daily',  // Sitemapni yangilash chastotasi
    priority: 0.7,  // URLning ustuvorlik darajasi
    sitemapSize: 5000,  // Maksimal URLlar soni bitta sitemapda
    locales: ['uz', 'ru', 'en'],  // Til variantlari
    exclude: ['/exclude-page'],  // Ehtimoliy chiqarib tashlanadigan sahifalar
    alternateRefs: [
      { hrefLang: 'uz', href: 'https://result-me.uz/uz' },
      { hrefLang: 'ru', href: 'https://result-me.uz/ru' },
      { hrefLang: 'en', href: 'https://result-me.uz/en' },
    ],
  }
  