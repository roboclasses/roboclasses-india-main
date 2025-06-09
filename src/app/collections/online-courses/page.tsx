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
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection title="Online Courses" />
      <Features />
      <RightCourse />
      <LearningPath />
      <SchoolSection />
      <AboutRobotics title="online courses" course="online courses" />
      <CarouselFe />
      <Faq />
    </div>
  );
};

export default page;
