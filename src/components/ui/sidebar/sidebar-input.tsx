"use client";
import { cn } from "@/lib/utils";
import { Input } from "../input";
import { FC } from "react";

const SidebarInput: FC<SidebarInputProps> = ({ className, ref, ...props }) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  );
};
SidebarInput.displayName = "SidebarInput";

export default SidebarInput;
