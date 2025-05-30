import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonTypes } from "@/types/ButtonTypes";

const WhiteButton = ({ name, type, onClick, icon }: ButtonTypes) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className="flex gap-2 items-center h-12 bg-transparent ring-2 ring-white rounded-lg text-white
       hover:bg-white hover:text-accent-foreground transition-colors duration-300 ease-in-out"
    >
      {icon && <span>{icon}</span>}
      {name}
    </Button>
  );
};

export default WhiteButton;
