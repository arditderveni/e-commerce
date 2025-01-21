"use client";

import { ColorPalette } from "@/components/common";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import useCartContext from "@/hooks/use-cart-context";
import Image from "next/image";
import React, { useMemo } from "react";

const CartSidebarMenu = () => {
  const { items } = useCartContext();

  const cartItems = useMemo(() => {
    return items.map((item) => (
      <SidebarMenuItem key={item.id}>
        <div className="flex justify-between">
          <Image src={item.image} alt={item.name} width={100} height={100} />
          <div className="flex gap-3 flex-wrap">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            <ColorPalette colors={[item.color]} />
          </div>
        </div>
      </SidebarMenuItem>
    ));
  }, [items]);

  return <SidebarMenu>{cartItems}</SidebarMenu>;
};

export default CartSidebarMenu;
