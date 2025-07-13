'use client'

import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";
import Image from 'next/image';
import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative mx-auto pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 flex max-w-7xl flex-col items-center justify-center px-4">
      <div className="w-full">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white">
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
                className="mr-1.5 sm:mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        
        <div className="relative z-10 mx-auto max-w-xl py-4 md:py-5 text-center text-base sm:text-lg md:text-xl font-normal text-neutral-600 dark:text-neutral-400">
          Join our vibrant dance community and elevate your skills with expert-led
          training, immersive classes, and a stage to shine — whether you are a beginner or a pro.
        </div>
        
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-48 px-6 py-2 rounded-lg bg-black font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 active:scale-95 active:shadow-inner transition-all duration-100">
            <Link href="/courses">Explore Now</Link>
          </button>
          
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full sm:w-48 active:scale-95 active:shadow-inner transition-all duration-100"
          >
            <Link href={'/contact'}>Contact</Link>
          </Button>
        </div>
        
        <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 rounded-xl md:rounded-2xl lg:rounded-3xl border border-neutral-200 bg-neutral-100 p-3 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="w-full overflow-hidden rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              src="/hero4.jpg"
              alt="Landing page preview"
              className="h-auto w-full object-cover"
              height={2000}
              width={2000}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection