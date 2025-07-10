import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiFirebase,
    SiGithub,
    SiBootstrap,
    // SiNodedotjs,
    SiExpress,
    SiMongodb,
} from "react-icons/si";

export const frontendStack = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
];

export const backendStack = [
    // { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
];

// projects

export const reactProjects = [
    {
        title: "SuKaj Infotech Pvt. Ltd. Website",
        description: "Full company website showcasing services, vision, mission, and stacks.",
        techStack: ["ReactJS", "Tailwind CSS", "Framer Motion"],
        liveLink: "https://sukaj-infotech.netlify.app/",
    },
    {
        title: "Beekeeping Website",
        description: "Nature-themed site with animations and image galleries.",
        techStack: ["ReactJS", "Tailwind CSS", "Framer Motion"],
        liveLink: "https://beepkeeping-honey.netlify.app/",
    },
    {
        title: "Multi-Step Form",
        description: "Dynamic multi-step form with validation and local storage.",
        techStack: ["ReactJS", "CSS", "Local Storage"],
        liveLink: "https://multi-steps-forms-react.netlify.app/",
    },
    {
        title: "Online Music Player",
        description: "Functional music player with Spotify API integration.",
        techStack: ["ReactJS", "CSS", "Axios", "Spotify API"],
    },
];

export const reactNativeProjects = [
    {
        title: "KitchenWhiz – Recipe App",
        description: "Browse recipes with smooth navigation and responsive UI.",
        techStack: ["React Native", "React Navigation"],
        githubLink: "https://github.com/Subham-Patel9547/React-Native-FoodRecipes.git",
        apkLink: "https://drive.google.com/file/d/1XILLCoSlQRwUGipHkVVkxcdp4DYvi_Lg/view?usp=sharing",
    },
    {
        title: "E-commerce – Shopping App (In Progress)",
        description: "Drag-drop cart, dark/light mode, offline support, animations.",
        techStack: ["React Native", "Firebase"],
    },
    {
        title: "Task Manager App",
        description: "Task tracker with local storage and custom animations.",
        techStack: ["React Native"],
        githubLink: "https://github.com/Subham-Patel9547/React-Native-Dashboard-CRUD.git",
        apkLink: "https://drive.google.com/file/d/10gogtWof2Bm0fc3NBlxBZOcwGlpLwKVH/view?usp=sharing",
    },
    {
        title: "Smart Calculator",
        description: "Theme switching (day/night) using styled-components.",
        techStack: ["React Native", "Styled-components"],
        githubLink: "https://github.com/Subham-Patel9547/react-native-calculator-dark-light-mode.git",
        apkLink: "https://drive.google.com/file/d/1UEOvG59Zh5CGqnEVJQNzOLgmlSFGF094/view?usp=sharing",
    },
    {
        title: "Sign-In / Sign-Up UI",
        description: "Secure auth screens with custom form validation.",
        techStack: ["React Native", "React Hook Form"],
        githubLink: "https://github.com/Subham-Patel9547/Subham-Patel9547-React-Native-Login-Signup-UI.git",
        apkLink: "https://drive.google.com/file/d/1R9fRrL63hhYQuYN5vJrRsVTGSXE1Wxt7/view?usp=sharing",
    },
    {
        title: "Simple Weather App",
        description: "Real-time weather updates using OpenWeather API.",
        techStack: ["React Native", "OpenWeather API"],
        githubLink: "https://github.com/Subham-Patel9547/Weather-Apk-ReactNative.git",
        apkLink: "https://drive.google.com/file/d/1NdBGd5YKTFpqM5aT-nTtjZGkbe4dZiXI/view?usp=sharing",
    },
];


// Experience

export const experiences = [
    {
        company: "SuKaj Infotech Pvt. Ltd.",
        role: "Frontend Developer (Founder)",
        duration: "Jan 2024 – Present",
        description: "Developed and maintained the official company website and led frontend development for multiple client projects.",
        techStack: ["ReactJS", "Tailwind CSS", "Framer Motion"],
    },
    {
        company: "Freelance Projects",
        role: "React Developer",
        duration: "Jul 2023 – Dec 2023",
        description: "Built several websites and mobile apps for clients, focusing on performance, responsiveness, and user experience.",
        techStack: ["React Native", "Firebase", "LocalStorage", "Styled-components"],
    },
];

// education

export const educationList = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
        duration: "2024 – 2026",
        description: "Pursuing post-graduate studies in computer applications with a focus on full-stack development.",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj",
        duration: "2021 – 2024",
        description: "Completed BCA with strong foundation in programming, DBMS, and software engineering.",
    },
];