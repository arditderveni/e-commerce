"use client";

import { cn } from "@/lib/utils";
import React, { useImperativeHandle, useState } from "react";

type handleValueChangeType = ({
  value,
}: {
  value?: number;
  type: "add" | "subtract";
}) => void;

/**
 * QuantityButton component allows users to increase or decrease the quantity of a product.
 *
 * @component
 * @param {QuantityButtonProps} props - The props for the QuantityButton component.
 * @param {React.Ref} props.ref - A ref object to access the quantity and setQuantity methods.
 *
 * @returns {JSX.Element} The rendered QuantityButton component.
 *
 * @example
 * <QuantityButton ref={quantityRef} />
 *
 * @typedef {Object} QuantityButtonProps
 * @property {React.Ref} ref - A ref object to access the quantity and setQuantity methods.
 *
 * @typedef {Object} handleValueChangeType
 * @property {number} [value] - The value to set the quantity to.
 * @property {string} type - The type of change to make ("add" or "subtract").
 */
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
