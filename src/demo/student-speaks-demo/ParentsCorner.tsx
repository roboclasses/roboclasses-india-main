import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Data from "@/data/parentsData.json";
import { FaQuoteLeft } from "react-icons/fa";

import React from "react";
import Image from "next/image";

const ParentsCorner = () => {
  return (
    <div className="flex flex-col gap-10 items-center lg:p-20 p-10">
      <div className="flex flex-col items-center lg:gap-6 gap-2">
        <p className="lg:text-5xl text-2xl font-extrabold bg-clip-text text-transparent bg-custom-gradient">
          Parent’s corner
        </p>
        <p className="lg:text-base text-xs" style={{ letterSpacing: "0.05em" }}>
          What do parents have to say
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {Data.map((item) => (
            <Card key={item.id} className="w-[320px] h-[380px] flex flex-col items-center rounded-xl dark:shadow-black bg-transparent 
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
              <hr className="px-6 border-1 border-cyan-500" />
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
        ))}
      </div>
    </div>
  );
};

export default ParentsCorner;
