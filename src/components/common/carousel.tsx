"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  CarouselComp,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrev,
} from "../ui";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

/**
 * Carousel component that displays a list of items in a sliding carousel format.
 *
 * @param  className - Additional class names for the carousel container.
 * @param  items - Array of items to be displayed in the carousel.
 * @param  itemClassName - Additional class names for each carousel item.
 * @param  orientation - Orientation of the carousel (e.g., horizontal or vertical).
 * @param  overflowVisible - Flag to determine if overflow content should be visible.
 * @param  sliderClassName - Additional class names for the slider.
 * @param  hasButtons - Flag to determine if navigation buttons should be displayed.
 *
 * @returns The rendered carousel component.
 */
const Carousel: React.FC<Carousel> = ({
  className,
  items,
  itemClassName,
  orientation,
  overflowVisible,
  sliderClassName,
  hasButtons,
}) => {
  return (
    <CarouselComp
      className={cn(className)}
      orientation={orientation}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent
        className="md:overflow-y-visible"
        overflowVisible={overflowVisible}
        sliderClassName={sliderClassName}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={`carousel-item-${index}`}
            className={cn(
              "sm:basis-1 md:basis-1/2 lg:basis-1/3",
              itemClassName
            )}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      {hasButtons && (
        <Fragment>
          <CarouselNext />
          <CarouselPrev />
        </Fragment>
      )}
    </CarouselComp>
  );
};

export default Carousel;
