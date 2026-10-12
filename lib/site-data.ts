export const siteConfig = {
  name: "bright career admission",
  tagline: "Your Future, Our Priority",
  taglineHi: "आपका भविष्य, हमारी प्राथमिकता",
  slogan: "Give your dreams a new flight",
  sloganHi: "अपने सपनों को दें नई उड़ान",
  invocation: "|| जय श्री महाकाल ||",
  owner: {
    name: "Shivam Kumar",
    title: "Career Counselor",
  },
  primaryPhone: "7992256327",
  whatsappPhone: "917992256327",
  phones: ["7992256327", "7250513800", "7870607458"],
  addresses: [
    {
      label: "Head Office",
      line: "Warisaliganj, Nawada, Bihar",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/people/bright-career-admissions/61566766245614/",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3615.755792123078!2d85.6343870753757!3d25.008412777833044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAwJzMwLjMiTiA4NcKwMzgnMTMuMSJF!5e0!3m2!1sen!2sin!4v1791822171807!5m2!1sen!2sin",
  developer: {
    name: "Anand Kumar",
    title: "Website Developer",
    phone: "7033626094",
    whatsappPhone: "917033626094",
    tagline: "Professional websites — static or dynamic",
    services: [
      "Business & consultancy websites",
      "Education & admission portals",
      "Portfolio and personal sites",
      "E-commerce and booking systems",
      "Admin dashboards & custom web apps",
      "Mobile-friendly, fast, and SEO-ready builds",
    ],
    websiteTypes: [
      {
        type: "Static Websites",
        description:
          "Fast, secure pages for businesses that need a clean online presence — brochures, contact info, and service listings.",
        examples: ["Landing pages", "Small business sites", "Information portals"],
      },
      {
        type: "Dynamic Websites",
        description:
          "Interactive sites with forms, databases, user accounts, and content that updates as your business grows.",
        examples: ["Admission forms", "Admin panels", "Blogs & dashboards"],
      },
    ],
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/admission", label: "Apply Now" },
  { href: "/contact", label: "Contact" },
  { href: "/developer", label: "Web Developer" },
];

export const popularCourses = [
  { name: "ANM", slug: "nursing" },
  { name: "GNM", slug: "nursing" },
  { name: "B.Tech", slug: "engineering" },
  { name: "B.Sc Nursing", slug: "nursing" },
  { name: "MBBS", slug: "mbbs" },
  { name: "Polytechnic", slug: "polytechnic" },
  { name: "Paramedical", slug: "paramedical" },
  { name: "B.Ed", slug: "management" },
  { name: "MBA", slug: "management" },
  { name: "BCA", slug: "management" },
  { name: "MCA", slug: "management" },
];

export const specialties = [
  {
    title: "Best Colleges",
    titleHi: "भारत के बेहतरीन कॉलेजों में नामांकन",
    icon: "building",
  },
  {
    title: "Experienced Team",
    titleHi: "अनुभवी टीम के साथ छात्रों की पूरी सहायता",
    icon: "team",
  },
  {
    title: "Proper Guidance",
    titleHi: "सही दिशा में सही निर्णय",
    icon: "target",
  },
  {
    title: "End-to-End Support",
    titleHi: "छात्रों के भविष्य तक हर कदम पर साथ",
    icon: "trophy",
  },
  {
    title: "Career Opportunities",
    titleHi: "बेहतरीन करियर अवसर",
    icon: "shield",
  },
];

export type CourseCategory = {
  id: string;
  title: string;
  description: string;
  courses: {
    name: string;
    tagline: string;
    eligibility: string;
    duration: string;
    fees?: string;
    admissionProcess: string;
  }[];
};

export const courseCategories: CourseCategory[] = [
  {
    id: "nursing",
    title: "Nursing",
    description:
      "Build a compassionate healthcare career with ANM, GNM, and B.Sc Nursing programs across reputed institutions.",
    courses: [
      {
        name: "ANM (Auxiliary Nurse Midwifery)",
        tagline: "Community care and maternal health support",
        eligibility: "10+2 (any stream) with minimum 45% marks",
        duration: "2 Years",
        fees: "Varies by college — guidance provided",
        admissionProcess:
          "Merit-based counselling. We help with form filling, document verification, and seat confirmation.",
      },
      {
        name: "GNM (General Nursing & Midwifery)",
        tagline: "Save lives with compassion and clinical training",
        eligibility: "10+2 with Physics, Chemistry, Biology — min. 45%",
        duration: "3.5 Years",
        fees: "Varies by college — guidance provided",
        admissionProcess:
          "Entrance or merit-based admission. Complete support from application to enrollment.",
      },
      {
        name: "B.Sc Nursing",
        tagline: "Professional nursing degree for hospital careers",
        eligibility: "10+2 with PCB — min. 50%",
        duration: "4 Years",
        fees: "Varies by college — guidance provided",
        admissionProcess:
          "NEET or state-level counselling. We guide you through every step.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    description:
      "From B.Tech to M.Tech — secure admission in top engineering colleges with the right course and branch.",
    courses: [
      {
        name: "B.Tech",
        tagline: "A foundation for a bright engineering future",
        eligibility: "10+2 with PCM — min. 45% (JEE/state entrance)",
        duration: "4 Years",
        admissionProcess:
          "JEE Main, state CET, or management quota. We match you with the best available options.",
      },
      {
        name: "M.Tech",
        tagline: "Advanced engineering excellence",
        eligibility: "B.Tech/B.E. with valid GATE score (where applicable)",
        duration: "2 Years",
        admissionProcess:
          "GATE-based or direct admission counselling. Expert guidance on specializations.",
      },
    ],
  },
  {
    id: "polytechnic",
    title: "Polytechnic",
    description:
      "Diploma programs for hands-on technical skills — ideal after 10th or 12th for early career entry.",
    courses: [
      {
        name: "Polytechnic Diploma",
        tagline: "Build your technical tomorrow",
        eligibility: "10th pass with min. 35% marks",
        duration: "3 Years",
        admissionProcess:
          "State polytechnic entrance or direct admission. Branch selection guidance included.",
      },
    ],
  },
  {
    id: "management",
    title: "Management & IT",
    description:
      "Business, computer applications, and education programs for leadership and tech careers.",
    courses: [
      {
        name: "BBA",
        tagline: "Business leadership and management skills",
        eligibility: "10+2 in any stream — min. 45%",
        duration: "3 Years",
        admissionProcess: "Merit-based or entrance exam. College shortlisting support.",
      },
      {
        name: "MBA",
        tagline: "Advance your career in business management",
        eligibility: "Graduation in any discipline — min. 50%",
        duration: "2 Years",
        admissionProcess:
          "CAT/MAT/state MBA entrance. Profile building and college selection assistance.",
      },
      {
        name: "BCA",
        tagline: "Build your career in the IT world",
        eligibility: "10+2 with Mathematics — min. 45%",
        duration: "3 Years",
        admissionProcess: "Merit-based admission with document and form support.",
      },
      {
        name: "MCA",
        tagline: "Master of Computer Applications",
        eligibility: "Graduation with Mathematics — min. 50%",
        duration: "2 Years",
        admissionProcess: "Entrance or merit-based. Guidance on top IT institutes.",
      },
      {
        name: "B.Ed",
        tagline: "Start your journey as a professional educator",
        eligibility: "Graduation — min. 50%",
        duration: "2 Years",
        admissionProcess: "State B.Ed counselling. Complete application assistance.",
      },
    ],
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description:
      "D.Pharma and B.Pharma pathways into the pharmaceutical and healthcare industry.",
    courses: [
      {
        name: "D.Pharma",
        tagline: "Foundation for a rewarding pharmacy career",
        eligibility: "10+2 with PCB/PCM — min. 45%",
        duration: "2 Years",
        admissionProcess: "Merit-based or entrance. PCI-approved college placement support.",
      },
      {
        name: "B.Pharma",
        tagline: "A pathway to healthcare and pharma success",
        eligibility: "10+2 with PCB/PCM — min. 50%",
        duration: "4 Years",
        admissionProcess:
          "State pharmacy entrance or direct admission with full documentation help.",
      },
    ],
  },
  {
    id: "paramedical",
    title: "Paramedical & Medical Support",
    description:
      "Allied health courses including paramedical, dresser, and related clinical support roles.",
    courses: [
      {
        name: "Paramedical Courses",
        tagline: "Save lives, build a noble career",
        eligibility: "10+2 (Science preferred) — min. 45%",
        duration: "1–3 Years (course dependent)",
        admissionProcess:
          "Direct or merit-based admission. We help identify the right paramedical stream.",
      },
      {
        name: "Dresser / Medical Assistant",
        tagline: "Clinical support and patient care training",
        eligibility: "10th or 10+2 pass",
        duration: "1–2 Years",
        admissionProcess: "Direct admission with document preparation support.",
      },
    ],
  },
  {
    id: "mbbs",
    title: "MBBS in India & Abroad",
    description:
      "Explore MBBS admission options at leading medical colleges in India and recognized universities abroad, with guidance on eligibility, entrance requirements, documentation, and the admission process.",
    courses: [
      {
        name: "MBBS in India",
        tagline: "Guidance for medical college options across India",
        eligibility: "10+2 with Physics, Chemistry, Biology and English; NEET qualification as required by current regulations",
        duration: "5.5 Years (including internship; may vary by program)",
        admissionProcess:
          "Guidance on NEET-based counselling, college options, eligibility, and required documents. Admission depends on exam results, counselling rules, and seat availability.",
      },
      {
        name: "MBBS Abroad",
        tagline: "Compare international medical university options",
        eligibility:
          "10+2 with Physics, Chemistry and Biology; NEET qualification and other requirements may apply under current Indian regulations",
        duration: "Varies by country and university",
        admissionProcess:
          "Guidance on comparing universities, entry requirements, documentation, and the application process. Verify recognition, licensing eligibility, fees, and current regulations before applying.",
      },
    ],
  },
];

export const biharCreditCardBenefits = [
  "Low interest rate (कम ब्याज दर)",
  "Long repayment period (लंबी चुकौती अवधि)",
  "Easy facility for students (छात्रों के लिए आसान सुविधा)",
  "A step towards a bright future (उज्ज्वल भविष्य की ओर एक कदम)",
];

export const admissionCourseOptions = courseCategories.flatMap((cat) =>
  cat.courses.map((c) => c.name),
);
