import React from "react";
import { Skeleton } from "../ui";

const LoginSkeleton: React.FC = () => {
  return (
    <div className="p-4 flex flex-row max-w-[400px] flex-wrap space-y-4 border-1 border-card">
      <div className="space-y-2 w-full">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-full h-8" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-full h-8" />
      </div>

      <Skeleton className="w-32 h-8" />
    </div>
  );
};

export default LoginSkeleton;
