import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const source = readFileSync('src/lib/cases.ts', 'utf8');
const paths = new Set(source.match(/\/cases\/[^"\s]+\.webp/g));
for (const path of [...paths]) {
  if (/-v\d+\.webp$/.test(path)) paths.add(path.replace('.webp', '-preview.webp'));
}
paths.add('/og-image.jpg');
const errors = [];
for (const path of paths) {
  const file = resolve('public', `.${path}`);
  if (!existsSync(file)) { errors.push(`Missing: ${path}`); continue; }
  const bytes = readFileSync(file);
  if (path.endsWith('.webp') && (bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP' || bytes.readUInt32LE(4) + 8 !== bytes.length)) errors.push(`Invalid WebP: ${path}`);
  if (path.endsWith('.jpg') && (bytes[0] !== 255 || bytes[1] !== 216)) errors.push(`Invalid JPEG: ${path}`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Verified ${paths.size} image assets.`);
