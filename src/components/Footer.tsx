"use client";
import {
  FB,
  IN,
  INSTA,
  LOGO,
  STEM,
  VISA,
  X,
  YOUTUBE,
} from "@/constants/Images";
import { FB_L, IN_L, INSTA_L, X_L, YT_L } from "@/constants/links";

import { FooterInput } from "@/demo/FooterInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const Data = [
    { src: IN, alt: "LinkedIn", link: IN_L },
    { src: FB, alt: "FaceBook", link: FB_L },
    { src: INSTA, alt: "InstaGram", link: INSTA_L },
    { src: X, alt: "X", link: X_L },
    { src: YOUTUBE, alt: "YouTube", link: YT_L },
  ];

  const supportData = [
    "Contact us",
    "Refund / cancellation policy",
    "Shipping policy",
    "Terms & conditions",
    "Privacy Policy",
  ];

  return (
    <div
      className="flex justify-center items-center bg-custom-gradient lg:p-20 p-10 text-white relative rounded-t-3xl"
      style={{ letterSpacing: "0.05em" }}
    >
      <div className="lg:flex hidden absolute top-0 right-0 w-36 h-36 bg-gray-200/20 rounded-bl-full "></div>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-20 gap-10 max-w-7xl">
        <div className="flex flex-col gap-6">
          <div>
            <Image src={LOGO} alt="roboclasses-logo" height={104} width={160} />
          </div>
          <p className="text-xs">
            Roboclasses offers STEM-accredited coding courses designed to
            empower learners. With engaging, hands-on lessons, our programs
            foster creativity and technical skills. Join our expert-led classes
            to master programming and shape your future in technology.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:mt-0 mt-16">
          <p className="lg:text-2xl text-xl font-semibold">Support</p>
          <div className="flex flex-col gap-2 lg:text-sm text-xs">
            {supportData.map((item) => (
              <div key={item}>
                <Link href={""} className="hover:underline transition-all">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="lg:text-2xl text-xl font-semibold">Company Info</p>
          <Link href={"#"} className="underline font-semibold lg:text-base text-sm">
            About Us
          </Link>
          <div className="flex flex-col gap-1 lg:text-sm text-xs">
            <p>Head Office: ISB Edtech FZE,Business</p>
            <p>Center,Sharjah Publishing City Free Zone,</p>
            <p>Sharjah, United Arab Emirates</p>
          </div>
          <div className="flex flex-col gap-1 lg:text-sm text-xs">
            <Link
              href="tel:+971 56 116 9470"
              className="flex lg:flex-row flex-col gap-1"
            >
              <b>Phone: </b>
              <p className="hover:underline transition-all">+971 56 116 9470</p>
            </Link>
            <Link
              href="tel:+971 56 116 9470"
              className="flex lg:flex-row flex-col gap-1"
            >
              <b>Whatsapp: </b>
              <p className="hover:underline transition-all">+971 56 116 9470</p>
            </Link>
            <Link
              href="mailto:support@roboclasses.com"
              className="flex lg:flex-row flex-col gap-1"
            >
              <b>Email: </b>
              <p className="hover:underline transition-all">
                support@roboclasses.com
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold lg:text-2xl text-xl mb-4">Accepted Cards</p>
          <div className="flex flex-col gap-4">
            <Image src={VISA} alt="roboclasses-logo" height={40} width={150} />
            <Image src={STEM} alt="roboclasses-logo" height={132} width={180} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="lg:text-lg text-base font-semibold">Follow us on</p>
            <div className="flex flex-row gap-2 items-center">
              {Data.map((item, index) => (
                <Image
                  onClick={() => window.open(item.link)}
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  height={25}
                  width={25}
                  role="button"
                />
              ))}
            </div>
            <p className="lg:text-sm text-xs">
              © ISB Edtech FZE - 2024, All rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden absolute bottom-0 left-0 w-36 h-36 bg-gray-200/20 rounded-tr-full"></div>
    </div>
  );
};

export default Footer;
