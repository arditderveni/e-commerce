import React, { useCallback, useRef } from "react";
import { HoverCard, QuantityButton, SizePicker, ColorPalette } from ".";
import { toast } from "sonner";
import { Button } from "../ui";
import { ImageSkeleton } from "../skeletons";

interface Props extends ProductCardProps {
  name: string;
}

const HomeProductCard: React.FC<Props> = ({
  name,
  sizes,
  image,
  addItem,
  id,
  price,
  colors,
  className,
}) => {
  const sizePickerRef: SizePickerRef = useRef({
    size: "M",
    setSize: (size: SizeTypes) => {
      console.log("Size : ", size);
    },
  });

  const quantityButtonRef: QuantityButtonRef = useRef({
    quantity: 0,
    setQuantity: (quantity) => {
      console.log("Quantity : ", quantity);
    },
  });

  const colorRef: ColorPaletteRef = useRef({
    color: "",
    setColor: (color: string) => {
      console.log("Color : ", color);
    },
  });

  const handleAddToCart = useCallback(() => {
    if (!quantityButtonRef.current.quantity) {
      toast.info("Please select quantity");
      return;
    }

    const item = {
      name,
      id,
      price,
      quantity: quantityButtonRef.current.quantity,
      size: sizePickerRef.current.size,
      image,
      color: colorRef.current.color,
    };
    addItem(item);
  }, [name, id, price, addItem, image]);

  return (
    <HoverCard
      {...{
        text: name,
        className,
        hoverChildren: (
          <div className="space-y-2">
            <div className="flex justify-center gap-10 items-center p-2  mt-auto">
              {sizes && <SizePicker sizes={sizes} ref={sizePickerRef} />}
              {colors && (
                <ColorPalette
                  colors={colors}
                  className="flex gap-2"
                  ref={colorRef}
                />
              )}
            </div>
            <div className="flex justify-center gap-10 items-center p-2  mt-auto">
              <QuantityButton ref={quantityButtonRef} />
              <Button onClick={handleAddToCart}>Add</Button>
            </div>
          </div>
        ),
      }}
    >
      <ImageSkeleton width={300} height={300} />
    </HoverCard>
  );
};

export default HomeProductCard;
