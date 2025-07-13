import ContactForm from '@/components/ContactForm';
import ContactHeading from '@/components/ContactHeading';
import React from 'react'

const page = () => {
  return (
    <div className='mb-10 md:mb-20'>
      <div className='mt-24 md:mt-32'>
        <ContactHeading/>
      </div>
      <hr className='mt-[-3rem] md:mt-[-5rem] mb-[3rem] md:mb-[5rem] border-gray-500 mx-[5%] md:mx-[20%]'/>
      <div className='flex flex-col lg:flex-row justify-center gap-6 md:gap-10 px-4 sm:px-6'>
        <div className='w-full lg:w-[45%] xl:w-[40%] 2xl:w-[35%]'>
          <div className='bg-slate-200 text-black h-fit p-4 sm:p-6 mb-4 sm:mb-6 rounded-lg'>
            <h1 className='font-bold text-xl sm:text-2xl'>Thank you!</h1>
            <br />
            <h2 className="text-lg sm:text-xl font-semibold">We are Happy to Collaborate</h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Thank you for reaching out! We are always open to meaningful collaborations — whether it is for <strong>freelance work</strong>, <strong>project partnerships</strong>, or <strong>internship opportunities</strong>. We appreciate your interest and will review your message shortly. Expect to hear from us soon!
            </p>
          </div>
          <div className='bg-slate-200 text-black h-fit p-4 sm:p-6 mb-4 sm:mb-6 rounded-lg'>
            <h1 className='font-bold text-xl sm:text-2xl'>Who am I?</h1>
            <br />
            <h2 className='text-lg sm:text-xl'>I am GROOT</h2>
            <p className='text-sm sm:text-base'>
              Hi, I am a Full Stack Developer and an enthusiastic learner with a growing passion for Data Structures and Algorithms (DSA). Currently pursuing my B.Tech Final Year, I am actively seeking internship and job opportunities where I can apply my technical skills and creative thinking to real-world challenges.

              I thrive in collaborative environments and enjoy working on solutions that make a meaningful impact. Whether it is building responsive web applications or solving algorithmic problems, I bring a strong sense of curiosity, teamwork, and a deep passion for learning and problem-solving.

              If you are interested in collaborating or have an opportunity where I can contribute and grow, feel free to get in touch — I would love to hear from you!
            </p>
          </div>
        </div>
        <div className='w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%]'>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default page;