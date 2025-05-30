import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import RoundedButton from "../button-demo/RoundedButton";
import { DialogDemo } from "../DialogDemo";

export function EnrollCardDemo() {
  return (
    <Card className="w-[500px] h-[280px] bg-custom-gradient rounded-xl flex border-none">
      <div className="p-4">
        <CardHeader className="flex-wrap gap-10">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="text-4xl font-bold">Get in touch with us</p>
            <div>
              <p className="text-xl">Have question’s please feel free  </p>
              <p className="text-xl">to contact us</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <RoundedButton
            name="Enroll Now"
            type="button"
          />
        </CardFooter>
      </div>
    </Card>
  );
}
