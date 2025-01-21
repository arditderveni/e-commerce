"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarMenu: FC<SidebarMenuProps> = ({ className, ref, ...props }) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
);
SidebarMenu.displayName = "SidebarMenu";

export default SidebarMenu;
