'use client'
import { CopyIcon } from 'lucide-react'
import React from 'react'

const TestAccountDetail = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className='bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg border border-gray-200 dark:border-zinc-700 shadow-sm max-w-md mx-auto m-10 mt-[-11vh]'>
      <h1 className='text-lg font-medium text-center mb-4 text-orange-500 dark:text-orange-400'>
        Use Your Details or Demo Details!
      </h1>
      
      <div className='space-y-4'>
        <div className='flex items-center justify-between bg-white dark:bg-zinc-900 p-3 rounded-md border border-gray-300 dark:border-zinc-600'>
          <div>
            <span className='font-semibold text-gray-800 dark:text-gray-200'>Email: </span>
            <span className='text-gray-600 dark:text-gray-400'>as3874182@gmail.com</span>
          </div>
          <button 
            onClick={() => copyToClipboard('as3874182@gmail.com')}
            className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors'
            aria-label='Copy email'
          >
            <CopyIcon className='h-4 w-4 text-gray-500 dark:text-gray-400' />
          </button>
        </div>

        <div className='flex items-center justify-between bg-white dark:bg-zinc-900 p-3 rounded-md border border-gray-300 dark:border-zinc-600'>
          <div>
            <span className='font-semibold text-gray-800 dark:text-gray-200'>Password: </span>
            <span className='text-gray-600 dark:text-gray-400'>Test@25</span>
          </div>
          <button 
            onClick={() => copyToClipboard('Test@25')}
            className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors'
            aria-label='Copy password'
          >
            <CopyIcon className='h-4 w-4 text-gray-500 dark:text-gray-400' />
          </button>
        </div>
      </div>

      <p className='mt-4 text-sm text-center text-gray-500 dark:text-gray-400'>
        Click the copy icon to use these demo credentials
      </p>
    </div>
  )
}

export default TestAccountDetail