import CourseCard3D from '@/components/CourseCards3D';
import CoursesHeading from '@/components/CoursesHeading';
import React from 'react';
import DanceCourses from '@/data/dance-courses.json'
import ExtraBenefits from '@/components/ExtraBenefits';

const page = () => {

  const Courses = DanceCourses.courses;

  return (
    <div>
      <CoursesHeading/>
      
      <div className='flex flex-wrap justify-start gap-6 m-10'>
        {
          Courses.map((course, ind)=>{
            return (
              <CourseCard3D
                key={ind}
                title={course.title}
                image={course.image}
                description={course.description}
                price={course.price}
                instructor={course.instructor}
              />
            )
          })
        }
        <ExtraBenefits/>
        </div>      
    </div>
  )
}

export default page;
