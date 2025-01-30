"use client";

import React from "react";

import { cn } from "@/lib/utils";

const HoverCard: React.FC<HoverCardProps> = ({
  text,
  children,
  className,
  hoverChildren,
}) => {
  return (
    <div
      className={cn(
        "relative bg-card group w-fit p-4  rounded-lg cursor-pointer overflow-hidden",
        className
      )}
    >
      {children}
      <div className="absolute w-full bg-card left-1/2 -translate-x-1/2 bottom-0 translate-y-full text-white text-sm px-2 py-1 rounded transition-transform duration-300 group-hover:translate-y-0">
        {text}
        {hoverChildren}
      </div>
    </div>
  );
};

export default HoverCard;
