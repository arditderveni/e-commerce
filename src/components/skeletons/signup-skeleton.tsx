import React from "react";
import { Skeleton } from "../ui";

const LoginSkeleton: React.FC = () => {
  return (
    <div className="p-4 flex flex-row max-w-[400px] flex-wrap space-y-4 border-1 border-card">
      <div className="flex gap-4 align-middle items-center w-full">
        <div className="space-y-2 w-1/2">
          <Skeleton className="w-24 h-6 bg-accent" />
          <Skeleton className="w-full h-8 bg-accent" />
        </div>
        <div className="space-y-2 w-1/2">
          <Skeleton className="w-24 h-6 bg-accent" />
          <Skeleton className="w-full h-8 bg-accent" />
        </div>
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="w-24 h-6 bg-accent" />
        <Skeleton className="w-42 h-8 bg-accent" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="w-24 h-6 bg-accent" />
        <Skeleton className="w-42 h-8 bg-accent" />
      </div>

      <Skeleton className="w-32 h-8 bg-accent" />
    </div>
  );
};

export default LoginSkeleton;
