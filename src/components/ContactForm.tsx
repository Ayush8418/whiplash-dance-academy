'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import sendEmail from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    try {
      console.log(data)
      await sendEmail(data);
      setResponseMessage('Message sent successfully!');
      setIsError(false);
      reset();
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again.');
      setIsError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl'>
      <div className='mb-4 sm:mb-5'>
        <label
          htmlFor='name'
          className='mb-2 sm:mb-3 block text-sm sm:text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-4 sm:mb-5'>
        <label
          htmlFor='email'
          className='mb-2 sm:mb-3 block text-sm sm:text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-4 sm:mb-5'>
        <label
          htmlFor='subject'
          className='mb-2 sm:mb-3 block text-sm sm:text-base font-medium text-black'
        >
          Subject
        </label>
        <input
          type='text'
          placeholder='Brief subject'
          className='w-full rounded-md border border-gray-300 bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('subject', { required: true })}
        />
      </div>
      <div className='mb-4 sm:mb-5'>
        <label
          htmlFor='message'
          className='mb-2 sm:mb-3 block text-sm sm:text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base font-semibold text-white outline-none w-full sm:w-auto'>
          Submit
        </button>
      </div>
      {responseMessage && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base font-medium ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;