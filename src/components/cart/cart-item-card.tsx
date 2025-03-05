import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import ColorPalette from "../common/color-palette";
import LabeledInfo from "../common/labeled-info";
interface Props {
  className?: string;
  item: CartItem;
}

/**
 * A component that displays a card for an item in the shopping cart.
 *
 * @component
 * @param props - The properties object.
 * @param props.className - Additional class names to apply to the card.
 * @param props.item - The item object containing details to display.
 * @param props.item.image - The URL of the item's image.
 * @param props.item.name - The name of the item.
 * @param props.item.color - The color of the item.
 * @param props.item.size - The size of the item.
 * @param props.item.price - The price of a single item.
 * @param props.item.quantity - The quantity of the item in the cart.
 * @returns The rendered CartItemCard component.
 */
const CartItemCard: React.FC<Props> = ({ className, item }) => {
  return (
    <Card
      className={cn(
        "flex-row gap-5 items-center p-4 border-1 border-product-border rounded-lg max-h-60",
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
