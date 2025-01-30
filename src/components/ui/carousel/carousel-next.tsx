"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "..";
import useCarousel from "./use-carousel";
import { cn } from "@/lib/utils";
import { FC } from "react";

const CarouselNext: FC<CarouselButtonProps> = ({
  className,
  variant = "outline",
  size = "icon",
  ref,
  ...props
}) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};

CarouselNext.displayName = "CarouselNext";

export default CarouselNext;
