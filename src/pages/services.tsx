import Navbar from '@/components/Navbar'
import ServiceCardSeparate from '@/components/ServiceCardSeparate'
import Skills from '@/components/Skills'
import { DATA } from '@/lib/data'
import { cn } from '@/lib/utils'
import FadeIn from '@/ui/FadeIn'
import Link from 'next/link'
import React from 'react'

export default function Services() {
  return (
    <div>
        <Navbar/>
        <div
      className="w-full bg-neutral-950 font-sans md:px-10"
    >
      <div className="max-w-7xl mx-auto py-20 px-4">
       <FadeIn>
       <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Services
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-xl">
        I specialize in offering AI and data science solutions that empower businesses to innovate and optimize their operations. My services are designed to help you seamlessly integrate AI into your workflows, providing custom solutions tailored to your business needs.
        </p>
       </FadeIn>
      </div>

      {/* SErvices as card -grid of 2  */}
        <div className='grid px-4  grid-cols-1 md:grid-cols-2 gap-10 sm:max-w-7xl mx-auto'>
            {/* {DATA.services.map((service, index) => (
               <Link href={`/service/${service.path}`} className=" w-full">
               <div
                 className={cn(
                   "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  //  `bg-[url(${service.imageUrl.replace(/"/g, '\\"')})] bg-cover`,
                   // Preload hover image by setting it in a pseudo-element
                  //  "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWx0a3d0NGdtbzEwYmY4aXFyMTR3cmVidnQ3bzcyNjk4dTZ6NzV5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jtXRDVzaCPXSynUz7h/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                  //  `hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWx0a3d0NGdtbzEwYmY4aXFyMTR3cmVidnQ3bzcyNjk4dTZ6NzV5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jtXRDVzaCPXSynUz7h/giphy.gif)]`,
                  //  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                   "transition-all duration-500"
                 )}
               >
                 <div className="text relative z-50">
                   <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                     {service.title}
                   </h1>
                   <p className="font-normal text-base text-gray-50 relative my-4">
                     {service.description}
                   </p>
                 </div>
               </div>
             </Link> 
            ))} */}
             
            </div>
            <div className='grid sm:grid-cols-2 w-full sm:max-w-7xl mx-auto gap-x-6'>
            {DATA.services.map((blog)=>(
                <ServiceCardSeparate
                 key={blog.title} {...blog}
                 
                 />
            ))}
        </div>
      </div>
    </div>
  )
}
