"use client";

import React, { useRef } from "react";
import {
  Accordion,
  ColorPalette,
  QuantityButton,
  SizePicker,
  StarRating,
} from "../common";
import { useAddToCart } from "@/hooks";
import { Button } from "../ui";
import { cn } from "@/lib/utils";
interface Props {
  product: Product;

  className?: string;
}

/**
 * Component for displaying detailed information about a product.
 *
 * @component
 * @param {Props} props - The properties object.
 * @param {Product} props.product - The product object containing details to display.
 * @param {string} [props.className] - Additional class names for styling.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <ProductDetails product={product} className="custom-class" />
 *
 * @typedef {Object} Props
 * @property {Product} product - The product object containing details to display.
 * @property {string} [className] - Additional class names for styling.
 *
 * @typedef {Object} Product
 * @property {string} name - The name of the product.
 * @property {string} description - The description of the product.
 * @property {number} price - The price of the product.
 * @property {string[]} sizes - The available sizes for the product.
 * @property {string[]} colors - The available colors for the product.
 * @property {string} ingredients - The ingredients of the product.
 * @property {string} features - The features of the product.
 * @property {string} id - The unique identifier of the product.
 * @property {string} image - The image URL of the product.
 */
const ProductDetails: React.FC<Props> = ({ product, className }) => {
  const { name, description, price, sizes, colors, ingredients, features } =
    product;

  const sizePickerRef: SizePickerRef = useRef({
    size: "M",
    setSize: (size: SizeTypes) => {
      console.log("Size : ", size);
    },
  });

  const quantityButtonRef: QuantityButtonRef = useRef({
    quantity: 0,
    setQuantity: (quantity: number) => {
      console.log("Quantity : ", quantity);
    },
  });

  const colorRef: ColorPaletteRef = useRef({
    color: "",
    setColor: (color: string) => {
      console.log("Color : ", color);
    },
  });

  const starRatingRef = useRef({
    value: 0,
    setValue: (value: number) => {
      console.log("Value : ", value);
    },
  });

  const { addToCart } = useAddToCart({
    item: {
      name,
      id: product.id,
      price,
      quantity: quantityButtonRef.current.quantity,
      size: sizePickerRef.current.size,
      image: product.image,
      color: colorRef.current.color,
    },
  });

  return (
    <div className={cn("flex flex-col gap-4 justify-between", className)}>
      <div className="space-y-2">
        <div className="flex gap-4 self-start">
          <h1 className="text-lg">{name}</h1>

          <StarRating rating={4} ratable={false} ref={starRatingRef} />
        </div>

        <div className="flex gap-3 items-center align-middle">
          <ColorPalette
            colors={colors as []}
            ref={colorRef}
            className="flex gap-2"
          />
          <SizePicker sizes={sizes as []} ref={sizePickerRef} />
          <QuantityButton ref={quantityButtonRef} />

          <Button onClick={addToCart}>Add to Cart</Button>
        </div>
        <div>${price}</div>
      </div>

      <Accordion
        {...{
          collapsible: true,
          type: "multiple",
          items: [
            {
              trigger: "Description",
              content: description,
            },
            {
              trigger: "Ingredients",
              content: ingredients,
            },
            {
              trigger: "Features",
              content: features,
            },
          ],
        }}
      />
    </div>
  );
};

export default ProductDetails;
