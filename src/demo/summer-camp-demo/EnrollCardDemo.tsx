"use client";

import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import { cardType } from "@/types/CourseTypes";
import RoundedButton from "../button-demo/RoundedButton";

export function EnrollCardDemo({ title }: cardType) {

  return (
    <Card className="w-[500px] h-[320px] bg-[#F0F0F0]/50 rounded-xl flex flex-col items-center justify-center border-t-8 border-orange-500">
             <CardHeader className="flex flex-col gap-4 items-center text-center">
               <p
                 className="lg:text-4xl text-2xl font-bold"
                 style={{ letterSpacing: "0.05em" }}
               >
                 {title}
               </p>
               <div>
                 <p className="lg:text-xl text-sm">
                   Building critical thinking and skills of the future
                 </p>
               </div>
             </CardHeader>
        <CardFooter className="flex flex-row items-center gap-2">
          <RoundedButton
            name="Register Now"
            type="button"
          />
        </CardFooter>
    </Card>
  );
}
