'use client';

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TestAccountDetail from '@/components/TestAccountDetail';

interface Course {
  _id: string;
  purchaseDate: Date;
  expireDate: Date;
  title: string;
  description: string;
  price: number;
  instructor: string;
  image: string;
  isExpired?: boolean;
}

interface User {
  username: string;
  email: string;
  courses: Course[];
  joinDate: Date;
  totalSpent: number;
}

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  // Demo data in case API fails
  const demoUser: User = {
    username: "dance_enthusiast",
    email: "user@example.com",
    joinDate: new Date('2023-01-15'),
    totalSpent: 597,
    courses: [
      {
        _id: "1",
        purchaseDate: new Date('2023-10-15'),
        expireDate: new Date('2023-11-15'),
        title: "Contemporary Dance Fundamentals",
        description: "Learn the basics of contemporary dance with professional guidance",
        price: 199,
        instructor: "Maria Rodriguez",
        image: "/contemporary.jpg",
        isExpired: true
      },
      {
        _id: "2",
        purchaseDate: new Date('2023-12-01'),
        expireDate: new Date('2024-01-01'),
        title: "Advanced Hip Hop Techniques",
        description: "Master advanced hip hop moves and choreography",
        price: 249,
        instructor: "Jamal Williams",
        image: "/hiphop.jpg"
      },
      {
        _id: "3",
        purchaseDate: new Date('2024-01-10'),
        expireDate: new Date('2024-02-10'),
        title: "Ballet for Beginners",
        description: "Introduction to classical ballet techniques",
        price: 149,
        instructor: "Elena Petrov",
        image: "/ballet.jpg"
      }
    ]
  };

  useEffect(() => {
    getCustomer();
  }, [])

  async function getCustomer() {
    try {
      const res = await axios.get('/api/user/me');
      const userData = res.data.user;
      console.log(res.data)

      const processedCourses = userData.courses.map((course: Course) => ({
        ...course,
        isExpired: new Date(course.expireDate) < new Date()
      }));
      

      const totalSpent = processedCourses.reduce((sum: number, course: Course) => sum + course.price, 0);
      
      setUser({
        ...userData,
        courses: processedCourses,
        totalSpent
      });
      setLoggedIn(true);
      setLoading(false);
    } catch (error) {
      console.log("Using demo data");
      setUser(demoUser);
      setLoggedIn(false);
      setLoading(false);
    }
  }

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const handleLogoutClick = async () => {
    try{
      const res = await axios.get('/api/user/logout');
      setLoggedIn(false);
    }
    catch(error: any){
      console.log(error.message);

    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-2xl">Loading your profile...</div>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div>
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center my-20">
        <div className="max-w-md w-full p-8 rounded-lg dark:bg-zinc-950 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-6">Please sign in to view your profile</h2>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/login" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium">
              Login
            </Link>
            <Link href="/auth/signup" className="px-6 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-zinc-900 rounded-lg font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <TestAccountDetail/>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 my-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="sticky top-4">
              <h2 className="text-3xl font-bold mb-6">Your Courses</h2>
              
              <div className="space-y-4">
                {user?.courses.map((course) => (
                  <div 
                    key={course._id}
                    className={`rounded-lg p-4 border transition-all ${course.isExpired ? 
                      'bg-gray-100 dark:bg-zinc-900 border-gray-300 dark:border-zinc-800 text-gray-500 dark:text-gray-500' : 
                      'bg-white dark:bg-zinc-950 border-gray-200 dark:border-zinc-700 hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer'}`}
                    onClick={() => toggleCourse(course._id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className={`font-semibold text-lg ${course.isExpired ? '' : 'text-purple-700 dark:text-purple-400'}`}>
                        {course.title}
                      </h3>
                      <svg 
                        className={`w-5 h-5 transition-transform ${expandedCourse === course._id ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {expandedCourse === course._id && (
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-zinc-700">
                        <p className="mb-2">{course.description}</p>
                        <div className="flex justify-between text-sm">
                          <span>Instructor: {course.instructor}</span>
                          <span className="font-medium">${course.price}</span>
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                          <span>Purchased: {new Date(course.purchaseDate).toLocaleDateString()}</span>
                          <span className={course.isExpired ? 'text-red-500' : 'text-green-500'}>
                            {course.isExpired ? 'Expired' : 'Expires'} {new Date(course.expireDate).toLocaleDateString()}
                          </span>
                        </div>
                        {!course.isExpired && (
                          <button className="mt-3 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-md text-sm font-medium">
                            Access Course
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-zinc-950 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-zinc-800">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{user?.username}</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{user?.email}</p>
                </div>
                <div className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                  <span className="text-white font-bold text-lg">Member since {new Date(user?.joinDate || '').toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Total Courses</h3>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{user?.courses.length}</p>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Active Courses</h3>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {user?.courses.filter(c => !c.isExpired).length}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Total Spent</h3>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">${user?.totalSpent.toPrecision(4)}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-zinc-700">
                    <span className="font-medium">Email Verification</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      Verified
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-zinc-700">
                    <span className="font-medium">Password</span>
                    <button className="text-purple-600 dark:text-purple-400 hover:underline">
                      <Link href="/auth/forgotpassword">Change Password</Link>
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-zinc-700">
                    <span className="font-medium">User type</span>
                    <button className="text-blue-600 dark:text-purple-400">
                      user
                    </button>
                  </div>
                  <div className='flex my-6 justify-center'>
                    <button onClick={handleLogoutClick} className='p-3 text-2xl font-extrabold border-1px rounded-full bg-red-400 '>
                      Logout
                    </button>
                  </div>
                </div>
                
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Learning Statistics</h2>
                <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg">
                  <div className="h-48 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Your learning progress chart will appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}