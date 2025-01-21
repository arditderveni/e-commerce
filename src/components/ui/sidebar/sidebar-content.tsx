"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarContent: FC<SidebarContentProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  );
};
SidebarContent.displayName = "SidebarContent";

export default SidebarContent;
