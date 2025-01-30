"use client";

import { cn } from "@/lib/utils";
import React, { useImperativeHandle, useState } from "react";

type handleValueChangeType = ({
  value,
}: {
  value?: number;
  type: "add" | "subtract";
}) => void;

const QuantityButton: React.FC<QuantityButtonProps> = ({ ref }) => {
  const [quantity, setQuantity] = useState(0);

  const handleValueChange: handleValueChangeType = ({ value, type }) => {
    if (value) {
      return setQuantity(value);
    }

    if (type === "add") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  useImperativeHandle(ref, () => ({
    quantity,
    setQuantity,
  }));

  return (
    <div className="flex border-1 items-center">
      <button
        disabled={quantity === 0}
        onClick={() => handleValueChange({ type: "subtract" })}
        className={cn(
          `w-8 h-8 cursor-pointer bg-size`,
          quantity === 0 && "bg-size-none cursor-not-allowed"
        )}
      >
        -
      </button>
      <div id="product-quantity">{quantity}</div>
      <button
        onClick={() => handleValueChange({ type: "add" })}
        className={`w-8 h-8 cursor-pointer bg-size`}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
