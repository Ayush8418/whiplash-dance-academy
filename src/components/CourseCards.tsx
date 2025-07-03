"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react"; 

interface CourseCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const CourseCards : React.FC<CourseCardProps> = ({title, description, price, image}) => {
  return (
    <div className="min-w-60">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:px-10 bg-white dark:bg-zinc-900">
        <img
          src={image}
          alt="jordans"
          height="400px"
          width="600px"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-2 mb-1 truncate dark:text-neutral-200">
          {title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {price}
          </span>
        </button>
      </BackgroundGradient>
    </div>
  )
}

export default CourseCards
