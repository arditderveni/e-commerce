import { CarouselComp, CarouselContent, CarouselItem } from "../ui";
import { cn } from "@/lib/utils";

const Carousel: React.FC<Carousel> = ({
  className,
  items,
  itemClassName,
  orientation,
  overflowVisible,
  sliderClassName,
}) => {
  return (
    <CarouselComp className={cn(className)} orientation={orientation}>
      <CarouselContent
        className="overflow-visible"
        overflowVisible={overflowVisible}
        sliderClassName={sliderClassName}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={`carousel-item-${index}`}
            className={cn("md:basis-1/2 lg:basis-1/3", itemClassName)}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselComp>
  );
};

export default Carousel;
