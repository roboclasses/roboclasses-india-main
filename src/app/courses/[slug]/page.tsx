import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

import CarouselFe from "@/components/CarouselFe";
import Enroll from "@/components/collections/products/Enroll";
import Feature from "@/components/collections/products/Feature";
import HeroSection from "@/components/collections/products/Hero";
import Level from "@/components/collections/products/Level";
import ParentsCorner from "@/components/ParentsCorner";
import Faq from "@/components/robotics/Faq";

import Data from "@/data/ProductData.json";
import { Product } from "@/types/ProductTypes";
import { DialogDemo } from "@/demo/DialogDemo";

import React from "react";
import { notFound } from "next/navigation";
import { TbBookFilled } from "react-icons/tb";
import { FaCertificate } from "react-icons/fa";

interface Params {params: { slug: string }}

const page = ({ params }: Params) => {
  const product: Product | undefined = Data.find((item) => item.slug.trim().toLowerCase() === params.slug.trim().toLowerCase());

  // Handle edge cases
  if (!product) return notFound();

  return (
    <>
      <div className="lg:px-16 px-4 lg:py-8 py-2  bg-white space-y-20 w-screen min-h-dvh">
        <HeroSection herotitle={product.herotitle} />
        <Feature
          featureage={product.featureage}
          featurebatchsize={product.featurebatchsize}
          featureclasses={product.featureclasses}
        />

        <div className="flex flex-col items-center justify-center gap-20 lg:px-20 px-10">
          {/* Learn section */}
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col text-center items-center">
              <p className="font-extrabold lg:text-4xl text-xl bg-clip-text text-transparent bg-custom-gradient lg:p-2">
                Course details
              </p>
              <p
                className="lg:text-base text-xs"
                style={{ letterSpacing: "0.05em" }}
              >
                Quick overview
              </p>
            </div>
            <div
              className="flex flex-col flex-wrap gap-6 items-center"
              style={{ letterSpacing: "0.05em" }}
            >
              <p className="font-bold lg:text-xl text-orange-500 flex gap-2 items-center">
                <TbBookFilled size={20} />
                Learn
              </p>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {product.learncoursescard.map((item) => (
                  <Card
                    key={item.id}
                    className="flex flex-col gap-2 p-4 lg:h-[200px] h-[160px] lg:w-[350px] w-[300px] border-1 relative"
                  >
                    <div className="absolute top-0 right-0 w-40 h-full bg-orange-200 rounded-l-full opacity-10"></div>
                    <p className="font-bold lg:text-base text-sm">
                      {item.title}
                    </p>

                    <p
                      className="lg:text-sm text-xs text-balance font-medium text-gray-500"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {item.desc}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-5">
                <DialogDemo />
              </div>
            </div>
          </div>

          {/* Syllabus section */}
          <Card className="w-[1100px] bg-custom-gradient text-white">
            <Accordion
              type="single"
              collapsible
              className="w-full font-bold p-5"
              style={{ letterSpacing: "0.05em" }}
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="lg:text-2xl text-xl font-extrabold" >
                  Syllabus
                </AccordionTrigger>
                <AccordionContent className="text-accent space-y-2">
                  {product.learnsyllabus.map((item) => (
                    <ul key={item.id} className="list-disc list-inside">
                      <li>{item.title}</li>
                    </ul>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Benefits and certification section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-[1100px]">
            {/* Benefits */}
            <div className="space-y-6">
              <h1 className="flex items-center gap-2 text-orange-500 font-bold lg:text-xl text-lg">
                <TbBookFilled size={20} /> Benefits
              </h1>
              <div
                className="space-y-2 ml-6 text-balance"
                style={{ letterSpacing: "0.05em" }}
              >
                {product.learnbenefits.map((item) => (
                  <ul
                    key={item.id}
                    className="list-disc list-inside font-medium"
                  >
                    <li>{item.benefit}</li>
                  </ul>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div className="space-y-6 text-balance">
              <h1 className="flex items-center gap-2 text-orange-500 font-bold lg:text-xl text-lg">
                <FaCertificate /> Certification
              </h1>
              <p className="font-medium ml-6">
                Certificate will be awarded after successful completion of each
                level. Student can opt for advance level once they finish their
                basic level course.
              </p>
            </div>
          </div>
        </div>

        <Enroll
          enrollbatch={product.enrollbatch}
          enrollclass={product.enrollclass}
          enrolltitle={product.enrolltitle}
        />
        <Level />
        <ParentsCorner />
        <CarouselFe />
        <Faq />
      </div>
    </>
  );
};

export default page;
