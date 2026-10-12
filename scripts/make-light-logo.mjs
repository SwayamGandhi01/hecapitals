/**
 * Generates the light-background version of the brand mark.
 *
 * The supplied artwork (public/brand/he-capital-markets-logo.png) sets "HE"
 * and "MARKETS" in white and "CAPITAL" in the brand blue, so it only reads on
 * a dark surface. The glass header is light, so it needs the opposite version.
 *
 * This swaps the white ink for the brand navy and leaves everything else
 * alone: the blue ink keeps its exact colour, and every pixel's alpha is
 * copied through untouched, so the letterforms, spacing, globe and
 * antialiasing are identical to the original. It is a colour variant of the
 * supplied mark, not a redraw.
 *
 * If the brand owner later supplies an official light-background logo, drop it
 * in as public/brand/he-capital-markets-logo-on-light.png and delete this
 * script — nothing else needs to change.
 *
 * Run with:  node scripts/make-light-logo.mjs
 */
import sharp from "sharp";

const SRC = "public/brand/he-capital-markets-logo.png";
const OUT = "public/brand/he-capital-markets-logo-on-light.png";

/** brand-800 — the same navy as the header's navigation links. */
const NAVY = [0x17, 0x34, 0x5f];

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const out = Buffer.from(data);
let recoloured = 0;

for (let i = 0; i < data.length; i += info.channels) {
  const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
  if (a === 0) continue;

  // The artwork uses exactly two inks. White ink is near-neutral and bright;
  // anything else is the blue ink or an antialiased blend of the two.
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max === 0 ? 0 : (max - min) / max;

  if (saturation < 0.12 && max > 170) {
    out[i] = NAVY[0];
    out[i + 1] = NAVY[1];
    out[i + 2] = NAVY[2];
    // out[i + 3] is deliberately left as-is: coverage is unchanged.
    recoloured += 1;
  }
}

await sharp(out, {
  raw: { width: info.width, height: info.height, channels: info.channels },
})
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(
  `${OUT} written — ${info.width}x${info.height}, ${recoloured} white-ink pixels recoloured to navy.`,
);
