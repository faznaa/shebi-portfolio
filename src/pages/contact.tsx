import ContactUs from '@/components/ContactUs'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import React from 'react'

export default function ContactPage() {
  return (
    <div className='sm:h-screen overflow-hidden'>
        <Navbar/>
        <div className='sm:pt-20'>
        <ContactUs/>
        </div>
    </div>
  )
}
