"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * A React functional component that displays a card with hoverable content.
 *
 * @component
 * @param {HoverCardProps} props - The properties for the HoverCard component.
 * @param {string} props.text - The text to display inside the hoverable content.
 * @param {React.ReactNode} props.children - The children elements to display inside the card.
 * @param {string} [props.className] - Additional class names to apply to the card.
 * @param {React.ReactNode} [props.hoverChildren] - Additional elements to display inside the hoverable content.
 *
 * @example
 * ```tsx
 * <HoverCard text="Hover me!" className="custom-class">
 *   <p>Card Content</p>
 * </HoverCard>
 * ```
 *
 * @returns {JSX.Element} The rendered HoverCard component.
 */
const HoverCard: React.FC<HoverCardProps> = ({
  text,
  children,
  className,
  hoverChildren,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className={cn(
        "relative bg-card shadow-md group w-fit p-4 rounded-lg cursor-pointer overflow-hidden",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={cn(
          "absolute w-full bg-card left-0  bottom-0 translate-y-full text-sm px-2 py-1 rounded transition-transform duration-300 pointer-events-none group-hover:pointer-events-auto",
          hovered && "translate-y-0"
        )}
        // onMouseEnter={handleMouseEnter} // Keep hover active when interacting
        // onMouseLeave={handleMouseLeave} // Reset hover state when leaving content
      >
        {text}
        {hoverChildren}
      </div>
    </div>
  );
};

export default HoverCard;
