"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

export { default as SelectContent } from "./select-content";
export { default as SelectItem } from "./select-item";
export { default as SelectLabel } from "./select-label";
export { default as SelectScrollDownButton } from "./select-scroll-down-button";
export { default as SelectScrollUpButton } from "./select-scroll-up-button";
export { default as SelectSeparator } from "./select-separator";
export { default as SelectTrigger } from "./select-trigger";
export { Select, SelectGroup, SelectValue };
