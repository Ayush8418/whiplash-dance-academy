'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}

function ResetPasswordForm() {
    const [message, setMessage] = useState("");
    const [verified, setVerified] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitClick = async () => {
        if (!password) {
            toast.error('Please enter a new password');
            return;
        }
        try {
            setIsLoading(true);
            const res = await axios.post('/api/user/reset', { password: password, token: token });
            setVerified(true);
            toast.success('Password reset successfully!');
        }
        catch (error: any) {
            setMessage(error.response.data.message);
            toast.error('Failed to reset password');
        }
    }

    return (
        <div className="relative z-10 min-h-screen flex items-center justify-center from-blue-50 to-white dark:from-black dark:to-zinc-900 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-blue-100 dark:border-zinc-800">
                    <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
                        Reset Your Password
                    </h1>

                    <div className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-gray-800 dark:text-white transition-all duration-200"
                            />
                        </div>

                        {verified ? (
                            <div className="space-y-4">
                                <div className="p-3 rounded-lg bg-blue-100 text-blue-700 dark:bg-zinc-800 dark:text-blue-300 text-center">
                                    Password reset successfully! ✅
                                </div>
                                <a
                                    href="/auth/login"
                                    className="block w-full py-3 px-4 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500 transition-all duration-200 text-center"
                                >
                                    Go to Login
                                </a>
                            </div>
                        ) : (
                            <button
                                onClick={handleSubmitClick}
                                disabled={isLoading || !password}
                                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                                    isLoading || !password
                                        ? "bg-pink-200 cursor-not-allowed"
                                        : "bg-blue-400 hover:bg-blue-500"
                                }`}
                            >
                                {isLoading ? "Processing..." : "Reset Password"}
                            </button>
                        )}

                        {message && (
                            <div className="p-1 rounded-lg text-red-700 dark:text-red-300 text-center">
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}