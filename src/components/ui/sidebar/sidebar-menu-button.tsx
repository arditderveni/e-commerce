"use client";
import { Slot } from "@radix-ui/react-slot";
import useSidebar from "./useSidebar";
import { cn } from "@/lib/utils";
import sidebarMenuButtonVariants from "./sidebarMenuButtonVariants";
import { TooltipComp, TooltipContent, TooltipTrigger } from "../tooltip";
import { FC } from "react";

const SidebarMenuButton: FC<SidebarMenuButtonProps> = ({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <TooltipComp>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </TooltipComp>
  );
};

SidebarMenuButton.displayName = "SidebarMenuButton";

export default SidebarMenuButton;
