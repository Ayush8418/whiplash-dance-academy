"use client";
import React, { useEffect, useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import ourQualitiesData from '../data/ourQualities.json'

const StickyScrollRevealDemo = () => {
 

  const ourQualities = ourQualitiesData.content;

  return (
    <div className="w-full py-4 my-10">
      <StickyScroll content={ourQualities} />
    </div>
  )
}

export default StickyScrollRevealDemo
