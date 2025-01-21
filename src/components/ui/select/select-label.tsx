"use client";

import { FC } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

const SelectLabel: FC<SelectLabelProps> = ({ className, ref, ...props }) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export default SelectLabel;
