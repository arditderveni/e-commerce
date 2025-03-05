import { useCallback } from "react";
import useCartContext from "./use-cart-context";

interface Params {
  item: CartItem;
}

/**
 * Custom hook to add an item to the cart.
 *
 * @param params - The parameters for the hook.
 * @param params.item - The item to be added to the cart.
 * @returns An object containing the `addToCart` function.
 * @returns returns.addToCart - Function to add the item to the cart.
 */
const useAddToCart = ({ item }: Params) => {
  const { addItem } = useCartContext();

  const addToCart = useCallback(() => {
    addItem(item);
  }, [item, addItem]);

  return { addToCart };
};

export default useAddToCart;
