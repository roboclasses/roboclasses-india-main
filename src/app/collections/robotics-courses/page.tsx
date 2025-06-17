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
    <div className='lg:px-16 lg:py-8 px-4 py-2 bg-white space-y-8 w-screen min-h-dvh'>
      <HeroSection title="Robotics" />
      <Features />
      <RightCourse />
      <LearningPath />
      <CarouselFe />
      <AboutRobotics title="Robotics"/>
      <SchoolSection />
      <Faq />
    </div>
  );
};

export default page;
