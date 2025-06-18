import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import RoundedButton from "../button-demo/RoundedButton";
import { DialogDemo } from "../DialogDemo";

export function EnrollCardDemo() {
  return (
    <Card className="w-[500px] h-[300px] bg-[#F0F0F0]/50 rounded-xl flex flex-col items-center justify-center border-t-8 border-orange-500">
        <CardHeader className="flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="lg:text-4xl text-2xl font-bold">Get in touch with us</p>
            <div>
              <p className="lg:text-xl text-sm">Have question’s please feel free to contact us</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-row items-center gap-2">
          <RoundedButton
            name="Enroll Now"
            type="button"
          />
        </CardFooter>
    </Card>
  );
}
