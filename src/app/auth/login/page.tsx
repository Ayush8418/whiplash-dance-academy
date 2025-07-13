'use client'

import React, { useState, useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/user/login", user);
      setLoading(false);
      setMessage(res.data.message)
      setSuccess(res.data.success);
    }
    catch (error: any) {
      setLoading(false);
      setSuccess(false);
      setMessage(error.response.data.message);
    }
  }

  useEffect(() => {
    if (user.email.length > 6 && user.password.length >= 1) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user])

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center from-blue-50 to-white dark:from-black dark:to-zinc-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-50 dark:bg-black rounded-2xl p-8 border border-blue-100 dark:border-zinc-800">
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
            Welcome Back
          </h1>

          {loading && (
            <div className="text-center text-blue-500 dark:text-blue-400 mb-6">
              Authenticating...
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-gray-800 dark:text-white transition-all duration-200"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-gray-800 dark:text-white transition-all duration-200"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Enter your password"
              />
            </div>

            <button
              onClick={onLogin}
              disabled={disableButton || loading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                disableButton || loading
                  ? "bg-pink-200 cursor-not-allowed"
                  : "bg-blue-400 hover:bg-blue-500"
              }`}
            >
              {loading ? "Signing In..." : (disableButton ? "Enter Credentials" : "Sign In")}
            </button>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
              Don not have an account?{' '}
              <a 
                href="/auth/signup" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                signup
              </a>
              <br/>
              forgot password?{' '}
              <a 
                href="/auth/forgotpassword" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Reset
              </a>
            </div>
            {message && (
              <p className={`text-center mt-6 ${message.includes('logged in') ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}