import { DATA } from '@/lib/data'
import React from 'react'
import CarouselService from './CarouselService'
import CarouselProject from './CarouselProject'

export default function MobileHero() {
  return (
    <div className='w-full py-20 min-h-screen bg-black text-gray-300 pt-20 px-4'>
        <div className='flex flex-col items-center justify-center gap-y-4'>
            <img src={DATA.hero.profile} className='w-32 h-32 rounded-full object-cover' />
            <div className='text-3xl font-semibold'>{DATA.hero.title}</div>
            <div className='text-2xl font-semibold'>{DATA.hero.subtitle}</div>
            <div className='text-base px-4 font-medium'>{DATA.welcome.description}</div>
        </div>
        <div className='mt-12'>
        <div className='text-3xl text-white font-semibold text-center my-4'>Services <span className='text-blue-500'>I offer</span></div>
          <CarouselService data={DATA.services}/>

        <div className='text-3xl mt-10 text-white font-semibold text-center my-4'>See my <span className='text-blue-500'>Projects</span></div>
          <CarouselProject data={DATA.projects?.filter(i => i.isFeatured)}/>
        </div>

        
    </div>
  )
}
