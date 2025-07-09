'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import sendEmail from '../utils/send-email';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit , reset} = useForm<FormData>();
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    try {
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
    <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 p-10 rounded-xl'>
      <div className='mb-5 '>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='subject'
          className='mb-3 block text-base font-medium text-black'
        >
          subject
        </label>
        <input
          type='text'
          placeholder='Brief subject'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('subject', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
      {responseMessage && (
        <p className={`mt-4 text-base font-medium ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;