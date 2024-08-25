"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
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
    <div className="flex flex-col items-center justify-center h-[40rem]  w-full">
      <p className="text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-gray-400 max-w-3xl">
        {/* <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
        I'm Sheby, a dedicated AI developer and Data Scientist passionate about integrating smart AI solutions like ChatGPT into everyday business workflows.
      </div>
    </div>
  );
}
