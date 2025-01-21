"use client";
import React from "react";
import { useSidebar } from "../ui/sidebar";

interface Props {
  children: React.ReactNode;
}

const SidebarItem: React.FC<Props> = ({ children }) => {
  const { isMobile, toggleSidebar } = useSidebar();

  const handleClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;
