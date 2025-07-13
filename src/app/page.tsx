'use client'
import HeroSection from "@/components/HeroSection";
import danceCourse from "../data/dance-courses.json";
import StickyScrollRevealDemo from "../components/StickyScrollRevealDemo";
import InfiniteCards from "@/components/InfiniteCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Trainers from "@/components/Trainers";
import CourseCard3D from '@/components/CourseCards3D';

export default function Home() {

  const courses = danceCourse.courses;

  return (
    <main className="min-h-screen bg-white dark:bg-black antialised">
        <HeroSection/>
        
        <h1 className="text-center h-10 text-4xl font-bold dark:text-white">
          Our Featured Courses
        </h1>
        <div className="w-1/2 mx-auto h-1 relative mb-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500 to-blue-500 shadow-md rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            courses.map((course, index)=> {
              if(index < 3){
                return (
                  <CourseCard3D
                    key={index}
                    title={course.title}
                    image={course.image}
                    description={course.description}
                    price={course.price}
                    instructor={course.instructor}
                  />
                )
              }
            })
          }
        </div>
        <StickyScrollRevealDemo/>
        <InfiniteCards/>
        <UpcomingWebinars/>
        <br />
        <Trainers/>
    </main>
  );
}
