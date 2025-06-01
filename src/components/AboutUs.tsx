import { AboutOne } from "@/data/AboutData";
import { DialogDemo } from "@/demo/DialogDemo";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-10 items-center p-20 bg-white rounded-3xl shadow">
      <div className="flex flex-col text-center gap-6 items-center">
        <p className="font-extrabold lg:text-5xl text-xl bg-clip-text text-transparent bg-custom-gradient p-2">
          Why study coding and robotics with us?
        </p>

        <p className="lg:text-base text-sm" style={{ letterSpacing: "0.05em" }}>
          Online learning offers a new way to explore?
        </p>
      </div>
      <div className="flex flex-col flex-wrap gap-6 items-center" style={{ letterSpacing: "0.05em" }} >
        <p className="font-bold text-xl text-orange-700">Why study with us?</p>

        <div className="flex flex-row items-center gap-4">
          {AboutOne.map((about) => (
            <div className="flex flex-col gap-2" key={about.title}>
              <Image src={about.src} alt={about.alt} height={30} width={30} />
              <p className="font-bold">{about.title}</p>
              <div className="lg:text-base text-balance font-medium w-[350px]">
                <p>{about.descOne}</p>
                <p>{about.descTwo}</p>
              </div>
            </div>
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
