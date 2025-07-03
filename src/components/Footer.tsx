import React from 'react'
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-around pb-10 my-[0rem] text-l bg-gray-200  text-gray-800 dark:bg-zinc-950 dark:text-slate-300'>
      <div className='max-w-[20%]'>
        <h1 className='font-extrabold text-xl my-4 pt-40 text-black dark:text-white'>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae at saepe dicta, magni voluptatem, consequuntur accusamus in nisi voluptatibus ad. Consequatur labore nam voluptas quibusdam vitae esse dolorum architecto?</p>
      </div>
      <div>
        <div className='flex font-extrabold text-xl my-4 pt-40 text-black dark:text-white'>
            <LinkIcon/>
            <h1>Quick Links</h1>
        </div>
        <Link href={"./Home"} className='border-b-1'>Home</Link><br />
        <Link href={"./contact"} className='border-b-1'>contact</Link><br />
        <Link href={"./courses"} className='border-b-1'>courses</Link><br />
        <Link href={"./login"} className='border-b-1'>login</Link><br />
      </div>
      <div>
        <h1 className='font-extrabold text-xl pt-40 my-4 text-black dark:text-white'>Follow Us</h1>
        <div className='border-b-1 border-white'>
            <a href={"https://www.instagram.com/aayuussshh_/"}> Instagram </a>
            <a href={"https://www.linkedin.com/in/ayushkumar2712/"}> Linkedin </a>
            <a href={"https://github.com/Ayush8418"}> Github </a>
        </div>
      </div>
      <div>
        <h1 className='font-extrabold text-xl pt-40 my-4 text-black dark:text-white'>Contact Us</h1>
        <p>Lovely professional university</p>
        <p>Jalandhar, Punjab</p>
        <p>Email: ayushkumar8418@gmail.com</p>
        <p>Phone: +91 6309-6759-42</p>
      </div>
    </div>
  )
}

export default Footer
