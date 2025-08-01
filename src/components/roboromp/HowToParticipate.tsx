import { COMPETE, PREPARE, REGISTER, SUBMIT } from "@/constants/Images";
import Image from "next/image";
import React from "react";

const HowToParticipate = () => {
  const Data = [
    { id: 1, src: REGISTER, name: "Register" },
    { id: 2, src: PREPARE, name: "Prepare" },
    { id: 3, src: SUBMIT, name: "Submit" },
    { id: 4, src: COMPETE, name: "Compete" },
  ];

  return (
    <div className="flex flex-col gap-12 items-center p-20 bg-custom-gradient text-white rounded-3xl">
      <p className="lg:text-4xl text-2xl font-extrabold text-center">How to Participate?</p>
      <div className="grid lg:grid-cols-4 grid-cols-2 w-full lg:gap-0 gap-10">
        {Data.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 items-center">
            <Image
              src={item.src}
              alt="participation image"
              width={100}
              height={100}
            />
            <p className="lg:text-3xl text-xl font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="lg:text-lg font-bold">
        Free for All. 4 Steps to win prizes and get recognition, awards and
        rewards. Check FAQ’s section for more details.
      </p>
    </div>
  );
};

export default HowToParticipate;
