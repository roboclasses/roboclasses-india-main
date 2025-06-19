"use client";

import React from "react";
import Image from "next/image";
import WhatsAppButton from "@/demo/button-demo/WhatsAppButton";
import { RIGHT_COURSE } from "@/constants/Images";

const RightCourse = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center lg:p-20 p-10 relative bg-custom-gradient rounded-3xl">
        <div className="lg:flex hidden absolute top-0 right-0 w-36 h-36 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:space-x-72 space-x-40">
          <div className="flex flex-col items-center gap-6 text-white">
            <h1 className="lg:font-extrabold font-bold lg:text-5xl text-2xl text-center">Which are the latest, in demand course?</h1>
            <ol
              className="list-disc list-inside ml-6 space-y-2 lg:text-base text-sm"
              style={{ letterSpacing: "0.05em" }}
            >
              <li>
                What age appropriate course is right for my child?
              </li>
              <li>How will my child use what he has learnt and how will it help him?</li>
              <li>Speak to our specialist who can guide you and help you decide.</li>
            </ol>
            <div className="space-y-1 lg:text-base text-sm" style={{ letterSpacing: "0.05em" }}>
              <p>
                Speak to our specialist who can guide you and help you decide.
              </p>
              <p>Message us on What’s app and we’ll call you right back.</p>
            </div>
            <WhatsAppButton />
          </div>
          <div>
            <Image
              src={RIGHT_COURSE}
              height={400}
              width={500}
              alt="plane-image"
            />
          </div>
        </div>
        <div className="lg:flex hidden absolute bottom-0 left-0 w-36 h-36 bg-gray-200/20 rounded-tr-full"></div>
      </div>
    </>
  );
};

export default RightCourse;
