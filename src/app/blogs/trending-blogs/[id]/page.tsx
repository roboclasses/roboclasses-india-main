import React from "react";
import Image from "next/image";
import Link from "next/link";

import { PaginationDemo } from "@/demo/PaginationDemo";
import Data from "../blogsData.json";
import BlogsBanner from "@/components/trending-blogs/BlogsBanner";

import { FaComments } from "react-icons/fa6";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const details = Data.find((item) => item.id === Number(id));

  const currentIndex = Data.findIndex((item) => item.id === Number(id));

  const prevPost = Data[currentIndex - 1];
  const nextPost = Data[currentIndex + 1];

  if (!details) {
    return <p>Blog post not found</p>;
  }

  return (
    <div className="flex flex-col lg:gap-20 gap-10 lg:px-20 px-10 lg:py-10 py-5 bg-white space-y-8" key={details.id} >
      <BlogsBanner title={details.title} />
      <div className="flex flex-col items-center gap-10 lg:px-20">
        <Image
          src={details.src}
          alt={details.alt}
          width={900}
          height={900}
          className="rounded-lg"
        />
        <div className="flex flex-row gap-1">
          <p className="font-bold">{details.date} - </p>
          <Link
            href={"#"}
            className="hover:text-cyan-600 transition-colors flex flex-row items-center gap-1 font-bold"
          >
            <p>{details.comments}</p>
            <p>COMMENTS</p>
            <FaComments size={20} />
          </Link>
        </div>
        <hr className="border-gray-200 border-1 w-full" />
        <div className="flex flex-col gap-6 text-pretty text-gray-600">
          <p>{details.introduction}</p>
          <ol className="px-10 flex flex-col gap-4 items-center justify-center">
            {details.points.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
          <p className="text-justify">{details.conclusion}</p>
        </div>
        <hr className="border-gray-200 border-1 w-full" />
        <PaginationDemo
          hrefPrev={`/blogs/trending-blogs/${prevPost?.id}`}
          hrefNext={`/blogs/trending-blogs/${nextPost?.id}`}
        />
      </div>
    </div>
  );
};

export default page;
