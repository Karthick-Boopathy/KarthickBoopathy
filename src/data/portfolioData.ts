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
 * Real LinkedIn profile link
 */
export const LINKEDIN_URL = "https://www.linkedin.com/in/karthick-boopathy-b77916229?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

/**
 * Real Kannan Farms Instagram page URL
 */
export const KANNAN_FARMS_INSTAGRAM_URL = "https://www.instagram.com/kannan.farms?stkn=MWk3OXJycGh1Zmtkbg%3D%3D&utm_source=qr";

/**
 * Link to downloadable resume file (uploaded Karthick_Boopathy_Resume.docx)
 */
export const RESUME_PDF_URL = `${import.meta.env.BASE_URL}Karthick_Boopathy_Resume.docx`;

// ============================================================================
// VERBATIM PORTFOLIO DATA (Nothing dropped or shortened)
// ============================================================================

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  coordinates: string;
  googleMapsUrl: string;
  phone: string;
  email: string;
  kannanFarmsWebsite: string;
}

export const personalInfo: PersonalInfo = {
  name: "Karthick Boopathy",
  title: "Automobile Engineer & Full-Stack Systems Builder",
  location: "Coimbatore, Tamil Nadu, India",
  coordinates: "10°56'19.3\"N 76°57'07.5\"E",
  googleMapsUrl: "https://www.google.com/maps?q=10%C2%B056'19.3%22N+76%C2%B057'07.5%22E",
  phone: "+91 9750341456",
  email: "karthicboopathy@gmail.com",
  kannanFarmsWebsite: "https://kannanfarms.com",
};

export const aboutSummary =
  "Automobile engineering graduate and systems builder with hands-on automotive experience (ADAS calibration, EV design, vehicle systems) and high-velocity software engineering skills built through modern AI tooling and self-directed projects. Currently runs a natural-products e-commerce business end-to-end and builds automation tools, trading systems, and AI-assisted applications. Comfortable moving fluidly between physical hardware, mechanical rigor, and full-stack software engineering.";

export interface SkillCategory {
  category: string;
  tagline: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "Software & Intelligent Systems",
    tagline: "High-velocity systems development, quantitative trading engines, local LLM integrations, and reactive web platforms.",
    skills: [
      "Vibe Coding & Agentic AI",
      "Python",
      "JavaScript",
      "React",
      "FastAPI",
      "Local LLM Tooling (Ollama)",
      "Firebase/Firestore",
      "Prompt Engineering & Automation",
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

export interface CaseStudy {
  tagline: string;
  problem: string;
  approach: string;
  architectureDetails: string[];
  metrics: { label: string; val: string }[];
  screenshot: string;
  screenshotAlt: string;
  screenshotCaption: string;
}

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
  caseStudy?: CaseStudy;
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
    caseStudy: {
      tagline: "Direct-to-Consumer Agricultural E-Commerce Architecture",
      problem: "Traditional agricultural supply chains leave farmers dependent on middlemen and lack transparent, direct-to-consumer distribution channels for value-added products like solar-dried banana powder.",
      approach: "Built an independent e-commerce storefront and operations hub end-to-end using React and Firebase. Integrated Google authentication, Delhivery pincode delivery estimation APIs, dynamic cart calculations with tiered loyalty rewards, and one-tap WhatsApp checkout.",
      architectureDetails: [
        "React + Tailwind single-page application with responsive mobile-first shopping UX",
        "Firebase Firestore real-time customer data, order queues, and inventory state",
        "Automated Delhivery logistics integration verifying pincode serviceability and shipping rates",
        "Three-tier loyalty program (Seedling / Grower / Harvester) driving customer retention",
        "Integrated WhatsApp ordering conduit for rapid customer communication and conversion"
      ],
      metrics: [
        { label: "Status", val: "Live Production Enterprise" },
        { label: "Logistics", val: "Delhivery Surface API" },
        { label: "Stack", val: "React + Firebase + Cloud Functions" }
      ],
      screenshot: `${import.meta.env.BASE_URL}screenshots/kannanfarms.png`,
      screenshotAlt: "Live Kannan Farms storefront with product mockups",
      screenshotCaption: "Live Kannan Farms Storefront (kannanfarms.com) — Direct-to-consumer platform featuring live product mockups and automated delivery logistics"
    }
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
    caseStudy: {
      tagline: "Quantitative Execution Engine with Local LLM Sentiment Inference",
      problem: "High-frequency derivatives markets require continuous data ingestion, real-time confluence filtering, and disciplined risk limits that eliminate human emotional errors.",
      approach: "Engineered AutoTrader Pro as an asynchronous algorithmic trading bot using FastAPI and Python. Implemented 5 modular strategy algorithms, integrated local Ollama LLM for news and market sentiment scoring, and built a real-time React monitoring terminal.",
      architectureDetails: [
        "Asynchronous FastAPI backend interacting with CoinDCX REST and WebSocket feeds",
        "5 pluggable strategy engines: MA Pullback, Breakout Hunter, RSI Divergence, Grid Arbitrage, and LLM Sentiment",
        "Local Ollama LLM integration converting raw financial headlines into quantitative sentiment vectors",
        "PostgreSQL persistence with rigorous session isolation and transaction rollback safety",
        "Hardened through multiple audit cycles: fixed race conditions, unhandled exceptions, and socket reconnects"
      ],
      metrics: [
        { label: "Architecture", val: "FastAPI + React Dashboard" },
        { label: "Signals", val: "5 Algorithmic Modules + LLM" },
        { label: "Database", val: "PostgreSQL Async Session State" }
      ],
      screenshot: `${import.meta.env.BASE_URL}screenshots/autotrader.png`,
      screenshotAlt: "AutoTrader Pro quantitative trading dashboard",
      screenshotCaption: "AutoTrader Pro Terminal — Asynchronous execution monitoring, strategy allocation, and local LLM sentiment integration"
    }
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
];

export interface LabItem {
  title: string;
  description: string;
  tag: string;
  url?: string;
  caseStudy?: CaseStudy;
}

export const exploratoryProjects: LabItem[] = [
  {
    title: "BloomWish",
    description: "A two-page static site with a hash-encoded wish link and a layered, cinematic cherry blossom tree canvas animation.",
    tag: "Canvas & Generative Animation",
    url: "https://bloomwishes.github.io/bloom/",
    caseStudy: {
      tagline: "Procedural Canvas Rendering & Cryptographic State Hashing",
      problem: "Traditional online greeting cards are filled with advertisements, tracking scripts, and require account registrations or centralized databases to store user messages.",
      approach: "Built a zero-backend interactive web application rendering an organic blooming cherry blossom tree using procedural Canvas 2D math. Messages are encrypted and packed directly into URL hash fragments for frictionless sharing.",
      architectureDetails: [
        "Recursive branch splitting algorithm mimicking natural botanical growth kinematics",
        "Physics-based particle wind drift modeling petal drop velocity and oscillation",
        "Base64 URL-fragment state decoding allowing completely serverless sharing",
        "Optimized 60 FPS animation loop with hardware-accelerated canvas compositing"
      ],
      metrics: [
        { label: "Rendering", val: "Procedural HTML5 Canvas" },
        { label: "Backend", val: "Zero-Server / URL Encoded" },
        { label: "Live Demo", val: "bloomwishes.github.io/bloom" }
      ],
      screenshot: `${import.meta.env.BASE_URL}screenshots/bloomwish.png`,
      screenshotAlt: "BloomWish cherry blossom procedural animation",
      screenshotCaption: "BloomWish — Procedural cherry blossom canvas graphics with serverless hash-encoded greeting payloads"
    }
  },
  {
    title: "ReelBot India",
    description: "A dashboard concept for free-tier short-video automation targeting Indian platforms, exploring AI content creation with Stable Diffusion/ComfyUI.",
    tag: "AI Automation & Pipelines",
  },
  {
    title: "MyShop Prototype",
    description: "A prototype e-commerce storefront exploring custom Shopify-like store architecture, dynamic product catalog, and responsive checkout flows.",
    tag: "E-Commerce Architecture",
    url: "https://bloomwishes.github.io/myshoptest/index",
    caseStudy: {
      tagline: "Headless E-Commerce Storefront Architecture",
      problem: "Commercial e-commerce SaaS platforms impose recurring subscription fees, transaction tariffs, and heavy JavaScript bundles that slow down mobile shopping experiences.",
      approach: "Engineered a lightweight, reactive storefront prototype exploring headless store mechanics, dynamic SKU variation management, and instant-load product catalogs.",
      architectureDetails: [
        "Decoupled product matrix with multi-variant pricing and inventory status indicators",
        "Reactive cart state persisted across browser sessions with zero database overhead",
        "High-contrast mobile checkout UX designed for rapid order conversion on 3G networks"
      ],
      metrics: [
        { label: "Architecture", val: "Lightweight Headless Store" },
        { label: "Performance", val: "Zero Heavy Framework Bloat" },
        { label: "Live Demo", val: "bloomwishes.github.io/myshoptest" }
      ],
      screenshot: `${import.meta.env.BASE_URL}screenshots/myshop.png`,
      screenshotAlt: "MyShop e-commerce prototype interface",
      screenshotCaption: "MyShop Store Prototype — Lightweight headless e-commerce architecture and responsive catalog"
    }
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
