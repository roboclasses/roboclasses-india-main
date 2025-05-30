import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cardType } from "@/types/CourseTypes";
import RoundedButton from "../button-demo/RoundedButton";

export function EnrollCardDemo({ title }: cardType) {
  return (
    <Card className="w-[500px] h-[310px] bg-custom-gradient rounded-xl flex border-none">
      <div className="p-4">
        <CardHeader className="flex-wrap gap-10">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="text-4xl font-bold">{title}</p>
            <div>
              <p className="text-xl" style={{ letterSpacing: "0.05em" }} >Special discount on all courses for</p>
              <p className="text-xl" style={{ letterSpacing: "0.05em" }} >home schooled students</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-row items-center gap-2">
          <RoundedButton
            name="Enquire Now"
            type="button"
          />
        </CardFooter>
      </div>
    </Card>
  );
}
