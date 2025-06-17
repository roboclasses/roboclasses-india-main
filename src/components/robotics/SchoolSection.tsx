import React from "react";

import { JoinOurTeacherDialogDemo } from "@/demo/JoinOurTeacherDialogDemo";
import { FaSchool } from "react-icons/fa6";


const SchoolSection = () => {
  return (
    <div className="flex flex-row items-center justify-center lg:p-20 p-10 bg-custom-gradient relative text-white rounded-3xl">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:space-x-72 space-x-36">
      <div className="flex flex-col gap-5 text-white">
        <p className="font-bold lg:text-4xl text-2xl">Teachers join our team</p>
        <div className="space-y-2 lg:text-base text-sm" style={{ letterSpacing: "0.05em" }} >
          <p style={{ letterSpacing: "0.05em" }}>
            We are always looking for good teachers. Send us your details along with you CV
          </p>
          <p style={{ letterSpacing: "0.05em" }}> and we will get in touch with you.</p>
        </div>
        <div>
          <JoinOurTeacherDialogDemo />
        </div>
      </div>
      <FaSchool className="lg:h-52 h-32 lg:w-52 w-32 border-2 border-white p-4 rounded-full"/>
      </div>
    </div>
  );
};

export default SchoolSection;
