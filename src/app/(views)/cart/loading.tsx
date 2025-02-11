import { GridContainer, Wrapper } from "@/components/layout";
import { CartItemSkeleton } from "@/components/skeletons";
import React from "react";

const LoadingCart: React.FC = () => {
  return (
    <Wrapper>
      <GridContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <CartItemSkeleton key={i} />
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default LoadingCart;
