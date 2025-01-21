import { cn } from "@/lib/utils";

import React from "react";

const ShadowWrapper: React.FC<WrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("m-4 p-4 shadow-md rounded-md", className)}>
      {children}
    </div>
  );
};

ShadowWrapper.displayName = "ShadowWrapper";

export default ShadowWrapper;
