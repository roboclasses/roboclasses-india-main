import Feature from "@/components/contact/Feature";
import HeroSection from "@/components/contact/Herosection";
import React from "react";

const page = () => {
  return (
    <div className='lg:px-16 lg:py-8 px-4 py-2 space-y-8 w-screen min-h-dvh'>
      <HeroSection />
      <Feature />
    </div>
  );
};

export default page;
