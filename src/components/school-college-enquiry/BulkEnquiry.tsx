import { EnquiryFormDemo } from "@/demo/enquiry-demo/EnquiryFormDemo";
import React from "react";

const BulkEnquiry = () => {
  return (
    <div className="flex flex-col gap-20 justify-center p-20">
      <div className="flex flex-col gap-2 justify-center text-center ">
        <p className="text-4xl font-extrabold">School/University (bulk) enquiry</p>
      </div>
      <EnquiryFormDemo />
    </div>
  );
};

export default BulkEnquiry;
