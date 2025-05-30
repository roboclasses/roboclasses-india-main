import React from "react";
import ThemesCard from "../../demo/roboromp-demo/ThemesCard";
import { ENV, HEALTH, JCB, TAXI, TRUCTOR } from "@/constants/Images";

const Themes = () => {
  const Data = [
    { id: 1, src: JCB, title: "Autonomous Robots" },
    { id: 2, src: HEALTH, title: "Health & Fitness" },
    { id: 3, src: ENV, title: "Save Environment" },
    { id: 4, src: TAXI, title: "Transportation" },
    { id: 5, src: TRUCTOR, title: "Human Robot Interaction" },
  ];

  return (
    <div className="flex flex-col gap-12 items-center p-20 ">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-4xl font-bold">Themes</p>
        <div className="flex flex-col gap-2 items-center lg:text-lg text-sm text-pretty" style={{letterSpacing: '0.09em'}}>
          <p>
            Select among these five inspiring themes and Brainstorm over
            emerging global
          </p>
          <p>
            issues and Build solution-oriented projects to Solve Real World
            Problems!
          </p>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-2 justify-center gap-6'>
        {Data.map((item) => (
          <ThemesCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Themes;
