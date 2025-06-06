import * as React from "react";

import { DHRUV_YT, SUDAL_YT, TINUK_YT, VIVVAN_YT } from "@/constants/videos";

export function YoutubeSlides() {
  const Videos = [
    { id: 1, src: VIVVAN_YT, title: "Carnival Robotics project by Vivaan" },
    { id: 2, src: DHRUV_YT, title: "Robotics Car By Dhruv" },
    { id: 3, src: TINUK_YT, title: "Electronic robotic car by Tinuk" },
    { id: 4,src: SUDAL_YT, title: "Tik Tok game by Sudaleeshwar using Scratch programming"},
  ];

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-5 py-6">
      {Videos.map((video) => (
        <div className="bg-white rounded-lg shadow-md lg:p-6" key={video.title}>
          <iframe
            src={video.src}
            allowFullScreen
            title="YouTube video player - Roboclasses"
            sandbox="allow-popups allow-scripts allow-same-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            className="lg:w-full w-[150px] h-40 rounded"
          />
        </div>
      ))}
    </div>
  );
}
