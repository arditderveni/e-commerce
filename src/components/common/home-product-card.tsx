import React from "react";
import { HoverCard, ProductCardFooter } from ".";
import { ImageSkeleton } from "../skeletons";

interface Props extends ProductCardProps {
  name: string;
}

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
