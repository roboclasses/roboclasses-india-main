"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { WHATSAPP } from "@/constants/links";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Button
      type="button"
      onClick={() => window.open(WHATSAPP)}
      className="flex items-center gap-2 h-12 bg-white font-bold text-green-500 rounded-lg
       hover:bg-accent-foreground focus:bg-accent-foreground focus:text-green-500 transition-colors ease-in-out duration-300 shadow-md"
    >
      <span>
        <FaWhatsapp size={20} />
      </span>
      Talk to us
    </Button>
  );
};

export default WhatsAppButton;
