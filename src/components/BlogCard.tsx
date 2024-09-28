"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export default function BlogCard({
    title,
    description,
    image,md_file}:any) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          
          translateZ="50"
          className="text-xl min-h-20 font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 min-h-20 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={`/blogs/${image}`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/blog/${md_file?.replace('.md', '')}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Read now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Time 5min
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
