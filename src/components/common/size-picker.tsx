"use client";

import { cn } from "@/lib/utils";
import React, { useImperativeHandle, useState } from "react";

/**
 * SizePicker component allows users to select a size from a list of available sizes.
 * It displays the sizes and handles the selection logic, including disabling sizes that are out of stock.
 *
 * @component
 * @param {SizesProps} props - The properties for the SizePicker component.
 * @param {Array<{ size: SizeTypes, stock: number }>} props.sizes - An array of size objects, each containing a size and its stock count.
 * @param {React.Ref} props.ref - A ref object to access the selected size and setSize function from the parent component.
 *
 * @returns {JSX.Element} The rendered SizePicker component.
 */
const SizePicker: React.FC<SizesProps> = ({ sizes, ref }) => {
  const [size, setSize] = useState<SizeTypes>("");

  useImperativeHandle(ref, () => ({
    size,
    setSize,
  }));

  const handlePickSize = (size: SizeTypes) => {
    if (sizes.find((s) => s.size === size)?.stock === 0) return;
    setSize(size);
  };

  if (sizes.every(({ stock }) => stock === 0)) {
    return (
      <div className="text-primary rounded-md bg-muted px-4 py-2">
        Out of stock
      </div>
    );
  }

  return (
    <div className="flex border-1">
      {sizes.map(({ size: prodSize, stock }) => (
        <div
          key={size + (Math.random() * 100).toString()}
          className={cn(
            `text-center content-center w-8 h-8 cursor-pointer bg-size`,
            stock === 0 && "bg-muted text-gray-500 cursor-not-allowed",
            size === prodSize ? "bg-size-active" : ""
          )}
          onClick={() => handlePickSize(prodSize)}
        >
          {prodSize}
        </div>
      ))}
    </div>
  );
};

export default SizePicker;
