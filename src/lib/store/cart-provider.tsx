"use client";

import { ReactNode, useEffect, useReducer } from "react";
import CartContext from "./cart-context";
import cartReducer from "./cart-reducer";

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const defaultCartState: CartState = {
    items: [],
    totalAmount: 0,
  };

  const getInitialCartState = () => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : defaultCartState;
    }
    return defaultCartState;
  };

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
    getInitialCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  useEffect(() => {
    // Sync state to localStorage on state updates
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
