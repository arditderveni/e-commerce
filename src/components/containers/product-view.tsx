"use client";

import React, { useEffect, useState } from "react";
import { ImageSkeleton } from "../skeletons";
import ProductDetails from "./product-details";
import { cn } from "@/lib/utils";

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
 * @param {object} props - The component props.
 * @param {string} props.className - Additional class names to style the component.
 *
 * @returns {JSX.Element} The rendered ProductView component.
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
    <div className={cn("flex gap-4 justify-between items-center", className)}>
      <ImageSkeleton className="flex-1 h-full" />
      <ProductDetails product={product} className="flex-1 h-full" />
    </div>
  );
};

export default ProductView;
