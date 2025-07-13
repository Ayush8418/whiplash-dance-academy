'use client'

import React, { useEffect, useState } from "react"
import axios from "axios";
import { toast } from 'react-hot-toast'
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [disableButton, setDisableButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/user/signup", user);
      setLoading(false);
      console.log(res);
      setMessage("Check your email to verify your account");
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
      setMessage(error.response.data.message)
    }
  }

  useEffect(() => {
    if (user.username.length > 0 && user.email.length > 6 && user.password.length >= 1) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user])

  return (
    <div className="relative z-10 min-h-screen pt-20 flex items-center justify-center  from-blue-50 to-white dark:from-black dark:to-zinc-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-50 dark:bg-black rounded-2xl p-8 border border-blue-100 dark:border-zinc-800">
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
            Create Account
          </h1>
          
          {loading && (
            <div className="text-center text-blue-500 dark:text-blue-400 mb-6">
              Processing...
            </div>
          )}
          
          {message && (
            <div className={`p-3 rounded-lg mb-6 text-center ${
              message.includes("Check your email") 
                ? "bg-blue-100 text-blue-700 dark:bg-zinc-800 dark:text-blue-300" 
                : "bg-red-100 text-red-700 dark:bg-zinc-800 dark:text-red-300"
            }`}>
              {message}
            </div>
          )}
          
          <div className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-gray-800 dark:text-white transition-all duration-200"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Enter username"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-gray-800 dark:text-white transition-all duration-200"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter email"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-gray-800 dark:text-white transition-all duration-200"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Enter password"
              />
            </div>
            
            <button
              onClick={onSignup}
              disabled={disableButton}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                disableButton 
                  ? "bg-pink-200 cursor-not-allowed" 
                  : "bg-blue-400 hover:bg-blue-500"
              }`}
            >
              {disableButton ? "Complete the form" : "Sign Up"}
            </button>
            
            <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
              Already have an account?{' '}
              <a 
                href="/auth/login" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}