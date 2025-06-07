"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";

export function BreadcrumbDemo({ title }: alertTypes) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-gray-500">
        <BreadcrumbItem>
          <Link
            className=" font-semibold transition-colors hover:text-foreground dark:hover:underline dark:text-black"
            href="/"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link
            className="font-semibold transition-colors hover:text-foreground dark:hover:underline dark:text-black"
            href={'/blogs/trending-blogs'}
          >
            Blogs
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className='font-semibold'>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
