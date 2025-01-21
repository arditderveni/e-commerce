"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  className,
  ref,
  ...props
}) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
);
SidebarMenuItem.displayName = "SidebarMenuItem";

export default SidebarMenuItem;
