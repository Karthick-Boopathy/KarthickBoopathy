// ============================================================================
// PLACEHOLDERS — One-line updates for Karthick
// ============================================================================

/**
 * Headshot portrait of Karthick Boopathy with SEO-optimized filename
 */
export const PHOTO_PATH = `${import.meta.env.BASE_URL}images/karthick-boopathy.jpg`;

/**
 * // TODO(karthick): Set your GitHub profile link below.
 * Note: Pre-filled with your GitHub profile from https://github.com/Karthick-Boopathy/KarthickBoopathy.git
 */
export const GITHUB_URL = "https://github.com/Karthick-Boopathy";

/**
 * // TODO(karthick): Set your LinkedIn profile URL below.
 */
export const LINKEDIN_URL = "https://www.linkedin.com/in/karthick-boopathy";

/**
 * // TODO(karthick): Set your Kannan Farms Instagram page URL below.
 */
export const KANNAN_FARMS_INSTAGRAM_URL = "https://instagram.com/kannanfarms";

/**
 * // TODO(karthick): Link to your downloadable resume PDF.
 * Drop your resume file in /public/resume.pdf or link to an external hosted PDF.
 */
export const RESUME_PDF_URL = "./resume.pdf";

// ============================================================================
// VERBATIM PORTFOLIO DATA (Nothing dropped or shortened)
// ============================================================================

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  coordinates: string;
  phone: string;
  email: string;
  kannanFarmsWebsite: string;
}

export const personalInfo: PersonalInfo = {
  name: "Karthick Boopathy",
  title: "Engineer & Independent Technical Builder",
  location: "Coimbatore, Tamil Nadu, India",
  coordinates: "11.0168° N, 76.9558° E",
  phone: "+91 9750341456",
  email: "karthicboopathy@gmail.com",
  kannanFarmsWebsite: "https://kannanfarms.com",
};

export const aboutSummary =
  "Automobile engineering graduate with hands-on automotive experience (ADAS calibration, EV design, vehicle systems) and self-directed software development skills built through independent projects. Currently runs a natural-products e-commerce business end-to-end and builds automation tools, trading systems, and AI-assisted applications. Comfortable moving between hardware, mechanical systems, and full-stack software.";

export interface SkillCategory {
  category: string;
  tagline: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "Software & Development",
    tagline: "Full-stack systems, trading engines, local LLM integrations, and reactive web platforms.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "FastAPI",
      "Firebase/Firestore",
      "Local LLM tooling (Ollama)",
      "Automation scripting",
      "PostgreSQL",
      "HTML5/Canvas",
    ],
  },
  {
    category: "Automotive & Engineering",
    tagline: "Mechanical modeling, industrial sensor calibration, EV powertrains, and hardware prototyping.",
    skills: [
      "AutoCAD",
      "CATIA",
      "LabVIEW basics",
      "ADAS camera calibration (intrinsic/extrinsic)",
      "Vehicle systems engineering",
      "Arduino/Raspberry Pi hardware prototyping",
    ],
  },
  {
    category: "Tools & Platforms",
    tagline: "Certified vehicle diagnostic processes, systems tooling, and low-level computing foundations.",
    skills: [
      "Microsoft Office",
      "C (basics)",
      "ASDC-certified automotive technician",
    ],
  },
];

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  organization: string;
  website?: string;
  instagram?: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "kannan-farms",
    number: "01",
    role: "Founder & Operator",
    organization: "Kannan Farms (kannanfarms.com)",
    website: "https://kannanfarms.com",
    instagram: KANNAN_FARMS_INSTAGRAM_URL,
    period: "Ongoing",
    bullets: [
      "Built and runs a natural-products e-commerce business selling solar-dried banana powder and moringa powder, from sourcing through fulfillment.",
      "Developed the storefront and admin dashboard on a Firebase/React stack with Google sign-in, WhatsApp ordering, and Delhivery pincode-based delivery estimation.",
      "Designed a tiered loyalty rewards program (Seedling / Grower / Harvester) and leads ongoing UI/SEO improvement passes on the storefront.",
    ],
    tags: ["E-Commerce", "React", "Firebase", "Delhivery API", "Operations & Sourcing"],
  },
  {
    id: "autotrader-pro",
    number: "02",
    role: "Independent Developer",
    organization: "Self-Directed Projects",
    period: "Ongoing",
    bullets: [
      "Designed and built AutoTrader Pro, a cryptocurrency trading bot with a FastAPI/Python backend and React dashboard targeting the CoinDCX exchange.",
      "Implemented multiple trading strategy modules (MA Pullback, Breakout Hunter, RSI Divergence, LLM-based Sentiment, Grid Trading) with local Ollama LLM signals and PostgreSQL trade persistence.",
      "Audited and hardened the codebase across multiple review passes, resolving API integration bugs, silent database failures, and per-pair state isolation issues.",
    ],
    tags: ["FastAPI", "Python", "React", "Ollama LLM", "PostgreSQL", "CoinDCX API"],
  },
  {
    id: "valeo",
    number: "03",
    role: "System Engineer Intern",
    organization: "Valeo India Pvt Ltd",
    period: "Sep 2022 – Jun 2023",
    bullets: [
      "Supported the Renault-Nissan PCU program within the systems engineering team during the RFQ stage.",
      "Performed field operations calibration work, including intrinsic calibration for a fisheye camera and SAW function, and extrinsic calibration (FLMC).",
    ],
    tags: ["ADAS Calibration", "Renault-Nissan PCU", "Fisheye Optics", "SAW Function", "FLMC"],
  },
  {
    id: "anaamalais-toyota",
    number: "04",
    role: "STEP Program Trainee (ASDC)",
    organization: "Anaamalais Toyota",
    period: "Mar 2022 – Apr 2022",
    bullets: [
      "Completed a hands-on automotive service and maintenance training program run by the Automotive Skill Development Council, concluding with a certification exam and viva.",
    ],
    tags: ["Automotive Maintenance", "ASDC Certification", "Vehicle Diagnostics"],
  },
  {
    id: "elite-techno-groups",
    number: "05",
    role: "Electric Vehicle Intern",
    organization: "Elite Techno Groups",
    period: "Aug 2021 – Sep 2021",
    bullets: [
      "Studied EV design and go-to-market processes and the industrial standards used to design an electric car.",
      "Calculated battery efficiency for the Ather 450X and conducted a market survey on the Mahindra e20.",
    ],
    tags: ["EV Powertrain", "Battery Efficiency", "Ather 450X", "Mahindra e20"],
  },
  {
    id: "axis-global",
    number: "06",
    role: "PLC & Automation Intern",
    organization: "Axis Global Automation",
    period: "Apr 2019 – May 2019",
    bullets: [
      "Learned ladder logic programming for PLCs and studied the working of pneumatic and hydraulic systems and actuators.",
      "Gained hands-on exposure to industrial control and automation systems.",
    ],
    tags: ["PLC Ladder Logic", "Pneumatics", "Hydraulics", "Industrial Automation"],
  },
  {
    id: "royal-enfield",
    number: "07",
    role: "Service Advisor & Technician Intern",
    organization: "Royal Enfield Showroom (Bulmen)",
    period: "Sep 2018 – Oct 2018",
    bullets: [
      "Completed a two-month rotational internship: one month with a service advisor on customer intake, job cards, and service scheduling, and one month on the technician floor.",
      "Assisted technicians with routine maintenance and repair work on Royal Enfield motorcycles.",
    ],
    tags: ["Rotational Service", "Customer Intake", "Motorcycle Maintenance", "Floor Operations"],
  },
];

export interface ProjectItem {
  title: string;
  durationOrType: string;
  description: string;
  architecture: string[];
  specs: { label: string; val: string }[];
}

export const selectedProjects: ProjectItem[] = [
  {
    title: "Obstacle Detection Vehicle",
    durationOrType: "1 month, personal project",
    description:
      "Built a low-cost alternative to existing obstacle-detection systems using an ultrasonic sensor and Arduino board; handled coding and model fabrication himself.",
    architecture: ["Arduino C++", "Ultrasonic Sensor (HC-SR04)", "Motor Driver", "Chassis Fabrication"],
    specs: [
      { label: "Platform", val: "Arduino Embedded" },
      { label: "Sensing", val: "Acoustic / Ultrasonic" },
      { label: "Execution", val: "Complete Solo Fabrication" },
    ],
  },
  {
    title: "Reverse Parking Guidance Without Camera",
    durationOrType: "3 weeks, personal project",
    description:
      "Designed a low-cost, camera-free parking guidance system using an IR sensor, transistor, and diode, completed independently end-to-end.",
    architecture: ["Analog Circuit Design", "IR Proximity Sensing", "BJT Transistors", "Signal Diode Array"],
    specs: [
      { label: "Logic Type", val: "Analog Hardware Guidance" },
      { label: "Sensor", val: "Infrared Optical" },
      { label: "Constraint", val: "Camera-Free Low Cost" },
    ],
  },
  {
    title: "Drone Flight Simulator",
    durationOrType: "Personal project",
    description:
      "Built a browser-based flight simulator using HTML5 Canvas and the Gamepad API, with physics simulation and motor mixing, to support an Arduino-based hardware drone build.",
    architecture: ["HTML5 Canvas", "Gamepad API", "Aerodynamic Physics", "Quad Motor Mixing Logic"],
    specs: [
      { label: "Interface", val: "Browser Hardware Input" },
      { label: "Physics", val: "6-DoF Motor Dynamics" },
      { label: "Companion", val: "Arduino Drone Hardware" },
    ],
  },
];

export interface LabItem {
  title: string;
  description: string;
  tag: string;
}

export const exploratoryProjects: LabItem[] = [
  {
    title: "BloomWish",
    description: "A two-page static site with a hash-encoded wish link and a layered, cinematic cherry blossom tree canvas animation.",
    tag: "Canvas & Generative Animation",
  },
  {
    title: "ReelBot India",
    description: "A dashboard concept for free-tier short-video automation targeting Indian platforms, exploring AI content creation with Stable Diffusion/ComfyUI.",
    tag: "AI Automation & Pipelines",
  },
  {
    title: "Vastu Shastra Floor Plan",
    description: "A Vastu Shastra-compliant home floor plan designed for a 5-cent plot, delivered as an interactive HTML floor plan.",
    tag: "Architectural & Interactive HTML",
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  notes?: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Engineering, Automobile Engineering",
    institution: "Bannari Amman Institute of Technology",
    period: "2020 – 2023",
    grade: "CGPA 8.02",
  },
  {
    degree: "Diploma, Automobile Engineering",
    institution: "Sri Krishna Polytechnic College",
    period: "2016 – 2019",
    grade: "74%",
  },
  {
    degree: "SSLC (10th)",
    institution: "Amrita Vidyalayam",
    period: "2016",
    grade: "CGPA 7.2",
  },
];

export interface EventItem {
  title: string;
  context: string;
  type: string;
}

export const eventsAndActivities: EventItem[] = [
  {
    title: "International Conference Technical Paper Presentation",
    context: "Presented a paper at an international conference at Karpagam Academy of Higher Education.",
    type: "Conference Paper",
  },
  {
    title: "NSS Camp Leadership",
    context: "Organized a week-long NSS camp during diploma studies.",
    type: "Community Leadership",
  },
  {
    title: "SAE Electric Bicycle Design Quiz Organizer",
    context: "Organized a quiz event as part of an SAE electric bicycle design event (2022).",
    type: "SAE Event Organizer",
  },
];

export const personalProfile = {
  languages: ["English", "Tamil"],
  interests: ["Playing musical instruments", "Gardening", "Animal care"],
};
