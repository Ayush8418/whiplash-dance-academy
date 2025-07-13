"use client";
import React from "react";
import {
  TextRevealCard,
} from "./ui/text-reveal-card";

const ContactHeading = () => {
  return (
    <div>
        <h1 className="text-center text-[4rem] font-bold">Contact us</h1>
        <div className="flex flex-direction-column justify-center h-[10rem] rounded-2xl w-full">
            <TextRevealCard
                text="You know the business"
                revealText="I know the chemistry"
            >
        </TextRevealCard>
        </div>
    </div>
  )
}

export default ContactHeading
