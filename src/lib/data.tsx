import ChatbotDevelopment from "@/components/MyServices/ChatbotDevelopment";
import DataDashboards from "@/components/MyServices/DashboardsCustom";
import LLMToolsForBusiness from "@/components/MyServices/LLMToolsForBusiness";
import WorkflowAutomation from "@/components/MyServices/WorkflowAutomation";
import {
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandUpwork,
  IconBrandGithub,
  IconBrandSkype,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import React from "react";

export default function MainDummy() {
  return <div></div>;
}

const heroData = {
  title: "I'M SHEBY",
  subtitle: "AI DEVELOPER & DATA SCIENTIST",
  profile:
    "/profile.jpeg",
};

const welcomeSection = {
  subtitle_top: "The road to freedom starts from here",
  mainTitleWhite: "Welcome. Step into my world of",
  mainTitleBlue: "AI Innovation.",
  description:
    "I'm Sheby, a dedicated AI developer and Data Scientist passionate about integrating smart AI solutions like ChatGPT into everyday business workflows.",
};

const sample_projects = [
  {
    image: "https://via.placeholder.com/600x400?text=Project+1",
    title: "E-Commerce Web App",
    description:
      "A fully functional e-commerce web application that enables users to browse products, add them to a cart, and proceed with a secure checkout. The platform includes a user-friendly interface, inventory management, and order tracking. Integrated with payment gateways like Stripe and PayPal, it offers a seamless shopping experience for both desktop and mobile users. The admin dashboard provides analytics, product management, and sales reporting.",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Project+2",
    title: "AI-Powered Chatbot",
    description:
      "An AI-powered chatbot built using the GPT-4 API to automate customer service queries. The chatbot can handle common inquiries such as shipping details, order tracking, and product recommendations. It also escalates complex issues to human agents when needed. Deployed on multiple channels, including web and social media, this solution helps businesses reduce response times and enhance customer satisfaction.",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Project+3",
    title: "Fitness Mobile App",
    description:
      "A fitness tracking mobile app designed to help users monitor their workouts, set fitness goals, and track progress. The app includes workout routines, progress tracking, and nutritional guidance. Users can create custom workout plans and log exercises. Integrated with wearable devices like Apple Watch and Fitbit, it provides real-time stats on distance, calories burned, and heart rate monitoring.",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Project+4",
    title: "Real Estate Platform",
    description:
      "A real estate listing platform that allows users to browse, buy, or rent properties. The platform provides detailed property descriptionsite.",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Project+5",
    title: "Portfolio Website",
    description:
      "A personal portfolio website created for a graphic designer. The site showcases the designer's projects, resume, and contact information. The layout is sleek and responsive, with an emphasis on visuals and interactivity. Visitors can view project details in a lightbox-style gallery, while a blog section shares industry insights. The website is optimized for SEO and includes social media integration for increased visibility.",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Project+6",
    title: "Online Learning Platform",
    description:
      "An online learning platform designed for educational institutions and independent instructors. The platform allows users to create courses, upload video lessons, and manage assignments. Students can enroll, track their progress, and complete quizzes and tests. The admin dashboard provides analytics on course performance and student engagement. Integrated with video conferencing tools, it supports live webinars and Q&A sessions.",
  },
];
const SOCIAL_LINKS = {
  upwork: "https://www.upwork.com/freelancers/~01f3b3d827a29ef7a3",
  github: "https://github.com/shabeeb248",
  skype: "https://join.skype.com/invite/wZGQ0atB3SwU",
  whatsapp: "https://wa.me/918113057338",
  linkedin: "https://www.linkedin.com/in/muhammed-shabeeb248/",
};

const socials = [
  {
    title: "Linkedin",
    icon: <IconBrandLinkedin className="h-full w-full text-blue-500" />,
    href: SOCIAL_LINKS.linkedin,
  },

  {
    title: "Whatsapp",
    icon: <IconBrandWhatsapp className="h-full w-full text-green-400" />,
    href: SOCIAL_LINKS.whatsapp,
  },
  {
    title: "Skype",
    icon: <IconBrandSkype className="h-full w-full text-blue-300" />,
    href: SOCIAL_LINKS.skype,
  },
  {
    title: "Github",
    icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
    href: SOCIAL_LINKS.github,
  },
  {
    title: "Upwork",
    icon: <IconBrandUpwork className="h-full w-full text-green-400" />,
    href: SOCIAL_LINKS.upwork,
  },
];

const image = 'https://imageio.forbes.com/specials-images/imageserve/649e548f60d84051f9324232/Businessman-using-tech-devices-and-icons-thin-line-interface/0x0.jpg?format=jpg&crop=3789,2525,x684,y2,safe&width=960'

const SERVICES = [
  {
    title: "AI-Powered Workflow Automation with ChatGPT",
    component:<WorkflowAutomation/>,
    path:'ai-powered-workflow-automation-with-chatgpt',
    description:
      "Maximize efficiency and unlock new opportunities by integrating ChatGPT into your workflows, automating tasks, and transforming your business processes.",
  image:'service1.jpg',
    bg:'#000000',
    fg:'#ffffff',
    gradientBg:"bg-gradient-to-br from-gray-900 to-gray-800",
  },
  
  {
    title: "Chatbot Development & Website Integration",
    component:<ChatbotDevelopment/>,

    path:"chatbot-development-and-website-integration",
    description:
      "Revolutionize user interaction with custom AI chatbots, seamlessly integrated into your website to boost engagement, automate processes, and enhance customer experience.",
 image,     bg:'#8F96D4',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-blue-600 to-sky-400",
  },
  {
    title: "LLM-Based Tools for Business Innovation",
    component:<LLMToolsForBusiness/>,
    path:'llm-based-tools-for-business-innovation',
    description:
      "Drive business transformation with cutting-edge LLM-based solutions, offering tailored AI tools that increase efficiency, spark innovation, and deliver measurable results.",
    md_file: "service2_custom_ai_llm_tools.md",
  image:'service3.jpg',
     bg:'#C493C8',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-indigo-500 to-indigo-400",
  },
  {
    title: "Custom Data Dashboards",
    component:<DataDashboards/>,
    path:'custom-data-dashboards',
    description:
      "Gain full control over your data with tailored, real-time dashboards that track KPIs, visualize trends, and turn insights into smarter business decisions.",
    md_file: "service3_Customized Data Dashboards.md",
image,     bg:'#000000',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-cyan-700 to-blue-300",
  },
];


export const DATA = {
  socials: {
    icons: socials,
    links: SOCIAL_LINKS,
  },
  hero: heroData,
  welcome: welcomeSection,
  projects: sample_projects,
  services: SERVICES,
};
