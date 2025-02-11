import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

export { default as TooltipContent } from "./tooltip-content";
export { TooltipProvider, Tooltip as TooltipComp, TooltipTrigger };
