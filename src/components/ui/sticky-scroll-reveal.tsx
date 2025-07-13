"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    image: String;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const {theme} = useTheme();
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#222831", // slate-900
    "#000000", // black
    "#171717", // neutral-900
    "#2C2C2C"
  ];
  const lightBackgroundColors = [
    "#FCD8CD",
    "#FEEBF6",
    "#EBD6FB",
    "#FFEDF3"
  ]
//   const linearGradients = [
//     "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
//     "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
//     "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
//   ];

  const [backgroundGradient, setBackgroundGradient] = useState(content[activeCard].image);

  useEffect(() => {
    setBackgroundGradient(content[activeCard].image);
  }, [activeCard]);

  return (
    
    <motion.div
    
      animate={{
        backgroundColor: (theme == "light") ? 
        lightBackgroundColors[activeCard % lightBackgroundColors.length] :
        backgroundColors[activeCard % backgroundColors.length]
      }}
      className="relative flex flex-wrap h-[34rem] justify-center space-x-10 overflow-y-auto rounded-md scroll-smooth"
      ref={ref}
    >
      <div className="sticky top-0 z-10 w-full bg-inherit p-6">
        <h1 className="text-center font-bold text-3xl underline my-4">
          Why Should You Choose Us
        </h1>
      </div>
      <div className="soluteabdiv relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-black dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-black dark:text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundGradient})`, backgroundSize: 'cover'}}
        className={cn(
          "sticky top-20 hidden h-80 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
