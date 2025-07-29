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
    <div className='lg:px-16 lg:py-8 px-4 py-2 space-y-8 w-screen min-h-dvh'>
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
