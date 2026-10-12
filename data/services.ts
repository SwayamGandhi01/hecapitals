/**
 * The four services published on hecapitalmarkets.com. All headings and body
 * copy below are the company's own words, lightly re-typeset (sentence case
 * instead of the original all-caps) without changing their meaning.
 */
export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  pullQuote?: string;
  intro?: string;
  bullets?: string[];
};

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  cardSummary: string;
  image: string;
  banner: string;
  imageAlt: string;
  highlights: string[];
  sections: ServiceSection[];
  closing: { heading: string; points: string[]; paragraph: string };
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "investor-relations",
    title: "Investor Relations",
    kicker: "Strategic management and communication",
    summary:
      "Consistent, transparent control of the flow of information between your public company and the market — built around your goals and measured by the value it creates.",
    cardSummary:
      "Strategy, shareholder communications and investor targeting that build trust and secure the highest value possible.",
    image: "/images/services/investor-relations.webp",
    banner: "/images/services/investor-relations-banner.webp",
    imageAlt:
      "Hands holding a tablet displaying a rising financial performance chart",
    highlights: [
      "Investor relations strategy and management",
      "Shareholder communications",
      "Investor targeting",
      "Roadshows and exhibitions",
      "Market profile development",
      "Weekly client reporting",
    ],
    sections: [
      {
        heading: "Reinventing the way you secure investment",
        paragraphs: [
          "By partnering with our Investor Relations team, you will have instant and consistent access to our extensive experience in controlling the flow of information between your public company, and the market. With your goals at the very forefront of everything we do, we will undertake a detailed analysis of where you stand today, and identify the right way for you to move forward and secure further investment.",
          "HE Capital will deliver management, strategy, and implement impactful, informative communications designed to appeal to your investors. Building trust, and ensuring their goals become aligned with yours, we will secure you the highest value possible.",
        ],
        pullQuote:
          "We combine traditional and innovative communication strategies with securing positive relationships in both the media and the financial sector. Continuously looking for new and further opportunities, we excel in exceeding investor relations expectations.",
      },
      {
        heading: "Experience and expertise in enhancing value",
        intro:
          "With extensive contacts including institutional investors, venture capitalists, fund managers and hedge fund managers, with HE Capital we open you up to an entire network of influential individuals and companies ready to invest right now:",
        bullets: [
          "Simply put, we will identify the most ideal opportunities for your company and proactively help people to discover the opportunity of investing in you.",
          "Developing key messages and nurturing essential relationships we will make communication between you and investors completely transparent.",
          "Working with your own management calendar, we will find the most opportune exhibitions, road shows and meetings for you to engage investors.",
          "Auditing every aspect of how your company is perceived, and making the right adjustments, we will achieve your ideal value proposition.",
          "Also regularly engrossed in industry news and how it is reflected in the media, we will be on hand to deal with any unanticipated changes in the market.",
          "Consistently adapting your strategy to react positively to every event, we will ensure you remain credible, prominent and attractive to investors and high net worth individuals.",
        ],
        paragraphs: [
          "Ultimately, we will enhance your presence across all of your communications and your face-to-face interactions with investors — expanding your network and potentially increasing your value with every message.",
        ],
      },
    ],
    closing: {
      heading: "Keeping you in touch with your strategy",
      points: [
        "We provide weekly reports to every client",
        "We are always available to update you",
      ],
      paragraph:
        "The final, and key part of everything we do is keeping you informed and up to date with progress. Along with our weekly reports process, you are welcome to call us at any time to discuss your Investor Relations service.",
    },
    metaTitle: "Investor Relations",
    metaDescription:
      "Investor relations strategy, shareholder communications, investor targeting and roadshows for listed companies across North America and Europe.",
  },
  {
    slug: "capital-market-advisory",
    title: "Capital Market Advisory",
    kicker: "Expert insight and guidance",
    summary:
      "Capital, financial and strategic advisory that helps you originate, negotiate and execute a wide range of investment banking transactions.",
    cardSummary:
      "Capital raising, M&A, IPOs, private placements, restructuring and valuations drawn into a single advisory package.",
    image: "/images/services/capital-market-advisory.webp",
    banner: "/images/services/capital-market-advisory-banner.webp",
    imageAlt: "Two hands framing a view, representing strategic perspective",
    highlights: [
      "Capital raising",
      "Mergers, acquisitions and divestitures",
      "IPOs and short-form prospectus offerings",
      "Private placements of equity and debt",
      "Private placements of hybrid securities",
      "Restructuring and refinancing",
    ],
    sections: [
      {
        heading: "The solution to your investment puzzle",
        paragraphs: [
          "Whether you are at the helm of a private or public company, our capital, financial and strategic advisory services can immeasurably assist you in effectively originating, negotiating and executing a wide range of investment banking transactions. We can help you with identifying, acquiring or disposing of income-producing assets and managing your debt and equity placement requirements, among many other pursuits you may follow in your investment journey.",
          "We also offer guidance on raising capital, achieving strategic valuations and overseeing mergers and acquisitions. Our in-depth insight into the capital markets enables you to make the right steps and optimise the returns on your investments.",
          "Tapping into our understanding of your global capital needs and the occupational and financial markets, we can help you to achieve the most lucrative long-term outcomes, whatever your investment objectives. We help private companies to raise their capital and establish their reputation through investor relations strategies and planning, community outreach, media relations and corporate communications.",
        ],
      },
      {
        heading: "Secure the investment you need",
        intro:
          "We weave our expertise on investment sales, financing and acquisitions into a single advisory package, allowing you to receive — and quickly act on — best-in-class guidance on the following matters:",
        bullets: [
          "Mergers, acquisitions and divestitures. Determine whether to purchase another company, combine it with yours or sell part of a company to another party.",
          "Initial public offerings (IPOs) and short-form prospectus offerings. We can help you to undertake an initial offering of your securities or discern your eligibility for a short-form prospectus.",
          "Private placements of equity and debt securities. From offering to sale, the exchange will be made between your organisation and selected investors.",
          "Private placements of hybrid securities. Our advisors can investigate where hybrids combining debt and equity characteristics may be the wiser securities for you to place privately.",
          "Restructurings and refinancing. In restructuring your assets, you can trim your financial losses and, in this way, ease tensions between debt and equity holders.",
          "Where the reorganisation aggregate transaction value would surpass £1 billion, we can help you to achieve the most cost-effective result.",
        ],
        paragraphs: [
          "We combine our advanced knowledge of the markets with financial discipline while reaching out to active capital players, bringing your strategic plans to fruition in the process. We understand how a bespoke investor relations strategy can enhance company strengths while nurturing shortcomings.",
        ],
      },
    ],
    closing: {
      heading: "Various capital finance solutions in one place",
      points: [
        "We offer solutions across various geographic regions",
        "We have experts based across a range of countries",
      ],
      paragraph:
        "To enquire about the possibilities with our capital markets advice service or, if you are already using this service, to discuss the progress we have made with your portfolio, please get in touch with us.",
    },
    metaTitle: "Capital Market Advisory",
    metaDescription:
      "Advisory on capital raising, mergers and acquisitions, IPOs, private placements, restructuring and valuations for private and public companies.",
  },
  {
    slug: "public-relations",
    title: "Public Relations",
    kicker: "Enhancing your brand in a global market",
    summary:
      "Communications campaigns that tell your story with impact, across the platforms and publications most important to securing interest and investment.",
    cardSummary:
      "Corporate communications, press releases and media relations that elevate your status and your value in the market.",
    image: "/images/services/public-relations.webp",
    banner: "/images/services/public-relations-banner.webp",
    imageAlt: "A hand cupping an illuminated light bulb, representing an idea",
    highlights: [
      "Public relations strategy",
      "Corporate communications",
      "Press releases and announcements",
      "Media relations",
      "Company visibility",
      "Market profile development",
    ],
    sections: [
      {
        heading: "Defining the ideal way to reach your goals",
        paragraphs: [
          "With an astute level of media knowledge and intuition, our Public Relations experts know how to tell a story. More to the point, they know how to tell yours, and ensure it engages the right people, at the most opportune times. With our accomplished strategists behind your communications campaigns, your messages will be delivered with impact, across the platforms and publications most important to securing interest and investment.",
          "Everything we do is carefully tailored to enhancing your brand and reputation and, ultimately, increasing your value in the market. With HE Capital, you only need one strategy to elevate your status and secure new capital.",
        ],
        pullQuote:
          "With an audit of your communications strategy, and analysis of your market position, we will construct the original, engaging stories that inspire your audience. Like you we think differently, and we think big, delivering positive Public Relations campaigns across multiple platforms.",
      },
      {
        heading: "Nurturing the right relationships",
        intro:
          "This multi-platform approach is essential to every client we work with, but knowing the right media and creating the right messages is unique to everyone. Thankfully though, this is where our expertise comes in:",
        bullets: [
          "Understanding your ambitions and deciphering your position as it stands, our strategy is focused entirely on delivering your goals.",
          "We then get to work on articulating the precise, high-impact, easy-to-understand messages that will elevate your status.",
          "Engaging our media contacts and utilising the most beneficial platforms, we will take your brand straight to the heart of the right people.",
          "Running entire campaigns proactively and strategically, we will continuously make sure that your company is prominent across multiple forms of 24/7 media.",
          "Developing ongoing relationships within the industry, we will identify new opportunities and emerging platforms for your campaign to thrive.",
          "Managing any unforeseen events that could impact your reputation, we will respond effectively to ensure minimum disruption.",
          "Consistently adapting your strategy to meet the ever-changing demands of the media and market, your message will never be lost amongst the masses.",
          "Identifying the right award programs and presentation platforms for your company, we will even put you face-to-face with potential investors.",
        ],
        paragraphs: [
          "Every company has a story to tell, and we are dedicated to telling it. With a carefully developed and creatively delivered Public Relations campaign, we can ensure that everything you do is known, celebrated, and considered worthy of investment by the right high net worth individuals.",
        ],
      },
    ],
    closing: {
      heading: "Transparent communication at all times",
      points: [
        "You will never be out of the loop throughout your campaign",
        "We provide weekly progress reports and regularly communicate with every client",
      ],
      paragraph:
        "Get in touch with us to discuss how our Public Relations expertise can help you to attract essential investment. As we also specialise in Investor Relations and Digital & Social Media, we may be able to show you the impact of an even more comprehensive service.",
    },
    metaTitle: "Public Relations",
    metaDescription:
      "Corporate communications, media relations and press campaigns that raise the profile of listed companies and attract investment.",
  },
  {
    slug: "digital-social-media",
    title: "Digital & Social Media",
    kicker: "Innovative multiplatform communications",
    summary:
      "Merging key business objectives with the right digital platforms, so your audience meets high-impact messages in the places they already are.",
    cardSummary:
      "Digital communications, social campaigns and online investor engagement, coordinated by data and built for your goals.",
    image: "/images/services/digital-social-media.webp",
    banner: "/images/services/digital-social-media-banner.webp",
    imageAlt: "A person working on a laptop with digital analytics overlaid",
    highlights: [
      "Digital communications strategy",
      "Social media campaigns",
      "Online brand visibility",
      "Digital investor engagement",
      "Campaign coordination",
      "Digital presence audits",
    ],
    sections: [
      {
        heading: "Positioning your company ideally online",
        paragraphs: [
          "There is no doubt, in the here and now of communications, that digital and social media is absolutely crucial to achieving success. With so many emerging platforms and a constantly evolving digital ecosphere, up-to-date knowledge of the online communications landscape is equally important.",
          "At HE Capital, we know how to merge key business objectives with essential digital platforms, resulting in campaigns professionally underpinned with high-impact messages to which your audience will respond positively. By combining creative communications with technical proficiency and analytical expertise, we will turn the raw data into the right messages to elevate your brand across multiple platforms and media.",
        ],
        pullQuote:
          "A digital and social media campaign by HE Capital will be completely original to your company and your goals. By defining the right platforms for you and identifying the people likeliest to respond positively to your campaign, we will give you the digital presence you need for investment.",
      },
      {
        heading: "Global digital and social media specialists",
        intro:
          "Understanding the ever-evolving digital and social media landscape is difficult, especially when your focus is primarily on achieving goals, meeting objectives and expanding. However, that is exactly where our campaigns come to the fore:",
        bullets: [
          "At the very beginning, we will conduct a thorough audit of your current digital presence, highlighting strengths and areas for improvement.",
          "Using data, strategy and your own goals, we will then establish where you are most likely to engage potential investors online.",
          "Adding our own experience of the market and a little creativity, we will develop memorable, impactful messages to lead your campaign.",
          "Having identified the ideal platforms and times for engagement, we will then get to work on building trust and enhancing engagement with your company.",
          "Continuously developing your strategy to respond to the ever-changing digital landscape, we will adapt your campaign to ensure optimum impact.",
          "Coordinating your campaign with data, you will come to recognise the right way to run digital campaigns that maximise lead opportunities.",
        ],
        paragraphs: [
          "Digital and social media are essential for tapping into the global network of investment and opportunity, and engaging key high net worth individuals. A campaign created and managed by HE Capital will draw on years of experience in generating genuine interest in our clients.",
        ],
      },
    ],
    closing: {
      heading: "Unique messages for every client",
      points: [
        "We will fully communicate the key campaign messages we deliver",
        "Weekly reports and calls will ensure you know your progress at all times",
      ],
      paragraph:
        "To get started, simply complete the contact form and one of our team will be in touch to discuss your goals. Our own strategy is to maximise your ROI, and every decision we make will be driven towards achieving the best result for you.",
    },
    metaTitle: "Digital & Social Media",
    metaDescription:
      "Digital and social media campaigns that position listed companies online and engage investors across the platforms that matter.",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
