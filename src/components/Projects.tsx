import { IconBrandAdobe, IconBrandFacebook } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";
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

export default function Projects() {
  return <div className="w-screen h-full bg-black rounded-t-[5rem]">
    <div className="w-full sm:max-w-7xl sm:px-10 mx-auto py-20 ">
    <h1 className="text-6xl text-center font-bold my-16 pb-20 text-white">Some of my <span className="text-blue-500">projects</span></h1>
    <div className="grid grid-cols-3 gap-4 gap-y-10">
      {sample_projects.map((project, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md sm:max-w-sm">
         <div className="relative w-full h-64 overflow-hidden">
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      src={project.image}
      alt={project.title}
      className="w-full h-64 object-cover rounded-lg"
    />
    {/* White shadow gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent rounded-lg"></div>
  </div>
          <div className="h-80 flex flex-col justify-between">
            <div><h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p></div>
            <div className="flex gap-x-2">
                <IconBrandFacebook className="h-6 w-6 text-blue-500" />
                <IconBrandAdobe className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
}
