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

const Carousel: React.FC<Carousel> = ({
  className,
  items,
  itemClassName,
  orientation,
  overflowVisible,
  sliderClassName,
  hasButtons,
}) => {
  // console.log("Progress : ", progress);

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
