import Feature from "@/components/contact/Feature";
import HeroSection from "@/components/contact/Herosection";
import React from "react";

const page = () => {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection />
      <Feature />
    </div>
  );
};

export default page;
