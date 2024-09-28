"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { DATA } from "@/lib/data";

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-3xl sm:text-6xl text-gray-200 font-bold">What my <span className="text-blue-500">clients</span> say</h1>
        <p className="text-lg sm:text-2xl text-gray-400 max-w-3xl text-center mt-5 mb-12 ">Throughout my career, I have received valuable feedback from my clients. Here are some highlights they have shared.</p>
      <InfiniteMovingCards
        items={DATA.testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

