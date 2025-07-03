import ContactForm from '@/components/ContactForm';
import ContactHeading from '@/components/ContactHeading';
import React from 'react'

const page = () => {
  return (
    <div className='mb-20'>
      <div className='mt-32'>
        <ContactHeading/>
      </div>
      <hr className='mt-[-5rem] mb-[5rem] border-gray-500 mx-[20%]'/>
      <div className='flex flex-wrap justify-evenly gap-10 ' >
        <div className='min-w-[30%] max-w-[45%]'>
          <div className='bg-slate-200 text-black h-fit p-6 mb-6 rounded'>
            <h1 className='font-bold text-2xl'>Thank you!</h1>
            <br />
            <h2 className="text-xl font-semibold">We're Happy to Collaborate</h2>
            <p className="mt-2 text-gray-600">
              Thank you for reaching out! We're always open to meaningful collaborations — whether it's for <strong>freelance work</strong>, <strong>project partnerships</strong>, or <strong>internship opportunities</strong>. We appreciate your interest and will review your message shortly. Expect to hear from us soon!
            </p>
            </div>
          <div className='bg-slate-200 text-black h-fit p-6 mb-6 rounded'>
            <h1 className='font-bold text-2xl'>Who am I?</h1>
            <br />
            <h2 className='text-xl'>I am GROOT</h2>
            <p className=''>Hi, I’m a Full Stack Developer and an enthusiastic learner with a growing passion for Data Structures and Algorithms (DSA). Currently pursuing my B.Tech Final Year, I’m actively seeking internship and job opportunities where I can apply my technical skills and creative thinking to real-world challenges.

              I thrive in collaborative environments and enjoy working on solutions that make a meaningful impact. Whether it's building responsive web applications or solving algorithmic problems, I bring a strong sense of curiosity, teamwork, and a deep passion for learning and problem-solving.

              If you’re interested in collaborating or have an opportunity where I can contribute and grow, feel free to get in touch — I’d love to hear from you!</p>
          </div>
        </div>
        <div className='min-w-[40rem] max-w-[50%]'>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default page;
