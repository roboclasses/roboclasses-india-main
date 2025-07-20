import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import RoundedButton from "../button-demo/RoundedButton";
import CyanButton from "../button-demo/CyanButton";

export function EnrollCardDemo() {
  return (
    <Card className="w-[500px] h-[300px] bg-[#F0F0F0]/50 rounded-xl flex flex-col items-center justify-center border-t-8 border-orange-500">
      <CardHeader className="flex flex-col gap-4 items-center text-center">
        <div className="flex flex-col gap-4 text-wrap text-white">
          <p className="lg:text-4xl text-2xl font-bold">
            Robotics and programming courses for kids
          </p>
          <p className="lg:text-xl text-sm">
            Building critical thinking and skills of the future
          </p>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-row items-center gap-3">
        <RoundedButton name="Free Trial Class Registration" type="button" />
      </CardFooter>
    </Card>
  );
}
