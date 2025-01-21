"use client";

import { cn } from "@/lib/utils";
import {
  Card as CardComponent,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FC, useCallback, useRef } from "react";
import ColorPalette from "./color-palette";
import Image from "next/image";
import StarRating from "./star-rating";
import SizePicker from "./size-picker";
import QuantityButton from "./quantity-button";
import { Button } from "../ui/button";

const ProductCard: FC<ProductCardProps> = ({
  name,
  price,
  image,
  colors,
  sizes,
  className,
  ref,
  id,
  addItem,
}) => {
  const starRatingRef = useRef({
    value: 0,
    setValue: (value: number) => {
      console.log("Value : ", value);
    },
  });

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
    <CardComponent
      ref={ref}
      className={cn("border-1 border-product-border", className)}
    >
      <CardContent>
        <Image src={image} alt={name} width={300} height={300} />
        <div className="flex align-middle justify-between">
          {colors && (
            <ColorPalette
              colors={colors}
              className="flex gap-2"
              ref={colorRef}
            />
          )}
          <StarRating rating={4} ratable={false} ref={starRatingRef} />
          <div>${price}</div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <QuantityButton ref={quantityButtonRef} />
        {sizes && <SizePicker sizes={sizes} ref={sizePickerRef} />}
        <Button onClick={handleAddToCart}>Add</Button>
      </CardFooter>
    </CardComponent>
  );
};

export default ProductCard;
