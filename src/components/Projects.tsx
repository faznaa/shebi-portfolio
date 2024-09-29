import { IconBrandAdobe, IconBrandFacebook } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Link from "next/link";
import { getPathFromTitle } from "@/lib/utils";

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
    <div className="text-4xl sm:text-6xl text-center font-bold my-16 sm:pb-20 text-white">Some of my <span className="text-blue-500">projects</span></div>
  
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-10 px-4 sm:px-0">
      {DATA.projects.filter(i => i.isFeatured).map((project, index) => (
      <Link href={`/project/${getPathFromTitle(project.title)}`} >
       <motion.div
       whileHover={{y:-10}}
       transition={{duration:0.2}}
       key={project.title}
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
             src={`/projects/${project.main_image}`}
             alt={project.title}
             className="w-full h-64 object-cover"
           />

           {/* White shadow gradient */}
           <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
         </div>

         <div className="h-64 flex flex-col justify-between">
           <div>
             <h3 className="text-2xl text-gray-200 font-semibold mt-4">
               {project.title}
             </h3>
             <p className="text-gray-400 mt-2">
               {project.description}
             </p>
           </div>
           <div className="flex gap-x-2">
             {project.keywords?.map((tag: string) => (
               <span
                 key={tag}
                 className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-lg"
               >
                 {tag}
               </span>
             ))}
           </div>
         </div>
       </div>
     </motion.div></Link>
      ))}
    </div>
    {/* <div className="flex justify-end mt-10 mb-12 z-20 pr-2 text-blue-400 "> */}
    {/* </div> */}
    <div className="relative mt-6 ">
      <div className="absolute w-full px-4 sm:px-0 ">
        <div className="flex w-full justify-end">
          <Link href="/projects" className="bg-blue-600 text-white px-3 py-2 rounded-lg" target="_blank">
          See more projects
          </Link>
        </div>
      </div>

    </div>
   
  </div>
  
  </div>
}
