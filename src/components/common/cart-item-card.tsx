import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import ColorPalette from "./color-palette";
import LabeledInfo from "./labeled-info";
interface Props {
  className?: string;
  item: CartItem;
}

const CartItemCard: React.FC<Props> = ({ className, item }) => {
  return (
    <Card
      className={cn(
        "flex-row gap-5  items-center p-4 border-1 border-product-border rounded-lg max-h-60",
        className
      )}
    >
      <Image
        {...{
          src: item.image || "",
          alt: item.name,
          width: 120,
          height: 120,
          objectFit: "contain",
          className: "rounded-md",
        }}
      />
      <div className="space-y-2">
        <div className="flex gap-3">
          <h1 className="text-lg font-bold">{item.name}</h1>
          <ColorPalette colors={[item.color]} />
        </div>
        <div className="flex flex-wrap gap-2">
          <LabeledInfo label="Size" info={item.size as string} />
          <LabeledInfo label="Price" info={`$${item.price * item.quantity}`} />
          <LabeledInfo label="Quantity" info={`${item.quantity}`} />
        </div>
      </div>
    </Card>
  );
};

export default CartItemCard;
