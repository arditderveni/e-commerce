"use client";

import { cn } from "@/lib/utils";
import {
  Card as CardComponent,
  CardContent,
  CardFooter,
  Button,
  CardHeader,
} from "@/components/ui";
import { FC, useCallback, useRef } from "react";
import {
  ColorPalette,
  StarRating,
  SizePicker,
  QuantityButton,
  WishHeart,
} from ".";
import Image from "next/image";
import { toast } from "sonner";

const ProductCard: FC<ProductCardProps> = ({
  name,
  price,
  image,
  colors,
  sizes,
  className,
  ref,
  id,
  wishListed = false,
  variant,
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

  const heartRef: WishHeartRef = useRef({
    wishListed,
    setWishListed: (wishListed) => {
      console.log("WishListed : ", wishListed);
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
    <CardComponent
      ref={ref}
      className={cn("border-1 border-product-border", className)}
    >
      <CardHeader className="border-none justify-between align-middle">
        {name}
        {variant === "shop" ? (
          <WishHeart wishListed={wishListed} ref={heartRef} />
        ) : null}
      </CardHeader>
      <CardContent className="w-full">
        <Image src={image} alt={name} width={300} height={300} />
        <div className="flex align-middle justify-between">
          {colors && (
            <ColorPalette
              colors={colors}
              className="flex gap-2"
              ref={colorRef}
            />
          )}
          <StarRating rating={4} ratable={true} ref={starRatingRef} />
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
