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
import { myJourney } from "./journeydata";
import { PROJECTS } from "./projects";
import { BLOGS } from "./blog";

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
  subtitle_top: "Welcome to the forefront of AI innovation.",
  mainTitleWhite: "Welcome. Step into my world of",
  mainTitleBlue: "AI Innovation.",
  description:
    "I'm Sheby, an experienced AI developer and data scientist with a passion for transforming business workflows through intelligent AI solutions like ChatGPT. Let me help you unlock the power of AI to enhance your business efficiency and drive results.",
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
  image:'/service1.jpg',
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
  image:'/service3.jpg',
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
const testimonials = [
  {
    quote:
      "Incredibly skilled at building an AI assistant for interviewing clients in advance of legal work. Shabeeb 'got it' intuitively about what the application was intended to do, and executed a well-designed interface that communicated the 'brand' effectively, while guiding the potential client through an extensive list of questions and intelligently created follow-up questions. Way beyond expectations! ",
    name: "Russell Collins, PsyD",
    title: "Founder, Collins Family Mediation",
  },
  {
    quote:
      "I was entrusted with the development of complex AI software and I couldn't be happier with the result. From the beginning, Shabeeb demonstrated an excellent understanding of my needs and provided valuable suggestions that significantly improved the quality of the final product. He is a reliable and competent professional for software development projects.",
    name: "Luigi Napoletano",
    title: "Founder & CEO, WAAB Software",
  },
  {
    quote:
      "Exceptional work! Shabeeb delivered outstanding results within the agreed timeframe. Excellent communication and attention to detail. Highly recommended!",
    name: "Manzoor Patel",
    title: "CEO, Seyfertsoft",
  },
  {
    quote:
      "Choosing Shabeeb to help us design and engineer our healthtech app demo was a great decision. He quickly understood the concept and did a great job.  Shabeeb was an expert at helping us understand the limitations to AI and help structure our prompts in a way to get the desired output. Would highly recommend to anyone looking to build an AI-involved app.",
    name: "Daniel Lapidus",
    title: "Founder, ResurgeMed",
  },
  {
    quote:
      "Shabeeb completed the project to an extremely high standard and finished in just a couple of days. The app was exactly what we needed, and he was very helpful and patient in assisting me with setting it up. I would definitely recommend Shabeeb for future projects.",
    name: "Mina Mandor",
    title: "Upwork Client",
  },
  {
    quote:
      "Shabeeb has been an invaluable asset to our team. Starting as a Data Scientist, he helped build machine learning models and R&D scripts for text processing. He later tested and prototyped with new LLM models and contributed as a data engineer, building Python backends for AI applications. We highly recommend him and look forward to future collaborations!",
    name: "Yash Paliwal",
    title: "Founder & CEO, PublicSquare",
  },
  {
    quote:
      "Shabeeb's LLM tool for web scraping and automatic blog writing has been a game-changer for us. It efficiently scrapes relevant data and generates high-quality blog content with minimal input, saving us hours of manual work. The tool is intuitive, fast, and delivers professional results that improve our SEO strategy. Highly recommended for anyone looking to automate their content creation process!",
    name: "Sabas CK",
    title: "Founder & CEO, NEXWAVE",
  },
  {
    quote:
      "Shabeeb developed a highly effective chatbot for our website, which has significantly improved user engagement and streamlined customer support. The chatbot handles queries seamlessly, providing quick and accurate responses. It integrates perfectly with our site, enhancing the overall user experience and freeing up our team for more complex tasks. We couldn't be happier with the results!",
    name: "Abu Swalih",
    title: "Founder, FLYERBIN",
  },
];

export const DATA = {
  socials: {
    icons: socials,
    links: SOCIAL_LINKS,
  },
  hero: heroData,
  welcome: welcomeSection,
  // projects: sample_projects,
  services: SERVICES,
  journey:myJourney,
  testimonials,
  projects:PROJECTS,
  project_keywords_all:Array.from(new Set(PROJECTS.map(p => p.keywords).flat())),
  blogs:BLOGS
};
