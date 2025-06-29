"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const courses: { title: string; href: string }[] = [
  {
    title: "Robotics Courses",
    href: "/collections/robotics-courses",
  },
  {
    title: "Programming Courses",
    href: "/collections/programming-courses",
  },
  {
    title: "Online Courses",
    href: "/collections/online-courses",
  },
];

const aboutUs: { title: string; href: string }[] = [
  {
    title: "What's Trending",
    href: "/blogs/trending-blogs",
  },
  {
    title: "Community",
    href: "/pages/community",
  },
  {
    title: "Coding and Robotics Courses",
    href: "/pages/coding-and-robotics-courses",
  },
];

export function NavigationMenuDemo() {
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (href: string) => href === pathname;

  return (
    <NavigationMenu
      className="text-2xl text-slate-600 dark:text-slate-400"
      style={{ letterSpacing: "0.05em" }}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-bold",
                isActive("/") && "text-cyan-500"
              )}
            >
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "font-bold",
              isActive("/collections") && "text-cyan-500"
            )}
          >
            COURSES
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid lg:grid-cols-3 w-[400px] gap-3 p-4 md:w-[500px] lg:w-[900px]">
              {courses.map((course) => (
                <Link href={course.href} key={course.title}>
                  <ListItem
                    title={course.title}
                    className={cn(
                      "hover:text-white transition-transform duration-150 ease-in-out",
                      isActive(course.href) && "text-cyan-500"
                    )}
                  />
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/homeschooling" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-bold",
                isActive("/pages/homeschooling") && "text-cyan-500"
              )}
            >
              HOMESCHOOLING
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/school-college-enquiry" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-bold",
                isActive("/pages/school-college-enquiry") && "text-cyan-500"
              )}
            >
              SCHOOL/COLLEGE ENQUIRY
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "font-bold",
              (pathname.startsWith("/blogs") ||
                pathname.startsWith("/pages/community") ||
                pathname.startsWith("/pages/coding-and-robotics-courses")) &&
                "text-cyan-500"
            )}
          >
            ABOUT US
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[900px]">
              {aboutUs.map((about) => (
                <Link href={about.href} key={about.title}>
                  <ListItem
                    title={about.title}
                    className={cn(
                      "hover:text-white transition-transform duration-150 ease-in-out",
                      pathname === about.href && "text-cyan-500"
                    )}
                  />
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "font-bold",
                isActive("/pages/contact") && "text-cyan-500"
              )}
            >
              CONTACT US
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold">
            EXSISTING STUDENTS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[900px] text-right">
              <ListItem
                title="My Account"
                href={"#"}
                className="hover:text-white transition-transform duration-150 ease-in-out"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-l from-lime-500 to-cyan-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
