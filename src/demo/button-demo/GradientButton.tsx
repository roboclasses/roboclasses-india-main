import { Button } from "@/components/ui/button";
import { ButtonTypes } from "@/types/ButtonTypes";
import React from "react";

const GradientButton = ({ name, type, onClick, icon }: ButtonTypes) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className="flex gap-2 items-center h-12 bg-custom-gradient rounded-lg font-bold text-white shadow-md focus:text-accent-foreground"
       >
      {icon && <span>{icon}</span>}
      {name}
    </Button>
  );
};

export default GradientButton;
