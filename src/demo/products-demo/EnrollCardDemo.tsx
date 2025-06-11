import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import RoundedButton from "../button-demo/RoundedButton";
import { ProductType } from "@/types/ProductTypes";

export function EnrollCardDemo({herotitle}:ProductType) {
  return (
    <Card className="lg:w-[500px] w-[400] h-[380px] bg-custom-gradient rounded-xl flex border-none">
      <div className="p-4">
        <CardHeader className="flex-wrap gap-10">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="lg:text-4xl text-xl font-bold">{herotitle}</p>
            <div>
              <p className="lg:text-xl text-sm">Building critical thinking and skills of the future</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-row items-center gap-2">
          <RoundedButton name="Enroll Now" type="button" />
        </CardFooter>
      </div>
    </Card>
  );
}
