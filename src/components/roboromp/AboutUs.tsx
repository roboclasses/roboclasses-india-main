import React from "react";

const AboutUs = ({ src }: { src: string }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 p-20 text-white bg-custom-gradient relative rounded-3xl">
      <div className="flex flex-col gap-8 justify-center mt-10">
        <p className="lg:text-4xl text-2xl font-bold text-center">About Robo Classes</p>
        <p className="lg:w-[650px] w-[300px]" style={{ letterSpacing: "0.05em" }}>
          Today, <b className="text-lg">in the 21st century</b>, not all schools
          teach futuristic skills and analytical thinking despite research
          indicating early years as the turning point where kids can learn any
          new skills. We are here to
          <b className="text-lg"> solve this major gap</b> in the requirements
          of the future. <b className="text-lg"> We prepare K12 kids </b> to
          learn Robotics, coding, STEM skills and prepare them for the next-gen
          challanges.
        </p>
      </div>
        <iframe
          src={src}
          allowFullScreen
          width={400}
          height={400}
          sandbox="allow-popups allow-scripts allow-same-origin"
          loading="lazy"
          className="lg:w-[600px] w-[250px] lg:h-[350px] h-[300px] rounded-sm"
        />
    </div>
  );
};

export default AboutUs;
