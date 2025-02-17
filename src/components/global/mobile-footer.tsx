import { cn } from "@/lib/utils";
import {
  Home,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Trello,
} from "lucide-react";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
}

const MobileFooter: React.FC<Props> = ({ className }) => {
  return (
    <footer
      className={cn(
        "flex justify-around items-center mt-auto w-full h-16 p-2 shadow-lg max-w-screen",

        className
      )}
    >
      <Link href="/cart">
        <ShoppingCart />
      </Link>
      <Link href="/brands">
        <Trello />
      </Link>
      <Link href="/">
        <Home />
      </Link>
      <Link href="/shop">
        <ShoppingBag />
      </Link>
      <Link href="/settings">
        <Settings2 />
      </Link>
    </footer>
  );
};

export default MobileFooter;
