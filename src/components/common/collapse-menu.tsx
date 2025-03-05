"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
  titleClassName?: string;
}

/**
 * CollapseMenu component renders a collapsible menu with a trigger and content.
 *
 * @param children - The content to be displayed inside the collapsible menu.
 * @param className - Additional class names to style the collapsible container.
 * @param title - The title to be displayed on the collapsible trigger.
 * @param titleClassName - Additional class names to style the title.
 *
 * @returns A collapsible menu component with a trigger that toggles the visibility of the content.
 */
const CollapseMenu: React.FC<Props> = ({
  children,
  className,
  title,
  titleClassName,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      {...{
        open,
        onOpenChange: () => setOpen(!open),
        className,
      }}
    >
      <CollapsibleTrigger
        className={cn(
          "flex items-center w-full justify-between",
          titleClassName
        )}
      >
        {title}{" "}
        <ChevronDown
          className={cn(
            "transition-transform duration-300",
            open ? "rotate-[-180deg]" : "rotate-0"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
};

export default CollapseMenu;
