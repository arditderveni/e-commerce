"use client";

import {
  Bell,
  ChevronsUpDown,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";

import {
  AvatarComp,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { userInitials } from "@/lib/utils";
import Link from "next/link";

function SidebarUser({ user }: { user: User }) {
  const { isMobile } = useSidebar();

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
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenuComp>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground p-0"
            >
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
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
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
            <DropdownMenuGroup>
              {/* <DropdownMenuItem>
                <Settings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem> */}
              {profileMenu}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuComp>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

SidebarUser.displayName = "SidebarUser";

export default SidebarUser;
