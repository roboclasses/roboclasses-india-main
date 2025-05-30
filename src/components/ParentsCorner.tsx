"use client";
import BlueButton from "@/demo/button-demo/BlueButton";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import Data from "../data/parentsData.json";
import { QUOTE } from "@/constants/Images";
import { usePathname, useRouter } from "next/navigation";
import { STUDENT_SPEAKS } from "@/constants/links";
import { MessageSquareQuoteIcon, Quote, QuoteIcon, TextQuote } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import { TbQuote } from "react-icons/tb";
import { IoIosQuote, IoMdQuote } from "react-icons/io";

const ParentsCorner = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-20">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-extrabold">Parent’s corner</p>
        <p className="text-sm font-bold text-gray-500" style={{ letterSpacing: "0.09em" }}>
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
                    <FaQuoteLeft className="text-lg" />
                    <p className="font-mono text-lg w-[270px] line-clamp-6 mt-5 text-balance">
                      {item.review}
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {pathname !== STUDENT_SPEAKS && (
        <BlueButton
          name="View All"
          type="button"
          onClick={() => router.push(STUDENT_SPEAKS)}
        />
      )}
    </div>
  );
};

export default ParentsCorner;
