export type NavItem = {
  name: string;
  id: string;
};

export const navItems: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
];

export const projectItems: Array<{
  title: string;
  year: string;
  description: string;
  exos: string;
  tech: string[];
  db: string;
  tasktype: string;
}> = [
    {
    title: "Video Streaming Website",
    year: "2024-Present",
    description:
      "Developed a dynamic video-sharing platform that allows users to create accounts, upload and share their own video content, and discover videos from other creators. The platform features channel subscriptions and interactive engagement tools, including likes, comments, and shares. This project demonstrates strong web development skills in building an interactive, community-driven platform that encourages content sharing, user engagement, and video discovery.",
    exos: "Web Application",
    tech: [
      "Nextjs",
      "Reactjs",
      "Sass",
    ],
    db: "MySQL",
    tasktype: "Training project",
  },
  {
    title: "CCK Philippines Website",
    year: "2024",
    description:
      "The project involved close collaboration with a teammate to design and develop the CCK Philippines website, with the goal of increasing client engagement and attracting new business opportunities. The team focused on creating a user-friendly platform that effectively showcased the company’s services and strengths, ensuring a positive experience for potential clients while maximizing online visibility and brand appeal. Through the application of strategic design and development techniques, the project resulted in a website that serves as a powerful tool for client acquisition and company growth.",
    exos: "Web Application",
    tech: [
      "Reactjs",
      "Tailwind CSS",
      "Nextjs",
      "Laravel",
    ],
    db: "None",
    tasktype: "Front-end implementation and feature development",
  },
  {
    title: "Data Entry Announcement System",
    year: "2023",
    description:
      "Developed an App for the Data Entry Department of CCK City Network, Inc., designed to function as both an announcement system and a communication tool. The platform enables the department to efficiently broadcast messages and notifications, ensuring the real-time dissemination of important information across various communication channels. By streamlining internal communication, the system helps employees stay informed, coordinate effectively, and respond promptly to important updates.",
    exos: "Web Application",
    tech: [
      "Reactjs",
      "Laravel",
      "Tailwind CSS",
    ],
    db: "MySQL",
    tasktype: "System development and communication workflow design",
  },
  {
    title: "Data Entry AWS Support System",
    year: "2023",
    description:
      "Maintained and managed the AWS support system at CCK City Network, Inc., an existing platform used to monitor tasks within the Data Entry Department. The system integrates AWS and Google APIs to support efficient task tracking and workflow management. Responsibilities included ensuring system reliability, troubleshooting issues, and maintaining seamless day-to-day operations.",
    exos: "Web Application",
    tech: ["JavaScript", "Bootstrap", "Laravel"],
    db: "MySQL",
    tasktype: "Maintenance and back-end support",
  },
  {
    title: "Inventory System",
    year: "2022",
    description:
      "Developed various functions and design elements for an inventory management system that helps businesses efficiently track and manage their goods, raw materials, and finished products. The system supports accurate inventory tracking, streamlined reordering, sales monitoring, and stock level management. These features improve operational efficiency while reducing the risks of overstocking and stockouts.",
    exos: "Web Application",
    tech: [
      "Vuejs",
      "Laravel",
      "Tailwind CSS",
    ],
    db: "MySQL",
    tasktype: "Front-end work and several back-end functions",
  },
  {
    title: "Eiken and Kanken Exam Application for Manila Japanese School",
    year: "2022",
    description:
      "Designed and developed key functions and interface components for the Manila Japanese School’s Exam Applications website. The platform streamlines the management and processing of examination-related activities, with user-friendly interfaces and features that improve the efficiency and overall experience of the school’s exam application process.",
    exos: "Web Application",
    tech: [
      "JavaScript",
      "Google Apps Script",
      "Bootstrap",
    ],
    db: "Spreadsheet",
    tasktype: "Front-end contribution and back-end feature development",
  },
    {
    title: "Ecommerce Website",
    year: "2021",
    description:
      "Designed and developed a sneaker e-commerce website for both casual buyers and collectors. The platform features product listings with search and filtering options, detailed sneaker pages with images and descriptions, a streamlined checkout process, and seller tools for managing listings. The project demonstrates the ability to create a functional, user-friendly, and engaging e-commerce experience.",
    exos: "Web Application",
    tech: ["JavaScript", "Bootstrap", "Laravel"],
    db: "MySQL",
    tasktype: "Training project",
  },
];
