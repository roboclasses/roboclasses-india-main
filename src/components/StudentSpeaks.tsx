"use client";

import React from "react";
import Image from "next/image";

import { STEM_ACCREDITED } from "@/constants/Images";
import WhatsAppButton from "@/demo/button-demo/WhatsAppButton";


const StudentSpeaks = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-center lg:p-20 p-10 relative bg-custom-gradient rounded-3xl">
        <div className="lg:flex hidden absolute top-0 right-0 w-36 h-36 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:space-x-72 space-x-40">
          <div className="text-white space-y-6 text-pretty">
            <h1 className="font-extrabold lg:text-5xl text-2xl">STEM Certified Programs</h1>
            <ol
              className="list-disc list-inside ml-6 space-y-2"
              style={{ letterSpacing: "0.05em" }}
            >
              <li>
                Build your college profile (under extracurricular category).
              </li>
              <li>Add a high trust and credibility to your Resume.</li>
              <li>Reliable and authentic curriculum for the 21st century.</li>
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
              src={STEM_ACCREDITED}
              height={300}
              width={400}
              alt="stem-accredited-image"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="lg:flex hidden absolute bottom-0 left-0 w-36 h-36 bg-gray-200/20 rounded-tr-full"></div>
      </div>
    </>
  );
};

export default StudentSpeaks;
