"use client";
import React from "react";
import { LOGO } from "@/constants/Images";
import "swiper/css";
import OrganizeCard from "@/demo/roboromp-demo/OrganizeCard";

const Organize = () => {
  const Data = [
    { id: 1, src: LOGO },
    { id: 2, src: LOGO },
    { id: 3, src: LOGO },
    { id: 4, src: LOGO },
  ];

  return (
    <div className="flex flex-col gap-10 items-center p-20 bg-custom-gradient text-white rounded-3xl">
      <p className="lg:text-4xl text-2xl font-bold">Organizers & Collaborators</p>
      <section>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
          {Data.map((item) => (
            <OrganizeCard src={item.src} key={item.id}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Organize;
