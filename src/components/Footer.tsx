import React from 'react'
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-4 sm:px-6 lg:px-8 py-10 gap-8 text-base bg-gray-200 text-gray-800 dark:bg-zinc-950 dark:text-slate-300'>
      {/* About Section */}
      <div className='w-full md:w-1/4 lg:w-1/5'>
        <h1 className='font-extrabold text-lg sm:text-xl mb-4 text-black dark:text-white'>About</h1>
        <p className='text-sm sm:text-base'>
          Welcome to Whiplash Dance Academy - where rhythm meets passion!
          We offer high-energy dance courses for all levels, blending creativity, technique, and fun. Whether you are a beginner or a seasoned dancer, our immersive lessons, expert instructors, and vibrant community will help you move with confidence and style.

          Join us and unleash your inner dancer!
        </p>
      </div>

      {/* Quick Links Section */}
      <div className='w-full md:w-auto'>
        <div className='flex items-center gap-2 font-extrabold text-lg sm:text-xl mb-4 text-black dark:text-white'>
          <LinkIcon size={20}/>
          <h1>Quick Links</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <Link href="/" className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>Home</Link>
          <Link href="/contact" className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>Contact</Link>
          <Link href="/courses" className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>Courses</Link>
          <Link href="/auth/login" className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>Login</Link>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className='w-full md:w-auto'>
        <h1 className='font-extrabold text-lg sm:text-xl mb-4 text-black dark:text-white'>Follow Us</h1>
        <div className='flex flex-col gap-2'>
          <a href="https://www.instagram.com/aayuussshh_/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/ayushkumar2712/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
            LinkedIn
          </a>
          <a href="https://github.com/Ayush8418" target="_blank" rel="noopener noreferrer" className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
            GitHub
          </a>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className='w-full md:w-1/4'>
        <h1 className='font-extrabold text-lg sm:text-xl mb-4 text-black dark:text-white'>Contact Us</h1>
        <div className='flex flex-col gap-2 text-sm sm:text-base'>
          <p>Lovely professional university</p>
          <p>Jalandhar, Punjab</p>
          <p>Email: ayushkumar8418@gmail.com</p>
          <p>Phone: +91 6309-6759-42</p>
        </div>
      </div>
    </div>
  )
}

export default Footer