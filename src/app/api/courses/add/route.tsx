'use client'
import { getDataFromToken } from "@/helper/getDataFromToken";
import Customer from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import coursesData from '@/data/dance-courses.json';

connect();

export async function GET(request: NextRequest) {
  try {
    // Parse course title from query
    const url = new URL(request.url);
    const courseTitle = url.searchParams.get("title");

    if (!courseTitle) {
      return NextResponse.json({ message: "Course title is missing" }, { status: 400 });
    }

    // Get user ID from token
    const id = getDataFromToken(request);
    if (!id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Find the course matching the title
    const matchedCourse = coursesData.courses.find(course => course.title === courseTitle);
    if (!matchedCourse) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 });
    }
    console.log(courseTitle);
    console.log(id);
    console.log(matchedCourse);
    // Push course to user's courses
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { $push: { courses: matchedCourse } },
      { new: true }
    );
    console.log(10000)
    if (!updatedCustomer) {
      return NextResponse.json({ message: "Failed to update user" }, { status: 500 });
    }

    return NextResponse.json({ message: "Course added successfully!", user: updatedCustomer }, { status: 200 });
  } 
  catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
  }
}
