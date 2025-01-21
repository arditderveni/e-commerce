"use client";
import { useContext } from "react";
import SidebarContext from "./sidebar-context";

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

export default useSidebar;
