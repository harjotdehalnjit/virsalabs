import sharp from 'sharp';

async function generateFavicon() {
  try {
    // Create a larger square canvas (1200x1200 - optimal for social sharing)
    const resizedLogo = await sharp('public/favicon.png')
      .resize(1000, 1000, { // Slightly smaller for padding
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Create the final square image with black background
    await sharp({
      create: {
        width: 1200,
        height: 1200,
        channels: 4,
        background: { r: 0, g: 0, b: 0 } // Pure black #000000
      }
    })
    .composite([{
      input: resizedLogo,
      gravity: 'center', // This will automatically center the image
      blend: 'over'
    }])
    .png()
    .toFile('public/favicon-bg.png');

    console.log('Successfully generated favicon-bg.png');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 
