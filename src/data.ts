import { Skill, Project, EducationItem, ExperienceItem } from './types';

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
    email: "janealyssa023@gmail.com",
    phone: "+63 9691147675",
    github: "https://github.com/aly-ttle",
    linkedin: "https://linkedin.com/in/janealyssa-it",
    instagram: "https://instagram.com/itsaly.jpg",
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
  gpa: "3.0 / 2.7 (Major GPA: 2.7)",
  period: "Sept 2024 - Present (Expected Grad: June 2028)",
  coursework: [
    "Database Management Systems (SQL & PHP/Express)",
    "Data Structures & Algorithms in Java",
    "Systems Integration & Architecture",
    "Network Routing & Security",
    "Web Design & Client Technologies"
  ],
  certifications: [
    { name: "Responsive Web Design Academy", issuer: "freeCodeCamp", date: "August 2024" }
  ],
  seminars: [
    "IT Career Summit 2025 - Panelist on 'Student Tech Communities'",  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Project Manager & Lead Developer",
    organization: "None",
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
    role: "IT Olympics 2026 Participant",
    organization: "IT Olympics 2026",
    period: "April 2026",
    type: "competition",
    description: "Competed in the IT Olympics 2026 quiz bee and completed an AI/ML hands-on activity as part of the event.",
    bullets: [
      "Participated in the IT Olympics 2026 quiz bee, answering technical questions under timed conditions",
      "Completed a practical AI/ML hands-on activity showcasing data analysis and model application skills",
      "Collaborated with fellow participants to solve real-world tech challenges during the event"
    ],
    tags: ["Competition", "Quiz Bee", "AI/ML"]
  }
];

