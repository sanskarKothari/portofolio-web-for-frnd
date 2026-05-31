/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Security";
  period: string;
  techStack: string[];
  description: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface Coursework {
  name: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Sona Ahirwar",
    dob: "18 March 2003",
    currentLocation: "Vidisha, Madhya Pradesh",
    college: "National Institute of Technology Rourkela",
    branch: "Electrical Engineering",
    email: "sonarkl777@gmail.com",
    phone: "+91-9691721572",
    github: "https://github.com/Sona-Ahirwar",
    linkedin: "https://www.linkedin.com/in/sona-ahirwar-927771315/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Custom or placeholder
    leetcode: "https://leetcode.com/u/sonarkl777/",
    bio: "Passionate full-stack developer and problem solver pursuing a Bachelor of Technology at National Institute of Technology Rourkela. Experienced in building responsive web applications with modern framework stacks (React, NodeJS, Express, MongoDB) and secure architectures including Multi-factor authentication. Strong analytical reasoning skills backed by a continuous drive for excellence.",
    roles: ["Full Stack Developer", "Software Engineer", "Problem Solver", "MERN Stack Specialist"]
  },
  education: [
    {
      school: "National Institute of Technology Rourkela",
      degree: "Bachelor of Technology in Electrical Engineering",
      period: "2023 – 2027",
      details: "Electrical Engineering (EE) Stream",
      location: "Rourkela, Odisha"
    },
    {
      school: "The Eminent Public H.S School",
      degree: "Intermediate in Mathematics and Science",
      period: "2021 – 2022",
      details: "Percentage: 81%",
      location: "Vidisha, Madhya Pradesh"
    },
    {
      school: "Varsana Model H.S.School",
      degree: "Matriculation",
      period: "2019 – 2020",
      details: "Percentage: 91.33%",
      location: "Vidisha, Madhya Pradesh"
    }
  ] as Education[],
  coursework: [
    "Data Structures",
    "Algorithms Analysis",
    "Operating Systems",
    "Object-Oriented Programming",
    "Front-End Development",
    "Database Management"
  ],
  skills: [
    {
      category: "Languages & Core",
      skills: [
        { name: "C/C++", level: 80, iconName: "Code" },
        { name: "JavaScript", level: 90, iconName: "Cpu" },
        { name: "HTML/CSS", level: 95, iconName: "Layout" },
        { name: "SQL", level: 75, iconName: "Database" }
      ]
    },
    {
      category: "Frameworks & Back-End",
      skills: [
        { name: "React.js", level: 92, iconName: "Atom" },
        { name: "Node.js", level: 85, iconName: "Server" },
        { name: "Express.js", level: 85, iconName: "Key" },
        { name: "Bootstrap", level: 80, iconName: "Sparkles" }
      ]
    },
    {
      category: "Developer Tools",
      skills: [
        { name: "Git & GitHub", level: 88, iconName: "GitBranch" },
        { name: "Google Cloud Platform", level: 70, iconName: "Cloud" },
        { name: "VS Code", level: 90, iconName: "Terminal" },
        { name: "MongoDB", level: 82, iconName: "Database" }
      ]
    },
    {
      category: "Libraries",
      skills: [
        { name: "NumPy", level: 65, iconName: "Percent" },
        { name: "Matplotlib", level: 60, iconName: "LineChart" },
        { name: "Speakeasy (Auth)", level: 80, iconName: "ShieldAlert" },
        { name: "Tailwind CSS", level: 95, iconName: "Paintbrush" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "dpms",
      title: "Dynamic Profile Management System",
      category: "Full-Stack",
      period: "Mar 2026 – May 2026",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      description: [
        "Innovative Profile Management: Created a web application allowing users to manage over 200 profiles dynamically (e.g., LinkedIn, GitHub, LeetCode) with ease.",
        "User-Friendly Access & Responsive Performance: Enabled quick profile access through a simple URL structure (e.g., /ganesh/leetcode), enhancing user experience.",
        "System Optimization: Optimized the database queries and asset loaders to reduce profile retrieval time by 25%."
      ],
      githubUrl: "https://github.com/Sona-Ahirwar/Profile-Management-System",
      liveUrl: "https://github.com/Sona-Ahirwar/Profile-Management-System"
    },
    {
      id: "ras",
      title: "Room Allotment System",
      category: "Full-Stack",
      period: "Jan 2026 – Feb 2026",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      description: [
        "Hostel Room Allotment: Developed an end-to-end hostel room allotment system enabling users to upload, edit and manage room and roommate details.",
        "Smart Compatibility Matching: Enabled finding ideal roommates through filtered searches based on lifestyle choices, sleeping schedules and habits.",
        "Seamless Authentication: Formulated secure credential hashing and profile management keeping individual user data isolated and secure."
      ],
      githubUrl: "https://github.com/Sona-Ahirwar/Hall-Allocation-System",
      liveUrl: "https://github.com/Sona-Ahirwar/Hall-Allocation-System"
    },
    {
      id: "tfa",
      title: "Two-Factor-Authentication App",
      category: "Security",
      period: "Nov 2025 – Dec 2025",
      techStack: ["HTML", "CSS", "EJS", "Node.js", "Express.js", "Speakeasy"],
      description: [
        "Time-Based OTP Validation: Designed and coded a full-featured time-based one-time password (TOTP) application using speakeasy standards.",
        "Multi-Layer Protection: Enhanced existing form protection with a dynamic secondary PIN entry matching authentication scanner applications.",
        "Robust Security Mitigations: Mitigated automated scripting risks and brute force attacks associated with simple password-only strategies."
      ],
      githubUrl: "https://github.com/Sona-Ahirwar/Two-Factor-Authenticator",
      liveUrl: "https://github.com/Sona-Ahirwar/Two-Factor-Authenticator"
    }
  ] as Project[],
  achievements: [
    {
      title: "LeetCode & Problem Solving",
      description: "Solved numerous complex algorithm problems on LeetCode; demonstrated deep knowledge of arrays, trees, dynamic programming, and heaps."
    },
    {
      title: "GeeksForGeeks (GFG)",
      description: "Consistent platform solver demonstrating strong analytical, algorithmic reasoning, and mathematical optimizations."
    },
    {
      title: "Medhavi Scholar",
      description: "Awarded the highly prestigious government Medhavi Scholarship for pursuing higher education and academic merit."
    },
    {
      title: "FFE Scholar",
      description: "Recipient of the Foundation for Academic Excellence Scholarship supporting promising engineering students."
    }
  ] as Achievement[],
  extracurricular: {
    activity: "National Service Scheme (NSS)",
    period: "Aug 2023 – Autumn 2023",
    role: "Volunteering Experience",
    location: "NIT Rourkela",
    details: [
      "Led impactful community volunteer squads organizing major rural hygiene, literacy, and environmental sustainability campaigns.",
      "Developed critical leadership guidance, project planning coordination, empathy, and active public relations management."
    ]
  }
};
