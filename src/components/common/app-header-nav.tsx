"use client";

import { useIsMobile } from "@/hooks";
// import { routes } from "@/lib/routes";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";

const AppHeaderNav: React.FC = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <nav className="flex space-x-4">
        {/* {routes.map((route, i) => (
          <Link
            href={route.path}
            key={`${route.title}-${i}`}
            className="text-lg"
          >
            {route.title}
          </Link>
        ))} */}
      </nav>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] rounded-lg"
        // side={isMobile ? "bottom" : "right"}
        side="bottom"
        align="start"
        sideOffset={0}
      > */}
      {/* <DropdownMenuGroup> */}
      {/* {routes.map((route, i) => (
            <Link
              href={route.path}
              key={`${route.title}-${i}`}
              className="text-lg"
            >
              <DropdownMenuItem>{route.title}</DropdownMenuItem>
            </Link>
          ))} */}
      {/* </DropdownMenuGroup> */}
      {/* </DropdownMenuContent> */}
    </DropdownMenu>
  );
};

AppHeaderNav.displayName = "AppHeaderNav";

export default AppHeaderNav;
