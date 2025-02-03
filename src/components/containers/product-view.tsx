import React from "react";
import { ImageSkeleton } from "../skeletons";
import ProductDetails from "./product-details";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

const ProductView: React.FC<Props> = ({ product, className }) => {
  return (
    <div className={cn("flex gap-4 justify-between items-center", className)}>
      <ImageSkeleton className="flex-1 h-full" />
      <ProductDetails product={product} className="flex-1 h-full" />
    </div>
  );
};

export default ProductView;
