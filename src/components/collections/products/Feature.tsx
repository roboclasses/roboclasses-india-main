import { Label } from "@/components/ui/label";
import { DialogDemo } from "@/demo/DialogDemo";
import PriceCardDemo from "@/demo/products-demo/PriceCardDemo";
import React from "react";

const Feature = () => {
  return (
    <div className="flex justify-center lg:p-20 p-10 bg-custom-gradient relative rounded-3xl">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-200/20 rounded-tr-full"></div>
      <div className="flex flex-col items-center justify-center gap-6 text-white">
        <div className="text-center space-y-3">
          <h1 className="lg:text-4xl text-xl font-extrabold">Feature Course</h1>
          <p className="lg:text-lg text-sm">Quick overview</p>
        </div>
        <PriceCardDemo />
        <Label className="font-bold text-base">
          Take a FREE class before your enroll.
        </Label>
        <DialogDemo />
      </div>
    </div>
  );
};

export default Feature;
