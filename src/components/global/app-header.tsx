"use client";

import React from "react";
import { HeaderUser, ModeToggle } from "../common";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useIsMobile } from "@/hooks";

const Logo = () => <div className="text-xl font-bold">Logo</div>;

const navElCn =
  "hover:bg-header-accent transition-colors ease-linear duration-300 px-2 py-1 rounded flex-1";

const AppHeader: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <header
        className={cn(
          "flex w-full justify-between items-center p-4 bg-header text-header-foreground sticky top-0"
        )}
      >
        <Logo />
        <ModeToggle iconClassName="m-auto" />
      </header>
    );
  }

  return (
    <header
      className={cn(
        "flex w-full justify-between items-center p-4 bg-header text-header-foreground sticky top-0"
      )}
    >
      <div className="flex items-center space-x-4 w-fit-content">
        <Link href="/">
          <Logo />
        </Link>

        <Link href="/cart" className={cn(navElCn)}>
          Cart
        </Link>
        <Link href="/brands" className={cn(navElCn)}>
          Brands
        </Link>
        <Link href="/shop" className={cn(navElCn)}>
          Shop
        </Link>
        <Link href="/checkout" className={cn(navElCn)}>
          Checkout
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle iconClassName="m-auto" />
        {/* <div className="hover:underline transition-all">User Info</div> */}
        <HeaderUser
          user={{
            name: "John Doe",
            email: "jdoe@test.email",
            avatar: "https://randomuser.me/api/portraits",
            id: 1,
          }}
        />
      </div>
    </header>
  );
};

AppHeader.displayName = "AppHeader";

export default AppHeader;
