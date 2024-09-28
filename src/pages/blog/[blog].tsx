import Navbar from '@/components/Navbar'
import { DATA } from '@/lib/data'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
  // Generate paths for all blog posts based on the md_file paths in DATA
  const paths = DATA.blogs.map((blog) => ({
    params: { blog: blog.md_file.replace('.md', '') },
  }));

  return { paths, fallback: false }
}

export async function getStaticProps({ params }:any) {
  const { blog } = params;

  // Find the specific blog data from DATA
  const blogData = DATA.blogs.find((d) => d.md_file.replace('.md', '') === blog);
  if (!blogData) {
    return {
      notFound: true,
    };
  }

  // Construct the path to the markdown file
  const markdownFilePath = path.join(process.cwd(), 'src', 'blog_files', blogData.md_file?.replaceAll('-','_'));

  // Read the content of the markdown file
  const mdContent = fs.readFileSync(markdownFilePath, 'utf-8');

  return {
    props: {
      blogData,
      mdContent,
    },
  };
}

export default function Blogs({ blogData, mdContent }:any) {
  return (
    <div>
      <Navbar />
      <div className="bg-neutral-900 text-gray-400 min-h-screen p-8 sm:pt-32">
        <div className='max-w-3xl mx-auto '>
        <div className='h1 text-4xl text-white '>{blogData?.title}</div>
        <img src={`/blogs/${blogData?.image}`} className=" my-7" />
        </div>

        {mdContent ? (
          <ReactMarkdown
            children={mdContent}
            remarkPlugins={[remarkGfm]}
            components={{
                h2: ({children}) => <h2 className="text-3xl text-gray-300 font-semibold py-4">{children}</h2>,
                h3: ({children}) => <h3 className="text-2xl text-gray-300 py-4">{children}</h3>,
                p: ({children}) => <p className="text-lg text-gray-400 py-3">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-outside text-lg pl-4 my-3">{children}</ul>,
                li: ({children}) => <li className="text-lg py-1 ">{children}</li>,
                hr: () => <hr className="my-4" />,
            }}
            className="prose prose-invert max-w-3xl mx-auto"
          />
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
