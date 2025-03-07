import React, { ReactNode, useMemo } from "react";
import { Wrapper } from "../layout";
import { cn } from "@/lib/utils";
import { Carousel, HoverCard } from "../common";
interface Props {
  className?: string;
}

/**
 * BrandContainer component renders a carousel of brand hover cards.
 *
 * @component
 * @param props - The props for the BrandContainer component.
 * @param props.className - Additional class names to style the container.
 *
 * @returns The rendered BrandContainer component.
 *
 * @example
 * <BrandContainer className="custom-class" />
 */
const BrandContainer: React.FC<Props> = ({ className }) => {
  const brands: ReactNode[] = useMemo(
    () => [
      <HoverCard
        key={1}
        className="w-full min-h-[300px] border-1 border-hover-card"
        text="Brand 1"
      />,
      <HoverCard
        key={2}
        className="w-full min-h-[300px] border-1 border-hover-card"
        text="Brand 2"
      />,
      <HoverCard
        key={3}
        className="w-full min-h-[300px] border-1 border-hover-card"
        text="Brand 3"
      />,
    ],
    []
  );

  return (
    <Wrapper className={cn(className)}>
      <Carousel
        items={brands}
        overflowVisible
        sliderClassName="my-auto"
        hasButtons
      />
    </Wrapper>
  );
};

export default BrandContainer;
