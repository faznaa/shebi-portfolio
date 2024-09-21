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
export default function ContactUs() {
    const links = [
        {
          title: "Linkedin",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-blue-500" />
          ),
          href: "#",
        },
     
        {
          title: "Whatsapp",
          icon: (
            <IconBrandWhatsapp className="h-full w-full text-green-400" />
          ),
          href: "#",
        },
        {
          title: "Skype",
          icon: (
            <IconBrandSkype className="h-full w-full text-blue-300" />
          ),
          href: "#",
        },
        {
          title: "Github",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-300" />
          ),
          href: "#",
        },
        {
            title: "Upwork",
            icon: (
              <IconBrandUpwork className="h-full w-full text-green-400" />
            ),
            href: "#",
          },
       
      ];
  return (
   <div className='h-screen '>
     <AuroraBackground>
        <div className='grid sm:grid-cols-2 gap-x-4 h-screen py-10 sm:max-w-6xl mx-auto sm:py-16'>
        <div className='pt-12'>
            <h1 className='text-3xl font-bold pb-10 text-white'>Contact Me</h1>

            <h1 className='text-xl  pb-2 text-green-400 font-medium'>Hire me on upwork</h1>
            <p className='text-gray-400'>You can directly hire me through Upwork by creating a contract. Click below to go to my Upwork profile.</p>
            <button className="py-10 px-4 py-2 rounded-md text-black text-center relative overflow-hidden bg-white  flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Hire Me
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <IconBrandUpwork className='h-10 w-10 text-green-400' />
          </div>
        </button>
        <div className="flex items-start justify-start h-[35rem] py-28 ">
      <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={links}
      />
    </div>
        </div>
        

        <div id='form'>
            <SignupFormDemo />
        </div>
    </div>
    </AuroraBackground>
   </div>
   
  )
}
