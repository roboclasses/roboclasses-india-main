import React from "react";
import { ButtonTypes } from "@/types/ButtonTypes";

const RoundedButton = ({ name, type, onClick, icon }: ButtonTypes) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="lg:py-3 lg:px-10 py-2 px-4 flex items-center gap-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 border-2 border-sky-500
       hover:text-white shadow-md transition-colors duration-300 ease-in-out font-bold">
      {icon && <span>{icon}</span>}
      {name}
    </button>
  );
};

export default RoundedButton;
