'use client'

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedCourseText = ({ titles }: { titles: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change course text every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="h-[50px] relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={titles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="w-full text-xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-custom-gradient"
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
};

export default AnimatedCourseText;
