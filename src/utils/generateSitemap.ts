import { writeFileSync } from 'node:fs';
import { globby } from 'globby';
import prettier from 'prettier';

const SITE_URL = 'https://www.virsalabs.io';

interface PageConfig {
  path: string;
  changefreq: string;
  priority: number;
}

const pageConfigs: Record<string, PageConfig> = {
  // Main Pages
  '/': { path: '/', changefreq: 'weekly', priority: 1.0 },
  '/about-us': { path: '/about-us', changefreq: 'monthly', priority: 0.8 },
  '/contact-us': { path: '/contact-us', changefreq: 'monthly', priority: 0.8 },
  '/book-consultation': { path: '/book-consultation', changefreq: 'monthly', priority: 0.9 },
  
  // Service Pages
  '/services': { path: '/services', changefreq: 'weekly', priority: 0.9 },
  '/services/local-seo': { path: '/services/local-seo', changefreq: 'weekly', priority: 0.9 },
  '/services/website-seo': { path: '/services/website-seo', changefreq: 'weekly', priority: 0.9 },
  '/services/business-automations': { path: '/services/business-automations', changefreq: 'weekly', priority: 0.9 },
  '/services/lead-generation': { path: '/services/lead-generation', changefreq: 'weekly', priority: 0.9 },
  '/services/ppc-management': { path: '/services/ppc-management', changefreq: 'weekly', priority: 0.9 },
  '/services/social-media-management': { path: '/services/social-media-management', changefreq: 'weekly', priority: 0.9 },
  
  // Location Pages
  '/locations': { path: '/locations', changefreq: 'weekly', priority: 0.8 },
  '/locations/digital-marketing-bethlehem-pa': { path: '/locations/digital-marketing-bethlehem-pa', changefreq: 'weekly', priority: 0.8 },
  '/locations/digital-marketing-allentown-pa': { path: '/locations/digital-marketing-allentown-pa', changefreq: 'weekly', priority: 0.8 },
  '/locations/digital-marketing-easton-pa': { path: '/locations/digital-marketing-easton-pa', changefreq: 'weekly', priority: 0.8 },
  '/locations/digital-marketing-philadelphia-pa': { path: '/locations/digital-marketing-philadelphia-pa', changefreq: 'weekly', priority: 0.8 },
  '/locations/digital-marketing-newark-nj': { path: '/locations/digital-marketing-newark-nj', changefreq: 'weekly', priority: 0.8 },
  '/locations/digital-marketing-trenton-nj': { path: '/locations/digital-marketing-trenton-nj', changefreq: 'weekly', priority: 0.8 },
  
  // Niche Pages
  '/niches': { path: '/niches', changefreq: 'weekly', priority: 0.8 },
  '/niches/digital-marketing-for-roofers': { path: '/niches/digital-marketing-for-roofers', changefreq: 'weekly', priority: 0.8 },
  '/niches/digital-marketing-for-cleaning-services': { path: '/niches/digital-marketing-for-cleaning-services', changefreq: 'weekly', priority: 0.8 },
  '/niches/digital-marketing-for-detailers': { path: '/niches/digital-marketing-for-detailers', changefreq: 'weekly', priority: 0.8 },
  '/niches/digital-marketing-for-handyman-services': { path: '/niches/digital-marketing-for-handyman-services', changefreq: 'weekly', priority: 0.8 },
  '/niches/digital-marketing-for-mobile-truck-repair': { path: '/niches/digital-marketing-for-mobile-truck-repair', changefreq: 'weekly', priority: 0.8 },
  '/niches/digital-marketing-for-movers': { path: '/niches/digital-marketing-for-movers', changefreq: 'weekly', priority: 0.8 },
  
  // Blog Pages
  '/blog': { path: '/blog', changefreq: 'weekly', priority: 0.7 },
  '/blog/automated-lead-management-guide': { path: '/blog/automated-lead-management-guide', changefreq: 'monthly', priority: 0.7 },
  '/blog/boost-google-business-profile-rankings': { path: '/blog/boost-google-business-profile-rankings', changefreq: 'monthly', priority: 0.7 },
  '/blog/boost-your-seo-without-spending-a-fortune': { path: '/blog/boost-your-seo-without-spending-a-fortune', changefreq: 'monthly', priority: 0.7 },
  '/blog/local-seo-vs-paid-ads': { path: '/blog/local-seo-vs-paid-ads', changefreq: 'monthly', priority: 0.7 },
  
  // Legal Pages
  '/privacy': { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
  '/terms': { path: '/terms', changefreq: 'yearly', priority: 0.3 },
};

export async function generateSitemap() {
  try {
    // Get all .astro pages
    const pages = await globby([
      'src/pages/**/*.astro',
      '!src/pages/**/[...slug].astro', // Exclude dynamic routes
      '!src/pages/404.astro', // Exclude 404 page
      '!src/pages/_*.astro', // Exclude private pages
    ]);

    // Create URL entries for the sitemap
    const urlEntries = pages.map((page) => {
      // Convert file path to URL path
      const path = page
        .replace('src/pages/', '')
        .replace('.astro', '')
        .replace('/index', '');

      const route = path === 'index' ? '' : path;
      const url = `${SITE_URL}/${route}`;
      
      // Get page config or use defaults
      const config = pageConfigs[`/${route}`] || {
        changefreq: 'monthly',
        priority: 0.5,
      };

      return `
        <url>
          <loc>${url}</loc>
          <changefreq>${config.changefreq}</changefreq>
          <priority>${config.priority}</priority>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `;
    });

    // Generate sitemap XML
    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urlEntries.join('')}
      </urlset>
    `;

    // Format XML
    const formatted = await prettier.format(sitemap, {
      parser: 'html',
      printWidth: 120,
    });

    // Write to file
    writeFileSync('public/sitemap.xml', formatted);
    console.log('✅ Sitemap generated successfully!');
    console.log(`📄 Total pages in sitemap: ${pages.length}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
} 
