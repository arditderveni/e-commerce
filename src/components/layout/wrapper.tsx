import { cn } from "@/lib/utils";
import React from "react";

const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return <div className={cn(`p-4`, className)}>{children}</div>;
};

Wrapper.displayName = "Wrapper";

export default Wrapper;
