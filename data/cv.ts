import { CvData } from "@/lib/types";

export const cvData: CvData = {
  navItems: [
    { id: "hero", label: "Start" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "qa-artifacts", label: "QA" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
  profile: {
    name: "Muhamad Ilham Fauzi",
    role: "Information Systems Student | Full-Stack, QA, DevOps",
    summary:
      "Information Systems student passionate about building software that solves real problems. Experienced across full-stack development, QA, and DevOps with a consistent drive to learn, collaborate, and deliver meaningful impact.",
    location: "Bandung, Indonesia",
    education: {
      institution: "Institut Teknologi Nasional Bandung",
      degree: "Bachelor of Information System",
      start: "Sep 2022",
    },
    contacts: {
      phone: "087870744584",
      email: "muhamadilhamfauzi18@gmail.com",
      linkedin: "https://www.linkedin.com/in/ilham-fauzi-360004157",
      github: "https://github.com/ifhamm",
    },
  },
  experiences: [
    {
      organization: "Institut Teknologi Nasional (ITENAS)",
      location: "Bandung, Indonesia",
      period: "Feb 2024 - Jun 2024",
      title: "Algorithm and Programming Practicum Assistant",
      bullets: [
        "Facilitated programming labs for multiple cohorts, focused on algorithm implementation and debugging.",
        "Created exam materials covering data structures, algorithms, and programming fundamentals.",
      ],
    },
    {
      organization:
        "Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi",
      location: "Jakarta, Indonesia",
      period: "Sep 2024 - Dec 2024",
      title: "QA Engineer Intern",
      bullets: [
        "Conducted manual and exploratory testing on BKD and CAT systems to improve reliability.",
        "Produced detailed bug reports and collaborated in Scrum workflows through Jira.",
      ],
    },
    {
      organization: "Institut Teknologi Nasional (ITENAS)",
      location: "Bandung, Indonesia",
      period: "Mar 2025 - Present",
      title: "Software Engineer Practicum Assistant",
      bullets: [
        "Built lab curriculum integrating Git, PHP, and QA best practices.",
        "Mentored students in development and testing, improving practical technical skills.",
      ],
    },
    {
      organization: "PT ARM SOLUSI",
      location: "Bandung, Indonesia",
      period: "Jun 2025 - Sep 2025",
      title: "Fullstack Developer",
      bullets: [
        "Developed an administrative dashboard using Node-RED and uibuilder.",
        "Built an automated Docker Compose generator driven by database configuration.",
      ],
    },
    {
      organization: "CV Infinity Karya Bersama",
      location: "Bandung, Indonesia",
      period: "Sep 2025 - Dec 2025",
      title: "Application Developer",
      bullets: [
        "Refactored legacy systems into scalable QC and Asset Management platforms.",
        "Designed master data structures and integrated systems with Node-RED for ERP readiness.",
      ],
    },
    {
      organization: "Asah by Dicoding",
      location: "Remote",
      period: "Aug 2025 - Jan 2026",
      title: "React and Backend with AI Cohort",
      bullets: [
        "Built scalable React applications and robust RESTful backend services.",
        "Engineered AI-assisted lead scoring backend as the final capstone project.",
      ],
    },
    {
      organization: "Institut Teknologi Nasional (ITENAS)",
      location: "Bandung, Indonesia",
      period: "Feb 2026 - Present",
      title: "Software Engineer Practicum Assistant (Web Information Systems)",
      bullets: [
        "Authored Laravel-based lab modules covering architecture and best practices.",
        "Supervised practicum activities while mentoring full-stack web development.",
      ],
    },
  ],
  organizationalExperiences: [
    {
      organization: "ITENAS Information Systems Student Association",
      location: "Bandung, Indonesia",
      period: "Apr 2025 - Apr 2026",
      role: "Member Oversight Board",
      bullets: [
        "Supervised executive board performance and alignment with organizational policies.",
        "Reviewed bylaws, strategic plans, and quarterly reports for transparency.",
      ],
    },
    {
      organization: "ITENAS Information Systems Student Association",
      location: "Bandung, Indonesia",
      period: "Jun 2024 - Apr 2025",
      role: "Staff Member in Academic Division",
      bullets: [
        "Created educational trivia content and supported academic events.",
        "Contributed to initiatives improving student learning support systems.",
      ],
    },
  ],
  qaArtifacts: [
    {
      title: "QA Bug Report Tracker",
      scope: "Bug Reporting | Manual QA",
      summary:
        "Bug reporting artifact containing issue findings, severity notes, reproduction details, and follow-up verification records.",
      evidence: [
        "Issue description with clear impact context",
        "Steps to reproduce and expected vs actual behavior",
        "Severity tagging and re-test status",
      ],
      bugReportUrl:
        "https://docs.google.com/spreadsheets/d/10DZvlAKPXhZlCFrYxwDeX8fe9gpcUEba2z6STSKSs4Y/edit?gid=1216741706#gid=1216741706",
    },
    {
      title: "QA Test Case Sheet",
      scope: "Test Case Design | Functional Testing",
      summary:
        "Test case artifact covering structured scenarios, acceptance checks, and expected outcomes for feature validation.",
      evidence: [
        "Positive and negative test scenarios",
        "Expected results mapped to each step",
        "Execution notes for pass/fail evidence",
      ],
      testCaseUrl:
        "https://docs.google.com/spreadsheets/d/1H5gYURoG9saKyhsQn1fazxREYDYJpyyb/edit?gid=1877331005#gid=1877331005",
    },
  ],
  projects: [
    {
      year: "2026",
      title: "Portable Laravel Development Environment",
      role: "Software Engineer",
      description:
        "Developed a portable Laravel environment using Tauri, Rust, and JavaScript with embedded PHP and databases to simplify setup workflows.",
      stack: ["Laravel", "Tauri", "Rust", "JavaScript", "Embedded Database"],
      githubUrl: "https://github.com/ifhamm/LaravelLab-Devkit",
    },
    {
      year: "2025",
      title: "Virtual Lab Management System",
      role: "Fullstack and DevOps Engineer",
      description:
        "Built a Node-RED and AdminLTE platform with automated Docker Compose workflows for real-time container orchestration.",
      stack: ["Node-RED", "AdminLTE", "Docker", "Compose"],
      githubUrl: "https://github.com/ifhamm/vcl",
    },
    {
      year: "2025",
      title: "Predictive Lead Scoring Platform",
      role: "Backend and ML Engineer",
      description:
        "Developed containerized microservices with Express.js and FastAPI for predictive lead scoring and PostgreSQL integration.",
      stack: ["Express.js", "FastAPI", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/ifhamm/capstone-asah-backend",
    },
    {
      year: "2025",
      title: "Aircraft Component Tracking System",
      role: "Fullstack Developer and QA",
      description:
        "Developed a web-based tracking system with holiday-aware deadlines, automated email notifications, and integrated QA workflows.",
      stack: ["Laravel", "PostgreSQL", "QA Testing", "Automation"],
      githubUrl: "https://github.com/ifhamm/project-tracking",
    },
    {
      year: "2024",
      title: "Library Feature Enhancement",
      role: "Fullstack Developer and QA",
      description:
        "Implemented backend features including CRUD, book renewal, and notifications while handling testing and error recovery.",
      stack: ["PHP", "MySQL", "Manual Testing"],
      githubUrl: "https://github.com/alijazzy/PitimossSmartLibrary",
      driveUrl: "https://drive.google.com/file/d/1n9s8Xo7l2mLh0a3e5v6Zt9X8y4w2b3/view",
    },
    {
      year: "2025",
      title: "API Test Case Engineering",
      role: "QA Engineer",
      description:
        "Designed and executed API test cases for CRUD operations with request validation and response verification through Postman.",
      stack: ["Postman", "API Testing", "Regression Testing"],
      githubUrl: "https://github.com/ifhamm/api-testing-portfolio",
    },
    {
      year: "2025",
      title: "QA Automation Bootcamp",
      role: "Bootcamp Participant",
      description:
        "Completed intensive end-to-end test automation training and built practical Cypress scenarios.",
      stack: ["Cypress", "JavaScript", "E2E Testing"],
      driveUrl: "https://drive.google.com/file/d/18oxYOx78HsMavtPDbFtNV0zDnOGUDjxg/view",
    },
  ],
  skillGroups: [
    {
      title: "Quality Assurance",
      items: [
        "SDLC",
        "STLC",
        "Test Case Design",
        "Manual Testing",
        "API Testing",
        "Bug Reporting",
        "Basic Automation Testing",
        "Regression and Functional Testing",
      ],
    },
    {
      title: "Programming and Web",
      items: ["PHP", "JavaScript", "Java", "Laravel", "Express.js"],
    },
    {
      title: "Tools",
      items: ["Postman", "JMeter", "Git"],
    },
    {
      title: "DevOps and Systems",
      items: ["Docker"],
    },
    {
      title: "Soft Skills",
      items: [
        "Critical Thinking",
        "Team Leadership",
        "Communication",
        "Problem Solving",
        "Adaptability",
      ],
    },
  ],
};
