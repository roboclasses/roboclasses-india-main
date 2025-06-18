import * as React from "react";

import { Card, CardHeader } from "@/components/ui/card";

export function EnrollCardDemo() {
  return (
    <Card className="w-[500px] h-[300px] bg-[#F0F0F0]/50 rounded-xl flex flex-col items-center justify-center border-t-8 border-orange-500">
      <CardHeader className="flex flex-col gap-4 items-center text-center">
        <div className="flex flex-col gap-4 text-wrap text-white" style={{ letterSpacing: "0.05em" }}>
          <p className="lg:text-4xl text-2xl font-bold">We are better because of you</p>
          <p className="lg:text-xl text-lg">Our community our strength</p>
        </div>
      </CardHeader>
    </Card>
  );
}
