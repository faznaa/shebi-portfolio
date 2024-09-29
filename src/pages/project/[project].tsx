import ChatbotDevelopment from '@/components/MyServices/ChatbotDevelopment'
import Navbar from '@/components/Navbar'
import { DATA } from '@/lib/data'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { getPathFromTitle } from '@/lib/utils'
import Carousel from '@/components/Carousel'

export default function ProjectSingle() {
    const router = useRouter()
    const path = router.query.project
    const [data, setData] = React.useState<any>({})
    useEffect(() => {
        const _data = DATA.projects.find(d => getPathFromTitle(d.title) === path)
        if(!_data) return
        setData(_data)  
    },[path])
  return (
    <div className='bg-black text-gray-300 min-h-screen pb-10 sm:pb-20'>
        <Navbar/>
        {data?.title && (
            <div className='pt-10 px-4 sm:px-20 sm:pt-20'>
            <div className='text-6xl font-semibold mt-10 mb-4'>{data.title}</div>
            {/* Tags will go here */}
            <div className='flex justify-start gap-x-2 my-10 mb-16'>
                {data.keywords?.map((tag: string) => (
                    <div className='bg-neutral-800 px-4 py-1 text-sm  rounded-full'>
                        {tag}
                    </div>
                ))}
            </div>
            <div className='max-w-5xl my-5 flex justify-start mb-16'>
            <Carousel images={data.images?.map((i: string) => `/projects/${i}`)}/>
            </div>
            <div className='sm:max-w-5xl'>
            <p className='text-justify text-lg'>{data.overview}</p>

            <h1 className='text-3xl font-semibold mt-10 mb-6'>Features</h1>
            <ul className="list-disc list-outside text-gray-300 mb-6 pl-8">
        
            {data.features.map((feature: string) => (
                <li className='text-justify text-lg my-5 '> {feature}</li>
            ))}
            </ul>
            </div>
            <h1 className='text-3xl font-semibold mt-10 my-6'>Technology STack</h1>
            {Object.keys(data.technology_stack).map((key: string) => (
                <div className='py-4 pl-4'>
                    <p className='font-semibold text-lg text-blue-400 '>{key.split('_').join(' ').toUpperCase()}</p>
                    <p className='text-justify text-lg'>{data.technology_stack[key]}</p>
                </div>
                
            ))}
            </div>
        )}
    </div>
  )
}
