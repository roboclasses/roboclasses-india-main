import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const OrganizeCard = ({ src }: { src: string }) => {
  return (
    <Card className="bg-custom-gradient">
      <CardContent className="flex items-center justify-center mt-5">
        <Image src={src} alt="ROBO CLASSES logo" width={200} height={20} className='rounded-3xl p-2'/>
      </CardContent>
    </Card>
  );
};

export default OrganizeCard;
