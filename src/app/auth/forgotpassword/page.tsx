'use client'
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [message, setMessage] = useState();

    const handleSubmitClick = async () => {
        if (!email) {
            toast.error('Please enter your email');
            return;
        }
        try {
            setIsLoading(true);
            const res = await axios.post('/api/user/forgot', { email: email });
            toast.success("Password reset link sent to your email");
            setMessage(res.data.message)
        } catch (error: any) {
            console.log(error.message);
            setMessage(error.message);
            toast.error("Failed to send reset email");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="relative z-10 min-h-screen flex items-center justify-center from-blue-50 to-white dark:from-black dark:to-zinc-900 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-blue-100 dark:border-zinc-800">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            Reset Your Password
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Enter your email to receive a reset link
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your registered email"
                                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-gray-800 dark:text-white transition-all duration-200"
                            />
                        </div>

                        <button
                            onClick={handleSubmitClick}
                            disabled={isLoading || !email}
                            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                                isLoading || !email
                                    ? "bg-pink-200 cursor-not-allowed"
                                    : "bg-blue-400 hover:bg-blue-500"
                            }`}
                        >
                            {isLoading ? "Sending..." : "Send Reset Link"}
                        </button>

                        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                            Remember your password?{' '}
                            <a 
                                href="/auth/login" 
                                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                            >
                                login
                            </a>
                        </div>
                    </div>
                    <p className='m-2 text-center text-amber-500'>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;