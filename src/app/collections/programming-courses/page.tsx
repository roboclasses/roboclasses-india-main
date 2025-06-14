import React from "react";

import CarouselFe from "@/components/CarouselFe";
import Features from "@/components/programming/Features";
import AboutRobotics from "@/components/robotics/AboutRobotics";
import Faq from "@/components/robotics/Faq";
import HeroSection from "@/components/robotics/HeroSection";
import LearningPath from "@/components/robotics/LearningPath";
import RightCourse from "@/components/robotics/RightCourse";
import SchoolSection from "@/components/robotics/SchoolSection";


const page = () => {
  return (
    <div className="px-16 py-8  bg-white space-y-8">
      <HeroSection title="Programming" />
      <Features />
      <RightCourse />
      <LearningPath />
      <SchoolSection />
      <AboutRobotics title="Programming"/>
      <CarouselFe />
      <Faq />
    </div>
  );
};

export default page;
