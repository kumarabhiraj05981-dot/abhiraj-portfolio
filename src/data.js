export const defaultPortfolio = {
  profile: {
    name: "Abhiraj Kumar",

    role: "AI/ML Engineer",

    intro: "Hello, I'm Abhiraj Kumar",

    headline: "Aspiring AI/ML Engineer.",

    description:
      "Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning and building real-world software applications that solve meaningful problems.",

    availability: "Open to opportunities",

    education: "Diploma CSE",

    institute: "Government Polytechnic Vaishali",

    duration: "2024 — 2027",

    focus: "AI / ML",

    email: "abhirajkumar@example.com",

    github:
      "https://github.com/kumarabhiraj05981-dot",

    linkedin:
      "https://www.linkedin.com/in/abhiraj-kumar-2a869a3b1/",

    resume: "/Abhiraj-Kumar-Resume.pdf",
  },

  stats: [
    {
      value: "5+",
      label: "Projects Built",
    },

    {
      value: "10+",
      label: "Technologies",
    },

    {
      value: "2027",
      label: "Graduation Goal",
    },

    {
      value: "∞",
      label: "Learning Mindset",
    },
  ],

  aboutTags: [
    "AI / ML",
    "Software Development",
    "Problem Solving",
    "Continuous Learning",
  ],

  skills: [
    {
      id: "s1",
      title: "Programming",
      skills: [
        "Java",
        "C",
        "Python",
        "JavaScript",
      ],
    },

    {
      id: "s2",
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "React",
        "Vite",
      ],
    },

    {
      id: "s3",
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
    },

    {
      id: "s4",
      title: "Tools & AI",
      skills: [
        "Git",
        "GitHub",
        "AI / ML Basics",
        "Data Science",
      ],
    },
  ],

  currentlyLearning:
    "AI, Machine Learning & Data Science",

  projects: [
    {
      id: "p1",

      type: "Featured Project",

      title: "Student Resources Hub",

      description:
        "A student-focused educational platform where users can access notes, previous year questions, syllabus, e-books and other academic resources in one place.",

      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],

      github: "https://github.com/",

      demo:
        "https://student-resources-hub-production-k5rk8wlwq.vercel.app/login",
    },

    {
      id: "p2",

      type: "AI / Finance",

      title: "INVESTIQ AI",

      description:
        "An AI-powered stock and cryptocurrency platform designed to help users explore market data, analyze assets and understand investment information.",

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "AI / ML",
      ],

      github: "https://github.com/",

      demo:
        "https://investiq-xgcv.vercel.app/",
    },
  ],

  education: {
    status: "CURRENTLY PURSUING",

    title:
      "Diploma in Computer Science Engineering",

    institute:
      "Government Polytechnic Vaishali",

    year: "2024 — 2027",

    branch:
      "Computer Science Engineering",

    semester: "5th Semester",

    focus:
      "AI / ML · Software Development",
  },
};

export const getPortfolio = () => {
  try {
    const saved = localStorage.getItem(
      "abhiraj_portfolio_v2"
    );

    return saved
      ? {
          ...defaultPortfolio,
          ...JSON.parse(saved),
        }
      : defaultPortfolio;
  } catch {
    return defaultPortfolio;
  }
};

export const savePortfolio = (data) => {
  localStorage.setItem(
    "abhiraj_portfolio_v2",
    JSON.stringify(data)
  );

  window.dispatchEvent(
    new Event("portfolio-updated")
  );
};

export const resetPortfolio = () => {
  localStorage.removeItem(
    "abhiraj_portfolio_v2"
  );

  window.dispatchEvent(
    new Event("portfolio-updated")
  );
};