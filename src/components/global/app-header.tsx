import React from "react";
import { AppHeaderNav, HeaderUser, ModeToggle } from "../common";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = () => <div className="text-xl font-bold">Logo</div>;

const AppHeader: React.FC = () => {
  return (
    <header
      className={cn(
        "flex w-full justify-between items-center p-4 bg-header-background text-header-foreground sticky top-0"
      )}
    >
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Logo />
        </Link>
        <AppHeaderNav />
        <Link href="/cart">Cart</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/checkout">Checkout</Link>
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
