import ChatbotDevelopment from '@/components/MyServices/ChatbotDevelopment'
import Navbar from '@/components/Navbar'
import { DATA } from '@/lib/data'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
export default function ServiceSingle() {
    const router = useRouter()
    const path = router.query.service
    const [data, setData] = React.useState<any>({})
    useEffect(() => {
        const _data = DATA.services.find(d => d.path === path)
        if(!_data) return
        setData(_data)  
    },[path])
  return (
    <div className='bg-black text-gray-300 min-h-screen'>
        <Navbar/>
        {data && (
            <div className='pt-10 sm:px-20'>
            <div className='text-6xl font-semibold mt-10'>{data.title}</div>
            <motion.img
              src={`${data.image}`}
              alt={data.title}
              className="w-full h-full object-cover rounded-xl sm:max-w-4xl my-6"
              
            />
            {data.component}
            </div>
        )}
    </div>
  )
}
