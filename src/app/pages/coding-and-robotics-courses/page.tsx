import FormSection from "@/components/coding-and-robotics-courses/FormSection";
import HeroSection from "@/components/coding-and-robotics-courses/HeroSection";
import AboutUs from "@/components/AboutUs";
import CarouselFe from "@/components/CarouselFe";
import ParentsCorner from "@/components/ParentsCorner";
import TrendingCarouselFe from "@/components/TrendingCarouselFe";
import CardsSection from "@/components/homeschooling/CardsSection";
import React from "react";
import RightCourse from "@/components/robotics/RightCourse";

const page = () => {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection />
      <CardsSection />
      <FormSection />
      <AboutUs />
      <RightCourse />
      <ParentsCorner />
      <CarouselFe />
      <TrendingCarouselFe />
    </div>
  );
};

export default page;
