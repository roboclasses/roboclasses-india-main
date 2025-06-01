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


const ParentsCorner = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-20">
      <div className="flex flex-col items-center gap-6">
        <p className="text-5xl font-extrabold bg-clip-text text-transparent bg-custom-gradient">Parent’s corner</p>
        <p className="lg:text-base" style={{ letterSpacing: "0.05em" }}>
          What do parents have to say
        </p>
      </div>
      <section className="py-10">
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
      </section>
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
