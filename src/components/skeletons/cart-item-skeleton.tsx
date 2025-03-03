import React from "react";
import { Card, Skeleton } from "../ui";
import { cn } from "@/lib/utils";
import ImageSkeleton from "./image-skeleton";
interface Props {
  className?: string;
}

const CartItemSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <Card
      className={cn(
        "flex-row gap-5  items-center p-4 border-1 border-product-border rounded-lg max-h-60",
        className
      )}
    >
      <ImageSkeleton className="rounded-md w-[120px] h-[120px]" />

      <div className="space-y-2">
        <div className="flex gap-3">
          <Skeleton className="w-20 h-6 bg-accent" />
          <Skeleton className="w-8 h-8 bg-accent" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Skeleton className="w-20 h-6 bg-accent" />
          <Skeleton className="w-16 h-6 bg-accent" />
          <Skeleton className="w-12 h-6 bg-accent" />
        </div>
      </div>
    </Card>
  );
};

export default CartItemSkeleton;
