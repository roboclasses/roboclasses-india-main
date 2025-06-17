"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AIML, BIKE, CAR, PLANE, VR } from "@/constants/Images";
import WhatsAppButton from "@/demo/button-demo/WhatsAppButton";
import ProgressBarDemo from "@/demo/robotics-demo/ProgressBarDemo";
import Image from "next/image";
import React from "react";

const LearningPath = () => {
  const Items = [
    {
      id: 1,
      age: "6 - 9",
      description: "Introduction to Robotics and programming",
    },
    {
      id: 2,
      age: "9 - 13",
      description: "Advance Robotics and programming",
    },
    {
      id: 3,
      age: "13 - 18",
      description: "Programming  AR, VR course, Iot and advanced robotics courses",
    },
    { id: 4, 
      age: "18+", 
      description: "Machine Learning and AI"
    },
  ];

  return (
    <div className="flex flex-col lg:gap-10 gap-8 items-center lg:p-20 p-10">
      <div className="flex flex-col lg:gap-6 gap-2 text-center">
        <h1 className="lg:text-4xl text-2xl font-bold">
          Child’s learning path
        </h1>
        <p className="lg:text-base text-xs" style={{ letterSpacing: "0.05em" }}>
          Recommended learning path
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 relative">
        {Items.map((item) => (
          <Card
            className="lg:w-[220px] w-[150px] lg:h-[250px] h-[200px] dark:bg-slate-800/40 shadow-md hover:shadow-2xl transition-shadow duration-150 delay-75 
            ease-linear dark:shadow-black relative bg-muted"
            key={item.age}
          >
            <CardContent className="flex flex-col items-center gap-4 py-4">
              <Image
                src={AIML}
                alt="resource-image"
                width={146.44}
                height={90}
                className="rounded-xl"
              />
              <div className="flex flex-col items-center gap-2 absolute bottom-12">
                <strong className="font-extrabold">{item.age}</strong>
                <p className="lg:text-sm text-xs text-center">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        <div className="absolute bottom-2 left-20 lg:flex hidden">
          <ProgressBarDemo />
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
