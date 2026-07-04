export type ServiceDocumentGroup = {
  title: string;
  items: string[];
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceOfferingDetail = {
  title: string;
  description?: string;
  items?: string[];
};

export type ServiceGroupedOffering = {
  title: string;
  intro?: string;
  items: string[];
};

export type ServiceExtraList = {
  title: string;
  intro?: string;
  items: string[];
  footer?: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  heroText: string;
  intro: string[];
  image: string;
  offeringsTitle?: string;
  offeringsIntro?: string;
  offerings?: string[];
  detailedOfferings?: ServiceOfferingDetail[];
  groupedOfferings?: ServiceGroupedOffering[];
  whatIs?: {
    title: string;
    description: string;
    items?: string[];
    footer?: string;
  };
  whoCanApply?: {
    title: string;
    intro?: string;
    items: string[];
    footer?: string;
  };
  benefits?: {
    title: string;
    intro?: string;
    items: string[];
  };
  documents?: {
    title: string;
    intro?: string;
    groups?: ServiceDocumentGroup[];
    items?: string[];
    footer?: string;
  };
  process?: {
    title: string;
    steps: ServiceProcessStep[];
  };
  extraLists?: ServiceExtraList[];
  whyChoose?: {
    title: string;
    items: string[];
  };
  related?: { slug: string; title: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "business-setup",
    title: "Business Setup & Company Formation",
    subtitle: "UAE Trade License Services in Dubai",
    heroText: "Start Your Business in the UAE with Confidence",
    intro: [
      "Looking to start a business in the UAE? Al Hadi Business Services provides complete trade license solutions for entrepreneurs, startups, SMEs, and international investors. Whether you're establishing a Mainland, Free Zone, or Offshore company, our experienced consultants ensure a smooth, fast, and hassle-free business setup process.",
      "From selecting the right business activity to obtaining your trade license, visa processing, and corporate bank account assistance, we manage every step so you can focus on growing your business.",
    ],
    image: "/assets/images/services/Company-Formation.jpg",
    offeringsTitle: "Our Trade License Services",
    detailedOfferings: [
      {
        title: "Mainland Company Formation",
        description:
          "Establish your business in the UAE Mainland with the flexibility to operate across the UAE and work with government and private sector clients.",
      },
      {
        title: "Free Zone Company Formation",
        description: "Start your company in leading UAE Free Zones with benefits including:",
        items: [
          "100% Foreign Ownership",
          "Fast Company Registration",
          "Tax-Friendly Environment",
          "Visa Eligibility",
          "Flexible Office Solutions",
        ],
      },
      {
        title: "Offshore Company Formation",
        description:
          "Protect your international assets and investments with an offshore company designed for holding assets, intellectual property, and global business operations.",
      },
      {
        title: "Trade License Renewal",
        description:
          "Renew your business license on time and avoid penalties with our quick renewal service.",
      },
      {
        title: "Business Activity Selection",
        description:
          "We help you choose the correct licensed business activities based on your business model and future expansion plans.",
      },
      {
        title: "Trade Name Reservation",
        description:
          "Secure your preferred company name in compliance with UAE regulations.",
      },
      {
        title: "Initial Approval & Government Approvals",
        description:
          "We coordinate all required approvals from the relevant authorities to ensure a smooth registration process.",
      },
      {
        title: "Office & Flexi Desk Solutions",
        description:
          "Choose from physical offices, executive offices, or flexible desk options that meet your licensing requirements.",
      },
      {
        title: "UAE Residence Visa Assistance",
        description:
          "Complete support for investor visas, partner visas, employee visas, Emirates ID, medical fitness, and visa stamping.",
      },
      {
        title: "Corporate Bank Account Assistance",
        description:
          "We guide you through the bank account opening process with leading UAE banks.",
      },
    ],
    related: [
      { slug: "free-zone", title: "UAE Free Zone License Services" },
      { slug: "translation", title: "Translation Services" },
    ],
  },
  {
    slug: "free-zone",
    title: "UAE Free Zone License Services",
    subtitle: "Free Zone Company Formation",
    heroText:
      "Start Your Free Zone Business in the UAE with Expert Business Setup Solutions",
    intro: [
      "Looking to establish a business in one of the UAE's leading Free Zones? Al Hadi Business Services offers professional Free Zone company formation and trade license services across the UAE. Whether you are an entrepreneur, startup, freelancer, SME, or international investor, we provide complete assistance from company registration to visa processing and business compliance.",
      "A UAE Free Zone company offers an efficient way to start and grow your business with benefits such as 100% foreign ownership, simplified company formation, and access to world-class business infrastructure.",
      "Our experienced consultants help you choose the right Free Zone based on your business activities, budget, visa requirements, and long-term goals.",
    ],
    image: "/assets/images/services/Company-Formation.jpg",
    offeringsTitle: "Our UAE Free Zone License Services",
    offeringsIntro: "We provide complete business setup solutions, including:",
    offerings: [
      "Free Zone Company Formation",
      "Free Zone Trade License Issuance",
      "General Trading License",
      "Commercial License",
      "Professional License",
      "Service License",
      "Industrial License",
      "E-Commerce License",
      "Consultancy License",
      "Freelance Permit",
      "Holding Company Setup",
      "Branch Office Registration",
      "Company Amendments",
      "Trade License Renewal",
      "Business Activity Addition & Removal",
      "Company Liquidation & Closure",
    ],
    benefits: {
      title: "Benefits of Setting Up a Free Zone Company",
      intro: "Choosing a UAE Free Zone offers several advantages:",
      items: [
        "100% Foreign Ownership",
        "Full Repatriation of Capital and Profits",
        "Fast Business Setup Process",
        "Multiple Business Activities",
        "Investor & Employee Visa Eligibility",
        "Flexible Office Solutions",
        "Modern Business Infrastructure",
        "Easy International Business Operations",
        "Competitive Business Setup Packages",
        "Access to Global Markets",
      ],
    },
    extraLists: [
      {
        title: "Free Zones We Assist With",
        intro:
          "We assist clients in setting up companies in leading UAE Free Zones, including:",
        items: [
          "IFZA (International Free Zone Authority)",
          "Meydan Free Zone",
          "DMCC",
          "Dubai South",
          "Dubai Airport Free Zone (DAFZA)",
          "Dubai Silicon Oasis",
          "RAKEZ",
          "SHAMS",
          "SPC Free Zone",
          "Ajman Free Zone",
          "Fujairah Free Zone",
          "Hamriyah Free Zone",
          "Sharjah Media City (Shams)",
          "Umm Al Quwain Free Trade Zone",
        ],
        footer:
          "Our consultants will recommend the most suitable Free Zone based on your business objectives and budget.",
      },
      {
        title: "Our Business Setup Services Include",
        items: [
          "Business Consultation",
          "Jurisdiction Selection",
          "Business Activity Selection",
          "Trade Name Reservation",
          "Company Registration",
          "Trade License Issuance",
          "Establishment Card",
          "Investor Visa",
          "Partner Visa",
          "Employee Visa",
          "Emirates ID Assistance",
          "Medical Fitness Appointment",
          "Corporate Bank Account Assistance",
          "VAT Registration",
          "Corporate Tax Registration",
          "Bookkeeping & Accounting Support",
          "PRO & Document Clearing Services",
        ],
      },
      {
        title: "Business Activities We Support",
        intro: "We help register companies involved in:",
        items: [
          "General Trading",
          "Import & Export",
          "E-Commerce",
          "Information Technology",
          "Digital Marketing",
          "Consultancy",
          "Real Estate",
          "Logistics",
          "Food Trading",
          "Building Materials",
          "Beauty & Cosmetics",
          "Healthcare",
          "Education",
          "Manufacturing",
          "Tourism",
          "Media & Advertising",
          "Professional Services",
        ],
      },
    ],
    whyChoose: {
      title: "Why Choose Al Hadi Business Services?",
      items: [
        "Experienced Business Setup Consultants",
        "Affordable Free Zone Packages",
        "Transparent Pricing",
        "Fast & Hassle-Free Registration",
        "End-to-End Documentation Support",
        "Dedicated Relationship Manager",
        "Visa Processing Assistance",
        "Corporate Banking Guidance",
        "Tax & Compliance Support",
        "Excellent Customer Service",
      ],
    },
    documents: {
      title: "Documents Required",
      intro: "Generally, the following documents are required:",
      items: [
        "Passport Copy",
        "Passport Size Photograph",
        "UAE Visa Copy (if available)",
        "Emirates ID (if applicable)",
        "Preferred Company Name",
        "Business Activity Details",
      ],
      footer:
        "Additional documents may be required depending on the selected Free Zone and business activity.",
    },
    related: [
      { slug: "business-setup", title: "Business Setup & Company Formation" },
    ],
  },
  {
    slug: "pro-document-clearing",
    title: "PRO & Document Clearing Services",
    subtitle: "Government Documentation Support",
    heroText: "PRO & Document Clearing Services",
    intro: [
      "Our professional PRO services ensure smooth processing of government-related documentation including MOHRE, GDRFA, Immigration, Emirates ID, Labour Card, and visa applications.",
    ],
    image: "/assets/images/services/services-img-2.jpg",
    offeringsTitle: "Our PRO Services",
    offerings: [
      "MOHRE documentation",
      "GDRFA documentation",
      "Immigration applications",
      "Emirates ID",
      "Labour Card",
      "Visa applications",
    ],
  },
  {
    slug: "family-visa",
    title: "Family Visa Services in UAE",
    subtitle: "UAE Family Visa Assistance in Dubai",
    heroText: "UAE Family Visa Assistance in Dubai",
    intro: [
      "Bring your loved ones to the UAE with confidence. Al Hadi Business Services provides complete UAE Family Visa services for residents, investors, business owners, and professionals. We handle the entire process—from document preparation and application submission to Emirates ID processing and residence visa issuance—making family sponsorship simple and stress-free.",
      "Whether you want to sponsor your spouse, children, or parents, our experienced PRO consultants ensure your application is prepared accurately and processed efficiently.",
    ],
    image: "/assets/images/services/familyvisa.jpg",
    offeringsTitle: "Our UAE Family Visa Services",
    offeringsIntro: "We offer complete assistance for:",
    offerings: [
      "Spouse Visa",
      "Children Visa",
      "Parent Visa",
      "New Family Visa Applications",
      "Family Visa Renewal",
      "Family Visa Cancellation",
      "Inside UAE Status Change",
      "Entry Permit Assistance",
      "Residence Visa Processing",
      "Emirates ID Application",
      "Medical Fitness Test Assistance",
      "Document Attestation Guidance",
      "Arabic Translation Support",
      "PRO & Government Documentation Services",
    ],
    whoCanApply: {
      title: "Who Can Apply for a UAE Family Visa?",
      intro: "Eligible UAE residents may be able to sponsor:",
      items: [
        "Husband or Wife",
        "Children",
        "Parents (subject to applicable conditions)",
        "Other eligible dependents where permitted under UAE regulations",
      ],
      footer:
        "Eligibility depends on the sponsor's residency status and compliance with current UAE immigration requirements.",
    },
    benefits: {
      title: "Benefits of a UAE Family Visa",
      items: [
        "Live together with your family in the UAE",
        "Long-term residence for eligible dependents",
        "Access to education and healthcare",
        "Emirates ID for sponsored family members",
        "Ability to renew the residence visa while eligibility requirements are met",
        "Simple renewal process with professional assistance",
      ],
    },
    documents: {
      title: "Documents Required",
      intro: "Commonly required documents include:",
      groups: [
        {
          title: "Sponsor Documents",
          items: [
            "Passport Copy",
            "Emirates ID",
            "UAE Residence Visa",
            "Salary Certificate or Labour Contract (where applicable)",
            "Tenancy Contract (Ejari) or accommodation proof",
          ],
        },
        {
          title: "Family Member Documents",
          items: [
            "Passport Copy",
            "Passport Size Photograph",
            "Attested Marriage Certificate (for spouse)",
            "Attested Birth Certificate (for children)",
            "Medical Fitness Test (where applicable)",
            "Health Insurance (if required)",
          ],
        },
      ],
      footer:
        "Additional documents may be requested depending on the immigration authority and the applicant's circumstances.",
    },
    process: {
      title: "Our Family Visa Process",
      steps: [
        {
          title: "Step 1 – Free Consultation",
          description:
            "Our consultants assess your eligibility and explain the required documents.",
        },
        {
          title: "Step 2 – Document Preparation",
          description:
            "We review and prepare all required documents for submission.",
        },
        {
          title: "Step 3 – Visa Application",
          description:
            "We submit your application through the appropriate UAE immigration authority.",
        },
        {
          title: "Step 4 – Medical & Emirates ID",
          description:
            "We assist with medical fitness testing and Emirates ID procedures where required.",
        },
        {
          title: "Step 5 – Residence Visa Issuance",
          description:
            "Once approved, your family member receives their UAE residence visa.",
        },
      ],
    },
    related: [{ slug: "golden-visa", title: "Golden Visa Services" }],
  },
  {
    slug: "vat-registration",
    title: "VAT Registration Services in UAE",
    subtitle: "Professional VAT Registration Services in Dubai, UAE",
    heroText: "Professional VAT Registration Services in Dubai, UAE",
    intro: [
      "Need to register your business for Value Added Tax (VAT) in the UAE? Al Hadi Business Services provides reliable and hassle-free VAT registration services for startups, SMEs, established companies, freelancers, and international businesses operating in the UAE.",
      "Our tax professionals assist you throughout the VAT registration process, ensuring your application is prepared accurately and submitted in accordance with the requirements of the UAE tax authorities.",
      "Whether your business requires mandatory VAT registration or is considering voluntary registration, we provide expert guidance from start to finish.",
    ],
    image: "/assets/images/services/services-img-4.jpg",
    offeringsTitle: "Our VAT Registration Services",
    offeringsIntro: "We offer complete VAT-related solutions, including:",
    offerings: [
      "VAT Registration",
      "Voluntary VAT Registration",
      "Mandatory VAT Registration",
      "VAT Amendment Services",
      "VAT Deregistration",
      "VAT Return Filing",
      "VAT Refund Assistance",
      "VAT Reconsideration Support",
      "VAT Advisory Services",
      "VAT Compliance Review",
      "Tax Registration Number (TRN) Assistance",
      "FTA Portal Assistance",
    ],
    whatIs: {
      title: "What is VAT?",
      description:
        "Value Added Tax (VAT) is a consumption tax applied to most goods and services supplied in the UAE. Businesses that meet the applicable registration requirements must register for VAT with the UAE tax authority and comply with ongoing VAT obligations.",
    },
    whoCanApply: {
      title: "Who Needs VAT Registration?",
      intro: "VAT registration may apply to:",
      items: [
        "Trading Companies",
        "General Trading Businesses",
        "Service Providers",
        "E-Commerce Businesses",
        "Import & Export Companies",
        "Manufacturers",
        "Restaurants & Cafés",
        "Retail Businesses",
        "Construction Companies",
        "Real Estate Businesses",
        "Logistics Companies",
        "Professional Service Firms",
        "Healthcare Businesses",
        "Educational Institutions",
        "Freelancers (where applicable)",
      ],
      footer:
        "Whether registration is mandatory or voluntary depends on your business's taxable supplies and other factors under UAE VAT legislation.",
    },
    benefits: {
      title: "Benefits of VAT Registration",
      items: [
        "Compliance with UAE tax regulations",
        "Obtain a Tax Registration Number (TRN)",
        "Build credibility with customers and suppliers",
        "Support business growth and expansion",
        "Meet contractual and commercial requirements",
        "Access professional VAT compliance support",
        "Reduce the risk of penalties resulting from non-compliance",
      ],
    },
    documents: {
      title: "Documents Required for VAT Registration",
      intro: "Typical documents include:",
      items: [
        "Trade License",
        "Passport Copy of Owner/Partners",
        "Emirates ID (if applicable)",
        "Emirates ID and Visa Copies of Authorized Signatory (if applicable)",
        "Memorandum of Association (MOA) or Incorporation Documents",
        "Company Contact Details",
        "Business Activity Details",
        "Bank Account Information (if available)",
        "Turnover and Financial Information",
        "Import & Export Details (if applicable)",
      ],
      footer:
        "Additional documents may be requested depending on the nature of your business and the tax authority's requirements",
    },
  },
  {
    slug: "trademark-registration",
    title: "Trademark & Brand Registration Services in Dubai, UAE",
    subtitle: "Protect Your Brand with Trademark Registration in the UAE",
    heroText: "Protect Your Brand with Trademark Registration in the UAE",
    intro: [
      "Your brand is one of your most valuable business assets. Registering your trademark gives you exclusive legal rights to your brand name, logo, slogan, or other distinctive marks, helping protect your business from unauthorized use and infringement.",
      "At Al Hadi Business Services, we provide end-to-end trademark registration services across the UAE. Our experienced consultants guide individuals, startups, SMEs, and large businesses through every stage of the trademark registration process, making it simple, efficient, and hassle-free.",
      "Whether you are launching a new business or protecting an established brand, we help secure your intellectual property with professional support.",
    ],
    image: "/assets/images/services/services-img-1.jpg",
    whatIs: {
      title: "What is a Trademark?",
      description:
        "A trademark is a legally protected sign that distinguishes your products or services from those of other businesses. It can include:",
      items: [
        "Brand Name",
        "Company Name",
        "Business Logo",
        "Product Name",
        "Service Name",
        "Slogan or Tagline",
        "Symbol",
        "Combination of Words and Graphics",
      ],
      footer:
        "Registering your trademark provides legal protection and strengthens your brand identity in the marketplace.",
    },
    offeringsTitle: "Our Trademark Registration Services",
    offeringsIntro: "We provide complete assistance for:",
    offerings: [
      "UAE Trademark Registration",
      "Brand Name Registration",
      "Logo Registration",
      "Product Trademark Registration",
      "Service Mark Registration",
      "Trademark Renewal",
      "Trademark Assignment",
      "Trademark Record Updates",
      "Trademark Portfolio Support",
      "Trademark Registration Guidance",
    ],
    benefits: {
      title: "Why Register Your Trademark?",
      intro: "Trademark registration offers several important benefits:",
      items: [
        "Exclusive rights to use your registered trademark in the UAE.",
        "Stronger legal protection against unauthorized use.",
        "Increased brand credibility and customer trust.",
        "Protection of your business reputation.",
        "Valuable intellectual property that can be licensed or transferred.",
        "Long-term support for business growth and expansion.",
        "Stronger position when expanding into regional or international markets.",
      ],
    },
  },
  {
    slug: "golden-visa",
    title: "UAE Golden Visa Services",
    subtitle: "Professional UAE Golden Visa Assistance in Dubai",
    heroText: "Professional UAE Golden Visa Assistance in Dubai",
    intro: [
      "Secure your long-term residency in the UAE with expert Golden Visa services from Al Hadi Business Services. We provide complete assistance for eligible investors, entrepreneurs, skilled professionals, property owners, exceptional talents, and outstanding students who wish to apply for the UAE Golden Visa.",
      "Our experienced consultants guide you through every stage of the process, from eligibility assessment and document preparation to application submission, Emirates ID processing, and residence visa issuance.",
    ],
    image: "/assets/images/services/Golden-Visa-3.jpg",
    whatIs: {
      title: "What is the UAE Golden Visa?",
      description:
        "The UAE Golden Visa is a long-term renewable residence visa that allows eligible foreign nationals to live, work, study, and invest in the UAE without the need for a local sponsor or employer sponsorship in many categories. Depending on the applicable category, the visa may be granted for 5 or 10 years, subject to the relevant eligibility requirements.",
    },
    offeringsTitle: "Our Golden Visa Services",
    offeringsIntro: "We provide complete support for:",
    offerings: [
      "UAE Golden Visa Application",
      "Golden Visa Eligibility Assessment",
      "Property Investor Golden Visa",
      "Business Investor Golden Visa",
      "Entrepreneur Golden Visa",
      "Skilled Professional Golden Visa",
      "Executive & Specialist Golden Visa",
      "Outstanding Student Golden Visa",
      "Family Sponsorship Assistance",
      "Emirates ID Processing",
      "Medical Fitness Test Assistance",
      "Document Verification",
      "PRO & Government Documentation Services",
      "Golden Visa Renewal Assistance",
    ],
    whoCanApply: {
      title: "Who Can Apply for a UAE Golden Visa?",
      intro: "The Golden Visa may be available to eligible applicants, including:",
      items: [
        "Property Investors",
        "Business Investors",
        "Entrepreneurs",
        "Skilled Professionals",
        "Doctors & Healthcare Professionals",
        "Engineers",
        "Scientists & Researchers",
        "Creative Professionals",
        "Outstanding Students & Graduates",
        "Exceptional Talents",
        "Humanitarian Pioneers",
      ],
      footer:
        "Eligibility requirements vary depending on the category and supporting documents.",
    },
    benefits: {
      title: "Benefits of the UAE Golden Visa",
      items: [
        "Long-Term Renewable Residency",
        "No Local Sponsor Required (for eligible categories)",
        "Sponsor Your Family",
        "Live, Work, Study & Invest in the UAE",
        "Greater Business Flexibility",
        "Long-Term Residency Security",
        "Access to UAE Banking and Business Opportunities",
        "Freedom to Travel While Maintaining Residency (subject to applicable rules)",
        "Easy Renewal for Eligible Applicants",
      ],
    },
    related: [{ slug: "family-visa", title: "Family Visa Services in UAE" }],
  },
  {
    slug: "translation",
    title: "Translation Services",
    subtitle: "Legal, Business & Immigration Translation",
    heroText: "Our Translation Services",
    intro: [
      "We provide accurate legal, business, personal, and immigration document translation support for your UAE business and residency needs.",
    ],
    image: "/assets/images/services/services-img-3.jpg",
    offeringsTitle: "Our Translation Services",
    groupedOfferings: [
      {
        title: "Legal Translation",
        intro: "We provide accurate legal translations for:",
        items: [
          "Contracts & Agreements",
          "Power of Attorney (POA)",
          "Court Documents",
          "Memorandum of Association (MOA)",
          "Articles of Association (AOA)",
          "Affidavits",
          "Notary Documents",
          "Legal Notices",
        ],
      },
      {
        title: "Business & Corporate Translation",
        intro: "Professional translation services for:",
        items: [
          "Trade Licenses",
          "Commercial Contracts",
          "Company Profiles",
          "Financial Statements",
          "Audit Reports",
          "Corporate Tax Documents",
          "VAT Documents",
          "Business Proposals",
          "HR Policies",
        ],
      },
      {
        title: "Personal Document Translation",
        intro: "Translation of:",
        items: [
          "Birth Certificates",
          "Marriage Certificates",
          "Divorce Certificates",
          "Death Certificates",
          "Educational Certificates",
          "Diploma & Degree Certificates",
          "School Documents",
          "Medical Reports",
          "Police Clearance Certificates",
          "Experience Certificates",
        ],
      },
      {
        title: "Immigration & Visa Translation",
        intro: "Translation for:",
        items: [
          "Passport Documents",
          "Visa Documents",
          "Emirates ID Documents",
          "Immigration Applications",
          "Residency Documents",
          "Family Visa Documents",
        ],
      },
    ],
    related: [
      { slug: "business-setup", title: "Business Setup & Company Formation" },
    ],
  },
  {
    slug: "virtual-ejari",
    title: "Virtual Ejari Services in Dubai, UAE",
    subtitle: "Affordable Virtual Ejari Services for Business License & Visa Requirements",
    heroText:
      "Affordable Virtual Ejari Services for Business License & Visa Requirements",
    intro: [
      "Need a Virtual Ejari for your business in Dubai? Al Hadi Business Services provides reliable and cost-effective Virtual Ejari solutions for startups, entrepreneurs, freelancers, SMEs, and international investors.",
      "Whether you are setting up a new company, renewing your trade license, applying for an investor visa, or fulfilling office tenancy requirements, our team helps you obtain a Virtual Ejari through eligible business center and office solutions in accordance with applicable Dubai regulations.",
      "We make the process simple, fast, and hassle-free with complete documentation support.",
    ],
    image: "/assets/images/services/services-img-4.jpg",
    related: [
      { slug: "business-setup", title: "Business Setup & Company Formation" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((service) => service.slug);
}
