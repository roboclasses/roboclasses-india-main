
import type { Metadata } from "next";
import { Open_Sans, Comic_Neue } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/themes/ThemeProvider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";


const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "700"],
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic-neue",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coding and Robotics Courses for Kids",
  description: "Unlock your child potential with ROBO CLASSES - Coding and Robotics Courses for Kids.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${comicNeue.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}