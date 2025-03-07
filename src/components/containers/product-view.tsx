"use client";

import React, { useEffect, useState } from "react";
import ProductDetails from "./product-details";
import { cn } from "@/lib/utils";
import { FlexContainer } from "../layout";
import ImageGallery from "./image-gallery";

interface Props {
  className?: string;
  slug: string;
}

const emptyProduct = {
  id: "",
  name: "",
  price: 0,
  image: "",
  colors: [],
  sizes: [],
  wishListed: false,
  description: "",
  ingredients: [],
  features: [],
};

/**
 * ProductView component displays the product details and an image skeleton.
 *
 * @component
 * @param  props - The component props.
 * @param  props.className - Additional class names to style the component.
 *
 * @returns The rendered ProductView component.
 *
 * @example
 * <ProductView className="custom-class" />
 *
 * @remarks
 * This component retrieves the product data from the local storage and sets it in the state.
 * It uses the `useEffect` hook to load the product data when the component mounts.
 */
const ProductView: React.FC<Props> = ({ className, slug }) => {
  const [product, setProduct] = useState<Product>(emptyProduct);

  useEffect(() => {
    const data = localStorage.getItem("product");
    if (data) {
      setProduct(JSON.parse(data));
    }
  }, [slug]);

  return (
    <FlexContainer
      className={cn(
        "gap-4 justify-between items-center flex-nowrap",
        className
      )}
    >
      <ImageGallery
        className="flex-1 h-full"
        images={[
          { src: "/test/ade/fasx", name: "prod 1", id: "11" },
          { src: "/test/ade/fasx", name: "prod 2", id: "12" },
          { src: "/test/ade/fasx", name: "prod 3", id: "13" },
          { src: "/test/ade/fasx", name: "prod 4", id: "14" },
        ]}
      />
      <ProductDetails product={product} className="flex-1 h-full" />
    </FlexContainer>
  );
};

export default ProductView;
