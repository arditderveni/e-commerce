"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarGroup: FC<SidebarGroupProps> = ({ className, ref, ...props }) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
};
SidebarGroup.displayName = "SidebarGroup";

export default SidebarGroup;
