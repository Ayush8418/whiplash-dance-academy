'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="fixed top-10 z-50 sm:top-6 left-4 sm:left-6 hover:opacity-80 transition-opacity">
      <Image 
        src={'/lightLogo.png'}
        alt='Whiplash Logo'
        width={150}
        height={60}
        className='w-16 h-8 sm:w-20 sm:h-10 rounded-sm'
        priority
      />
    </Link>
  )
}

export default Logo