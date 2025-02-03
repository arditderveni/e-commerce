"use client";

import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FC } from "react";

const AccordionItem: FC<AccordionItemProps> = ({
  className,
  ref,
  ...props
}) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
