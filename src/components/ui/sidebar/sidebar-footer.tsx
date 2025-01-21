"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarFooter: FC<SidebarFooterProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
};
SidebarFooter.displayName = "SidebarFooter";

export default SidebarFooter;
