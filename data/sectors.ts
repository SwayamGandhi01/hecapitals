/**
 * The seven sectors published on hecapitalmarkets.com. Every sector on the
 * original site has its own page with its own copy, so all seven are carried
 * over here rather than trimmed to fit a layout.
 */
export type Sector = {
  slug: string;
  title: string;
  kicker: string;
  /** Short line used on the homepage sector grid — the company's own wording. */
  teaser: string;
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

export const sectors: Sector[] = [
  {
    slug: "mining",
    title: "Mining",
    kicker: "Driving interest in raw materials",
    teaser:
      "With the right strategy, you can realise incredible results in this long-established sector.",
    summary:
      "Integrated communications that take listed mining companies to the institutional investors and high net worth individuals who matter most to them.",
    image: "/images/sectors/mining.webp",
    banner: "/images/sectors/mining-banner.webp",
    imageAlt: "Bucket-wheel excavator working an open-pit mine",
    sections: [
      {
        heading: "Securing investment in global mining",
        paragraphs: [
          "In Europe and North America, we have assembled our teams of experts in the financial centres that make the global mining market tick. With comprehensive and completely integrated communications strategies, we take the mining companies we work with to the institutional investors and high net worth individuals that matter to them most.",
          "Enhancing value, and positioning our clients above and beyond their competitors, our purpose is to get you the capital you need to continue growing, succeeding and building on the rich history of your listed mining company. Using our vast experience in stock brokering and capital markets at every stage of your carefully tailored strategy, we only succeed when we have helped you to reach your goals.",
        ],
        pullQuote:
          "Our team of experienced communications experts sprinkle meticulous strategy with eye-catching creativity across multiple media while consulting professionally and transparently with management, shareholders and key investors across your company.",
      },
      {
        heading: "Key messages for the mining sector",
        intro:
          "By identifying the right combination of investor and public relations, plus digital and social media, we will identify the most direct, impactful path for you to inspire existing investors and secure new leads:",
        bullets: [
          "Following a thorough audit of your current position and targets, we will establish exactly where you are in the market at this very moment.",
          "Using our network of institutional investors, hedge fund managers and capital market contacts, we will identify the ideal targets for your mining company.",
          "Aware of the most up-to-date news and events in the sector, we will develop key strategic messages that communicate your potential.",
          "Applying your strategy across the right platforms and channels, we will drive your potential to the minds of your target audience.",
          "Consistently adapting your strategy to meet change, challenge and opportunity in the sector, we will tailor your campaign for maximum impact.",
          "Working closely with key personnel, we will also determine ideal opportunities for you to engage your audience at events, exhibitions and meetings.",
        ],
        paragraphs: [
          "Wherever in the world your operations are active, we will plot your route to investors in North America, Europe and beyond. From raw materials to machinery, when it comes to mining, we cover every niche and innovation in this ever-evolving global sector.",
        ],
      },
    ],
    closing: {
      heading: "Monitoring, managing and guiding strategy",
      points: [
        "Our team will be in regular, weekly contact with reports on progress",
        "We will be available to discuss your questions, ideas and expectations",
      ],
      paragraph:
        "To talk to HE Capital today, complete the contact form or call the relevant office. We have already reached out to and worked with a range of listed companies in the sector.",
    },
    metaTitle: "Mining",
    metaDescription:
      "Investor relations, public relations and digital campaigns for listed mining companies across North America and Europe.",
  },
  {
    slug: "technology",
    title: "Technology",
    kicker: "Inspiring innovative communications",
    teaser:
      "For results in an ever-evolving industry, we will create an equally innovative communications strategy.",
    summary:
      "Generating the interest your tech company needs to attract crucial capital, and proving your value to investors and stakeholders worldwide.",
    image: "/images/sectors/technology.webp",
    banner: "/images/sectors/technology-banner.webp",
    imageAlt: "Business people walking through an abstract digital data stream",
    sections: [
      {
        heading: "Progressive investment solutions",
        paragraphs: [
          "With locations in North America and Europe, HE Capital is ideally positioned to generate the interest your tech company needs to attract crucial capital. We want to see your company leading the way in the sector for years to come, and can ensure that your company continues its great work in research and development, manufacturing, and creating incredible new technologies.",
          "How can we ensure all of this? By placing you even further ahead of the curve than you already are; proving your value to key investors, stakeholders and a global audience of high-net-worth individuals who need to both know what you do and invest in it. We represent listed technology companies and guide them to their goals with strategy, creativity and innovation that work.",
        ],
        pullQuote:
          "With the right combination of investor relations, public relations and digital and social media campaigns, HE Capital will deliver a fully integrated and comprehensive strategy that is tailored just for you.",
      },
      {
        heading: "Reaching your audience globally",
        intro:
          "We are deeply passionate about helping clients and investors to expand their network in the technology sector. Whether you seek to raise your profile or stimulate equity financing, we will put your company in the right place at the right time:",
        bullets: [
          "When we have established your ideal goals, your entire strategy will be focused on engaging the ideal investors all over the world.",
          "Communicating with key shareholders, we will instill trust and transparency across your company.",
          "Working towards the same target across the sector, carefully written PR will hammer your incredible work home across multiple media.",
          "Online, we will create an engaging and memorable digital and social media campaign that targets the right people.",
          "Always aware of news and innovation in the sector, we will respond proactively and positively to the ever-changing technology ecosphere.",
          "With weekly calls and reports on progress, you will never be far away from knowing the full impact of HE Capital on your company.",
        ],
        paragraphs: [
          "Crucially, with so many roadshows and expos showcasing the latest and greatest in your sector, HE Capital will put you on the ground at the most opportunistic equity financing events on the calendar.",
        ],
      },
    ],
    closing: {
      heading: "High-impact visibility in tech",
      points: [
        "With open-ended communication, you will never be further than a phone call from an update on your strategy",
        "Weekly reports and calls will detail progress and guide the next phase of your capital-raising strategy",
      ],
      paragraph:
        "With strategic consultation, financial marketing, brand positioning and targeted investor communications combining to tell your story and sell your brand, we will ensure that the potential of your innovative company gets the recognition it deserves.",
    },
    metaTitle: "Technology",
    metaDescription:
      "Investor relations and communications strategies for listed technology companies seeking capital across North America and Europe.",
  },
  {
    slug: "block-chain",
    title: "Block Chain",
    kicker: "Strategy for the new technology of trust",
    teaser:
      "With the right connections in cryptography, the potential for inspiring investment is almost limitless.",
    summary:
      "Connecting listed blockchain companies with a network of sector experts, institutions and high net worth individuals around the world.",
    image: "/images/sectors/block-chain.webp",
    banner: "/images/sectors/block-chain-banner.webp",
    imageAlt: "Abstract blue network of connected data blocks",
    sections: [
      {
        heading: "Inspiring progressive communications",
        paragraphs: [
          "At HE Capital, we combine our network of blockchain experts, companies, high net worth individuals, and passion for positive, transparent communications, with listed blockchain companies all over the world. We are the partner our clients turn to when they want to boost and sustain value, tapping into our experience and expertise in raising capital and connecting with the right institutions.",
          "Across the evolving blockchain ecosystem, we undertake extensive and up-to-date research into different cryptocurrencies and blockchain projects, ensuring that our clients are always one step ahead of the curve in all their communications.",
        ],
        pullQuote:
          "From transparent investor relations management, to media-savvy public relations campaigns, we frame your company at the top of the sector, while inspiring an online audience with strategic, inspiring digital and social campaigns.",
      },
      {
        heading: "Incentivising essential partnerships",
        intro:
          "With so much competition in the sector, we use a precise, but originally tailored strategy with every blockchain client. Starting with your position as it stands today, we strategise how to move forward for your future:",
        bullets: [
          "An audit of your company profile will establish how you are perceived in the sector right now.",
          "Developing the messages required for people to take note of your company, we will spread the word to specific targets.",
          "Managing your key communications, our investor relations programs will reinforce trust in your company.",
          "With strategically delivered public relations campaigns, we will get the right publications telling their audience what you do.",
          "Using a holistic approach with every client, we will continuously adapt our work to boost growth, identifying new opportunities at every stage.",
          "With a global network of key sector contacts, you will immediately be connected to their investment potential from the very start.",
        ],
      },
    ],
    closing: {
      heading: "Educating your audience worldwide",
      points: [
        "We engage with businesses, R&D departments, and institutions across the sector",
        "We can put you face-to-face with investors at key events, roadshows and exhibitions",
      ],
      paragraph:
        "HE Capital believes that people need to recognise the potential of blockchain technology and understand how crucial it is already becoming. To partner with us and share our knowledge of the sector around the world, get in touch today.",
    },
    metaTitle: "Block Chain",
    metaDescription:
      "Investor relations and communications for listed blockchain companies, connecting them with institutions and investors worldwide.",
  },
  {
    slug: "psychedelics",
    title: "Psychedelics",
    kicker: "A sector growing in prominence",
    teaser: "Securing investment opportunities in psychedelics.",
    summary:
      "Managing your brand profile and multi-channel communications to foster trust in your contribution to an emerging industry.",
    image: "/images/sectors/psychedelics.webp",
    banner: "/images/sectors/psychedelics-banner.webp",
    imageAlt:
      "Researcher using a tablet with molecular chemistry diagrams overlaid",
    sections: [
      {
        heading: "Securing investment opportunities in psychedelics",
        paragraphs: [
          "Once stigmatised substances prohibited in their use, psychedelics have, recently, increasingly been used as alternative medicines for treating a range of disorders — including depression, PTSD and substance use. It is clear that transitions into psychedelics, from companies previously invested in both related and unrelated industries, are progressively on the rise.",
          "The growing acceptance of psychedelics in this context opens up exciting opportunities for investors. Indeed, we have seen more and more companies pouring investment both directly and indirectly into psychedelics, and we can help you to take your cue from these instances. We can assist you in applying the entrepreneurial spirit you have already honed to the psychedelics sector. In this way, we can bring you into contact with new investors and leverage your connections with your existing investor base.",
          "By astutely managing the profile of your brand and helping you to put forward your ideas through a series of multi-channel communications campaigns we run on your behalf, we can foster trust in your contribution to the psychedelics industry. Consequently, you can establish your firm as a leading light in this sector.",
        ],
      },
      {
        heading: "Bringing psychedelics to global respectability",
        intro:
          "We have long-established links with institutional investors, investment bankers, high net worth individuals and hedge fund managers, and can tap into this network to help you unlock your growth potential. People and companies are getting invested in psychedelics in different industries across the globe, and there is room for more.",
        bullets: [
          "In consultation with you, we will discern your aims and KPIs and thoroughly audit where you currently stand in your mission.",
          "We will look at the promotional activities within our remit and determine which of them could most effectively encourage interest in your corporate activities.",
          "We will carefully select a range of means, including public relations and social media, of engaging with investors and inviting financial contributions to your cause.",
          "In doing so, we will enlighten these investors on why they ought to prioritise investing in your brand over competing organisations.",
          "You will get new, valuable opportunities for fruitfully engaging with your audience, and we will look out for those opportunities and help you to act on them.",
          "As we oversee your corporate strategy, we will professionally and positively handle any crisis or other unexpected change in the industry that arises.",
        ],
        paragraphs: [
          "We can steer every single aspect of your psychedelics campaign, from the website of your brand to its social channels. Our work can also include introducing you to promising new investors and helping you to maximise the effectiveness of those with whom you have already forged connections.",
        ],
      },
    ],
    closing: {
      heading: "Communicating the appeal of what you offer",
      points: [
        "Our clients are highly active in the psychedelics industry",
        "We can turn your niche into an exciting chance for investors",
      ],
      paragraph:
        "Our work sees us connecting listed companies with investors to help realise the full potential of each. We invite you to contact us to learn how, with our guidance, you can more easily position your business for success in the emerging psychedelics sector.",
    },
    metaTitle: "Psychedelics",
    metaDescription:
      "Investor relations and multi-channel communications for companies operating in the emerging psychedelics sector.",
  },
  {
    slug: "pharmaceuticals",
    title: "Pharmaceuticals",
    kicker: "Effective strategic communications",
    teaser:
      "Put your products in the minds and portfolios of investors dedicated to pharmaceuticals worldwide.",
    summary:
      "Open, clear communication between your existing and potential investors — raising trust, interest and capital to new levels.",
    image: "/images/sectors/pharmaceuticals.webp",
    banner: "/images/sectors/pharmaceuticals-banner.webp",
    imageAlt: "Laboratory pipette dispensing samples into a testing tray",
    sections: [
      {
        heading: "Creating transparency for clients",
        paragraphs: [
          "With each and every listed company we reach out to, or who makes contact with one of our offices, we work meticulously and continuously to elevate their reputation across the sector. We believe that, by stimulating an open and clear line of communication between your existing and potential investors, trust, interest and capital can be raised to new levels.",
          "How we achieve this is different from company to company, but the result is always the same. People learn about what your company offers and want to find out more. Creating confidence in your products, manufacturing, research and equipment, HE Capital work as your partner throughout; just as invested in you as you are in us from the very start.",
        ],
        pullQuote:
          "We leverage multiple services to complement your business, taking to digital and social media platforms with creative campaigns and ensuring your presence is felt with timely PR. When combined with investor relations, we nurture the presence of your company, outside and in.",
      },
      {
        heading: "An active approach for pharmaceuticals",
        intro:
          "As committed to providing as transparent a service as you are, we will regularly communicate with you as part of your partnership with HE Capital and we will always be available to talk you through progress:",
        bullets: [
          "With a thorough audit of your company and its business goals, we will discover the best way to appease stakeholders and attract capital.",
          "Engaging with the right media contacts around the world, we will raise your profile with influential, effective PR storytelling.",
          "Applying our expertise in investor relations, we will drive the value and potential of your company within the sector.",
          "Engaging new investors worldwide with creative and strategic messages online, we will promote your company to entirely new audiences.",
          "Managing any crisis news in the sector or your company, your proactive approach to challenge will not go unnoticed.",
          "Also putting you in the ideal position to speak face-to-face with your audience, we will book you in for potentially crucial exhibitions and events.",
        ],
        paragraphs: [
          "Listed companies in the pharmaceuticals sector work with HE Capital to achieve business goals and drive value for everyone involved in the company. We support sales and marketing, engage your shareholders and, ultimately, build value.",
        ],
      },
    ],
    closing: {
      heading: "Always attuned to your sector",
      points: [
        "We always have one ear to the ground for trends, innovations and opportunities",
        "Every piece of knowledge we acquire will be used to your advantage",
      ],
      paragraph:
        "With an extensive background in stock brokering, our professionals have access to the latest insights, contacts and high-net-worth individuals in the pharmaceuticals sector, and can keep your company one step ahead at all times.",
    },
    metaTitle: "Pharmaceuticals",
    metaDescription:
      "Investor relations, PR and digital campaigns for listed pharmaceutical companies building trust with investors worldwide.",
  },
  {
    slug: "cannabis",
    title: "Cannabis",
    kicker: "Growing interest in a thriving sector",
    teaser:
      "Expert strategies for achieving the right impact in this unique and constantly expanding market in North America and Europe.",
    summary:
      "Helping clients secure the capital they need in a sector thriving across North America and quickly growing across Europe.",
    image: "/images/sectors/cannabis.webp",
    banner: "/images/sectors/cannabis-banner.webp",
    imageAlt: "Close-up of cannabis plants under cultivation",
    sections: [
      {
        heading: "Securing ideal opportunities for investment",
        paragraphs: [
          "With the cannabis sector already thriving across North America, Europe is quickly catching on to the astonishing opportunities of the versatile products of the industry. Ideally placed with offices in Vancouver, New York and London, we assist our clients with securing the capital they need to succeed in this modern sector.",
          "We build on the entrepreneurial mindset you have already adopted to make a name in the cannabis sector, helping you to reach new investors, communicate with your existing network and firmly establish your company at the forefront of the industry. With creative, strategic and ultimately compelling, multi-channel communications campaigns, we generate trust and interest in your products, research and expertise.",
        ],
        pullQuote:
          "With the right combination of media, and astute management of your company profile, we act as a partner in helping you to reach your goals and objectives. Our results-driven blueprint for success is measured by the value we add to your company, and its enhanced position in the market.",
      },
      {
        heading: "Making cannabis a global entity",
        intro:
          "With an extensive network of institutional investors, investment bankers, high net worth individuals and hedge fund managers, you will be immediately and superbly placed to secure the extra value you need to grow:",
        bullets: [
          "Upon initial contact, we will identify your goals and KPIs and perform a comprehensive audit of your position as it stands.",
          "With a range of promotional activities instantly available, we will decipher the most effective method of stimulating interest in your company.",
          "With a potential combination of investor relations, public relations and digital and social media, we will get to work on engaging with the investment community.",
          "Educating them on why you, above your competition, are their most attractive proposition, we will elevate your profile to exciting, enticing new levels.",
          "Continuously identifying new opportunities for you to engage with your audience at all levels, we will work proactively and strategically at every stage.",
          "When we manage your corporate strategy, any crisis or unanticipated change in the sector will be handled professionally and positively throughout.",
        ],
        paragraphs: [
          "From your website to your social channels, your existing investors to those you have yet to meet, HE Capital will guide and manage every aspect of your profile. We never presume we are perfect. We do not guess, we strategise. We are as invested with you as you are with us.",
        ],
      },
    ],
    closing: {
      heading: "Letting others learn your potential",
      points: [
        "Our clients are involved with every stage of the cannabis sector",
        "Your niche will become an unmissable opportunity for investors",
      ],
      paragraph:
        "We reach out to listed companies all around the world and then help them to reach out to investors. To discuss how we can assist with positioning your company in the growing European and North American cannabis sector, simply get in touch.",
    },
    metaTitle: "Cannabis",
    metaDescription:
      "Communications and investor relations for listed cannabis companies across the North American and European markets.",
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    kicker: "Investment strategy for a global sector",
    teaser:
      "Expertly managed consulting, data-driven analytics and precise insight for a vast global sector.",
    summary:
      "Managing your capital cycle and securing a new, high-value position in the market for your listed company.",
    image: "/images/sectors/oil-and-gas.webp",
    banner: "/images/sectors/oil-and-gas-banner.webp",
    imageAlt: "Offshore oil and gas drilling platform at sunset",
    sections: [
      {
        heading: "Energising your key communications",
        paragraphs: [
          "HE Capital provides expertly managed consulting, data-driven analytics and precise management and insight for the enormous global entity that is the oil and gas sector. With advantageous communications between your listed company, its shareholders and a network of investors around the world, we can help you to expand your reputation and capture the capital your efforts deserve.",
          "With offices in North America and Europe and a network of influential investment opportunities worldwide, HE Capital is ideally positioned, vastly experienced and fundamentally dedicated to managing your capital cycle and securing your new, high-value position in the market.",
        ],
        pullQuote:
          "Our original, strategic process breathes new life into your company messaging. We create genuinely engaging messages that take all of the benefits you offer and highlight them simply, effectively and memorably to the right people.",
      },
      {
        heading: "Comprehensive analysis at all levels",
        intro:
          "Our expert professionals can help you to initially assess and then carefully benchmark how you raise and sustain capital across your own company business cycles:",
        bullets: [
          "Using our knowledge of the sector, we will identify your position right now and plot the route from there to your goals.",
          "Firmly strategising your key communications systems, we will choose the right channels, platforms and key events for your company.",
          "Creating the right messages to deliver to your audience, our communications approach will be uniquely tailored to your company.",
          "With public relations, investor relations and digital and social media available, your strategy will be as comprehensive as possible.",
          "Handling crisis news as well as developments in policy and regulation, your company communications will always be up to date in the oil and gas sector.",
          "If the right event or exhibition appears on the calendar, we will put you face-to-face with investors.",
        ],
        paragraphs: [
          "HE Capital expertise sees each member of our team, across our locations in North America and Europe, routinely engrossed in the ongoing production, licensing and regulatory issues in the sector. Therefore, we can provide all of our clients with the level of service they need.",
        ],
      },
    ],
    closing: {
      heading: "Your partner in the oil & gas sector",
      points: [
        "With HE Capital, you will receive weekly calls and updates on your progress",
        "Our strategy is always to minimise risk and maximise value for you",
      ],
      paragraph:
        "With experience in stock brokering, we can immediately draw on an expansive network of key investors and high net worth individuals in your sector. To realise the potential of HE Capital for your listed company, get in touch with us today.",
    },
    metaTitle: "Oil & Gas",
    metaDescription:
      "Investor relations, consulting and communications for listed oil and gas companies managing their capital cycle.",
  },
];

export const getSector = (slug: string) =>
  sectors.find((sector) => sector.slug === slug);
