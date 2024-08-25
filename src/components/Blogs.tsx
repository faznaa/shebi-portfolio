import React from 'react'
import { motion } from 'framer-motion'
import BlogCard from './BlogCard'
export default function Blogs() {
    const  blogs = [
        {
            title:'How Ai works ?',
            description:'How every place in india is like',
            image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg',
            url:'#'
        },
        {
            title:'How Ai works ?',
            description:'How every place in india is like',
            image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg',
            url:'#'
        },
        {
            title:'How Ai works ?',
            description:'How every place in india is like',
            image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg',
            url:'#'
        }
    ]
  return (
    <div className='min-h-screen bg-black text-white sm:max-w-7xl mx-auto py-10'>
        <motion.h1 className='text-4xl font-bold text-white text-center pb-6'>
            Know more about <span className='text-blue-500'>me!</span>
        </motion.h1>
        <motion.h3 className='text-lg  text-gray-400 text-center pb-6'>
            Welcome to my Articles, where I break down complex AI concepts into simple, practical knowledge
        </motion.h3>

        <div className='grid sm:grid-cols-3 gap-x-6'>
            {blogs.map((blog)=>(
                <BlogCard key={blog.title} {...blog}/>
            ))}
        </div>

        <div className='flex w-full justify-center items-center'>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          See more
        </button>
        </div>
    </div>
  )
}
