"use client";

import { cn } from "@/lib/utils";
import { FC, useImperativeHandle, useState } from "react";
import { Tooltip } from "../common";
import { ChevronUp } from "lucide-react";

/**
 * ColorPalette component allows users to select a color from a given list of colors.
 * It displays the first three colors directly and the rest in a tooltip.
 *
 * @component
 *
 * @param {ColorPaletteProps} props - The properties for the ColorPalette component.
 * @param {string[]} props.colors - An array of color strings to be displayed in the palette.
 * @param {string} [props.className] - An optional className to apply to the container div.
 * @param {React.Ref} [props.ref] - A ref to access the current selected color and setColor function.
 *
 * @returns {JSX.Element} The rendered ColorPalette component.
 *
 * @example
 * ```tsx
 * const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
 *
 * <ColorPalette colors={colors} className="my-color-palette" ref={colorPaletteRef} />
 * ```
 */
const ColorPalette: FC<ColorPaletteProps> = ({ colors, className, ref }) => {
  const [color, setColor] = useState(colors[0]);

  useImperativeHandle(ref, () => ({
    color,
    setColor,
  }));

  const onColorPick = (color: string) => {
    const cIndex = colors.findIndex((c) => c === color);

    if (cIndex > 2) {
      colors.unshift(colors.splice(cIndex, 1)[0]);
    }

    setColor(color);
  };

  return (
    <div className={className}>
      {" "}
      {colors.slice(0, 3).map((c, index) => (
        <div
          key={`${c}-${index}`}
          style={{ backgroundColor: c }}
          className={cn(
            `w-6 h-6 rounded-full hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out border-1 border-foreground`,
            color === c ? "scale-120" : "hover:scale-105"
          )}
          onClick={() => onColorPick(c)}
        />
      ))}{" "}
      {colors.length > 3 ? (
        <Tooltip
          {...{
            trigger: <ChevronUp />,
            className: "w-fit space-y-2 !px-2 bg-accent",
            delay: 300,
          }}
        >
          {colors.slice(3).map((c, index) => (
            <div
              key={`${c}-${index}`}
              style={{ backgroundColor: c }}
              className={cn(
                `w-6 h-6 rounded-full hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out border-1 border-foreground hover:scale-105`
              )}
              onClick={() => onColorPick(c)}
            />
          ))}
        </Tooltip>
      ) : null}
    </div>
  );
};

export default ColorPalette;
