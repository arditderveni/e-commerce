import React from "react";
import { ProductCardFooter } from ".";
import { ImageSkeleton } from "../skeletons";
import { HoverCard } from "../common";
import { useRouter } from "next/navigation";
import { stringToSlug } from "@/lib/utils";

interface Props extends ProductCardProps {
  name: string;
}

/**
 * HomeProductCard component renders a product card with hover functionality.
 *
 * @param props - The properties object.
 * @param props.name - The name of the product.
 * @param props.sizes - The available sizes for the product.
 * @param props.image - The URL of the product image.
 * @param props.addItem - The function to add the item to the cart.
 * @param props.id - The unique identifier for the product.
 * @param props.price - The price of the product.
 * @param props.colors - The available colors for the product.
 * @param props.className - Additional class names for styling.
 * @param props.wishListed - Indicates if the product is wishlisted.
 * @param props.description - The description of the product.
 *
 * @returns The rendered HomeProductCard component.
 */
const HomeProductCard: React.FC<Props> = ({
  name,
  sizes,
  image,
  addItem,
  id,
  price,
  colors,
  className,
  wishListed,
  description,
}) => {
  const router = useRouter();

  return (
    <HoverCard
      {...{
        text: name,
        className,
        onClick() {
          router.push(`/shop/${stringToSlug(name)}`);
        },
        hoverChildren: (
          <ProductCardFooter
            {...{
              name,
              sizes,
              image,
              addItem,
              id,
              price,
              colors,
              // className,
              wishListed,
              description,
              variant: "home",
            }}
          />
        ),
      }}
    >
      <ImageSkeleton />
    </HoverCard>
  );
};

export default HomeProductCard;
