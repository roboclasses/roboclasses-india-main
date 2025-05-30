import React from "react";

import AboutRobotics from "@/components/robotics/AboutRobotics";
import Faq from "@/components/robotics/Faq";
import RightCourse from "@/components/robotics/RightCourse";
import SchoolSection from "@/components/robotics/SchoolSection";
import CarouselFe from "@/components/CarouselFe";
import HeroSection from "@/components/robotics/HeroSection";
import Features from "@/components/robotics/Features";
import LearningPath from "@/components/robotics/LearningPath";


const page = () => {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection title="Robotics" />
      <Features />
      <RightCourse />
      <LearningPath />
      <CarouselFe />
      <AboutRobotics title="Robotics" course="Robotics" />
      <SchoolSection />
      <Faq />
    </div>
  );
};

export default page;
