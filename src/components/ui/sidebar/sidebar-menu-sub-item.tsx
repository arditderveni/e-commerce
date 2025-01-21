"use client";
import { FC } from "react";

const SidebarMenuSubItem: FC<SidebarMenuSubItemProps> = ({ ref, ...props }) => (
  <li ref={ref} {...props} />
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

export default SidebarMenuSubItem;
