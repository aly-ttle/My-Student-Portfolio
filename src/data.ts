import { Skill, Project, EducationItem, ExperienceItem, AchievementItem } from './types';

export const STUDENT_PROFILE = {
  name: "Jane Alyssa J. Pagbilao",
  pronouns: "she/her",
  title: "Information Technology Student",
  specialization: "Full-Stack Dev & Tech Solutions",
  college: "Ilocos Sur Polytechnic State College-Tagudin Campus",
  currentYear: "Junior (3rd Year)",
  gpa: "3.85 / 4.00",
  tagline: "Building scalable web solutions and securing systems to bridge the gap between human curiosity and technology.",
  detailedBio: "I am an enthusiastic Information Technology student who loves writing code, managing databases, and figuring out how things work under the hood. Currently in my third year, I specialize in web technologies and systems integration. My journey started with simple Python automation and quickly evolved into building full-stack applications. I thrive in Collaborative team settings, love participating in intense 24-hour hackathons, and constant curiosity drives me to learn something new every day. Looking for a Summer 2026/Fall 2026 internship to bring value to a development team!",
  traits: [
    { label: "Adaptability", desc: "Quickly learning new tech frameworks as industry standards shift." },
    { label: "Problem Solving", desc: "Approaching logical bugs with analytical reasoning and patience." },
    { label: "Collaboration", desc: "Facilitating open communication in group sprint teams." },
    { label: "Curiosity", desc: "Always exploring emerging cloud stacks, protocols, and AI APIs." }
  ],
  socials: {
    email: "alilife020@gmail.com",
    phone: "+63 (999) 341-2980",
    github: "https://github.com/janealyssa-it",
    linkedin: "https://linkedin.com/in/janealyssa-it",
    instagram: "https://instagram.com/jane_alyssa",
    resumeUrl: "#" // Simulated PDF action
  }
};

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: "React & Hooks", percentage: 85, category: "frontend", icon: "Code2", level: "Intermediate / Advanced" },
  { name: "Tailwind CSS", percentage: 90, category: "frontend", icon: "Palette", level: "Advanced" },
  { name: "HTML5 & CSS3", percentage: 95, category: "frontend", icon: "Globe", level: "Advanced" },
  
  // Backend
  { name: "Node.js & Express", percentage: 80, category: "backend", icon: "Layers", level: "Intermediate" },
  { name: "Python (Scripts / Flask)", percentage: 85, category: "backend", icon: "Terminal", level: "Intermediate / Advanced" },
  { name: "Java OOP", percentage: 70, category: "backend", icon: "Coffee", level: "Intermediate" },
  
  // Database
  { name: "MySQL / Relational DBs", percentage: 80, category: "database", icon: "Database", level: "Intermediate / Advanced" },
  { name: "MongoDB & Firestore", percentage: 75, category: "database", icon: "HardDrive", level: "Intermediate" },
  
  // Tools
  { name: "Git & GitHub", percentage: 88, category: "tools", icon: "GitBranch", level: "Intermediate / Advanced" },
  { name: "VS Code & Bash Core", percentage: 85, category: "tools", icon: "Cpu", level: "Intermediate" },
  { name: "Docker Basics", percentage: 55, category: "tools", icon: "Server", level: "Beginner / Intermediate" },
  
  // Soft Skills
  { name: "Technical Writing", percentage: 90, category: "soft-skills", icon: "FileText", level: "Excellent" },
  { name: "Agile & Scrum Sprints", percentage: 80, category: "soft-skills", icon: "Users", level: "Experienced" },
  { name: "Public Speaking", percentage: 75, category: "soft-skills", icon: "MessageSquare", level: "Confident" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "SK Budget Tracker",
    description: "An interactive civic finance dashboard engineered for the youth council (Sangguniang Kabataan) to allocate funds, monitor items, and maintain transparency.",
    longDescription: "SK Budget Tracker is a customized local financial accounting platform built to support localized youth governance units. The system enables councils to input project allocations, log operational expenses, classify development objectives, and instantly output interactive charts visualizing expenditures. It focuses on clean mathematical aggregations and client data preservation to foster absolute local transparency.",
    category: "database",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    githubUrl: "https://github.com/janealyssa-it/sk-budget-tracker",
    liveUrl: "https://sk-budget-tracker.janealyssa.dev",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    features: [
      "Secures real-time mathematical budget balancing algorithms protecting against municipal overdraft logs",
      "Interactive pie and column charts reporting fund distributions visually for civic audits",
      "Comprehensive tabular logs sorting project expenditures by local development sectors",
      "Responsive navigation matching mobile devices for village counselors during sessions"
    ],
    role: "Lead Full-Stack Developer",
    difficulty: "Confident Intermediate / Civic Tech"
  },
  {
    id: "proj-2",
    title: "iTHINK! Quiz App",
    description: "A lively, timed academic trivia and trivia quiz application with interactive scoring states, streak metrics, and visual stats grids.",
    longDescription: "The iTHINK! Quiz App is a responsive scholastic trivia game engineered to make core digital curriculum and general IT concepts fun and competitive. Incorporating micro-animations and quick countdown clocks, it handles session transitions seamlessly, tracks leaderboard milestones, and logs history reports locally to help students spot concept gaps.",
    category: "frontend",
    tags: ["React", "Tailwind CSS", "Motion", "LocalStorage"],
    githubUrl: "https://github.com/janealyssa-it/ithink-quiz",
    liveUrl: "https://ithink-quiz.janealyssa.dev",
    imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600&auto=format&fit=crop",
    features: [
      "Handles stateful trivia gameplay using strict index progression and real-time timers",
      "Computes bonus points dynamically based on early responses and correct answer streaks",
      "Renders dynamic confetti animations and soundless success feedback blocks on completion",
      "Maintains historical personal scoreboards locally using standard browser key-value configurations"
    ],
    role: "Frontend UI/UX Developer",
    difficulty: "Confident Intermediate"
  }
];

export const EDUCATION_DATA: EducationItem = {
  school: "Ilocos Sur Polytechnic State College-Tagudin Campus",
  degree: "Bachelor of Science in Information Technology",
  gpa: "3.85 / 4.00 (Major GPA: 3.92)",
  period: "Sept 2023 - Present (Expected Grad: June 2027)",
  coursework: [
    "Database Management Systems (SQL & PHP/Express)",
    "Data Structures & Algorithms in Java",
    "Systems Integration & Architecture",
    "Discrete Mathematical Structures",
    "Network Routing & Security",
    "Web Design & Client Technologies"
  ],
  certifications: [
    { name: "Front-End Developer Professional Cert", issuer: "Meta (via Coursera)", date: "Aug 2025" },
    { name: "Responsive Web Design Academy", issuer: "freeCodeCamp", date: "Jan 2024" }
  ],
  seminars: [
    "IT Career Summit 2025 - Panelist on 'Student Tech Communities'",
    "Cybersecurity Threats Seminar - ISPSC Tagudin, 2024",
    "Database Scalability Workshop - Local Dev Group, 2025"
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Freelance Web Developer",
    organization: "Local Small Businesses (Pro-Bono & Paid Contracts)",
    period: "June 2024 - Present",
    type: "freelance",
    description: "Creating highly performant websites, landing pages, and local client inventory systems to replace paper records.",
    bullets: [
      "Designed and delivered a modern fully responsive website for a neighborhood bakery, raising mobile order inquiries by 35%",
      "Established secure local spreadsheet sync operations using online platforms to coordinate menu stocks",
      "Instructed local business owners on updating content and performing standard platform edits securely"
    ],
    tags: ["React", "Tailwind CSS", "SEO", "Customer Relations"]
  },
  {
    role: "VP of Technical Projects",
    organization: "ISPSC IT Student Association",
    period: "Sept 2024 – Present",
    type: "leadership",
    description: "Leading peer study cohorts, mentoring first-year programming students, and managing all internal club project builds.",
    bullets: [
      "Created the iTHINK! Quiz App, currently utilized by students to test programming principles and logic games during reviews",
      "Constructed and taught weekly hands-on workshops covering Git, MySQL databases, and fundamentals of JavaScript",
      "Coordinated group study sessions for 'Database Systems' and 'Algorithms' classes, raising average lab scores by 12%"
    ],
    tags: ["Mentorship", "Git Collaboration", "Workshop Instruction"]
  },
  {
    role: "Finalist & Lead Hacker",
    organization: "ISPSC annual IT Hackathon",
    period: "Nov 2025",
    type: "hackathon",
    description: "Designed, coded, and pitched an environmental volunteer tracking app within an aggressive, fast-paced 36-hour timeframe.",
    bullets: [
      "Authored the responsive client mockup and connected it to local cloud mock services dynamically",
      "Coordinated with two database colleagues to formulate smooth API data structures under high time pressure",
      "Presented the working software prototype on stage to a panel of 5 local IT industry recruiters"
    ],
    tags: ["Rapid Prototyping", "Team Sprint", "Pitching under Pressure"]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "3rd Place Winner - DevSlam Hackathon",
    issuer: "Metropolitan Tech Councils",
    date: "March 2025",
    description: "Competed in high-intensity challenge creating a 'Smart Civic Traffic Alert' mapper alongside 45 other local collegiate IT students.",
    icon: "Trophy"
  },
  {
    id: "ach-2",
    title: "Academic Achievement Scholarship",
    issuer: "ISPSC Student Accelerator",
    date: "Dec 2025",
    description: "Received recognition and a subsidy for outstanding scholastic performance and tutoring contributions in IT study cohorts.",
    icon: "Target"
  },
  {
    id: "ach-3",
    title: "1,000+ GitHub Commits Milestone",
    issuer: "Personal Academic Achievement",
    date: "Jan 2026",
    description: "Pushed regular daily commits and documentation changes across diverse repository projects over consecutive academic semesters.",
    icon: "Activity"
  }
];
