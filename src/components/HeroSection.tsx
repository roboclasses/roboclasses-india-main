"use client";

import { BACKGROUND_IMG } from "@/constants/Images";
import { DialogDemo } from "@/demo/DialogDemo";
import { FormDemo } from "@/demo/FormDemo";
import WhiteButton from "@/demo/button-demo/WhiteButton";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaCirclePlay, FaDiamond } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Data from "@/data/parentsData.json";

const HeroSection = () => {
  const pathname = usePathname(); // This detects route changes

  const stats = [
    { title: "STEM", desc: "ACCREDITED PROGRAM" },
    { title: "2600+", desc: "Students" },
    { title: "30+", desc: "Specialized courses" },
    { title: "2400+", desc: "Happy parents" },
  ];

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  const displayCount1 = useTransform(
    count1,
    (value) => `${Math.floor(value)}+`
  );
  const displayCount2 = useTransform(
    count2,
    (value) => `${Math.floor(value)}+`
  );
  const displayCount3 = useTransform(
    count3,
    (value) => `${Math.floor(value)}+`
  );

  useEffect(() => {
    const animation1 = animate(count1, 2600, {
      duration: 2,
      ease: "easeOut",
      delay: 0.2,
    });
    const animation2 = animate(count2, 30, {
      duration: 2,
      ease: "easeOut",
      delay: 0.2,
    });
    const animation3 = animate(count3, 2400, {
      duration: 2,
      ease: "easeOut",
      delay: 0.2,
    });

    return () => {
      animation1.stop();
      animation2.stop();
      animation3.stop();
    };
  }, [count1, count2, count3, pathname]); // <-- Animation re-triggers on every route change

  return (
    <div className="mt-[30px]">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[500px] lg:h-[630px] flex lg:flex-row flex-col lg:gap-72 lg:justify-center 
        items-center overflow-hidden rounded-t-3xl lg:rounded-b-none rounded-b-3xl"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <div className="lg:flex hidden flex-col gap-8">
          <div className="flex flex-col gap-4 text-5xl font-extrabold text-white">
            <p>Building critical</p>
            <p>thinking and skills</p>
            <div className="flex gap-1 items-center">
              <p>of the</p>
              <p className="text-transparent bg-clip-text bg-custom-gradient flex items-end gap-1">
                future <FaDiamond size={14} className="text-lime-400/40" />
              </p>
            </div>
          </div>
          <p className="text-accent">Coding and Robotics courses for kids!</p>
          <div className="flex items-center gap-6">
            <DialogDemo />
            <WhiteButton
              name="Demo Tour"
              icon={<FaCirclePlay size={25} />}
              type="button"
            />
          </div>
          <div className="flex items-center">
            {Data.map((item, index) => (
              <Image
                key={item.id}
                src={item.pic}
                alt={item.alt}
                height={40}
                width={40}
                className="rounded-full mr-[-12px] border-2 border-white shadow-md"
                style={{ zIndex: Data.length - index }}
              />
            ))}
            <div className="flex items-center gap-1 ml-6 text-white font-semibold text-lg">
              <p className="bg-clip-text text-transparent bg-custom-gradient">
                2.6k+
              </p>
              <p>Enrolment</p>
            </div>
          </div>
        </div>
        <FormDemo /> {/* Student Registration Form */}
      </div>

      {/* Stats Section */}
      <div className="lg:flex hidden flex-row lg:gap-56 gap-5 justify-center lg:py-10 py-5 bg-custom-gradient relative rounded-b-3xl">

        <div className="lg:flex hidden absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="lg:flex hidden absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>

        {stats.map((item, index) => {
          let animatedValue;
          if (index === 1) animatedValue = displayCount1;
          if (index === 2) animatedValue = displayCount2;
          if (index === 3) animatedValue = displayCount3;

          const isAnimated = item.title.includes("+");

          return (
            <div
              key={item.title}
              className="flex flex-col gap-2 items-center text-white"
            >
              {isAnimated && animatedValue ? (
                <motion.p className="lg:text-3xl text-xs font-bold">
                  {animatedValue}
                </motion.p>
              ) : (
                <p
                  className={`${
                    index === 0 ? "lg:text-5xl text-xs" : "lg:text-3xl text-xs"
                  } font-bold`}
                >
                  {item.title}
                </p>
              )}
              <p className="lg:text-sm text-xs">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
