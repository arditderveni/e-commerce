"use client";

import React from "react";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const MobileSidebarTrigger: React.FC = () => {
  const { open, isMobile } = useSidebar();

  if (!isMobile || open) {
    return null;
  }

  return <SidebarTrigger />;
};

MobileSidebarTrigger.displayName = "MobileSidebarTrigger";

export default MobileSidebarTrigger;
