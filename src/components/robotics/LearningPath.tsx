"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AIML, BIKE, CAR, PLANE, VR } from "@/constants/Images";
import { WHATSAPP } from "@/constants/links";
import WhatsAppButton from "@/demo/button-demo/WhatsAppButton";
import ProgressBarDemo from "@/demo/robotics-demo/ProgressBarDemo";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const LearningPath = () => {
  const Items = [
    {
      src: PLANE,
      age: "3 - 6",
      description: "Basic science with STEM courses",
    },
    {
      src: CAR,
      age: "6 - 9",
      description: "Introduction to Robotics and programming",
    },
    {
      src: BIKE,
      age: "9 - 13",
      description: "Advance Robotics and programming",
    },
    {
      src: VR,
      age: "13 - 18",
      description:
        "Programming  AR, VR course, Iot and advanced robotics courses",
    },
    { src: AIML, age: "18+", description: "Machine Learning and AI" },
  ];

  return (
    <div className="flex flex-col gap-8 items-center p-20">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold">Child’s learning path</h1>
        <p className="text-sm font-bold text-gray-500" style={{ letterSpacing: "0.05em" }}>Recommended learning path</p>
      </div>
      <div className="flex flex-row gap-6 relative">
        {Items.map((item) => (
          <Card
            className="w-[220px] dark:bg-slate-800/40 shadow-md 
             hover:shadow-2xl transition-shadow duration-150 delay-75 
             ease-linear dark:shadow-black bg-[#F0F0F0] relative h-[250px]"
            key={item.age}
          >
            <CardContent className="flex flex-col items-center gap-4 py-4 pb-12 ">
              <Image
                src={item.src}
                alt="resource-image"
                width={146.44}
                height={90}
                className="rounded-xl"
              />
              <div className="flex flex-col items-center gap-2 absolute bottom-12">
                <strong className="font-extrabold">{item.age}</strong>
                <p className="text-xs text-gray-500 text-center">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
        <div className='absolute bottom-2 left-20'>
        <ProgressBarDemo />
        </div>
      </div>
      <div>
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default LearningPath;
