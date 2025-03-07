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

/**
 * Tooltip component that provides a tooltip functionality with customizable delay.
 *
 * @component
 * @param props - The properties object.
 * @param props.className - Optional class name for the tooltip content.
 * @param props.trigger - The element that triggers the tooltip.
 * @param props.children - The content to be displayed inside the tooltip.
 * @param props.delay - The delay in milliseconds before the tooltip is shown.
 *
 * @example
 * <Tooltip trigger={<button>Hover me</button>} delay={300}>
 *   Tooltip content
 * </Tooltip>
 */
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
