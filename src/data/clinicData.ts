export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  areasOfInterest: string[];
  initials: string;
  accentColor: string;
  gender: 'female' | 'male';
  avatarUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: 'blue' | 'pink' | 'purple' | 'teal' | 'orange' | 'yellow' | 'green';
  details?: string[];
}

export interface OpeningHourItem {
  day: string;
  hours: string;
  isToday?: boolean;
}

export const CLINIC_URLS = {
  bookingUrl: "https://automedsystems.com.au/ams/clinics/31/nova-medical-centre-stirling-stirling-6021/doctors",
  repeatScriptsUrl: "https://automedsystems.com.au/ams/clinics/31/nova-medical-centre-stirling-stirling-6021/scripts/loc/1",
  googleMapsUrl: "https://maps.app.goo.gl/D8cA5WoEdn6s85Zz6",
};

export const CLINIC_INFO = {
  name: "Nova Medical Centre Stirling",
  shortName: "Nova Medical Stirling",
  websiteUrl: "https://nova-medical-centre-stirling.base44.app",
  tagline: "Your trusted partner for accessible healthcare",
  heroHeadline: "Bringing Health to life for the whole family",
  heroDescription: "Comprehensive healthcare in Stirling. Open 7 days a week for your convenience. From family medicine to specialized care, we're here for every stage of your health journey.",
  footerDescription: "Modern family practice open 7 days a week. We strive for excellence in patient care, service quality & have a focus on preventive care. Expect an unmatched level of care from our physicians and staff.",

  // Contact details
  phone: "08 9349 9900",
  phoneInt: "+61 8 9349 9900",
  fax: "08 9117 2005",
  email: "info@novamedical.com.au",
  address: "31 Cedric Street, Stirling, Western Australia 6021",
  shortAddress: "31 Cedric Street, Stirling, Western Australia 6021",
  fullAddress: "31 Cedric Street, Stirling, Western Australia 6021",
  suburb: "Stirling",
  state: "WA",
  postcode: "6021",
  country: "Australia",
  googleMapsUrl: CLINIC_URLS.googleMapsUrl,
  bookingUrl: CLINIC_URLS.bookingUrl,
  repeatScriptsUrl: CLINIC_URLS.repeatScriptsUrl,
  coordinates: {
    lat: -31.8897,
    lng: 115.8056,
  },
  parking: "1 Hour FREE parking available on-site and Stirling Council carpark",
  established: "Medical centres since 2012",

  // Billing
  billingType: "Private Billing Practice",
  bulkBillingNotes: [
    "Children under 16 years of age",
    "Patients over 60 holding valid Pensioner / Healthcare / Seniors cards",
  ],
  medicareProvider: true,

  // After Hours & Emergency
  afterHours: {
    service: "Night Doctor",
    phone: "1300 644 483",
    website: "https://nightdr.com.au",
  },
  emergency: {
    phone: "000",
    message: "Call 000 immediately for life-threatening situations.",
  },
  hadsco: {
    name: "Health and Disability Services Complaints Office (HaDSCO)",
    perthPhone: "(08) 6551 7600",
    countryFreeCall: "1800 813 583",
  },

  // Catchment
  catchmentSuburbs: ["Stirling", "Balcatta", "Osborne Park", "Innaloo", "Tuart Hill", "Karrinyup"],
};

export const HERO_BADGES = [
  "Now Accepting New Patients",
  "Private Billing Practice",
  "Open 7 Days a Week",
];

export const HIGHLIGHT_CARDS = [
  {
    id: "experienced-gps",
    title: "Experienced GPs",
    description: "Your health entrusted to the best healthcare professionals committed to ongoing development.",
    icon: "Stethoscope",
    accent: "green",
  },
  {
    id: "personalized-care",
    title: "Personalized Care",
    description: "Treatment plans carefully tailored to your unique individual and family medical needs.",
    icon: "HeartHandshake",
    accent: "mint",
  },
  {
    id: "quality-safety",
    title: "Quality & Safety",
    description: "Fully accredited medical practice ensuring safety, privacy, and peace of mind.",
    icon: "ShieldCheck",
    accent: "teal",
  },
  {
    id: "urgent-care",
    title: "Urgent Care",
    description: "Here when you need us for non-emergency conditions with walk-in & same-day options.",
    icon: "Clock",
    accent: "cyan",
  },
];

export const PRIMARY_SERVICES: Service[] = [
  {
    id: "family-health",
    title: "Family Health & General Practice",
    description: "Comprehensive care for all ages, from children to seniors, focusing on holistic health.",
    iconName: "Users",
    accentColor: "blue",
    details: [
      "Routine consultations and check-ups",
      "Preventive health checks & advice",
      "Management of acute medical illnesses",
      "Family medicine & lifestyle counseling",
    ],
  },
  {
    id: "children-health",
    title: "Children & Adolescent Health",
    description: "Specialized pediatric care, developmental milestone monitoring, and immunizations.",
    iconName: "Baby",
    accentColor: "pink",
    details: [
      "Childhood immunizations & vaccinations",
      "Growth and developmental checks",
      "Adolescent health & mental support",
      "In-house Consultant Paediatrician support",
    ],
  },
  {
    id: "mental-health",
    title: "Mental Health Care Plans",
    description: "Supportive mental health services, counseling referrals, and personalized care plans.",
    iconName: "Brain",
    accentColor: "purple",
    details: [
      "Medicare Mental Health Care Plans (GP Mental Health Treatment Plan)",
      "Depression and anxiety management",
      "Referrals to clinical psychologists & psychiatrists",
      "Stress & burnout support",
    ],
  },
  {
    id: "travel-clinic",
    title: "Travel Clinic & Vaccinations",
    description: "Pre-travel consultations, destination-specific advice, and required vaccinations including Yellow Fever.",
    iconName: "Plane",
    accentColor: "teal",
    details: [
      "Yellow Fever accredited vaccination center",
      "Pre-travel medical advice & prescriptions",
      "Malaria prophylaxis & travel kit guidance",
      "Post-travel health assessments",
    ],
  },
  {
    id: "corporate-medicals",
    title: "Corporate Medicals & Worker's Comp",
    description: "Worker's compensation management, pre-employment assessments, and workplace health.",
    iconName: "Briefcase",
    accentColor: "orange",
    details: [
      "Pre-employment medical examinations",
      "Fly-In Fly-Out (FIFO) medical assessments",
      "Worker's Compensation injury management",
      "Fitness for work certifications",
    ],
  },
  {
    id: "skin-check",
    title: "Skin Check Clinic",
    description: "Comprehensive skin cancer screening, mole checks, and dermoscopy assessments.",
    iconName: "Sun",
    accentColor: "yellow",
    details: [
      "Full body skin checks with dermoscopy",
      "Early skin cancer detection & biopsy",
      "Cryotherapy and lesion treatments",
      "Sun protection & skin advice",
    ],
  },
  {
    id: "sexual-health",
    title: "Sexual Health Services",
    description: "Confidential STI/STD testing, contraception advice, and sexual wellbeing care.",
    iconName: "Activity",
    accentColor: "pink",
    details: [
      "Confidential STI screening and treatment",
      "Contraceptive options & counseling",
      "Cervical screening (CST)",
      "Pre-conception counseling",
    ],
  },
  {
    id: "chronic-disease",
    title: "Chronic Disease Management",
    description: "Ongoing structured care for diabetes, heart disease, asthma, and chronic conditions.",
    iconName: "HeartPulse",
    accentColor: "teal",
    details: [
      "GP Management Plans (GPMP)",
      "Team Care Arrangements (TCA)",
      "Diabetes & cardiovascular monitoring",
      "Asthma and COPD action plans",
    ],
  },
  {
    id: "pathology",
    title: "On-site Pathology",
    description: "Convenient in-clinic pathology collection services for blood tests and diagnostics.",
    iconName: "FlaskConical",
    accentColor: "blue",
    details: [
      "Blood test collections",
      "ECG and diagnostic testing",
      "Routine screening lab work",
      "Fast turnaround times for results",
    ],
  },
  {
    id: "mens-womens-health",
    title: "Men's & Women's Health",
    description: "Gender-specific health screenings, hormone management, and wellness checks.",
    iconName: "Sparkles",
    accentColor: "purple",
    details: [
      "Women's health, Pap/cervical screening & menopause care",
      "Men's health, prostate screening & cardiovascular risk",
      "Antenatal shared care & lactation consults",
      "Preventive health assessments",
    ],
  },
];

export const INHOUSE_SPECIALISTS = [
  "Consultant Paediatrician (in-house)",
  "Consultant Psychiatrist (in-house)",
  "Clinical Psychologist (in-house)",
];

export const ADDITIONAL_SERVICES = [
  "FIFO Medicals (Fly-In Fly-Out)",
  "Pre-employment Medicals",
  "Health Assessments (including Aged Care)",
  "Immunizations & Flu Shots",
  "Antenatal Shared Care",
  "Lactation Consults",
  "Preventive Care & Screenings",
  "Specialist Referrals",
  "Palliative Care",
  "Musculoskeletal Care",
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-zille-shehzad",
    name: "Dr Zille Shehzad",
    role: "General Practitioner",
    qualifications: "MBBS • FRACGP",
    initials: "ZS",
    gender: "female",
    accentColor: "#18893B",
    avatarUrl: "/images/dr-zille-shehzad.jpeg",
    areasOfInterest: [
      "Paediatrics",
      "Diabetes",
      "Mental Health",
      "Travel Medicine",
      "Chronic Disease Management",
      "Skin Checks",
      "Antenatal Shared Care",
      "Women's Health",
    ],
  },
  {
    id: "dr-gerard-dcruz",
    name: "Dr Gerard D'Cruz",
    role: "General Practitioner",
    qualifications: "MBBS",
    initials: "GD",
    gender: "male",
    accentColor: "#19BFC4",
    avatarUrl: "/images/dr-gerard-dcruz.jpeg",
    areasOfInterest: [
      "Full Skin Check",
      "Chronic Disease Management",
      "Men's Health",
      "Paediatrics",
      "Mental Health",
      "Aged Care and Palliative Medicine",
    ],
  },
  {
    id: "dr-mildred-chiwara",
    name: "Dr Mildred Chiwara",
    role: "General Practitioner",
    qualifications: "MBChB (University of Aberdeen, UK) • FRACGP",
    initials: "MC",
    gender: "female",
    accentColor: "#EF4D78",
    avatarUrl: "/images/dr-mildred-chiwara.jpeg",
    areasOfInterest: [
      "Women's Health",
      "Sexual Health",
      "Children's Health",
      "Mental Health",
      "Chronic Disease Management",
      "Workers Compensation",
      "Pre-employment Medicals",
      "Health Assessments",
      "Travel Medicine & Vaccinations",
    ],
  },
  {
    id: "dr-dana-alexanderscu",
    name: "Dr Dana Alexanderscu",
    role: "General Practitioner",
    qualifications: "MBBS",
    initials: "DA",
    gender: "female",
    accentColor: "#7856D8",
    avatarUrl: "/images/dr-dana-alexanderscu.jpeg",
    areasOfInterest: [
      "Family Health",
      "Women's Health",
      "Children's Health",
      "Mental Health",
    ],
  },
  {
    id: "dr-hira-shehzad",
    name: "Dr Hira Shehzad",
    role: "General Practitioner",
    qualifications: "MBBS",
    initials: "HS",
    gender: "female",
    accentColor: "#F59A3C",
    avatarUrl: "/images/dr-hira-shehzad.jpeg",
    areasOfInterest: [
      "Family Health",
      "Paediatrics",
      "Women's Health",
      "Mental Health",
      "Lactation Consults",
    ],
  },
  {
    id: "dr-abdullah-shehzad",
    name: "Dr Abdullah Shehzad",
    role: "General Practitioner",
    qualifications: "MBBS",
    initials: "AS",
    gender: "male",
    accentColor: "#29A84A",
    avatarUrl: "/images/dr-abdullah-shehzad.jpeg",
    areasOfInterest: [
      "Family Health",
      "Diabetes",
      "Hypertension",
      "Preventive Health",
      "Chronic Disease Management",
      "Men's Health",
      "Pediatrics",
      "Mental Health",
      "Travel Medicine",
    ],
  },
  {
    id: "dr-yi-ying-heng",
    name: "Dr Yi Ying Heng",
    role: "General Practitioner",
    qualifications: "MBBS",
    initials: "YH",
    gender: "female",
    accentColor: "#19BFC4",
    avatarUrl: "/images/dr-yi-ying-heng.jpeg",
    areasOfInterest: [
      "Family Health",
      "Preventive Health",
      "Chronic Disease Management",
      "Men's Health",
      "Pediatrics",
      "Musculoskeletal Conditions",
      "Workers Compensation",
    ],
  },
  {
    id: "dr-heather-birk",
    name: "Dr Heather Birk",
    role: "General Practitioner",
    qualifications: "MBBS",
    initials: "HB",
    gender: "female",
    accentColor: "#7856D8",
    areasOfInterest: [
      "Chronic Disease Management",
      "Women's Health",
      "Paediatrics",
      "Mental Health",
      "Health Assessment",
      "Palliative Care",
    ],
  },
  {
    id: "dr-anita-jogewar",
    name: "Dr Anita Jogewar",
    role: "General Practitioner",
    qualifications: "MBBS • FRACGP",
    initials: "AJ",
    gender: "female",
    accentColor: "#EF4D78",
    avatarUrl: "/images/dr-anita-jogewar.jpeg",
    areasOfInterest: [
      "Women's Health",
      "Paediatrics",
      "Chronic Disease Management",
      "Family Health",
      "Preventive Health",
      "Skin Checks",
    ],
  },
];

export const OPENING_HOURS: OpeningHourItem[] = [
  { day: "Monday – Friday", hours: "7:30 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 5:00 PM" },
  { day: "Public Holidays", hours: "9:00 AM – 5:00 PM" },
];

export const ACCREDITATION_LOGOS = [
  {
    id: "agpal",
    src: "/images/agpal-logo.png",
    alt: "AGPAL Quality Accredited Practice",
    title: "AGPAL Accredited Practice",
  },
  {
    id: "ama",
    src: "/images/ama-logo.png",
    alt: "Australian Medical Association WA (AMA WA) Member",
    title: "AMA WA Member",
  },
  {
    id: "racgp",
    src: "/images/racgp-logo.png",
    alt: "Royal Australian College of General Practitioners (RACGP)",
    title: "RACGP Accredited Facility",
  },
];
