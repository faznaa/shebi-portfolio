import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import { DATA } from '@/lib/data'
import { cn, getPathFromTitle } from '@/lib/utils'
import FadeIn from '@/ui/FadeIn'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IconBrandAdobe, IconBrandFacebook, IconX } from '@tabler/icons-react'

export default function ProjectsAll() {
    const keywords_list = DATA.project_keywords_all
    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
    const [filteredProjects, setFilteredProjects] = useState<any>(DATA.projects)
    useEffect(() => {
        if(selectedKeywords.length > 0) {
            setFilteredProjects(DATA.projects.filter((project:any) => selectedKeywords.every((keyword:string) => project.keywords.includes(keyword))))
        }else {
            setFilteredProjects(DATA.projects)
        }
    },[selectedKeywords])
  return (
    <div>
        <Navbar/>
        <div
      className="w-full bg-neutral-950 font-sans md:px-10 px-4 sm:px-0"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
       <FadeIn>
       <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Projects
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working as an AI Developer for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
       </FadeIn>
      </div>
      <div className='flex flex-wrap justify-start gap-4 max-w-7xl mx-auto pb-6 '>
      {keywords_list.map((keyword:string, index:number) => (
        <button

        key={keyword}
        onClick={() => {
          if(selectedKeywords.includes(keyword)) {
            setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword))
          } else {
            setSelectedKeywords([...selectedKeywords, keyword])
          }
        }}
        className={cn(
          "px-3 py-1.5  rounded-lg text-sm sm:text-[17px] font-medium  text-white/50 bg-transparent cursor-pointer shadow-none border border-white/50 transition duration-500 ease-in-out focus:outline-none hover:text-white hover:bg-[#008cff] hover:border-[#008cff] hover:shadow-[0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff]",
          selectedKeywords.includes(keyword) ? "bg-blue-500 text-white" : "bg-transparent"
        )}>
          {keyword}
          </button>)
      )}
      {selectedKeywords.length > 0 && (
        <button
        onClick={() => setSelectedKeywords([])}
        >
          <IconX className='h-6 w-6 text-white'/>
          </button>
      )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-10 max-w-7xl mx-auto">
      {filteredProjects.map((project:any, index:number) => (
      <Link href={`/project/${getPathFromTitle(project.title)}`} target="_blank">
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
       <div className="p-4 bg-gradient-to-tr from-neutral-800 via-gray-900 to-neutral-700 border border-neutral-800 rounded-lg shadow-gray-500/50 sm:max-w-sm">
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
    {filteredProjects.length === 0 && (
      <div className="max-w-7xl h-96 mx-auto py-20 px-4 md:px-8 lg:px-10">
        No projects 
        </div>
    )}

      </div>
    </div>
  )
}
