import React, { ReactNode, useMemo } from "react";
import { Wrapper } from "../layout";
import { cn } from "@/lib/utils";
import { Carousel, HoverCard } from "../common";
interface Props {
  className?: string;
}

const BrandContainer: React.FC<Props> = ({ className }) => {
  const brands: ReactNode[] = useMemo(
    () => [
      <HoverCard key={1} className="w-full min-h-[300px]" text="Brand 1" />,
      <HoverCard key={2} className="w-full min-h-[300px]" text="Brand 2" />,
      <HoverCard key={3} className="w-full min-h-[300px]" text="Brand 3" />,
    ],
    []
  );

  return (
    <Wrapper className={cn(className)}>
      <Carousel items={brands} />
    </Wrapper>
  );
};

export default BrandContainer;
