import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import pngToIco from 'png-to-ico';

const SOURCE_ICON = 'public/favicon.png';
const OUTPUT_DIR = 'public';

async function generateFavicons() {
  try {
    const sourceBuffer = await fs.readFile(SOURCE_ICON);
    
    // Generate 16x16 PNG
    const favicon16Buffer = await sharp(sourceBuffer)
      .resize(16, 16)
      .png()
      .toBuffer();
    
    await fs.writeFile(path.join(OUTPUT_DIR, 'favicon-16x16.png'), favicon16Buffer);

    // Generate 32x32 PNG
    const favicon32Buffer = await sharp(sourceBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    await fs.writeFile(path.join(OUTPUT_DIR, 'favicon-32x32.png'), favicon32Buffer);

    // Generate 180x180 Apple Touch Icon
    await sharp(sourceBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));

    // Generate Android Chrome icons
    await sharp(sourceBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(OUTPUT_DIR, 'android-chrome-192x192.png'));

    await sharp(sourceBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(OUTPUT_DIR, 'android-chrome-512x512.png'));

    // Generate search engine icon with black background
    const searchEngineIcon = await sharp({
      create: {
        width: 512,
        height: 512,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
    .composite([{
      input: await sharp(sourceBuffer)
        .resize(400, 400, { // Slightly smaller for padding
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toFile(path.join(OUTPUT_DIR, 'search-engine-icon.png'));

    // Save temporary files for ICO generation
    const temp16Path = path.join(OUTPUT_DIR, 'temp-16.png');
    const temp32Path = path.join(OUTPUT_DIR, 'temp-32.png');
    
    await fs.writeFile(temp16Path, favicon16Buffer);
    await fs.writeFile(temp32Path, favicon32Buffer);

    // Generate ICO with both 16x16 and 32x32 sizes
    const ico = await pngToIco([temp16Path, temp32Path]);
    await fs.writeFile(path.join(OUTPUT_DIR, 'favicon.ico'), ico);

    // Clean up temporary files
    await fs.unlink(temp16Path);
    await fs.unlink(temp32Path);

    console.log('All favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 
