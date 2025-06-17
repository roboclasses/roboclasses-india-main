import CarouselFe from "@/components/CarouselFe";
import Features from "@/components/online-courses/Features";
import AboutRobotics from "@/components/robotics/AboutRobotics";
import Faq from "@/components/robotics/Faq";
import HeroSection from "@/components/robotics/HeroSection";
import LearningPath from "@/components/robotics/LearningPath";
import RightCourse from "@/components/robotics/RightCourse";
import SchoolSection from "@/components/robotics/SchoolSection";

import React from "react";

const page = () => {
  return (
    <div className='lg:px-16 lg:py-8 px-4 py-2 bg-white space-y-8 w-screen min-h-dvh'>
      <HeroSection title="Online Courses" />
      <Features />
      <RightCourse />
      <LearningPath />
      <SchoolSection />
      <AboutRobotics title="online courses"/>
      <CarouselFe />
      <Faq />
    </div>
  );
};

export default page;
