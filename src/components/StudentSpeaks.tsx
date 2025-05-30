"use client";

import React from "react";
import Image from "next/image";

import { STEM_ACCREDITED } from "@/constants/Images";
import WhatsAppButton from "@/demo/button-demo/WhatsAppButton";


const StudentSpeaks = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center p-20 relative bg-custom-gradient rounded-3xl">
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="grid grid-cols-2 items-center space-x-72">
          <div className="text-white space-y-6">
            <h1 className="font-bold text-4xl">STEM Certified Programs</h1>
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
              height={400}
              width={400}
              alt="stem-accredited-image"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-gray-200/20 rounded-tr-full"></div>
      </div>
    </>
  );
};

export default StudentSpeaks;
