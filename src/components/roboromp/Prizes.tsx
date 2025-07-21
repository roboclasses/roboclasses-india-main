import {
  FIRST_PRIZE,
  PRIZE_MONEY,
  SECONED_PRIZE,
  THIRD_PRIZE,
} from "@/constants/Images";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "../ui/card";

const Prizes = () => {
  //     {
  //       one: 750,
  //       two: 300,
  //     },
  //     {
  //         one: 500,
  //         two: 200,
  //     },
  //     {
  //         one: 250,
  //         two: 200,
  //     },
  //   ];

  return (
    <div className="flex flex-col gap-20 items-center p-20">
      <div className="flex flex-col gap-4 items-center">
        <p className="lg:text-4xl text-2xl font-bold">Prizes</p>
        <div
          className="flex flex-col items-center text-pretty lg:text-lg text-sm"
          style={{ letterSpacing: "0.09em" }}
        >
          <p>Participate and win exciting prizes, coupons , STEM Boxes and</p>
          <p>
            participation/winning Certificate. Every participant will get a
            discount coupon for
          </p>
          <p> our courses.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <Image src={FIRST_PRIZE} alt="1st" width={300} height={300} />
        <Image src={SECONED_PRIZE} alt="2nd" width={300} height={300} />
        <Image src={THIRD_PRIZE} alt="3rd" width={300} height={300} />
      </div>
      <div>
        <Card className="lg:w-[1320px] lg:h-[450px] bg-robo-romp-gradient">
          <CardContent className="grid lg:grid-cols-2 grid-cols-1 ml-5">
            <div className="mt-5">
              <Image
                src={PRIZE_MONEY}
                alt="Prizes image"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center lg:text-5xl text-white">
              <p>
                <b className="lg:text-6xl">Prizes</b> for everyone, in a total of
              </p>
              <p>
                worth INR <b className="lg:text-6xl">21,000+</b>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Prizes;
