"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarHeader: FC<SidebarHeaderProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
};
SidebarHeader.displayName = "SidebarHeader";

export default SidebarHeader;
