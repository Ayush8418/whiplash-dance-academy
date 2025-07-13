'use client'

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import coursesData from '@/data/dance-courses.json';
import axios from 'axios';
import Link from 'next/link';
import { Suspense } from 'react';

export default function CoursePage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Course />
    </Suspense>
  );
}

function Course() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const searchParams = useSearchParams();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const courseTitle = searchParams.get('title');
    console.log(courseTitle);
    const matchCourse = coursesData.courses.find(course => course.title == courseTitle);
    console.log(matchCourse);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                setLoading(true);
                const res = await axios.get("/api/courses/checkauthstatus");
                setIsLoggedIn(res.data.isLoggedIn);
                setLoading(false);
            } catch (error) {
                console.log("error");
                setLoading(false);
            }
        }
        checkAuth();
    }, []);

    async function addCourse() {
        try {
            const res = await axios.get(`/api/courses/add?title=${matchCourse?.title}`);
            setMessage(res.data.message);
        } catch (error: any) {
            setMessage("Failed to purchase course");
        }
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-300">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Course Image */}
                    <div className="lg:w-1/2">
                        <img 
                            src={matchCourse?.image} 
                            alt={matchCourse?.title}  
                            className="w-full h-auto rounded-xl shadow-2xl object-cover border-4 border-white dark:border-zinc-900"
                        />
                    </div>
                    
                    {/* Course Details */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                {matchCourse?.title}
                            </h1>
                            <div className="flex gap-2 mb-6">
                                <span className="inline-block px-4 py-1 rounded-full text-lg font-bold bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                                    {"Contemporary"}
                                </span>
                                <span className="inline-block px-4 py-1 rounded-full text-lg font-bold bg-gray-200 text-gray-800 dark:bg-zinc-950 dark:text-gray-200">
                                    {"Intermediate"}
                                </span>
                            </div>
                        </div>
                        
                        <p className="text-xl md:text-2xl leading-relaxed dark:text-gray-300">
                            {matchCourse?.description || "This comprehensive dance course will take you through fundamental techniques to advanced movements in a structured, progressive manner."}
                        </p>
                        
                        <div className="space-y-6 text-xl">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span><strong>Duration:</strong> {"8 weeks"} | <strong>Starts:</strong> {"January 1st 2026"}</span>
                            </div>
                            
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span><strong>Class Size:</strong> {"Max 15 students"}</span>
                            </div>
                            
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span><strong>Instructor:</strong> {matchCourse?.instructor || "Professional Dance Trainer"}</span>
                            </div>
                            
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span><strong>Includes:</strong> {"Video tutorials, Live Q&A, Certificate"}</span>
                            </div>
                            
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-3xl font-bold">
                                    ${matchCourse?.price || "199"}
                                </span>
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            {isLoggedIn ? 
                                <button 
                                    onClick={addCourse}
                                    disabled={loading}
                                    className={`px-8 py-4 rounded-lg font-bold text-xl active:scale-95 active:shadow-inner transition-all duration-100 ${loading ? 
                                        'bg-gray-400 cursor-not-allowed' : 
                                        'bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-800 dark:hover:bg-purple-700'
                                    }`}
                                >
                                    {loading ? "Processing..." : "ENROLL NOW"}
                                </button>
                                :
                                <Link 
                                    href='/auth/login' 
                                    className="px-8 py-4 rounded-lg font-bold text-xl bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white transition-colors active:scale-95 active:shadow-inner duration-100"
                                >
                                    LOGIN TO ENROLL
                                </Link>
                            }
                            
                            {message && (
                                <p className={`mt-6 text-xl ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                                    {message}m
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}