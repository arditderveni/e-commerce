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
} from "../common";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

/**
 * ProductCard component displays a product with its details and allows users to interact with it.
 *
 * @component
 * @param {ProductCardProps} props - The properties for the ProductCard component.
 * @param {string} props.name - The name of the product.
 * @param {number} props.price - The price of the product.
 * @param {string} props.image - The URL of the product image.
 * @param {string[]} props.colors - The available colors for the product.
 * @param {string[]} props.sizes - The available sizes for the product.
 * @param {string} props.description - The description of the product.
 * @param {string[]} props.ingredients - The ingredients of the product.
 * @param {string[]} props.features - The features of the product.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref} [props.ref] - Reference to the component.
 * @param {string} props.id - The unique identifier for the product.
 * @param {boolean} [props.wishListed=false] - Indicates if the product is wishlisted.
 * @param {string} props.variant - The variant of the product card (e.g., "shop").
 * @param {function} props.addItem - Function to add the product to the cart.
 *
 * @returns {JSX.Element} The rendered ProductCard component.
 */
const ProductCard: FC<ProductCardProps> = ({
  name,
  price,
  image,
  colors,
  sizes,
  description,
  ingredients,
  features,
  className,
  ref,
  id,
  wishListed = false,
  variant,
  addItem,
}) => {
  const router = useRouter();

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

  const goToProduct = useCallback(() => {
    localStorage.setItem(
      "product",
      JSON.stringify({
        name,
        price,
        image,
        id,
        colors,
        sizes,
        description,
        ingredients,
        features,
      })
    );

    router.push(`/shop/${id}`);
  }, [
    router,
    id,
    name,
    price,
    image,
    colors,
    sizes,
    description,
    ingredients,
    features,
  ]);

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
      <CardContent className="w-full cursor-pointer" onClick={goToProduct}>
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
