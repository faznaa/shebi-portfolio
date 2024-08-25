import React from 'react'

export default function Navbar() {
    const items = [{
        title: "Home",
        href: "#",
    },{
        title:"Projects",
        href:"#",
    },{
        title:"About",
        href:"#",
    }]
  return (
    // Transparent Navbar 
    <div className='bg-transparent z-50 fixed top-0 border-b-[1px] border-gray-400 w-full h-12'>
        {items.map((item) => (
            <div>
                <button className='text-white text-sm tracking-normal'>{item.title}</button>
            </div>
        ))}
    </div>
  )
}
