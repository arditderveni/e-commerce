import React from "react";
import { ProductCardFooter } from ".";
import { ImageSkeleton } from "../skeletons";
import { HoverCard } from "../common";

interface Props extends ProductCardProps {
  name: string;
}

/**
 * HomeProductCard component renders a product card with hover functionality.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the product.
 * @param {Array<string>} props.sizes - The available sizes for the product.
 * @param {string} props.image - The URL of the product image.
 * @param {Function} props.addItem - The function to add the item to the cart.
 * @param {string} props.id - The unique identifier for the product.
 * @param {number} props.price - The price of the product.
 * @param {Array<string>} props.colors - The available colors for the product.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {boolean} props.wishListed - Indicates if the product is wishlisted.
 * @param {string} props.description - The description of the product.
 *
 * @returns {JSX.Element} The rendered HomeProductCard component.
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
  return (
    <HoverCard
      {...{
        text: name,
        className,
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
