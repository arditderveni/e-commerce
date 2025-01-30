import React from "react";
import { Skeleton } from "../ui";
import { User } from "lucide-react";

const HeaderUserSkeleton = () => {
  return (
    <div className="flex gap-2 items-center">
      <Skeleton className="h-8 w-8 rounded-lg">
        <User className="w-full h-full fill-accent" />
      </Skeleton>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-20 bg-accent" />

        <Skeleton className="h-3 w-16 bg-accent" />
      </div>
    </div>
  );
};

export default HeaderUserSkeleton;
