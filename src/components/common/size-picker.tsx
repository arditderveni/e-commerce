"use client";

import { cn } from "@/lib/utils";
import React, { useImperativeHandle, useState } from "react";

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
