'use client'

import { motion } from "motion/react";
import { Button } from "./ui/moving-border";
import Image from 'next/image';

function HeroSection() {
  return (
      <div className="relative mx-auto my-14 flex max-w-7xl flex-col items-center justify-center">
      
      <div className="px-4 py-10 md:py-20 ">
        
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl dark:text-white">
          {"Unleash Your Rhythm at Whiplash"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <div
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Join our vibrant dance community and elevate your skills with expert-led
          training, immersive classes, and a stage to shine — whether you are a beginner or a pro.
        </div>
        <div
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            <a href="/course">Explore Now</a>
          </button>
          {/* <Button > */}
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            Contact
          
          </Button>
          {/* </Button> */}
        </div>
        
        
        <div         
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              src="/hero4.jpg"
              alt="Landing page preview"
              className="h-auto object-cover"
              height={2000}
              width={2000}
            />
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default HeroSection
