"use client";
import { FC } from "react";
import { Separator } from "../separator";
import { cn } from "@/lib/utils";

const SidebarSeparator: FC<SidebarSeparatorProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
};
SidebarSeparator.displayName = "SidebarSeparator";

export default SidebarSeparator;
