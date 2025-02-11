import React from "react";
import { AvatarComp, AvatarFallback, AvatarImage } from "../ui";
import { userInitials } from "@/lib/utils";
interface Props {
  src: string;
  alt: string;
}

const Avatar: React.FC<Props> = ({ src, alt }) => {
  return (
    <AvatarComp className="h-8 w-8 rounded-lg">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="rounded-lg">
        {userInitials(alt)}
      </AvatarFallback>
    </AvatarComp>
  );
};

export default Avatar;
