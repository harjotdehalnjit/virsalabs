import sharp from 'sharp';
import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicons() {
  const sourceImage = join(__dirname, '../public/favicon.png');
  
  try {
    // Generate different sizes from PNG
    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(sourceImage)
        .resize(size, size)
        .toFile(join(__dirname, '../public', filename));
      console.log(`Generated ${filename}`);
    }

    // Generate monochrome SVG for Safari pinned tab
    const svgSource = join(__dirname, '../public/favicon.svg');
    const svgContent = readFileSync(svgSource, 'utf8');
    
    // Create a monochrome version by removing any fill colors
    const monochromeContent = svgContent
      .replace(/fill="[^"]*"/g, '')
      .replace(/<style>.*?<\/style>/gs, '');
    
    writeFileSync(
      join(__dirname, '../public/safari-pinned-tab.svg'),
      monochromeContent
    );
    console.log('Generated safari-pinned-tab.svg');

    // Create webmanifest file
    const manifest = {
      name: 'Virsa Labs',
      short_name: 'Virsa',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      theme_color: '#000027',
      background_color: '#000027',
      display: 'standalone'
    };

    writeFileSync(
      join(__dirname, '../public/site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );
    console.log('Generated site.webmanifest');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 