"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

export { default as PopoverContent } from "./popover-content";
export { Popover, PopoverTrigger, PopoverAnchor };
