"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export { default as DropdownMenuSubTrigger } from "./dropdown-menu-sub-trigger";
export { default as DropdownMenuSubContent } from "./dropdown-menu-sub-content";
export { default as DropdownMenuContent } from "./dropdown-menu-content";
export { default as DropdownMenuItem } from "./dropdown-menu-item";
export { default as DropdownMenuCheckboxItem } from "./dropdown-menu-checkbox-item";
export { default as DropdownMenuRadioItem } from "./dropdown-menu-radio-item";
export { default as DropdownMenuLabel } from "./dropdown-menu-label";
export { default as DropdownMenuSeparator } from "./dropdown-menu-separator";
export { default as DropdownMenuShortcut } from "./dropdown-menu-shortcut";
export {
  DropdownMenu as DropdownMenuComp,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
};
