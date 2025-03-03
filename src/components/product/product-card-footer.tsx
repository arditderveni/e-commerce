"use client";

import React, { useCallback, useRef } from "react";
import { Button, CardFooter } from "../ui";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { SizePicker, ColorPalette, QuantityButton } from "../common";

interface Props extends ProductCardProps {
  name: string;
}

/**
 * ProductCardFooter component renders the footer section of a product card.
 * It includes size picker, color palette, quantity button, and an add to cart button.
 *
 * @component
 * @param {Props} props - The properties object.
 * @param {string} props.name - The name of the product.
 * @param {string[]} props.sizes - The available sizes for the product.
 * @param {string} props.image - The image URL of the product.
 * @param {function} props.addItem - The function to add the item to the cart.
 * @param {string} props.id - The unique identifier of the product.
 * @param {number} props.price - The price of the product.
 * @param {string[]} props.colors - The available colors for the product.
 * @param {string} [props.className] - Additional class names for styling.
 *
 * @returns {JSX.Element} The rendered ProductCardFooter component.
 */
const ProductCardFooter: React.FC<Props> = ({
  name,
  sizes,
  image,
  addItem,
  id,
  price,
  colors,
  className,
}) => {
  const sizePickerRef: SizePickerRef = useRef({
    size: "M",
    setSize: (size: SizeTypes) => {
      console.log("Size : ", size);
    },
  });

  const quantityButtonRef: QuantityButtonRef = useRef({
    quantity: 0,
    setQuantity: (quantity) => {
      console.log("Quantity : ", quantity);
    },
  });

  const colorRef: ColorPaletteRef = useRef({
    color: "",
    setColor: (color: string) => {
      console.log("Color : ", color);
    },
  });

  const handleAddToCart = useCallback(() => {
    if (!quantityButtonRef.current.quantity) {
      toast.info("Please select quantity");
      return;
    }

    const item = {
      name,
      id,
      price,
      quantity: quantityButtonRef.current.quantity,
      size: sizePickerRef.current.size,
      image,
      color: colorRef.current.color,
    };
    addItem(item);
  }, [name, id, price, addItem, image]);

  return (
    <CardFooter
      className={cn("space-y-2 p-0 pb-2 justify-between border-0", className)}
    >
      <div className="flex justify-center gap-10 items-center   mt-auto">
        {sizes && <SizePicker sizes={sizes} ref={sizePickerRef} />}
        {colors && (
          <ColorPalette colors={colors} className="flex gap-2" ref={colorRef} />
        )}
      </div>
      <div className="flex justify-center gap-10 items-center   mt-auto">
        <QuantityButton ref={quantityButtonRef} />
        <Button onClick={handleAddToCart}>Add</Button>
      </div>
    </CardFooter>
  );
};

export default ProductCardFooter;
