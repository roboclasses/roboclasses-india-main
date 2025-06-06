"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  // CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import {
  COMPUTER,
  FA_CHILD,
  FLEXIBLE_TIME,
  STEM_COURSES,
} from "@/constants/Images";
import { Label } from "@/components/ui/label";
import { featureTypes } from "@/types/Featuretypes";
import { DialogDemo } from "./DialogDemo";
import Link from "next/link";
import { TbStarFilled, TbTagStarred } from "react-icons/tb";
import { Star } from "lucide-react";

export function CardDemo({
  course,
  // originalPrice,
  // overridenPrice,
  // emi,
  age,
  classes,
  src,
  label,
  href,
}: featureTypes) {
  const validHref = href || "/";

  return (
    <Card className="lg:w-[400px] w-[360px] h-[720px] dark:bg-slate-800/40 relative dark:shadow-none shadow-2xl m-16 border-none rounded-lg">
      <Image
        src={src}
        alt={"feature-image"}
        height={335}
        width={432}
        className="h-[300px] w-[400px] rounded-t-lg"
      />
      <CardContent className="gap-4 flex flex-col mt-5">
        <Label className="text-sm">{label}</Label>
        <strong className="text-2xl font-extrabold">{course}</strong>
        <div className="grid grid-cols-1 gap-4">
          {/* Features */}
          <div>
            <div className="flex items-center gap-2">
              <Label className="text-md font-semibold text-gray-500">Features</Label>
              <hr className="border-1 rounded-lg border-gray-300 w-full" />
            </div>
            <ul className="space-y-2 mt-2 pl-2">
              <li>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={COMPUTER}
                    alt="child-icon"
                    height={16}
                    width={16}
                  />
                  <p>{classes}</p>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={FLEXIBLE_TIME}
                    alt="child-icon"
                    height={16}
                    width={16}
                  />
                  <p>Flexible timing</p>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={STEM_COURSES}
                    alt="child-icon"
                    height={16}
                    width={16}
                  />
                  <p>STEM Accredited</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Age Group */}
           <div>
            <div className="flex items-center gap-2">
              <Label className="text-md font-semibold text-gray-500">Age</Label>
              <hr className="border-1 rounded-lg border-gray-300 w-full" />
            </div>
            <ul className="space-y-2 mt-2 pl-2">
             <li>
              <div className="flex flex-row gap-2 items-center">
                <Image src={FA_CHILD} alt="child-icon" height={12} width={12} />
                <p>{age}</p>
              </div>
             </li>
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-row lg:gap-16 gap-8 items-center justify-center absolute bottom-0">
        <DialogDemo />
        <Link href={validHref}>
          <Button
            variant="outline"
            className="px-6 h-12 bg-muted hover:bg-muted/50 focus:bg-muted/100 dark:hover:bg-black"
          >
            Course Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
