export interface Country {
  code: string;
  name: string;
  flag: string;
  eligibleEVisa: boolean;
  specialNote?: string;
}

export interface VisaCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  validity: string;
  stayDuration: string;
  entries: string;
  processingTime: string;
  image: string;
  requiredDocs: string[];
  features: string[];
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  category: 'Cities' | 'Beaches' | 'Mountains' | 'Heritage' | 'Islands' | 'Nature';
  image: string;
  size: 'large' | 'medium' | 'tall';
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  state: string;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  category: string;
  image: string;
  summary: string;
  highlights: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Eligibility' | 'Documents' | 'Processing' | 'Tracking' | 'Payment';
}

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', eligibleEVisa: true },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', eligibleEVisa: true },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', eligibleEVisa: true },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', eligibleEVisa: true },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', eligibleEVisa: true },
  { code: 'FR', name: 'France', flag: '🇫🇷', eligibleEVisa: true },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', eligibleEVisa: true },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', eligibleEVisa: true },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', eligibleEVisa: true },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', eligibleEVisa: true },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', eligibleEVisa: true },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', eligibleEVisa: true },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', eligibleEVisa: true },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪', eligibleEVisa: true },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿', eligibleEVisa: true },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭', eligibleEVisa: true },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', eligibleEVisa: true },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', eligibleEVisa: true },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦', eligibleEVisa: true },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾', eligibleEVisa: true },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭', eligibleEVisa: true },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳', eligibleEVisa: true },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩', eligibleEVisa: true },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', eligibleEVisa: true },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', eligibleEVisa: true },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪', eligibleEVisa: true },
  { code: 'AT', name: 'Austria', flag: '🇦🇹', eligibleEVisa: true },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰', eligibleEVisa: true },
  { code: 'NO', name: 'Norway', flag: '🇳🇴', eligibleEVisa: true },
  { code: 'FI', name: 'Finland', flag: '🇫🇮', eligibleEVisa: true },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪', eligibleEVisa: true },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', eligibleEVisa: true },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹', eligibleEVisa: true },
  { code: 'IL', name: 'Israel', flag: '🇮🇱', eligibleEVisa: true },
  { code: 'GR', name: 'Greece', flag: '🇬🇷', eligibleEVisa: true },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', eligibleEVisa: true },
  { code: 'HU', name: 'Hungary', flag: '🇭🇺', eligibleEVisa: true },
  { code: 'RO', name: 'Romania', flag: '🇷🇴', eligibleEVisa: true },
  { code: 'CL', name: 'Chile', flag: '🇨🇱', eligibleEVisa: true },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴', eligibleEVisa: true },
  { code: 'PE', name: 'Peru', flag: '🇵🇪', eligibleEVisa: true },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', eligibleEVisa: true },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦', eligibleEVisa: true },
  { code: 'OM', name: 'Oman', flag: '🇴🇲', eligibleEVisa: true },
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼', eligibleEVisa: true },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭', eligibleEVisa: true },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬', eligibleEVisa: true },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪', eligibleEVisa: true },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', eligibleEVisa: true }
];

export const VISA_CATEGORIES: VisaCategory[] = [
  {
    id: 'tourist',
    title: 'Tourist Visa',
    subtitle: 'Recreation, Sightseeing & Family Visits',
    description: 'Designed for international travelers entering India for leisure, holidaying, visiting heritage sites, or meeting friends and relatives.',
    validity: '30 Days / 1 Year / 5 Years',
    stayDuration: 'Up to 90 continuous days (180 days for US/UK/CA/JP)',
    entries: 'Double entry (30-day) or Multiple entries (1 & 5-year)',
    processingTime: '72 Hours (3 Business Days)',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85',
    requiredDocs: [
      'Bio page of valid passport with at least 6 months validity',
      'Recent digital photograph with plain white background',
      'Return or onward flight reservation ticket details',
      'Proof of sufficient funds for stay duration'
    ],
    features: [
      'Online application with electronic delivery',
      'Valid for entry at 31 designated international airports',
      'Extensive validity options up to 5 years',
      'Includes Yoga & short cultural courses (up to 30 days)'
    ]
  },
  {
    id: 'business',
    title: 'Business Visa',
    subtitle: 'Commercial Meetings, Trade & Technical Visits',
    description: 'For corporate executives, investors, consultants, and trade delegates engaging in commercial meetings, setting up joint ventures, or technical consultations.',
    validity: '1 Year (Multiple Entries)',
    stayDuration: 'Up to 180 days per visit',
    entries: 'Multiple Entries',
    processingTime: '72 Hours',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    requiredDocs: [
      'Passport bio page with minimum 6 months validity',
      'Business card of the applicant',
      'Letter of Invitation from the Indian host company',
      'Company registration / incorporation proof of host entity'
    ],
    features: [
      'Multiple entry authorization within 12 months',
      'Covers trade fairs, exhibitions, & recruitment',
      'Fast-track electronic review process',
      'No consulate interview required'
    ]
  },
  {
    id: 'medical',
    title: 'Medical Visa',
    subtitle: 'Specialized Medical Treatment & Healthcare',
    description: 'Granted to individuals seeking specialized medical treatment at recognized, accredited hospitals and medical centers in India.',
    validity: '60 Days (Triple Entry)',
    stayDuration: 'Up to 60 days from initial entry date',
    entries: 'Triple Entry',
    processingTime: '48 - 72 Hours',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
    requiredDocs: [
      'Passport bio page with at least 6 months validity',
      'Letter from hospital in home country recommending treatment',
      'Official invitation letter from accredited Indian hospital',
      'Medical diagnostic records & patient details'
    ],
    features: [
      'Allows up to two medical attendants per patient (Medical Attendant Visa)',
      'Triple entry flexibility for follow-up procedures',
      'Priority emergency processing support',
      'Dedicated helpline at international airports'
    ]
  },
  {
    id: 'student',
    title: 'Student Visa',
    subtitle: 'Higher Education, Research & Internships',
    description: 'For full-time academic courses, research fellowships, and institutional exchange programs at approved Indian universities and institutes.',
    validity: 'Course Duration (Up to 5 Years)',
    stayDuration: 'Full duration of academic study',
    entries: 'Multiple Entries',
    processingTime: '3 to 5 Business Days',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
    requiredDocs: [
      'Admission letter from recognized Indian educational institution',
      'No Objection Certificate (NOC) from Ministry of Education if applicable',
      'Financial sponsorship declaration & bank statements',
      'Passport bio page with minimum 6 months validity'
    ],
    features: [
      'Valid for entire undergraduate or postgraduate program',
      'Includes student exchange and internship schemes',
      'Permits multi-city educational travel',
      'Official registration via e-FRRO portal after arrival'
    ]
  },
  {
    id: 'conference',
    title: 'Conference Visa',
    subtitle: 'International Seminars & Workshops',
    description: 'For attending international conferences, symposiums, or seminars organized by Indian Government ministries or recognized institutions.',
    validity: '30 Days',
    stayDuration: 'Up to 30 days',
    entries: 'Single Entry',
    processingTime: '72 Hours',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    requiredDocs: [
      'Official invitation letter from conference organizers in India',
      'Political Clearance from Ministry of External Affairs (MEA)',
      'Event clearance letter from Ministry of Home Affairs (MHA)',
      'Passport copy valid for 6 months'
    ],
    features: [
      'Simplified online document clearance verification',
      'Single entry for full conference schedule',
      'Ideal for delegates, speakers, and panelists',
      'Direct synchronization with event organizers'
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'rajasthan',
    name: 'RAJASTHAN',
    tagline: 'Where royal heritage meets living history',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=90',
    size: 'large',
    description: 'A realm of majestic fortresses, golden desert dunes, and ornate palaces where centuries of royal history resonate in vibrant colors, artisanal crafts, and timeless hospitality.',
    highlights: ['Amber Fort & City Palace, Jaipur', 'Jaisalmer Fort & Thar Desert Dunes', 'Lake Palace & Pichola, Udaipur', 'Mehrangarh Fort, Jodhpur'],
    bestTimeToVisit: 'October to March',
    state: 'Rajasthan'
  },
  {
    id: 'kerala',
    name: 'KERALA',
    tagline: 'Lush backwaters, emerald mists & serene coastlines',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=90',
    size: 'medium',
    description: 'Known as God’s Own Country, Kerala captivates travelers with palm-fringed backwaters, spice-scented hill stations of Munnar, and centuries-old Ayurvedic wellness traditions.',
    highlights: ['Alleppey Houseboat Backwaters', 'Munnar Tea Plantations', 'Periyar Wildlife Sanctuary', 'Fort Kochi Heritage Walks'],
    bestTimeToVisit: 'September to March',
    state: 'Kerala'
  },
  {
    id: 'varanasi',
    name: 'VARANASI',
    tagline: 'The eternal spiritual soul on the sacred Ganges',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=90',
    size: 'tall',
    description: 'One of the world’s oldest continually inhabited cities. Sunrise river cruises along ancient ghats and evening Ganga Aarti ceremonies evoke profound spiritual resonance.',
    highlights: ['Sunrise Boat Ride on the Ganges', 'Dashashwamedh Ghat Ganga Aarti', 'Ancient Sarnath Stupa', 'Silk Weaving Heritage Quarters'],
    bestTimeToVisit: 'October to March',
    state: 'Uttar Pradesh'
  },
  {
    id: 'goa',
    name: 'GOA',
    tagline: 'Golden sands, Portuguese heritage & sun-lit palm groves',
    category: 'Beaches',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=90',
    size: 'medium',
    description: 'Blending relaxed tropical vibes with Portuguese colonial architecture, UNESCO World Heritage churches, pristine beaches, and world-class seafood cuisine.',
    highlights: ['Palolem & Mandrem Pristine Beaches', 'Fontainhas Latin Quarter in Panaji', 'Basilica of Bom Jesus (UNESCO)', 'Spice Plantation Tours'],
    bestTimeToVisit: 'November to February',
    state: 'Goa'
  },
  {
    id: 'himalayas',
    name: 'HIMALAYAS',
    tagline: 'Sacred peaks, glacial valleys & atmospheric sanctuaries',
    category: 'Mountains',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1400&q=90',
    size: 'large',
    description: 'Towering snow-clad ranges, tranquil monasteries of Ladakh, tea-draped hills of Darjeeling, and pristine alpine lakes offering peace and mountain adventure.',
    highlights: ['Pangong Tso & Nubra Valley, Ladakh', 'Rishikesh Yoga & Ganges Headwaters', 'Darjeeling Himalayan Railway', 'Valley of Flowers Sanctuary'],
    bestTimeToVisit: 'May to October (Ladakh) / Mar to June & Sep to Nov',
    state: 'Ladakh / Himachal / Uttarakhand'
  }
];

export const ITINERARIES: Itinerary[] = [
  {
    id: 'royal-rajasthan',
    title: 'Royal Rajasthan Heritage Circuit',
    duration: '8 Days / 7 Nights',
    category: 'Heritage & Palaces',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85',
    summary: 'Journey through the pink city of Jaipur, the blue city of Jodhpur, and the romantic lake palaces of Udaipur.',
    highlights: ['Private palace tours', 'Sunset camel safari in Thar', 'Authentic Royal Thali dining', 'Heritage haveli stays']
  },
  {
    id: 'southern-backwaters',
    title: 'Southern India Backwaters & Wellness',
    duration: '7 Days / 6 Nights',
    category: 'Nature & Ayurveda',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85',
    summary: 'Unwind aboard luxury houseboats in Alleppey, experience authentic Ayurvedic therapies, and explore tea hills.',
    highlights: ['Overnight private houseboat', 'Tailored Ayurvedic treatment', 'Tea tasting in Munnar', 'Kathakali cultural performance']
  },
  {
    id: 'himalayan-odyssey',
    title: 'Himalayan High Altitude Odyssey',
    duration: '11 Days / 10 Nights',
    category: 'Mountain & Culture',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=85',
    summary: 'Cross high mountain passes into the sacred Buddhist monasteries of Ladakh and the azure waters of Pangong Lake.',
    highlights: ['Monastery sunrise chants', 'High pass crossing Khardung La', 'Luxury glamping at Pangong', 'Stargazing at Hunder dunes']
  },
  {
    id: 'coastal-goa-konkan',
    title: 'Coastal Goa & Konkan Sanctuary',
    duration: '6 Days / 5 Nights',
    category: 'Coastal & Heritage',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85',
    summary: 'Discover secluded beaches, colonial Latin mansions, spice estates, and sunset yacht cruises on the Arabian Sea.',
    highlights: ['Private villa by Palolem', 'Latin Quarter walking tour', 'Organic spice estate feast', 'Sunset catamaran sailing']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I know if I am eligible for an Indian e-Visa?',
    answer: 'Passport holders of over 180 countries are eligible for Indian e-Visas provided your passport has at least 6 months validity from your arrival date and contains at least two blank pages. You must be traveling for tourism, business, medical treatment, conference, or student exchanges.',
    category: 'Eligibility'
  },
  {
    id: 'faq-2',
    question: 'What documents are required before starting the application?',
    answer: 'You will need: (1) A clear PDF scan of your passport bio page, (2) A square digital photo with a white background in JPEG format (minimum 350x350 pixels), (3) Travel itinerary or accommodation details, and (4) Specific supporting letters for Business, Medical, or Student visas.',
    category: 'Documents'
  },
  {
    id: 'faq-3',
    question: 'How long does the official e-Visa processing take?',
    answer: 'Standard e-Visa applications are processed within 72 hours (3 business days). For urgent travel requirements, Medical and short-term Tourist e-Visas can receive priority processing within 24–48 hours upon official submission.',
    category: 'Processing'
  },
  {
    id: 'faq-4',
    question: 'How can I track my submitted visa application status?',
    answer: 'You can check your status anytime using the "Track Application" feature on this official portal. Simply enter your Application Reference Number (e.g. IND-2026-XXXXX) along with your Passport Number to see real-time updates.',
    category: 'Tracking'
  },
  {
    id: 'faq-5',
    question: 'Can I make changes to my application after submission?',
    answer: 'Once an application fee is paid and submitted for government verification, details cannot be edited online. If there is a minor typo, official review officers may request additional clarification via email before final issuance.',
    category: 'Processing'
  },
  {
    id: 'faq-6',
    question: 'At which ports of entry is the Indian e-Visa valid?',
    answer: 'The e-Visa is valid for entry at 31 designated international airports (including Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Cochin, Goa) and 5 major seaports. You may exit India from any official Immigration Check Post (ICP).',
    category: 'Eligibility'
  }
];

export const SAMPLE_STATUS_RECORDS: Record<string, {
  ref: string;
  name: string;
  country: string;
  passport: string;
  visaType: string;
  status: 'APPROVED' | 'IN_REVIEW' | 'DOCUMENT_REQUIRED';
  issueDate?: string;
  expiryDate?: string;
  etaNumber?: string;
}> = {
  'IND-2026-88942': {
    ref: 'IND-2026-88942',
    name: 'Alexander Sterling',
    country: 'United States',
    passport: 'A9823412',
    visaType: '1-Year e-Tourist Visa',
    status: 'APPROVED',
    issueDate: '12 August 2026',
    expiryDate: '11 August 2027',
    etaNumber: 'ETA-IND-98421093'
  },
  'IND-2026-44109': {
    ref: 'IND-2026-44109',
    name: 'Elena Rostova',
    country: 'Germany',
    passport: 'C4410298',
    visaType: '1-Year e-Business Visa',
    status: 'IN_REVIEW',
    issueDate: 'Submitted on 17 Aug 2026',
    expiryDate: 'Estimated completion in 24 hrs'
  }
};
