import React from "react";

import { cardType } from "@/types/CourseTypes";
import { BACKGROUND_IMG } from "@/constants/Images";
import { EnrollCardDemo } from "@/demo/robotics-demo/EnrollCardDemo";


const HeroSection = ({ title }: cardType) => {
  const Data = [
    {id: 1, title: "STEM", desc: "ACCREDITED PROGRAM" },
    {id: 2, title: "2600+", desc: "Students" },
    {id: 3, title: "30+", desc: "Specialized courses" },
    {id: 4, title: "2400+", desc: "Happy parents" },
  ];

  return (
    <div className="mt-[30px]">
      <div
        className="bg-cover bg-center h-[300px] lg:h-[500px] flex p-20 rounded-t-3xl"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <EnrollCardDemo title={title} />
      </div>

      <div className="flex flex-row gap-56 justify-center py-10 bg-custom-gradient relative rounded-b-3xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>
        {Data.map((item)=>(
          <div key={item.id} className="flex flex-col gap-2 items-center text-white">
          <p className="text-3xl font-bold">{item.title}</p>
          <p className="text-sm">{item.desc}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
