import { FloatingDock } from '@/ui/floating-dock'
import React from 'react'
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
    IconBrandWhatsapp
  } from "@tabler/icons-react";
import SignupFormDemo from './SignUpForm';
import { AuroraBackground } from '@/ui/aurora-bg';
import { motion } from 'framer-motion';
import { DATA } from '@/lib/data';
import Link from 'next/link';
export default function ContactUs() {
    
  return (
   <div className='' id="contact">
     <AuroraBackground>
        <div className='z-20 h-full grid grid-cols-1 sm:grid-cols-2 gap-x-4  py-10 sm:max-w-6xl mx-auto sm:py-16'>
        <motion.div className='pt-12 px-6 sm:px-0'
        initial={{opacity:0.5,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5}}
        >
            <h1 className='text-3xl font-bold pb-10 text-white'>Contact Me</h1>

            <h1 className='text-xl  pb-2 text-green-400 font-medium'>Hire me on upwork</h1>
            <p className='text-gray-400 pb-4'>You can directly hire me through Upwork by creating a contract. Click below to go to my Upwork profile.</p>
            <button  className="py-10 px-4 py-2 rounded-md text-black text-center relative overflow-hidden bg-white  flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Hire Me
          </span>
          <Link target='_blank' href={DATA.socials.links.upwork} className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <IconBrandUpwork className='h-10 w-10 text-green-400' />
          </Link>
        </button>
        <div className="flex items-start justify-start h-[10rem] sm:h-[35rem] py-4 sm:py-28 ">
      <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={DATA.socials.icons}
      />
    </div>
        </motion.div>
        

        <motion.div id='form'
         initial={{opacity:0.5,x:100}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:0.5}}>
            <SignupFormDemo />
        </motion.div>
    </div>
    </AuroraBackground>
   </div>
   
  )
}
