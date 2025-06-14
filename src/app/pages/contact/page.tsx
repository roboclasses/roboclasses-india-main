import Feature from "@/components/contact/Feature";
import HeroSection from "@/components/contact/Herosection";
import React from "react";

const page = () => {
  return (
    <div className='px-16 py-8  bg-white space-y-8'>
      <HeroSection />
      <Feature />
    </div>
  );
};

export default page;
