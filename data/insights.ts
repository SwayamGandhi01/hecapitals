/**
 * Press releases published on hecapitalmarkets.com. These are the only two
 * articles the site has, and both were published on 28 February 2022 (date
 * confirmed against the source WordPress REST API). They are presented as the
 * historical archive they are, not as current announcements.
 */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution: string };

export type Article = {
  slug: string;
  title: string;
  /** ISO date, used for <time dateTime> and for sorting. */
  date: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** The company whose release this is — these are client announcements. */
  subject: string;
  blocks: ArticleBlock[];
  disclaimer: string[];
};

export const articles: Article[] = [
  {
    slug: "opawica-intercepts-visible-gold",
    title:
      "Opawica Intercepts Visible Gold “Again” & Completes 4,742m Of Drilling At Bazooka",
    date: "2022-02-28",
    category: "Mining",
    subject: "Opawica Explorations Inc.",
    excerpt:
      "Opawica Explorations Inc. provides an update on the first phase of drilling at its Bazooka property in the Rouyn-Noranda camp of Quebec, where visible gold was encountered at 279.45 metres.",
    image: "/images/sectors/mining.webp",
    imageAlt: "Bucket-wheel excavator working an open-pit mine",
    blocks: [
      {
        type: "paragraph",
        text: "Vancouver, B.C. – February 28, 2022 – Opawica Explorations Inc. (TSXV: OPW) (FSE: A2PEAD) (OTC: OPWEF) (the “Company” or “Opawica”) is pleased to provide an update on its first phase of drilling on the Company’s Bazooka property in Rouyn Noranda camp of Quebec.",
      },
      { type: "heading", text: "Highlights" },
      {
        type: "list",
        items: [
          "To date the Company has drilled 22 holes on the Bazooka property, comprising 4,742 metres. 1,658 rock samples, representing 2,092 linear metres, have been sent for assay to Actlabs in Quebec.",
          "The drill program targeting the Cadillac shear zone intersected prospective geology with a variable amount of quartz veining, brecciation, silicification, and quartz stockwork, with associated sulphides.",
          "Visible gold was encountered in a quartz vein shear zone in hole OP-21-22 at a depth of approximately 279.45 metres.",
        ],
      },
      {
        type: "quote",
        text: "The drilling to date has progressed extremely well. It is encouraging to be encountering visible gold during our maiden drill program. Over 2,000 metres of core have now been sent for assay. Phase two of the planned drilling will begin shortly, in addition to a maiden drill campaign on the Arrowhead project. We look forward to the assay results and reporting them to our shareholders.",
        attribution:
          "Blake Morgan, President and Chief Executive Officer, Opawica Explorations Inc.",
      },
      { type: "heading", text: "Bazooka Property" },
      {
        type: "paragraph",
        text: "The Bazooka property occurs along one of the most prolific auriferous structures in the world, the Cadillac-Larder Lake break/fault. The Cadillac-Larder Lake break/fault, in part, marks the boundary between the Archean Abitibi sub province in the north and the predominantly metasedimentary Pontiac sub province south of the fault.",
      },
      {
        type: "paragraph",
        text: "Gold mineralization on the property occurs within mixed, up to 60-metre-wide (estimated true width), strong quartz-carbonate-sericite and talc-chlorite schists of sedimentary and ultramafic to mafic volcanic protoliths, respectively, and is referred to as the Main zone. The alteration and mineralization are spatially associated with the Cadillac-Larder Lake.",
      },
      {
        type: "paragraph",
        text: "The break/fault zone is at the base and is characterized by up to two-metre-wide (estimated true width), strongly graphitic fault. The graphitic fault generally marks the contact between the sedimentary and ultramafic metavolcanic rocks.",
      },
      {
        type: "paragraph",
        text: "Structures and hydrothermal pathways were interpreted using the co-occurrence of selected exploration criteria in drill hole data. Interpreted prospective panels trend generally east-west with a steep dip to the north. They are constrained within the northern and southern borders of the Cadillac shear zone, a 150-metre-wide corridor of highly carbonate-chlorite-talc altered and schistosed ultramafic units, which form a Z-shape asymmetric drag fold in the area of the Bazooka historic mine.",
      },
      {
        type: "paragraph",
        text: "Derrick Strickland, P. Geo (OGQ No. 35402), is the qualified person for Opawica Explorations, and has reviewed and approved the technical content of this news release.",
      },
      { type: "heading", text: "About Opawica Explorations Inc." },
      {
        type: "paragraph",
        text: "Opawica Explorations Inc. is a junior Canadian exploration company with a strong portfolio of precious and base metal properties within the Rouyn-Noranda region of the Abitibi Gold Belt in Québec and in Central Newfoundland and Labrador. The management of the Company has a track record in discovering and developing exploration projects. The objective of the Company is to increase shareholder value through the development of exploration properties using cost effective exploration practices, acquiring further exploration properties, and seeking partnerships by either joint venture or sale with industry leaders.",
      },
    ],
    disclaimer: [
      "Neither the TSX Venture Exchange nor its Regulation Service Provider (as the term is defined in the policies of the TSX Venture Exchange) accepts responsibility for the adequacy or accuracy of this news release.",
      "This news release contains certain forward-looking statements, which relate to future events or future performance and reflect the current expectations and assumptions of management. Readers are cautioned that these forward-looking statements are neither promises nor guarantees, and are subject to risks and uncertainties that may cause future results to differ materially from those expected including, but not limited to, market conditions, availability of financing, actual results of the exploration and other activities of the Company, environmental risks, future metal prices, operating risks, accidents, labour issues, delays in obtaining governmental approvals and permits, and other risks in the mining industry. These forward-looking statements are made as of the date of the original release and the Company does not assume any obligation to update or revise them.",
    ],
  },
  {
    slug: "boosh-revenues-surge",
    title:
      "Boosh Revenues Surge Over 4,500% On Acquisition Of Beanfields",
    date: "2022-02-28",
    category: "Consumer",
    subject: "Boosh Plant-Based Brands Inc.",
    excerpt:
      "Boosh Plant-Based Brands Inc. executed an asset purchase agreement to acquire substantially all of the assets of Beanfields Inc., lifting estimated revenues and expanding its North American distribution.",
    image: "/images/insights/insights-banner.webp",
    imageAlt: "Business news headlines on a financial newspaper",
    blocks: [
      {
        type: "paragraph",
        text: "Boosh Plant-Based Brands Inc. (“Boosh” or the “Company”) (CSE: VEGI; OTCQB: VGGIF; Frankfurt: 77i) announced on Friday, February 11th, 2022 that it executed an asset purchase agreement to acquire substantially all of the assets of Beanfields Inc. (the “Assets”).",
      },
      { type: "heading", text: "Highlights of the transaction" },
      {
        type: "list",
        items: [
          "Revenues of Boosh increase to an estimated $14,500,000 (TTM).",
          "Stores carrying Beanfields and/or Boosh increased from 600 to 7,000, affording Boosh the potential of 7,000 more stores.",
          "Post-acquisition Boosh has a conservative 27.1 million shares outstanding.",
          "Fourth and most significant acquisition in the past 12 months.",
          "Large North American distribution platform.",
          "Significant growth potential beyond the existing client base, primarily natural and organic grocery food chains.",
          "Transaction provides immediate substantial cost savings.",
        ],
      },
      {
        type: "quote",
        text: "This is one of the most significant acquisitions of my professional career, and I’ll continue to be looking for additional accretive candidates for Boosh.",
        attribution: "Jim Pakulis, Chief Executive Officer, Boosh Plant-Based Brands Inc.",
      },
      {
        type: "paragraph",
        text: "As previously noted in the February 11th press release, Boosh is performing an audit on Beanfields. In the event that the audited statements demonstrate a variance of 20% or greater of the representations made concerning the financial condition of the Assets, Boosh may unwind the acquisition of the Assets and cancel the Note and return to treasury the Payment Shares, within 120 days of closing, which was expected to occur on Wednesday, February 16th, 2022, subject to regulatory approvals as well as other customary conditions of closing.",
      },
      { type: "heading", text: "About Boosh Plant-Based Brands Inc." },
      {
        type: "paragraph",
        text: "Boosh Plant-Based Brands Inc., through its wholly owned subsidiary Boosh Food, offers high quality, non-GMO, gluten free, 100% plant-based nutritional comfort foods for the whole family. The company offers 24 plant-based SKUs ranging from frozen meals, to refrigerated entrees, to shelf stable macaroni and cheese alternatives, and are sold throughout Canada.",
      },
    ],
    disclaimer: [
      "Neither the Canadian Securities Exchange nor its Regulation Services Provider (as that term is defined in the policies of the Canadian Securities Exchange) accepts responsibility for the adequacy or accuracy of this release.",
      "The information in this news release includes certain information and statements about the view of management of future events, expectations, plans and prospects that constitute forward looking statements. These statements are based upon assumptions that are subject to significant risks and uncertainties. Because of these risks and uncertainties and as a result of a variety of factors, the actual results, expectations, achievements or performance may differ materially from those anticipated and indicated by these forward looking statements. Except as required by law, the Company disclaims any intention and assumes no obligation to update or revise any forward looking statements.",
    ],
  },
];

/** Newest first. Both current articles share a date, so the order is stable. */
export const sortedArticles = [...articles].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const getArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const formatArticleDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
