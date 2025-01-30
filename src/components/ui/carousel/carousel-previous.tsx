"use client";

import { Button } from "@/components/ui/button";
import useCarousel from "./use-carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { FC } from "react";

const CarouselPrevious: FC<CarouselButtonProps> = ({
  className,
  variant = "outline",
  size = "icon",
  ref,
  ...props
}) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};

CarouselPrevious.displayName = "CarouselPrevious";

export default CarouselPrevious;
