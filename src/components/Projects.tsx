import { IconBrandAdobe, IconBrandFacebook } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

const shimmerAnimation = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;
export default function Projects() {
  return <div className="w-screen h-full bg-black rounded-t-[5rem]">
          <style>{shimmerAnimation}</style>
    <div className="w-full sm:max-w-7xl sm:px-10 mx-auto py-20 ">
    <h1 className="text-6xl text-center font-bold my-16 pb-20 text-white">Some of my <span className="text-blue-500">projects</span></h1>
    <div className="grid grid-cols-3 gap-4 gap-y-10">
      {DATA.projects.map((project, index) => (
       <motion.div
       whileHover={{y:-10}}
       transition={{duration:0.2}}
       key={index}
       className="p-[2px] bg-gradient-to-t from-neutral-950 to-neutral-900 rounded-lg shadow-lg shadow-gray-500/50 sm:max-w-sm"
       style={{
         backgroundImage:
           'linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 75%)',
         backgroundSize: '200% auto',
         animation: 'shimmer 5s linear infinite',
       }}
     >
       <div className="p-4 bg-gradient-to-t from-neutral-950 to-neutral-900 border border-neutral-800 rounded-lg shadow-gray-500/50 sm:max-w-sm">
         <div className="relative w-full h-64 overflow-hidden rounded-lg">
           <motion.img
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.3 }}
             src={project.image}
             alt={project.title}
             className="w-full h-64 object-cover"
           />

           {/* White shadow gradient */}
           <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent rounded-lg"></div>
         </div>

         <div className="h-80 flex flex-col justify-between">
           <div>
             <h3 className="text-2xl text-gray-200 font-semibold mt-4">
               {project.title}
             </h3>
             <p className="text-gray-400 mt-2">
               {project.description}
             </p>
           </div>
           <div className="flex gap-x-2">
             <IconBrandFacebook className="h-6 w-6 text-blue-500" />
             <IconBrandAdobe className="h-6 w-6 text-blue-500" />
           </div>
         </div>
       </div>
     </motion.div>
      ))}
    </div>
  </div>
  </div>
}
