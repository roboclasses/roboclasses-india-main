import { Button } from "@/components/ui/button";
import { ButtonTypes } from "@/types/ButtonTypes";
import React from "react";

const CyanButton = ({ name, type, onClick, icon }: ButtonTypes) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className="flex items-center h-12 rounded-lg bg-cyan-500 text-white text-sm font-semibold hover:bg-accent-foreground
    hover:text-cyan-500 focus:bg-accent-foreground focus:text-cyan-500 transition-colors duration-300 ease-in-out shadow-md dark:shadow-none">
      {icon && <span>{icon}</span>}
      {name}
    </Button>
  );
};

export default CyanButton;
