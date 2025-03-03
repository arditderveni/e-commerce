"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState, useImperativeHandle, useEffect, useRef } from "react";

/**
 * WishHeart component represents a heart icon that can be toggled to indicate
 * whether an item is wish-listed or not. It adapts its fill color based on the
 * current theme (dark or light) and the wish-listed state.
 *
 * @component
 * @param {boolean} wishListed - Initial state indicating if the item is wish-listed.
 * @param {string} className - Additional class names for styling the heart icon.
 * @param {React.Ref} ref - A ref to access the wish-listed state and setWishListed function.
 *
 * @returns {JSX.Element} The rendered heart icon component.
 */
const WishHeart: React.FC<WishHeartProps> = ({
  wishListed,
  className,
  ref,
}) => {
  const { resolvedTheme } = useTheme();

  const heartRef = useRef<SVGSVGElement>(null);

  const [value, setValue] = useState<boolean>(wishListed);

  useImperativeHandle(ref, () => ({
    wishListed: value,
    setWishListed: setValue,
  }));

  useEffect(() => {
    if (heartRef.current) {
      if (resolvedTheme === "dark") {
        if (value) {
          heartRef.current.style.fill = "white";
        } else {
          heartRef.current.style.fill = "transparent";
        }
      } else {
        if (value) {
          heartRef.current.style.fill = "black";
        } else {
          heartRef.current.style.fill = "transparent";
        }
      }
    }
  }, [resolvedTheme, value, heartRef]);

  return (
    <Heart
      className={cn(className)}
      // fill={fillCondition}
      onClick={() => setValue((prev) => !prev)}
      suppressHydrationWarning
      ref={heartRef}
    />
  );
};

export default WishHeart;
