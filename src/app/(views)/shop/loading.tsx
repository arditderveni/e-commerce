import { GridContainer } from "@/components/layout";
import { ProductCardSkeleton } from "@/components/skeletons";
import React from "react";

const LoadingShop = () => {
  return (
    <GridContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </GridContainer>
  );
};

export default LoadingShop;
