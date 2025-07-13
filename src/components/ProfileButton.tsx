'use client'
import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ProfileButton = () => {
  return (
    <div className='max-w-fit flex items-center fixed right-20 top-10 z-50 h-10 px-4 font-semibold rounded-full text-white bg-zinc-900 dark:text-black dark:bg-white'>
        <Link href={"/profile"} className='flex'><User/>Profile</Link>
    </div>
  )
}

export default ProfileButton
