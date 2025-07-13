"use client";
import React from "react";
import CourseCard3D from "@/components/CourseCards3D";
import DanceCourses from "@/data/dance-courses.json";

const CoursePage = () => {
  const Courses = DanceCourses.courses;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Courses.map((course, ind) => (
        <CourseCard3D
          key={ind}
          title={course.title}
          image={course.image}
          description={course.description}
          price={course.price}
          instructor={course.instructor}
        />
      ))}
    </div>
  );
};

export default CoursePage;
