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

/**
 * MobileFooter component renders a footer specifically designed for mobile view.
 * It contains navigation links to various sections of the e-commerce application.
 *
 * @component
 * @param {Props} props - The properties that are passed to the component.
 * @param {string} props.className - Additional class names to style the footer.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
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
