"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import Link from "next/link";

// Updated TimelineEntry interface to match the structure of myJourney.sections
interface TimelineEntry {
  position: string;
  company: string;
  year: number;
  location: string;
  linkedin: string;
  contributions: string[];
}

export const Timeline = ({ data }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <FadeIn>
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
            My Journey
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-xl">
          My journey has been focused on leveraging AI technologies to create impactful solutions. From building intelligent chatbots to developing advanced AI tools, I’ve consistently pushed the boundaries of what’s possible with machine learning and AI. Here’s a timeline of my growth and accomplishments in the field.

          </p>
        </FadeIn>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.sections.map((item:any, index:number) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                {item.position}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <Link target="_blank" href={item.linkedin}><img src={`/logos/${item.logo}`} className="h-16 w-auto my-2 " /></Link>
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.position}
              </h3>
              <div className="mb-4">
                <h4 className="text-lg md:text-2xl font-bold text-white">
                  {item.company}
                </h4>
                <p className=" text-blue-400 text-sm md:text-base">
                  {item.year} - {item.location}
                </p>
              
              </div>
              <p className="text-neutral-200 text-sm md:text-base my-4">
                {item.description}
              </p>
              <p className="text-neutral-300 font-medium text-sm md:text-base my-4">
               Major Contributions :
              </p>
              <ul className="list-disc list-outside font-normal text-neutral-300 pl-6">
                {item.contributions.map((contribution:any, i:number) => (
                  <li key={i}>{contribution}</li>
                ))}
              </ul>
              {item?.childs && <div className="flex gap-x-4">{item.childs.map((child:any, i:number) => (
                <Link key={i} href={child.url} target="_blank" className="text-blue-400 hover:underline">{child.title}
                <img src={`/logos/${child.logo}`} className="h-12 rounded-sm my-2 " />
                </Link>
              ))}</div>}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
