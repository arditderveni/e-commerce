"use client";
import { FC } from "react";
import useSidebar from "./useSidebar";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { PanelLeft } from "lucide-react";

const SidebarTrigger: FC<SidebarTriggerProps> = ({
  className,
  onClick,
  ref,
  ...props
}) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
SidebarTrigger.displayName = "SidebarTrigger";

export default SidebarTrigger;
