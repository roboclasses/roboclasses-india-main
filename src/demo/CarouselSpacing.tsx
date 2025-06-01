import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Data from "../data/trendingData.json";
import { TRENDING_BLOGS } from "@/constants/links";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import CyanButton from "./button-demo/CyanButton";


export function CarouselSpacing() {
  return (
    <Carousel className="max-w-7xl">
      <CarouselContent className="-ml-1">
        {Data.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3 "
          >
            <div className="p-4">
              <Card
                className="max-w-full relative h-[580px] border-none shadow-2xl
                dark:shadow-none dark:bg-black mb-12 rounded-xl"
              >
                <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    height={150}
                    width={300}
                    className="transform transition-transform duration-300 hover:scale-110 h-[250px] w-full rounded-2xl"
                  />
                  <div className="flex flex-col gap-4 p-4">
                    <div className="text-sm font-semibold">
                      <ul className="list-disc list-inside text-cyan-500">
                        <li>Education</li>
                      </ul>
                    </div>
                    <p className="text-2xl font-extrabold">{item.title}</p>
                    <p className="text-sm text-[#808080] line-clamp-3" style={{ letterSpacing: "0.05em" }}>
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={`${TRENDING_BLOGS}/${item.id}`}
                    className="absolute bottom-5"
                  >
                    <CyanButton name="Read More" type="button" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
