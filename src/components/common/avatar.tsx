import React from "react";
import { AvatarComp, AvatarFallback, AvatarImage } from "../ui";
import { cn, userInitials } from "@/lib/utils";
interface Props {
  src: string;
  alt: string;
  className?: string;
}

const Avatar: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <AvatarComp className={cn("h-8 w-8 rounded-lg", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="rounded-lg">
        {userInitials(alt)}
      </AvatarFallback>
    </AvatarComp>
  );
};

export default Avatar;
