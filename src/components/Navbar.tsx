'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DanceCourses from '../data/dance-courses.json'

function Navbar({ className }: { className?: string }) {
  const Courses = DanceCourses.courses;
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <Link href={'/course'}>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {
                Courses.map((course,ind)=>{
                  return(
                    (ind < 4) ?
                    <ProductItem
                      key={ind}
                      title={course.title}
                      href={`/course/${course.title}`}
                      src={course.image}
                      description={course.description}
                    />
                    :
                    null
                  )
                })
              }
              <button className=" flex justify-center w-fit px-4 py-2 rounded-xl border-1">
                <ProductItem
                  key={5}
                  title={"All courses ->"}
                  href={`/course`}
                  src={""}
                />
              </button>
            </div>
          </MenuItem>
        </Link>
        <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
