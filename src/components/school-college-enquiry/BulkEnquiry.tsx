import { EnquiryFormDemo } from "@/demo/enquiry-demo/EnquiryFormDemo";
import React from "react";

const BulkEnquiry = () => {
  return (
    <div className="flex flex-col items-center lg:gap-20 gap-10 lg:p-20 p-10">
      <p className="lg:text-4xl text-2xl font-extrabold text-center">
        School/University (bulk) enquiry
      </p>
      <EnquiryFormDemo />
    </div>
  );
};

export default BulkEnquiry;
