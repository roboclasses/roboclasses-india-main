"use client";

import { Card, CardContent, CardHeader } from "./ui/card";

import CyanButton from "@/demo/button-demo/CyanButton";
import Data from "../data/parentsData.json";
import { STUDENT_SPEAKS } from "@/constants/links";
import { FaQuoteLeft } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ParentsCorner = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center lg:p-20 p-10">
      <div className="flex flex-col items-center lg:gap-6 gap-2">
        <p className="lg:text-5xl text-2xl font-extrabold bg-clip-text text-transparent bg-custom-gradient">
          Parent’s corner
        </p>
        <p className="lg:text-base text-xs" style={{ letterSpacing: "0.05em" }}>
          What do parents have to say
        </p>
      </div>
      {/* <section className="py-10">
        <div className="container mx-auto">
          <Swiper
            spaceBetween={14}
            slidesPerView={4}
            effect="coverflow"
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index} className="mb-10 pl-2">
                <Card
                  className="w-[320px] h-[380px] flex flex-col items-center rounded-xl dark:shadow-black
                 bg-white dark:bg-black dark:text-white relative shadow-none"
                >
                  <CardHeader className="rounded-lg mb-2">

                    <div className="flex flex-row gap-2 dark:bg-gray-600 rounded-full items-center">
                      <Image
                        src={item.pic}
                        alt={item.alt}
                        height={62}
                        width={62}
                        className="rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-bold ">{item.name}</p>
                        <Image
                          src={item.rating}
                          alt={item.alt}
                          height={50}
                          width={777}
                          className="ml-2"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <FaQuoteLeft className="text-lg text-accent-foreground" />
                    <p className="text-lg w-[270px] line-clamp-6 mt-5 text-balance" style={{letterSpacing: '0.05em'}}>{item.review}</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
      <Carousel className="lg:max-w-6xl max-w-sm">
        <CarouselContent className="-ml-1">
          {Data.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-10">
                <Card className="w-[320px] h-[380px] flex flex-col items-center rounded-xl dark:shadow-black bg-transparent
                   dark:bg-black dark:text-white relative border border-cyan-500 shadow-2xl shadow-cyan-200">
                  <CardHeader className="rounded-lg mb-2">
                    <div className="flex flex-row gap-2 dark:bg-gray-600 rounded-full items-center">
                      <Image
                        src={item.pic}
                        alt={item.alt}
                        height={62}
                        width={62}
                        className="rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-bold ">{item.name}</p>
                        <Image
                          src={item.rating}
                          alt={item.alt}
                          height={50}
                          width={777}
                          className="ml-2"
                        />
                      </div>
                    </div>
                    
                  </CardHeader>
                  <hr className="px-6 border-1 border-cyan-500"/>
                  <CardContent>
                    <FaQuoteLeft className="text-lg text-cyan-500" />
                    <p
                      className="text-lg w-[270px] line-clamp-6 mt-5 text-balance"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {item.review}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {pathname !== STUDENT_SPEAKS && (
        <CyanButton
          name="View All"
          type="button"
          onClick={() => router.push(STUDENT_SPEAKS)}
        />
      )}
    </div>
  );
};

export default ParentsCorner;
