import { LampContainer } from '@/ui/lamp'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <div className='h-screen  bg-slate-950 relative' style={{            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
    }}>
         <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className=' z-10 top-20 absolute left-1/2 -translate-x-1/2  w-40 h-40 overflow-hidden rounded-full mx-auto'
      >
        <img src="https://img.freepik.com/free-photo/side-view-ofserious-man_23-2148946213.jpg" alt="Shebi" className="w-full h-full grayscale object-cover" />
      </motion.div>
        <div className='pt-32'>
        <LampContainer className=''>
           
           <motion.h1
             initial={{ opacity: 0.5, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{
               delay: 0.3,
               duration: 0.8,
               ease: "easeInOut",
             }}
             className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
           >   
           I’M SHEBY<br/>
               
           </motion.h1>
           <motion.h1
             initial={{ opacity: 0.5, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{
               delay: 0.3,
               duration: 0.8,
               ease: "easeInOut",
             }}
             className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl"
           >   
           AI DEVELOPER & DATA SCIENTIST
               
           </motion.h1>
         </LampContainer>
        </div>
  
    </div>
  )
}
