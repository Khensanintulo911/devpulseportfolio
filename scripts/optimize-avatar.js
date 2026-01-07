import sharp from 'sharp';
import path from 'path';

const src = path.resolve(process.cwd(), 'attached_assets', '1000056003_1767776269029.jpg');
const outDir = path.resolve(process.cwd(), 'attached_assets');

async function generate() {
  console.log('Reading', src);
  // Generate 800x800 WebP (focus north to keep forehead visible)
  await sharp(src)
    .resize(800, 800, { fit: 'cover', position: 'north' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'profile-800.webp'));

  // Generate 400x400 WebP
  await sharp(src)
    .resize(400, 400, { fit: 'cover', position: 'north' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'profile-400.webp'));

  // Also output an 800 JPG fallback (compressed)
  await sharp(src)
    .resize(800, 800, { fit: 'cover', position: 'north' })
    .jpeg({ quality: 75 })
    .toFile(path.join(outDir, 'profile-800.jpg'));

  console.log('Generated profile-400.webp, profile-800.webp, profile-800.jpg in attached_assets/');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});