import React from "react";
import {
  TooltipComp,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
interface Props {
  className?: string;
  trigger: React.ReactNode | string;
  children: React.ReactNode | string;
  delay?: number;
}

const Tooltip: React.FC<Props> = ({
  className,
  trigger,
  children,
  delay = 500,
}) => {
  return (
    <TooltipProvider delayDuration={delay}>
      <TooltipComp>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent className={className}>{children}</TooltipContent>
      </TooltipComp>
    </TooltipProvider>
  );
};

export default Tooltip;
