"use client";

import { cn } from "@/lib/utils";
import useCarousel from "./use-carousel";
import { FC } from "react";

const CarouselItem: FC<CarouselItemProps> = ({ className, ref, ...props }) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
};

CarouselItem.displayName = "CarouselItem";

export default CarouselItem;
