"use client";
import React from "react";
import { useSidebar } from "../ui/sidebar";

interface Props {
  children: React.ReactNode;
}

/**
 * SidebarItem component that renders its children and handles sidebar toggle on mobile devices.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.children - The child elements to be rendered inside the SidebarItem.
 * @returns The rendered SidebarItem component.
 *
 * @example
 * <SidebarItem>
 *   <p>Item 1</p>
 * </SidebarItem>
 *
 * @remarks
 * This component uses the `useSidebar` hook to determine if the device is mobile and to toggle the sidebar.
 */
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
