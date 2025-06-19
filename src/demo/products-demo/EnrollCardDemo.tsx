import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import RoundedButton from "../button-demo/RoundedButton";
import { ProductType } from "@/types/ProductTypes";

export function EnrollCardDemo({herotitle}:ProductType) {
  return (
    <Card className="w-[500px] lg:h-[300px] h-[350px] bg-[#F0F0F0]/50 rounded-xl flex flex-col items-center justify-center border-t-8 border-orange-500">
        <CardHeader className="flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col gap-4 text-white text-center">
            <p className="lg:text-4xl text-2xl font-bold">{herotitle}</p>
            <div>
              <p className="lg:text-xl text-sm">Building critical thinking and skills of the future</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <RoundedButton name="Enroll Now" type="button" />
        </CardFooter>
    </Card>
  );
}
