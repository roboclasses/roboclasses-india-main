import { GUIDELINES } from "@/constants/Images";
import { GuideLinesData } from "@/data/AboutData";
import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Guidelines = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-20">
      <div className="flex flex-col justify-center gap-8">
        <p className="lg:text-4xl text-2xl font-bold">Guidelines</p>
        <ul className="flex flex-col gap-3">
          {GuideLinesData.map((item, index) => (
            <li
              className="flex flex-row items-center gap-3 lg:w-[620px] w-[300px]"
              key={index}
            >
              <div className="w-10 h-10">
                <FaLocationArrow className="text-cyan-500 rotate-45" />
              </div>
              <p className="lg:text-lg">{item.point}</p>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={GUIDELINES}
        alt="guidelines image"
        width={650}
        height={600}
        className="mr-8"
      />
    </div>
  );
};

export default Guidelines;
