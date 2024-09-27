"use client";
import { DATA } from "@/lib/data";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion } from "framer-motion";
export default function Description() {
  const words = [
    {
      text: "Welcome.",
    },
    {
      text: "Step",
    },
    {
      text: "into",
    },
    {
      text: "my",
    },
    {
        text: "world",
      },
      {
        text: "of",
      },
    {
      text: "AI",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "Innovation.",
        className: "text-blue-500 dark:text-blue-500",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  bg-slate-900 w-full">
      <p className="text-neutral-200 text-xs sm:text-base   ">
        {DATA.welcome.subtitle_top}
      </p>
      <TypewriterEffectSmooth words={words} />
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex flex-col md:flex-row space-y-4 mb-0 md:space-y-0 space-x-0 md:space-x-4 text-gray-400 max-w-3xl text-lg text-center pt-8">
        
        I'm Sheby, a dedicated AI developer and Data Scientist passionate about integrating smart AI solutions like ChatGPT into everyday business workflows.
      </motion.div>
    </div>
  );
}
