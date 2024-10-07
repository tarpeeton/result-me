module.exports = {
  siteUrl: process.env.SITE_URL || 'https://result-me.uz', // The base URL of your site
  generateRobotsTxt: true,  // Generate robots.txt file
  changefreq: 'daily',  // Frequency of sitemap updates
  priority: 0.7,  // Default priority for URLs
  sitemapSize: 5000,  // Max URLs per sitemap
  exclude: ['/exclude-page'],  // Pages to exclude from the sitemap
  alternateRefs: [
    { hrefLang: 'uz', href: 'https://result-me.uz/uz' },
    { hrefLang: 'ru', href: 'https://result-me.uz/ru' },
    { hrefLang: 'en', href: 'https://result-me.uz/en' },
  ],
  additionalPaths: async (config) => {
    const dynamicRoutes = await getDynamicRoutes();
    return dynamicRoutes.map(route => ({
      loc: route.loc,
      lastmod: route.lastmod,
    }));
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/exclude-page' },
    ],
    additionalSitemaps: [
      'https://result-me.uz/uz/sitemap-0.xml',
      'https://result-me.uz/ru/sitemap-0.xml',
      'https://result-me.uz/en/sitemap-0.xml',
    ],
  },
};

// Function to generate dynamic routes for each language
async function getDynamicRoutes() {
  const posts = [
    { slug: 'post-1', updatedAt: '2024-04-01' },
    { slug: 'post-2', updatedAt: '2024-04-02' },
  ];

  const languages = ['uz', 'ru', 'en'];
  let routes = [];

  posts.forEach(post => {
    languages.forEach(lang => {
      routes.push({
        loc: `/${lang}/posts/${post.slug}`,  // Adjust loc based on language and slug
        lastmod: post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date().toISOString(),
      });
    });
  });

  return routes;
}
