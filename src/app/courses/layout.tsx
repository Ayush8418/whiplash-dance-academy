import React from 'react'
import CoursesHeading from '@/components/CoursesHeading';
import ExtraBenefits from '@/components/ExtraBenefits';

export default function coursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div>
      <CoursesHeading/>
        {children}
        <h1 className='text-center font-bold text-5xl mt-10'>Extra benefits</h1>
        <p className='text-center text-2xl mb-2'>in choosing us</p>
        <div className="w-1/2 mx-auto h-1 relative mb-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500 to-blue-500 shadow-md rounded-full"></div>
        </div>
        <ExtraBenefits/>
        <br />
        <br />
    </div>
  )
}

