import * as React from "react";

import { DHRUV_YT, SUDAL_YT, TINUK_YT, VIVVAN_YT } from "@/constants/videos";

const YoutubeSlides=()=> {
  const Videos = [
    { id: 1, src: VIVVAN_YT, title: "Carnival Robotics project by Vivaan" },
    { id: 2, src: DHRUV_YT, title: "Robotics Car By Dhruv" },
    { id: 3, src: TINUK_YT, title: "Electronic robotic car by Tinuk" },
    { id: 4,src: SUDAL_YT, title: "Tik Tok game by Sudaleeshwar using Scratch programming"},
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-6 py-10">
      {Videos.map((video) => (
        <div className="bg-white rounded-lg shadow-md p-2" key={video.title}>
          <iframe
            src={video.src}
            allowFullScreen
            title="YouTube video player - Roboclasses"
            sandbox="allow-popups allow-scripts allow-same-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            className="lg:w-[600px] w-[280px] lg:h-64 h-40 rounded"
          />
        </div>
      ))}
    </div>
  );
}

export default YoutubeSlides;
