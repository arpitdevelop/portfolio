export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export interface Publication {
  title: string;
  description: string;
  link?: string;
}

export const portfolioData = {
  name: "Arpit Jaiswal",
  title: "React Native Developer",
  email: "arpit.develop@gmail.com",
  phone: "+91 7073779867",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  objective: "React Native Developer specializing in performance optimization, scalable architecture, and real-time features, aiming to build seamless cross-platform mobile experiences.",
  
  experience: [
    {
      company: "Dev Technosys Pvt. Ltd.",
      role: "React Native Developer",
      period: "Jul 2025 – Present",
      location: "Jaipur, India",
      points: [
        "Developed and delivered enterprise mobile applications across fintech, dating, medical, and fantasy domains using React Native",
        "Integrated real-time chat functionality using WebSockets to ensure reliable messaging and user presence updates",
        "Built cross-platform VoIP calling feature by handling call lifecycle, permissions, and performance optimization",
        "Implemented in-app purchases for a subscription-based dating app using RevenueCat to enable monetization",
        "Built a fintech module for credit card bill payments by implementing Bharat BillPay (Setu) and handling payment transactions using PayU",
        "Improved app performance by ~25% in xcode debug monitor by reducing unnecessary re-renders and optimizing animations using worklets"
      ]
    },
    {
      company: "WFA Consultants Pvt. Ltd.",
      role: "React Native Developer",
      period: "Apr 2024 – Jul 2025",
      location: "Jaipur, India",
      points: [
        "Developed a directory app for Telegram channels by implementing advanced search, filtering, and categorization",
        "Built core features for a dating application including profile management, real-time interactions, and matching logic with optimized cross-platform performance"
      ]
    }
  ] as Experience[],

  education: [
    {
      school: "Rajasthan University",
      degree: "Bachelor of Commerce",
      period: "Apr 2017 – Mar 2020",
      location: "Jaipur, India"
    }
  ] as Education[],

  projects: [
    {
      id: "chitchat",
      title: "ChitChat",
      description: "Developing a social media application with Instagram and Twitter-like features, implementing Apple-style Glass UI and optimizing data fetching through efficient caching strategies.",
      tech: ["React Native", "TanStack Query", "Zustand"],
      link: "#"
    },
    {
      id: "battlerush",
      title: "BattleRush App Admin Panel",
      description: "Developed a secure admin dashboard to manage users and tournament data, implementing authentication, API integration, and responsive UI components.",
      tech: ["React.js", "Axios", "Material UI", "JWT"],
      link: "#"
    },
    {
      id: "business-directory",
      title: "Business Directory App",
      description: "Built a business directory app using Firestore by implementing Google authentication (Clerk), persistent login, and business listing with review functionality.",
      tech: ["Expo CLI", "Clerk", "Firebase SDK"],
      link: "#"
    }
  ] as Project[],

  publications: [
    {
      title: "Performance Optimization in React Native",
      description: "A deep dive into reducing re-renders and optimizing animations using worklets for a smoother user experience.",
      link: "#"
    }
  ] as Publication[],

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
    frameworks: ["React Native (CLI, Expo)", "React.js", "Node.js", "Express"],
    stateData: ["Redux", "Zustand", "TanStack Query", "REST APIs", "Axios"],
    mobile: ["Push Notifications", "Deep Linking", "In-App Purchases", "App Store & Play Store Deployment"],
    databases: ["Firebase Firestore", "SQLite"],
    tools: ["Git", "GitHub", "VS Code", "Cursor", "Xcode", "Android Studio", "Postman", "GitHub Actions", "Fastlane"]
  }
};
