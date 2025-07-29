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
    <div className='lg:px-16 lg:py-8 px-4 py-2 space-y-8 w-screen min-h-dvh'>
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
