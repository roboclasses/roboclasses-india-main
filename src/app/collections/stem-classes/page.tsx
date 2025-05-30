const CarouselFe = dynamic(() => import("@/components/CarouselFe"));
import AboutRobotics from "@/components/robotics/AboutRobotics";
import Faq from "@/components/robotics/Faq";
import JoinOurTeacherCard from "@/components/robotics/JoinOurTeacherCard";
import RightCourse from "@/components/robotics/RightCourse";
import SchoolSection from "@/components/robotics/SchoolSection";
const HeroSection = dynamic(() => import("@/components/robotics/HeroSection"));
const Features = dynamic(() => import("@/components/stem/Features"));
const LearningPath = dynamic(() => import("@/components/robotics/LearningPath"));

import dynamic from "next/dynamic";
import React from "react";


const page = () => {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection title="STEM" />
      <Features />
      <RightCourse />
      <LearningPath />
      <SchoolSection />
      <AboutRobotics title="STEM" course="STEM" />
      <CarouselFe />
      <Faq />
    </div>
  );
};

export default page;
