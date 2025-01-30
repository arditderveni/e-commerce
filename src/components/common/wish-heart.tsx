"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState, useImperativeHandle, useEffect, useRef } from "react";

const WishHeart: React.FC<WishHeartProps> = ({
  wishListed,
  className,
  ref,
}) => {
  const { theme } = useTheme();

  const heartRef = useRef<SVGSVGElement>(null);

  const [value, setValue] = useState<boolean>(wishListed);

  useImperativeHandle(ref, () => ({
    wishListed: value,
    setWishListed: setValue,
  }));

  useEffect(() => {
    if (heartRef.current) {
      if (theme === "dark") {
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
  }, [theme, value]);

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
