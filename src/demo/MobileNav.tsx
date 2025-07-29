"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LOGO } from "@/constants/Images";

const CoursesData = [
  { id: 1, href: "/collections/robotics-courses", title: "Robotics Courses" },
  {
    id: 2,
    href: "/collections/programming-courses",
    title: "Programming Courses",
  },
  { id: 3, href: "/collections/online-courses", title: "Online Courses" },
];

const AboutUsData = [
  { id: 1, href: "/blogs/trending-blogs", title: "What's Trending" },
  { id: 2, href: "/pages/community", title: "Community" },
  {
    id: 3,
    href: "/pages/coding-and-robotics-courses",
    title: "Coding and Robotics Courses",
  },
];

const MobileNavSheet = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the sheet when the pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Helper function to determine if a link is active
  const isActive = (href: string) => href === pathname;

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <GiHamburgerMenu
            size={25}
            className="font-bold text-slate-600 hover:text-black transition-colors duration-150 ease-in-out"
            title="Navigation Sheet"
          />
        </SheetTrigger>

        <SheetContent
          side={"left"}
          className="rounded-r-3xl transition-transform duration-300 ease-in-out"
        >
          <SheetHeader>
            <Link href={"/"} aria-label="Roboclasses Home">
              <Image
                src={LOGO}
                alt="robo-class-logo"
                width={132.43}
                height={39.51}
                className="w-32 lg:w-36 shadow-md dark:shadow-black object-contain"
                role="button"
                priority
              />
            </Link>
          </SheetHeader>
          <SheetDescription className="flex flex-col gap-10 mt-10 text-md font-bold">
            <Link
              href={"/"}
              className={cn(
                "border-b-2 border-slate-200 px-2 py-2 hover:rounded-lg hover:bg-custom-gradient hover:text-white focus:bg-custom-gradient focus:text-white transition-all duration-150 ease-in-out w-full text-left",
                isActive("/") && "text-cyan-500"
              )}
            >
              HOME
            </Link>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={cn(
                    "text-md font-bold hover:bg-gray-100 hover:rounded-lg px-2 transition-colors duration-150 ease-in-out",
                    pathname.startsWith("/collections") && "text-cyan-500"
                  )}
                >
                  COURSES
                </AccordionTrigger>
                <AccordionContent
                  className="flex flex-col ml-2 gap-6 font-medium"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {CoursesData.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "p-2 rounded-lg hover:bg-custom-gradient hover:text-white focus:bg-custom-gradient focus:text-white transition-all duration-150 ease-in-out",
                        isActive(item.href) && "text-cyan-500"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href={"/pages/homeschooling"}
              className={cn(
                "border-b-2 border-slate-200 px-2 py-2 hover:rounded-lg hover:bg-custom-gradient hover:text-white focus:bg-custom-gradient focus:text-white transition-all duration-150 ease-in-out w-full text-left",
                isActive("/pages/homeschooling") && "text-cyan-500"
              )}
            >
              HOMESCHOOLING
            </Link>

            <Link
              href={"/pages/school-college-enquiry"}
              className={cn(
                "border-b-2 border-slate-200 px-2 py-2 hover:rounded-lg hover:bg-custom-gradient hover:text-white focus:bg-custom-gradient focus:text-white transition-all duration-150 ease-in-out w-full text-left",
                isActive("/pages/school-college-enquiry") && "text-cyan-500"
              )}
            >
              SCHOOL/COLLEGE ENQUIRY
            </Link>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={cn(
                    "text-md font-bold hover:bg-gray-100 hover:rounded-lg px-2 transition-colors duration-150 ease-in-out",
                    (pathname.startsWith("/blogs") ||
                      pathname.startsWith("/pages/community") ||
                      pathname.startsWith(
                        "/pages/coding-and-robotics-courses"
                      )) &&
                      "text-cyan-500"
                  )}
                >
                  ABOUT US
                </AccordionTrigger>
                <AccordionContent
                  className="flex flex-col ml-2 gap-6 font-medium"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {AboutUsData.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "p-2 rounded-lg hover:bg-custom-gradient hover:text-white focus:bg-custom-gradient focus:text-white transition-all duration-150 ease-in-out",
                        isActive(item.href) && "text-cyan-500"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href={"/pages/contact"}
              className={cn(
                "border-b-2 border-slate-200 px-2 py-2 hover:rounded-lg hover:bg-custom-gradient hover:text-white focus:bg-custom-gradient focus:text-white transition-all duration-150 ease-in-out w-full text-left",
                isActive("/pages/contact") && "text-cyan-500"
              )}
            >
              CONTACT US
            </Link>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md font-bold hover:bg-gray-100 hover:rounded-lg px-2 transition-colors duration-150 ease-in-out">
                  EXSISTING STUDENTS
                </AccordionTrigger>
                <AccordionContent
                  className="flex flex-col ml-2 gap-6 font-medium"
                  style={{ letterSpacing: "0.05em" }}
                >
                  <Link
                    href={"#"}
                    className="p-2 rounded-lg hover:bg-custom-gradient hover:text-white focus:bg-custom-gradient focus:text-white transition-all duration-150 ease-in-out"
                  >
                    My Account
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavSheet;
