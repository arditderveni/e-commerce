"use client";

import { cn } from "@/lib/utils";
import { FC, useImperativeHandle, useState } from "react";

const ColorPalette: FC<ColorPaletteProps> = ({ colors, className, ref }) => {
  const [color, setColor] = useState(colors[0]);

  useImperativeHandle(ref, () => ({
    color,
    setColor,
  }));

  return (
    <div className={className}>
      {" "}
      {colors.map((color, index) => (
        <div
          key={`${color}-${index}`}
          style={{ backgroundColor: color }}
          className={cn(
            `w-6 h-6 rounded-full hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out border-1 hover:scale-105`
          )}
          onClick={() => setColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
