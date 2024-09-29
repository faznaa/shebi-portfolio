"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export default function ServiceCardSeparate({
    title,
    description,
    image,path}:any) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[36rem] h-auto rounded-xl p-6 border  ">
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
            src={`${image}`}
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
            href={`/service/${path}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white font-semibold"
          >
            Know more →
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
