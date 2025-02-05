import { cn } from "@/lib/utils";
import React from "react";

const FlexContainer: React.FC<WrapperProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={cn(`p-4 flex flex-wrap gap-4`, className)}>{children}</div>
  );
};

FlexContainer.displayName = "FlexContainer";

export default FlexContainer;
