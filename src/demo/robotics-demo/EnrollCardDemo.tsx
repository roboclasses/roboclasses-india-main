import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cardType } from "@/types/CourseTypes";
import RoundedButton from "../button-demo/RoundedButton";


export function EnrollCardDemo({title}:cardType) {
  return (
    <Card className="w-[500px] h-[300px] bg-custom-gradient rounded-xl border-0 flex flex-col items-center justify-center">
        <CardHeader className="flex flex-col gap-4 text-white items-center text-center">
            <p className="text-4xl font-bold">{title}</p>
            <div>
              <p className="text-xl">Building critical thinking and skills</p>
              <p className="text-xl">of the future</p>
            </div>
        </CardHeader>
        <CardFooter>
          <RoundedButton name="Enrol Now" type="button"/>
        </CardFooter>
    </Card>
  );
}
