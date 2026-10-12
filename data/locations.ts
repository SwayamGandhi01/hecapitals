import { addressLines, site } from "@/lib/site";

/**
 * The four offices named on hecapitalmarkets.com, with the phone number the
 * site publishes against each one. Each location page on the original site has
 * its own distinct copy, which is carried over rather than duplicated.
 *
 * NOTE: the published Frankfurt number carries a +1 (North American) dialling
 * code on the live site. It is reproduced verbatim rather than "corrected",
 * since guessing the intended number would be worse than quoting the source.
 */
export type Location = {
  slug: string;
  city: string;
  region: string;
  title: string;
  kicker: string;
  phone: string;
  phoneHref: string;
  /** Approximate map position, as a percentage of the world-map graphic. */
  map: { x: number; y: number };
  summary: string;
  image: string;
  banner: string;
  imageAlt: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    pullQuote?: string;
    intro?: string;
    bullets?: string[];
  }[];
  closing: { heading: string; points: string[]; paragraph: string };
  metaTitle: string;
  metaDescription: string;
};

export const locations: Location[] = [
  {
    slug: "investor-relations-london",
    city: "London",
    region: "United Kingdom",
    title: "Investor Relations London",
    kicker: "At the heart of European investment",
    phone: "+44 207 096 0125",
    phoneHref: "+442070960125",
    map: { x: 47.5, y: 28 },
    summary:
      "Access to the most notable financial centres and forums in London, building your presence in a key location while enhancing your reputation across sector media.",
    image: "/images/locations/london-banner.webp",
    banner: "/images/locations/london-banner.webp",
    imageAlt:
      "The City of London at dusk, with red buses passing the Gherkin tower",
    sections: [
      {
        heading: "Your partner in raising capital",
        paragraphs: [
          "Our UK-based team have their experienced ears to the ground right now, finding the best ways to build market value before anybody else. When we partner with companies, we perform strategic consultation and financial marketing, develop brand positioning and publish targeted industry communications for each client.",
          "We dedicate ourselves to changing the way institutional investors, hedge fund managers and high-net-worth individuals perceive our clients and engage with their company. With access to the most notable financial centres and forums in London, we can build your presence in this key location while enhancing your reputation across sector media and digital platforms.",
        ],
        pullQuote:
          "We show investors the opportunity in your company while educating you on the profile of the targeted individuals, companies and institutions we have identified. From this connection, we continuously nurture the interest generated across your sector.",
      },
      {
        heading: "London investor relations specialists",
        intro:
          "We have already helped many companies in the growing European cannabis market to attract the capital they need to grow. Also specialising in mining, oil and gas, pharmaceuticals, tech and blockchain, HE Capital secure investment worldwide:",
        bullets: [
          "Careful and transparent investor relations programmes prove to your investors that your company is forward-thinking and dedicated to earning their trust.",
          "With key media contacts close at hand, public relations campaigns make you a relevant, notable and ultimately unforgettable opportunity.",
          "Securing your presence across digital and social platforms, all of your external communications will be designed to achieve maximum impact.",
          "With strategic equity financing, we will put you face-to-face with a network of people ready to engage with your company.",
          "With your sector inevitably evolving, we will deal with any crisis news or regulatory change in a timely, articulate manner.",
          "Everything we do is tailored to your company, your goals and increasing your value.",
        ],
        paragraphs: [
          "Throughout our partnership with you, we will be in touch on a regular basis with phone calls, emails and the information you need to be sure that we are managing your profile professionally, progressively and exceptionally.",
        ],
      },
    ],
    closing: {
      heading: "Enhancing value from the UK capital",
      points: [
        "Throughout each specialist sector, we have a London network of incredible potential for all our clients",
        "With extensive experience in London stock brokering, we know how to secure capital for all our clients",
      ],
      paragraph:
        "HE Capital also has offices in New York, Vancouver and Frankfurt. We partner primarily with listed companies in North America and Europe but also reach out to those in Asia, Australia and South America.",
    },
    metaTitle: "Investor Relations London",
    metaDescription:
      "Investor relations in London — strategic consultation, financial marketing and targeted investor communications from the UK capital.",
  },
  {
    slug: "investor-relations-new-york",
    city: "New York",
    region: "United States",
    title: "Investor Relations New York",
    kicker: "Strategic communications in North America",
    phone: "+1 718-578-4120",
    phoneHref: "+17185784120",
    map: { x: 26, y: 33 },
    summary:
      "Located in the capital of North American finance, with access to institutional investors, high net worth individuals and hedge fund managers worldwide.",
    image: "/images/locations/new-york-banner.webp",
    banner: "/images/locations/new-york-banner.webp",
    imageAlt:
      "The Statue of Liberty with the Lower Manhattan skyline behind it",
    sections: [
      {
        heading: "Leveraging opportunity for clients",
        paragraphs: [
          "HE Capital has worked with listed companies of all sizes, across a number of constantly evolving sectors. Enhancing corporate profiles, raising reputations, and stimulating the key source of business growth — investment — we have an ingrained understanding of the opportunities and challenges our clients face.",
          "Always up to date with changes in the financial sector too, we identify, target and reach out to the right opportunities. From the moment you make contact with us, you are tapping into a wealth of knowledge and experience in stock-brokering, investor relations, public relations, and digital and social media campaigns. Connecting you with your most important audience, your goals become ours — and our New York team will be dedicated to achieving them.",
        ],
        pullQuote:
          "With a strategic, multi-platform approach, we reinforce your most crucial investment relationships, establish your company with carefully positioned media posts, and grow your audience with creative, targeted campaigns across the digital communications sphere.",
      },
      {
        heading: "High impact messages for listed companies",
        intro:
          "Ideally located in the capital of North American finance, our New York based team have access to a host of institutional investors, high net worth individuals and hedge fund managers around the world just waiting to be educated on your company:",
        bullets: [
          "Our first crucial step is to assess your profile as it stands, and establish what is required to achieve your ambitions.",
          "Building trust with key networks, our investor relations programmes begin to inspire your most important contacts.",
          "Simultaneously enhancing your reputation across the sector, we apply effective public relations across the most relevant media.",
          "Strategising your digital presence, we can begin to reach a targeted audience with your message.",
          "Any surprises internally or elsewhere in the sector will be handled professionally and proactively by our crisis management expertise.",
          "Regularly looking for ideal opportunities to put you face to face with investors, we will work with your corporate calendar at all times.",
        ],
        paragraphs: [
          "HE Capital will update you on a regular basis, with detailed reports and phone calls. Always here to discuss progress and implement your ideas, we will be your new partner in securing capital.",
        ],
      },
    ],
    closing: {
      heading: "Inspiring your audience worldwide",
      points: [
        "With other offices in Canada and Europe, we are ideally placed to expand your network of investors",
        "With a comprehensive background in stock-brokering our team have an extensive knowledge of the capital markets",
      ],
      paragraph:
        "Every company we work with receives an original strategy, and effective communications management. To realise your potential today, call our New York office to speak to a member of our team.",
    },
    metaTitle: "Investor Relations New York",
    metaDescription:
      "Investor relations in New York — strategic communications and investor outreach from the capital of North American finance.",
  },
  {
    slug: "investor-relations-vancouver",
    city: "Vancouver",
    region: "Canada",
    title: "Investor Relations Vancouver",
    kicker: "Capital know how in Western Canada",
    phone: "+1-604-288-2651",
    phoneHref: "+16042882651",
    map: { x: 16, y: 29 },
    summary:
      "A full service investor relations consultancy for companies around the world, including those with Canadian listings specifically.",
    image: "/images/locations/vancouver-banner.webp",
    banner: "/images/locations/vancouver-banner.webp",
    imageAlt: "Downtown Vancouver skyline with the Harbour Centre tower",
    sections: [
      {
        heading: "Driving value by building trust",
        paragraphs: [
          "Wholeheartedly passionate about investor relations, we believe that every company keen to make a difference needs regular, transparent and strategic communications strategies to succeed. Our Vancouver based team provide a full service investor relations consultancy for companies around the world, including those with Canadian listings specifically.",
          "We specialise in a number of progressive, growing sectors, reinforcing crucial relationships by rejuvenating communications strategies and promoting value. When combined with our comprehensive suite of modern communications services, we deliver strategic corporate messages, with high impact, to key targets across a range of media and digital platforms.",
        ],
        pullQuote:
          "Working towards your goals and aware of your responsibilities and principles, we ensure a proactive and meticulously managed communications solution for your company. With the utmost in professionalism and expertise combined, we will be dedicated to inspiring investment.",
      },
      {
        heading: "Vancouver investor relations experts",
        intro:
          "Just like your company, the strategy we develop will be original, eye-catching, and unforgettable. Identifying the right high net worth individuals to target, we will drive your brand and corporate message into the minds of investors worldwide:",
        bullets: [
          "A thorough audit of your communications and internal goals will show us where you are in your sector right now.",
          "Professional investor relations strategies will enhance your appeal and help to secure your most crucial sources of capital.",
          "Creative and strategic public relations messages, published across relevant channels, will make your name prominent in the right places.",
          "A comprehensive digital and social media campaign will be targeted at key individuals and potentially reach an entire new audience.",
          "With crisis management always close at hand we will guide any unforeseen events towards a positive outcome in the eyes of investors.",
          "If equity financing opportunities appear, we will place you right in front of crucial targets for investment.",
        ],
        paragraphs: [
          "You will never be further than a phone call away from your progress at any time. We will call you regularly and provide detailed reports that show you your campaign, and its growing positive impact on your company.",
        ],
      },
    ],
    closing: {
      heading: "Tailored strategies for enhancing value",
      points: [
        "HE Capital specialise in a number of sectors, including Cannabis, Mining, and Oil & Gas",
        "With extensive knowledge of the Canadian markets, we have a network of investor opportunities at hand for each client",
      ],
      paragraph:
        "You can also find HE Capital in New York, and in London and Frankfurt in Europe. We have a global presence, to give our clients the worldwide appeal they need to grow.",
    },
    metaTitle: "Investor Relations Vancouver",
    metaDescription:
      "Investor relations in Vancouver — a full service consultancy for companies with Canadian listings and clients worldwide.",
  },
  {
    slug: "investor-relations-frankfurt",
    city: "Frankfurt",
    region: "Germany",
    title: "Investor Relations Frankfurt",
    kicker: "Your company at the core of European capital",
    phone: "+1 270-7769-191",
    phoneHref: "+12707769191",
    map: { x: 49.5, y: 29 },
    summary:
      "Strengthening trust, boosting growth and attracting investment in central Europe, alongside our London office.",
    image: "/images/locations/frankfurt-banner.webp",
    banner: "/images/locations/frankfurt-banner.webp",
    imageAlt: "The Frankfurt financial district skyline",
    sections: [
      {
        heading: "Specialising in multiple sectors",
        paragraphs: [
          "The experience, expertise and utilisation of high-spec technology allows us to strengthen trust, boost growth, and attract investment in central Europe. Our global clients partner with us to get results, and we are dedicated to delivering from day one.",
          "With a combination of strategy, foresight and creativity we help capital market companies to communicate effectively with key investors, and reach new opportunistic audiences worldwide. Along with our London office, our Frankfurt team can put your company front and centre in several growing European sectors for investment. And with progressive sectors come essential, modern management and consultancy techniques — and we are experts in the art of inspiring communication.",
        ],
        pullQuote:
          "Combining effective and transparent investor relations methods with proactive public relations and advanced digital and social media communications, we raise your profile in every essential area, inspiring existing investors and new audiences alike along the way.",
      },
      {
        heading: "Original strategies for every client",
        intro:
          "As each company we partner with is different, our first job is to understand your goals, position, and profile both internally and within the sector as a whole. Then, we set about ensuring that no opportunity to enhance your profile is missed:",
        bullets: [
          "With clear, concise and open communication, our investor relations experts will help to inspire trust in your company at all levels.",
          "Identifying the ideal publications and media institutions to get you noticed, we can implement a public relations campaign that generates intrigue.",
          "Utilising digital and social platforms we will target the right people with key messages that make investors want to learn more.",
          "Constantly analysing performance with analytics, we will continuously evolve your campaign for maximum impact.",
          "Any news or events from your company or sector will be handled professionally and proactively, minimising damage to reputation.",
          "We will consistently identify equity financing opportunities for you at sector specific roadshows, events and expos.",
        ],
        paragraphs: [
          "With your HE Capital team never further away than a phone call, we will keep you updated with weekly reports and regular telephone calls to discuss progress and answer any questions you have for us.",
        ],
      },
    ],
    closing: {
      heading: "Enhancing your profile across Europe",
      points: [
        "We specialise in investment for Cannabis, Tech, Blockchain, Mining, Oil & Gas, and Pharmaceuticals companies",
        "Whether your company is involved in products, manufacturing, equipment, or any aspect of the sector we can help",
      ],
      paragraph:
        "HE Capital are a global agency, with locations across North America, as well as our European offices in London and here in Frankfurt. To realise the potential in your company, get in touch with one of our expert advisers today.",
    },
    metaTitle: "Investor Relations Frankfurt",
    metaDescription:
      "Investor relations in Frankfurt — strengthening trust and attracting investment for capital market companies in central Europe.",
  },
];

export const getLocation = (slug: string) =>
  locations.find((location) => location.slug === slug);

/** The head office block, repeated on the contact page and in the footer. */
export const headOffice = {
  name: site.legalName,
  addressLines,
  phone: site.phone,
  phoneHref: site.phoneHref,
  fax: site.fax,
  email: site.email,
};

/**
 * Named contacts exactly as published on /contact-us/. All three sit at the
 * London head office and share its telephone and fax numbers.
 */
export const directContacts = [
  { name: "Hari Patel", role: "Director", email: "harip@hecapitalmarkets.com" },
  {
    name: "Sam Davey",
    role: "Managing Director",
    email: "samd@hecapitalmarkets.com",
  },
  {
    name: "Richard Orourke",
    role: "Director of Corporate Partnerships",
    email: "richardo@hecapitalmarkets.com",
  },
];
