"use client";
import React, { useEffect, useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import Peoples from "../data/people.json";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { SparklesCore } from "./ui/sparkles";
import {useTheme} from 'next-themes';

const Trainers = () => {
    const {theme, setTheme} = useTheme();
    const people = Peoples.trainers;
  return (
    <WavyBackground key={theme} className="max-w-4xl mx-auto pb-40" backgroundFill={theme==="dark"?"black":"white"}>
        
        <div className="h-[40rem] w-full dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center  dark:text-white relative z-20">
            Our Trainers
        </h1>
        <p className="text-center dark:text-white relative z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis error dolorum maiores placeat dolorem consequuntur sed aspernatur, nostrum nemo quae maxime</p>
        <div className="w-[40rem] h-25 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    
            {/* Core component */}
            <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
    
            {/* Radial Gradient to prevent sharp edges */}
            <div key={theme} className={`absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]`}></div>
        </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-[-14rem] w-full">
            <AnimatedTooltip items={people} />
        </div>
    </WavyBackground>
  )
}

export default Trainers;
