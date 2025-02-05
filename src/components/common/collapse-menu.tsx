"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
}

const CollapseMenu: React.FC<Props> = ({ children, className, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      {...{
        open,
        onOpenChange: () => setOpen(!open),
        className,
      }}
    >
      <CollapsibleTrigger className="flex items-center w-full justify-between">
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
