"use client";

import React, { Suspense } from "react";
import {
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AvatarComp, AvatarFallback, AvatarImage } from "../ui/avatar";
import { userInitials } from "@/lib/utils";
import {
  Bell,
  ChevronsUpDown,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks";
import { HeaderUserSkeleton } from "../skeletons";

interface Props {
  user: User;
}

const HeaderUser: React.FC<Props> = ({ user }) => {
  const isMobile = useIsMobile();

  const profileMenuItems = [
    {
      icon: Settings,
      title: "Settings",
      path: "/settings",
    },
    {
      icon: Bell,
      title: "Notifications",
      path: "/notifications",
    },
    {
      icon: UserCircle,
      title: "Account",
      path: "/account",
    },
  ];

  const profileMenu = profileMenuItems.map((item, i) => (
    <Link href={item.path} key={`${item.title}-${i}`}>
      <DropdownMenuItem>
        <item.icon />
        <span>{item.title}</span>
      </DropdownMenuItem>
    </Link>
  ));

  return (
    <DropdownMenuComp>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <Suspense fallback={<HeaderUserSkeleton />}>
          <AvatarComp className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-lg">
              {userInitials(user.name)}
            </AvatarFallback>
          </AvatarComp>
          {!isMobile && (
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          )}
        </Suspense>
        <ChevronsUpDown className="ml-auto size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        // side={isMobile ? "bottom" : "right"}
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <AvatarComp className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">
                {userInitials(user.name)}
              </AvatarFallback>
            </AvatarComp>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>{profileMenu}</DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuComp>
  );
};

HeaderUser.displayName = "HeaderUser";

export default HeaderUser;
