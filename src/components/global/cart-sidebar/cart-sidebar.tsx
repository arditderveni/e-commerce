// import { ClearCartButton } from "@/components/common";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import React from "react";
import CartSidebarMenu from "./cart-sidebar-menu";

const CartSidebar: React.FC = () => {
  return (
    <Sidebar collapsible="icon" side="right" variant="inset">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Cart</SidebarGroupLabel>
          <SidebarGroupContent>
            <CartSidebarMenu />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default CartSidebar;
