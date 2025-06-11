import { BACKGROUND_IMG } from "@/constants/Images";
import { EnrollCardDemo } from "@/demo/products-demo/EnrollCardDemo";
import { ProductType } from "@/types/ProductTypes";
import React from "react";

const HeroSection = ({herotitle}:ProductType) => {
  return (
    <div className="mt-[30px]">
      <div
        className="bg-cover bg-center h-[500px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] flex p-20 rounded-3xl"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <EnrollCardDemo herotitle={herotitle}/>
      </div>
    </div>
  );
};

export default HeroSection;
