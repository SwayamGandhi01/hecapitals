import { clientLogoSizes } from "./client-logo-sizes.generated";

/**
 * Companies listed on the "Clients We Have Worked With" page of
 * hecapitalmarkets.com, using the logo files from the company's own media
 * library. Only the logos the source site labels by filename are included —
 * a handful of unnamed, unidentifiable marks on that page are left out rather
 * than guessed at.
 */
export type Client = {
  name: string;
  logo: string;
  /** Intrinsic size of the trimmed file; see scripts/trim-client-logos.mjs. */
  width: number;
  height: number;
};

/**
 * Pairs a company with its logo file and that file's real dimensions. Throws at
 * module load if a logo is missing from the generated sizes, so a renamed or
 * deleted asset fails the build rather than shipping a broken image.
 */
const client = (name: string, file: string): Client => {
  const size = clientLogoSizes[file];
  if (!size) {
    throw new Error(
      `No size recorded for "${file}". Run: node scripts/trim-client-logos.mjs`,
    );
  }
  return { name, logo: `/images/clients/${file}`, ...size };
};

export const clients: Client[] = [
  client("Aether Global Innovations Corporation", "aether-global-innovations.webp"),
  client("Amex Exploration", "amex-exploration.webp"),
  client("ARway", "arway.webp"),
  client("Cerrado Gold", "cerrado-gold.webp"),
  client("Defence Therapeutics", "defence-therapeutics.webp"),
  client("Defiance Silver Corp", "defiance-silver.webp"),
  client("Edison Lithium Corp", "edison-lithium.webp"),
  client("F3 Uranium", "f3-uranium.webp"),
  client("FLYHT", "flyht.webp"),
  client("FSD Pharma", "fsd-pharma.webp"),
  client("GoldShore Resources", "goldshore-resources.webp"),
  client("Graphano Energy", "graphano-energy.webp"),
  client("Hemostemix", "hemostemix.webp"),
  client("Hillcrest Energy Technologies", "hillcrest-energy.webp"),
  client("Independence Contract Drilling", "independence-contract-drilling.webp"),
  client("Inhibrx", "inhibrx.webp"),
  client("Lomiko Metals", "lomiko-metals.webp"),
  client("Marimaca Copper Corp", "marimaca-copper.webp"),
  client("MAX Resource Corp", "max-resource.webp"),
  client("POET Technologies", "poet-technologies.webp"),
  client("Predictmedix", "predictmedix.webp"),
  client("Quantum eMotion", "quantum-emotion.webp"),
  client("RedHill Biopharma", "redhill-biopharma.webp"),
  client("Southern Silver Exploration Corp", "southern-silver.webp"),
  client("Strathmore Plus Uranium", "strathmore-plus.webp"),
  client("Tantalex Lithium Resources", "tantalex-lithium.webp"),
  client("The Metals Company", "the-metals-company.webp"),
  client("Usha Resources", "usha-resources.webp"),
];

/**
 * The homepage marquee runs two rows in opposite directions. Splitting the
 * list by alternating index keeps sector and logo-shape variety in both rows,
 * rather than putting all the mining marks in one and all the pharma in the
 * other.
 */
export const marqueeRowOne: Client[] = clients.filter((_, i) => i % 2 === 0);
export const marqueeRowTwo: Client[] = clients.filter((_, i) => i % 2 === 1);
