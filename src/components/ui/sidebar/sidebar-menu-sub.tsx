"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

const SidebarMenuSub: FC<SidebarMenuSubProps> = ({
  className,
  ref,
  ...props
}) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
);
SidebarMenuSub.displayName = "SidebarMenuSub";

export default SidebarMenuSub;
