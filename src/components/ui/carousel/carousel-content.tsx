"use client";

import { FC } from "react";
import useCarousel from "./use-carousel";
import { cn } from "@/lib/utils";

const CarouselContent: FC<CarouselContentProps> = ({
  className,
  ref,
  overflowVisible,
  sliderClassName,
  ...props
}) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className={cn(
        sliderClassName,
        overflowVisible ? "overflow-visible" : "overflow-hidden"
      )}
    >
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
};

CarouselContent.displayName = "CarouselContent";

export default CarouselContent;
