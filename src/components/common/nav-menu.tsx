import React from "react";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import {
  Bus,
  HandCoins,
  Lock,
  PackageCheck,
  UserCircle,
  WalletCards,
} from "lucide-react";
import {
  NavigationMenu,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";

const NavMenu: React.FC<NavMenuProps> = ({ pathname }) => {
  /**Add logic here to implement data fetching for the necessary nav menu items based on the current path
   * However in this case, we are using static data and we may not need to fetch data from the server
   * We can just use the static data to render the nav menu items due to the fact that this is a server-rendered component
   */

  const navItems: NavItems = {
    account: [
      {
        icon: UserCircle,
        label: "Profili",
        path: `/${pathname}`,
      },
      {
        icon: HandCoins,
        label: "Shpenzimet",
        path: `/${pathname}/expenses`,
        prefetch: true,
      },
      {
        icon: Bus,
        label: "Udhëtimet e mia",
        path: `/${pathname}/my-trips`,
        prefetch: true,
      },
    ],
    settings: [
      {
        icon: PackageCheck,
        label: `Preferencat`,
        path: `/${pathname}`,
      },
      {
        icon: WalletCards,
        label: "Mjetet e pagesës",
        path: `/${pathname}/payment-methods`,
      },
      {
        icon: Lock,
        label: "Siguria",
        path: `/${pathname}/security`,
      },
    ],
  };

  return (
    <NavigationMenu>
      {navItems?.[pathname].map((item, i) => (
        <NavigationMenuItem
          key={`${item.label}-${i}`}
          className={navigationMenuTriggerStyle()}
        >
          <Link
            href={item.path}
            prefetch={item.prefetch}
            passHref
            className="flex items-center gap-4"
          >
            <item.icon className="!w-[24px] !h-[24px]" />
            <span className="text-lg">{item.label}</span>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenu>
  );
};

NavMenu.displayName = "NavMenu";

export default NavMenu;
