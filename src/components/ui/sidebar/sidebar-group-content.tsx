"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarGroupContent: FC<SidebarGroupContentProps> = ({
  className,
  ref,
  ...props
}) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
);
SidebarGroupContent.displayName = "SidebarGroupContent";

export default SidebarGroupContent;
