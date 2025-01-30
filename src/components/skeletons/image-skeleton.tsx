import React from "react";
import { Skeleton } from "../ui";
import { Image } from "lucide-react";

const ImageSkeleton = ({ className = "", style = {} }) => {
  return (
    <Skeleton className={className} style={style}>
      <Image className="stroke-accent w-full h-full" />
    </Skeleton>
  );
};

export default ImageSkeleton;
