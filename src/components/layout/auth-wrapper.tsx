import { cn } from "@/lib/utils";
import React from "react";

const AuthWrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center h-screen w-screen`,
        className
      )}
    >
      {children}
    </div>
  );
};

AuthWrapper.displayName = "AuthWrapper";

export default AuthWrapper;
