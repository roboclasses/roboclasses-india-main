"use client";
import { ARDUINO_PROJECT_IMG, ROBOTICS_PROJECT_IMG } from "@/constants/Images";
import { WHATSAPP } from "@/constants/links";
import RoundedButton from "@/demo/button-demo/RoundedButton";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

const Challenge = () => {
  const handleClick = () => window.open(WHATSAPP);

  const Data = [
    { id: 1, src: ROBOTICS_PROJECT_IMG },
    { id: 2, src: ARDUINO_PROJECT_IMG },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-20 text-white bg-custom-gradient relative rounded-3xl">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>
      <div className="flex flex-col justify-center gap-4">
        <p className="lg:text-4xl text-2xl font-bold">What Can You Make?</p>
        <div
          className="flex flex-col gap-1 justify-center text-lg"
          style={{ letterSpacing: "0.05em" }}
        >
          <p>Create a model using Lego WeDo2.0, Mindstorms Ev3,Spike</p>
          <p>Essential,Spike Prime or Arduino Kit and code the same.</p>
        </div>
        <div>
          <RoundedButton
            name="Ask Us For More Details"
            icon={<Calendar size={20} />}
            type="button"
            onClick={handleClick}
          />
          </div>
      </div>
      <div className="lg:flex justify-between items-center">
        {Data.map((item) => (
          <Image
            src={item.src}
            alt="project images"
            width={300}
            height={200}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Challenge;
