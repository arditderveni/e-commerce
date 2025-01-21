import { cn } from "@/lib/utils";
import React from "react";

const GridContainer: React.FC<WrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`,
        className
      )}
    >
      {children}
    </div>
  );
};

GridContainer.displayName = "GridContainer";

export default GridContainer;
