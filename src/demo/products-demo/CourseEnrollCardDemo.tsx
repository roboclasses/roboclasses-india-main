"use client";

import { Card } from "@/components/ui/card";
import { ProductType } from "@/types/ProductTypes";
import RoundedButton from "../button-demo/RoundedButton";

export default function CourseEnrollCardDemo({enrolltitle, enrollclass, enrollbatch}:ProductType) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-3 rounded-t-lg">
          <h2 className="font-medium text-lg">
            {enrolltitle}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Includes Section */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Includes</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-black mr-2 mt-1 text-2xl font-bold">•</span>
                <span>{enrollclass}</span>
              </li>
              <li className="flex items-center">
                <span className="text-black mr-2 mt-1 text-2xl font-bold">•</span>
                <span>{enrollbatch}</span>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-200" />

          {/* Pricing Options */}
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="border-r border-gray-200 pr-4">
              <p className="text-sm text-gray-600 mb-1">Full payment</p>
              <h3 className="text-2xl font-bold mb-1">AED 2,160</h3>
              <p className="text-sm text-gray-500 mb-4">Was AED 2,340</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full">Enroll Now</Button>
            </div>

            <div className="pl-4">
              <p className="text-sm text-gray-600 mb-1">Installment</p>
              <h3 className="text-2xl font-bold mb-1">AED 540</h3>
              <p className="text-sm text-gray-500 mb-4">4 monthly payments</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full">Enroll Now</Button>
            </div>
          </div> */}

          <RoundedButton name="Register for a Trial Class" type="button"/>
        </div>
      </Card>
    </div>
  );
}
