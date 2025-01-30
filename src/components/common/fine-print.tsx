import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
}

const FinePrint: React.FC<Props> = ({ className, children }) => {
  return <p className={cn("text-xs", className)}>{children}</p>;
};

export default FinePrint;
