import { LEAGUE, ROBO_ROMP } from "@/constants/Images";
import { DialogDemo } from "@/demo/DialogDemo";
import Image from "next/image";
import React from "react";

const Competition = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:p-20 p-10 bg-white dark:bg-black">
      <div className="flex flex-col justify-center gap-6 max-w-lg">
        <p className="lg:text-4xl text-2xl font-bold">Competition time</p>
        <div className="lg:text-base text-sm">
          <ul className="list-disc list-inside flex flex-col gap-4">
            <li style={{ letterSpacing: "0.05em" }}>
              Learn about the competition
            </li>
            <li style={{ letterSpacing: "0.05em" }}>
              How your child can participate.
            </li>
            <li style={{ letterSpacing: "0.05em" }}>
              Ask question to the experts
            </li>
          </ul>
        </div>
        <p className="lg:text-base text-sm" style={{ letterSpacing: "0.05em" }}>
          Speak to our specialist who can guide you and help you enroll and
          prepare Message us on What’s app and we’ll call you right back.
        </p>
        <DialogDemo />
      </div>
      <Image src={ROBO_ROMP} alt="lego league image" width={500} height={300} />
    </div>
  );
};

export default Competition;
