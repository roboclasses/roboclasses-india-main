"use client";

import React from "react";
import Image from "next/image";

import { PLANE } from "@/constants/Images";
import WhatsAppButton from "@/demo/button-demo/WhatsAppButton";


const RightCourse = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center p-20 relative bg-custom-gradient rounded-3xl">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="grid grid-cols-2 items-center space-x-72">
          <div className="text-white space-y-6">
            <h1 className="lg:font-extrabold font-bold text-5xl">Which are the latest, in demand course?</h1>
            <ol
              className="list-disc list-inside ml-6 space-y-2"
              style={{ letterSpacing: "0.05em" }}
            >
              <li>
                What age appropriate course is right for my child?
              </li>
              <li>How will my child use what he has learnt and how will it help him?</li>
              <li>Speak to our specialist who can guide you and help you decide.</li>
            </ol>
            <div className="space-y-1" style={{ letterSpacing: "0.05em" }}>
              <p>
                Speak to our specialist who can guide you and help you decide.
              </p>
              <p>Message us on What’s app and we’ll call you right back.</p>
            </div>
            <WhatsAppButton />
          </div>
          <div>
            <Image
              src={PLANE}
              height={200}
              width={300}
              alt="plane-image"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-gray-200/20 rounded-tr-full"></div>
      </div>
    </>
  );
};

export default RightCourse;
