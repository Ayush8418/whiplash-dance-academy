'use client';

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DanceCourses from '../data/dance-courses.json';

function Navbar({ className, mobile }: { className?: string; mobile?: boolean }) {
  const Courses = DanceCourses.courses;
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn(
        mobile 
          ? "fixed bottom-0 inset-x-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-lg"
          : "fixed top-5 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href={'/courses'}>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className={cn(
              "text-sm grid gap-4 p-4",
              mobile ? "grid-cols-1" : "grid-cols-2 gap-10"
            )}>
              {Courses.slice(0, 4).map((course, ind) => (
                <ProductItem
                  key={ind}
                  title={course.title}
                  href={`/courses/course?title=${course.title}`}
                  src={course.image}
                  description={course.description}
                />
              ))}
              <button className={cn(
                "flex justify-center w-fit px-4 py-2 rounded-xl border-1",
                mobile ? "w-full" : ""
              )}>
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
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar;