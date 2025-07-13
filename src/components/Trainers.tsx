"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Peoples from "../data/people.json";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { SparklesCore } from "./ui/sparkles";
import { useTheme } from 'next-themes';

const Trainers = () => {
    const { theme } = useTheme();
    const people = Peoples.trainers;
    
    return (
        <WavyBackground key={theme} className="w-full mx-auto pb-20 md:pb-40" backgroundFill={theme === "dark" ? "black" : "white"}>
            <div className="h-[30rem] md:h-[40rem] w-full dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center dark:text-white relative z-20">
                    Our Trainers
                </h1>
                <p className="text-center dark:text-white relative z-20 mt-4 max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis error dolorum maiores placeat dolorem consequuntur sed aspernatur, nostrum nemo quae maxime
                </p>
                
                <div className="w-full sm:w-[30rem] md:w-[40rem] h-25 relative mt-8">
                    {/* Gradients */}
                    <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={800}
                        className="w-full h-full"
                        particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
                    />

                    {/* Radial Gradient */}
                    <div className={`absolute inset-0 w-full h-full [mask-image:radial-gradient(200px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(300px_180px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]`}></div>
                </div>
            </div>
            
            <div className="flex flex-row items-center justify-center mt-[-10rem] md:mt-[-14rem] w-full px-4">
                <AnimatedTooltip items={people} />
            </div>
        </WavyBackground>
    )
}

export default Trainers;