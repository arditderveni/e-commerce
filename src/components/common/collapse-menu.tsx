"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Props for the CollapseMenu component.
 *
 * @interface Props
 * @property {React.ReactNode} children - The content to be displayed inside the collapse menu.
 * @property {string} [className] - Optional additional class names for the collapse menu container.
 * @property {string} title - The title of the collapse menu.
 * @property {string} [titleClassName] - Optional additional class names for the title element.
 */
interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
  titleClassName?: string;
}

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
