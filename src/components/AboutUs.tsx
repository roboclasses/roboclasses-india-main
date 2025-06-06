import { AboutOne } from "@/data/AboutData";
import { DialogDemo } from "@/demo/DialogDemo";
import Image from "next/image";
import React from "react";
import { Card } from "./ui/card";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:gap-10 gap-8 items-center lg:p-20 p-10">
      <div className="flex flex-col text-center lg:gap-6 gap-2 items-center">
        <p className="font-extrabold lg:text-5xl text-2xl bg-clip-text text-transparent bg-custom-gradient lg:p-2">
          Why study coding and robotics with us?
        </p>

        <p className="lg:text-base text-xs" style={{ letterSpacing: "0.05em" }}>
          Online learning offers a new way to explore?
        </p>
      </div>
      <div className="flex flex-col flex-wrap gap-6 items-center" style={{ letterSpacing: "0.05em" }} >
        <p className="font-bold lg:text-xl text-orange-700">Why study with us?</p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {AboutOne.map((about) => (
            <Card className="flex flex-col gap-2 p-4 lg:h-[200px] h-[160px] lg:w-[350px] w-[300px] border-1 relative" key={about.title}>
              <div className="absolute top-0 right-0 w-40 h-full bg-orange-200 rounded-l-full opacity-10"></div>
              <Image src={about.src} alt={about.alt} height={30} width={30} />
              <p className="font-bold lg:text-base text-sm">{about.title}</p>
              <div className="lg:text-sm text-xs text-balance font-medium" style={{letterSpacing: "0.05em"}}>
                <p>{about.descOne}</p>
                <p>{about.descTwo}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-5">
          <DialogDemo />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
