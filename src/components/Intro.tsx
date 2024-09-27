import { LampContainer } from "@/ui/lamp";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export default function Intro() {
  return (
    <div
      className="h-screen overflow-hidden bg-slate-950 relative"
      style={{
        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" z-10 top-20 absolute left-1/2 -translate-x-1/2 w-40 h-40 overflow-hidden rounded-full mx-auto"
      >
        <img
          src={DATA.hero.profile}
          alt="Shebi"
          className="w-full h-full grayscale object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="pt-32"
      >
        <LampContainer className="">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium text-white drop-shadow-md shadow-purple-950 tracking-tight text-transparent md:text-7xl"
          >
            {DATA.hero.title}
            <br />
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl"
          >
            {DATA.hero.subtitle}
          </motion.h1>
        </LampContainer>
      </motion.div>
    </div>
  );
}
