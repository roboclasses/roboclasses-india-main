import { AboutHomeSchooling } from "@/data/AboutData";
import { DialogDemo } from "@/demo/DialogDemo";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-6 items-center p-20 bg-white dark:bg-black rounded-3xl">

      <div className="flex flex-col text-center gap-4">
        <p className="font-bold text-4xl">
          Why study robotics and why with us?
        </p>
        <p
          className="text-sm font-bold text-gray-500"
          style={{ letterSpacing: "0.05em" }}
        >
          Online learning offers a new way to explore?
        </p>
      </div>
      <div className="flex flex-col flex-wrap gap-6 items-center">
          <p className="font-extrabold text-lg text-orange-700">
            Why study with us?
          </p>
          

        <div className="flex flex-row items-center gap-4">
          {AboutHomeSchooling.map((about) => (
            <div className="flex flex-col gap-2" key={about.title}>
              <Image src={about.src} alt={about.alt} height={30} width={30} />
              <p className="font-bold">{about.title}</p>
              <div
                className="text-xs font-semibold text-gray-600"
                style={{ letterSpacing: "0.05em" }}
              >
                <p>{about.descOne}</p>
                <p>{about.descTwo}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <DialogDemo />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
