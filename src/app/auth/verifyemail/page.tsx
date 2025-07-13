'use client'
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Verify />
    </Suspense>
  );
}

function Verify() {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');
  const username = searchParams.get('username');
  const [message, setMessage] = useState("");

  const handleVerifyClick = async () => {
    if (!token) {
      toast.error('No token found');
      return;
    }
    try {
      const res = await axios.post(`http://localhost:3000/api/user/verify?token=${encodeURIComponent(token)}`);
      setVerified(true);
      toast.success("Email verified successfully!");
    } catch (error: any) {
      toast.error("Failed to verify email");
      setMessage(error.response.data.message);
    }
  }

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center from-blue-50 to-white dark:from-black dark:to-zinc-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-black rounded-2xl p-8 border border-blue-100 dark:border-zinc-800">
          <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-blue-400 mb-6">
            Verify Your Email
          </h1>
          
          <div className="space-y-6">
            <div className="text-center text-gray-700 dark:text-gray-300">
              <p>Please verify that this is you</p>
            </div>
            
            <div className="bg-blue-50 dark:bg-zinc-800 p-4 rounded-lg">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Username</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{username}</p>
              </div>
              
              <div className="space-y-2 mt-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{email}</p>
              </div>
            </div>
            
            {message && (
              <div className="p-3 rounded-lg bg-red-100 text-red-700 dark:bg-zinc-800 dark:text-red-300 text-center">
                {message}
              </div>
            )}
            
            {!verified ? (
              <button
                onClick={handleVerifyClick}
                className="w-full py-3 px-4 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500 transition-all duration-200"
              >
                Verify Email
              </button>
            ) : (
              <div className="text-center space-y-4">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-700 dark:bg-zinc-800 dark:text-blue-300">
                  Email verified successfully! ✅
                </div>
                <a 
                  href="/auth/login" 
                  className="inline-block w-full py-3 px-4 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500 transition-all duration-200 text-center"
                >
                  Go to Login
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}