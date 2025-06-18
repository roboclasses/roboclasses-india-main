import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cardType } from "@/types/CourseTypes";
import RoundedButton from "../button-demo/RoundedButton";

export function EnrollCardDemo({ title }: cardType) {
  return (
    <Card className="w-[500px] lg:h-[300px] h-[340px] bg-[#F0F0F0]/50 rounded-xl flex flex-col items-center justify-center border-t-8 border-orange-500">
        <CardHeader className="flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="lg:text-4xl text-2xl font-bold" style={{ letterSpacing: "0.05em" }}>{title}</p>
            <div>
              <p className="lg:text-xl text-sm" style={{ letterSpacing: "0.05em" }} >Special discount on all courses for home schooled students</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-row items-center gap-2">
          <RoundedButton
            name="Enquire Now"
            type="button"
          />
        </CardFooter>
    </Card>
  );
}
