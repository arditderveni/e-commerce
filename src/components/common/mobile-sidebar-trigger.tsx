"use client";

import React from "react";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

/**
 * MobileSidebarTrigger is a functional component that conditionally renders
 * the SidebarTrigger component based on the state of the sidebar and the device type.
 *
 * It uses the `useSidebar` hook to determine if the sidebar is open and if the device
 * is a mobile device. If the device is not mobile or the sidebar is already open,
 * this component returns null and does not render anything.
 *
 * @returns The SidebarTrigger component if the device is mobile and the sidebar is closed, otherwise null.
 */
const MobileSidebarTrigger: React.FC = () => {
  const { open, isMobile } = useSidebar();

  if (!isMobile || open) {
    return null;
  }

  return <SidebarTrigger />;
};

MobileSidebarTrigger.displayName = "MobileSidebarTrigger";

export default MobileSidebarTrigger;
