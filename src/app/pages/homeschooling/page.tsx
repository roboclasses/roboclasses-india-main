import CarouselFe from "@/components/CarouselFe";
import ParentsCorner from "@/components/ParentsCorner";
import TrendingCarouselFe from "@/components/TrendingCarouselFe";
import AboutUs from "@/components/homeschooling/AboutUs";
import CardsSection from "@/components/homeschooling/CardsSection";
import Feature from "@/components/homeschooling/Feature";
import HeroSection from "@/components/homeschooling/HeroSection";
import RightCourse from "@/components/robotics/RightCourse";
import React from "react";

const page = () => {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection title="Group Classes For Home-Schooled Kids" />
      <Feature />
      <CardsSection />
      <AboutUs />
      <CarouselFe />
      <ParentsCorner />
      <RightCourse />
      <TrendingCarouselFe />
    </div>
  );
};

export default page;
